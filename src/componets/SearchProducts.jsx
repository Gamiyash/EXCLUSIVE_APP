
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Allproducts from '../AllProducts/Allproducts'; // Component to display individual products
import Sidebar from './Sidebar';
import FilterComponent from './FilterComponet';

const ProductsPage = () => {
    const location = useLocation();
    const products = location.state?.products || [];
    const [filteredProducts, setFilteredProducts] = useState(products); // Get products from location state 

    const handleFilter = (filtered) => {
        setFilteredProducts(filtered);
    };

    return (
        <div>
            {products.length > 0 ? (
                <div className="product-list xl:flex-row xl:justify-normal xl:items-start flex flex-col justify-center items-center gap-0 xl:gap-6">
                    <div className='xl:fixed xl:left-0 xl:w-[21vw] xl:h-screen w-full overflow-x-auto pt-1 xl:pt-0 '><Sidebar /></div>
                    <div className="xl:ml-[14vw] xl:pl-5 flex-1 overflow-auto xl:p-3 pt-3">
                        <FilterComponent products={filteredProducts} onFilter={handleFilter} />
                        <div className="flex flex-wrap justify-around items-start gap-2 mt-5">
                            {filteredProducts.map((product) => (
                                <Allproducts key={product._id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <p>No products found</p>
            )}

        </div>
    );
};

export default ProductsPage;
