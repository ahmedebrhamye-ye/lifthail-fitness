import { Zap, Target, Activity, ShieldCheck } from 'lucide-react';

const programs = [
  {
    title: 'Strength Training',
    desc: 'Master the fundamentals of powerlifting and bodybuilding with expert guidance.',
    icon: <Zap className="w-8 h-8" />,
    image: 'https://images.pexels.com/photos/14616295/pexels-photo-14616295.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800'
  },
  {
    title: 'HIIT & Cardio',
    desc: 'High-intensity interval training designed to burn fat and boost cardiovascular health.',
    icon: <Activity className="w-8 h-8" />,
    image: 'https://images.pexels.com/photos/4164510/pexels-photo-4164510.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800'
  },
  {
    title: 'Mobility & Recovery',
    desc: 'Improve range of motion and reduce injury risk with specialized recovery sessions.',
    icon: <ShieldCheck className="w-8 h-8" />,
    image: 'https://images.pexels.com/photos/32695898/pexels-photo-32695898.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800'
  },
  {
    title: 'Personalized Nutrition',
    desc: 'Fuel your performance with custom meal plans tailored to your specific goals.',
    icon: <Target className="w-8 h-8" />,
    image: 'https://images.pexels.com/photos/4720833/pexels-photo-4720833.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800'
  }
];

const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-[#001a1a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic mb-4">
              Our <span className="text-[#a3e635]">Programs</span>
            </h2>
            <p className="text-gray-400">
              We offer a wide range of fitness programs designed to push your limits and help you achieve your desired results.
            </p>
          </div>
          <button className="text-[#a3e635] font-bold uppercase tracking-widest text-sm border-b-2 border-[#a3e635] pb-1 hover:text-white hover:border-white transition-all">
            View All Programs
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl bg-[#002d2d] border border-teal-900 transition-all hover:border-[#a3e635]/50">
              <div className="h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60"
                />
              </div>
              <div className="p-6">
                <div className="text-[#a3e635] mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{program.desc}</p>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Zap className="w-5 h-5 text-[#a3e635]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
