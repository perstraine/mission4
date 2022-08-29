import { Link } from "react-router-dom";

export default function Home() {
    return (
      <div>
        Home Page
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
      </div>
    );
}