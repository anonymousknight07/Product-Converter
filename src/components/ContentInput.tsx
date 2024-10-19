import React, { useState } from 'react';

interface ContentInputProps {
  onConvert: (content: string) => void;
  isLoading: boolean;
}

const ContentInput: React.FC<ContentInputProps> = ({ onConvert, isLoading }) => {
  const [textContent, setTextContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (textContent) {
      onConvert(textContent);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <label htmlFor="textContent" className="block text-sm font-medium text-gray-700 mb-2">
          Enter Social Media Content
        </label>
        <textarea
          id="textContent"
          rows={6}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
          value={textContent}
          onChange={(e) => setTextContent(e.target.value)}
          placeholder="Paste your social media content here..."
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        disabled={isLoading || !textContent}
      >
        {isLoading ? 'Converting...' : 'Convert to Product Listing'}
      </button>
    </form>
  );
};

export default ContentInput;