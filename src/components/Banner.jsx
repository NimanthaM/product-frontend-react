import React from 'react';

const Banner = () => {
    const scrollToProducts = () => {
        const element = document.getElementById('products');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center animate-fade-in">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Welcome to Aahaas Ecommerce
                    </h2>
                    <p className="text-xl md:text-2xl mb-4 text-primary-100">
                        Discover Amazing Products at Unbeatable Prices
                    </p>
                    <p className="text-lg mb-8 text-primary-200 max-w-2xl mx-auto">
                        Shop the latest tech gadgets, accessories, and more. Quality products delivered right to your doorstep with exceptional customer service.
                    </p>
                    <button
                        onClick={scrollToProducts}
                        className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
                    >
                        <span>Shop Now</span>
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
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </button>
                </div>

                {/* Feature badges */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
                    <div className="text-center animate-slide-up">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
                        <p className="text-primary-200">Handpicked for excellence</p>
                    </div>

                    <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                        <p className="text-primary-200">Get it delivered quickly</p>
                    </div>

                    <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
                        <p className="text-primary-200">Shop with confidence</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
