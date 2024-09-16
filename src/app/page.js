import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-900">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
          Welcome to Oonzoo Products
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Discover the latest products and their details. Start exploring now!
        </p>
      </div>

      <div className="relative flex flex-col items-center">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
          className="mb-6"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="absolute w-full h-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 opacity-60"></div>
          <div className="relative z-10 p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <Link href="/product/1">     
                View Product
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
