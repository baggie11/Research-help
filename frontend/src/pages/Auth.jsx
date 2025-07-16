import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaPaperPlane, FaGoogle, FaGithub, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import '../styles/Auth.css';

const AuthComponent = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    remember: false,
    terms: false
  });
  const [message, setMessage] = useState({ text: '', type: '' });

  const toggleAuthMode = () => {
    setIsLoginMode(!isLoginMode);
    setMessage({ text: '', type: '' });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    if (isLoginMode) {
      // Login validation
      if (!formData.email || !formData.password) {
        showMessage('Please fill in all fields', 'error');
        return;
      }
      
      // Simulate login
      setTimeout(() => {
        showMessage('Login successful! Redirecting...', 'success');
        // Actual login logic would go here
      }, 1000);
    } else {
      // Signup validation
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        showMessage('Please fill in all fields', 'error');
        return;
      }
      
      if (formData.password !== formData.confirmPassword) {
        showMessage('Passwords do not match', 'error');
        return;
      }
      
      if (!formData.terms) {
        showMessage('Please accept the terms and conditions', 'error');
        return;
      }

      try{
        const response = await fetch('http://localhost:5000/api/auth/register',{
          method : 'POST',
          headers : {'Content-Type' : 'application/json'},
          body : JSON.stringify(formData)
        });

        const data = await response.json();

        if(response.ok){
          showMessage('Account created successfully!','success');
          localStorage.setItem('userToken',data.token);
        }
      }catch(error){
        showMessage('Something went wrong');
        console.error(error);
      }

      // Simulate signup
      setTimeout(() => {
        showMessage('Account created successfully! Please check your email to verify.', 'success');
        // Actual signup logic would go here
      }, 1000);
    }
  };

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 3000);
  };

  const socialLogin = (provider) => {
    showMessage(`Redirecting to ${provider} login...`, 'success');
    // Actual social login integration would go here
  };

  return (
    <>
      {/* Navbar */}


      {/* Auth Container */}
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1 className="auth-title">
              Welcome <span>{isLoginMode ? 'Back' : ''}</span>
            </h1>
            <p className="auth-subtitle">
              {isLoginMode ? 'Sign in to your account' : 'Join us and start your journey'}
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="auth-toggle">
            <button 
              className={`toggle-btn ${isLoginMode ? 'active' : ''}`} 
              onClick={() => setIsLoginMode(true)}
            >
              Sign In
            </button>
            <button 
              className={`toggle-btn ${!isLoginMode ? 'active' : ''}`} 
              onClick={() => setIsLoginMode(false)}
            >
              Sign Up
            </button>
          </div>

          {/* Messages */}
          {message.text && (
            <div className={`message ${message.type}`}>
              {message.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
              {message.text}
            </div>
          )}

          {/* Login Form */}
          {isLoginMode ? (
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  className="form-input" 
                  placeholder="Enter your email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    className="form-input" 
                    placeholder="Enter your password" 
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required 
                  />
                  <button 
                    type="button" 
                    className="password-toggle" 
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <div className="form-options">
                <div className="checkbox-wrapper">
                  <input 
                    type="checkbox" 
                    id="remember" 
                    name="remember"
                    checked={formData.remember}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <a href="#" className="forgot-link">Forgot password?</a>
              </div>
              <button type="submit" className="auth-button">Sign In</button>
            </form>
          ) : (
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Enter your full name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  className="form-input" 
                  placeholder="Enter your email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    className="form-input" 
                    placeholder="Create a password" 
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required 
                  />
                  <button 
                    type="button" 
                    className="password-toggle" 
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Confirm Password</label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type={showConfirmPassword ? 'text' : 'password'} 
                    className="form-input" 
                    placeholder="Confirm your password" 
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required 
                  />
                  <button 
                    type="button" 
                    className="password-toggle" 
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <div className="form-options">
                <div className="checkbox-wrapper">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    name="terms"
                    checked={formData.terms}
                    onChange={handleInputChange}
                    required 
                  />
                  <label htmlFor="terms">I agree to the Terms & Conditions</label>
                </div>
              </div>
              <button type="submit" className="auth-button">Create Account</button>
            </form>
          )}

         

          {/* Footer */}
          <div className="auth-footer">
            <p>
              {isLoginMode ? "Don't have an account?" : "Already have an account?"}
              <a href="#" onClick={toggleAuthMode}>
                {isLoginMode ? 'Sign up here' : 'Sign in here'}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthComponent;