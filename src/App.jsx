import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Products from './components/Products';
import Footer from './components/Footer';
import ProductDetailModal from './components/ProductDetailModal';
import { getAllProducts } from './services/api';
import './index.css';

function App() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartCount, setCartCount] = useState(0);
    const [error, setError] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fetch products from API
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            setError(null); // Clear any previous errors
            const data = await getAllProducts();

            if (data && data.length > 0) {
                setProducts(data);
                setFilteredProducts(data);
                setError(null); // Explicitly clear error on success
            } else {
                setError('No products found.');
            }
        } catch (err) {
            setError('Failed to load products. Please make sure the backend server is running.');
            console.error('Error fetching products:', err);
            setProducts([]);
            setFilteredProducts([]);
        } finally {
            setLoading(false);
        }
    };

    // Handle search functionality
    const handleSearch = (searchTerm) => {
        if (!searchTerm.trim()) {
            setFilteredProducts(products);
            return;
        }

        const filtered = products.filter(
            (product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    // Handle add to cart
    const handleAddToCart = (product) => {
        setCartCount((prevCount) => prevCount + 1);

        // Show a simple notification (you can enhance this with a toast library)
        const notification = document.createElement('div');
        notification.className = 'fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-up';
        notification.innerHTML = `
      <div class="flex items-center space-x-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span>${product.name} added to cart!</span>
      </div>
    `;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    };

    // Handle view product details
    const handleViewDetails = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    // Handle close modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProduct(null), 300); // Delay to allow animation
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header cartCount={cartCount} onSearch={handleSearch} />
            <Banner />

            {error && products.length === 0 && !loading && (
                <div className="container mx-auto px-4 py-8">
                    <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg">
                        <div className="flex items-center space-x-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <p className="font-semibold">Error Loading Products</p>
                                <p className="text-sm">{error}</p>
                                <button
                                    onClick={fetchProducts}
                                    className="mt-2 text-sm underline hover:no-underline"
                                >
                                    Try Again
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Products
                products={filteredProducts}
                loading={loading}
                onAddToCart={handleAddToCart}
                onViewDetails={handleViewDetails}
            />

            <Footer />

            {/* Product Detail Modal */}
            <ProductDetailModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onAddToCart={handleAddToCart}
            />
        </div>
    );
}

export default App;
