import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const sections = [
  {
    title: 'Summary',
    content: `IT professional seeking a role as a Junior Security Analyst, Cybersecurity Consultant, Technology Risk Consultant, IT Auditor, IT Assurance Specialist, IT Project Coordinator, or Data Analyst. Skilled in optimizing systems, applications, and security protocols to support mission-critical objectives in high-level organizations. Passionate about cybersecurity in the financial, healthcare, and defense sectors, with a strong foundation in risk management and compliance.`
  },
  {
    title: 'Technical Skills',
    content: `• Programming Languages: Java, Python, MATLAB, PHP, SQL, HTML, CSS, JavaScript (JSNode, Angular, Axios)
• Frameworks: Jupyter Notebook, Google Colab, Matplotlib, Pandas, TensorFlow, Numpy, Pytorch, Scikit-Learn
• Expertise: Active Directory, AWS Group Policies, Data Visualization, Data Science, Firewalls, Google Suite, Group Policy, Linux, LLM, Management, Machine Learning, Microsoft Excel, MS Office Suite, Virtual Machines, Windows`
  },
  {
    title: 'Experience',
    content: `Academic Specialist / Data Analyst – Kean University, Union, NJ (May 2025 – Present)
• Organized and analyzed complex datasets for institutional research.
• Built dashboards and maintained data visualizations.
• Created documentation for research compliance and survey instruments.
• Used Monday.com to coordinate project workflows.

Technical Support Technician – Kean University, Union, NJ (July 2022 – May 2025)
• Resolved 200+ tickets with 86 high-priority.
• Enforced security using firewalls, encryption, and compliance frameworks.
• Managed IT assets and performed backup tests.
• Used Freshservice for configuration and ticket records.

LSAMP Ambassador – Kean University, Union, NJ (Jan 2025 – Apr 2025)
• Structured participant data for insights.
• Utilized analytics for program efficiency.
• Handled communications and compiled reports.`
  },
  {
    title: 'Education',
    content: `Kean University, Union, NJ 07083
• BS in Information Technology – Cybersecurity (Sep 2021 – May 2025) – GPA: 3.69
• MS in Computer Science – Artificial Intelligence (Expected May 2026)
• Relevant Coursework: Advanced Analysis of Algorithms, Cloud System Administration, Computer Security, Database Management, Data Structures, Project Management, Unix and Linux, Web Client Side Programming.`
  },
  {
    title: 'Programs & Certifications',
    content: `• Computing Alliance of Hispanic-Serving Institutions
• McNair Scholars
• Louis Stokes Alliances for Minority Participation
• Google Career Certificate in Cybersecurity – Completed Sept 2023
• Security+ – In Progress`
  }
];

export default function Resume() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleIndex = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-6 text-white text-center">Resume</h1>


      <div className="space-y-4">
        {sections.map((section, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="border border-gray-300 rounded-xl shadow-md bg-white/10 backdrop-blur-md overflow-hidden transition-all hover:shadow-2xl"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-white hover:bg-white/10"
              >
                <span>{section.title}</span>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-4 text-white/90 whitespace-pre-line"
                  >
                    {section.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
