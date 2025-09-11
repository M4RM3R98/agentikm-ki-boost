import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="header">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            agentiKM
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-links">
            <Link
              to="/leistungen"
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/leistungen') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Leistungen
            </Link>
            <Link
              to="/kontakt"
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/kontakt') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Kontakt
            </Link>
            <Link to="/kontakt" className="btn-primary">
              Kostenloses Erstgespräch
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Menü öffnen"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div 
          className="mobile-nav-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeMobileMenu();
          }}
        >
          <div className="relative h-full">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="mobile-nav-logo">agentiKM</div>
              <button
                className="mobile-nav-close"
                onClick={closeMobileMenu}
                aria-label="Menü schließen"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation */}
            <div className="mobile-nav-sitemap">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground">Navigation</h3>
                <div className="space-y-4">
                  <Link
                    to="/"
                    onClick={closeMobileMenu}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent transition-colors"
                  >
                    <span className="text-xl">🏠</span>
                    <div>
                      <div className="font-medium text-foreground">Startseite</div>
                      <div className="text-sm text-muted-foreground">KI-Use-Cases & Enablement</div>
                    </div>
                  </Link>
                  <Link
                    to="/leistungen"
                    onClick={closeMobileMenu}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent transition-colors"
                  >
                    <span className="text-xl">🔍</span>
                    <div>
                      <div className="font-medium text-foreground">Leistungen</div>
                      <div className="text-sm text-muted-foreground">Discovery, Workshops, Enablement</div>
                    </div>
                  </Link>
                  <Link
                    to="/kontakt"
                    onClick={closeMobileMenu}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent transition-colors"
                  >
                    <span className="text-xl">📞</span>
                    <div>
                      <div className="font-medium text-foreground">Kontakt</div>
                      <div className="text-sm text-muted-foreground">Kostenloses Erstgespräch</div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="space-y-6 mt-8">
                <h3 className="text-lg font-semibold text-foreground">Rechtliches</h3>
                <div className="space-y-4">
                  <Link
                    to="/impressum"
                    onClick={closeMobileMenu}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent transition-colors"
                  >
                    <span className="text-xl">📄</span>
                    <div>
                      <div className="font-medium text-foreground">Impressum</div>
                      <div className="text-sm text-muted-foreground">Rechtliche Informationen</div>
                    </div>
                  </Link>
                  <Link
                    to="/datenschutz"
                    onClick={closeMobileMenu}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent transition-colors"
                  >
                    <span className="text-xl">🔒</span>
                    <div>
                      <div className="font-medium text-foreground">Datenschutz</div>
                      <div className="text-sm text-muted-foreground">Datenschutzerklärung</div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <Link
                  to="/kontakt"
                  onClick={closeMobileMenu}
                  className="btn-primary w-full text-center"
                >
                  Kostenloses Erstgespräch
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;