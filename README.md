# Product Application

This is a Next.js application that dynamically displays product details based on the product ID in the URL. The application supports Server-Side Rendering (SSR) to ensure proper HTML source generation and includes Open Graph metadata for rich URL previews on platforms like WhatsApp.

## Features

- **Dynamic Routing:** Display product details based on the product ID in the URL.
- **Server-Side Rendering (SSR):** Ensures that the HTML source contains the complete product information.
- **Open Graph Metadata:** Provides rich previews when URLs are shared on social platforms like WhatsApp.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn


Install dependencies:

npm install

Running the Application
Start the development server:

Using npm:
npm run dev
Or using yarn:
Copy code
yarn dev


Open your browser and navigate to:

http://localhost:3000/product/1


Folder Structure

app/
  product/
    [id]/
      page.js  # Dynamic route for displaying product details
lib/
  api.js      # API functions for fetching product data
public/
  favicon.ico # Application favicon

