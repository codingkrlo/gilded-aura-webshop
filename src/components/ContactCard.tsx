
import { useState } from "react";

const ContactCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex justify-center items-center py-16">
      <div className="relative w-[500px] h-80 perspective-1000">
        <div 
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front Side - Logo Only */}
          <div className="absolute inset-0 w-full h-full backface-hidden bg-black rounded-xl shadow-2xl border border-gold-500/20">
            <div className="flex items-center justify-center h-full">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center relative z-10">
                    <span className="text-black font-bold text-3xl">I</span>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 bg-gradient-gold rounded-full blur-sm opacity-50"></div>
                </div>
                <span className="text-5xl font-bold text-gold-500 font-serif">IIRA</span>
              </div>
            </div>
          </div>

          {/* Back Side - Contact Information */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-black rounded-xl shadow-2xl border border-gold-500/20 p-8">
            <div className="flex flex-col justify-center items-center h-full space-y-6">
              <div className="text-center mb-4">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-xl">I</span>
                  </div>
                  <span className="text-3xl font-bold text-gold-500 font-serif">IIRA</span>
                </div>
                <p className="text-gold-400 text-base">Premium Jewelry Since 1895</p>
              </div>
              
              <div className="space-y-4 text-center w-full">
                <div className="py-3">
                  <p className="text-gold-300 text-base font-medium mb-2">Phone</p>
                  <p className="text-gold-500 font-semibold text-lg">+1 (555) 123-4567</p>
                </div>
                
                <div className="py-3">
                  <p className="text-gold-300 text-base font-medium mb-2">Email</p>
                  <p className="text-gold-500 font-semibold text-base">contact@iirajewelry.com</p>
                </div>
                
                <div className="py-3">
                  <p className="text-gold-300 text-base font-medium mb-2">Address</p>
                  <p className="text-gold-500 font-semibold text-base leading-relaxed">
                    123 Diamond Street<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
