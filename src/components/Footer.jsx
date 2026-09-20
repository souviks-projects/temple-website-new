import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-grid">
                <div className="footer-column">
                    <h3 className="footer-title">Shree Shree Radha Gobindo Jiu Thakur</h3>
                    <p className="footer-about">
                        A sacred place of worship, peace, and community. Visit us
                        for daily puja, festivals, and spiritual growth.
                    </p>
                </div>
                <div className="footer-column">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/donate">Donate</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-title">Temple Timings</h3>
                    <ul className="footer-timings">
                        <li><span>Morning</span><span>5:00 AM – 12:00 PM</span></li>
                        <li><span>Evening</span><span>4:00 PM – 9:00 PM</span></li>
                        <li><span>Aarti</span><span>7:00 AM & 7:00 PM</span></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-title">Contact</h3>
                    <ul className="footer-contact">
                        <li>PO - Baishnabchak, PS - Kolaghat, PS - Kolaghat</li>
                        <li>East Midnapure, West Bengal – 721158</li>
                        <li><a href="tel:+919932831010">+91 9932831010</a></li>
                        <li><a href="mailto:ssrgit1902@gmail.com">ssrgit1902@gmail.com</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Shree Shree Radha Gobindo Jiu Thakur. All rights reserved.</p>
                    <p className="footer-credit">Website developed and maintained by Souvik Mandal(Soft. Develope)</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer