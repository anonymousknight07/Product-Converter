import React from 'react';

interface ProductListingProps {
  listing: {
    title: string;
    description: string;
    price: string;
    features: string[];
    imageUrl: string;
  };
}

const ProductListing: React.FC<ProductListingProps> = ({ listing }) => {
  return (
    <div className="border rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">Generated Amazon Product Listing</h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <img src={listing.imageUrl} alt={listing.title} className="w-full rounded-lg" />
        </div>
        <div className="md:w-2/3 md:pl-6">
          <h3 className="text-xl font-semibold mb-2">{listing.title}</h3>
          <p className="text-gray-600 mb-4">{listing.description}</p>
          <p className="text-2xl font-bold text-green-600 mb-4">{listing.price}</p>
          <h4 className="font-semibold mb-2">Key Features:</h4>
          <ul className="list-disc pl-5 mb-4">
            {listing.features.map((feature, index) => (
              <li key={index} className="text-gray-700">{feature}</li>
            ))}
          </ul>
          <button className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;