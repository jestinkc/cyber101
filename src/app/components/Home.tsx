import { Link } from "react-router";
import { useState, useEffect } from "react";
import { Calendar, Users, Award, ArrowRight, Shield, Lock, Code } from "lucide-react";
import { motion } from "motion/react";

// Helper function to calculate time remaining
function calculateTimeLeft() {
  // Target date: March 23, 2026 09:00:00 IST (UTC+05:30)
  const targetDate = new Date("2026-03-23T09:00:00+05:30").getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center mt-8">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center bg-slate-900/80 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-3 w-20 md:w-24 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
          <span className="text-2xl font-bold tracking-wider text-cyan-400 tabular-nums">
             {item.value.toString().padStart(2, "0")}
          </span>
          <span className="text-xs uppercase tracking-wider text-gray-400 mt-1">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyOTU4NzM5fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-blue-950/90 to-slate-900/95"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm">2-Day Event | March 23-24, 2026</span>
            </div>

            <h1 className="text-5xl md:text-7xl mb-6 text-white">
              CYBER <span className="text-cyan-400">101</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              Introduction to Cybersecurity & Ethical Hacking
            </p>

            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Join us for an immersive 2-day journey into the world of cybersecurity, ethical hacking, and digital protection
            </p>


            <div className="flex flex-col items-center justify-center mb-12">
              <a
                href="https://makemypass.com/event/cyber-101"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 text-lg font-bold shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:-translate-y-1"
              >
                Register Now
                <ArrowRight className="w-6 h-6" />
              </a>
              <CountdownTimer />
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6"
              >
                <Calendar className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl text-white mb-1">2 Days</div>
                <div className="text-gray-400 text-sm">Intensive Program</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6"
              >
                <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl text-white mb-1">2 Experts</div>
                <div className="text-gray-400 text-sm">Industry Speakers</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6"
              >
                <Award className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl text-white mb-1">Hands-on</div>
                <div className="text-gray-400 text-sm">Practical Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-white mb-4">About the Program</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              CYBER 101 is designed to introduce students to the fundamentals of cybersecurity and ethical hacking through expert-led sessions and hands-on demonstrations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-900/30 to-slate-900/30 border border-blue-500/20 rounded-lg p-8"
            >
              <Shield className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl text-white mb-3">Cybersecurity Fundamentals</h3>
              <p className="text-gray-400">
                Learn the basics of cybersecurity, threat landscapes, and security awareness from industry experts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-purple-900/30 to-slate-900/30 border border-purple-500/20 rounded-lg p-8"
            >
              <Code className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl text-white mb-3">Ethical Hacking Tools</h3>
              <p className="text-gray-400">
                Get hands-on experience with Kali Linux, penetration testing tools, and security assessment techniques.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-cyan-900/30 to-slate-900/30 border border-cyan-500/20 rounded-lg p-8"
            >
              <Lock className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl text-white mb-3">Career Guidance</h3>
              <p className="text-gray-400">
                Explore cybersecurity career opportunities and gain practical insights from experienced professionals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-white mb-4">Key Highlights</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Industry Expert Sessions",
              "Hands-on Cybersecurity Bootcamp",
              "Introduction to Ethical Hacking Tools",
              "Cybersecurity Career Guidance",
              "Interactive Learning Experience",
              "Practical Security Techniques",
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 bg-slate-900/50 border border-cyan-400/20 rounded-lg p-4"
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border-y border-cyan-400/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Ready to Begin Your Cybersecurity Journey?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Join us at MBCCET for this exclusive 2-day program
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/schedule"
              className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              View Full Schedule
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
