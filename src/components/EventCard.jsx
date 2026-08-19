function EventCard({ event }) {
    return (
        <article className="card event-card">
            {event.image && (
                <div className="event-card-image">
                    <img src={event.image} alt={event.title} />
                </div>
            )}
            <div className="event-card-body">
                <div className="event-card-date">
                    <span className="event-date-day">{event.day}</span>
                    <span className="event-date-month">{event.month}</span>
                </div>
                <h3 className="event-card-title">{event.title}</h3>
                <p className="event-card-description">{event.description}</p>
                <div className="event-card-meta">
                    <span className="event-card-time">🕐 {event.time}</span>
                    <span className="event-card-location">📍 {event.location}</span>
                </div>
            </div>
        </article>
    )
}

export default EventCard