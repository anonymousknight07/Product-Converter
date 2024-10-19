import React, { useState } from 'react';

interface SocialMediaInputProps {
  onConvert: (content: string) => void;
  isLoading: boolean;
}

const SocialMediaInput: React.FC<SocialMediaInputProps> = ({ onConvert, isLoading }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConvert(content);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <label htmlFor="socialMediaContent" className="block text-sm font-medium text-gray-700 mb-2">
        Social Media Content
      </label>
      <textarea
        id="socialMediaContent"
        rows={4}
        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Paste your social media content here..."
        required
      />
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        disabled={isLoading}
      >
        {isLoading ? 'Converting...' : 'Convert to Product Listing'}
      </button>
    </form>
  );
};

export default SocialMediaInput;