import { useState } from 'react'
import './Contact.css'

const faqs = [
  {
    q: 'How do I know which program is right for me?',
    a: 'Book a free 30-minute Discovery Call and one of our coaches will help you identify the right fit based on your goals, timeline, and budget. There\'s no pressure — just honest guidance.',
  },
  {
    q: 'Do you offer virtual sessions?',
    a: 'Yes! All of our 1:1 coaching programs are available virtually via Zoom. Our team workshops and corporate training can be delivered in-person or virtually depending on your preference.',
  },
  {
    q: 'How quickly can I see results?',
    a: 'Many clients notice a meaningful shift after their first session. Our programs are designed for sustainable, lasting change — most clients report significant transformation within the first 4-6 weeks.',
  },
  {
    q: 'What\'s the difference between the Clarity Session and a full program?',
    a: 'A Clarity Session is ideal for addressing one specific situation — a big presentation, a tough conversation, or a career pivot. Full programs create comprehensive, lasting transformation across all communication contexts.',
  },
  {
    q: 'Do you work with non-native English speakers?',
    a: 'Absolutely. We have coaches with expertise in cross-cultural communication and working with multilingual professionals. Communication presence transcends language.',
  },
  {
    q: 'Is there a money-back guarantee?',
    a: 'Yes. If you complete your first three sessions and don\'t feel the program is right for you, we\'ll refund you in full — no questions asked. We\'re that confident in our process.',
  },
  {
    q: 'Can my company pay for the coaching?',
    a: 'Many clients use professional development budgets, L&D stipends, or employer reimbursements. We\'re happy to provide invoices in whatever format your organization requires.',
  },
  {
    q: 'How large are the group programs?',
    a: 'The Public Speaking Mastery cohort has a maximum of 12 participants to ensure every person gets individual attention and ample practice time in every session.',
  },
]

const contactMethods = [
  {
    icon: '📧',
    title: 'Email Us',
    detail: 'hello@clarioon.com',
    href: 'mailto:hello@clarioon.com',
    sub: 'We respond within 24 hours',
  },
  {
    icon: '📞',
    title: 'Call Us',
    detail: '1-800-CLARIOON',
    href: 'tel:+18005274666',
    sub: 'Mon–Fri, 9am–6pm ET',
  },
  {
    icon: '📍',
    title: 'Office',
    detail: 'New York, NY',
    href: '#',
    sub: '+ Worldwide via Zoom',
  },
  {
    icon: '🕐',
    title: 'Response Time',
    detail: 'Under 24 Hours',
    href: null,
    sub: 'Usually same business day',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    interest: '',
    goal: '',
    timeline: '',
    message: '',
    heardAbout: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i)

  return (
    <div className="contact">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="label" style={{ color: '#fff9c4', background: 'rgba(255,249,196,0.15)' }}>Let's Connect</div>
          <h1>Your Next Chapter Starts<br />with a Conversation</h1>
          <p>Fill out the form below and we'll reach out within one business day to schedule your free clarity call.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container contact-section__inner">
          {/* Form */}
          <div className="contact-form-wrapper">
            {!submitted ? (
              <>
                <div className="contact-form-header">
                  <h2>Book Your Free Clarity Assessment</h2>
                  <p>Take 3 minutes to tell us about yourself. We'll use this to personalize our call and make every minute count.</p>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">Company / Organization</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Where do you work?"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="role">Your Role / Title *</label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        placeholder="e.g. Director of Marketing"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="interest">I'm most interested in *</label>
                    <select
                      id="interest"
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a program...</option>
                      <option value="executive">Executive Communication Coaching (1:1)</option>
                      <option value="speaking">Public Speaking Mastery (Group)</option>
                      <option value="leadership">Leadership Presence Program (1:1)</option>
                      <option value="workshop">Team Communication Workshop</option>
                      <option value="clarity">1:1 Clarity Session (Single)</option>
                      <option value="corporate">Corporate Training Package</option>
                      <option value="unsure">Not sure — help me decide</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="goal">What's your #1 communication goal right now? *</label>
                    <textarea
                      id="goal"
                      name="goal"
                      value={form.goal}
                      onChange={handleChange}
                      placeholder="e.g. I want to feel confident presenting to my board. I freeze up and feel invisible..."
                      rows={3}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="timeline">When are you looking to start?</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                    >
                      <option value="">Select a timeline...</option>
                      <option value="asap">As soon as possible</option>
                      <option value="month">Within the next month</option>
                      <option value="quarter">Within the next quarter</option>
                      <option value="planning">Just planning / exploring</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="heardAbout">How did you hear about Clarioon?</label>
                    <select
                      id="heardAbout"
                      name="heardAbout"
                      value={form.heardAbout}
                      onChange={handleChange}
                    >
                      <option value="">Select one...</option>
                      <option value="google">Google / Search</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="referral">Referred by a colleague or friend</option>
                      <option value="podcast">Podcast or media</option>
                      <option value="instagram">Instagram</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Anything else you'd like us to know?</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Share anything that feels relevant — context helps us prepare a more valuable call."
                      rows={3}
                    />
                  </div>

                  <div className="contact-form__privacy">
                    <span>🔒</span>
                    <span>Your information is private and never shared. No spam, ever — just thoughtful follow-up.</span>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg contact-form__submit">
                    Submit &amp; Request My Free Clarity Call →
                  </button>
                </form>
              </>
            ) : (
              <div className="contact-success">
                <div className="contact-success__icon">🎉</div>
                <h2>You're on your way!</h2>
                <p>Thank you, <strong>{form.firstName}</strong>! We've received your information and a member of the Clarioon team will reach out within one business day to schedule your free clarity assessment.</p>
                <div className="contact-success__next">
                  <h4>What happens next:</h4>
                  <ol>
                    <li>You'll receive a confirmation email within a few minutes.</li>
                    <li>A Clarioon coach will reach out to schedule your free 30-minute call.</li>
                    <li>We'll send you a short pre-call questionnaire to make the most of your time.</li>
                    <li>On the call, we'll discuss your goals and recommend the right path forward.</li>
                  </ol>
                </div>
                <button className="btn btn-secondary" onClick={() => setSubmitted(false)}>
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="contact-sidebar">
            {/* Contact Methods */}
            <div className="contact-methods">
              {contactMethods.map((m) => (
                <div key={m.title} className="contact-method">
                  <span className="contact-method__icon">{m.icon}</span>
                  <div>
                    <div className="contact-method__title">{m.title}</div>
                    {m.href ? (
                      <a className="contact-method__detail" href={m.href}>{m.detail}</a>
                    ) : (
                      <span className="contact-method__detail">{m.detail}</span>
                    )}
                    <div className="contact-method__sub">{m.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Promise */}
            <div className="contact-promise card">
              <h4>Our Commitment to You</h4>
              <ul className="contact-promise__list">
                <li>✓ No pushy sales calls</li>
                <li>✓ Honest program recommendations</li>
                <li>✓ Your info stays private</li>
                <li>✓ Free advice, even if we're not the right fit</li>
                <li>✓ Response within 24 hours, guaranteed</li>
              </ul>
            </div>

            {/* Quick testimonial */}
            <div className="contact-testimonial card">
              <div className="contact-testimonial__stars">★★★★★</div>
              <p className="contact-testimonial__text">
                "I almost didn't book the call because I was nervous. But the Clarioon team made me feel so welcome. Best decision I ever made for my career."
              </p>
              <div className="contact-testimonial__author">
                <div className="hero__avatar" style={{ background: '#2196f3', width: '36px', height: '36px', fontSize: '0.75rem', flexShrink: 0 }}>RP</div>
                <div>
                  <strong>Rachel Park</strong>
                  <span>Senior Manager, Google</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="label">Common Questions</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you need to know before you reach out.</p>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item${openFaq === i ? ' faq-item--open' : ''}`}>
                <button className="faq-item__question" onClick={() => toggleFaq(i)}>
                  <span>{faq.q}</span>
                  <span className="faq-item__icon">{openFaq === i ? '−' : '+'}</span>
                </button>
                <div className="faq-item__answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
