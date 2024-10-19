import React, { useState } from 'react';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import ContentInput from './components/ContentInput';
import ProductListing from './components/ProductListing';
import { convertToProductListing } from './utils/converter';

function App() {
  const [productListing, setProductListing] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleConvert = async (content: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const listing = await convertToProductListing(content);
      setProductListing(listing);
    } catch (error) {
      console.error('Error converting content:', error);
      setError('Failed to convert content. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">ArjunWellness Product Converter</h1>
        <p className="text-gray-600">Convert social media content to Amazon product listings using Llama</p>
      </header>
      <main className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-center mb-6">
          <ShoppingCart className="text-blue-500 mr-2" />
          <ArrowRight className="text-gray-400" />
          <ShoppingCart className="text-green-500 ml-2" />
        </div>
        <ContentInput onConvert={handleConvert} isLoading={isLoading} />
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {isLoading && <p className="text-gray-600 mt-4">Analyzing content and generating listing, please wait...</p>}
        {productListing && <ProductListing listing={productListing} />}
      </main>
    </div>
  );
}

export default App;