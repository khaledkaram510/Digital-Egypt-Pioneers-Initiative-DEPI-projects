import { Link } from 'react-router-dom';

export default function Form() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Product Store</h1>
      <p className="text-gray-600 mb-8">Explore our fantastic range of products designed to meet your needs.</p>
      <Link to="/products" className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600">Go to Products</Link>
    </div>
  );
}
