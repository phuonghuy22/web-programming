import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import withRouter from '../utils/withRouter';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


class Login extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: ''
    };
  }
  render() {
    return (
      <div className="container-section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          maxWidth: '450px',
          width: '100%',
          background: 'white',
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '10px', color: '#0066cc' }}>Welcome Back</h1>
            <p style={{ color: '#999', fontSize: '0.95rem' }}>Sign in to your account</p>
          </div>

          <form onSubmit={(e) => this.btnLoginClick(e)}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.95rem', color: '#333' }}>
                Username
              </label>
              <input
                type="text"
                value={this.state.txtUsername}
                onChange={(e) => { this.setState({ txtUsername: e.target.value }) }}
                placeholder="Enter your username"
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => e.target.style.borderColor = '#0066cc'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.95rem', color: '#333' }}>
                Password
              </label>
              <input
                type="password"
                value={this.state.txtPassword}
                onChange={(e) => { this.setState({ txtPassword: e.target.value }) }}
                placeholder="Enter your password"
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => e.target.style.borderColor = '#0066cc'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '14px',
                  background: 'linear-gradient(135deg, #0066cc 0%, #004999 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                Login
              </button>
            </div>
          </form>

          <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid #e0e0e0' }}>
            <p style={{ margin: '16px 0 0 0', fontSize: '0.9rem', color: '#666' }}>
              <Link to='/resetpwd' style={{
                color: '#0066cc',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'color 0.3s ease'
              }}>
                Forgot your password?
              </Link>
            </p>
            <p style={{ margin: '12px 0 0 0', fontSize: '0.9rem', color: '#666' }}>
              Don't have an account?{' '}
              <Link to='/signup' style={{
                color: '#0066cc',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'color 0.3s ease'
              }}>
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
  // event-handlers
  btnLoginClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    if (username && password) {
      const account = { username: username, password: password };
      this.apiLogin(account);
    } else {
      // alert('Please input username and password');
      toast.warning('Please input username and password');
    }
  }
  // apis
  apiLogin(account) {
    axios.post('/api/customer/login', account).then((res) => {
      const result = res.data;
      if (result.success === true) {
        this.context.setToken(result.token);
        this.context.setCustomer(result.customer);
        toast.success('Welcome to ShoppingOnline'); 
        this.props.navigate('/home');
        localStorage.setItem('customer_token', result.token);
      } else {
        // alert(result.message);
        toast.error(result.message);
      }
    });
  }
}
export default withRouter(Login);