import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-6">
      <Link to="/" className="hover:underline font-semibold">Home</Link>
      <Link to="/students" className="hover:underline font-semibold">Student Lists</Link>
      <Link to="/add-student" className="hover:underline font-semibold">Add Students</Link>
    </nav>
  );
}

export default Navbar;