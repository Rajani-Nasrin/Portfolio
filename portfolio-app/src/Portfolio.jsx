import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  ExternalLink,
  Github,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  User,
  Briefcase,
  Layers,
  GraduationCap,
  MessageSquare,
  Send
} from "lucide-react";
import rajani from './assets/images/rajani.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import emailjs from "@emailjs/browser";


import "swiper/css";
import "swiper/css/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


/* ---------------------------------------------------------------- */
/* Data                                                              */
/* ---------------------------------------------------------------- */

const skillGroups = [
  {
    title: "Frontend",
    items: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Styling & Design",
    items: ["Tailwind CSS", "Bootstrap", "Figma", "Adobe Photoshop"],
  },
  {
    title: "Tooling",
    items: ["Git", "GitHub", "WordPress"],
  },
  {
    title: "Professional",
    items: [
      "Problem Solving",
      "Attention to Detail",
      "Time Management",
      "Team Collaboration",
    ],
  },
];

const projects = [
  {
    name: "Mekatron",
    type: "Client",
    tag: "Live",
    link: "https://www.mekatron.in/",
    desc: "Marketing site with a component-driven layout built for fast iteration and clean handoff from Figma.",
    stack: ["HTML5", "CSS3", "Tailwind", "JavaScript"],
  },
  {
    name: "Nikkan Dance Academy",
    type: "Client",
    tag: "Live",
    link: "https://nikkandance.org.uk/",
    desc: "Mobile-first academy site with responsive media galleries and accessible navigation.",
    stack: ["HTML5", "CSS3", "Tailwind", "JavaScript"],
  },
  {
    name: "Skills and Brilliance Towards Growth",
    type: "Client",
    tag: "Live",
    link: "https://stageforwork.com/sbmindtree/",
    desc: "Informational site focused on readable typography and a calm, structured page hierarchy.",
    stack: ["HTML5", "CSS3", "Tailwind", "JavaScript"],
  },
  {
    name: "MyJob Portal",
    type: "Personal",
    tag: "In progress",
    link: "https://amazing-crisp-4e7318.netlify.app/",
    desc: "Job-listing platform with filterable search and a candidate dashboard, built in React.",
    stack: [
      "React",
      "HTML5",
      "CSS3",
      "Tailwind",
      "JavaScript",
      "REST API",
      "JSON",
    ],
  },
  {
    name: "Apeiro BIM",
    type: "Client",
    tag: "Live",

    link: "https://apeirobim.com/",
    desc: "Professional BIM services website built with WordPress, featuring service showcases, project galleries and responsive business-focused design.",
    stack: ["WordPress", "Elementor", "CSS"],
  },
  {
    name: "Animal Feed",
    type: "Client",
    tag: "In progress",
    link: "https://legendary-bienenstitch-b41820.netlify.app/",
    desc: "Product catalogue for a feed supplier with category browsing and an enquiry flow.",
    stack: ["React", "HTML5", "CSS3", "Tailwind", "JavaScript", "PhotoShop"],
  },
  {
    name: "Market Veda",
    type: "Client",
    tag: "In progress",
    link: "https://ephemeral-trifle-b1d067.netlify.app/",
    desc: "Market-research style site with data-driven sections and clean content layout.",
    stack: ["HTML5", "CSS3", "Figma", "Tailwind", "JavaScript"],
  },
  {
    name: "Love Travel",
    type: "Client",
    tag: "In progress",
    link: "https://fascinating-sable-3c4d48.netlify.app/",
    desc: "Travel booking concept with destination galleries and a mobile-first itinerary view.",
    stack: ["HTML5", "CSS3", "Tailwind", "JavaScript"],
  },
  {
    name: "Hagency",
    type: "Personal",
    tag: "In progress",
    link: "https://spiffy-syrniki-b10ca2.netlify.app/",
    desc: "Agency portfolio site with case-study cards and a bold, type-led hero section.",
    stack: ["HTML5", "CSS3", "Tailwind", "JavaScript"],
  },
];

const experience = [
  "Developed responsive, mobile-first user interfaces using HTML5, CSS3, Bootstrap, JavaScript, Figma, Tailwind CSS, and React.js.",
  "Designed and implemented reusable React components to improve scalability and reduce development time.",
  "Translated UI/UX design wireframes into high-quality, production-ready code.",
  "Improved website performance through asset optimization and efficient state management.",
  "Enhanced user engagement by refining layout structure and usability standards.",
  "Ensured cross-browser compatibility and accessibility compliance across web applications.",
];

const education = [
  {
    title: "Bachelor of Technology in Civil Engineering",
    place: "Future Institute of Technology",
    meta: "GPA: 9.07 / 10.0",
    period: "2019 – 2022",
  },
  {
    title: "Diploma in Civil Engineering",
    place: "Camellia Institute of Technology",
    meta: "CGPA: 7.0 / 10.0",
    period: "2016 – 2019",
  },
  {
    title: "Secondary Examination (Madhyamik)",
    place: "Chalkgopal Sarada Vidyapith for Girls",
    meta: "Percentage: 60%",
    period: "2016",
  },
];

const navItems = [
  { id: "about", label: "About", icon: User },
  { id: "work", label: "Work", icon: Layers },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "contact", label: "Contact", icon: MessageSquare },
];



/* ---------------------------------------------------------------- */
/* Hooks & small components                                         */
/* ---------------------------------------------------------------- */

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* ---------------------------------------------------------------- */
/* Project Card + Swiper                                             */
/* ---------------------------------------------------------------- */

const ProjectCard = ({ project }) => (
  <div className="group relative flex min-h-[320px] w-[270px] flex-shrink-0 flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.04] sm:w-[300px] sm:p-6">
    {/* <div className="mb-5 flex items-center gap-1.5">
      <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
      <span
        className={`ml-auto rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${
          project.tag === "Live"
            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
            : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
        }`}
      >
        {project.tag}
      </span>
    </div> */}

    <div className="mb-5 flex items-center gap-1.5">
      <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />

      <span
        className={`ml-2 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${
          project.type === "Client"
            ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
            : "bg-violet-500/10 text-violet-600 dark:text-violet-400"
        }`}
      >
        {project.type}
      </span>

      <span
        className={`ml-auto rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${
          project.tag === "Live"
            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
            : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
        }`}
      >
        {project.tag}
      </span>
    </div>

    <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white sm:text-xl">
      {project.name}
    </h3>
    <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-white/55">
      {project.desc}
    </p>

    <div className="mt-auto flex flex-wrap gap-2 pt-6">
      {project.stack.map((s) => (
        <span
          key={s}
          className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-600 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-300"
        >
          {s}
        </span>
      ))}
    </div>

    {/* <ExternalLink
      size={18}
      className="absolute right-6 top-6 text-slate-300 transition-colors group-hover:text-violet-500 dark:text-white/20 dark:group-hover:text-violet-300"
    /> */}
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute right-1 top-6 text-slate-300 transition-colors group-hover:text-violet-500 dark:text-white/20 dark:group-hover:text-violet-300"
    >
      <ExternalLink size={18} />
    </a>
  </div>
);

const ProjectSwiper = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
       
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map((p) => (
          <SwiperSlide key={p.name}>
            <ProjectCard project={p} style={{ width: "auto" }} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-white/35">
          Swipe to explore — {projects.length} projects
        </p>

        <div className="flex gap-2">
          <button className="custom-prev flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-violet-400 hover:text-violet-500 dark:border-white/15 dark:text-white/70">
            <ChevronLeft size={18} />
          </button>

          <button className="custom-next flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-violet-400 hover:text-violet-500 dark:border-white/15 dark:text-white/70">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

// const ProjectSwiper = () => {
//   const trackRef = useRef(null);

//   const scrollByCard = (dir) => {
//     const el = trackRef.current;
//     if (!el) return;
//     const cardWidth = el.firstChild ? el.firstChild.offsetWidth + 24 : 320;
//     el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
//   };

//   return (
//     <div className="relative">
//       <div
//         ref={trackRef}
//         className="flex gap-6 overflow-x-auto pb-4 pl-1 pr-1 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden"
//       >
//         {projects.map((p) => (
//           <div key={p.name} className="snap-start">
//             <ProjectCard project={p} />
//           </div>
//         ))}
//       </div>

//       <div className="mt-6 flex items-center justify-between">
//         <p className="text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-white/35">
//           Swipe to explore — {projects.length} projects
//         </p>
//         <div className="flex gap-2">
//           <button
//             onClick={() => scrollByCard(-1)}
//             aria-label="Previous project"
//             className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-violet-400 hover:text-violet-500 dark:border-white/15 dark:text-white/70 dark:hover:border-violet-300 dark:hover:text-violet-300"
//           >
//             <ChevronLeft size={18} />
//           </button>
//           <button
//             onClick={() => scrollByCard(1)}
//             aria-label="Next project"
//             className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-violet-400 hover:text-violet-500 dark:border-white/15 dark:text-white/70 dark:hover:border-violet-300 dark:hover:text-violet-300"
//           >
//             <ChevronRight size={18} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

/* ---------------------------------------------------------------- */
/* Sections                                                          */
/* ---------------------------------------------------------------- */

const SectionHeading = ({ eyebrow, title }) => (
  <Reveal>
    <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-violet-500 dark:text-violet-300">
      {eyebrow}
    </p>
    <h2 className="mb-10 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
      {title}
    </h2>
  </Reveal>
);

const AboutSection = () => (
  <section id="about" className="scroll-mt-24 px-6 py-10 md:py-16 sm:px-10 sm:py-24 lg:px-16">
    <SectionHeading eyebrow="Hello" title="About me" />
    <Reveal delay={100}>
      <p className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-white/65 sm:text-lg">
        I'm a results-driven UI &amp; UX Developer with strong expertise in HTML, CSS,
        JavaScript, Figma, Tailwind CSS, and React.js. I build responsive, mobile-first
        web applications that prioritize usability, accessibility, and performance —
        translating design concepts into scalable, production-ready interfaces backed
        by clean, maintainable code.
      </p>
    </Reveal>

    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {skillGroups.map((group, i) => (
        <Reveal key={group.title} delay={i * 80}>
          <div className="h-full rounded-2xl border border-black/[0.06] bg-white p-6 transition-colors hover:border-violet-300 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-violet-400/40">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-violet-500 dark:text-violet-300">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm text-slate-600 dark:bg-white/5 dark:text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

const WorkSection = () => (
  <section
    id="work"
    className="scroll-mt-24 px-6  py-10 md:py-16  sm:px-10 sm:py-24 lg:px-16"
  >
    <SectionHeading eyebrow="Portfolio" title="Selected work" />
    <Reveal delay={100}>
      <ProjectSwiper />
    </Reveal>
  </section>
);

const ExperienceSection = () => (
  <section id="experience" className="scroll-mt-24 px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
    <SectionHeading eyebrow="Career" title="Experience" />
    <Reveal delay={100}>
      <div className="relative overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              UI &amp; UX Developer
            </h3>
            <p className="text-sm font-semibold text-violet-500 dark:text-violet-300">
              Neonate Technologies
            </p>
          </div>
          <span className="rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:bg-white/5 dark:text-white/50">
            Feb 2025 — Present
          </span>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {experience.map((line, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-white/65"
            >
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-400" />
              {line}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  </section>
);

const EducationSection = () => (
  <section id="education" className="scroll-mt-24 px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
    <SectionHeading eyebrow="Background" title="Education" />
    <div className="flex flex-col">
      {education.map((ed, i) => (
        <Reveal key={ed.title} delay={i * 80}>
          <div className="flex flex-col gap-1 border-t border-black/[0.06] py-6 dark:border-white/10 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                {ed.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-white/50">
                {ed.place} · {ed.meta}
              </p>
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-white/40">
              {ed.period}
            </span>
          </div>
        </Reveal>
      ))}
      <div className="border-t border-black/[0.06] dark:border-white/10" />
    </div>
  </section>
);

const ContactSection = ({ formData, handleChange, handleSubmit }) => (
  <section
    id="contact"
    className="scroll-mt-24 px-6 py-16 sm:px-10 sm:py-24 lg:px-16"
  >
    <SectionHeading
      eyebrow="Get in touch"
      title="Let's build your next interface"
    />
    <Reveal delay={100}>
      <div className="relative overflow-hidden rounded-2xl border border-black/[0.06] bg-gradient-to-br from-violet-50 via-white to-rose-50 p-8 dark:border-white/10 dark:from-violet-500/10 dark:via-transparent dark:to-rose-500/5 sm:p-12">
        <div className="grid gap-6 sm:grid-cols-2">
          <a
            href="mailto:rajaninasrin16@gmail.com"
            className="flex items-center gap-4 rounded-xl border border-black/[0.06] bg-white p-4 transition-colors hover:border-violet-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-violet-400/40"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-600 dark:bg-violet-400/15 dark:text-violet-300">
              <Mail size={18} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400 dark:text-white/40">
                Email
              </p>
              <p className="text-sm font-semibold text-slate-800 dark:text-white">
                rajaninasrin16@gmail.com
              </p>
            </div>
          </a>

          <a
            href="tel:8240661819"
            className="flex items-center gap-4 rounded-xl border border-black/[0.06] bg-white p-4 transition-colors hover:border-violet-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-violet-400/40"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-600 dark:bg-violet-400/15 dark:text-violet-300">
              <Phone size={18} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400 dark:text-white/40">
                Phone
              </p>
              <p className="text-sm font-semibold text-slate-800 dark:text-white">
                +91 8240661819
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/rajani-nasrin-b53258208/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-xl border border-black/[0.06] bg-white p-4 transition-colors hover:border-violet-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-violet-400/40"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-600 dark:bg-violet-400/15 dark:text-violet-300">
              <Linkedin size={18} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400 dark:text-white/40">
                LinkedIn
              </p>
              <p className="text-sm font-semibold text-slate-800 dark:text-white">
                Rajani Nasrin
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-xl border border-black/[0.06] bg-white p-4 dark:border-white/10 dark:bg-white/5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-600 dark:bg-violet-400/15 dark:text-violet-300">
              <MapPin size={18} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400 dark:text-white/40">
                Location
              </p>
              <p className="text-sm font-semibold text-slate-800 dark:text-white">
                Kolkata, West Bengal
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-black/[0.06] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03] sm:p-8">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-violet-500">
            Contact Form
          </p>

          <h3 className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">
            Send a Message
          </h3>

          <p className="mt-3 text-slate-500 dark:text-white/55">
            Have a project in mind? Let's discuss your ideas.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-white/70">
              Full Name <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              
              className="w-full rounded-2xl border border-black/[0.08] bg-white px-4 py-3 text-slate-800 outline-none transition-all duration-300 focus:border-violet-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-white/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-white/70">
              Email Address<span className="text-red-500">*</span>
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              
              placeholder="john@example.com"
              className="w-full rounded-2xl border border-black/[0.08] bg-white px-4 py-3 text-slate-800 outline-none transition-all duration-300 focus:border-violet-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-white/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-white/70">
              Contact Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="9876543210"
        
              className="w-full rounded-2xl border border-black/[0.08] bg-white px-4 py-3 text-slate-800 outline-none transition-all duration-300 focus:border-violet-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-white/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-white/70">
              Subject<span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Inquiry"
            
              className="w-full rounded-2xl border border-black/[0.08] bg-white px-4 py-3 text-slate-800 outline-none transition-all duration-300 focus:border-violet-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-white/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-white/70">
              Message<span className="text-red-500">*</span>
            </label>

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-2xl border border-black/[0.08] bg-white px-4 py-3 text-slate-800 outline-none transition-all duration-300 focus:border-violet-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-white/30"
            />
          </div>
          <button
            type="submit"
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-rose-400 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:scale-105"
          >
            Send Message
            <span className=" text-white transition-transform duration-300 group-hover:translate-x-1">
              <Send size={18} />
            </span>
          </button>
        </form>
      </div>
    </Reveal>
  </section>
);

/* ---------------------------------------------------------------- */
/* Sidebar                                                           */
/* ---------------------------------------------------------------- */

const Sidebar = ({
  active,
  scrollTo,
  dark,
  setDark,
  mobileOpen,
  setMobileOpen,
}) => (
  <>
    <aside
      className={`sidebar-scroll fixed overflow-y-auto inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-black/[0.06] bg-white px-8 py-10 transition-transform duration-300 dark:border-white/10 dark:bg-[#0F0B1E] lg:translate-x-0 ${
        mobileOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        className="absolute right-5 top-5 text-slate-400 lg:hidden dark:text-white/40"
        onClick={() => setMobileOpen(false)}
        aria-label="Close menu"
      >
        <X size={20} />
      </button>

      <div className="flex flex-col items-center text-center">
        {/* <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-rose-400 text-3xl font-extrabold text-white shadow-lg shadow-violet-500/20">
          RN
        </div> */}
        <div className="flex h-[140px] w-[140px] items-center justify-center rounded-full shadow-lg shadow-violet-500/20">
          <img
            src={rajani}
            alt=""
            className=" h-[140px] w-[140px] rounded-full   object-cover object-top"
          />
        </div>
        <h1 className="mt-5 text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Rajani Nasrin
        </h1>
        <p className="mt-1 text-sm font-medium text-violet-500 dark:text-violet-300">
          UI &amp; UX Developer
        </p>
        <p className="mt-3 flex items-center gap-1.5 text-xs text-slate-400 dark:text-white/40">
          <MapPin size={12} /> Kolkata, West Bengal
        </p>
      </div>

      <nav className="mt-12 flex flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                isActive
                  ? "bg-violet-50 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-800 dark:text-white/50 dark:hover:bg-white/5 dark:hover:text-white"
              }`}
            >
              <Icon size={16} />
              {item.label}
              {isActive && (
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-violet-500 dark:bg-violet-300" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-4 pt-10">
        <button
          onClick={() => setDark((d) => !d)}
          className="flex items-center justify-center gap-2 rounded-xl border border-black/[0.06] py-2.5 text-sm font-medium text-slate-600 transition-colors hover:border-violet-300 dark:border-white/10 dark:text-white/70 dark:hover:border-violet-400/40"
        >
          {dark ? <Sun size={15} /> : <Moon size={15} />}
          {dark ? "Light mode" : "Dark mode"}
        </button>

        <a
          href="mailto:rajaninasrin16@gmail.com"
          className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-rose-400 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-500/20 transition-transform hover:scale-[1.02]"
        >
          Say hello
        </a>

        <div className="flex items-center justify-center gap-4 text-slate-400 dark:text-white/40">
          <a
            href="https://www.linkedin.com/in/rajani-nasrin"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-violet-500 dark:hover:text-violet-300"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:rajaninasrin16@gmail.com"
            className="transition-colors hover:text-violet-500 dark:hover:text-violet-300"
          >
            <Mail size={16} />
          </a>
          <a
            href="tel:8240661819"
            className="transition-colors hover:text-violet-500 dark:hover:text-violet-300"
          >
            <Phone size={16} />
          </a>
        </div>
      </div>
    </aside>

    {mobileOpen && (
      <div
        className="fixed inset-0 z-30 bg-black/40 lg:hidden"
        onClick={() => setMobileOpen(false)}
      />
    )}
  </>
);

/* ---------------------------------------------------------------- */
/* Main                                                              */
/* ---------------------------------------------------------------- */

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("about");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
if (
  !formData.name ||
  !formData.email ||
  !formData.subject ||
  !formData.message
) {
  toast.error("Please fill all required fields", {
    position: "top-right",
  });
  return;
}
    try {
      await emailjs.send(
        "service_fpo259w",
        "template_vrr2742",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "W2WaBKe52T_CwXW6S",
      );

     toast.success("Message sent successfully 🚀", {
       position: "top-right",
     });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message ❌", {
        position: "top-right",
      });
    }
  };

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // track active section on scroll
  useEffect(() => {
    const sections = navItems.map((n) => document.getElementById(n.id));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => s && obs.observe(s));
    return () => obs.disconnect();
  }, []);
  

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen w-full bg-slate-50 font-sans text-slate-700 transition-colors duration-300 dark:bg-[#0B0716] dark:text-white/80">
        <style>{`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(16px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .hero-anim > * {
            animation: fade-in-up 0.7s ease-out both;
          }
          .hero-anim > *:nth-child(1) { animation-delay: 0ms; }
          .hero-anim > *:nth-child(2) { animation-delay: 120ms; }
          .hero-anim > *:nth-child(3) { animation-delay: 240ms; }
          .hero-anim > *:nth-child(4) { animation-delay: 360ms; }
          @media (prefers-reduced-motion: reduce) {
            .hero-anim > * { animation: none !important; }
          }
        `}</style>

        {/* mobile top bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-black/[0.06] bg-white/80 px-5 py-4 backdrop-blur-md dark:border-white/10 dark:bg-[#0B0716]/80 lg:hidden">
          <span className="flex items-center  text-base font-extrabold tracking-tight text-slate-900 dark:text-white">
            <img
              src={rajani}
              alt=""
              className="h-14 w-14 rounded-full object-cover object-top mr-2"
            />
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-xl font-black text-transparent">
              Rajani<span className="text-white">.</span>Nasrin
            </span>
          </span>
          <button onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu size={22} className="text-slate-700 dark:text-white" />
          </button>
        </div>

        <Sidebar
          active={active}
          scrollTo={scrollTo}
          dark={dark}
          setDark={setDark}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        {/* main content */}
        <main className="lg:pl-72">
          {/* hero */}
          <section className="flex min-h-[70vh] flex-col justify-center px-6 py-10 md:py-16 sm:px-10 sm:py-24 lg:px-16">
            <div className="hero-anim max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-xs font-semibold text-violet-600 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-300">
                Available for freelance &amp; full-time roles
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                Crafting interfaces
                <br />
                with{" "}
                <span className="bg-gradient-to-r from-violet-500 to-rose-400 bg-clip-text text-transparent">
                  precision
                </span>{" "}
                &amp; care.
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-500 dark:text-white/60 sm:text-lg">
                I turn Figma designs into responsive, accessible,
                production-ready React interfaces — focused on clean components,
                performance, and the small details that make a layout feel right
                on any screen.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo("work")}
                  className="rounded-full bg-gradient-to-r from-violet-500 to-rose-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform hover:scale-105"
                >
                  View projects
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="rounded-full border border-black/[0.08] px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-violet-300 hover:text-violet-600 dark:border-white/15 dark:text-white dark:hover:border-violet-400/40 dark:hover:text-violet-300"
                >
                  Contact me
                </button>
              </div>
            </div>
          </section>

          <div className="border-t border-black/[0.06] dark:border-white/10" />
          <AboutSection />
          <div className="border-t border-black/[0.06] dark:border-white/10" />
          <WorkSection />
          <div className="border-t border-black/[0.06] dark:border-white/10" />
          <ExperienceSection />
          <div className="border-t border-black/[0.06] dark:border-white/10" />
          <EducationSection />
          <div className="border-t border-black/[0.06] dark:border-white/10" />
          {/* <ContactSection  /> */}
          <ContactSection
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />

          <footer className="px-6 py-8 sm:px-10 lg:px-16">
            <div className="flex flex-col items-center justify-between gap-3 border-t border-black/[0.06] py-6 text-center text-xs font-medium uppercase tracking-widest text-slate-400 dark:border-white/10 dark:text-white/30 sm:flex-row sm:text-left">
              <span>© {new Date().getFullYear()} Rajani Nasrin</span>
              <span className="flex items-center gap-2">
                Built with React &amp; Tailwind CSS
                <Github size={14} />
              </span>
            </div>
          </footer>
        </main>
      </div>
    
    
    <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  pauseOnHover
  draggable
  theme={dark ? "dark" : "light"}
/>
    
    
    </div>
    
    
  );
}
