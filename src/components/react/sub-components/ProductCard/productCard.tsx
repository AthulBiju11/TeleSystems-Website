import React from 'react';
import "./productCard.scss";

interface ProductCardProps {
    imageUrl: string;
    id : string,
    modelName: string;
    description: string;
    originalPrice: number;
    discountedPrice: number;
    brand : string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, imageUrl, modelName, description, originalPrice, discountedPrice, brand }) => {

    const handleClick = () => {
        window.location.href = `/products/${id}`;
    }

    return (
        <div className="product-card" onClick={handleClick}>
            <div className="image-container" style={{backgroundImage : `url(${imageUrl})`}}>
                {/* <img src={imageUrl} alt={modelName} /> */}
            </div>
            <div className="product-info">
                <h2 className="model-name">{modelName}</h2>
                <p className="brand">{brand.split(" ")[0]}</p>
                <p className="description">{description}</p>
                <div className="price-container">
                    <span className="original-price">&#8377;{originalPrice.toFixed(2)}</span>
                    <span className="discounted-price">&#8377;{discountedPrice.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
