
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import { useCart } from "@/hooks/useCart";

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { getCartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollY(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logo color transition based on scroll
  const getLogoStyle = () => {
    let color;
    let opacity;
    
    if (scrollY < 0.5) {
      // Gold to Silver (0 to 0.5)
      const progress = scrollY * 2;
      const red = Math.floor(255 - (60 * progress));
      const green = Math.floor(215 - (23 * progress));
      const blue = Math.floor(0 + (192 * progress));
      color = `rgb(${red}, ${green}, ${blue})`;
      opacity = 0.1 + (progress * 0.15);
    } else {
      // Silver to White (0.5 to 1)
      const progress = (scrollY - 0.5) * 2;
      const red = Math.floor(192 + (63 * progress));
      const green = Math.floor(192 + (63 * progress));
      const blue = Math.floor(192 + (63 * progress));
      color = `rgb(${red}, ${green}, ${blue})`;
      opacity = 0.25 + (progress * 0.15);
    }
    
    return {
      color: color,
      opacity: opacity,
      transition: 'all 0.3s ease-out'
    };
  };

  return (
    <div className="min-h-screen bg-jetblack-500 relative overflow-hidden">
      <Header cartCount={getCartCount()} onLoginClick={() => {}} />
      
      {/* Background Logo */}
      <div 
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
        style={getLogoStyle()}
      >
        <div className="text-[25rem] font-bold font-serif select-none">
          IIRA
        </div>
      </div>

      <section ref={sectionRef} className="pt-32 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-7xl font-bold mb-8 font-serif text-gold-500">
              Our Legacy
            </h1>
            <div className="w-32 h-1 mx-auto rounded-full bg-gold-500" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
            <div className="space-y-10 animate-fade-in">
              <div>
                <h2 className="text-4xl font-bold mb-6 font-serif text-gold-500">
                  Since 1895
                </h2>
                <p className="text-xl leading-relaxed text-gold-400">
                  In the heart of New York's bustling Diamond District, Master Jeweller Auguste Beaumont founded IIRA with a simple yet profound vision: to create jewelry that transcends time and captures the essence of eternal beauty.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-4 font-serif text-gold-500">
                  The Master's Touch
                </h3>
                <p className="text-xl leading-relaxed text-gold-400">
                  Auguste, trained in the finest ateliers of Paris and Geneva, brought European craftsmanship to American shores. His innovative techniques in diamond cutting and precious metal work quickly established IIRA as the premier destination for discerning collectors.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-4 font-serif text-gold-500">
                  A Dynasty of Excellence
                </h3>
                <p className="text-xl leading-relaxed text-gold-400">
                  Now in its fifth generation, the Beaumont family continues to honor Auguste's legacy. Each piece is still handcrafted using traditional methods passed down through generations, combined with modern precision and contemporary design sensibilities.
                </p>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="bg-jetblack-300/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-gold-400/30 hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-jetblack-500 font-bold text-3xl">A</span>
                  </div>
                  <h4 className="text-2xl font-bold font-serif mb-2 text-gold-500">
                    Auguste Beaumont
                  </h4>
                  <p className="text-base text-gold-400">
                    Founder & Master Jeweller
                  </p>
                </div>
                
                <blockquote className="text-center italic text-xl font-light text-gold-400">
                  "A jewel should not merely adorn, but should tell a story, capture a moment, and inspire generations to come."
                </blockquote>
              </div>

              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-gold rounded-full blur-3xl opacity-30" />
            </div>
          </div>

          <div className="text-center animate-fade-in">
            <p className="text-3xl font-light leading-relaxed max-w-5xl mx-auto font-serif text-gold-500">
              Today, IIRA continues to be synonymous with uncompromising quality, timeless elegance, and the artistry that transforms precious metals and stones into treasured heirlooms.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
