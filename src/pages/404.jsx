import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-50 dark:bg-gray-900 transition-colors">
      <h1 className="text-6xl font-bold text-blue-600 dark:text-blue-400">
        404
      </h1>
      <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
