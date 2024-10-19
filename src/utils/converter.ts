import { LlamaModel, LlamaContext, LlamaChatSession } from 'node-llama-cpp';

const model = new LlamaModel({
  modelPath: './models/llama-2-7b-chat.gguf',
});
const context = new LlamaContext({ model });
const session = new LlamaChatSession({ context });

export async function convertToProductListing(content: string) {
  try {
    const prompt = `Analyze the following social media content and generate an Amazon product listing for a Smart Fitness Tracker:

${content}

Generate a JSON object with the following structure:
{
  "title": "Product title",
  "description": "Short product description",
  "price": "Price in USD",
  "features": ["Feature 1", "Feature 2", "Feature 3"],
  "imageUrl": "URL to a relevant product image from Unsplash"
}`;

    const response = await session.prompt(prompt);
    const generatedListing = JSON.parse(response.trim());
    return generatedListing;
  } catch (error) {
    console.error('Error in convertToProductListing:', error);
    throw new Error('Failed to convert content to product listing');
  }
}