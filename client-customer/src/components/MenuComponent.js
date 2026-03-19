import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      txtKeyword: ''
    };
  }
  render() {
    const cates = this.state.categories.map((item) => {
      return (
        <li key={item._id} style={{ display: 'inline-block' }}>
          <Link to={'/product/category/' + item._id} style={{
            display: 'block',
            padding: '10px 16px',
            textDecoration: 'none',
            color: '#333',
            fontWeight: '600',
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            borderRadius: '6px',
            transition: 'all 0.3s ease',
            letterSpacing: '0.5px',
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f0f0f0';
              e.currentTarget.style.color = '#0066cc';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#333';
            }}
          >
            {item.name}
          </Link>
        </li>
      );
    });
    
    return (
      <nav style={{
        background: 'white',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        borderBottom: '2px solid #f0f0f0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          flexWrap: 'wrap',
        }}>
          {/* Logo/Home */}
          <div style={{ minWidth: 'fit-content' }}>
            <Link to='/' style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #0066cc 0%, #ff6b35 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}>
              ShoppingOnline
            </Link>
          </div>

          {/* Menu Items */}
          <ul style={{
            display: 'flex',
            gap: '5px',
            margin: 0,
            padding: 0,
            listStyle: 'none',
            flex: 1,
            flexWrap: 'wrap',
          }}>
            <li style={{ display: 'inline-block' }}>
              <Link to='/' style={{
                display: 'block',
                padding: '10px 18px',
                textDecoration: 'none',
                color: 'white',
                fontWeight: '700',
                fontSize: '0.95rem',
                textTransform: 'uppercase',
                borderRadius: '6px',
                transition: 'all 0.3s ease',
                letterSpacing: '0.5px',
                background: 'linear-gradient(135deg, #0066cc 0%, #0052a3 100%)',
                boxShadow: '0 2px 8px rgba(0, 102, 204, 0.2)',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #004999 0%, #003471 100%)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 102, 204, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #0066cc 0%, #0052a3 100%)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 102, 204, 0.2)';
                }}
              >
                🏠 Home
              </Link>
            </li>
            {cates}
            <li style={{ display: 'inline-block' }}>
              <Link to='/gmap' style={{
                display: 'block',
                padding: '10px 16px',
                textDecoration: 'none',
                color: '#333',
                fontWeight: '600',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                borderRadius: '6px',
                transition: 'all 0.3s ease',
                letterSpacing: '0.5px',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f0f0f0';
                  e.currentTarget.style.color = '#0066cc';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#333';
                }}
              >
                Map
              </Link>
            </li>
          </ul>

          {/* Search Box */}
          <form style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            marginLeft: 'auto',
            minWidth: '250px',
          }} onSubmit={(e) => this.btnSearchClick(e)}>
            <input
              type="search"
              placeholder="Search products..."
              value={this.state.txtKeyword}
              onChange={(e) => { this.setState({ txtKeyword: e.target.value }) }}
              style={{
                flex: 1,
                padding: '10px 14px',
                border: '2px solid #e0e0e0',
                borderRadius: '6px',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
              }}
              onFocus={(e) => e.target.style.borderColor = '#0066cc'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
            <button
              type="submit"
              style={{
                padding: '10px 18px',
                background: '#0066cc',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.85rem',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#004999';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0066cc';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Search
            </button>
          </form>

          {/* Dark Mode Toggle */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            minWidth: 'fit-content',
          }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '500', color: '#666' }}>🌙 Dark</span>
            <label className="dark-mode-toggle">
              <input
                type="checkbox"
                onChange={(e) => this.ckbChangeMode(e)}
              />
              <div className="toggle-background"></div>
              <div className="toggle-circle"></div>
            </label>
          </div>
        </div>
      </nav>
    );
  }
  // event-handlers
  ckbChangeMode(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
  }
  btnSearchClick(e) {
    e.preventDefault();
    this.props.navigate('/product/search/' + this.state.txtKeyword);
  }
  componentDidMount() {
    this.apiGetCategories();
  }
  // apis
  apiGetCategories() {
    axios.get('/api/customer/categories').then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }
}
export default withRouter(Menu);
