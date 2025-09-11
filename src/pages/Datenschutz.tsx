import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Datenschutz = () => {
  return (
    <>
      <SEO
        title="Datenschutzerklärung | agentiKM"
        description="Datenschutzerklärung von agentiKM - Informationen zum Schutz Ihrer persönlichen Daten."
        noIndex={true}
      />
      
      <Header />
      
      <main className="pt-16">
        {/* Page Hero */}
        <section className="hero section-sm">
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Datenschutzerklärung
            </h1>
            <p className="hero-subtitle">
              Informationen zum Schutz Ihrer persönlichen Daten
            </p>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="section">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">
              {/* Datenschutz auf einen Blick */}
              <div className="service-card">
                <h2 className="text-2xl font-bold mb-4">Datenschutz auf einen Blick</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Allgemeine Hinweise</h3>
                    <p className="text-muted-foreground">
                      Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                      Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen 
                      Sie persönlich identifiziert werden können.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Datenerfassung auf dieser Website</h3>
                    <p className="text-muted-foreground">
                      Die Datenerfassung auf dieser Website erfolgt zum einen durch Sie, wenn Sie uns Daten über unser 
                      Kontaktformular übermitteln. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim 
                      Besuch der Website durch unsere IT-Systeme erfasst (z.B. technische Daten).
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Wofür nutzen wir Ihre Daten?</h3>
                    <p className="text-muted-foreground">
                      Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                      Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden oder um Ihnen auf Ihre 
                      Anfrage zu antworten.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
                    <p className="text-muted-foreground">
                      Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                      gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
                      oder Löschung dieser Daten zu verlangen.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hosting */}
              <div className="service-card">
                <h2 className="text-2xl font-bold mb-4">Hosting</h2>
                <p className="text-muted-foreground">
                  Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, 
                  werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, 
                  Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe 
                  und sonstige Daten, die über eine Website generiert werden, handeln.
                </p>
                <p className="text-muted-foreground mt-4">
                  Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und 
                  bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und 
                  effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
              </div>

              {/* Allgemeine Hinweise und Pflichtinformationen */}
              <div className="service-card">
                <h2 className="text-2xl font-bold mb-4">Allgemeine Hinweise und Pflichtinformationen</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Datenschutz</h3>
                    <p className="text-muted-foreground">
                      Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
                      Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften 
                      sowie dieser Datenschutzerklärung.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Hinweis zur verantwortlichen Stelle</h3>
                    <p className="text-muted-foreground">
                      Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                    </p>
                    <div className="mt-2 space-y-1">
                      <p>Marvin Krämer</p>
                      <p>agentiKM</p>
                      <p>E-Mail: kontakt@agentikm.de</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Speicherdauer</h3>
                    <p className="text-muted-foreground">
                      Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, 
                      verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                    <p className="text-muted-foreground">
                      Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können 
                      eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf 
                      erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                    <p className="text-muted-foreground">
                      Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer 
                      Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres 
                      Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
                    </p>
                  </div>
                </div>
              </div>

              {/* Datenerfassung auf dieser Website */}
              <div className="service-card">
                <h2 className="text-2xl font-bold mb-4">Datenerfassung auf dieser Website</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Server-Log-Dateien</h3>
                    <p className="text-muted-foreground mb-3">
                      Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
                      Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                    </p>
                    <ul className="text-muted-foreground space-y-1 ml-4">
                      <li>• Browsertyp und Browserversion</li>
                      <li>• verwendetes Betriebssystem</li>
                      <li>• Referrer URL</li>
                      <li>• Hostname des zugreifenden Rechners</li>
                      <li>• Uhrzeit der Serveranfrage</li>
                      <li>• IP-Adresse</li>
                    </ul>
                    <p className="text-muted-foreground mt-3">
                      Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung 
                      dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Kontaktformular</h3>
                    <p className="text-muted-foreground mb-3">
                      Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                      Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der 
                      Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                    </p>
                    <p className="text-muted-foreground mb-3">
                      Die im Kontaktformular erfassten Daten umfassen:
                    </p>
                    <ul className="text-muted-foreground space-y-1 ml-4">
                      <li>• Name</li>
                      <li>• E-Mail-Adresse</li>
                      <li>• Unternehmen</li>
                      <li>• Rolle im Unternehmen</li>
                      <li>• Nachricht</li>
                      <li>• Wunschtermin</li>
                    </ul>
                    <p className="text-muted-foreground mt-3">
                      Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage 
                      von Art. 6 Abs. 1 lit. a DSGVO, sofern Sie Ihre Einwilligung erteilt haben.
                    </p>
                    <p className="text-muted-foreground mt-3">
                      Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung 
                      auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung 
                      entfällt. Zwingende gesetzliche Bestimmungen bleiben unberührt.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ihre Rechte */}
              <div className="service-card">
                <h2 className="text-2xl font-bold mb-4">Ihre Rechte</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Recht auf Auskunft</h3>
                    <p className="text-muted-foreground">
                      Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden 
                      und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Recht auf Berichtigung</h3>
                    <p className="text-muted-foreground">
                      Sie haben das Recht, die Vervollständigung unvollständiger personenbezogener Daten oder die 
                      Berichtigung unrichtiger Daten zu verlangen.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Recht auf Löschung</h3>
                    <p className="text-muted-foreground">
                      Sie haben das Recht, unter bestimmten Umständen die Löschung Ihrer personenbezogenen Daten zu verlangen.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Recht auf Einschränkung der Verarbeitung</h3>
                    <p className="text-muted-foreground">
                      Sie haben das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer 
                      personenbezogenen Daten zu verlangen.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Recht auf Datenübertragbarkeit</h3>
                    <p className="text-muted-foreground">
                      Sie haben das Recht, Ihre personenbezogenen Daten in einem strukturierten, gängigen und 
                      maschinenlesbaren Format zu erhalten.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Kontakt</h3>
                    <p className="text-muted-foreground">
                      Für Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte wenden Sie sich bitte an:
                    </p>
                    <div className="mt-2">
                      <p>E-Mail: kontakt@agentikm.de</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Schlussbemerkung */}
              <div className="service-card">
                <h2 className="text-2xl font-bold mb-4">Aktualität und Änderung dieser Datenschutzerklärung</h2>
                <p className="text-muted-foreground">
                  Diese Datenschutzerklärung ist aktuell gültig und hat den Stand September 2024. Durch die 
                  Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher 
                  beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
                </p>
                <p className="text-muted-foreground mt-4">
                  Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website unter 
                  "https://agentikm.de/datenschutz" von Ihnen abgerufen und ausgedruckt werden.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Datenschutz;