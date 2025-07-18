export default function About() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <div className="max-w-4xl mx-auto border border-white/10 rounded-xl shadow-md bg-white/10 backdrop-blur-md overflow-hidden transition-all hover:shadow-2xl p-6 md:p-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
          About Me
        </h1>

        <p className="text-white/90 text-base md:text-lg leading-relaxed space-y-4">
          <span className="block text-center text-cyan-400 text-xl font-semibold mb-4">
            Hi, I’m Chris
          </span>

          <span className="block mb-4">
            I’m a developer passionate about crafting
            <span className="text-cyan-400 font-semibold"> AI-powered web applications</span>.
            I thrive in fast-paced environments and quickly adapt to new technologies or challenges.
            When faced with unfamiliar territory, I eagerly research and apply new concepts to reach efficient solutions.
          </span>

          <span className="block mb-4">
            My academic and research experience has sharpened my skills in
            <span className="text-yellow-300 font-semibold"> Python</span>,
            <span className="text-green-300 font-semibold"> MATLAB</span>, and
            <span className="text-blue-300 font-semibold"> Excel</span>, as well as in building full-stack websites using
            <span className="text-purple-300 font-semibold"> PHP</span> and database systems.
            I’m deeply interested in UI/UX design and optimizing digital interfaces for usability.
          </span>

          <span className="block mb-4">
            I’m a strong collaborator and communicator who believes in teamwork, clear goals, and continuous learning.
            My long-term ambition is to grow in fields like
            <span className="text-teal-300 font-semibold"> Computer Science</span> and
            <span className="text-rose-300 font-semibold"> Cybersecurity</span>.
          </span>

          <span className="block text-sm text-center text-gray-300 pt-6">
            🛠 This portfolio was built with
            <span className="text-indigo-400 font-semibold"> Next.js</span>,
            <span className="text-sky-400 font-semibold"> Tailwind CSS</span>, and
            <span className="text-pink-400 font-semibold"> OpenAI</span>.
          </span>
        </p>
      </div>
    </div>
  );
}
