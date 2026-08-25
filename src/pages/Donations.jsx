import { useState } from 'react'

const presetAmounts = [100, 500, 1000, 5000]

function Donations() {
    const [selectedAmount, setSelectedAmount] = useState(500)
    const [customAmount, setCustomAmount] = useState('')
    const [donorName, setDonorName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [purpose, setPurpose] = useState('General Donation')

    const handlePresetSelect = (amount) => {
        setSelectedAmount(amount)
        setCustomAmount('')
    }

    const handleCustomAmount = (e) => {
        setCustomAmount(e.target.value)
        setSelectedAmount(null)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Thank you for your donation! Payment integration will be added soon.')
    }

    return (
        <>
            <section className="page-hero donation-hero">
                <div className="container donation-hero-inner">
                    <div>
                        <p className="eyebrow">Support our mission</p>
                        <h1>Donate to the Temple</h1>
                        <p>Support our temple and community services</p>
                    </div>
                    <div className="impact-badge">
                        <span className="impact-label">This year</span>
                        <strong>₹1.2L+</strong>
                        <small>community support raised</small>
                    </div>
                </div>
            </section>

            <section className="section donation-section">
                <div className="container">
                    <div className="donation-layout">
                        <div className="donation-form-container">
                            <div className="card donation-card">
                                <div className="donation-card-header">
                                    <h2>Make a Donation</h2>
                                    <p>Your contribution helps us serve the community</p>
                                </div>

                                <form onSubmit={handleSubmit} className="donation-form">
                                    <div className="form-group">
                                        <label>Select Donation Amount</label>
                                        <div className="amount-presets">
                                            {presetAmounts.map((amount) => (
                                                <button
                                                    type="button"
                                                    key={amount}
                                                    className={`amount-btn ${selectedAmount === amount ? 'active' : ''}`}
                                                    onClick={() => handlePresetSelect(amount)}
                                                >
                                                    ₹{amount.toLocaleString('en-IN')}
                                                </button>
                                            ))}
                                        </div>

                                        <div className="custom-amount">
                                            <label htmlFor="customAmount">Or Enter Custom Amount</label>
                                            <div className="custom-amount-input">
                                                <span className="currency-symbol">₹</span>
                                                <input
                                                    type="number"
                                                    id="customAmount"
                                                    min="1"
                                                    placeholder="Enter amount"
                                                    value={customAmount}
                                                    onChange={handleCustomAmount}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="donorName">Full Name</label>
                                        <input
                                            type="text"
                                            id="donorName"
                                            placeholder="Your full name"
                                            value={donorName}
                                            onChange={(e) => setDonorName(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="your@email.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            placeholder="+91 "
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="purpose">Donation Purpose</label>
                                        <select
                                            id="purpose"
                                            value={purpose}
                                            onChange={(e) => setPurpose(e.target.value)}
                                        >
                                            <option value="General Donation">General Donation</option>
                                            <option value="Temple Renovation">Temple Renovation</option>
                                            <option value="Festival Fund">Festival Fund</option>
                                            <option value="Community Service">Community Service</option>
                                            <option value="Education Fund">Education Fund</option>
                                        </select>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-lg btn-block">
                                        Donate {selectedAmount ? `₹${selectedAmount.toLocaleString('en-IN')}` : customAmount ? `₹${customAmount}` : ''}
                                    </button>
                                </form>
                            </div>
                        </div>

                        <aside className="donation-info">
                            <div className="card info-card highlight-card">
                                <h3>Why Donate?</h3>
                                <p>
                                    Your donations help us maintain the temple, organize festivals,
                                    support community programs, and preserve our spiritual heritage for
                                    future generations.
                                </p>
                            </div>

                            <div className="card info-card">
                                <h3>Need Help?</h3>
                                <p>For donation assistance, contact the temple office.</p>
                                <p><a href="tel:+919932831010">+91 9932831010</a></p>
                                <p><a href="mailto:ssrgit1902@gmail.com">ssrgit1902@gmail.com</a></p>
                            </div>

                            <div className="card info-card">
                                <h3>Where Your Donation Goes</h3>
                                <ul className="donation-uses">
                                    <li>🛕 Temple maintenance & renovation</li>
                                    <li>🪔 Festival celebrations</li>
                                    <li>🍛 Free food distribution (Annadanam)</li>
                                    <li>📚 Educational programs</li>
                                    <li>🏥 Community health services</li>
                                </ul>
                            </div>

                            <div className="card info-card">
                                <h3>Bank Details</h3>
                                <ul className="bank-details">
                                    <li><strong>Account Name:</strong> Shree Shree Radha Gobindo Jiu Thakur</li>
                                    <li><strong>Account Number:</strong> 190022010002820</li>
                                    <li><strong>IFSC Code:</strong> UBIN0919004</li>
                                    <li><strong>Bank:</strong> Union Bank of India</li>
                                </ul>
                            </div>

                            <div className="card info-card">
                                <h3>Tax Benefits</h3>
                                <p>
                                    Donations to Shree Shree Radha Gobindo Jiu Thakur are eligible for tax exemption under
                                    Section 80G of the Income Tax Act. A receipt will be provided for
                                    all donations.
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Donations