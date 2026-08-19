import { Link, NavLink } from 'react-router-dom'

const navigationItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Events', to: '/events' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Donate', to: '/donate' },
    { label: 'Contact', to: '/contact' },
]

function Navbar() {
    return (
        <header className="site-header">
            <Link className="site-logo" to="/" aria-label="Temple home">
                <span className="logo-om">ॐ</span>
                <span className="logo-text">Shree Temple</span>
            </Link>
            <nav aria-label="Main navigation">
                <ul className="navigation-list">
                    {navigationItems.map((item) => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <Link to="/donate" className="btn btn-primary nav-donate-btn">
                Donate Now
            </Link>
        </header>
    )
}

export default Navbar
