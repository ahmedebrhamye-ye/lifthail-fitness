import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
import PersonalTraining from './components/PersonalTraining';
import Membership from './components/Membership';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FadeIn from './components/FadeIn';

function App() {
  return (
    <div className="min-h-screen bg-[#001a1a] font-sans antialiased text-slate-200">
      <Header />
      <main>
        <Hero />
        <FadeIn><Programs /></FadeIn>
        <FadeIn><PersonalTraining /></FadeIn>
        <FadeIn><Membership /></FadeIn>
        <FadeIn><Testimonials /></FadeIn>
        <FadeIn><CTA /></FadeIn>
      </main>
      <Footer />
    </div>
  );
}

export default App;
