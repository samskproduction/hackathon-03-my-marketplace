import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, './.env.local') });


const client = createClient({
  projectId: "vlsu19wp",
  dataset: "production",
  useCdn: false,
  token:"skCId6mBzzpblu9A6fhJSz82tqkvw5tLQJzPxyTPXdOmg0SZ5GThiII1EZHW9A9JxlFiBPl8uqC78wk0Xhup7bmZx9m5R0NwmYsEJj6iqYvrI49qc4E6lPqM3BuyG7IKFqdiOZIlTfUOETTqTbdh9gtIVHYt2QGp6qMnMZBO1EmkssPk1bkt",
  apiVersion: '2021-08-31',
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.image);

    if (imageId) {
      const document = {
        _type: 'product',
        title: product.name,
        description: product.description,
        productImage: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        features: product.features,
        dimensions: product.dimensions,
        category: product.category,
        price: product.price,
        tags: product.tags,
      };

      const createdProduct = await client.create(document);
      console.log(`Product ${product.title} uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product ${product.title} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

async function importProducts() {
  try {
    const response = await fetch('https://hackathon-apis.vercel.app/api/products');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

importProducts();