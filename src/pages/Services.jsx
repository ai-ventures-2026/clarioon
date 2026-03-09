import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  {
    id: 'executive',
    icon: '🎯',
    tag: 'Flagship Program',
    tagClass: 'label',
    title: 'Executive Communication Coaching',
    subtitle: 'For senior leaders who are ready to command any room with confidence and clarity.',
    desc: 'Our most comprehensive and transformative offering. This bespoke 1:1 coaching experience is custom-designed around your specific communication challenges, leadership style, and career goals. You\'ll work directly with Dr. Diana Reeves or one of our master coaches.',
    features: [
      '12-week intensive program (or 6-month deep dive)',
      'Weekly 90-minute private sessions',
      'Communication style diagnostic assessment',
      'Custom growth plan & milestone tracking',
      'Video recording & feedback sessions',
      'On-demand Voxer access between sessions',
      'Stakeholder interview & 360° feedback option',
      'Lifetime access to the Clarioon alumni community',
    ],
    ideal: 'C-suite executives, VPs, directors, and high-potential leaders preparing for the next level.',
    outcomes: ['Executive presence that commands attention', 'Clear, compelling storytelling', 'Confidence in high-stakes conversations', 'Authentic leadership communication'],
    highlight: true,
  },
  {
    id: 'speaking',
    icon: '🎤',
    tag: 'Group Program',
    tagClass: 'label-yellow',
    title: 'Public Speaking Mastery',
    subtitle: 'Transform fear into fuel. Become the speaker everyone remembers.',
    desc: 'A structured 8-week group program that takes you from presentation anxiety to confident, captivating speaker. Small cohorts (max 12 people) ensure you get personalized attention and ample practice time every session.',
    features: [
      '8 weeks, 2 sessions per week',
      'Max 12 participants per cohort',
      'Weekly live practice with expert feedback',
      'Signature speech development',
      'Storytelling and structure masterclass',
      'Video analysis of your presentations',
      'Nervousness management toolkit',
      'Capstone keynote presentation',
    ],
    ideal: 'Professionals who present to clients, investors, or leadership — or anyone who wants to speak on stages.',
    outcomes: ['Eliminate presentation anxiety', 'Craft stories that inspire action', 'Command attention from the first word', 'Build a signature speaking style'],
    highlight: false,
  },
  {
    id: 'leadership',
    icon: '👑',
    tag: 'Premium',
    tagClass: 'label',
    title: 'Leadership Presence Program',
    subtitle: 'Develop the gravitas, authenticity, and authority great leaders are known for.',
    desc: 'Leadership Presence is more than how you speak — it\'s how you enter a room, how you listen, how you handle pressure. This 10-week program develops the complete, embodied communication profile of a transformational leader.',
    features: [
      '10-week structured program',
      'Bi-weekly private coaching sessions',
      'Body language & non-verbal mastery module',
      'Executive gravitas workshop',
      'Difficult conversations playbook',
      'Influence & negotiation communication',
      'Managing up, across & down communication',
      'Personalized leadership communication brand guide',
    ],
    ideal: 'Mid to senior leaders who have been told they need to "step up their presence" or who feel their impact doesn\'t match their expertise.',
    outcomes: ['Undeniable executive presence', 'Composure under pressure', 'Influence without authority', 'Authentic, adaptable leadership voice'],
    highlight: false,
  },
  {
    id: 'workshops',
    icon: '🤝',
    tag: 'Team Training',
    tagClass: 'label-yellow',
    title: 'Team Communication Workshops',
    subtitle: 'When teams communicate better, everything gets better.',
    desc: 'Custom-designed full-day and half-day workshops that solve real team communication challenges. From cross-functional alignment to meeting culture to giving better feedback — we design a workshop that fits your team\'s exact needs.',
    features: [
      'Half-day (4hr) or full-day (8hr) formats',
      'Pre-workshop team survey & diagnostic',
      'Interactive, activity-driven sessions',
      'No death by PowerPoint — just real work',
      'Custom workbooks for every participant',
      'Manager toolkit for reinforcement',
      'Post-workshop follow-up session (30 days)',
      'Available in-person or virtual',
    ],
    ideal: 'Leadership teams, project teams, newly formed or restructured teams, and organizations navigating change.',
    outcomes: ['Shared communication norms', 'Better meetings, faster decisions', 'Psychological safety & honest dialogue', 'Stronger cross-team collaboration'],
    highlight: false,
  },
  {
    id: 'clarity',
    icon: '💡',
    tag: 'Quick Start',
    tagClass: 'label',
    title: '1:1 Clarity Sessions',
    subtitle: 'One focused session. One breakthrough. Anytime you need it.',
    desc: 'Sometimes you need focused, expert guidance for one specific situation — an important presentation, a tough conversation, a career-defining pitch. A Clarity Session is a single 75-minute power session with one of our coaches.',
    features: [
      'Single 75-minute private session',
      'Pre-session intake form',
      'Situation-specific coaching',
      'Actionable tactics you can use immediately',
      'Recording of the session provided',
      'Follow-up summary & resource guide',
      'Option to book follow-on sessions at member rate',
      'Book same-week — often same-day',
    ],
    ideal: 'Anyone preparing for an important event, conversation, or presentation and needs expert support fast.',
    outcomes: ['Immediate clarity on your approach', 'Specific tactical improvements', 'Confidence going into the moment', 'A coach in your corner'],
    highlight: false,
  },
  {
    id: 'corporate',
    icon: '🏢',
    tag: 'Enterprise',
    tagClass: 'label',
    title: 'Corporate Training Packages',
    subtitle: 'Scale communication excellence across your entire organization.',
    desc: 'Our enterprise solution brings Clarioon\'s proven methodology to organizations at scale. From cohort coaching programs to company-wide workshops to embedded communication training, we partner with People & Talent teams to build lasting communication capability.',
    features: [
      'Custom program design & facilitation',
      'Cohort-based coaching for high-potentials',
      'Manager and leader development tracks',
      'Integration with L&D and onboarding',
      'Dedicated account manager & success team',
      'Impact measurement & reporting',
      'Train-the-trainer certification available',
      'Minimum 25 participants',
    ],
    ideal: 'HR leaders, L&D teams, and executives who want to build an organization-wide culture of clear communication.',
    outcomes: ['Scalable communication culture', 'Measurable ROI on L&D investment', 'Retention through growth opportunities', 'High-performing, aligned teams'],
    highlight: false,
  },
]

const comparisonData = [
  { feature: 'Format', exec: '1:1 Private', speaking: 'Small Group', leadership: '1:1 Private', workshop: 'Team', clarity: '1:1 Private', corporate: 'Enterprise' },
  { feature: 'Duration', exec: '12 weeks', speaking: '8 weeks', leadership: '10 weeks', workshop: '1 day', clarity: '75 min', corporate: 'Custom' },
  { feature: 'Best For', exec: 'Executives', speaking: 'All Levels', leadership: 'Leaders', workshop: 'Teams', clarity: 'Any Need', corporate: 'Companies' },
]

export default function Services() {
  return (
    <div className="services">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="label" style={{ color: '#fff9c4', background: 'rgba(255,249,196,0.15)' }}>Programs &amp; Services</div>
          <h1>Every Program Designed for<br />One Outcome: Your Transformation</h1>
          <p>From intensive 1:1 coaching to organization-wide training — choose the path that fits your goals, timeline, and team.</p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="services-nav">
        <div className="container services-nav__inner">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="services-nav__link">
              {s.icon} {s.title.split(' ').slice(0, 2).join(' ')}
            </a>
          ))}
        </div>
      </section>

      {/* Services List */}
      <div className="services-list">
        {services.map((service, i) => (
          <section
            key={service.id}
            id={service.id}
            className={`service-section section ${i % 2 === 1 ? 'service-section--alt' : ''}`}
          >
            <div className="container service-section__inner">
              <div className="service-section__content">
                <div className={`label ${service.tagClass}`}>{service.tag}</div>
                <div className="service-section__icon-title">
                  <span className="service-section__icon">{service.icon}</span>
                  <div>
                    <h2 className="service-section__title">{service.title}</h2>
                    <p className="service-section__subtitle">{service.subtitle}</p>
                  </div>
                </div>
                <div className="divider divider-left" style={{ margin: '20px 0' }} />
                <p className="service-section__desc">{service.desc}</p>

                <div className="service-section__ideal">
                  <strong>Ideal for:</strong> {service.ideal}
                </div>

                <div className="service-section__outcomes">
                  <strong>Key Outcomes:</strong>
                  <div className="service-section__outcomes-list">
                    {service.outcomes.map((o) => (
                      <span key={o} className="outcome-tag">✓ {o}</span>
                    ))}
                  </div>
                </div>

                <Link to="/contact" className={`btn ${service.highlight ? 'btn-primary' : 'btn-secondary'} btn-lg`} style={{ marginTop: '28px' }}>
                  Apply for This Program
                </Link>
              </div>

              <div className="service-section__features">
                <div className={`features-card${service.highlight ? ' features-card--featured' : ''}`}>
                  <h4 className="features-card__title">What's Included</h4>
                  <ul className="features-card__list">
                    {service.features.map((f) => (
                      <li key={f} className="features-card__item">
                        <span className="features-card__check">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="features-card__cta">
                    <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      Get Pricing &amp; Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="section services-cta" style={{ background: 'linear-gradient(135deg, #0d47a1, #2196f3)', textAlign: 'center' }}>
        <div className="container">
          <div className="label" style={{ color: '#fff9c4', background: 'rgba(255,249,196,0.15)', marginBottom: '16px' }}>Not Sure Where to Start?</div>
          <h2 style={{ color: '#fff', marginBottom: '16px' }}>Let's Find Your Perfect Program</h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.05rem', maxWidth: '540px', margin: '0 auto 32px' }}>
            Book a free 30-minute consultation and we'll match you with the right program based on your goals, timeline, and budget.
          </p>
          <Link to="/contact" className="btn btn-white btn-lg">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
