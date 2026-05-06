const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#a3e635] z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900 to-transparent mix-blend-multiply opacity-50 z-1" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-[#002d2d] uppercase italic leading-tight">
              Ready to <br className="hidden md:block"/> 
              Start Training?
            </h2>
            <p className="text-[#002d2d]/70 mt-4 text-lg font-medium">
              Join LIFTHAIL today and get your first week free. No commitment.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#002d2d] text-[#a3e635] px-10 py-5 rounded-full font-black uppercase tracking-wider hover:bg-white hover:text-[#002d2d] transition-all shadow-xl">
              Claim Your Free Pass
            </button>
          </div>
        </div>
      </div>

      {/* Decorative text background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-white/10 text-[15rem] font-black pointer-events-none uppercase italic whitespace-nowrap select-none">
        GO HARD OR GO HOME
      </div>
    </section>
  );
};

export default CTA;
