import { fetchProduct } from '@/api/api';

export async function generateMetadata({ params }) {
  const { id } = params;
  const product = await fetchProduct(id);

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
      url: `https://products.oonzoo.com/product/${id}`,
    },
  };
}

export default async function ProductPage({ params }) {
  const { id } = params;
  const product = await fetchProduct(id);

  if (!product) return <div className="text-center p-4 text-white">Product not found</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto bg-gray-800">
      <h1 className="text-3xl font-extrabold mb-6 text-white">{product.title}</h1>
      <img
        className="w-full h-auto rounded-lg shadow-lg mb-6"
        src={product.image}
        alt={product.title}
      />
      <p className="text-lg mb-4 text-white">{product.description}</p>
      <p className="text-xl font-semibold text-white">Price: ${product.price}</p>
      <p className="text-md text-white">Category: {product.category}</p>
      <div className="flex items-center mt-4 text-white">
        <span className="text-md font-semibold">Rating: {product.rating.rate}</span>
        <span className="text-sm ml-2">({product.rating.count} reviews)</span>
      </div>
    </div>
  );
}
