const galleryCategories = ['All', 'Temple', 'Festivals', 'Puja', 'Events']

const galleryImages = [
    { id: 1, title: 'Temple Main Entrance', category: 'Temple', emoji: '🛕' },
    { id: 2, title: 'Ganesh Chaturthi Celebration', category: 'Festivals', emoji: '🐘' },
    { id: 3, title: 'Morning Abhishekam', category: 'Puja', emoji: '🪔' },
    { id: 4, title: 'Navaratri Cultural Program', category: 'Events', emoji: '💃' },
    { id: 5, title: 'Temple Gopuram', category: 'Temple', emoji: '🏛️' },
    { id: 6, title: 'Diwali Decoration', category: 'Festivals', emoji: '🪔' },
    { id: 7, title: 'Evening Aarti', category: 'Puja', emoji: '🔥' },
    { id: 8, title: 'Community Feast', category: 'Events', emoji: '🍛' },
    { id: 9, title: 'Temple Courtyard', category: 'Temple', emoji: '🌿' },
    { id: 10, title: 'Krishna Janmashtami', category: 'Festivals', emoji: '🦚' },
    { id: 11, title: 'Satyanarayan Puja', category: 'Puja', emoji: '📿' },
    { id: 12, title: 'Temple Anniversary', category: 'Events', emoji: '🎉' },
]

function Gallery() {
    return (
        <>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <h1>Photo Gallery</h1>
                    <p>Moments of devotion and celebration</p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="section">
                <div className="container">
                    <div className="section-title">
                        <h2>Temple Gallery</h2>
                        <p>Browse through our collection of photographs</p>
                    </div>

                    {/* Category Filter */}
                    <div className="gallery-filters">
                        {galleryCategories.map((category) => (
                            <button
                                key={category}
                                className={`filter-btn ${category === 'All' ? 'active' : ''}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="gallery-grid">
                        {galleryImages.map((image) => (
                            <div className="gallery-item" key={image.id}>
                                <div className="gallery-image-placeholder">
                                    <span className="gallery-emoji">{image.emoji}</span>
                                </div>
                                <div className="gallery-overlay">
                                    <h3>{image.title}</h3>
                                    <span className="gallery-category">{image.category}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Videos Section */}
            <section className="section section-alt">
                <div className="container">
                    <div className="section-title">
                        <h2>Temple Videos</h2>
                        <p>Watch our ceremonies and celebrations</p>
                    </div>
                    <div className="videos-grid">
                        <div className="card video-card">
                            <div className="video-placeholder">
                                <span className="video-play-icon">▶</span>
                                <p>Morning Aarti Video</p>
                            </div>
                        </div>
                        <div className="card video-card">
                            <div className="video-placeholder">
                                <span className="video-play-icon">▶</span>
                                <p>Festival Celebration Video</p>
                            </div>
                        </div>
                        <div className="card video-card">
                            <div className="video-placeholder">
                                <span className="video-play-icon">▶</span>
                                <p>Temple Tour Video</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery