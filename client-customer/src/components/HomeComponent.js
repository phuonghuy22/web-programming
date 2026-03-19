import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from './SliderComponent';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newprods: [],
      hotprods: []
    };
  }
  render() {
    const newprods = this.state.newprods.map((item) => {
      return (
        <Link key={item._id} to={'/product/' + item._id} style={{ textDecoration: 'none' }}>
          <div className="product-card">
            <div className="product-image-container">
              <img src={"data:image/jpg;base64," + item.image} alt={item.name} />
            </div>
            <div className="product-info">
              <h4 className="product-name">{item.name}</h4>
              <div className="product-price">${item.price}</div>
              <button style={{
                width: '100%',
                padding: '10px',
                background: 'linear-gradient(135deg, #0066cc 0%, #004999 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.85rem',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 102, 204, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                View Details
              </button>
            </div>
          </div>
        </Link>
      );
    });

    const hotprods = this.state.hotprods.map((item) => {
      return (
        <Link key={item._id} to={'/product/' + item._id} style={{ textDecoration: 'none' }}>
          <div className="product-card" style={{
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: '#ff6b35',
              color: 'white',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '0.75rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              zIndex: 10,
            }}>🔥 Hot</div>
            <div className="product-image-container">
              <img src={"data:image/jpg;base64," + item.image} alt={item.name} />
            </div>
            <div className="product-info">
              <h4 className="product-name">{item.name}</h4>
              <div className="product-price">${item.price}</div>
              <button style={{
                width: '100%',
                padding: '10px',
                background: 'linear-gradient(135deg, #ff6b35 0%, #fc4532 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.85rem',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 107, 53, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                View Details
              </button>
            </div>
          </div>
        </Link>
      );
    });

    return (
      <div>
        <Slider />

        {/* New Products Section */}
        <div style={{ padding: '60px 20px', background: '#fafafa' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 style={{ marginBottom: '10px' }}>🆕 New Arrivals</h2>
              <p style={{ color: '#999', fontSize: '1.05rem' }}>Check out our latest collection</p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '24px',
            }}>
              {newprods}
            </div>
          </div>
        </div>

        {/* Hot Products Section */}
        {this.state.hotprods.length > 0 && (
          <div style={{ padding: '60px 20px', background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, rgba(255, 214, 10, 0.05) 100%)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h2 style={{ marginBottom: '10px' }}>🔥 Trending Now</h2>
                <p style={{ color: '#999', fontSize: '1.05rem' }}>Don't miss these popular items</p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '24px',
              }}>
                {hotprods}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  componentDidMount() {
    this.apiGetNewProducts();
    this.apiGetHotProducts();
  }
  // apis
  apiGetNewProducts() {
    axios.get('/api/customer/products/new').then((res) => {
      const result = res.data;
      this.setState({ newprods: result });
    });
  }
  apiGetHotProducts() {
    axios.get('/api/customer/products/hot').then((res) => {
      const result = res.data;
      this.setState({ hotprods: result });
    });
  }
}
export default Home;