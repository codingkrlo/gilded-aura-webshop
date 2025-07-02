
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-jetblack-200 via-jetblack-100 to-jetblack-50">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-gold-500 rounded-full animate-sparkle"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-silver-500 rounded-full animate-sparkle delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-gold-400 rounded-full animate-sparkle delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-silver-400 rounded-full animate-sparkle delay-500"></div>
        <div className="absolute top-60 left-1/2 w-3 h-3 bg-gold-600 rounded-full animate-sparkle delay-1500"></div>
      </div>

      {/* Floating jewelry elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <div className="w-16 h-16 rounded-full bg-gradient-gold opacity-20 blur-xl"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float delay-1000">
          <div className="w-20 h-20 rounded-full bg-gradient-silver opacity-15 blur-xl"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float delay-2000">
          <div className="w-12 h-12 rounded-full bg-gradient-gold opacity-25 blur-lg"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
            Luxury
          </span>
          <br />
          <span className="text-silver-400">Redefined</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-silver-300 mb-8 animate-fade-in-up delay-300 leading-relaxed">
          Discover our exquisite collection of handcrafted jewelry,<br />
          where timeless elegance meets modern sophistication
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-500">
          <button className="bg-gradient-gold hover:from-gold-500 hover:to-gold-600 text-jetblack-500 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gold-500/20 min-w-[200px]">
            Explore Collection
          </button>
          <button className="border-2 border-silver-400 text-silver-400 hover:bg-silver-400 hover:text-jetblack-500 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 min-w-[200px]">
            Watch Our Story
          </button>
        </div>

        {/* Animated jewelry showcase */}
        <div className="mt-16 relative">
          <div className="flex justify-center items-center space-x-8 animate-fade-in-up delay-700">
            <div className="w-20 h-20 rounded-full bg-gradient-gold animate-float flex items-center justify-center shadow-2xl shadow-gold-500/30">
              <div className="w-8 h-8 rounded-full bg-jetblack-200"></div>
            </div>
            <div className="w-16 h-16 rounded-full bg-gradient-silver animate-float delay-500 flex items-center justify-center shadow-2xl shadow-silver-500/30">
              <div className="w-6 h-6 rounded-full bg-jetblack-200"></div>
            </div>
            <div className="w-24 h-24 rounded-full bg-gradient-gold animate-float delay-1000 flex items-center justify-center shadow-2xl shadow-gold-500/30">
              <div className="w-10 h-10 rounded-full bg-jetblack-200"></div>
            </div>
            <div className="w-18 h-18 rounded-full bg-gradient-silver animate-float delay-1500 flex items-center justify-center shadow-2xl shadow-silver-500/30">
              <div className="w-7 h-7 rounded-full bg-jetblack-200"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
