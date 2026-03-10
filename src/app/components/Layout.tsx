import { Outlet, Link, useLocation } from "react-router";
import { Shield } from "lucide-react";

export function Layout() {
  const location = useLocation();

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
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0 pr-4 md:pr-0">
              <Shield className="w-7 h-7 md:w-8 md:h-10 text-cyan-400" />
              <div className="shrink-0">
                <div className="text-white text-lg md:text-xl whitespace-nowrap leading-tight text-left">CYBER 101</div>
                <div className="text-cyan-400 text-[10px] md:text-xs whitespace-nowrap leading-tight text-left">MBCCET</div>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="flex flex-1 justify-center items-center gap-3 md:gap-7 shrink-0 px-2 lg:px-0">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm md:text-base transition-colors whitespace-nowrap ${
                    location.pathname === item.path
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-6 shrink-0 pl-4 md:pl-0">
              <div className="flex items-center gap-3 md:gap-4">
                <img src="/hive logo.png" alt="Hive Logo" className="h-8 md:h-10 w-auto" />
                <img src="/logo.svg" alt="muLearn Logo" className="h-10 md:h-25 w-auto" />
              </div>
            </div>
          </div>
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
            © 2026 MULearn MBCCET. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
