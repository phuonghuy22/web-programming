import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      sort: 'default',
    };
  }
  render() {
    const prods = this.state.products.map((item) => {
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
    
    return (
      <div style={{ padding: '40px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '10px', textAlign: 'center' }}>Product Catalog</h2>
          <p style={{ textAlign: 'center', color: '#999', marginBottom: '30px' }}>
            Discover our amazing collection
          </p>

          {/* Sort Options */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px',
            flexWrap: 'wrap',
            gap: '15px',
          }}>
            <div style={{ fontSize: '0.95rem', color: '#666' }}>
              Found <strong>{this.state.products.length}</strong> products
            </div>
            <select
              value={this.state.sort}
              onChange={(e) => {
                this.setState({ sort: e.target.value });
                this.cmbSortChange(e.target.value);
              }}
              style={{
                padding: '10px 14px',
                border: '2px solid #e0e0e0',
                borderRadius: '6px',
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                minWidth: '200px',
              }}
              onFocus={(e) => e.target.style.borderColor = '#0066cc'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            >
              <option value="default">------Sort by------</option>
              <option value="nameASC">Name (A → Z)</option>
              <option value="nameDESC">Name (Z → A)</option>
              <option value="priceASC">Price (Low → High)</option>
              <option value="priceDESC">Price (High → Low)</option>
            </select>
          </div>

          {/* Products Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
            padding: '0',
          }}>
            {prods}
          </div>

          {/* Empty State */}
          {this.state.products.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: '#999',
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📦</div>
              <h3 style={{ color: '#666' }}>No products found</h3>
              <p>Try adjusting your search or browse other categories</p>
            </div>
          )}
        </div>
      </div>
    );
  }
  // event-handlers
  cmbSortChange(sort) {
    if (sort === 'nameASC') {
      this.state.products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'nameDESC') {
      this.state.products.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sort === 'priceASC') {
      this.state.products.sort((a, b) => a.price - b.price);
    } else if (sort === 'priceDESC') {
      this.state.products.sort((a, b) => b.price - a.price);
    }
  }
  componentDidMount() { // first: /product/...
    const params = this.props.params;
    if (params.cid) {
      this.apiGetProductsByCatID(params.cid);
    } else if (params.keyword) {
      this.apiGetProductsByKeyword(params.keyword);
    }
  }
  componentDidUpdate(prevProps) { // changed: /product/...
    const params = this.props.params;
    if (params.cid && params.cid !== prevProps.params.cid) {
      this.apiGetProductsByCatID(params.cid);
    } else if (params.keyword && params.keyword !== prevProps.params.keyword) {
      this.apiGetProductsByKeyword(params.keyword);
    }
  }
  // apis
  apiGetProductsByCatID(cid) {
    axios.get('/api/customer/products/category/' + cid).then((res) => {
      const result = res.data;
      this.setState({ products: result });
    });
  }
  apiGetProductsByKeyword(keyword) {
    axios.get('/api/customer/products/search/' + keyword).then((res) => {
      const result = res.data;
      this.setState({ products: result });
    });
  }
}
export default withRouter(Product);