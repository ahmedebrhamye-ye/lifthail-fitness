import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Essential',
    price: '49',
    features: ['24/7 Gym Access', 'Standard Equipment', 'Locker Room Access', 'Free Wi-Fi'],
    cta: 'Get Started',
    highlight: false
  },
  {
    name: 'Pro',
    price: '89',
    features: ['Everything in Essential', 'Group Classes', 'Personalized App', '1 Sauna Session/mo'],
    cta: 'Most Popular',
    highlight: true
  },
  {
    name: 'Elite',
    price: '149',
    features: ['Everything in Pro', 'Unlimited Guest Passes', 'Personal Trainer (2 sessions)', 'Nutrition Planning'],
    cta: 'Go Elite',
    highlight: false
  }
];

const Membership = () => {
  return (
    <section id="membership" className="py-24 bg-[#001a1a]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic mb-4">
          Membership <span className="text-[#a3e635]">Plans</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Choose the plan that fits your lifestyle and fitness goals. No hidden fees, no long-term contracts.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`p-10 rounded-3xl flex flex-col transition-all duration-300 ${
                plan.highlight 
                ? 'bg-[#002d2d] border-2 border-[#a3e635] scale-105 shadow-2xl shadow-[#a3e635]/10' 
                : 'bg-[#002d2d]/50 border border-teal-900 hover:border-teal-700'
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline justify-center gap-1 mb-8">
                <span className="text-gray-400 text-2xl">$</span>
                <span className="text-5xl font-black text-white">{plan.price}</span>
                <span className="text-gray-400">/mo</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow text-left">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-gray-300">
                    <Check className={`w-5 h-5 ${plan.highlight ? 'text-[#a3e635]' : 'text-teal-600'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-black uppercase tracking-widest transition-all ${
                plan.highlight 
                ? 'bg-[#a3e635] text-[#002d2d] hover:bg-white' 
                : 'border-2 border-[#a3e635] text-[#a3e635] hover:bg-[#a3e635] hover:text-[#002d2d]'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
