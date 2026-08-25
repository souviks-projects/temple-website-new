import EventCard from '../components/EventCard'

const events = [
    {
        id: 1,
        title: 'Ganesh Chaturthi',
        day: '07',
        month: 'SEP',
        description: 'Celebrate the birth of Lord Ganesha with special puja, abhishekam, and prasadam distribution. Cultural programs will follow the ceremony.',
        time: '6:00 AM – 12:00 PM',
        location: 'Main Temple Hall',
    },
    {
        id: 2,
        title: 'Navaratri Utsav',
        day: '10',
        month: 'OCT',
        description: 'Nine nights of devotion with Durga puja, bhajans, and cultural programs. Each night features a different form of the Goddess.',
        time: '6:00 PM – 9:00 PM',
        location: 'Temple Grounds',
    },
    {
        id: 3,
        title: 'Diwali Mahotsav',
        day: '31',
        month: 'OCT',
        description: 'Grand Diwali celebration with Lakshmi puja, fireworks, and community feast. The temple will be beautifully decorated with lights.',
        time: '5:00 PM – 10:00 PM',
        location: 'Temple Grounds',
    },
    {
        id: 4,
        title: 'Maha Shivaratri',
        day: '15',
        month: 'FEB',
        description: 'Night-long vigil with special abhishekam to Lord Shiva every three hours. Devotees can participate in the sacred Rudrabhishekam.',
        time: '6:00 PM – 6:00 AM',
        location: 'Main Temple Hall',
    },
    {
        id: 5,
        title: 'Rama Navami',
        day: '26',
        month: 'MAR',
        description: 'Celebrate the birth of Lord Rama with special puja, bhajan sessions, and a grand procession around the temple.',
        time: '8:00 AM – 12:00 PM',
        location: 'Temple Grounds',
    },
    {
        id: 6,
        title: 'Krishna Janmashtami',
        day: '16',
        month: 'AUG',
        description: 'Celebrate the birth of Lord Krishna with midnight puja, Dahi Handi, and devotional songs. Prasadam will be distributed to all.',
        time: '6:00 PM – 12:00 AM',
        location: 'Main Temple Hall',
    },
]

function Events() {
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