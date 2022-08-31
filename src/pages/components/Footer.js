import { Link, BrowserRouter } from "react-router-dom"
/* Link component replaces a(anchor) tags, then href
is replaced with to */

export default function Footer() {
    return (
        <div className="footer">
            <h3>Find us here</h3>
            <ul>
                <BrowserRouter>
                    <Link to="/"><img src="https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-best-facebook-logo-icons-gif-transparent-png-images-8.png"
                        alt="" className="socials" /></Link>
                    <Link to="/"><img src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-png-instagram-logo-camel-productions-website-25.png"
                        alt="" className="socials" /></Link>
                    <Link to="/"><img src="https://www.fiveminutefolklore.com/wp-content/uploads/2017/10/youtube-play-button-transparent-png-15.png"
                        alt="" className="socials" /></Link>
                    <Link to="/"><img src="https://assets.materialup.com/uploads/2e5bb38b-15c9-43e7-8339-2ffc6d6cf90b/preview"
                        alt="" className="socials" /></Link>
                </BrowserRouter>
            </ul>
        </div>
    )
}




