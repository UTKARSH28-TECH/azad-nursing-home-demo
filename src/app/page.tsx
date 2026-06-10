"use client";

import { useState } from "react";
import {
  Activity,
  Ambulance,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Dumbbell,
  Ear,
  Eye,
  FileHeart,
  HeartPulse,
  Hospital,
  Mail,
  MapPinned,
  Menu,
  Phone,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Star,
  Syringe,
  Target,
  UserRound,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const services = [
  {
    title: "Orthopaedic Care",
    description: "Advanced treatment for bone, joint, spine, and mobility concerns.",
    icon: Dumbbell,
  },
  {
    title: "Trauma & Emergency Care",
    description: "Immediate response for injuries, accidents, and urgent care needs.",
    icon: Ambulance,
  },
  {
    title: "General Surgery",
    description: "Comprehensive surgical care with accurate diagnosis and safe procedures.",
    icon: Activity,
  },
  {
    title: "Women's Health",
    description: "Dedicated gynecology and maternal healthcare support.",
    icon: HeartPulse,
  },
  {
    title: "ENT Care",
    description: "Specialized care for ear, nose, throat, and hearing issues.",
    icon: Ear,
  },
  {
    title: "Eye Care",
    description: "Routine eye examinations and ophthalmology consultations.",
    icon: Eye,
  },
  {
    title: "Urology Services",
    description: "Expert urinary tract and kidney care with modern evaluation.",
    icon: Syringe,
  },
  {
    title: "General Medicine",
    description: "Preventive care, diagnosis, and treatment for common illnesses.",
    icon: Stethoscope,
  },
  {
    title: "Health Checkups",
    description: "Wellness packages and preventive screening for every stage of life.",
    icon: SearchCheck,
  },
];

const features = [
  "Experienced Specialists",
  "Patient-Centered Care",
  "Modern Medical Facilities",
  "Affordable Healthcare",
  "Emergency Services",
  "Advanced Diagnostics",
  "Ethical Medical Practice",
  "Trusted Local Hospital",
];

const testimonials = [
  {
    name: "Rakesh Kumar",
    rating: 5,
    quote:
      "My fracture treatment at AZAD NURSING HOME was handled with care and clarity. The doctor explained everything and the recovery support was excellent.",
  },
  {
    name: "Sonia Devi",
    rating: 5,
    quote:
      "The surgical team was professional and reassuring. The hospital felt clean, organized, and focused on patient comfort at every step.",
  },
  {
    name: "Imran Ansari",
    rating: 5,
    quote:
      "We received quick emergency attention and the staff responded immediately. The doctors were calm, experienced, and helpful throughout the process.",
  },
  {
    name: "Pooja Kumari",
    rating: 5,
    quote:
      "I appreciated the friendly staff and the genuine concern shown by the doctors. It felt like the hospital truly cared about my family’s wellbeing.",
  },
];

const specialists = [
  {
    name: "Dr. Mohammad Azad",
    qualifications: ["MBBS", "MS (General Surgery)"],
    designation: "Senior Consultant Surgeon",
    profile: "Founder & Medical Director",
    specialties: [
      "General Surgery",
      "Minor Surgical Procedures",
      "Emergency Surgical Care",
      "Patient Consultation",
      "Preventive Healthcare",
    ],
    accent: "from-teal-500 to-cyan-500",
  },
  {
    name: "Dr. Shahrukh Azad",
    qualifications: ["MBBS", "MS (Orthopaedics)"],
    designation: "Orthopaedic & Trauma Surgeon",
    profile: "Bone, Joint & Trauma Specialist",
    specialties: [
      "Orthopaedics",
      "Trauma Surgery",
      "Fracture Treatment",
      "Joint Disorders",
      "Sports Injury Management",
      "Arthritis Care",
    ],
    accent: "from-sky-500 to-teal-500",
  },
];

const faqs = [
  {
    question: "How can I book an appointment?",
    answer:
      "Use the appointment form on this page or call the hospital directly for quick scheduling support.",
  },
  {
    question: "Do you provide emergency care?",
    answer:
      "Yes, emergency support is available and Sunday services are reserved for emergencies only.",
  },
  {
    question: "What specialties are available?",
    answer:
      "Orthopaedics, General Surgery, Women's Health, ENT, Ophthalmology, Urology, Emergency Care, and General Medicine.",
  },
  {
    question: "Which doctor should I consult for fractures?",
    answer:
      "Dr. Shahrukh Azad is the orthopaedic and trauma specialist for fracture treatment and joint care.",
  },
  {
    question: "What are the hospital timings?",
    answer:
      "Monday to Friday 9:00 AM to 5:00 PM, Saturday 9:00 AM to 2:00 PM, and Sunday for emergency services only.",
  },
  {
    question: "How can I contact the hospital?",
    answer:
      "Call +91 6532 229316 or +91 94311 44342, or email azadnhgrd@gmail.com for general inquiries.",
  },
];

const timeline = [
  { year: "2000+", label: "Trusted care journey begins with community service." },
  { year: "2010+", label: "Expanded access to multi-speciality treatment in Giridih." },
  { year: "Today", label: "Patient-first care supported by experienced doctors and modern facilities." },
];

const quickStats = [
  { label: "20+ Years of Trusted Care", value: "20+" },
  { label: "10,000+ Patients Served", value: "10K+" },
  { label: "Multi-Speciality Healthcare", value: "9+" },
  { label: "24/7 Emergency Support", value: "24/7" },
];

const formDefaults = {
  patientName: "",
  mobileNumber: "",
  email: "",
  doctorSelection: "",
  department: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [booking, setBooking] = useState(formDefaults);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setBooking(formDefaults);
    setTimeout(() => setSubmitted(false), 3200);
  };

  return (
    <div className="min-h-screen text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-500 text-white shadow-lg shadow-teal-500/20">
              <Hospital className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-teal-700">AZAD</p>
              <h1 className="font-serif text-lg font-semibold text-slate-900">Nursing Home</h1>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
            {[
              ["About", "#about"],
              ["Specialists", "#doctors"],
              ["Services", "#services"],
              ["Reviews", "#testimonials"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="transition hover:text-teal-700">
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+916532229316"
              className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800 transition hover:bg-teal-100"
            >
              <Phone className="h-4 w-4" />
              +91 6532 229316
            </a>
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition hover:scale-[1.01]"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm font-medium text-slate-700">
                <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#doctors" onClick={() => setMenuOpen(false)}>Specialists</a>
                <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
                <a href="#testimonials" onClick={() => setMenuOpen(false)}>Reviews</a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main id="home">
        <section className="section-shell overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 flex flex-col justify-center"
            >
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-medium text-teal-800 shadow-sm">
                <BadgeCheck className="h-4 w-4" />
                Trusted multi-speciality healthcare in Giridih
              </div>

              <h2 className="max-w-3xl font-serif text-5xl leading-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Quality Healthcare Close to Home
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Providing compassionate, affordable, and advanced healthcare services in Giridih with experienced doctors, modern facilities, and patient-centered care.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition hover:translate-y-[-1px]"
                >
                  Book Appointment
                  <CalendarDays className="h-4 w-4" />
                </a>
                <a
                  href="tel:+919431144342"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-teal-200 hover:text-teal-800"
                >
                  Emergency Contact
                  <Phone className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {quickStats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/80 bg-white/85 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                    <div className="text-2xl font-semibold text-teal-700">{stat.value}</div>
                    <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
                {[
                  "24/7 Emergency Support",
                  "Patient-First Care",
                  "Advanced Diagnostics",
                  "Ethical Medical Practice",
                ].map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                    <Sparkles className="h-4 w-4 text-cyan-500" />
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -left-6 top-10 hidden rounded-full bg-white px-4 py-3 shadow-lg shadow-teal-500/10 lg:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Safe & Trusted</p>
                    <p className="text-xs text-slate-500">Compassionate clinical care</p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="relative min-h-[280px] rounded-[1.75rem] bg-gradient-to-br from-teal-100 via-white to-cyan-100 p-6">
                    <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.9),transparent_30%)]" />
                    <div className="relative flex h-full flex-col justify-between">
                      <div className="flex items-center justify-between text-sm font-medium text-slate-600">
                        <span>Hospital View</span>
                        <Camera className="h-4 w-4" />
                      </div>
                      <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-teal-700 shadow-sm">
                          Multi-speciality care center
                        </div>
                        <div className="rounded-[1.4rem] bg-white/80 p-4 shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-600 text-white">
                              <Hospital className="h-6 w-6" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-900">AZAD NURSING HOME</p>
                              <p className="text-xs text-slate-500">Giridih, Jharkhand</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1.75rem] bg-slate-900 p-5 text-white shadow-lg">
                      <p className="text-xs uppercase tracking-[0.24em] text-teal-300">Today’s Care Team</p>
                      <div className="mt-4 space-y-3">
                        {[
                          "Dr. Mohammad Azad - General Surgery",
                          "Dr. Shahrukh Azad - Orthopaedics",
                          "Emergency Care - Available 24/7",
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-200">
                            <CheckCircle2 className="h-4 w-4 text-teal-300" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-slate-900">Emergency Support</p>
                          <p className="text-sm text-slate-500">Fast response for urgent care needs</p>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                          <HeartPulse className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4 rounded-2xl bg-gradient-to-r from-teal-50 to-cyan-50 px-4 py-3 text-sm text-slate-700">
                        Clean facilities, expert consultation, and patient-friendly support.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="section-shell border-t border-slate-200/70 bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800">
                  <Target className="h-4 w-4" /> About AZAD NURSING HOME
                </span>
                <h3 className="mt-5 font-serif text-4xl text-slate-950 sm:text-5xl">
                  Trusted healthcare for the community in Giridih.
                </h3>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  AZAD NURSING HOME is dedicated to providing affordable, accessible, and quality healthcare services for patients and families across the region. The hospital blends clinical excellence, modern medical facilities, and compassionate care to support every stage of treatment.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Patient-First Healthcare",
                      text: "Personalized treatment plans guided by compassion and clinical clarity.",
                      icon: UserRound,
                    },
                    {
                      title: "Modern Facilities",
                      text: "Supportive care environments with updated tools and organized workflows.",
                      icon: FileHeart,
                    },
                    {
                      title: "Affordable Treatment",
                      text: "Quality care designed to remain accessible for local families.",
                      icon: BadgeCheck,
                    },
                    {
                      title: "Community Service",
                      text: "A reliable healthcare partner for the people of Giridih and beyond.",
                      icon: Activity,
                    },
                  ].map((item) => (
                    <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-600 text-white">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h4 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 lg:sticky lg:top-24">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[2rem] bg-gradient-to-br from-teal-500 to-cyan-500 p-6 text-white shadow-xl shadow-teal-500/20">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-50">Mission</p>
                    <p className="mt-4 text-2xl font-semibold leading-tight">
                      To provide affordable, accessible, and quality healthcare services for every patient.
                    </p>
                  </div>
                  <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">Vision</p>
                    <p className="mt-4 text-2xl font-semibold leading-tight text-slate-900">
                      To become the most trusted healthcare destination in Jharkhand.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {timeline.map((item) => (
                    <div key={item.year} className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="text-sm font-semibold text-teal-700">{item.year}</div>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Experienced doctors", value: "2" },
                    { label: "Key specialties", value: "8+" },
                    { label: "Patient support focus", value: "100%" },
                    { label: "Community trust", value: "Local" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[1.5rem] bg-slate-900 p-5 text-white">
                      <div className="text-3xl font-semibold text-cyan-300">{item.value}</div>
                      <p className="mt-2 text-sm text-slate-300">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="doctors" className="section-shell py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800">
                <ShieldCheck className="h-4 w-4" /> Meet Our Specialists
              </span>
              <h3 className="mt-5 font-serif text-4xl text-slate-950 sm:text-5xl">
                Experienced doctors leading patient care.
              </h3>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {specialists.map((doctor) => (
                <motion.article
                  key={doctor.name}
                  whileHover={{ y: -4 }}
                  className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
                >
                  <div className={`h-40 bg-gradient-to-r ${doctor.accent} p-6 text-white`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/80">Doctor Profile</p>
                        <h4 className="mt-3 font-serif text-3xl">{doctor.name}</h4>
                      </div>
                      <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-white/15 backdrop-blur-sm">
                        <UserRound className="h-8 w-8" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2">
                      {doctor.qualifications.map((qualification) => (
                        <span key={qualification} className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
                          {qualification}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 grid gap-4">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{doctor.designation}</p>
                        <p className="text-sm text-slate-600">{doctor.profile}</p>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-900">Specializations</p>
                        <div className="mt-3 grid gap-2 sm:grid-cols-2">
                          {doctor.specialties.map((specialty) => (
                            <div key={specialty} className="flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                              <ChevronRight className="h-4 w-4 text-teal-600" />
                              {specialty}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <a href="#appointment" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
                          Book Appointment
                          <CalendarDays className="h-4 w-4" />
                        </a>
                        <a href="tel:+916532229316" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-800">
                          Call Hospital
                          <Phone className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section-shell border-y border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800">
                <Activity className="h-4 w-4" /> Services
              </span>
              <h3 className="mt-5 font-serif text-4xl text-slate-950 sm:text-5xl">Comprehensive care across key specialties.</h3>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <motion.article
                  key={service.title}
                  whileHover={{ y: -5 }}
                  className="group rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:border-teal-200 hover:bg-white"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-500 text-white shadow-lg shadow-teal-500/20">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h4 className="mt-5 text-xl font-semibold text-slate-900">{service.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                  <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition group-hover:translate-x-1">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800">
                <Sparkles className="h-4 w-4" /> Why Choose Us
              </span>
              <h3 className="mt-5 font-serif text-4xl text-slate-950 sm:text-5xl">Why patients trust AZAD NURSING HOME.</h3>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div key={feature} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                    {[ShieldCheck, HeartPulse, Hospital, Zap, CalendarDays, SearchCheck, BadgeCheck, Activity][index] ? (
                      (() => {
                        const Icon = [ShieldCheck, HeartPulse, Hospital, Zap, CalendarDays, SearchCheck, BadgeCheck, Activity][index];
                        return <Icon className="h-5 w-5" />;
                      })()
                    ) : null}
                  </div>
                  <p className="mt-4 text-lg font-semibold text-slate-900">{feature}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Built around trust, comfort, and quality care for every patient.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="section-shell border-y border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800">
                  <Star className="h-4 w-4" /> Patient Testimonials
                </span>
                <h3 className="mt-5 font-serif text-4xl text-slate-950 sm:text-5xl">Real feedback from patients and families.</h3>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-600">
                These sample testimonials reflect the experience patients expect from a premium, caring hospital environment.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-700">“{testimonial.quote}”</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                      <UserRound className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-xs text-slate-500">Verified patient feedback</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="appointment" className="section-shell py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div className="rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 p-8 text-white shadow-2xl shadow-teal-500/10">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-teal-100">
                <CalendarDays className="h-4 w-4" /> Appointment Booking
              </span>
              <h3 className="mt-5 font-serif text-4xl text-white">Book a consultation quickly and conveniently.</h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
                Use the demo appointment form to simulate an easy hospital booking experience. The form displays a confirmation message after submission for a polished, trustworthy interaction.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  [Clock3, "Fast response"],
                  [Phone, "Direct hospital contact"],
                  [BadgeCheck, "Specialist selection"],
                  [CheckCircle2, "Confirmation success"],
                ].map(([Icon, label]) => (
                  <div key={label as string} className="flex items-center gap-3 rounded-2xl bg-white/8 px-4 py-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-teal-200">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="text-sm font-medium text-slate-100">{label as string}</p>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={onSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Patient Name">
                  <input value={booking.patientName} onChange={(event) => setBooking({ ...booking, patientName: event.target.value })} className={inputClass} placeholder="Enter patient name" />
                </Field>
                <Field label="Mobile Number">
                  <input value={booking.mobileNumber} onChange={(event) => setBooking({ ...booking, mobileNumber: event.target.value })} className={inputClass} placeholder="10-digit mobile number" />
                </Field>
                <Field label="Email">
                  <input value={booking.email} onChange={(event) => setBooking({ ...booking, email: event.target.value })} className={inputClass} placeholder="name@example.com" type="email" />
                </Field>
                <Field label="Doctor Selection">
                  <select value={booking.doctorSelection} onChange={(event) => setBooking({ ...booking, doctorSelection: event.target.value })} className={inputClass}>
                    <option value="">Select doctor</option>
                    <option>Dr. Mohammad Azad</option>
                    <option>Dr. Shahrukh Azad</option>
                  </select>
                </Field>
                <Field label="Department">
                  <select value={booking.department} onChange={(event) => setBooking({ ...booking, department: event.target.value })} className={inputClass}>
                    <option value="">Select department</option>
                    <option>Orthopaedics</option>
                    <option>General Surgery</option>
                    <option>Women's Health</option>
                    <option>ENT Care</option>
                    <option>Eye Care</option>
                    <option>Urology</option>
                    <option>General Medicine</option>
                  </select>
                </Field>
                <Field label="Preferred Date">
                  <input value={booking.preferredDate} onChange={(event) => setBooking({ ...booking, preferredDate: event.target.value })} className={inputClass} type="date" />
                </Field>
                <Field label="Preferred Time">
                  <input value={booking.preferredTime} onChange={(event) => setBooking({ ...booking, preferredTime: event.target.value })} className={inputClass} type="time" />
                </Field>
                <Field label="Message" fullWidth>
                  <textarea value={booking.message} onChange={(event) => setBooking({ ...booking, message: event.target.value })} className={`${inputClass} min-h-32`} placeholder="Briefly describe your concern" />
                </Field>
              </div>

              {submitted ? (
                <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
                  Appointment request submitted successfully. Our team will contact you shortly.
                </div>
              ) : null}

              <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/20 transition hover:translate-y-[-1px]">
                Book Appointment
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>

        <section id="contact" className="section-shell border-t border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800">
                  <MapPinned className="h-4 w-4" /> Contact
                </span>
                <h3 className="mt-5 font-serif text-4xl text-slate-950 sm:text-5xl">Visit us or get in touch anytime.</h3>
              </div>
              <div className="rounded-full bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                Emergency services only on Sunday
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="grid gap-4">
                {[
                  {
                    title: "Address",
                    lines: [
                      "AZAD NURSING HOME",
                      "Giridih Pachamba Road,",
                      "Bhandaridih, Giridih, Jharkhand – 815301",
                    ],
                    icon: MapPinned,
                  },
                  {
                    title: "Phone",
                    lines: ["+91 6532 229316", "+91 94311 44342"],
                    icon: Phone,
                  },
                  {
                    title: "Email",
                    lines: ["azadnhgrd@gmail.com"],
                    icon: Mail,
                  },
                  {
                    title: "Working Hours",
                    lines: [
                      "Monday–Friday: 9:00 AM – 5:00 PM",
                      "Saturday: 9:00 AM – 2:00 PM",
                      "Sunday: Emergency Services Only",
                    ],
                    icon: Clock3,
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-600 text-white">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                    </div>
                    <div className="mt-4 space-y-1 text-sm leading-6 text-slate-600">
                      {item.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="rounded-[1.75rem] border border-teal-200 bg-gradient-to-r from-teal-50 to-cyan-50 p-5">
                  <p className="font-semibold text-teal-900">Quick Contact</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a href="tel:+916532229316" className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white">
                      <Phone className="h-4 w-4" /> Call Now
                    </a>
                    <a href="mailto:azadnhgrd@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-800">
                      <Mail className="h-4 w-4" /> Email Us
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
                  <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Interactive Map</p>
                      <p className="text-sm text-slate-500">Giridih Pachamba Road, Bhandaridih</p>
                    </div>
                    <MapPinned className="h-5 w-5 text-teal-600" />
                  </div>
                  <div className="relative min-h-[420px] bg-[linear-gradient(135deg,rgba(20,184,166,0.16),rgba(6,182,212,0.16)),radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.9),transparent_22%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.85),transparent_24%)] p-6">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[size:48px_48px] opacity-70" />
                    <div className="relative mx-auto flex h-full max-w-md items-center justify-center">
                      <div className="rounded-[2rem] border border-white/80 bg-white/85 p-8 text-center shadow-xl backdrop-blur-sm">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-500 text-white shadow-lg">
                          <MapPinned className="h-7 w-7" />
                        </div>
                        <h4 className="mt-5 text-2xl font-semibold text-slate-900">Map Placeholder</h4>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          Replace this panel with an embedded map when the deployment target is finalized.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Appointment line", value: "+91 6532 229316" },
                    { label: "Emergency line", value: "+91 94311 44342" },
                    { label: "Email support", value: "azadnhgrd@gmail.com" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                      <p className="mt-3 text-sm font-semibold text-slate-900">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell border-t border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800">
                <HelpIcon /> FAQ
              </span>
              <h3 className="mt-5 font-serif text-4xl text-slate-950 sm:text-5xl">Frequently asked questions.</h3>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-sm open:bg-white">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-slate-900">
                    <span>{faq.question}</span>
                    <ChevronRight className="h-5 w-5 shrink-0 text-teal-700 transition group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.8fr_0.8fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-500 text-white">
                <Hospital className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-teal-300">AZAD</p>
                <h4 className="font-serif text-2xl text-white">Nursing Home</h4>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              About AZAD NURSING HOME: a trusted healthcare provider in Giridih committed to quality treatment, ethical care, and community service.
            </p>
          </div>

          <FooterGroup title="Quick Links" items={["About", "Specialists", "Services", "Appointment", "Contact"]} />
          <FooterGroup title="Services" items={["Orthopaedics", "Trauma Care", "General Surgery", "Women's Health", "Emergency Care"]} />

          <div>
            <h5 className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-300">Contact Information</h5>
            <div className="mt-5 space-y-3 text-sm text-slate-400">
              <p>Giridih Pachamba Road, Bhandaridih, Giridih, Jharkhand – 815301</p>
              <p>+91 6532 229316</p>
              <p>+91 94311 44342</p>
              <p>azadnhgrd@gmail.com</p>
            </div>
            <div className="mt-6 flex gap-3">
              {[
                { label: "Facebook", glyph: "f" },
                { label: "Instagram", glyph: "ig" },
                { label: "X", glyph: "x" },
              ].map((item) => (
                <a
                  key={item.label}
                  href="#"
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold uppercase tracking-wider text-slate-300 transition hover:bg-teal-500 hover:text-white"
                >
                  {item.glyph}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} AZAD NURSING HOME. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  children,
  fullWidth,
}: {
  label: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}) {
  return (
    <label className={fullWidth ? "sm:col-span-2" : undefined}>
      <span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span>
      {children}
    </label>
  );
}

function FooterGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h5 className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-300">{title}</h5>
      <ul className="mt-5 space-y-3 text-sm text-slate-400">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="transition hover:text-white">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HelpIcon() {
  return <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-teal-700 text-[10px] font-bold text-teal-700">?</span>;
}

const inputClass =
  "mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-100";
