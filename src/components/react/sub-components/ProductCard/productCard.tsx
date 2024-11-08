import React from 'react';
import "./productCard.scss";

interface ProductCardProps {
    imageUrl: string;
    modelName: string;
    description: string;
    originalPrice: number;
    discountedPrice: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, modelName, description, originalPrice, discountedPrice }) => {
    return (
        <div className="product-card">
            <div className="image-container" style={{backgroundImage : `url(${imageUrl})`}}>
                {/* <img src={imageUrl} alt={modelName} /> */}
            </div>
            <div className="product-info">
                <h2 className="model-name">{modelName}</h2>
                <p className="description">{description}</p>
                <div className="price-container">
                    <span className="original-price">${originalPrice.toFixed(2)}</span>
                    <span className="discounted-price">${discountedPrice.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
