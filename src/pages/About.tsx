
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import { useCart } from "@/hooks/useCart";

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { getCartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        const upwardScroll = Math.max(0, Math.min(1, -rect.top / window.innerHeight));
        setScrollY({ progress: scrollProgress, upward: upwardScroll });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTextStyle = (delay = 0) => {
    const progress = Math.max(0, Math.min(1, scrollY.progress - delay));
    const fadeOut = scrollY.upward;
    
    const baseOpacity = 0.4 + (progress * 0.6);
    const finalOpacity = Math.max(0.1, baseOpacity - (fadeOut * 0.8));
    
    const goldIntensity = Math.min(255, progress * 255);
    const silverIntensity = Math.min(255, fadeOut * 255);
    
    const red = 255 - (goldIntensity * 0.2) + (silverIntensity * 0.3);
    const green = 215 - (goldIntensity * 0.1) + (silverIntensity * 0.3);
    const blue = (goldIntensity * 0.8) + (silverIntensity * 0.8);
    
    return {
      opacity: finalOpacity,
      color: `rgb(${red}, ${green}, ${blue})`,
      transition: 'all 0.3s ease-out'
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-jetblack-100 via-jetblack-200 to-jetblack-100 relative overflow-hidden">
      <Header cartCount={getCartCount()} onLoginClick={() => {}} />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-gold-400/20 via-gold-300/30 to-gold-200/20 rounded-full blur-3xl"
          style={{
            top: '10%',
            left: `${15 + scrollY.progress * 40}%`,
            opacity: scrollY.progress * 0.8
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-l from-gold-500/25 via-gold-400/35 to-gold-300/25 rounded-full blur-2xl"
          style={{
            bottom: '15%',
            right: `${5 + scrollY.progress * 50}%`,
            opacity: scrollY.progress * 0.6
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-silver-400/15 via-silver-300/25 to-silver-200/15 rounded-full blur-xl"
          style={{
            top: '50%',
            left: `${80 - scrollY.progress * 30}%`,
            opacity: scrollY.progress * 0.4
          }}
        />
      </div>

      <section ref={sectionRef} className="pt-32 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h1 
              className="text-7xl font-bold mb-8 font-serif"
              style={getTextStyle()}
            >
              Our Legacy
            </h1>
            <div 
              className="w-32 h-1 mx-auto rounded-full"
              style={{
                background: `linear-gradient(90deg, transparent, rgb(${255 - scrollY.progress * 30}, ${215 - scrollY.progress * 15}, ${scrollY.progress * 220}), transparent)`,
                opacity: scrollY.progress
              }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
            <div className="space-y-10">
              <div>
                <h2 
                  className="text-4xl font-bold mb-6 font-serif"
                  style={getTextStyle(0.1)}
                >
                  Since 1895
                </h2>
                <p 
                  className="text-xl leading-relaxed"
                  style={getTextStyle(0.15)}
                >
                  In the heart of New York's bustling Diamond District, Master Jeweller Auguste Beaumont founded LUXE with a simple yet profound vision: to create jewelry that transcends time and captures the essence of eternal beauty.
                </p>
              </div>

              <div>
                <h3 
                  className="text-3xl font-bold mb-4 font-serif"
                  style={getTextStyle(0.2)}
                >
                  The Master's Touch
                </h3>
                <p 
                  className="text-xl leading-relaxed"
                  style={getTextStyle(0.25)}
                >
                  Auguste, trained in the finest ateliers of Paris and Geneva, brought European craftsmanship to American shores. His innovative techniques in diamond cutting and precious metal work quickly established LUXE as the premier destination for discerning collectors.
                </p>
              </div>

              <div>
                <h3 
                  className="text-3xl font-bold mb-4 font-serif"
                  style={getTextStyle(0.3)}
                >
                  A Dynasty of Excellence
                </h3>
                <p 
                  className="text-xl leading-relaxed"
                  style={getTextStyle(0.35)}
                >
                  Now in its fifth generation, the Beaumont family continues to honor Auguste's legacy. Each piece is still handcrafted using traditional methods passed down through generations, combined with modern precision and contemporary design sensibilities.
                </p>
              </div>
            </div>

            <div className="relative">
              <div 
                className="bg-jetblack-300/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-gold-400/30"
                style={{
                  transform: `translateY(${-scrollY.progress * 30}px)`,
                  opacity: 0.8 + scrollY.progress * 0.2
                }}
              >
                <div className="text-center mb-8">
                  <div 
                    className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ opacity: scrollY.progress }}
                  >
                    <span className="text-jetblack-500 font-bold text-3xl">A</span>
                  </div>
                  <h4 
                    className="text-2xl font-bold font-serif mb-2"
                    style={getTextStyle(0.4)}
                  >
                    Auguste Beaumont
                  </h4>
                  <p 
                    className="text-base"
                    style={getTextStyle(0.45)}
                  >
                    Founder & Master Jeweller
                  </p>
                </div>
                
                <blockquote 
                  className="text-center italic text-xl font-light"
                  style={getTextStyle(0.5)}
                >
                  "A jewel should not merely adorn, but should tell a story, capture a moment, and inspire generations to come."
                </blockquote>
              </div>

              <div 
                className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-gold rounded-full blur-3xl"
                style={{ opacity: scrollY.progress * 0.4 }}
              />
            </div>
          </div>

          <div className="text-center">
            <p 
              className="text-3xl font-light leading-relaxed max-w-5xl mx-auto font-serif"
              style={getTextStyle(0.6)}
            >
              Today, LUXE continues to be synonymous with uncompromising quality, timeless elegance, and the artistry that transforms precious metals and stones into treasured heirlooms.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
