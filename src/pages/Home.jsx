import { Link } from 'react-router-dom'
import EventCard from '../components/EventCard'
import heroImage from '../assets/WhatsApp Image 2026-08-16 at 19.03.45.jpeg'
import locationImage from '../assets/WhatsApp Image 2026-08-16 at 19.03.43.jpeg'

const upcomingEvents = [
    {
        id: 1,
        title: 'Janmashtami Celebration',
        day: '04',
        month: 'SEP',
        description: 'Celebrate the birth of Lord Krishna with special puja and prasadam distribution.',
        time: '11:57 PM Sept 4 – 12:43 AM Sept 5',
        location: 'Main Temple Hall',
    },
]

const announcements = [
    {
        id: 1,
        title: 'Temple Renovation Fund',
        content: 'We are raising funds for the temple renovation project. Your generous donations are greatly appreciated.',
    },
]

const dailyTimings = [
    { name: 'Temple Opens', time: '5:00 AM' },
    { name: 'Suprabhatam', time: '5:30 AM' },
    { name: 'Morning Abhishekam', time: '7:00 AM' },
    { name: 'Morning Aarti', time: '7:30 AM' },
    { name: 'Temple Closes (Afternoon)', time: '12:00 PM' },
    { name: 'Temple Reopens', time: '4:00 PM' },
    { name: 'Evening Aarti', time: '7:00 PM' },
    { name: 'Temple Closes (Night)', time: '9:00 PM' },
]

function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="hero-section" id="home">
                <div className="container hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Welcome to <span className="hero-highlight">Shree Shree Radha Gobindo Jiu Thakur</span>
                        </h1>
                        <p className="hero-subtitle">
                            A sacred sanctuary of peace, devotion, and community.
                            Experience the divine presence and spiritual heritage.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/donate" className="btn btn-primary btn-lg">
                                Donate Now
                            </Link>
                            <Link to="/about" className="btn btn-outline btn-lg">
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src={heroImage} alt="Shree Shree Radha Gobindo Jiu Thakur" />
                    </div>
                </div>
            </section>

            {/* Temple Timings Section */}
            <section className="section section-alt" id="timings">
                <div className="container">
                    <div className="section-title">
                        <h2>Temple Timings</h2>
                        <p>Daily darshan and puja schedule</p>
                    </div>
                    <div className="timings-grid">
                        {dailyTimings.map((timing) => (
                            <div className="timing-card" key={timing.name}>
                                <span className="timing-name">{timing.name}</span>
                                <span className="timing-time">{timing.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="section" id="events">
                <div className="container">
                    <div className="section-title">
                        <h2>Upcoming Events</h2>
                        <p>Festivals and special ceremonies</p>
                    </div>
                    <div className="events-grid">
                        {upcomingEvents.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/events" className="btn btn-maroon">
                            View All Events
                        </Link>
                    </div>
                </div>
            </section>

            {/* Announcements Section */}
            <section className="section section-alt" id="announcements">
                <div className="container">
                    <div className="section-title">
                        <h2>Announcements</h2>
                        <p>Latest news and updates from the temple</p>
                    </div>
                    <div className="announcements-list">
                        {announcements.map((announcement) => (
                            <div className="announcement-card" key={announcement.id}>
                                <h3 className="announcement-title">{announcement.title}</h3>
                                <p className="announcement-content">{announcement.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Donate CTA Section */}
            <section className="donate-cta" id="donate">
                <div className="container donate-cta-content">
                    <h2>Support the Temple</h2>
                    <p>
                        Your donations help us maintain the temple, organize festivals,
                        and serve the community. Every contribution matters.
                    </p>
                    <Link to="/donate" className="btn btn-primary btn-lg">
                        Donate Now
                    </Link>
                </div>
            </section>

            {/* Contact / Location Section */}
            <section className="section" id="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Visit Us</h2>
                        <p>Find the temple and get in touch</p>
                    </div>
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h3>Shree Shree Radha Gobindo Jiu Thakur</h3>
                            <p>PO - Baishnabchak, PS - Kolaghat, PS - Kolaghat</p>
                            <p>East Midnapure, West Bengal – 721158</p>
                            <p>
                                <a href="tel:+919932831010">+91 9932831010</a>
                            </p>
                            <p>
                                <a href="mailto:ssrgit1902@gmail.com">ssrgit1902@gmail.com</a>
                            </p>
                            <Link to="/contact" className="btn btn-outline mt-3">
                                Contact Us
                            </Link>
                        </div>
                        <div className="contact-map">
                            <a
                                className="map-placeholder-link"
                                href="https://maps.app.goo.gl/FsBZK5iMTCUxig3F8"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="map-placeholder">
                                    <img src={locationImage} alt="Inside Shree Temple" />
                                    <span className="map-overlay-label">📍 Open Google Maps</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home