import React, { useState } from 'react';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import Alert from './Alert';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, username, email, password });
    setShowAlert(true);
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <>
      <section >
        <div className="container  pt-3 py-5 ">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 pb-4 text-center pt-4">
                  <h3 className="mb-5">Sign Up</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-check d-flex justify-content-start mb-4 p-0">
                      <a href="/login" className="register-link">Already have an account?</a>
                    </div>
                    <Link to="/login" onClick={handleSubmit} className="btn btn-dark btn-lg btn-block" type="submit">
                       Sign Up
                    </Link>
                    {showAlert && <Alert message="Registered! Please Login" duration={2000} />}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Register;
