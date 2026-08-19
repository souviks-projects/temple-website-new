import { Link } from 'react-router-dom'
import EventCard from '../components/EventCard'

const upcomingEvents = [
    {
        id: 1,
        title: 'Ganesh Chaturthi',
        day: '07',
        month: 'SEP',
        description: 'Celebrate the birth of Lord Ganesha with special puja and prasadam distribution.',
        time: '6:00 AM – 12:00 PM',
        location: 'Main Temple Hall',
    },
    {
        id: 2,
        title: 'Navaratri Utsav',
        day: '10',
        month: 'OCT',
        description: 'Nine nights of devotion with Durga puja, bhajans, and cultural programs.',
        time: '6:00 PM – 9:00 PM',
        location: 'Temple Grounds',
    },
    {
        id: 3,
        title: 'Diwali Mahotsav',
        day: '31',
        month: 'OCT',
        description: 'Grand Diwali celebration with Lakshmi puja, fireworks, and community feast.',
        time: '5:00 PM – 10:00 PM',
        location: 'Temple Grounds',
    },
]

const announcements = [
    {
        id: 1,
        title: 'Monthly Satyanarayan Puja',
        content: 'Satyanarayan puja will be held on the first Sunday of every month at 10:00 AM. All devotees are welcome.',
    },
    {
        id: 2,
        title: 'Temple Renovation Fund',
        content: 'We are raising funds for the temple renovation project. Your generous donations are greatly appreciated.',
    },
    {
        id: 3,
        title: 'Free Medical Camp',
        content: 'A free medical camp will be organized on the 15th of next month. Free checkups and medicines will be provided.',
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
                            Welcome to <span className="hero-highlight">Shree Temple</span>
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
                        <img src="/src/assets/hero.png" alt="Shree Temple" />
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
                            <h3>Shree Temple</h3>
                            <p>Temple Street, Main Road</p>
                            <p>Your City, State – 000000</p>
                            <p>
                                <a href="tel:+910000000000">+91 00000 00000</a>
                            </p>
                            <p>
                                <a href="mailto:info@shreetemple.org">info@shreetemple.org</a>
                            </p>
                            <Link to="/contact" className="btn btn-outline mt-3">
                                Contact Us
                            </Link>
                        </div>
                        <div className="contact-map">
                            <div className="map-placeholder">
                                <p>📍 Google Maps Location</p>
                                <p className="text-muted">Map will be embedded here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home