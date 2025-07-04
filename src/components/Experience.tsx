'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi'

interface JobExperience {
  id: string
  company: string
  title: string
  location: string
  dateRange: string
  achievements: string[]
  projects: { name: string; description: string }[]
}

const Experience: React.FC = () => {
  const experiences: JobExperience[] = [
    {
      id: 'nxtwave',
      company: 'Nxtwave',
      title: 'Software Development Instructor',
      location: 'Hyderabad, Telangana',
      dateRange: 'April 2025 – Present',
      achievements: [
        'Delivered hands-on training in full-stack development, data structures, and algorithmic problem-solving to aspiring developers.',
        'Designed and implemented real-world projects to reinforce learning and simulate industry-level development workflows.',
        'Built and maintained multiple web applications to demonstrate key concepts using technologies like JavaScript, React, Node.js, Express, and SQL.',
        'Mentored learners on coding best practices, clean architecture, and version control using Git and GitHub.'
      ],
      projects: []
    },
    {
      id: 'sutherland',
      company: 'Sutherland Global Service',
      title: 'Assistant Software Developer',
      location: 'Hyderabad, Telangana',
      dateRange: 'September 2024 – February 2025',
      achievements: [
        'Collaborated with senior engineers to design, develop, and maintain scalable web applications using modern technologies such as JavaScript, React, and Node.js.',
        'Assisted in implementing RESTful APIs and integrating third-party services to support dynamic, data-driven functionality.',
        'Worked with version control systems like Git and managed repositories using GitHub, ensuring smooth code collaboration.',
        'Helped improve UI/UX by collaborating closely with designers and suggesting enhancements based on user feedback.'
      ],
      projects: []
    },
    {
      id: 'altariz',
      company: 'Altariz Solutions, Pvt Ltd',
      title: 'Junior Software Developer Intern',
      location: 'Hyderabad, Telangana',
      dateRange: 'September 2023 – August 2024',
      achievements: [
        'Developed and deployed multiple full-stack web applications using HTML, CSS, JavaScript, and React, enhancing user experience and performance.',
        'Collaborated with senior developers to design and implement RESTful APIs in Node.js/Express, improving backend efficiency by 30%.',
        'Performed code reviews, debugging, and unit testing, leading to a 40% reduction in production bugs.',
        'Assisted in optimizing application performance, reducing page load times by implementing lazy loading, caching, and minification techniques.'
      ],
      projects: []
    }
  ]

  const [activeTabId, setActiveTabId] = useState<string>('nordstone')
  const activeExperience = experiences.find(exp => exp.id === activeTabId) || experiences[0]

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-5xl mx-auto">
      {/* Company Tabs */}
      <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 lg:min-w-[200px] pb-2 lg:pb-0">
        {experiences.map((exp, index) => (
          <motion.button
            key={exp.id}
            onClick={() => setActiveTabId(exp.id)}
            className={`px-4 lg:px-6 py-2.5 lg:py-3 text-left whitespace-nowrap rounded-lg border transition-all duration-300 text-sm lg:text-base flex-shrink-0 ${
              activeTabId === exp.id
                ? 'bg-black text-white border-black'
                : 'bg-white text-black/70 border-black/10 hover:border-black/30 hover:text-black'
            }`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {exp.company}
          </motion.button>
        ))}
      </div>

      {/* Experience Content */}
      <motion.div 
        className="flex-1 min-w-0"
        key={activeTabId}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-black/10">
          {/* Job Header */}
          <div className="mb-6 lg:mb-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 leading-tight">
              {activeExperience.title}
              <span className="text-black/60 block sm:inline"> 
                <span className="hidden sm:inline"> @ </span>
                <span className="sm:hidden">@</span>
                {activeExperience.company}
              </span>
            </h3>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm text-black/60">
              <div className="flex items-center gap-2">
                <FiCalendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>{activeExperience.dateRange}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>{activeExperience.location}</span>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-6 lg:mb-8">
            <ul className="space-y-2 sm:space-y-3">
              {activeExperience.achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 text-black/80 leading-relaxed text-sm sm:text-base"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="text-black mt-1 sm:mt-2 text-sm sm:text-lg flex-shrink-0">▸</span>
                  <span className="min-w-0">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          {activeExperience.projects.length > 0 && (
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-black mb-3 sm:mb-4">Key Projects:</h4>
              <div className="space-y-3 sm:space-y-4">
                {activeExperience.projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="p-3 sm:p-4 bg-black/5 rounded-xl border border-black/10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <h5 className="font-semibold text-black mb-2 text-sm sm:text-base">{project.name}</h5>
                    <p className="text-black/70 text-xs sm:text-sm leading-relaxed">{project.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default Experience