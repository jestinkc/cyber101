import { Calendar, Clock, MapPin, User } from "lucide-react";
import { motion } from "motion/react";

export function Schedule() {
  const day1Sessions = [
    {
      title: "Introduction to Cybersecurity",
      description: "Understanding the fundamentals and importance of cybersecurity in today's digital world",
    },
    {
      title: "Importance of Cybersecurity in the Digital World",
      description: "Real-world implications and critical need for security measures",
    },
    {
      title: "Basics of Ethical Hacking",
      description: "Introduction to ethical hacking principles and methodologies",
    },
    {
      title: "Common Cyber Threats and Attacks",
      description: "Overview of prevalent cybersecurity threats and attack vectors",
    },
    {
      title: "Cybersecurity Career Opportunities",
      description: "Exploring various career paths in the cybersecurity industry",
    },
    {
      title: "Security Awareness for Students",
      description: "Practical tips and best practices for staying safe online",
    },
  ];

  const day2Sessions = [
    {
      title: "Introduction to Ethical Hacking Tools",
      description: "Overview of essential tools used by security professionals",
    },
    {
      title: "Kali Linux Overview",
      description: "Introduction to the leading penetration testing platform",
    },
    {
      title: "Basic Penetration Testing Concepts",
      description: "Understanding the fundamentals of security testing",
    },
    {
      title: "Network Scanning & Vulnerability Assessment",
      description: "Techniques for identifying security weaknesses",
    },
    {
      title: "Demonstration of Cybersecurity Tools",
      description: "Live demonstrations of popular security tools in action",
    },
    {
      title: "Practical Security Techniques",
      description: "Hands-on exercises and real-world applications",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl text-white mb-4">Event Schedule</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Two comprehensive days of learning, packed with industry insights and hands-on experience
          </p>
        </motion.div>

        {/* Day 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 border border-cyan-400/40 rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400">Day 1</span>
                </div>
                <h2 className="text-2xl md:text-3xl text-white mb-2">
                  Introduction to Cybersecurity & Security Fundamentals
                </h2>
                <div className="flex flex-wrap gap-4 text-gray-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>March 23, 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>MBCCET Campus</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-cyan-400/20">
                <div className="flex items-center gap-2 mb-1">
                  <User className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 text-sm">Speaker</span>
                </div>
                <div className="text-white">Dany Koshy</div>
                <div className="text-gray-400 text-sm">Product Specialist</div>
                <div className="text-gray-400 text-sm">Photton Technologies</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {day1Sessions.map((session, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-slate-900/50 border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-colors"
              >
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center text-cyan-400 text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-white mb-2">{session.title}</h3>
                    <p className="text-gray-400 text-sm">{session.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 bg-blue-900/20 border border-blue-400/20 rounded-lg p-4">
            <p className="text-gray-300 text-sm">
              <span className="text-blue-400">Session includes:</span> Interactive Q&A and networking opportunities with the speaker
            </p>
          </div>
        </motion.div>

        {/* Day 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-400/40 rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400">Day 2</span>
                </div>
                <h2 className="text-2xl md:text-3xl text-white mb-2">
                  Ethical Hacking Tools & Practical Bootcamp
                </h2>
                <div className="flex flex-wrap gap-4 text-gray-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>March 24, 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>MBCCET Campus</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-purple-400/20">
                <div className="flex items-center gap-2 mb-1">
                  <User className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-400 text-sm">Speaker</span>
                </div>
                <div className="text-white">Jaizal Ali</div>
                <div className="text-gray-400 text-sm">Founder</div>
                <div className="text-gray-400 text-sm">RedTeam Hacker Academy</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {day2Sessions.map((session, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="bg-slate-900/50 border border-purple-400/20 rounded-lg p-6 hover:border-purple-400/40 transition-colors"
              >
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-400/20 rounded-full flex items-center justify-center text-purple-400 text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-white mb-2">{session.title}</h3>
                    <p className="text-gray-400 text-sm">{session.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 bg-purple-900/20 border border-purple-400/20 rounded-lg p-4">
            <p className="text-gray-300 text-sm">
              <span className="text-purple-400">Session includes:</span> Hands-on demonstrations, interactive exercises, and Q&A
            </p>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-400/30 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl text-white mb-4">Expected Outcomes</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
            <div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full inline-block mr-3"></div>
              <span className="text-gray-300">Understand cybersecurity fundamentals</span>
            </div>
            <div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full inline-block mr-3"></div>
              <span className="text-gray-300">Learn the basics of ethical hacking</span>
            </div>
            <div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full inline-block mr-3"></div>
              <span className="text-gray-300">Get exposure to professional cybersecurity tools</span>
            </div>
            <div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full inline-block mr-3"></div>
              <span className="text-gray-300">Gain awareness about digital security practices</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
