import { CheckCircle2 } from 'lucide-react';

const PersonalTraining = () => {
  return (
    <section id="training" className="py-24 bg-[#002d2d] relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#a3e635]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/4164510/pexels-photo-4164510.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
              alt="Personal Trainer" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-[#a3e635] p-8 rounded-2xl hidden md:block">
            <h4 className="text-[#002d2d] text-4xl font-black italic uppercase leading-none">1-on-1<br/>Coaching</h4>
          </div>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic mb-8">
            Elevate Your <span className="text-[#a3e635]">Game</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Our world-class trainers provide personalized attention and science-based methodologies to help you break through plateaus and reach your peak performance.
          </p>
          
          <ul className="space-y-4 mb-10">
            {[
              'Custom workout architecture',
              'Biometric tracking & analysis',
              'Advanced nutritional strategies',
              'Mental performance coaching',
              'Priority facility access'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-white font-medium">
                <CheckCircle2 className="text-[#a3e635] w-6 h-6" />
                {item}
              </li>
            ))}
          </ul>

          <button className="bg-[#a3e635] text-[#002d2d] px-10 py-4 rounded-full font-black uppercase tracking-wider hover:bg-white transition-all shadow-lg shadow-[#a3e635]/20">
            Book A Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default PersonalTraining;
