import React, { useState } from "react";

interface Product {
  id: string;
  imageUrl: string;
  modelName: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  type: string;
  brand: string;
  images: string[];
  colours: string[];
}

const ProductPage: React.FC<Product> = ({
  id,
  imageUrl,
  modelName,
  description,
  originalPrice,
  discountedPrice,
  type,
  brand,
  images,
  colours,
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Product Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={images[selectedImage]}
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {images.map((image, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`aspect-square rounded-lg overflow-hidden ${
                  selectedImage === idx ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold">{modelName}</h2>
            <h5 className="text-xl">{brand}</h5>
            <p className="text-gray-600 mt-">{description}</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold">&#8377;399</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Available Colours</span>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Colour guide
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {colours.map((colour, index) => (
                <button
                  key={index}
                  className={`min-w-[100px]  md:min-w-[100px] flex items-center gap-2 py-2 px-4 border rounded-md text-sm font-medium bg-slate-400
        ${
          selectedSize === colour
            ? "border-blue-500 bg-blue-50 text-blue-600"
            : "border-gray-300 text-gray-700 hover:border-gray-400"
        }`}
                >
                  <div
                    className="w-4 h-4 rounded-md shrink-0"
                    style={{ backgroundColor: colour }}
                  />
                  {colour}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col bg-red-500 rounded p-5 text-black h-auto">
            <div className="text-base md:text-lg">
              Hi, Currently we don't support online order placements.
            </div>
            <div className="text-lg md:text-xl font-bold py-2">
              Please Call / Whatsapp{" "}
              <span className="text-white">[91 9020562422]</span> to place your
              order.
            </div>
            <div className="text-base md:text-lg">
              Better yet, see us in person!
              <br />
              <span className="text-sm md:text-base">
                We love our customers, so feel free to visit during normal
                business hours.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
