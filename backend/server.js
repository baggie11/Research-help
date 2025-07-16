import express from 'express';
import router from './routes/RecentRoute.js';
import cors from 'cors';


//initialize the express app
const app = express()
const PORT = 5000;

app.use(express.json())
app.use(cors())



//API routes
app.use("/api/recent",router);

app.get("/",(req,res) => {
    res.send("Hello");
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`)
})