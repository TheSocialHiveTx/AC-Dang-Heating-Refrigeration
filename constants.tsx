
import React from 'react';
import { ShieldCheck, Snowflake, Thermometer, Wrench, Truck, Clock, MapPin, Phone } from 'lucide-react';
import { ReviewSnippet, FAQItem } from './types';

export const BUSINESS_INFO = {
  name: "AC Dang Heating & Refrigeration",
  phone: "(713) 998-2373",
  phoneRaw: "7139982373",
  city: "Houston, TX",
  serviceAreas: ["Houston TX", "Sugar Land TX", "Bellaire TX", "West University TX", "Missouri City TX"],
  hours: "7 Days a Week, Morning – 9 PM",
  experience: "Serving Houston Since 1997",
  primaryOffer: "Free AC Inspection & Estimate"
};

export const SERVICES = [
  {
    title: "AC Repair",
    description: "Fast diagnostics and same-day repairs to restore your comfort in the Texas heat.",
    icon: <Snowflake className="w-8 h-8 text-blue-600" />,
    details: [
      "Emergency same-day repair service",
      "Refrigerant leak detection & recharge",
      "Capacitor, contactor & fan motor replacement",
      "Thermostat troubleshooting & calibration",
      "Drain line clearing & pan treatments"
    ]
  },
  {
    title: "AC Installation",
    description: "High-efficiency systems professionally installed with honest, upfront pricing.",
    icon: <Wrench className="w-8 h-8 text-blue-600" />,
    details: [
      "Full system replacements (Condenser & Coil)",
      "High-efficiency SEER2 rated equipment",
      "Custom ductwork design & modifications",
      "Professional load calculations for proper sizing",
      "Industry-leading manufacturer warranties"
    ]
  },
  {
    title: "Heating Services",
    description: "Repair and installation of furnace and heating systems to keep you warm through the winter.",
    icon: <Thermometer className="w-8 h-8 text-red-600" />,
    details: [
      "Gas furnace safety inspections",
      "Heat exchanger crack diagnostics",
      "Igniter & flame sensor cleaning/replacement",
      "Electric heater strip repairs",
      "Seasonal heating tune-ups"
    ]
  },
  {
    title: "Commercial Refrigeration",
    description: "Expert maintenance and repair for walk-ins, reach-ins, and prep tables.",
    icon: <ShieldCheck className="w-8 h-8 text-slate-600" />,
    details: [
      "Walk-in cooler & freezer diagnostics",
      "Reach-in refrigerator & display case repair",
      "Commercial ice machine service",
      "Gasket replacement & door alignment",
      "Compressor & evaporator coil maintenance"
    ]
  }
];

export const REVIEWS: ReviewSnippet[] = [
  {
    text: "Trusted and respected. Dang has been servicing our units for 20 years. Pricing is better than usual.",
    author: "Long-term Client",
    rating: 5
  },
  {
    text: "Honest and straightforward in diagnosing the problem and giving me an estimate before replacing any components.",
    author: "Residential Customer",
    rating: 5
  },
  {
    text: "Fixed our AC unit within 10 minutes… Highly Recommend!",
    author: "Local Homeowner",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you offer free inspections or estimates?",
    answer: "Yes! We provide free AC inspections and upfront estimates so you know exactly what to expect before any work begins."
  },
  {
    question: "How quickly can you respond to AC emergencies in Houston?",
    answer: "We prioritize urgent calls and aim for same-day service whenever possible, especially during extreme heat waves."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. AC Dang is a fully licensed and insured HVAC contractor with over 20 years of experience in the state of Texas."
  },
  {
    question: "What areas do you service around Houston?",
    answer: "We proudly serve Houston, Sugar Land, Bellaire, West University, Missouri City, and surrounding areas."
  },
  {
    question: "How do I know if I need AC repair or replacement?",
    answer: "Common signs include warm air blowing from vents, frequent cycling, high energy bills, or strange noises. We provide honest diagnostics to help you decide which path is most cost-effective."
  }
];
