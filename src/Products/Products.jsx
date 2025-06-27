import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductGallery = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="bg-bg-primary min-h-screen px-4 py-10">
      <h1 className="text-5xl font-display text-Black font-bold mb-15 text-center">
        🚀 Featured Products 🚀
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
