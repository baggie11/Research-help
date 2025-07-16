import express from 'express';
import cors from 'cors';
import axios from 'axios';
import xml2js from 'xml2js';
import dotenv from 'dotenv';

dotenv.config()

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

//function to simplify abstract using Gemini
async function simplifyText(text){
    const prompt = `Please simplify the following research abstract into 3-4 beginner-friendly sentences. Avoid technical terms:\n\n${text}`;
    try{
        const response = await axios.post(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
            {
                contents : [{parts : [{text : prompt}]}]
            },
            {
                params : {key : GEMINI_API_KEY}
            }
        );
        return response.data.candidates?.[0].content?.parts?.[0]?.text || "No summary returned";
    }catch(error){
        console.error("GEMINI API error:",error.message);
        return "Could not generate simplified summary";
    }
}

export async function getPapers(req,res){
    const query = req.query.query|| "";
    const maxResults = parseInt(req.query.max_results) || 5;

    const apiUrl = "http://export.arxiv.org/api/query";
    const params = {
        search_query : `all:${query}`,
        start : 0,
        max_results : maxResults,
        sortBy : "submittedDate",
        sortOrder : "descending"
    };

    try{
        const {data : xml} = await axios.get(apiUrl,{params});
        const parsed = await xml2js.parseStringPromise(xml, { explicitArray: false });
        const entries = parsed.feed.entry || [];

        const papers = await Promise.all(
            (Array.isArray(entries) ? entries :[entries]).map(async(entry,index)=> {
                const title = entry.title.trim();
                const summary = entry.summary.trim();
                const authors = Array.isArray(entry.author)
                ? entry.author.map(a => a.name).join(", ")
                :entry.author.name;
                const categories = Array.isArray(entry.category)
          ? entry.category.map(c => c.$.term).join(", ")
          : entry.category?.$.term || "";
          const pdfLink = (entry.link || []).find(l => l.$?.title === "pdf")?.$.href || entry.id;
          const simplified = await simplifyText(summary);

          return {
            id: index + 1,
            title,
            authors,
            topics: categories,
            abstract: summary,
            short_summary: simplified,
            published: entry.published,
            url: entry.id,
            pdfUrl: pdfLink
          }

            })
        );
        res.json(papers);
    }catch(error){
        console.error("Error fetching papers:",error.message);
        res.status(500).json({error:error.message});
    }
}
