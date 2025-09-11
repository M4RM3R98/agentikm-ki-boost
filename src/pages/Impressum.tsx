import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Impressum = () => {
  return (
    <>
      <SEO
        title="Impressum | agentiKM"
        description="Impressum und rechtliche Informationen von agentiKM - KI-Beratung für KMU."
        noIndex={true}
      />
      
      <Header />
      
      <main className="pt-16">
        {/* Page Hero */}
        <section className="hero section-sm">
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Impressum
            </h1>
            <p className="hero-subtitle">
              Rechtliche Informationen gemäß § 5 TMG
            </p>
          </div>
        </section>

        {/* Legal Content */}
        <section className="section">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">
              {/* Angaben gemäß § 5 TMG */}
              <div className="service-card">
                <h2 className="text-2xl font-bold mb-4">Angaben gemäß § 5 TMG</h2>
                <div className="space-y-2">
                  <p><strong>Verantwortlicher:</strong> Marvin Krämer</p>
                  <p><strong>agentiKM</strong></p>
                  <p><strong>E-Mail:</strong> kontakt@agentikm.de</p>
                  <p><strong>Website:</strong> www.agentikm.de</p>
                </div>
              </div>

              {/* Berufsbezeichnung */}
              <div className="service-card">
                <h2 className="text-2xl font-bold mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                <p>Berufsbezeichnung: Unternehmensberater</p>
                <p>Die Berufsbezeichnung wurde in Deutschland verliehen.</p>
              </div>

              {/* Redaktionell verantwortlich */}
              <div className="service-card">
                <h2 className="text-2xl font-bold mb-4">Redaktionell verantwortlich</h2>
                <p>Marvin Krämer</p>
                <p>agentiKM</p>
              </div>

              {/* EU-Streitschlichtung */}
              <div className="service-card">
                <h2 className="text-2xl font-bold mb-4">EU-Streitschlichtung</h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                  <a href="https://ec.europa.eu/consumers/odr/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
              </div>

              {/* Verbraucherstreitbeilegung */}
              <div className="service-card">
                <h2 className="text-2xl font-bold mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              {/* Haftung für Inhalte */}
              <div className="service-card">
                <h2 className="text-2xl font-bold mb-4">Haftung für Inhalte</h2>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                  unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p className="mt-4">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                  Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der 
                  Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                  Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>

              {/* Haftung für Links */}
              <div className="service-card">
                <h2 className="text-2xl font-bold mb-4">Haftung für Links</h2>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
                <p className="mt-4">
                  Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                  Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche 
                  Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht 
                  zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </div>

              {/* Urheberrecht */}
              <div className="service-card">
                <h2 className="text-2xl font-bold mb-4">Urheberrecht</h2>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
                <p className="mt-4">
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. 
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
                  Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem 
                  auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei 
                  Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>

              {/* Datenschutz */}
              <div className="service-card">
                <h2 className="text-2xl font-bold mb-4">Datenschutz</h2>
                <p>
                  Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf 
                  unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben 
                  werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre 
                  ausdrückliche Zustimmung nicht an Dritte weitergegeben.
                </p>
                <p className="mt-4">
                  Weitere Informationen zum Datenschutz finden Sie in unserer{' '}
                  <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a>.
                </p>
              </div>

              {/* Technische Umsetzung */}
              <div className="service-card">
                <h2 className="text-2xl font-bold mb-4">Technische Umsetzung</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Responsive Design</h3>
                    <p className="text-muted-foreground">
                      Diese Website ist für die Nutzung auf verschiedenen Endgeräten optimiert.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Barrierefreiheit</h3>
                    <p className="text-muted-foreground">
                      Wir bemühen uns, diese Website barrierefrei zu gestalten und kontinuierlich zu verbessern.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Performance</h3>
                    <p className="text-muted-foreground">
                      Die Website ist für schnelle Ladezeiten und optimale Nutzererfahrung entwickelt.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Verwendete Technologien</h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• HTML5, CSS3, JavaScript</li>
                      <li>• React und TypeScript</li>
                      <li>• Tailwind CSS für Styling</li>
                      <li>• Google Fonts (lokal gehostet)</li>
                      <li>• SSL-Verschlüsselung</li>
                      <li>• Keine Tracking-Cookies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Hinweise zur Website */}
              <div className="service-card">
                <h2 className="text-2xl font-bold mb-4">Hinweise zur Website</h2>
                <div className="space-y-2">
                  <p><strong>Stand der Informationen:</strong> September 2024</p>
                  <p><strong>Letzte Aktualisierung:</strong> September 2024</p>
                  <p><strong>Haftungsausschluss:</strong> Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.</p>
                  <p><strong>Kontakt bei Fragen:</strong> Für Fragen zum Impressum wenden Sie sich bitte an kontakt@agentikm.de</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Impressum;