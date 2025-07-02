
import { useState } from "react";

const ContactCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex justify-center items-center py-16">
      <div className="relative w-80 h-52 perspective-1000">
        <div 
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front Side - Logo Only */}
          <div className="absolute inset-0 w-full h-full backface-hidden bg-jetblack-500 rounded-xl shadow-2xl border border-gold-500/20">
            <div className="flex items-center justify-center h-full">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center relative z-10">
                    <span className="text-jetblack-500 font-bold text-lg">L</span>
                  </div>
                  <div className="absolute inset-0 w-12 h-12 bg-gradient-gold rounded-full blur-sm opacity-50"></div>
                </div>
                <span className="text-3xl font-bold text-gold-500 font-serif">LUXE</span>
              </div>
            </div>
          </div>

          {/* Back Side - Contact Information */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-jetblack-500 rounded-xl shadow-2xl border border-gold-500/20 p-6">
            <div className="flex flex-col justify-center h-full space-y-4">
              <div className="text-center mb-4">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
                    <span className="text-jetblack-500 font-bold text-sm">L</span>
                  </div>
                  <span className="text-xl font-bold text-gold-500 font-serif">LUXE</span>
                </div>
                <p className="text-gold-400 text-sm">Premium Jewelry Since 1895</p>
              </div>
              
              <div className="space-y-3 text-center">
                <div>
                  <p className="text-gold-300 text-sm font-medium">Phone</p>
                  <p className="text-gold-500 font-semibold">+1 (555) 123-4567</p>
                </div>
                
                <div>
                  <p className="text-gold-300 text-sm font-medium">Email</p>
                  <p className="text-gold-500 font-semibold">contact@luxejewelry.com</p>
                </div>
                
                <div>
                  <p className="text-gold-300 text-sm font-medium">Address</p>
                  <p className="text-gold-500 font-semibold text-sm">
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
