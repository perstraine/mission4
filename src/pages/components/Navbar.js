import { Link, useMatch, useResolvedPath, BrowserRouter } from "react-router-dom"
import image from './turners.png'
/* Link component replaces a(anchor) tags, then href
is replaced with to */

export default function Navbar() {
    return (
        <nav className="nav">
            <ul>
                <img src={image} alt="" className="turners-side"/>
                <h1 className="turners-logo">Turners Cars</h1>
                <BrowserRouter>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/search">Search</CustomLink>
                </BrowserRouter>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {/* usedResolvedPath and useMatch hooks */
    const resolvedPath = useResolvedPath(to) /* converts relative paths to absolute */
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })/* end: true is saying the entire path must match */

    return (  /* checks if customlink is active, then marks current page as active otherwise don't add as active */
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}



