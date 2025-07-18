import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' }
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-gray-900 text-slate-300 px-6 py-4 flex flex-col md:flex-row justify-between items-center shadow-lg"
    >
      <motion.h1
        className="text-xl font-bold tracking-tight mb-2 md:mb-0"
        whileHover={{ scale: 1.05, color: '#60a5fa' }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        Christian Zambrano&apos;s Portfolio
      </motion.h1>

      <ul className="flex flex-wrap gap-4 text-sm md:text-base">
        {navItems.map(({ label, href }) => (
          <motion.li
            key={label}
            whileHover={{
              scale: 1.12,
              rotateX: 8,
              rotateY: -5,
              zIndex: 10
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link href={href}>
              <span className="inline-block px-3 py-1 rounded-md hover:text-blue-400 transition duration-300">
                {label}
              </span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
