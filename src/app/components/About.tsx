import { Building2, MapPin, Users, Target, CheckCircle2, Calendar } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const organizers = [
    {
      name: "VS Geethu",
      role: "Campus Lead",
      organization: "muLearn MBCCET",
    },
    {
      name: "Abin Mathew Thomas",
      role: "Cybersecurity IG Lead",
      organization: "muLearn MBCCET",
    },
  ];

  const outcomes = [
    "Understand cybersecurity fundamentals and core concepts",
    "Learn the basics of ethical hacking and security testing",
    "Get hands-on exposure to professional cybersecurity tools",
    "Gain awareness about digital security best practices",
    "Explore career opportunities in the cybersecurity field",
    "Network with industry experts and fellow students",
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
          <h1 className="text-4xl md:text-5xl text-white mb-4">About CYBER 101</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive introduction to cybersecurity and ethical hacking for engineering students
          </p>
        </motion.div>

        {/* Event Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-400/30 rounded-lg p-8 mb-12"
        >
          <h2 className="text-3xl text-white mb-6">About the Program</h2>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            CYBER 101 is a two-day cybersecurity event designed to introduce students to the world of cybersecurity, ethical hacking, and digital protection. The program focuses on building awareness about cyber threats, understanding ethical hacking concepts, and providing practical exposure to cybersecurity tools used by professionals.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Participants will gain both theoretical knowledge and practical insights from experienced industry experts, setting a strong foundation for those interested in pursuing careers in cybersecurity.
          </p>
        </motion.div>

        {/* Event Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-slate-900/50 border border-cyan-400/20 rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl text-white">Event Details</h3>
            </div>
            <div className="space-y-3 text-gray-300">
              <div>
                <span className="text-cyan-400">Dates:</span> March 23-24, 2026
              </div>
              <div>
                <span className="text-cyan-400">Duration:</span> 2 Days
              </div>
              <div>
                <span className="text-cyan-400">Format:</span> In-Person Workshop
              </div>
              <div>
                <span className="text-cyan-400">Target Audience:</span> Engineering Students (1st & 2nd Year)
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-900/50 border border-cyan-400/20 rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl text-white">Venue</h3>
            </div>
            <div className="space-y-3 text-gray-300">
              <div>
                <span className="text-cyan-400">College:</span>
                <div className="mt-1">
                  Mar Baselios Christian College of Engineering and Technology (MBCCET)
                </div>
              </div>
              <div>
                <span className="text-cyan-400">Location:</span> MBCCET Campus
              </div>
            </div>
          </motion.div>
        </div>

        {/* Organized By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl text-white mb-6 text-center">Organized By</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-400/30 rounded-lg p-6 text-center">
              <Building2 className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-2">Cybersecurity IG</h3>
              <p className="text-gray-300">muLearn MBCCET</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-400/30 rounded-lg p-6 text-center">
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-2">Hive Community</h3>
              <p className="text-gray-300">Student Tech Community</p>
            </div>
          </div>
        </motion.div>

        {/* Program Leads */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl text-white mb-6 text-center">Program Leads</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {organizers.map((organizer, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-cyan-400/20 rounded-lg p-6 text-center hover:border-cyan-400/40 transition-colors"
              >
                <h3 className="text-xl text-white mb-1">{organizer.name}</h3>
                <p className="text-cyan-400 mb-1">{organizer.role}</p>
                <p className="text-gray-400 text-sm">{organizer.organization}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Expected Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-400/30 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl text-white">Expected Outcomes</h2>
            </div>
            <p className="text-gray-300 mb-6">
              After attending this program, students will:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="flex items-start gap-3 bg-slate-900/50 border border-cyan-400/10 rounded-lg p-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{outcome}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-400/30 rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl text-white mb-6">Why Attend CYBER 101?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-cyan-400/10 rounded-lg p-6">
              <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white mb-2">Industry Experts</h3>
              <p className="text-gray-400 text-sm">
                Learn directly from professionals with real-world cybersecurity experience
              </p>
            </div>
            <div className="bg-slate-900/50 border border-cyan-400/10 rounded-lg p-6">
              <div className="w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-white mb-2">Hands-On Learning</h3>
              <p className="text-gray-400 text-sm">
                Get practical experience with actual cybersecurity tools and techniques
              </p>
            </div>
            <div className="bg-slate-900/50 border border-cyan-400/10 rounded-lg p-6">
              <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white mb-2">Career Foundation</h3>
              <p className="text-gray-400 text-sm">
                Build a strong foundation for a career in the growing cybersecurity field
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
