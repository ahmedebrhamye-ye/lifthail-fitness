import { Dumbbell, Mail, Phone, MapPin, Share2, Globe, Send } from 'lucide-react';

const Footer = () => {
  const SocialIcons = [Share2, Globe, Send];
  return (
    <footer id="contact" className="bg-[#000d0d] pt-24 pb-12 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Dumbbell className="text-[#a3e635] w-8 h-8" />
              <span className="text-2xl font-black tracking-tighter uppercase italic">LIFT<span className="text-[#a3e635]">HAIL</span></span>
            </div>
            <p className="text-gray-500 max-w-xs leading-relaxed">
              Join the elite. Train in a high-performance environment with the best coaches and community.
            </p>
            <div className="flex gap-4">
              {SocialIcons.map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-teal-900 flex items-center justify-center hover:bg-[#a3e635] hover:text-[#002d2d] transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-[#a3e635]">Quick Links</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
              <li><a href="#training" className="hover:text-white transition-colors">Personal Training</a></li>
              <li><a href="#membership" className="hover:text-white transition-colors">Membership</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-[#a3e635]">Contact Info</h4>
            <ul className="space-y-4 text-gray-500">
              <li className="flex items-center gap-3">
                <MapPin size={20} className="text-[#a3e635]" />
                123 Performance Way, Fit City
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#a3e635]" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#a3e635]" />
                hello@lifthail.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-[#a3e635]">Newsletter</h4>
            <p className="text-gray-500 mb-4 text-sm">Subscribe for fitness tips and gym updates.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-[#001a1a] border border-teal-900 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#a3e635] transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-[#a3e635] text-[#002d2d] px-4 rounded-md font-bold text-sm">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-teal-900 flex flex-col md:row justify-between items-center gap-6 text-gray-600 text-sm">
          <p>© 2024 LIFTHAIL FITNESS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
