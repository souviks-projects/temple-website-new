import galleryImage1 from '../assets/WhatsApp Image 2026-08-16 at 18.51.34.jpeg'
import galleryImage2 from '../assets/WhatsApp Image 2026-08-16 at 19.03.43.jpeg'
import galleryImage3 from '../assets/WhatsApp Image 2026-08-16 at 19.03.45.jpeg'
import galleryImage4 from '../assets/WhatsApp Image 2026-08-16 at 19.03.47.jpeg'
import galleryImage5 from '../assets/WhatsApp Image 2026-08-16 at 19.03.50.jpeg'
import galleryImage6 from '../assets/WhatsApp Image 2026-08-16 at 19.04.23.jpeg'
import galleryImage7 from '../assets/WhatsApp Image 2026-08-16 at 19.04.25.jpeg'
import aratiVideo1 from '../assets/Arati 1.mp4'
import aratiVideo2 from '../assets/Arati 2.mp4'

const galleryCategories = ['All', 'Temple', 'Festivals', 'Puja', 'Events']

const galleryImages = [
    { id: 1, title: 'Temple Main Entrance', category: 'Temple', src: galleryImage1 },
    { id: 2, title: 'Ganesh Chaturthi Celebration', category: 'Festivals', src: galleryImage2 },
    { id: 3, title: 'Morning Abhishekam', category: 'Puja', src: galleryImage3 },
    { id: 4, title: 'Navaratri Cultural Program', category: 'Events', src: galleryImage4 },
    { id: 5, title: 'Temple Gopuram', category: 'Temple', src: galleryImage5 },
    { id: 6, title: 'Diwali Decoration', category: 'Festivals', src: galleryImage6 },
    { id: 7, title: 'Evening Aarti', category: 'Puja', src: galleryImage7 },
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
                                    <img src={image.src} alt={image.title} />
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
                            <video className="video-player" controls preload="metadata">
                                <source src={aratiVideo1} type="video/mp4" />
                                Your browser does not support video playback.
                            </video>
                            <p className="video-title">Aarti Video 1</p>
                        </div>
                        <div className="card video-card">
                            <video className="video-player" controls preload="metadata">
                                <source src={aratiVideo2} type="video/mp4" />
                                Your browser does not support video playback.
                            </video>
                            <p className="video-title">Aarti Video 2</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery