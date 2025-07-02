
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTextStyle = (delay = 0) => {
    const progress = Math.max(0, Math.min(1, scrollY - delay));
    const opacity = 0.3 + (progress * 0.7);
    const goldIntensity = Math.min(255, progress * 255);
    
    return {
      opacity,
      color: `rgb(${255 - goldIntensity * 0.2}, ${215 - goldIntensity * 0.1}, ${goldIntensity * 0.8})`,
      transition: 'all 0.3s ease-out'
    };
  };

  return (
    <section ref={sectionRef} className="py-32 bg-jetblack-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-gold-500/10 via-gold-400/20 to-gold-300/10 rounded-full blur-3xl"
          style={{
            top: '20%',
            left: `${20 + scrollY * 30}%`,
            opacity: scrollY * 0.6
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-l from-gold-600/15 via-gold-500/25 to-gold-400/15 rounded-full blur-2xl"
          style={{
            bottom: '20%',
            right: `${10 + scrollY * 40}%`,
            opacity: scrollY * 0.4
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="text-6xl font-bold mb-6 font-serif"
            style={getTextStyle()}
          >
            Our Legacy
          </h2>
          <div 
            className="w-24 h-1 mx-auto rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, rgb(${255 - scrollY * 50}, ${215 - scrollY * 20}, ${scrollY * 200}), transparent)`,
              opacity: scrollY
            }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 
                className="text-3xl font-bold mb-4 font-serif"
                style={getTextStyle(0.1)}
              >
                Since 1895
              </h3>
              <p 
                className="text-lg leading-relaxed"
                style={getTextStyle(0.15)}
              >
                In the heart of New York's bustling Diamond District, Master Jeweller Auguste Beaumont founded LUXE with a simple yet profound vision: to create jewelry that transcends time and captures the essence of eternal beauty.
              </p>
            </div>

            <div>
              <h4 
                className="text-2xl font-bold mb-3 font-serif"
                style={getTextStyle(0.2)}
              >
                The Master's Touch
              </h4>
              <p 
                className="text-lg leading-relaxed"
                style={getTextStyle(0.25)}
              >
                Auguste, trained in the finest ateliers of Paris and Geneva, brought European craftsmanship to American shores. His innovative techniques in diamond cutting and precious metal work quickly established LUXE as the premier destination for discerning collectors.
              </p>
            </div>

            <div>
              <h4 
                className="text-2xl font-bold mb-3 font-serif"
                style={getTextStyle(0.3)}
              >
                A Dynasty of Excellence
              </h4>
              <p 
                className="text-lg leading-relaxed"
                style={getTextStyle(0.35)}
              >
                Now in its fifth generation, the Beaumont family continues to honor Auguste's legacy. Each piece is still handcrafted using traditional methods passed down through generations, combined with modern precision and contemporary design sensibilities.
              </p>
            </div>
          </div>

          <div className="relative">
            <div 
              className="bg-jetblack-200 rounded-2xl p-8 shadow-2xl border border-gold-500/20"
              style={{
                transform: `translateY(${-scrollY * 20}px)`,
                opacity: 0.7 + scrollY * 0.3
              }}
            >
              <div className="text-center mb-6">
                <div 
                  className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ opacity: scrollY }}
                >
                  <span className="text-jetblack-500 font-bold text-2xl">A</span>
                </div>
                <h5 
                  className="text-xl font-bold font-serif"
                  style={getTextStyle(0.4)}
                >
                  Auguste Beaumont
                </h5>
                <p 
                  className="text-sm"
                  style={getTextStyle(0.45)}
                >
                  Founder & Master Jeweller
                </p>
              </div>
              
              <blockquote 
                className="text-center italic text-lg"
                style={getTextStyle(0.5)}
              >
                "A jewel should not merely adorn, but should tell a story, capture a moment, and inspire generations to come."
              </blockquote>
            </div>

            <div 
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-gold rounded-full blur-2xl"
              style={{ opacity: scrollY * 0.3 }}
            />
          </div>
        </div>

        <div className="mt-20 text-center">
          <p 
            className="text-2xl font-light leading-relaxed max-w-4xl mx-auto font-serif"
            style={getTextStyle(0.6)}
          >
            Today, LUXE continues to be synonymous with uncompromising quality, timeless elegance, and the artistry that transforms precious metals and stones into treasured heirlooms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
