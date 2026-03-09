import { Outlet, Link, useLocation } from "react-router";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/schedule", label: "Schedule" },
    { path: "/speakers", label: "Speakers" },
    { path: "/about", label: "About" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-cyan-400" />
              <div>
                <div className="text-white text-xl">CYBER 101</div>
                <div className="text-cyan-400 text-xs">MBCCET</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-colors ${
                    location.pathname === item.path
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <img src="/hive logo.png" alt="Hive Logo" className="h-8 md:h-10 w-auto" />
                <img src="/mulaen.png" alt="muLearn Logo" className="h-8 md:h-10 w-auto" />
              </div>
              {/* Mobile menu button */}
              <button
                className="md:hidden text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-blue-500/20">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-2 transition-colors ${
                    location.pathname === item.path
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950/50 border-t border-blue-500/20 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <Shield className="w-6 h-6 text-cyan-400" />
                <span className="text-white">CYBER 101</span>
              </div>
              <p className="text-gray-400 text-sm">
                2-Day Cybersecurity Event at MBCCET
              </p>
            </div>
            <div>
              <h3 className="text-white mb-2">Organized By</h3>
              <p className="text-gray-400 text-sm">
                Cybersecurity IG - muLearn MBCCET
              </p>
              <p className="text-gray-400 text-sm">Hive Community</p>
            </div>
            <div>
              <h3 className="text-white mb-2">Event Dates</h3>
              <p className="text-cyan-400 text-sm">March 23 - 24, 2026</p>
              <p className="text-gray-400 text-sm mt-1">MBCCET Campus</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-500/20 text-center text-gray-400 text-sm">
            © 2026 MBCCET. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
