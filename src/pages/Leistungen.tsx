import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Leistungen = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://agentikm.de"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Leistungen",
        "item": "https://agentikm.de/leistungen"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Leistungen | Use-Case-Discovery, Workshops, Enablement"
        description="Unsere KI-Beratungsleistungen: Use-Case-Discovery, praxisorientierte Workshops und nachhaltiges Enablement für KMU."
        keywords="KI Beratung, Use-Case-Discovery, KI Workshop, Enablement, KMU, Prozessautomatisierung"
        structuredData={breadcrumbSchema}
      />
      
      <Header />
      
      <main className="pt-16">
        {/* Page Hero */}
        <section className="hero section-sm">
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Unsere Leistungen
            </h1>
            <p className="hero-subtitle">
              Von der Use-Case-Discovery bis zum vollständigen Enablement – Ihr Weg zu nachhaltigen KI-Erfolgen
            </p>
          </div>
        </section>

        {/* Services Detail */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="services-grid">
              <div className="service-card">
                <div className="text-4xl mb-4">🔍</div>
                <h2 className="text-2xl font-bold mb-4">Use Case Discovery</h2>
                <p className="text-muted-foreground mb-6">
                  Systematische Identifikation und Bewertung von KI-Anwendungsfällen in Ihren Geschäftsprozessen. Wir analysieren Ihre Daten, Prozesse und Herausforderungen, um die wertvollsten KI-Opportunities zu identifizieren.
                </p>
                <h4 className="font-semibold mb-3">Was wir machen:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Detaillierte Prozess- und Datenlandschafts-Aufnahme</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Moderierte Ideation-Sessions mit Ihrem Team</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Bewertung nach Wirkung × Machbarkeit × Aufwand</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Priorisierter Use-Case-Backlog mit ROI-Hypothesen</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Roadmap für die schrittweise Umsetzung</span>
                  </li>
                </ul>
                <p className="font-semibold mb-4">Ihr Ergebnis:</p>
                <p className="text-muted-foreground mb-6">
                  Ein klar priorisierter Backlog der wertvollsten KI-Use-Cases für Ihr Unternehmen mit konkreten ROI-Schätzungen und Umsetzungsplänen.
                </p>
                <Link to="/kontakt" className="btn-primary">
                  Jetzt starten
                </Link>
              </div>

              <div className="service-card">
                <div className="text-4xl mb-4">🎓</div>
                <h2 className="text-2xl font-bold mb-4">Workshops</h2>
                <p className="text-muted-foreground mb-6">
                  Praxisorientierte Workshops für Management und Teams zur Entwicklung von KI-Kompetenzen. Von strategischen Überlegungen bis hin zu hands-on Prototyping – wir bringen Ihr Team auf Speed.
                </p>
                <h4 className="font-semibold mb-3">Was wir machen:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Management-Briefing zu KI-Strategien und -Chancen</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Discovery-Workshops zur Use-Case-Identifikation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Hands-on-Sessions mit Tools und Prototyping</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Generative KI Grundlagen für alle Mitarbeitenden</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Entwicklung von KI-Governance und -Richtlinien</span>
                  </li>
                </ul>
                <p className="font-semibold mb-4">Ihr Ergebnis:</p>
                <p className="text-muted-foreground mb-6">
                  KI-kompetente Teams mit praktischer Erfahrung und ersten funktionsfähigen Prototypen sowie klaren Richtlinien für den KI-Einsatz.
                </p>
                <Link to="/kontakt" className="btn-primary">
                  Workshop buchen
                </Link>
              </div>

              <div className="service-card">
                <div className="text-4xl mb-4">🚀</div>
                <h2 className="text-2xl font-bold mb-4">Enablement</h2>
                <p className="text-muted-foreground mb-6">
                  Nachhaltige Befähigung Ihrer Teams für eigenständige KI-Implementierung. Wir begleiten Sie bei der Umsetzung der ersten Use-Cases und stellen sicher, dass Ihr Team selbstständig weitermachen kann.
                </p>
                <h4 className="font-semibold mb-3">Was wir machen:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Entwicklung von KI-Leitplanken und -Governance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Tool-Evaluierung und -Auswahl für Ihre Anforderungen</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Begleitete Umsetzung der ersten Quick-Win Use-Cases</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Training und Coaching für interne Champions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Aufbau interner KI-Kompetenzen und -Prozesse</span>
                  </li>
                </ul>
                <p className="font-semibold mb-4">Ihr Ergebnis:</p>
                <p className="text-muted-foreground mb-6">
                  Selbstständig handlungsfähige Teams mit produktiven KI-Anwendungen und der Kompetenz für kontinuierliche Weiterentwicklung.
                </p>
                <Link to="/kontakt" className="btn-primary">
                  Enablement starten
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Process */}
        <section className="section process bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Unser bewährter Prozess</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              So führen wir Sie Schritt für Schritt zu nachhaltigen KI-Erfolgen
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="service-card">
                <h3 className="text-xl font-bold mb-2">Phase 1: Entdecken</h3>
                <p className="text-sm text-primary font-medium mb-4">2-3 Wochen</p>
                <p className="text-muted-foreground mb-4">
                  Umfassende Analyse Ihrer Geschäftsprozesse, Datenlandschaft und Herausforderungen zur Identifikation der wertvollsten KI-Opportunities.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Stakeholder-Interviews</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Prozessanalyse</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Datenlandschafts-Aufnahme</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Ideation-Workshops</span>
                  </li>
                </ul>
              </div>

              <div className="service-card">
                <h3 className="text-xl font-bold mb-2">Phase 2: Priorisieren</h3>
                <p className="text-sm text-primary font-medium mb-4">1-2 Wochen</p>
                <p className="text-muted-foreground mb-4">
                  Bewertung und Priorisierung der identifizierten Use-Cases nach Wirkung, Machbarkeit und Aufwand für maximalen ROI.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Impact-Effort-Matrix</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">ROI-Schätzungen</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Machbarkeitsbewertung</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Roadmap-Entwicklung</span>
                  </li>
                </ul>
              </div>

              <div className="service-card">
                <h3 className="text-xl font-bold mb-2">Phase 3: Befähigen</h3>
                <p className="text-sm text-primary font-medium mb-4">3-6 Wochen</p>
                <p className="text-muted-foreground mb-4">
                  Hands-on Umsetzung der ersten Use-Cases und nachhaltiges Enablement Ihrer Teams für eigenständige Weiterentwicklung.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Prototyp-Entwicklung</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Team-Training</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Tool-Implementation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Governance-Setup</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="section">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Branchen & Anwendungsbereiche</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Unsere Expertise erstreckt sich über verschiedene Branchen und Unternehmensbereiche
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="font-semibold mb-2">B2B Services</h3>
                <p className="text-sm text-muted-foreground">Automatisierung von Angebots- und Vertriebsprozessen</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="font-semibold mb-2">E-Commerce & Retail</h3>
                <p className="text-sm text-muted-foreground">Personalisierung und Kundensupport-Optimierung</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="font-semibold mb-2">Produktion & Logistik</h3>
                <p className="text-sm text-muted-foreground">Predictive Maintenance und Supply Chain Optimierung</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="font-semibold mb-2">Finanzdienstleistungen</h3>
                <p className="text-sm text-muted-foreground">Risikobewertung und Compliance-Automatisierung</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="font-semibold mb-2">Gesundheitswesen</h3>
                <p className="text-sm text-muted-foreground">Dokumentationsautomatisierung und Patientenkommunikation</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="font-semibold mb-2">Bildung & Training</h3>
                <p className="text-sm text-muted-foreground">Personalisierte Lerninhalte und Verwaltungsautomatisierung</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="section bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Messbare Erfolge</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Diese Ergebnisse erzielen unsere Kunden typischerweise
            </p>
            <div className="services-grid">
              <div className="service-card text-center">
                <div className="pricing-price">40-70%</div>
                <h3 className="text-xl font-semibold mb-3">Zeitersparnis</h3>
                <p className="text-muted-foreground">
                  Durch Automatisierung repetitiver Aufgaben und intelligente Prozessoptimierung
                </p>
              </div>
              <div className="service-card text-center">
                <div className="pricing-price">2-4x</div>
                <h3 className="text-xl font-semibold mb-3">Schnellere Prozesse</h3>
                <p className="text-muted-foreground">
                  Beschleunigte Bearbeitung durch KI-gestützte Workflows und Entscheidungshilfen
                </p>
              </div>
              <div className="service-card text-center">
                <div className="pricing-price">ROI+</div>
                <h3 className="text-xl font-semibold mb-3">Positive Rendite</h3>
                <p className="text-muted-foreground">
                  Messbare Kosteneinsparungen und Umsatzsteigerungen bereits im ersten Jahr
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-banner">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Welche Leistung passt zu Ihnen?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Lassen Sie uns in einem kostenlosen Erstgespräch den optimalen Weg für Ihr Unternehmen finden.
            </p>
            <Link to="/kontakt" className="btn-secondary">
              Kostenloses Erstgespräch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Leistungen;