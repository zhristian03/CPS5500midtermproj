import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

export default function Chatbot() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [displayedResponse, setDisplayedResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');
    setDisplayedResponse('');
    try {
      const res = await axios.post('/api/chatbot', { prompt });
      setResponse(res.data.result);
    } catch (err) {
      setResponse('Error: ' + err.message);
    }
    setLoading(false);
  };

  // Typewriter effect
  useEffect(() => {
    if (!response) return;
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedResponse((prev) => prev + response.charAt(index));
      index++;
      if (index === response.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [response]);

  return (
    <motion.div
      className="max-w-xl mx-auto p-6 mt-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl transition-all hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(31,38,135,0.37)]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
        🤖 Ask the AI
      </h2>

      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask me anything..."
          className="w-full p-4 rounded-lg bg-white text-black shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
          rows={4}
        />
        <motion.button
          type="submit"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:brightness-110 transition-all"
        >
          {loading ? 'Thinking...' : 'Submit'}
        </motion.button>
      </form>

      <AnimatePresence>
        {response && (
          <motion.div
            className="mt-6 bg-[#0f172a] text-blue-200 p-4 rounded-lg shadow-lg border border-blue-900 transition hover:shadow-xl font-mono text-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-semibold mb-2 text-white/90">AI Response:</p>
            <p className="whitespace-pre-wrap">{displayedResponse}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
