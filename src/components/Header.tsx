import { useState, useEffect } from 'react';
import { Dumbbell, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Training', href: '#training' },
    { name: 'Membership', href: '#membership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#002d2d]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Dumbbell className="text-[#a3e635] w-8 h-8" />
          <span className="text-2xl font-black tracking-tighter text-white">LIFT<span className="text-[#a3e635]">HAIL</span></span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white hover:text-[#a3e635] transition-colors font-medium uppercase tracking-wider text-sm"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-[#a3e635] text-[#002d2d] px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white transition-all transform hover:scale-105">
            Join Now
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#002d2d] border-t border-teal-800 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-[#a3e635] text-lg font-medium"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-[#a3e635] text-[#002d2d] px-6 py-3 rounded-full font-bold uppercase tracking-wider mt-4">
            Join Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
