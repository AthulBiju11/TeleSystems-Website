import React, { useState } from 'react';
import ProductCard from "../sub-components/ProductCard/productCard";
import "./product-component.scss";
import data from "../../../../public/data.json";

const ProductsComponent = () => {
    const [selectedType, setSelectedType] = useState('All');
    const [selectedBrand, setSelectedBrand] = useState('All');

    const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedType(event.target.value);
    };

    const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedBrand(event.target.value);
    };

    const filteredProducts = data.products.filter(product => {
        const typeMatch = selectedType === 'All' || product.type === selectedType;
        const brandMatch = selectedBrand === 'All' || product.brand === selectedBrand;
        return typeMatch && brandMatch;
    });

    const types = ['All', 'Basic Telephones', 'Caller ID Telephones', 'Speaker Phones', 'Cordless Telephones'];
    const brands = ['All', 'Panasonic Telephones', 'Lextel Telephones', 'Beetel Telephones'];

    return (
        <div className="main-container">
            <div className="title-div">Current Product</div>
            <div className="filter-products-container">
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