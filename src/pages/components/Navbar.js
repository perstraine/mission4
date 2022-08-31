import { Link, useMatch, useResolvedPath, BrowserRouter } from "react-router-dom"
/* Link component replaces a(anchor) tags, then href
is replaced with to */

export default function Navbar() {
    return (
        <nav className="nav">
            <ul>

                <BrowserRouter>
                    <Link to="/"><img src="https://www.turners.co.nz/contentassets/3e15c8546917474ca0a150b18e9fd64e/turnerscars_logo_1line_horz_true-rgb-desktop.png"
                        alt="" className="turners-side" /></Link>
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



