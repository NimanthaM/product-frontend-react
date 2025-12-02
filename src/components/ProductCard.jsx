import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="product-card">
            {/* Product Image */}
            <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/500x500?text=Product+Image';
                    }}
                />
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full font-bold shadow-lg">
                    ${parseFloat(product.price).toFixed(2)}
                </div>
            </div>

            {/* Product Details */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
                    {product.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[40px]">
                    {product.description}
                </p>

                {/* Price and Button */}
                <div className="flex items-center justify-between mt-4">
                    <div>
                        <span className="text-2xl font-bold text-primary-600">
                            ${parseFloat(product.price).toFixed(2)}
                        </span>
                    </div>

                    <button
                        onClick={() => onAddToCart(product)}
                        className="btn-primary flex items-center space-x-2 text-sm"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
