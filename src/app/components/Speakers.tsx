import { Linkedin, Award, Briefcase, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import speaker1Image from "../../assets/de420eda8164cc663bda39fc85f5b64208fde5b1.png";
import speaker2Image from "../../assets/6a8992692c60463550a3616cdc0c16aeb7a2becc.png";

export function Speakers() {
  const speakers = [
    {
      name: "Dany Koshy",
      title: "Product Specialist",
      organization: "Photton Technologies",
      image: speaker1Image,
      day: "Day 1 - March 23, 2026",
      sessionTitle: "Introduction to Cybersecurity & Security Fundamentals",
      topics: [
        "Introduction to Cybersecurity",
        "Importance of Cybersecurity in the Digital World",
        "Basics of Ethical Hacking",
        "Common Cyber Threats and Attacks",
        "Cybersecurity Career Opportunities",
        "Security Awareness for Students",
      ],
      color: "cyan",
    },
    {
      name: "Jaizal Ali",
      title: "Founder",
      organization: "RedTeam Hacker Academy",
      subtitle: "Cybersecurity Trainer & Ethical Hacker",
      image: speaker2Image,
      day: "Day 2 - March 24, 2026",
      sessionTitle: "Ethical Hacking Tools & Practical Bootcamp",
      topics: [
        "Introduction to Ethical Hacking Tools",
        "Kali Linux Overview",
        "Basic Penetration Testing Concepts",
        "Network Scanning & Vulnerability Assessment",
        "Demonstration of Cybersecurity Tools",
        "Practical Security Techniques",
      ],
      color: "purple",
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
          <h1 className="text-4xl md:text-5xl text-white mb-4">Our Speakers</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Learn from industry experts with extensive experience in cybersecurity and ethical hacking
          </p>
        </motion.div>

        {/* Speakers */}
        <div className="space-y-16">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`bg-gradient-to-br ${
                speaker.color === "cyan"
                  ? "from-cyan-900/20 to-blue-900/20 border-cyan-400/30"
                  : "from-purple-900/20 to-pink-900/20 border-purple-400/30"
              } border rounded-lg overflow-hidden`}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Speaker Image and Info */}
                <div className="space-y-6">
                  <div className="aspect-square w-full max-w-md mx-auto rounded-lg overflow-hidden border-2 border-white/10">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-center md:text-left">
                    <h2 className="text-3xl text-white mb-2">{speaker.name}</h2>
                    <div className="space-y-1 mb-4">
                      <div className="flex items-center gap-2 justify-center md:justify-start text-gray-300">
                        <Briefcase className="w-4 h-4" />
                        <span>{speaker.title}</span>
                      </div>
                      <div className="flex items-center gap-2 justify-center md:justify-start text-gray-300">
                        <Award className="w-4 h-4" />
                        <span>{speaker.organization}</span>
                      </div>
                      {speaker.subtitle && (
                        <div className="flex items-center gap-2 justify-center md:justify-start text-gray-400">
                          <GraduationCap className="w-4 h-4" />
                          <span className="text-sm">{speaker.subtitle}</span>
                        </div>
                      )}
                    </div>

                    <div
                      className={`inline-flex items-center gap-2 ${
                        speaker.color === "cyan"
                          ? "bg-cyan-400/10 border-cyan-400/30 text-cyan-400"
                          : "bg-purple-400/10 border-purple-400/30 text-purple-400"
                      } border rounded-full px-4 py-2 text-sm`}
                    >
                      {speaker.day}
                    </div>
                  </div>
                </div>

                {/* Session Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl text-white mb-4">{speaker.sessionTitle}</h3>
                    <p className="text-gray-400 mb-6">
                      {speaker.name} will guide you through essential concepts and practical applications in this comprehensive session.
                    </p>
                  </div>

                  <div>
                    <h4 className={`${speaker.color === "cyan" ? "text-cyan-400" : "text-purple-400"} mb-3`}>
                      Topics Covered:
                    </h4>
                    <div className="space-y-2">
                      {speaker.topics.map((topic, topicIndex) => (
                        <div
                          key={topicIndex}
                          className="flex items-start gap-3 bg-slate-900/50 border border-white/5 rounded-lg p-3"
                        >
                          <div
                            className={`flex-shrink-0 w-6 h-6 ${
                              speaker.color === "cyan"
                                ? "bg-cyan-400/20 text-cyan-400"
                                : "bg-purple-400/20 text-purple-400"
                            } rounded-full flex items-center justify-center text-xs`}
                          >
                            {topicIndex + 1}
                          </div>
                          <span className="text-gray-300 text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`${
                      speaker.color === "cyan"
                        ? "bg-cyan-900/20 border-cyan-400/20"
                        : "bg-purple-900/20 border-purple-400/20"
                    } border rounded-lg p-4`}
                  >
                    <p className="text-gray-300 text-sm">
                      <span className={speaker.color === "cyan" ? "text-cyan-400" : "text-purple-400"}>
                        Interactive Session:
                      </span>{" "}
                      Includes live demonstrations, Q&A, and networking opportunities
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-slate-900/50 to-blue-900/50 border border-cyan-400/20 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl text-white mb-4">Why Learn from Industry Experts?</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
            <div className="bg-slate-900/50 border border-cyan-400/10 rounded-lg p-6">
              <Award className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h4 className="text-white mb-2">Real-World Experience</h4>
              <p className="text-gray-400 text-sm">
                Learn from professionals actively working in the cybersecurity industry
              </p>
            </div>
            <div className="bg-slate-900/50 border border-cyan-400/10 rounded-lg p-6">
              <GraduationCap className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h4 className="text-white mb-2">Practical Insights</h4>
              <p className="text-gray-400 text-sm">
                Get hands-on knowledge and tools used by security professionals daily
              </p>
            </div>
            <div className="bg-slate-900/50 border border-cyan-400/10 rounded-lg p-6">
              <Briefcase className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h4 className="text-white mb-2">Career Guidance</h4>
              <p className="text-gray-400 text-sm">
                Discover career paths and opportunities in the cybersecurity field
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
