import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex items-center gap-8">
      <span className="text-xl font-bold text-blue-400">Ali Ekin</span>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-blue-400 transition-colors">
          Home
        </Link>
        <Link
          to="/url-shortener"
          className="hover:text-blue-400 transition-colors"
        >
          URL Shortener
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
