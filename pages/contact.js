import emailjs from 'emailjs-com';
import { useRef } from 'react';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(
        (result) => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Something went wrong. Please try again.');
          console.error(error);
        }
      );
  };

  return (
    <div className="min-h-screen text-white px-6 py-12 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl p-10 transition-all hover:shadow-3xl hover:scale-[1.015]">
        <h1 className="text-4xl font-bold text-blue-400 mb-8 text-center drop-shadow-md">Contact Me</h1>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="relative">
            <input type="text" name="user_name" required placeholder="Your Name" id="name" className="peer w-full px-4 py-3 rounded-lg bg-white/90 text-black placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner" />
            <label htmlFor="name" className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500">Your Name</label>
          </div>

          <div className="relative">
            <input type="email" name="user_email" required placeholder="Your Email" id="email" className="peer w-full px-4 py-3 rounded-lg bg-white/90 text-black placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner" />
            <label htmlFor="email" className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500">Your Email</label>
          </div>

          <div className="relative">
            <textarea name="message" id="message" required placeholder="Your Message" rows="5" className="peer w-full px-4 py-3 rounded-lg bg-white/90 text-black placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner resize-none" />
            <label htmlFor="message" className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500">Your Message</label>
          </div>

          <button type="submit" className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:brightness-110 hover:scale-105 hover:shadow-blue-500/40">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
