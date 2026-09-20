const annualEvents = [
    {
        id: 1,
        title: 'Ganesh Chaturthi',
        month: 9,
        day: 7,
        description: 'Celebrate the birth of Lord Ganesha with special puja, abhishekam, and prasadam distribution. Cultural programs will follow the ceremony.',
        time: '6:00 AM – 12:00 PM',
        location: 'Main Temple Hall',
    },
    {
        id: 2,
        title: 'Mahalaya',
        month: 10,
        day: 10,
        description: 'Begin the sacred Durga Puja season with devotional prayers, Chandi Path, and remembrance of our ancestors.',
        time: '5:00 AM – 8:00 AM',
        location: 'Main Temple Hall',
    },
    {
        id: 3,
        title: 'Maha Panchami',
        month: 10,
        day: 15,
        description: 'Welcome the Goddess with the ceremonial invocation, prayers, and preparations for the main Durga Puja celebrations.',
        time: '6:00 PM – 9:00 PM',
        location: 'Temple Grounds',
    },
    {
        id: 4,
        title: 'Maha Shashthi',
        month: 10,
        day: 16,
        description: 'Celebrate the arrival of Maa Durga with Bodhan, Adhivas, and the opening rituals of the festival.',
        time: '6:00 PM – 10:00 PM',
        location: 'Temple Grounds',
    },
    {
        id: 5,
        title: 'Maha Saptami',
        month: 10,
        day: 17,
        description: 'Join the Saptami puja, Nabapatrika bathing ceremony, devotional music, and community prasadam.',
        time: '7:00 AM – 12:00 PM',
        location: 'Main Temple Hall',
    },
    {
        id: 6,
        title: 'Maha Ashtami',
        month: 10,
        day: 18,
        description: 'Take part in the powerful Ashtami puja, Pushpanjali, Kumari Puja, and Sandhi Puja.',
        time: '8:00 AM – 1:00 PM',
        location: 'Main Temple Hall',
    },
    {
        id: 7,
        title: 'Maha Navami',
        month: 10,
        day: 19,
        description: 'Continue the festival with Navami homam, special offerings, devotional songs, and bhog distribution.',
        time: '8:00 AM – 1:00 PM',
        location: 'Temple Grounds',
    },
    {
        id: 8,
        title: 'Vijayadashami (Dashami)',
        month: 10,
        day: 20,
        description: 'Celebrate the triumph of good over evil with Dashami puja, blessings, sindoor khela, and farewell rituals.',
        time: '9:00 AM – 2:00 PM',
        location: 'Temple Grounds',
    },
    {
        id: 9,
        title: 'Visarjan (Immersion)',
        month: 10,
        day: 20,
        description: 'Join the devotional procession and farewell immersion ceremony for Maa Durga with music and prayers.',
        time: '3:00 PM – 7:00 PM',
        location: 'Visarjan Procession Route',
    },
    {
        id: 10,
        title: 'Diwali Mahotsav',
        month: 10,
        day: 31,
        description: 'Grand Diwali celebration with Lakshmi puja, fireworks, and community feast. The temple will be beautifully decorated with lights.',
        time: '5:00 PM – 10:00 PM',
        location: 'Temple Grounds',
    },
    {
        id: 11,
        title: 'Maha Shivaratri',
        month: 2,
        day: 15,
        description: 'Night-long vigil with special abhishekam to Lord Shiva every three hours. Devotees can participate in the sacred Rudrabhishekam.',
        time: '6:00 PM – 6:00 AM',
        location: 'Main Temple Hall',
    },
    {
        id: 12,
        title: 'Rama Navami',
        month: 3,
        day: 26,
        description: 'Celebrate the birth of Lord Rama with special puja, bhajan sessions, and a grand procession around the temple.',
        time: '8:00 AM – 12:00 PM',
        location: 'Temple Grounds',
    },
    {
        id: 13,
        title: 'Krishna Janmashtami',
        month: 8,
        day: 16,
        description: 'Celebrate the birth of Lord Krishna with midnight puja, Dahi Handi, and devotional songs. Prasadam will be distributed to all.',
        time: '6:00 PM – 12:00 AM',
        location: 'Main Temple Hall',
    },
]

function getNextOccurrence(event, today) {
    const eventDate = new Date(today.getFullYear(), event.month - 1, event.day)
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate())

    if (eventDate < startOfToday) {
        eventDate.setFullYear(eventDate.getFullYear() + 1)
    }

    return eventDate
}

export function getUpcomingEvents(today = new Date()) {
    return annualEvents
        .map((event) => {
            const date = getNextOccurrence(event, today)

            return {
                ...event,
                date,
                day: String(date.getDate()).padStart(2, '0'),
                month: date.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
            }
        })
        .sort((firstEvent, secondEvent) => firstEvent.date - secondEvent.date)
}