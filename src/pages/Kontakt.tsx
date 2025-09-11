import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { useToast } from '@/hooks/use-toast';

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    preferred_date: '',
    privacy_accepted: false
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy_accepted) {
      toast({
        title: "Datenschutz",
        description: "Bitte akzeptieren Sie die Datenschutzerklärung.",
        variant: "destructive"
      });
      return;
    }

    // In a real application, you would send this data to your backend
    toast({
      title: "Nachricht gesendet!",
      description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      role: '',
      message: '',
      preferred_date: '',
      privacy_accepted: false
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <>
      <SEO
        title="Kontakt | Kostenloses Erstgespräch"
        description="Kontaktieren Sie agentiKM für ein kostenloses Erstgespräch zu KI-Use-Cases und Enablement für Ihr KMU."
        keywords="Kontakt, Erstgespräch, KI Beratung, agentiKM"
      />
      
      <Header />
      
      <main className="pt-16">
        {/* Page Hero */}
        <section className="hero section-sm">
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Kostenloses Erstgespräch vereinbaren
            </h1>
            <p className="hero-subtitle">
              Lassen Sie uns gemeinsam Ihre KI-Potentiale entdecken – unverbindlich und kostenfrei
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Ihre Nachricht an uns</h2>
                <p className="text-muted-foreground mb-8">
                  Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-Mail-Adresse *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="ihre.email@unternehmen.de"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Unternehmen *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium mb-2">
                      Ihre Rolle im Unternehmen
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Bitte wählen Sie...</option>
                      <option value="Geschäftsführung">Geschäftsführung</option>
                      <option value="Operations">Operations</option>
                      <option value="IT/Data Science">IT/Data Science</option>
                      <option value="Fachbereichsleitung">Fachbereichsleitung</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Vertrieb">Vertrieb</option>
                      <option value="Human Resources">Human Resources</option>
                      <option value="Sonstiges">Sonstiges</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Ihre Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-textarea"
                      placeholder="Erzählen Sie uns von Ihren Herausforderungen und Zielen..."
                    />
                  </div>

                  <div>
                    <label htmlFor="preferred_date" className="block text-sm font-medium mb-2">
                      Wunschtermin für Erstgespräch
                    </label>
                    <input
                      type="text"
                      id="preferred_date"
                      name="preferred_date"
                      value={formData.preferred_date}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="z.B. nächste Woche, Freitag Nachmittag..."
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="privacy_accepted"
                      name="privacy_accepted"
                      checked={formData.privacy_accepted}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                    <label htmlFor="privacy_accepted" className="text-sm text-muted-foreground">
                      Ich akzeptiere die{' '}
                      <a href="/datenschutz" className="text-primary hover:underline">
                        Datenschutzerklärung
                      </a>{' '}
                      und stimme der Verarbeitung meiner Daten zu. *
                    </label>
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Nachricht senden
                  </button>
                </form>
              </div>

              {/* Direct Contact */}
              <div className="service-card">
                <h2 className="text-2xl font-bold mb-6">Direkter Kontakt</h2>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h3 className="font-semibold">Marvin Krämer</h3>
                    <p className="text-muted-foreground">Gründer & KI-Strategieberater</p>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p>📧 kontakt@agentikm.de</p>
                    <p>🌐 www.agentikm.de</p>
                    <p>📍 DACH-Region</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-semibold mb-4">Warum ein Erstgespräch?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-sm">Kostenlose Potentialanalyse Ihrer Prozesse</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-sm">Konkrete Use-Case-Ideen für Ihr Unternehmen</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-sm">Realistische Einschätzung von Aufwand und ROI</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-sm">Passende Paket-Empfehlung für Ihre Bedürfnisse</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-sm">Keine Verpflichtungen oder versteckten Kosten</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Typischer Gesprächsablauf</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">1</div>
                      <div>
                        <h4 className="font-medium">Kennenlernen (10 Min)</h4>
                        <p className="text-sm text-muted-foreground">Ihr Unternehmen, Ihre Rolle, aktuelle Herausforderungen</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">2</div>
                      <div>
                        <h4 className="font-medium">Potentialanalyse (15 Min)</h4>
                        <p className="text-sm text-muted-foreground">Identifikation von KI-Opportunities in Ihren Prozessen</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">3</div>
                      <div>
                        <h4 className="font-medium">Empfehlung (5 Min)</h4>
                        <p className="text-sm text-muted-foreground">Nächste Schritte und passende Lösungsansätze</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="section bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Das sagen unsere Kunden</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Erfahrungen aus ersten Gesprächen und erfolgreichen Projekten
            </p>
            <div className="services-grid">
              <div className="service-card">
                <p className="text-muted-foreground mb-4 italic">
                  "Bereits im Erstgespräch haben wir drei konkrete Use-Cases identifiziert, die wir sofort umsetzen konnten. Sehr praxisorientiert und direkt umsetzbar."
                </p>
                <p className="font-semibold">Thomas M., Geschäftsführer</p>
                <p className="text-sm text-muted-foreground">Mittelständisches B2B-Unternehmen</p>
              </div>
              
              <div className="service-card">
                <p className="text-muted-foreground mb-4 italic">
                  "Endlich jemand, der KI für KMU verständlich erklärt und nicht mit überteuerten Enterprise-Lösungen kommt. Sehr zu empfehlen!"
                </p>
                <p className="font-semibold">Sarah K., Operations Managerin</p>
                <p className="text-sm text-muted-foreground">E-Commerce Unternehmen</p>
              </div>
              
              <div className="service-card">
                <p className="text-muted-foreground mb-4 italic">
                  "Der Workshop hat unserem Team die Augen geöffnet. Wir sparen jetzt 3 Stunden pro Tag durch simple KI-Automatisierungen."
                </p>
                <p className="font-semibold">Michael R., IT-Leiter</p>
                <p className="text-sm text-muted-foreground">Produktionsunternehmen</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Fragen zum Erstgespräch</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Häufige Fragen rund um unser kostenloses Beratungsgespräch
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              <details className="faq-item">
                <summary className="faq-question cursor-pointer">
                  Ist das Erstgespräch wirklich kostenlos?
                </summary>
                <div className="faq-answer">
                  Ja, absolut. Das 30-minütige Erstgespräch ist für Sie komplett kostenfrei und unverbindlich. Sie erhalten bereits konkrete Insights und Use-Case-Ideen, ohne dass Kosten entstehen.
                </div>
              </details>
              
              <details className="faq-item">
                <summary className="faq-question cursor-pointer">
                  Wie lange dauert das Gespräch?
                </summary>
                <div className="faq-answer">
                  Das Erstgespräch dauert in der Regel 30 Minuten. Je nach Komplexität Ihrer Situation kann es auch etwas länger werden – das entscheiden Sie.
                </div>
              </details>
              
              <details className="faq-item">
                <summary className="faq-question cursor-pointer">
                  Findet das Gespräch online oder vor Ort statt?
                </summary>
                <div className="faq-answer">
                  Standardmäßig führen wir Erstgespräche per Videokonferenz durch. Bei Interesse an einer intensiveren Zusammenarbeit sind auch Vor-Ort-Termine im DACH-Raum möglich.
                </div>
              </details>
              
              <details className="faq-item">
                <summary className="faq-question cursor-pointer">
                  Muss ich mich auf das Gespräch vorbereiten?
                </summary>
                <div className="faq-answer">
                  Nein, eine spezielle Vorbereitung ist nicht nötig. Hilfreich ist, wenn Sie Ihre aktuellen Herausforderungen und Geschäftsprozesse kurz beschreiben können.
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Kontakt;