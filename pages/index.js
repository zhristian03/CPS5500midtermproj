import Chatbot from '../components/Chatbot';

export default function Home() {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <div className="max-w-4xl w-full mx-auto bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl p-8 md:p-10 transition-all hover:shadow-2xl">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-center mb-6 drop-shadow-lg">
          Welcome to My Website
        </h1>

        {/* Intro Text */}
        <p className="text-lg md:text-xl text-gray-300 text-center mb-10 max-w-2xl mx-auto leading-relaxed">
          This website showcases my accomplishments in school and real-world experience,
          blending design and technology through modern frameworks and AI tools.
        </p>

        {/* Chatbot Section */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 shadow-inner shadow-black/20">
          <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
            My Personal Bot
          </h2>
          <Chatbot />
        </div>
      </div>
    </div>
  );
}
