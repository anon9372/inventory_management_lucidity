import React from "react";



const getProductMetrics = (productsWithIds) => {
            const totalProducts = productsWithIds.length;
            const totalValue = productsWithIds.reduce((acc, product) => acc + (product.price * product.quantity), 0);
            const outOfStock = productsWithIds.filter((product) => product.quantity === 0).length;
            const uniqueCategories = new Set(productsWithIds.map((product) => product.category)).size;
    
            const metricsArray = [
              { title: 'Total Products', value: totalProducts, icon: 'faCartShopping'  },
              { title: 'Total Value', value: `$${totalValue.toFixed(2)}`, icon: 'faDollarSign' },
              { title: 'Out of Stock', value: outOfStock, icon: 'faX' },
              { title: 'Total Categories', value: uniqueCategories, icon: 'faList' },
            ];

            return metricsArray
    
}

export default getProductMetrics;