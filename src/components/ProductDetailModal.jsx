import { X } from 'lucide-react';

const ProductDetailModal = ({ product, isOpen, onClose, onAddToCart }) => {
    if (!isOpen || !product) return null;

    const handleAddToCart = () => {
        onAddToCart(product);
        onClose();
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideUp relative">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="sticky top-4 right-4 ml-auto z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors float-right"
                        aria-label="Close modal"
                    >
                        <X className="w-6 h-6 text-gray-600" />
                    </button>

                    <div className="grid md:grid-cols-2 gap-6 p-6 clear-both">
                        {/* Product Image */}
                        <div className="relative bg-gray-100 rounded-xl overflow-hidden">
                            <img
                                src={product.image_url}
                                alt={product.name}
                                className="w-full h-96 md:h-full object-cover hover:scale-105 transition-transform duration-500"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/500x500?text=Product+Image';
                                }}
                            />
                        </div>

                        {/* Product Details */}
                        <div className="flex flex-col justify-between">
                            <div>
                                {/* Product Name */}
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    {product.name}
                                </h2>

                                {/* Price */}
                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-primary-600">
                                        ${product.price}
                                    </span>
                                    <span className="text-gray-500 ml-2 line-through">
                                        ${(parseFloat(product.price) * 1.2).toFixed(2)}
                                    </span>
                                    <span className="ml-3 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                                        Save 20%
                                    </span>
                                </div>

                                {/* Description */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Description
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>

                                {/* Product Features */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        Key Features
                                    </h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-600">High quality materials</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-600">Fast and secure shipping</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-600">30-day money-back guarantee</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-600">24/7 customer support</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Product Info */}
                                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <span className="text-gray-500 block">Availability:</span>
                                            <span className="text-green-600 font-semibold">In Stock</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-500 block">SKU:</span>
                                            <span className="text-gray-900 font-semibold">PRD-{product.id.toString().padStart(4, '0')}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-500 block">Category:</span>
                                            <span className="text-gray-900 font-semibold">Electronics</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-500 block">Shipping:</span>
                                            <span className="text-gray-900 font-semibold">Free</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3 pt-4 border-t">
                                <button
                                    onClick={handleAddToCart}
                                    className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    Add to Cart
                                </button>
                                <button
                                    onClick={handleAddToCart}
                                    className="w-full border-2 border-primary-600 text-primary-600 py-4 px-6 rounded-lg hover:bg-primary-50 transition-colors duration-200 font-semibold"
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetailModal;
