import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcus Chen',
    role: 'Professional Athlete',
    text: 'LIFTHAIL changed the way I approach my off-season training. The facility is world-class, but the community is what keeps me coming back.',
    image: 'https://images.pexels.com/photos/4164519/pexels-photo-4164519.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Fitness Enthusiast',
    text: 'The personal training here is on another level. I achieved more in 3 months than I did in 3 years training on my own.',
    image: 'https://images.pexels.com/photos/32695898/pexels-photo-32695898.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200'
  },
  {
    name: 'David Miller',
    role: 'CEO & Weekend Warrior',
    text: 'Efficiency is key for me. The structured programs and expert coaching allow me to get the most out of every single minute in the gym.',
    image: 'https://images.pexels.com/photos/14616295/pexels-photo-14616295.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200'
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#001a1a] border-t border-teal-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic mb-4">
            Success <span className="text-[#a3e635]">Stories</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real results from real people. Join the community of high-performers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-[#002d2d]/30 p-8 rounded-3xl border border-teal-900 relative">
              <Quote className="absolute top-6 right-8 text-[#a3e635]/20 w-12 h-12" />
              <p className="text-gray-300 italic mb-8 relative z-10">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#a3e635]" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-[#a3e635] uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
