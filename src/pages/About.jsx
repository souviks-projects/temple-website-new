function About() {
    return (
        <>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <h1>About Shree Temple</h1>
                    <p>Our history, traditions, and spiritual heritage</p>
                </div>
            </section>

            {/* Temple History */}
            <section className="section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image">
                            <div className="about-image-placeholder">
                                <span>🛕</span>
                                <p>Temple History Image</p>
                            </div>
                        </div>
                        <div className="about-text">
                            <div className="section-title about-title-left">
                                <h2>Our History</h2>
                            </div>
                            <p>
                                Shree Temple has been a beacon of faith and devotion for over
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
                            <h3>Lord Shiva</h3>
                            <p>
                                The supreme deity of the temple. Lord Shiva represents
                                transformation, meditation, and the cosmic dance of creation
                                and destruction.
                            </p>
                        </div>
                        <div className="card deity-card">
                            <div className="deity-icon">🌸</div>
                            <h3>Goddess Parvati</h3>
                            <p>
                                The divine mother and consort of Lord Shiva. She embodies
                                love, fertility, and devotion.
                            </p>
                        </div>
                        <div className="card deity-card">
                            <div className="deity-icon">🐘</div>
                            <h3>Lord Ganesha</h3>
                            <p>
                                The remover of obstacles and the god of beginnings. Lord
                                Ganesha is worshipped first in all ceremonies.
                            </p>
                        </div>
                        <div className="card deity-card">
                            <div className="deity-icon">🦚</div>
                            <h3>Lord Murugan</h3>
                            <p>
                                The god of war and victory, also known as Kartikeya. He
                                represents courage, wisdom, and spiritual strength.
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
                            <div className="committee-avatar">👤</div>
                            <h3>President</h3>
                            <p className="committee-name">Sri. Ramaswamy Iyer</p>
                            <p>Leading the temple administration and community outreach.</p>
                        </div>
                        <div className="card committee-card">
                            <div className="committee-avatar">👤</div>
                            <h3>Secretary</h3>
                            <p className="committee-name">Sri. Venkatesh Sharma</p>
                            <p>Managing daily operations, events, and temple records.</p>
                        </div>
                        <div className="card committee-card">
                            <div className="committee-avatar">👤</div>
                            <h3>Treasurer</h3>
                            <p className="committee-name">Sri. Krishnan Nair</p>
                            <p>Overseeing temple finances and donation management.</p>
                        </div>
                        <div className="card committee-card">
                            <div className="committee-avatar">👤</div>
                            <h3>Chief Priest</h3>
                            <p className="committee-name">Sri. Subramanian Bhatt</p>
                            <p>Leading all religious ceremonies and spiritual guidance.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About