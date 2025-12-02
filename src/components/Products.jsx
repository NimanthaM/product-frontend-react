import React from 'react';
import ProductCard from './ProductCard';

const Products = ({ products, loading, onAddToCart, onViewDetails }) => {
    if (loading) {
        return (
            <section id="products" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                        Our Products
                    </h2>
                    <div className="flex justify-center items-center min-h-[400px]">
                        <div className="text-center">
                            <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-600 mb-4"></div>
                            <p className="text-gray-600 text-lg">Loading amazing products...</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (!products || products.length === 0) {
        return (
            <section id="products" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                        Our Products
                    </h2>
                    <div className="text-center py-16">
                        <svg
                            className="w-24 h-24 mx-auto text-gray-300 mb-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                            />
                        </svg>
                        <p className="text-gray-600 text-xl">No products found</p>
                        <p className="text-gray-500 mt-2">Try adjusting your search or check back later!</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="products" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Our Products
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Explore our curated collection of premium tech products and accessories
                    </p>
                    <div className="mt-4 flex items-center justify-center space-x-2">
                        <div className="w-12 h-1 bg-primary-600 rounded"></div>
                        <div className="w-3 h-1 bg-primary-400 rounded"></div>
                        <div className="w-3 h-1 bg-primary-300 rounded"></div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className="animate-slide-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <ProductCard
                                product={product}
                                onAddToCart={onAddToCart}
                                onViewDetails={onViewDetails}
                            />
                        </div>
                    ))}
                </div>

                {/* Results count */}
                <div className="text-center mt-12">
                    <p className="text-gray-600">
                        Showing <span className="font-semibold text-primary-600">{products.length}</span> products
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Products;
