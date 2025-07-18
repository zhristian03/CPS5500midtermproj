// pages/_app.js
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-4">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
