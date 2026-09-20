import templeHistoryImage from '../assets/WhatsApp Image 2026-08-16 at 18.51.34.jpeg'
import madhusudanImage from '../assets/Madhusudan.png'
import raghunathImage from '../assets/Raghunath.jpg'
import ratanImage from '../assets/Ratan.png'
import sitanathImage from '../assets/Sitanath.jpg'

function About() {
    return (
        <>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <h1>About Shree Shree Radha Gobindo Jiu Thakur</h1>
                    <p>Our history, traditions, and spiritual heritage</p>
                </div>
            </section>

            {/* Temple History */}
            <section className="section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image">
                            <div className="about-image-placeholder">
                                <img src={templeHistoryImage} alt="Shree Shree Radha Gobindo Jiu Thakur temple" />
                            </div>
                        </div>
                        <div className="about-text">
                            <div className="section-title about-title-left">
                                <h2>Our History</h2>
                            </div>
                            <p>
                                Shree Shree Radha Gobindo Jiu Thakur has been a beacon of faith and devotion for over
                                100 years. Founded by devoted saints and community leaders,
                                the temple has grown from a small shrine into a vibrant center
                                of worship and community service.
                            </p>
                            <p>
                                The temple is dedicated to the divine, serving thousands of
                                devotees every year through daily pujas, festivals, and
                                charitable activities. Our mission is to preserve and share
                                the spiritual traditions of our ancestors with future
                                generations.
                            </p>
                            <p>
                                Over the decades, the temple has expanded to include a
                                community hall, a library of spiritual texts, and facilities
                                for cultural education. We continue to serve the community
                                with devotion, compassion, and dedication.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deity Information */}
            <section className="section section-alt">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Deities</h2>
                        <p>The divine presences we worship</p>
                    </div>
                    <div className="deities-grid">
                        <div className="card deity-card">
                            <div className="deity-icon">🕉️</div>
                            <h3>Radha Krishna</h3>
                            <p>
                                Radha and Krishna represent the eternal bond of divine love,
                                devotion, and spiritual joy. Their presence inspires devotees
                                to live with compassion, humility, and wholehearted faith.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Temple Traditions */}
            <section className="section">
                <div className="container">
                    <div className="section-title">
                        <h2>Temple Traditions</h2>
                        <p>Sacred practices and customs</p>
                    </div>
                    <div className="traditions-grid">
                        <div className="tradition-item">
                            <div className="tradition-number">01</div>
                            <h3>Daily Pujas</h3>
                            <p>
                                The temple conducts multiple pujas throughout the day,
                                including Suprabhatam, Abhishekam, and Aarti ceremonies.
                            </p>
                        </div>
                        <div className="tradition-item">
                            <div className="tradition-number">02</div>
                            <h3>Festival Celebrations</h3>
                            <p>
                                Major festivals like Ganesh Chaturthi, Navaratri, Diwali,
                                and Shivaratri are celebrated with great devotion and grandeur.
                            </p>
                        </div>
                        <div className="tradition-item">
                            <div className="tradition-number">03</div>
                            <h3>Community Service</h3>
                            <p>
                                The temple organizes free medical camps, food distribution,
                                and educational programs for the community.
                            </p>
                        </div>
                        <div className="tradition-item">
                            <div className="tradition-number">04</div>
                            <h3>Spiritual Education</h3>
                            <p>
                                Regular discourses, bhajan sessions, and spiritual classes
                                are held to nurture devotion and understanding.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Temple Committee */}
            <section className="section section-alt">
                <div className="container">
                    <div className="section-title">
                        <h2>Temple Committee</h2>
                        <p>The dedicated team managing the temple</p>
                    </div>
                    <div className="committee-grid">
                        <div className="card committee-card">
                            <div className="committee-avatar">
                                <img src={sitanathImage} alt="Sitanath Mandal" />
                            </div>
                            <h3>President</h3>
                            <p className="committee-name">Sitanath Mandal</p>
                            <p>Leading the temple administration and community outreach.</p>
                        </div>
                        <div className="card committee-card">
                            <div className="committee-avatar">
                                <img src={madhusudanImage} alt="Madhusudan Mandal" />
                            </div>
                            <h3>Secretary</h3>
                            <p className="committee-name">Madhusudan Mandal</p>
                            <p>Managing daily operations, events, and temple records.</p>
                        </div>
                        <div className="card committee-card">
                            <div className="committee-avatar">
                                <img src={raghunathImage} alt="Raghunath Mandal" />
                            </div>
                            <h3>Treasurer</h3>
                            <p className="committee-name">Raghunath Mandal</p>
                            <p>Overseeing temple finances and donation management.</p>
                        </div>
                        <div className="card committee-card">
                            <div className="committee-avatar">
                                <img src={ratanImage} alt="Ratan Mandal" />
                            </div>
                            <h3>Vice President</h3>
                            <p className="committee-name">Ratan Mandal</p>
                            <p>Leading all religious ceremonies and spiritual guidance.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About