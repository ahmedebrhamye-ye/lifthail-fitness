import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url('https://images.pexels.com/photos/4164519/pexels-photo-4164519.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#002d2d] via-[#002d2d]/70 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-[#a3e635]/20 text-[#a3e635] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-[#a3e635]/30"
          >
            Unleash Your Potential
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-6 uppercase italic">
            Evolve <br /> 
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#a3e635] to-teal-400"
            >Beyond</motion.span> <br /> 
            Limits
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            High-performance training facility designed for those who refuse to settle. Experience elite coaching and state-of-the-art equipment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#a3e635] text-[#002d2d] px-8 py-4 rounded-full font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white transition-all group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white hover:text-[#002d2d] transition-all group">
              <Play className="w-5 h-5 fill-current" />
              Watch Video
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Stats */}
      <div className="absolute bottom-12 right-6 md:right-12 hidden lg:flex flex-col gap-8 text-right">
        <div>
          <h4 className="text-[#a3e635] text-4xl font-black">2.5k+</h4>
          <p className="text-white/60 uppercase text-xs tracking-widest">Active Members</p>
        </div>
        <div>
          <h4 className="text-[#a3e635] text-4xl font-black">50+</h4>
          <p className="text-white/60 uppercase text-xs tracking-widest">Elite Coaches</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
