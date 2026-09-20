import { useEffect, useState } from 'react'
import QRCode from 'qrcode'

const presetAmounts = [100, 500, 1000, 5000]
const templeUpiId = 'QR919932831010-2820@unionbankofindia'
const templeName = 'Shree Shree Radha Gobindo Jiu Thakur'

function createPaymentUri(amount, donorName, purpose) {
    const transactionNote = donorName ? `${purpose} - ${donorName}` : purpose
    const params = new URLSearchParams({
        pa: templeUpiId,
        pn: templeName,
        am: amount.toFixed(2),
        cu: 'INR',
        tn: transactionNote,
    })

    return `upi://pay?${params.toString()}`
}

function Donations() {
    const [selectedAmount, setSelectedAmount] = useState(500)
    const [customAmount, setCustomAmount] = useState('')
    const [donorName, setDonorName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [purpose, setPurpose] = useState('General Donation')
    const [paymentQr, setPaymentQr] = useState('')
    const [paymentStatus, setPaymentStatus] = useState('')

    const paymentAmount = Number(customAmount || selectedAmount)
    const paymentUri = paymentAmount > 0 ? createPaymentUri(paymentAmount, donorName, purpose) : ''

    useEffect(() => {
        let isCurrent = true

        if (!paymentAmount || paymentAmount < 1) {
            Promise.resolve().then(() => {
                if (isCurrent) setPaymentQr('')
            })
            return () => {
                isCurrent = false
            }
        }

        QRCode.toDataURL(paymentUri, {
            width: 320,
            margin: 2,
            errorCorrectionLevel: 'M',
        }).then((dataUrl) => {
            if (isCurrent) setPaymentQr(dataUrl)
        })

        return () => {
            isCurrent = false
        }
    }, [customAmount, donorName, paymentAmount, paymentUri, purpose, selectedAmount])

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

        if (!paymentQr) {
            setPaymentStatus('Please enter a valid donation amount to generate the QR code.')
            return
        }

        const qrWindow = window.open('', '_blank', 'popup,width=440,height=640')

        if (!qrWindow) {
            setPaymentStatus('Your QR is ready above. Please allow popups to open it in a separate window.')
            return
        }

        qrWindow.opener = null
        qrWindow.document.write(`
            <!doctype html>
            <html lang="en">
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <title>Temple Donation QR</title>
                    <style>
                        body { margin: 0; padding: 32px 20px; background: #f7f1e8; color: #2f2924; font-family: Georgia, serif; text-align: center; }
                        main { max-width: 360px; margin: 0 auto; padding: 24px; background: #fff; border: 1px solid #e7dcc8; border-radius: 20px; box-shadow: 0 12px 30px rgba(70, 46, 26, .12); }
                        h1 { margin: 0 0 8px; font-size: 28px; }
                        p { margin: 8px 0; font-family: Arial, sans-serif; line-height: 1.5; }
                        img { display: block; width: min(100%, 320px); margin: 24px auto 18px; }
                        .amount { color: #8b1a1a; font-size: 24px; font-weight: 700; }
                        .upi { color: #675d52; font-size: 13px; overflow-wrap: anywhere; }
                    </style>
                </head>
                <body>
                    <main>
                        <h1>Scan to Donate</h1>
                        <p class="amount">₹${paymentAmount.toLocaleString('en-IN')}</p>
                        <img src="${paymentQr}" alt="Donation payment QR code">
                        <p>Scan this QR code with your preferred UPI app.</p>
                        <p class="upi">${templeUpiId}</p>
                    </main>
                </body>
            </html>
        `)
        qrWindow.document.close()
        setPaymentStatus('Your payment QR opened in a separate window.')
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
                    <div className="donation-intro-grid">
                        <div className="card info-card donation-payment-card">
                            <p className="payment-eyebrow">Quick and secure</p>
                            <h2>Scan to Donate</h2>
                            <p>Scan this general QR with any UPI app to donate to the temple.</p>
                            <div className="payment-qr-wrap">
                                <img
                                    className="payment-qr"
                                    src="/payment-qr.png"
                                    alt="General Union Bank UPI QR code for Shree Shree Radha Gobindo Jiu Thakur"
                                />
                            </div>
                            <p className="payment-upi-id">UPI ID: {templeUpiId}</p>
                            <p className="payment-bank-note">Union Bank of India · Account ending 2820</p>
                        </div>

                        <div className="card info-card highlight-card donation-why-card">
                            <p className="payment-eyebrow">Your support matters</p>
                            <h2>Why Donate?</h2>
                            <p>
                                Your donations help us maintain the temple, organize festivals,
                                support community programs, and preserve our spiritual heritage for
                                future generations.
                            </p>
                            <div className="donation-why-accent" aria-hidden="true">✦</div>
                        </div>
                    </div>

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
                                        Generate Payment QR {paymentAmount ? `₹${paymentAmount.toLocaleString('en-IN')}` : ''}
                                    </button>
                                    {paymentStatus && <p className="payment-status" aria-live="polite">{paymentStatus}</p>}
                                </form>
                            </div>
                        </div>

                        <aside className="donation-info">
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