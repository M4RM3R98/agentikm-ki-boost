import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "agentiKM",
    "url": "https://agentikm.de",
    "logo": "https://agentikm.de/logo.png",
    "description": "KI-Use-Cases & Enablement für KMU (DACH). Wir identifizieren KI-Use-Cases in Ihren Prozessen und befähigen Ihr Team.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "kontakt@agentikm.de"
    }
  };

  return (
    <>
      <SEO
        title="agentiKM | KI-Use-Cases & Enablement für KMU (DACH)"
        description="Wir identifizieren KI-Use-Cases in Ihren Prozessen und befähigen Ihr Team – schnell, pragmatisch, budgetfreundlich."
        keywords="KI Use Case, Use-Case-Discovery, KI Workshop, Enablement, KMU, Generative KI Beratung, Prozessautomatisierung"
        structuredData={organizationSchema}
      />
      
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="hero">
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              KI-Use-Cases finden. Teams befähigen. Wirkung erzielen.
            </h1>
            <p className="hero-subtitle mb-8">
              Wir identifizieren tragfähige KI-Anwendungen in Ihren Prozessen und machen Ihr Team in Wochen statt Monaten handlungsfähig.
            </p>
            <div className="hero-ctas">
              <Link to="/kontakt" className="btn-primary">
                Kostenloses Erstgespräch
              </Link>
              <Link to="/leistungen" className="btn-secondary">
                Leistungen ansehen
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="benefits">
              <div className="text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-3">Strukturierte Use-Case-Discovery</h3>
                <p className="text-muted-foreground">Priorisierung nach Wirkung & Machbarkeit für maximalen ROI</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3">Enablement statt Abhängigkeiten</h3>
                <p className="text-muted-foreground">Mitarbeitende befähigen für nachhaltige KI-Kompetenz</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Schnelle Ergebnisse</h3>
                <p className="text-muted-foreground">Greifbare Prototypen & klare Next Steps in wenigen Wochen</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section process bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">So arbeiten wir</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Unser bewährter 3-Schritte-Prozess für nachhaltigen KI-Erfolg
            </p>
            <div className="process-steps">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full text-xl font-bold mb-4">1</div>
                <h3 className="text-xl font-semibold mb-3">Entdecken</h3>
                <p className="text-muted-foreground">Prozess- und Datenaufnahme, Ideation-Sessions zur Identifikation der besten KI-Use-Cases</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full text-xl font-bold mb-4">2</div>
                <h3 className="text-xl font-semibold mb-3">Priorisieren</h3>
                <p className="text-muted-foreground">Bewertung nach Wirkung × Aufwand für einen kuratierten Use-Case-Backlog mit ROI-Hypothesen</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full text-xl font-bold mb-4">3</div>
                <h3 className="text-xl font-semibold mb-3">Befähigen</h3>
                <p className="text-muted-foreground">Hands-on Workshops und Enablement für eigenständig lauffähige KI-Piloten</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="section">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Unsere Leistungen</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Von der Use-Case-Discovery bis zum vollständigen Enablement
            </p>
            <div className="services-grid">
              <div className="service-card text-left">
                <h3 className="text-xl font-semibold mb-4">Use Case Discovery</h3>
                <p className="text-muted-foreground mb-6">
                  Systematische Identifikation und Bewertung von KI-Anwendungsfällen in Ihren Geschäftsprozessen für maximalen Impact.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Prozess- und Datenaufnahme</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Ideation-Sessions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Priorisierungs-Matrix</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Use-Case-Backlog</span>
                  </li>
                </ul>
                <Link to="/kontakt" className="btn-primary">
                  Mehr erfahren
                </Link>
              </div>
              
              <div className="service-card text-left">
                <h3 className="text-xl font-semibold mb-4">Workshops</h3>
                <p className="text-muted-foreground mb-6">
                  Praxisorientierte Workshops für Management und Teams zur Entwicklung von KI-Kompetenzen und Quick-Wins.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Management-Briefing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Discovery-Workshops</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Hands-on-Sessions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Gen-KI-Grundlagen</span>
                  </li>
                </ul>
                <Link to="/kontakt" className="btn-primary">
                  Mehr erfahren
                </Link>
              </div>
              
              <div className="service-card text-left">
                <h3 className="text-xl font-semibold mb-4">Enablement</h3>
                <p className="text-muted-foreground mb-6">
                  Nachhaltige Befähigung Ihrer Teams für eigenständige KI-Implementierung und kontinuierliche Weiterentwicklung.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">KI-Leitplanken</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Tool-Auswahl</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Quick-Win-Umsetzung</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Coaching & Support</span>
                  </li>
                </ul>
                <Link to="/kontakt" className="btn-primary">
                  Mehr erfahren
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="section bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Erfolgsgeschichten</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Wie wir KMU zu messbaren KI-Erfolgen verhelfen
            </p>
            <div className="services-grid lg:grid-cols-2">
              <div className="service-card text-left">
                <h3 className="text-xl font-semibold mb-4">Automatisierte Angebotsvorbereitung</h3>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <strong className="text-foreground">Ausgangslage:</strong> Zeitaufwändige manuelle Erstellung von Angeboten mit hohem Aufwand für Recherche und Dokumentation.
                  </div>
                  <div>
                    <strong className="text-foreground">Vorgehen:</strong> KI-gestützte Automatisierung der Angebotslogik mit Integration bestehender CRM-Systeme.
                  </div>
                  <div>
                    <strong className="text-foreground">Ergebnis:</strong> 60% Zeitersparnis bei der Angebotserstellung und verbesserte Konsistenz.
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">B2B Services</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Automatisierung</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">60% Zeitersparnis</span>
                </div>
              </div>
              
              <div className="service-card text-left">
                <h3 className="text-xl font-semibold mb-4">Wissensbot für Support</h3>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <strong className="text-foreground">Ausgangslage:</strong> Hohe Anzahl wiederkehrender Support-Anfragen belastet das Kundenservice-Team.
                  </div>
                  <div>
                    <strong className="text-foreground">Vorgehen:</strong> Entwicklung eines KI-basierten Chatbots mit Zugriff auf interne Wissensdatenbank.
                  </div>
                  <div>
                    <strong className="text-foreground">Ergebnis:</strong> 40% Reduktion der Support-Anfragen und höhere Kundenzufriedenheit.
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">E-Commerce</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Kundensupport</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">40% weniger Anfragen</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="section">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Warum agentiKM für KMU?</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Pragmatisch, schnell und budgetsensibel – genau richtig für mittelständische Unternehmen
            </p>
            <div className="benefits">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">DACH-Fokus</h3>
                <p className="text-muted-foreground">Spezialisiert auf den deutschsprachigen Markt mit Verständnis für lokale Besonderheiten</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⏱️</div>
                <h3 className="text-xl font-semibold mb-3">Schnelle Time-to-Value</h3>
                <p className="text-muted-foreground">Erste greifbare Resultate in der Regel in 2-4 Wochen statt monatelanger Projekte</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold mb-3">KMU-Budget-freundlich</h3>
                <p className="text-muted-foreground">Transparente Pakete ohne 6-stellige Beratungskosten – perfekt für den Mittelstand</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Häufig gestellte Fragen</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Antworten auf die wichtigsten Fragen zu unserer KI-Beratung
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              <details className="faq-item">
                <summary className="faq-question cursor-pointer">
                  Brauchen wir bereits Daten oder KI-Tools?
                </summary>
                <div className="faq-answer">
                  Nein, Sie können mit dem starten, was Sie haben. Wir bewerten Ihre vorhandenen Daten und Systeme und zeigen Ihnen, welche KI-Anwendungen bereits heute möglich sind.
                </div>
              </details>
              
              <details className="faq-item">
                <summary className="faq-question cursor-pointer">
                  Wie schnell sehen wir erste Ergebnisse?
                </summary>
                <div className="faq-answer">
                  Bereits nach dem ersten Workshop haben Sie konkrete Use-Case-Ideen. Erste Prototypen entstehen typischerweise innerhalb von 2-4 Wochen.
                </div>
              </details>
              
              <details className="faq-item">
                <summary className="faq-question cursor-pointer">
                  Arbeiten Sie auch mit Non-Tech-Teams?
                </summary>
                <div className="faq-answer">
                  Absolut! Wir erklären KI-Konzepte verständlich und praxisnah. Technisches Know-how ist nicht erforderlich – wichtig ist Ihr Geschäftsverständnis.
                </div>
              </details>
              
              <details className="faq-item">
                <summary className="faq-question cursor-pointer">
                  Was unterscheidet Sie von Großberatungen?
                </summary>
                <div className="faq-answer">
                  Wir sind schneller, pragmatischer und budgetfreundlicher. Statt monatelanger Analysen liefern wir in Wochen umsetzbare Ergebnisse – perfekt für KMU.
                </div>
              </details>
              
              <details className="faq-item">
                <summary className="faq-question cursor-pointer">
                  Können wir klein starten?
                </summary>
                <div className="faq-answer">
                  Ja! Wir bieten skalierbare Pakete. Sie können mit einem Use-Case-Workshop beginnen und je nach Erfolg erweitern.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-banner">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Bereit für Ihren ersten KI-Use-Case?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Lassen Sie uns in einem kostenlosen Erstgespräch Ihre Potentiale entdecken.
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

export default Index;