import React from 'react';
import { Eye } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, onViewDetails }) => {
    return (
        <div className="product-card group">
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

                {/* View Details Button - Shows on Hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button
                        onClick={() => onViewDetails(product)}
                        className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transform scale-95 group-hover:scale-100 transition-transform duration-300 hover:bg-primary-600 hover:text-white shadow-lg"
                    >
                        <Eye className="w-5 h-5" />
                        <span>View Details</span>
                    </button>
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

                {/* Action Buttons */}
                <div className="flex items-center gap-2 mt-4">
                    <button
                        onClick={() => onViewDetails(product)}
                        className="flex-1 border-2 border-primary-600 text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                        <Eye className="w-4 h-4" />
                        <span>View</span>
                    </button>

                    <button
                        onClick={() => onAddToCart(product)}
                        className="flex-1 btn-primary flex items-center justify-center space-x-2 text-sm"
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
                        <span>Add</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
