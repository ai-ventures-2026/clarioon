import { Link } from 'react-router-dom'
import './About.css'

const coaches = [
  {
    initials: 'DR',
    name: 'Dr. Diana Reeves',
    role: 'Founder & Master Coach',
    color: '#2196f3',
    creds: ['ICF PCC Certified', 'PhD Communication, Columbia', '18 years experience'],
    bio: 'Diana spent 12 years as a Fortune 100 executive before founding Clarioon. Her proprietary CLARA Method has helped over 3,000 leaders find their authentic voice.',
    specialties: ['Executive Presence', 'C-Suite Coaching', 'Crisis Communication'],
  },
  {
    initials: 'MK',
    name: 'Marcus Kim',
    role: 'Senior Coach — Public Speaking',
    color: '#0d47a1',
    creds: ['ICF PCC Certified', 'Former TED Speaker Coach', '12 years experience'],
    bio: 'Marcus has coached over 80 TED and TEDx speakers and trained professionals across 30 countries. He specializes in turning nervous presenters into magnetic storytellers.',
    specialties: ['Public Speaking', 'Storytelling', 'Keynote Development'],
  },
  {
    initials: 'SW',
    name: 'Sofia Walcott',
    role: 'Senior Coach — Leadership Communication',
    color: '#1565c0',
    creds: ['ICF ACC Certified', 'MBA, INSEAD', '10 years experience'],
    bio: 'Sofia brings a global perspective from her work across four continents. She specializes in helping diverse leaders navigate cross-cultural communication and build inclusive teams.',
    specialties: ['Cross-cultural Communication', 'Team Dynamics', 'Inclusive Leadership'],
  },
]

const methodSteps = [
  {
    step: '01',
    title: 'Clarify',
    desc: 'We start by uncovering your unique communication patterns, values, and blind spots through our deep-dive diagnostic assessment.',
    icon: '🔍',
  },
  {
    step: '02',
    title: 'Learn',
    desc: 'Targeted skill-building sessions tackle your specific challenges — whether that\'s vocal presence, message structure, or managing nerves.',
    icon: '📚',
  },
  {
    step: '03',
    title: 'Apply',
    desc: 'Real-world application with live practice, recorded feedback, and accountability structures that make new behaviors stick.',
    icon: '⚡',
  },
  {
    step: '04',
    title: 'Amplify',
    desc: 'Sustain and scale your growth. Alumni resources, community, and ongoing support ensure your transformation is permanent.',
    icon: '🚀',
  },
]

const accreditations = [
  { name: 'ICF', full: 'International Coaching Federation', badge: '🏅' },
  { name: 'SHRM', full: 'Society for Human Resource Management', badge: '🏅' },
  { name: 'ATD', full: 'Association for Talent Development', badge: '🏅' },
  { name: 'Forbes Coaches Council', full: 'Forbes Coaches Council Member', badge: '⭐' },
]

const media = [
  { outlet: 'Forbes', quote: '"One of the top 10 communication coaches to watch in 2024."' },
  { outlet: 'Harvard Business Review', quote: '"The CLARA Method is redefining executive communication coaching."' },
  { outlet: 'Fast Company', quote: '"Clarioon clients speak differently — and everyone notices."' },
  { outlet: 'Inc. Magazine', quote: '"Diana Reeves is changing how leaders communicate."' },
]

export default function About() {
  return (
    <div className="about">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="label" style={{ color: '#fff9c4', background: 'rgba(255,249,196,0.15)' }}>Our Story</div>
          <h1>Built on the Belief That<br />Everyone Has a Powerful Voice</h1>
          <p>Clarioon was born from a simple truth: most people are far more capable than their communication lets on. We exist to close that gap — forever.</p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section founder">
        <div className="container founder__inner">
          <div className="founder__visual">
            <div className="founder__portrait">
              <div className="founder__portrait-circle">DR</div>
              <div className="founder__portrait-badge">
                <span>🏆</span>
                <span>Founder & Master Coach</span>
              </div>
            </div>
            <div className="founder__quick-facts">
              <div className="founder__fact">
                <span className="founder__fact-num">18+</span>
                <span className="founder__fact-lbl">Years Coaching</span>
              </div>
              <div className="founder__fact">
                <span className="founder__fact-num">3K+</span>
                <span className="founder__fact-lbl">Clients Served</span>
              </div>
              <div className="founder__fact">
                <span className="founder__fact-num">4</span>
                <span className="founder__fact-lbl">Books Written</span>
              </div>
            </div>
          </div>

          <div className="founder__story">
            <div className="label">Founder's Story</div>
            <h2>From Silenced to Unstoppable</h2>
            <div className="divider divider-left" />
            <div className="founder__bio">
              <p>
                I know what it's like to have important things to say and feel invisible when saying them. As a first-generation professional in corporate America, I watched brilliant colleagues get overlooked not because of lack of talent — but because of how they communicated.
              </p>
              <p>
                After 12 years as a VP at a Fortune 100 company, I left to do the work I believe in most: helping talented people find and own their voice. I founded Clarioon in 2012 with one mission — to make transformative communication coaching accessible, practical, and permanent.
              </p>
              <p>
                Our CLARA Method isn't about becoming someone you're not. It's about becoming the fullest version of who you already are — and communicating that to the world with clarity, confidence, and conviction.
              </p>
            </div>
            <div className="highlight-box" style={{ marginTop: '24px' }}>
              <strong>Dr. Diana Reeves</strong> — PhD in Communication from Columbia University, ICF Master Certified Coach, author of "The Clarity Edge" (Wiley, 2019) and "Command Any Room" (Harper Collins, 2022).
            </div>
          </div>
        </div>
      </section>

      {/* The CLARA Method */}
      <section className="section method" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="label">Our Approach</div>
          <h2 className="section-title">The CLARA Method</h2>
          <p className="section-subtitle">
            Every Clarioon program is built on our proprietary four-stage framework — a research-backed process that creates lasting change, not temporary tips.
          </p>
          <div className="method__steps">
            {methodSteps.map((step, i) => (
              <div key={step.step} className="method__step">
                <div className="method__step-icon">{step.icon}</div>
                <div className="method__step-num">{step.step}</div>
                <div className="method__step-connector" style={{ display: i < methodSteps.length - 1 ? 'block' : 'none' }} />
                <div className="method__step-body">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Team */}
      <section className="section coaches">
        <div className="container">
          <div className="label">Meet the Team</div>
          <h2 className="section-title">World-Class Coaches, Real Results</h2>
          <p className="section-subtitle">
            Every Clarioon coach is rigorously vetted, ICF-certified, and brings real-world leadership experience — not just theory.
          </p>
          <div className="grid-3">
            {coaches.map((coach) => (
              <div key={coach.name} className="coach-card card">
                <div className="coach-card__header">
                  <div className="coach-card__avatar" style={{ background: coach.color }}>{coach.initials}</div>
                  <div>
                    <h3 className="coach-card__name">{coach.name}</h3>
                    <p className="coach-card__role">{coach.role}</p>
                  </div>
                </div>
                <p className="coach-card__bio">{coach.bio}</p>
                <div className="coach-card__creds">
                  {coach.creds.map((c) => (
                    <span key={c} className="coach-card__cred">✓ {c}</span>
                  ))}
                </div>
                <div className="coach-card__specialties">
                  <strong>Specialties:</strong>
                  <div className="coach-card__tags">
                    {coach.specialties.map((s) => (
                      <span key={s} className="coach-card__tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="section-sm accreditations" style={{ background: 'var(--light-blue)' }}>
        <div className="container">
          <div className="label">Credentials</div>
          <h2 className="section-title" style={{ marginBottom: '32px' }}>Accreditations &amp; Memberships</h2>
          <div className="accred-grid">
            {accreditations.map((a) => (
              <div key={a.name} className="accred-card">
                <span className="accred-card__badge">{a.badge}</span>
                <strong className="accred-card__name">{a.name}</strong>
                <span className="accred-card__full">{a.full}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media */}
      <section className="section media">
        <div className="container">
          <div className="label">Press &amp; Media</div>
          <h2 className="section-title" style={{ marginBottom: '40px' }}>As Seen In</h2>
          <div className="media-grid">
            {media.map((m) => (
              <div key={m.outlet} className="media-card card">
                <div className="media-card__outlet">{m.outlet}</div>
                <p className="media-card__quote">{m.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm about-cta" style={{ background: 'linear-gradient(135deg, #e3f2fd, #f0f7ff)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#0d47a1', marginBottom: '16px' }}>Ready to Find Your Voice?</h2>
          <p style={{ marginBottom: '28px', fontSize: '1.05rem' }}>Join 5,000+ professionals who've transformed how they communicate — and what they've achieved because of it.</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Book a Free Clarity Call</Link>
            <Link to="/services" className="btn btn-secondary btn-lg">View Programs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
