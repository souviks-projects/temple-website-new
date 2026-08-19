import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-grid">
                <div className="footer-column">
                    <h3 className="footer-title">Shree Temple</h3>
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
                        <li>Temple Street, Main Road</li>
                        <li>Your City, State – 000000</li>
                        <li><a href="tel:+910000000000">+91 00000 00000</a></li>
                        <li><a href="mailto:info@shreetemple.org">info@shreetemple.org</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Shree Temple. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer