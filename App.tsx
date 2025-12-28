
import React, { useState } from 'react';
import { Phone, MapPin, Clock, Star, CheckCircle2, ChevronDown, ChevronUp, ArrowRight, Shield, X, Info } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, REVIEWS, FAQS } from './constants';
import { ServiceCardProps, FAQItem } from './types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, onClick }) => (
  <button 
    onClick={onClick}
    className="w-full text-left bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:border-blue-200 group relative overflow-hidden"
  >
    <div className="mb-4 inline-block p-3 bg-slate-50 rounded-lg group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
      {title}
      <Info className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
    </h3>
    <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
    <div className="mt-4 text-blue-600 text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
      Learn More <ArrowRight className="w-3 h-3" />
    </div>
  </button>
);

const FAQAccordion: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button 
        className="w-full flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg pr-4">{item.question}</span>
        {isOpen ? <ChevronUp className="flex-shrink-0" /> : <ChevronDown className="flex-shrink-0" />}
      </button>
      {isOpen && (
        <div className="mt-3 text-slate-600 leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
};

const ServiceModal: React.FC<{ service: any; onClose: () => void }> = ({ service, onClose }) => {
  if (!service) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-8">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="mb-6 p-4 bg-slate-50 rounded-2xl inline-block">
            {service.icon}
          </div>
          <h3 className="text-3xl font-black mb-4">{service.title}</h3>
          <p className="text-slate-600 mb-8 text-lg leading-relaxed">{service.description}</p>
          
          <div className="space-y-4 mb-8">
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-600">What's Included:</h4>
            <ul className="space-y-3">
              {service.details?.map((detail: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <a 
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/10"
          >
            <Phone className="w-6 h-6 fill-white" />
            Book Your Service
          </a>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<any | null>(null);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* 1. Sticky Mobile Call Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-blue-600 border-t border-blue-500 px-4 py-3 flex items-center justify-between shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col text-white">
          <span className="text-[10px] uppercase tracking-wider font-bold opacity-80">Urgent Service</span>
          <span className="text-sm font-bold tracking-tight">{BUSINESS_INFO.phone}</span>
        </div>
        <a 
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold flex items-center gap-2 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 fill-blue-600" />
          Call Now
        </a>
      </div>

      {/* Header Desktop */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-black text-slate-900 leading-tight">AC DANG</h1>
            <span className="text-[10px] md:text-xs font-bold text-blue-600 tracking-widest uppercase">Heating & Refrigeration</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">Why Us</a>
            <a href="#areas" className="hover:text-blue-600 transition-colors">Areas</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
          </div>
          <a 
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            <Phone className="w-4 h-4 fill-white" />
            {BUSINESS_INFO.phone}
          </a>
          <a 
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="md:hidden flex items-center justify-center p-2 rounded-lg bg-blue-100 text-blue-600"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>
      </header>

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <section className="relative bg-slate-900 py-16 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
             <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px] -mr-48 -mt-48"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-[100px] -ml-48 -mb-48"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-6">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">{BUSINESS_INFO.experience}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                No Cooling? <br/>
                <span className="text-blue-500">Fast Houston AC Repair</span> You Can Trust.
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl">
                Serving Houston families since 1997 with honest diagnostics and upfront pricing. Don't sweat the Texas heat—get expert service today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="bg-blue-600 text-white text-center px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-900/20"
                >
                  <Phone className="w-5 h-5 fill-white" />
                  Call Now: {BUSINESS_INFO.phone}
                </a>
                <div className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl border border-white/10">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-medium text-sm">{BUSINESS_INFO.hours}</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/hvac/600/500" 
                  alt="HVAC Service Technician" 
                  className="rounded-2xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20">
                  <div className="flex items-center gap-1 mb-2">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-sm font-bold text-slate-900">"Pricing better than usual"</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">— Verified Review</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Trust Signals & Review Highlights */}
        <section className="bg-white border-b border-slate-100 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center md:justify-between gap-8 items-center opacity-70">
              <div className="flex items-center gap-2 font-black text-xl text-slate-400 uppercase tracking-tighter italic">20+ Years Exp</div>
              <div className="flex items-center gap-2 font-black text-xl text-slate-400 uppercase tracking-tighter italic">Honest Pricing</div>
              <div className="flex items-center gap-2 font-black text-xl text-slate-400 uppercase tracking-tighter italic">Local Houston</div>
              <div className="flex items-center gap-2 font-black text-xl text-slate-400 uppercase tracking-tighter italic">Family Owned</div>
            </div>
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {REVIEWS.map((review, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 italic relative">
                  <div className="flex items-center gap-0.5 mb-3">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-slate-700 leading-relaxed text-sm mb-4">"{review.text}"</p>
                  <p className="text-xs font-bold text-slate-500 uppercase">— {review.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Core Services */}
        <section id="services" className="py-20 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Professional Services</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900">Reliable HVAC Solutions</h3>
              <p className="text-slate-500 mt-4">Click any service to see how we help.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((s, i) => (
                <ServiceCard key={i} {...s} onClick={() => setSelectedService(s)} />
              ))}
            </div>
          </div>
        </section>

        {/* 5. Why Choose Us */}
        <section id="about" className="py-20 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -left-10 -top-10 text-slate-200 pointer-events-none">
                  <Shield className="w-64 h-64 opacity-20" />
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 relative z-10">
                  Why Houstonians Choose <br/>
                  <span className="text-blue-600 italic underline decoration-blue-200">AC Dang</span>
                </h2>
                <div className="space-y-6 relative z-10">
                  {[
                    { title: "Honest Diagnostics", text: "We tell you exactly what's wrong—no unnecessary upsells." },
                    { title: "20+ Years Experience", text: "Trusted by local families and businesses since 1997." },
                    { title: "Same-Day Service", text: "We understand AC failure in Houston is an emergency." },
                    { title: "Upfront Estimates", text: "No surprises. You approve the price before we start." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-slate-600">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                <img src="https://picsum.photos/seed/truck/500/350" alt="Service Truck" className="rounded-xl mb-6 shadow-sm grayscale" />
                <div className="text-center">
                  <p className="text-2xl font-bold mb-2">Ready to Help Today</p>
                  <p className="text-slate-500 mb-6 italic">Residential and Light Commercial Service</p>
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-block w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-red-900/10">
                    Get Your Fast Estimate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Service Area Coverage */}
        <section id="areas" className="py-20 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 overflow-hidden relative">
              <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
                 <MapPin className="w-96 h-96 -mr-20 -mt-10" />
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <h2 className="text-white text-3xl md:text-5xl font-black mb-6">Serving the Greater Houston Area</h2>
                  <p className="text-slate-400 mb-8 max-w-md">
                    Based in Houston, we provide rapid response to our neighbors in all surrounding communities. If you're in the loop or just outside it, we've got you covered.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {BUSINESS_INFO.serviceAreas.map((area, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-300 font-semibold">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-8 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <p className="text-white text-xl font-bold mb-4 uppercase tracking-widest">Our HQ</p>
                  <p className="text-slate-300 mb-6 italic">{BUSINESS_INFO.city} (Address TBD)</p>
                  <p className="text-4xl font-black text-blue-400 mb-2 leading-none">100%</p>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Local Commitment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Primary Offer Banner */}
        <section className="py-12 bg-red-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-white text-3xl md:text-5xl font-black uppercase italic mb-4">Limited Time Offer</h2>
            <div className="inline-block bg-white text-red-600 px-6 py-2 rounded-full font-black text-xl mb-6 shadow-lg transform -rotate-2">
              {BUSINESS_INFO.primaryOffer}
            </div>
            <p className="text-red-50 text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Mention this website to claim your free inspection. No hidden fees, just professional advice.
            </p>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-800 transition-all inline-flex items-center gap-4 shadow-xl">
              Claim Offer Now <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </section>

        {/* 8. Simple Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">How It Works</h2>
              <p className="text-slate-500 mt-4">Restoring your comfort in 3 simple steps.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { step: "1", title: "Call for a Slot", text: "Contact us at (713) 998-2373 to schedule your inspection." },
                { step: "2", title: "Honest Inspection", text: "Our lead tech arrives to diagnose the issue and provide an upfront quote." },
                { step: "3", title: "Cool Comfort", text: "We perform the repair or install and leave your home as clean as we found it." }
              ].map((item, i) => (
                <div key={i} className="relative group">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-3xl font-black text-blue-600 mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FAQ Section */}
        <section id="faq" className="py-20 bg-slate-50 scroll-mt-20">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-500">Everything you need to know about our Houston HVAC services.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              {FAQS.map((item, i) => (
                <FAQAccordion key={i} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* 10. Final Call to Action */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-500/20">
              <Phone className="w-10 h-10 fill-white" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 italic">Don't Suffer in Silence.</h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Ready for an honest diagnostic and a cool home? One call to AC Dang is all it takes to solve your HVAC problems for good.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a 
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full md:w-auto bg-white text-slate-900 px-12 py-6 rounded-2xl font-black text-2xl hover:bg-blue-50 transition-all flex items-center justify-center gap-4"
              >
                Call (713) 998-2373
              </a>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">
                Same-Day Estimates Available
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-600 py-12 pb-24 md:pb-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-white font-black text-xl mb-1 tracking-tight">AC DANG</h4>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-4">Heating & Refrigeration</p>
            <p className="text-sm">© {new Date().getFullYear()} AC Dang Heating & Refrigeration. All rights reserved.</p>
          </div>
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg text-xs font-bold uppercase tracking-widest border border-slate-800">
             <div className="w-2 h-2 rounded-full bg-green-500"></div>
             Technicians Dispatched Today
          </div>
        </div>
      </footer>

      {/* Service Modal */}
      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
    </div>
  );
};

export default App;
