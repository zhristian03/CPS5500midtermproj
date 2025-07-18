import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Projects() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const projects = [
    
    {
      title: "This AI Portfolio Website",
      date: "July 2025",
      details: [
        "Built with Next.js, Tailwind CSS, and OpenAI API integration.",
        "Includes a floating chatbot, animated UI, and responsive design.",
        "Deployed on Vercel with modular component-based structure."
      ]
    },
    {
      title: "WiFi-Based Movement Sensing and Verification",
      date: "December 2024 – May 2025",
      details: [
        "Achieved 93%+ verification accuracy utilizing ResNet18.",
        "Processed CSI in MATLAB to refine phases and reduce noise.",
        "Used data visualization techniques to analyze CSI patterns."
      ]
    },
    {
      title: "RFID-Based Continuous User Verification",
      date: "February 2024 – June 2024",
      details: [
        "Gathered RFID data from 20 participants and refined signal quality.",
        "Built authentication using signal variations from breathing patterns.",
        "Achieved 95%+ accuracy with CNN, SVM, and other models."
      ]
    },
    {
      title: "Web-Based Inventory Tracking System",
      date: "October 2023 – December 2023",
      details: [
        "Developed with PHP, MariaDB, and responsive UI using HTML/CSS.",
        "Enabled users to add, delete, and edit item details securely.",
        "Improved query time by 20% using optimized SQL and indexing."
      ]
    }
  ];

  const toggleCard = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Projects</h1>
      <div className="space-y-6">
        {projects.map((project, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <div
              key={index}
              onClick={() => toggleCard(index)}
              className={`cursor-pointer transition-all duration-300 transform rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:shadow-2xl hover:scale-[1.02] p-6 ${
                isOpen ? 'ring-2 ring-blue-400' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <span className="text-sm text-gray-300 italic">{project.date}</span>
                </div>
                <div className="text-gray-300">
                  {isOpen ? <ChevronUp /> : <ChevronDown />}
                </div>
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden mt-4 list-disc list-inside text-gray-100 space-y-1"
                  >
                    {project.details.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}