import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../contexts/MyContext';


class Inform extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
      <div className="inform-bar">
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          flexWrap: 'wrap',
        }}>
          <div style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            fontSize: '0.95rem',
          }}>
            {this.context.token === '' ?
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Link to='/login' style={{
                  color: '#0066cc',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#004999'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#0066cc'}
                >Login</Link>
                <span style={{ color: '#999' }}> | </span>
                <Link to='/signup' style={{
                  color: '#0066cc',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#004999'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#0066cc'}
                >Sign-up</Link>
                <span style={{ color: '#999' }}> | </span>
                <Link to='/active' style={{
                  color: '#0066cc',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#004999'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#0066cc'}
                >Active</Link>
              </div>
              :
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ fontWeight: '600', color: '#333' }}>Hello <b style={{ color: '#0066cc' }}>{this.context.customer.name}</b></span>
                <span style={{ color: '#999' }}> | </span>
                <Link to='/home' onClick={() => this.lnkLogoutClick()} style={{
                  color: '#0066cc',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#004999'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#0066cc'}
                >Logout</Link>
                <span style={{ color: '#999' }}> | </span>
                <Link to='/myprofile' style={{
                  color: '#0066cc',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#004999'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#0066cc'}
                >My profile</Link>
                <span style={{ color: '#999' }}> | </span>
                <Link to='/myorders' style={{
                  color: '#0066cc',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#004999'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#0066cc'}
                >My orders</Link>
              </div>
            }
          </div>

          <div style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            fontSize: '0.95rem',
            fontWeight: '600',
          }}>
            <Link to='/mycart' style={{
              color: '#0066cc',
              textDecoration: 'none',
              fontWeight: '700',
              transition: 'all 0.3s ease',
              fontSize: '0.95rem',
            }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#004999'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#0066cc'}
            >🛒 My cart</Link>
            <span style={{ color: '#0066cc', background: '#fff3cd', padding: '2px 8px', borderRadius: '12px', fontWeight: '700' }}>
              {this.context.mycart.length}
            </span>
          </div>
        </div>
      </div>
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setCustomer(null);
    this.context.setMycart([]);
    localStorage.removeItem('customer_token');
  }
}
export default Inform;