import { useEffect, useState } from 'react'
import EventCard from '../components/EventCard'
import { getUpcomingEvents } from '../data/events'

function Events() {
    const [today, setToday] = useState(() => new Date())
    const events = getUpcomingEvents(today)

    useEffect(() => {
        const intervalId = window.setInterval(() => setToday(new Date()), 60 * 1000)

        return () => window.clearInterval(intervalId)
    }, [])

    return (
        <>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <h1>Events & Festivals</h1>
                    <p>Upcoming celebrations and special ceremonies</p>
                </div>
            </section>

            {/* Events Grid */}
            <section className="section">
                <div className="container">
                    <div className="section-title">
                        <h2>Upcoming Events</h2>
                        <p>Join us in celebrating these sacred occasions</p>
                    </div>
                    <div className="events-grid">
                        {events.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Special Puja Info */}
            <section className="section section-alt">
                <div className="container">
                    <div className="section-title">
                        <h2>Special Pujas</h2>
                        <p>Book special pujas for your family</p>
                    </div>
                    <div className="special-pujas-grid">
                        <div className="card special-puja-card">
                            <h3>Rudrabhishekam</h3>
                            <p>Special abhishekam to Lord Shiva with Vedic mantras.</p>
                            <p className="puja-duration">Duration: 1 hour</p>
                            <p className="puja-price">₹1,100</p>
                        </div>
                        <div className="card special-puja-card">
                            <h3>Satyanarayan Puja</h3>
                            <p>Complete puja for prosperity and well-being of the family.</p>
                            <p className="puja-duration">Duration: 2 hours</p>
                            <p className="puja-price">₹1,500</p>
                        </div>
                        <div className="card special-puja-card">
                            <h3>Lakshmi Puja</h3>
                            <p>Puja for wealth, abundance, and financial prosperity.</p>
                            <p className="puja-duration">Duration: 1.5 hours</p>
                            <p className="puja-price">₹1,100</p>
                        </div>
                        <div className="card special-puja-card">
                            <h3>Ganapathi Homam</h3>
                            <p>Fire ritual to remove obstacles and bring new beginnings.</p>
                            <p className="puja-duration">Duration: 2 hours</p>
                            <p className="puja-price">₹2,000</p>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-muted">
                            For puja bookings, please contact the temple office at{' '}
                            <a href="tel:+919932831010">+91 9932831010</a> or{' '}
                            <a href="mailto:ssrgit1902@gmail.com">ssrgit1902@gmail.com</a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Events