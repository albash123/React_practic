import React from "react";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.2,
        boxShadow: "0 12px 50px rgba(0, 255, 213, 0.15)",
        transition: { duration: 0.3 },
      }}
      className=" rounded-3xl p-10 max-w-sm w-full bg-gradient-to-br from-[#0e0e1c] to-[#262672] border border-[#9cb92a] shadow-[0_0_30px_rgba(0,255,213,0.03)] hover:ring-2 hover:ring-[#806fcb] transition-all duration-300"
    >
      {/* Thumbnail with subtle zoom and glow effect */}
      <div className="relative overflow-hidden rounded-2xl mb-10">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-50  object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
        />

        {/* Like button (♥) */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-3 right-3 bg-[#ffffff1a] text-pink-500 text-xl p-2 rounded-full backdrop-blur-sm shadow-md cursor-pointer"
        >
          ♥
        </motion.div>
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg sm:text-xl text-white tracking-wide mb-1">
        {product.title}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-400 leading-relaxed mb-4 min-h-[60px]">
        {product.description.length > 100
          ? product.description.slice(0, 100) + "..."
          : product.description}
      </p>

      {/* Price and button */}
      <div className="flex items-center justify-between">
        <span className="text-[#ffffff] text-lg font-semibold">
          ${product.price}
        </span>
        <button className="px-4 py-2 bg-[#ff4ecd] hover:bg-pink-500 text-white font-medium rounded-xl transition duration-300 shadow-md shadow-pink-500/30 hover:shadow-pink-500/50">
          Buy this product
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
