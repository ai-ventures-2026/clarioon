import { Link } from 'react-router-dom'
import './Home.css'

const pillars = [
  {
    icon: '💬',
    color: 'icon-blue',
    title: 'Communicate',
    desc: 'Discover your authentic voice. Learn to express ideas with clarity and conviction so every word you say lands with purpose and power.',
  },
  {
    icon: '🤝',
    color: 'icon-yellow',
    title: 'Connect',
    desc: 'Build genuine rapport with any audience. Master the art of listening, empathy, and influence to forge relationships that last.',
  },
  {
    icon: '⚡',
    color: 'icon-blue',
    title: 'Command',
    desc: 'Own the room with presence and confidence. Transform nervous energy into magnetic authority that compels people to listen and follow.',
  },
]

const programs = [
  {
    tag: 'Most Popular',
    tagClass: 'label',
    icon: '🎯',
    title: 'Executive Communication Coaching',
    desc: 'A bespoke 1:1 coaching program for senior leaders who need to inspire, align, and drive results through powerful communication.',
    duration: '12 weeks',
    format: 'Private 1:1',
    highlight: true,
  },
  {
    tag: 'Group Program',
    tagClass: 'label-yellow',
    icon: '🎤',
    title: 'Public Speaking Mastery',
    desc: 'From boardroom presentations to keynote stages — eliminate fear, craft compelling narratives, and captivate any audience.',
    duration: '8 weeks',
    format: 'Small Group',
    highlight: false,
  },
  {
    tag: 'Corporate',
    tagClass: 'label',
    icon: '🏢',
    title: 'Team Communication Workshops',
    desc: 'Full-day and half-day workshops that transform how your teams collaborate, present, and communicate at every level.',
    duration: 'Custom',
    format: 'On-site / Virtual',
    highlight: false,
  },
]

const testimonials = [
  {
    before: 'I dreaded every presentation. My voice would shake, my mind would go blank — I felt invisible in meetings.',
    after: 'I just delivered a keynote to 600 people at our annual conference and received a standing ovation. I never imagined this was possible.',
    name: 'Priya Sharma',
    role: 'VP of Marketing, TechVision Corp',
    result: '+3 promotions in 18 months',
    initials: 'PS',
    color: '#2196f3',
  },
  {
    before: 'People liked me but didn\'t take me seriously. I struggled to assert ideas in leadership meetings.',
    after: 'I landed a C-suite role and now mentor a team of 40. My communication style transformed entirely through Clarioon.',
    name: 'Marcus Webb',
    role: 'Chief People Officer, Nexora Inc',
    result: 'C-suite role secured',
    initials: 'MW',
    color: '#0d47a1',
  },
  {
    before: 'As a founder, pitching terrified me. I had great ideas but couldn\'t sell them. We lost three funding rounds.',
    after: 'After 8 weeks with Clarioon I closed a $2.4M seed round. The investors said my pitch was the clearest they\'d heard all year.',
    name: 'Elena Vasquez',
    role: 'Founder & CEO, Luminae AI',
    result: '$2.4M raised',
    initials: 'EV',
    color: '#1565c0',
  },
]

const stats = [
  { value: '5,000+', label: 'Professionals Coached' },
  { value: '94%', label: 'Report Improved Confidence' },
  { value: '200+', label: 'Corporate Clients' },
  { value: '12', label: 'Countries Served' },
  { value: '4.9★', label: 'Average Client Rating' },
]

export default function Home() {
  return (
    <div className="home">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__bg-shapes">
          <div className="hero__shape hero__shape--1" />
          <div className="hero__shape hero__shape--2" />
          <div className="hero__shape hero__shape--3" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <div className="label">Communications Coaching &amp; Leadership Development</div>
            <h1 className="hero__headline">
              Speak Clearly.<br />
              Lead Boldly.<br />
              <span className="hero__headline-accent">Live Fully.</span>
            </h1>
            <p className="hero__sub">
              Clarioon empowers driven professionals to unlock their most confident voice — so they can lead with presence, communicate with impact, and create the life they deserve.
            </p>
            <div className="hero__ctas">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start with a Free Clarity Assessment
              </Link>
              <Link to="/services" className="btn btn-secondary btn-lg">
                Explore Programs
              </Link>
            </div>
            <div className="hero__trust">
              <span className="hero__trust-label">Trusted by professionals at</span>
              <div className="hero__logos">
                <span className="hero__logo-badge">Google</span>
                <span className="hero__logo-badge">Goldman Sachs</span>
                <span className="hero__logo-badge">McKinsey</span>
                <span className="hero__logo-badge">Microsoft</span>
                <span className="hero__logo-badge">UN</span>
              </div>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__card hero__card--main">
              <div className="hero__quote-mark">"</div>
              <p className="hero__card-quote">
                Working with Clarioon was the single best investment I made in my career. In 90 days I went from dreading meetings to leading them.
              </p>
              <div className="hero__card-author">
                <div className="hero__avatar" style={{ background: '#2196f3' }}>JL</div>
                <div>
                  <strong>Jordan Lee</strong>
                  <span>Director of Strategy, Fortune 500</span>
                </div>
              </div>
            </div>
            <div className="hero__stat-cards">
              <div className="hero__stat-card">
                <div className="hero__stat-num">5K+</div>
                <div className="hero__stat-lbl">Coached</div>
              </div>
              <div className="hero__stat-card hero__stat-card--yellow">
                <div className="hero__stat-num">94%</div>
                <div className="hero__stat-lbl">Confidence</div>
              </div>
              <div className="hero__stat-card">
                <div className="hero__stat-num">4.9★</div>
                <div className="hero__stat-lbl">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="stats-strip">
        <div className="container stats-strip__inner">
          {stats.map((s) => (
            <div key={s.label} className="stats-strip__item">
              <div className="stats-strip__value">{s.value}</div>
              <div className="stats-strip__label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="section pillars">
        <div className="container">
          <div className="label">The Clarioon Framework</div>
          <h2 className="section-title">Three Pillars of Transformation</h2>
          <p className="section-subtitle">
            Our proven framework addresses every dimension of communication — so you don't just sound better, you become a fundamentally more effective leader.
          </p>
          <div className="grid-3">
            {pillars.map((p) => (
              <div key={p.title} className="pillar-card card">
                <div className={`icon-circle ${p.color}`}>{p.icon}</div>
                <h3>{p.title}</h3>
                <div className="divider divider-left" />
                <p style={{ marginTop: '14px' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="section programs" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="label">Signature Programs</div>
          <h2 className="section-title">Find the Right Path for You</h2>
          <p className="section-subtitle">
            Every program is designed around real transformation — not theory. Choose the format that fits your goals.
          </p>
          <div className="grid-3">
            {programs.map((prog) => (
              <div key={prog.title} className={`program-card card${prog.highlight ? ' program-card--featured' : ''}`}>
                <div className={`label ${prog.tagClass}`}>{prog.tag}</div>
                <div className="program-card__icon">{prog.icon}</div>
                <h3 className="program-card__title">{prog.title}</h3>
                <p className="program-card__desc">{prog.desc}</p>
                <div className="program-card__meta">
                  <span>⏱ {prog.duration}</span>
                  <span>📍 {prog.format}</span>
                </div>
                <Link to="/services" className={`btn ${prog.highlight ? 'btn-primary' : 'btn-secondary'}`} style={{ marginTop: '20px', width: '100%', justifyContent: 'center' }}>
                  Learn More
                </Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/services" className="btn btn-secondary btn-lg">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section testimonials">
        <div className="container">
          <div className="label">Success Stories</div>
          <h2 className="section-title">Real People. Real Transformations.</h2>
          <p className="section-subtitle">
            These aren't polished case studies — these are real journeys from self-doubt to unstoppable confidence.
          </p>
          <div className="grid-3">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card card">
                <div className="testimonial-card__before">
                  <div className="testimonial-card__before-label">Before Clarioon</div>
                  <p className="testimonial-card__before-text">"{t.before}"</p>
                </div>
                <div className="testimonial-card__arrow">↓</div>
                <div className="testimonial-card__after">
                  <div className="testimonial-card__after-label">After Clarioon</div>
                  <p className="testimonial-card__after-text">"{t.after}"</p>
                </div>
                <div className="testimonial-card__result">
                  <span className="testimonial-card__result-badge">🏆 {t.result}</span>
                </div>
                <div className="testimonial-card__author">
                  <div className="hero__avatar" style={{ background: t.color, flexShrink: 0 }}>{t.initials}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-light)' }}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="cta-banner__bg" />
        <div className="container cta-banner__inner">
          <div className="cta-banner__content">
            <div className="label label-yellow">Start Today — It's Free</div>
            <h2 className="cta-banner__title">Take the Free Clarity Assessment</h2>
            <p className="cta-banner__text">
              In 15 minutes, discover exactly where your communication is holding you back and get a personalized roadmap to your most powerful voice. No sales pitch — just genuine insight.
            </p>
            <div className="cta-banner__ctas">
              <Link to="/contact" className="btn btn-white btn-lg">
                Get My Free Assessment
              </Link>
              <Link to="/about" className="btn btn-lg" style={{ color: 'rgba(255,255,255,0.85)', borderColor: 'rgba(255,255,255,0.4)' }}>
                Learn About Our Method
              </Link>
            </div>
          </div>
          <div className="cta-banner__checklist">
            <h4>What you'll discover:</h4>
            <ul>
              {[
                'Your unique communication style & blind spots',
                'The #1 thing holding back your executive presence',
                'A custom 90-day clarity roadmap',
                'Which Clarioon program fits your goals',
                'How to immediately sound more confident',
              ].map((item) => (
                <li key={item}>
                  <span className="cta-checklist-icon">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
