

import React, { useState } from "react";
import ProductCard from "../sub-components/ProductCard/productCard";
import "./product-component.scss";
import data from "../../../../public/data.json";

const ProductsComponent = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setSelectedType(event.target.value);
  };

  const handleBrandChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setSelectedBrand(event.target.value);
  };

  const filteredProducts = data.products.filter((product) => {
    const typeMatch = selectedType === "All" || product.type === selectedType;
    const brandMatch = selectedBrand === "All" || product.brand === selectedBrand;
    return typeMatch && brandMatch;
  });

  const types = [
    "All",
    "Basic Telephones",
    "Caller ID Telephones",
    "Speaker Phones",
    "Cordless Telephones",
  ];
  const brands = [
    "All",
    "Panasonic Telephones",
    "Lextel Telephones",
    "Beetel Telephones",
  ];

  return (
    <div className="main-container">
      <div className="title-div">{selectedType}</div>
      
      {/* Mobile Filters */}
      <div className="mobile-filters">
        <button 
          className="filter-toggle-btn"
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
        >
          Filters {isMobileFilterOpen ? '▲' : '▼'}
        </button>
        
        <div className={`mobile-filters-dropdown ${isMobileFilterOpen ? 'open' : ''}`}>
          <div className="mobile-filter-section">
            <label htmlFor="mobile-type">Type:</label>
            <select 
              id="mobile-type" 
              value={selectedType}
              onChange={handleTypeChange}
            >
              {types.map((type, index) => (
                <option key={`mobile-type-${index}`} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="mobile-filter-section">
            <label htmlFor="mobile-brand">Brand:</label>
            <select 
              id="mobile-brand" 
              value={selectedBrand}
              onChange={handleBrandChange}
            >
              {brands.map((brand, index) => (
                <option key={`mobile-brand-${index}`} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="filter-products-container">
        {/* Desktop Filters */}
        <div className="filter-container-main">
          <div className="filter-container">
            <h3>Filter By</h3>

            <div className="filter-section">
              <h4>Type</h4>
              {types.map((type, index) => (
                <div className="filter-option" key={`type-${index}`}>
                  <input
                    type="radio"
                    name="type"
                    id={`type-${index}`}
                    value={type}
                    checked={selectedType === type}
                    onChange={handleTypeChange}
                  />
                  <label htmlFor={`type-${index}`}>{type}</label>
                </div>
              ))}
            </div>

            <div className="filter-section">
              <h4>Brand</h4>
              {brands.map((brand, index) => (
                <div className="filter-option" key={`brand-${index}`}>
                  <input
                    type="radio"
                    name="brand"
                    id={`brand-${index}`}
                    value={brand}
                    checked={selectedBrand === brand}
                    onChange={handleBrandChange}
                  />
                  <label htmlFor={`brand-${index}`}>{brand}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="product-cards-container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard
                key={index}
                imageUrl={product.imageUrl}
                modelName={product.modelName}
                description={product.description}
                originalPrice={product.originalPrice}
                discountedPrice={product.discountedPrice}
              />
            ))
          ) : (
            <div className="no-products-found">
              <div className="no-products-icon">🔍</div>
              <h3>No Products Found</h3>
              <p>Try adjusting your filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsComponent;
