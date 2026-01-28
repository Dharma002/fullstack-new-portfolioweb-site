import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Linkedin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Yahan hum koi real API call nahi kar rahe
    // Bas dummy loading effect aur success dikhane ke liye
    console.log("Dummy Submit Data:", formData);
    
    setIsSubmitted(true);
    
    // Form clear kar do
    setFormData({ name: '', email: '', message: '' }); 
    
    // 5 second baad wapas form dikhane ke liye (optional)
    setTimeout(() => setIsSubmitted(false), 5000); 
  };

  return (
    <section className="py-20 px-6 md:px-24 max-w-6xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter transition-colors"
        >
          Get In Touch
        </motion.h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
          I'm currently looking for new opportunities and internships. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Info */}
        <div className="space-y-10">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-mono tracking-tight underline decoration-cyan-400 decoration-4 underline-offset-8">
            Contact Information
          </h3>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-800 group-hover:border-cyan-400 transition-all duration-300">
                <Mail className="text-cyan-600 dark:text-cyan-400" size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Email Me</p>
                <p className="text-slate-800 dark:text-white font-medium hover:text-cyan-500 transition-colors">dharmrajpatel425@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-800 group-hover:border-cyan-400 transition-all duration-300">
                <Linkedin className="text-cyan-600 dark:text-cyan-400" size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Professional Profile</p>
                <a href="https://linkedin.com/in/dharmraj-patel" target="_blank" rel="noreferrer" className="text-slate-800 dark:text-white font-medium hover:text-cyan-500 transition-colors">linkedin.com/in/dharmraj-patel</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-800 group-hover:border-cyan-400 transition-all duration-300">
                <MapPin className="text-cyan-600 dark:text-cyan-400" size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Location</p>
                <p className="text-slate-800 dark:text-white font-medium">Uttar Pradesh, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form (Now purely Frontend) */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}>
          {isSubmitted ? (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white dark:bg-slate-800/50 p-12 rounded-3xl border border-cyan-500/30 flex flex-col items-center justify-center text-center space-y-4 min-h-[450px] shadow-xl"
            >
              <CheckCircle size={60} className="text-cyan-500 animate-bounce" />
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Message Sent!</h4>
              <p className="text-slate-600 dark:text-slate-400">Thank you Dharma, your message has been "submitted" successfully for the demo.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-cyan-500 text-sm font-bold hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white dark:bg-[#1e293b] p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 transition-colors">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  type="text" placeholder="Dharmraj Patel" required
                  value={formData.name}
                  className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 p-4 rounded-xl focus:outline-none focus:border-cyan-500 transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" placeholder="email@example.com" required
                  value={formData.email}
                  className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 p-4 rounded-xl focus:outline-none focus:border-cyan-500 transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  placeholder="I'd love to hear about your project..." rows="5" required
                  value={formData.message}
                  className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 p-4 rounded-xl focus:outline-none focus:border-cyan-500 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 resize-none"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-cyan-500 text-white dark:text-[#0f172a] font-black py-4 rounded-xl hover:bg-cyan-600 dark:hover:bg-cyan-400 transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-widest text-sm shadow-lg">
                <Send size={18} /> Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;