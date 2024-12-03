import React, { useState,useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import AlertLogin from './AlertLogin';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 1000);
      return () => clearTimeout(timer);
      
    }
  }, [showAlert, navigate]);

  const handleSubmit = async (e) => {
    setShowAlert(true);
    console.log('Login handleLogin called');
    onLogin();
  };

  return (
    <>
      <section className="">
        <div className="container pt-3 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 pb-4 text-center pt-4">
                  <h3 className="mb-5">Sign in</h3>
                  
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                        placeholder="Email"
                        required 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div className="form-check d-flex justify-content-start mb-4 p-0">
                      <a href="/register" className="register-link">Don't have an account?</a>
                    </div>

                    <button onClick={handleSubmit} className="btn btn-dark btn-lg btn-block" type="submit">
                      Sign In
                    </button>
                    {showAlert && <AlertLogin message="Welcome back! You have successfully logged in." duration={2000} />}
              
                  <hr className="my-4" />
                  <a className="btn btn-block" href="/auth/google" role="button">
                    <button className="btn btn-lg btn-outline-secondary btn-block" type="button">
                    <i className="fab fa-google" style={{
                          fontSize: '30px', 
                          background: 'linear-gradient(45deg, #4285F4, #DB4437, #F4B400, #0F9D58)', 
                          WebkitBackgroundClip: 'text', 
                          color: 'transparent', 
                          marginRight: '10px', 
                          verticalAlign: 'middle'
                        }}></i> 
                      Sign in with Google      </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Login;
