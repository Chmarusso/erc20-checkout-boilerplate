import React from 'react';
import { PayButton } from './PayButton';

const ProductCard = ({ product }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden w-4/5 lg:w-2/5">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src={product.image} alt={product.name} />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.name}</div>
            <p className="mt-2 text-gray-500">${product.price}</p>
            <PayButton price={product.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;