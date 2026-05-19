import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PlusIcon,
  Menu,
  Phone,
  X,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
} from 'lucide-react'
import { Button } from './ui/button'
import { PageContainer } from './common/page-container'
import { Typography } from './ui/typography'
import React, { useState } from 'react'
import { cn } from 'src/lib/utils'
import { Stack } from './common/page'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Textarea } from './ui/textarea'
import { landingPageContent } from 'src/lib/data'
import { Helmet } from 'react-helmet'

export default function V3Page() {
  return (
    <>
      <Helmet>
        <title>نموذج 1</title>
      </Helmet>

      <div>
        <Header header={landingPageContent.header} />
        <V3 />
      </div>
    </>
  )
}

type HeaderProps = {
  header: {
    announcementBar?: {
      enabled?: boolean
      text?: string
      phone?: string
      email?: string
    }

    logo: {
      alt: string
      image: string
    }

    navigation: {
      label: string
      href: string
    }[]

    cta: {
      text: string
      href: string
    }

    secondaryCTA?: {
      text: string
      href: string
    }
  }
}

export function Header({ header }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Announcement Bar */}
      {/* {header.announcementBar?.enabled && (
        <div className="border-b border-border/60 bg-[#1b2553] text-white">
          <PageContainer>
            <div className="flex h-10 items-center justify-between text-xs sm:text-sm">
              <div className="hidden text-white/70 lg:block">{header.announcementBar.text}</div>

              <div className="flex items-center gap-6">
                <a href={`tel:${header.announcementBar.phone}`} className="transition-colors hover:text-[#c58d00]">
                  {header.announcementBar.phone}
                </a>

                <a
                  href={`mailto:${header.announcementBar.email}`}
                  className="hidden transition-colors hover:text-[#c58d00] sm:block"
                >
                  {header.announcementBar.email}
                </a>
              </div>
            </div>
          </PageContainer>
        </div>
      )} */}

      {/* Main Header */}
      <header className="sticky top-0 z-30 bg-background/90 backdrop-blur-xl">
        <PageContainer>
          <div className="grid h-20 grid-cols-2 items-center justify-between lg:h-24 lg:grid-cols-3">
            {/* Desktop Navigation */}
            <nav className="hidden w-full items-center gap-8 lg:flex">
              {header.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'group relative whitespace-nowrap text-sm font-medium tracking-wide text-foreground/75 transition-colors duration-300 hover:text-foreground sm:text-base',
                  )}
                >
                  {item.label}

                  {/* Luxury underline */}
                  <span
                    className="
                      absolute
                      -bottom-2
                      right-0
                      h-px
                      w-0
                      bg-[#c58d00]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </a>
              ))}
            </nav>

            {/* Center Logo */}
            <div className="flex lg:items-center lg:justify-center">
              <a href="/" className="shrink-0">
                <img
                  src={header.logo.image}
                  alt={header.logo.alt}
                  className="
                    h-14
                    w-auto
                    object-contain
                    transition-opacity
                    duration-300
                    hover:opacity-90
                    sm:h-16
                    lg:h-20
                  "
                />
              </a>
            </div>

            {/* Right Actions */}
            <div className="flex items-center justify-end gap-3">
              {/* WhatsApp / Secondary CTA */}
              {/* {header.secondaryCTA && (
                <a
                  href={header.secondaryCTA.href}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    hidden
                    border
                    border-[#c58d00]/30
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-[#1b2553]
                    transition-all
                    duration-300
                    hover:border-[#c58d00]
                    hover:bg-[#c58d00]/5
                    lg:inline-flex
                  "
                >
                  {header.secondaryCTA.text}
                </a>
              )} */}

              {/* Main CTA */}
              <Button
                variant="secondary"
                className="
                  hidden
                  h-12
                  rounded-full
                  px-7
                  text-sm
                  lg:inline-flex
                "
              >
                {header.cta.text}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                type="button"
                variant="secondary"
                onClick={() => setIsOpen(!isOpen)}
                className="
                  inline-flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  transition-colors
                  lg:hidden
                "
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </PageContainer>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'sticky overflow-hidden bg-background transition-all duration-500 ease-linear lg:hidden',
            isOpen
              ? 'h-screen max-h-screen translate-y-0 scale-100 opacity-100'
              : 'max-h-0 translate-y-2 scale-95 opacity-0',
          )}
        >
          <PageContainer>
            <div className="flex flex-col py-6">
              {/* Navigation */}
              <nav className="flex flex-col">
                {header.navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="
                      border-b
                      border-border/50
                      py-4
                      text-base
                      font-medium
                      text-foreground/80
                      transition-colors
                      hover:text-[#1b2553]
                    "
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Mobile CTA Area */}
              <div className="mt-6 flex flex-col gap-3">
                {/* {header.secondaryCTA && (
                  <a
                    href={header.secondaryCTA.href}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      h-12
                      items-center
                      justify-center
                      border
                      border-[#c58d00]/30
                      text-sm
                      font-medium
                      text-[#1b2553]
                    "
                  >
                    {header.secondaryCTA.text}
                  </a>
                )} */}

                <Button
                  className="
                    h-12
                    rounded-full
                    text-sm
                    font-medium
                  "
                >
                  {header.cta.text}
                </Button>

                {/* Contact */}
                <a
                  href={`tel:${header.announcementBar?.phone}`}
                  className="
                    mt-2
                    flex
                    items-center
                    justify-center
                    gap-2
                    text-foreground
                  "
                >
                  <Phone className="h-5 w-5" />
                  {header.announcementBar?.phone}
                </a>
                <a
                  href={`tel:${header.announcementBar?.phone}`}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    text-foreground
                  "
                >
                  <MailIcon className="h-5 w-5" />
                  info@marilynclinics.com
                </a>
                <div className="mt-2 flex flex-wrap items-center justify-center gap-4 pb-10">
                  {/* <span className="inline-flex items-center gap-2 rounded-md bg-primary/10 p-2">
                    <MailIcon className="h-6 w-6" />
                    <span>info@marilynclinics.com</span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-md bg-primary/10 p-2">
                    <PhoneIcon className="h-6 w-6" />
                    <span>{header.announcementBar?.phone}</span>
                  </span> */}
                  <span className="rounded-md bg-primary/10 p-2">
                    <Instagram className="h-6 w-6" />
                  </span>
                  <span className="rounded-md bg-primary/10 p-2">
                    <Linkedin className="h-6 w-6" />
                  </span>
                  <span className="rounded-md bg-primary/10 p-2">
                    <Facebook className="h-6 w-6" />
                  </span>
                  <span className="rounded-md bg-primary/10 p-2">
                    <Twitter className="h-6 w-6" />
                  </span>
                </div>
              </div>
            </div>
          </PageContainer>
        </div>
      </header>
    </>
  )
}

// const landingPageContent = {
//   heroContent: {
//     title: 'Advanced Dermatology & Aesthetic Care',
//     subtitle: 'Personalized treatments for skin, hair, and beauty — delivered with medical excellence.',
//     ctaText: 'Book Consultation',
//     ctaLink: '/book-appointment',
//     secondaryCtaText: 'Explore Services',
//     secondaryCtaLink: '/services',
//     backgroundImage:
//       'https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1ec4ab-0f58-be08-63d0-4a2b6a303f6905edd1b4-cb4e-484a-b855-feb1a84c9953-src_ar..jpg',
//     valueProposition: 'Trusted by thousands of patients for safe, effective, and luxurious aesthetic care.',

//     insights: [
//       {
//         value: '25+',
//         title: 'Years of experience',
//       },
//       {
//         value: '20K+',
//         title: 'Patients treated',
//       },
//       {
//         value: '98%',
//         title: 'Satisfaction rate',
//       },
//     ],
//   },

//   trustStrip: [
//     {
//       title: 'Certified Specialists',
//       icon: '/icons/doctor.svg',
//     },
//     {
//       title: '15+ Years Experience',
//       icon: '/icons/experience.svg',
//     },
//     {
//       title: 'Advanced Medical Technology',
//       icon: '/icons/technology.svg',
//     },
//     {
//       title: 'Thousands of Successful Treatments',
//       icon: '/icons/success.svg',
//     },
//   ],

//   services: [
//     {
//       title: 'Dermatology',
//       description:
//         'Comprehensive skin care solutions, from medical treatments to preventive care, personalized for each patient.',
//       icon: '/icons/dermatology.svg',
//       image: 'https://images.pexels.com/photos/36930338/pexels-photo-36930338.jpeg',
//       link: '/services/dermatology',
//     },
//     {
//       title: 'Aesthetic Treatments',
//       description:
//         'Luxury aesthetic services including Botox, fillers, and skin rejuvenation for natural and radiant results.',
//       icon: '/icons/aesthetic.svg',
//       image: 'https://images.pexels.com/photos/14187891/pexels-photo-14187891.jpeg',
//       link: '/services/aesthetic-treatments',
//     },
//     {
//       title: 'Hair Restoration',
//       description:
//         'Advanced hair transplant and restoration solutions tailored to restore confidence and natural appearance.',
//       icon: '/icons/hair.svg',
//       image: 'https://images.pexels.com/photos/23532307/pexels-photo-23532307.jpeg',
//       link: '/services/hair-restoration',
//     },
//     {
//       title: 'Laser & Skin Rejuvenation',
//       description:
//         'State-of-the-art laser treatments for hair removal, pigmentation, acne scars, and overall skin rejuvenation.',
//       icon: '/icons/laser.svg',
//       image: 'https://images.pexels.com/photos/5069609/pexels-photo-5069609.jpeg',
//       link: '/services/laser-skin-rejuvenation',
//     },
//   ],

//   beforeAfter: [
//     {
//       patient: 'Patient A',
//       treatment: 'Hair Restoration',
//       beforeImage: '/images/before-hair1.jpg',
//       afterImage: '/images/after-hair1.jpg',
//     },
//     {
//       patient: 'Patient B',
//       treatment: 'Skin Rejuvenation',
//       beforeImage: '/images/before-skin1.jpg',
//       afterImage: '/images/after-skin1.jpg',
//     },
//     {
//       patient: 'Patient C',
//       treatment: 'Aesthetic Treatments',
//       beforeImage: '/images/before-aesthetic1.jpg',
//       afterImage: '/images/after-aesthetic1.jpg',
//     },
//   ],

//   doctors: [
//     {
//       name: 'Dr. Sara Al-Harbi',
//       specialty: 'Dermatologist & Aesthetic Specialist',
//       photo: '/images/dr-sara.jpg',
//       credentials: 'Board-Certified, 12 Years Experience',
//     },
//     {
//       name: 'Dr. Khalid Al-Faraj',
//       specialty: 'Hair Restoration Expert',
//       photo: '/images/dr-khalid.jpg',
//       credentials: '10+ Years in Hair Transplant & Restoration',
//     },
//     {
//       name: 'Dr. Laila Al-Mutairi',
//       specialty: 'Laser & Skin Treatments',
//       photo: '/images/dr-laila.jpg',
//       credentials: 'Certified Laser Specialist',
//     },
//   ],

//   clinicExperience: [
//     {
//       title: 'Luxury Clinic Environment',
//       description:
//         'Our clinic combines modern design, comfort, and privacy to provide a serene experience for all patients.',
//       image: '/images/clinic1.jpg',
//     },
//     {
//       title: 'State-of-the-Art Technology',
//       description: 'We use the latest devices and technologies to ensure safe, effective, and advanced treatments.',
//       image: '/images/clinic2.jpg',
//     },
//     {
//       title: 'Private & Comfortable Consultations',
//       description: 'Personalized care in a discreet and relaxing environment is at the heart of our clinic experience.',
//       image: '/images/clinic3.jpg',
//     },
//   ],

//   testimonials: [
//     {
//       patientName: 'Ahmed Al-Otaibi',
//       treatment: 'Hair Restoration',
//       quote:
//         'Thanks to the clinic, my hair restoration results exceeded my expectations. Professional and luxurious experience!',
//       photo:
//         'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       stars: 5,
//     },
//     {
//       patientName: 'Fatima Al-Khaldi',
//       treatment: 'Skin Rejuvenation',
//       quote: 'The aesthetic treatments were subtle, natural, and highly effective. I feel confident and cared for!',
//       photo:
//         'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       stars: 3,
//     },
//     {
//       patientName: 'Mona Al-Saud',
//       treatment: 'Aesthetic Fillers',
//       quote: 'The team’s expertise and the clinic’s environment made the whole experience feel premium and safe.',
//       photo:
//         'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       stars: 5,
//     },
//   ],

//   ctaSection: {
//     title: 'Begin Your Personalized Consultation Today',
//     ctaText: 'Book Appointment',
//     ctaLink: '/book-appointment',
//     backgroundImage: '/images/cta-background.jpg',
//   },

//   footer: {
//     logo: '/images/footer-logo.png',
//     email: 'info@marilynclinics.com',
//     phone: '0115444888',
//     address: '13214 King Abdullah Road, Al-Qadisiyah, Riyadh, Saudi Arabia',
//     navLinks: [
//       { name: 'Home', link: '/' },
//       { name: 'Services', link: '/services' },
//       { name: 'Doctors', link: '/doctors' },
//       { name: 'Results', link: '/before-after' },
//       { name: 'About', link: '/about' },
//       { name: 'Contact', link: '/contact' },
//     ],
//     socialLinks: [
//       { name: 'Instagram', link: 'https://instagram.com/marilynclinics' },
//       { name: 'Twitter', link: 'https://twitter.com/marilynclinics' },
//       { name: 'Facebook', link: 'https://facebook.com/marilynclinics' },
//     ],
//     copyright: '© 2026 Marilyn Clinics. All rights reserved.',
//   },
// }

const faqs = [
  {
    question: 'How can I book an appointment at the clinic?',
    answer:
      'You can easily book an appointment through the “Book Appointment” button on the website or by contacting our reception team directly. We will help you choose the most suitable time and service for your needs.',
  },
  {
    question: 'Do I need a consultation before starting treatment?',
    answer:
      'Yes. All treatments begin with a medical consultation with one of our specialists to evaluate your condition and recommend the most suitable and safe treatment plan.',
  },
  {
    question: 'What services does the clinic offer?',
    answer:
      'We provide a full range of dermatology and aesthetic services, including skin treatments, laser hair removal, injectables such as Botox and fillers, hair loss treatments, and hair restoration procedures.',
  },
  {
    question: 'Are the treatment results immediate?',
    answer:
      'It depends on the procedure. Some treatments like Botox and fillers show immediate results, while skin and hair treatments may require multiple sessions for optimal results.',
  },
  {
    question: 'Are the treatments safe?',
    answer:
      'Yes. All procedures are performed by qualified medical professionals using internationally approved devices and technologies to ensure the highest standards of safety and quality.',
  },
]

function SectionTitle({ title }: { title: string }) {
  return (
    <Typography variant="5xl/normal" className="mb-8 mt-4 font-serif lg:leading-[1.2]">
      {title}
    </Typography>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-28">
      <PageContainer>
        <div className="grid gap-10 sm:grid-cols-2">
          {/* Header */}
          <div>
            <SectionTag id="faq">{landingPageContent.faq.label}</SectionTag>

            <SectionTitle title={landingPageContent.faq.title} />
          </div>

          {/* FAQ Items */}
          <div className="grid gap-6">
            {landingPageContent.faq.items.map((faq, index) => (
              <div
                key={index}
                className={cn('rounded-2xl bg-card px-4 py-4', {
                  'bg-muted': openIndex === index,
                })}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="
              flex
              w-full
              items-start
              justify-between
              gap-10
              text-left
            "
                >
                  {/* Question */}
                  <h3
                    className="
              font-serif
              text-xl
              leading-relaxed
              text-foreground
            "
                  >
                    {faq.question}
                  </h3>

                  {/* Icon */}
                  <div
                    className={cn(
                      `
                mt-1
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                transition-transform
                duration-500
                `,
                      openIndex === index && '-rotate-45 bg-card',
                    )}
                  >
                    <PlusIcon className="h-5 w-5" />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={cn(
                    `
              grid
              transition-all
              duration-500
              ease-out
              `,
                    openIndex === index ? 'grid-rows-[1fr] pt-2 opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p
                      className="
                max-w-3xl
                text-base
                font-medium
                leading-relaxed
                text-muted-foreground
              "
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  )
}

const testimonials = [
  {
    name: 'أحمد الرشيد',
    university: 'جامعة هارفارد',
    role: 'الدفعة 2025',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/saudi-male-student-portrait-0Cz8e0cpMF4ia2Tm1E2VlsQN7RURXH.jpg',
    quote: 'حولت مسار غير تطبيقي بالكامل. كانت الإرشادات المخصصة استثنائية.',
    stars: 5,
  },
  {
    name: 'محمد الدوسري',
    university: 'جامعة ستانفورد',
    role: 'منحة كاملة',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/saudi-student-portrait-yksGEqPHfe4HGdYrcNGKvRTthDWwFc.jpg',
    quote: 'دعم المنح الدراسية وحده يستحق الاستثمار. احترافي وموجه للنتائج.',
    stars: 5,
  },
]

export function LogoText({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('font-sans text-xl font-semibold tracking-tighter', className)} {...props}>
      MSC
    </p>
  )
}

export function SectionTag({ id, className, ...props }: SectionProps) {
  return (
    <div className="flex w-fit items-center gap-2 rounded-full bg-accent/30 px-3.5 py-0.5">
      <div className="h-2 w-2 rounded-xl bg-primary"></div>
      <Typography variant="lg/normal" className={cn('uppercase', className)} id={id} {...props} />
    </div>
  )
}

type SectionProps = {
  id?: string
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

export function Section({ id, className, ...props }: SectionProps) {
  return <section id={id || ''} className={cn('bg-background py-20 sm:py-28 lg:py-36', className)} {...props} />
}

export function JoinSection() {
  return (
    <Section className="relative overflow-hidden bg-black py-40 sm:py-48">
      {/* Background image */}
      <img
        src="https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1ec4ab-0f58-be08-63d0-4a2b6a303f6905edd1b4-cb4e-484a-b855-feb1a84c9953-src_ar..jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />

      {/* Soft overlay (no grid) */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10">
        <PageContainer className="text-center">
          {/* Tag */}
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">
            Dermatology • Aesthetics • Hair Restoration
          </p>

          {/* Headline */}
          <h1 className="mt-6 text-5xl font-medium leading-tight text-white sm:text-6xl">
            Where medical expertise meets
            <span className="text-primary"> refined beauty care</span>
          </h1>

          {/* Subtext */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80">
            A premium clinic in Riyadh specializing in advanced dermatology, aesthetic treatments, and hair restoration
            with a focus on natural, lasting results.
          </p>

          {/* Key values (refined, not “chips”) */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {[
              'Board-certified specialists',
              'Advanced medical technology',
              'Personalized treatment plans',
              'Natural aesthetic results',
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md"
              >
                {item}
              </span>
            ))}
          </div>
        </PageContainer>
      </div>
    </Section>
  )
}

/* CSV */
// #e4ff5f,#141312,#f7f1eb,#a16241,#60574c,#ca9a78,#998878,#d2c5ba,#523625,#faf5ef

/* Array */
// ["#e4ff5f","#141312","#f7f1eb","#a16241","#60574c","#ca9a78","#998878","#d2c5ba","#523625","#faf5ef"]

// oklch(0.9512 0.1833 118.2) oklch(0.1875 0.0026 67.67) oklch(0.9611 0.0103 67.7) oklch(0.5589 0.0945 47.75) oklch(0.4621 0.0209 72.81) oklch(0.7231 0.0742 56.55) oklch(0.6375 0.0311 65.5) oklch(0.831 0.0211 62.81) oklch(0.3613 0.0488 51.88) oklch(0.9724 0.0096 72.66)

/* CSV */
// #be8923,#283767,#77809f,#3b4976

/* Array */
// ["#be8923","#283767","#77809f","#3b4976"]

// oklch(0.6658 0.1276 78.48) oklch(0.3502 0.0858 268.64) oklch(0.6038 0.0484 272.23) oklch(0.415 0.0776 269.7)

export function V3() {
  return (
    <div className="bg-background">
      <div>
        <div className="relative w-full">
          {/* <section
            className="relative flex h-[80vh] items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${landingPageContent.heroContent.backgroundImage})` }}
          >
            <PageContainer className="z-10 text-center text-white md:text-left">
              <h1 className="max-w-3xl text-4xl font-bold md:text-6xl">{landingPageContent.heroContent.title}</h1>
              <p className="mt-4 text-lg md:text-xl">{landingPageContent.heroContent.subtitle}</p>
              <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                <a
                  href={landingPageContent.heroContent.ctaLink}
                  className="bg-gold text-navy rounded-lg px-6 py-3 font-semibold transition hover:bg-opacity-90"
                >
                  {landingPageContent.heroContent.ctaText}
                </a>
                {landingPageContent.heroContent.secondaryCtaText && (
                  <a
                    href={landingPageContent.heroContent.secondaryCtaLink}
                    className="hover:text-navy rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-background"
                  >
                    {landingPageContent.heroContent.secondaryCtaText}
                  </a>
                )}
              </div>
            </PageContainer>
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </section> */}

          {/* <div className="relative h-[80vh] w-full overflow-hidden">
            <img
              src={landingPageContent.heroContent.backgroundImage}
              alt=""
              className="size-full absolute inset-0 object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="bg-linear-to-l from-v2-darkgray/80 absolute inset-0 to-transparent"></div>
            <div className="size-full absolute flex h-full w-full flex-col items-end justify-end py-32">
              <PageContainer className="flex items-end">
                <div className="flex max-w-2xl flex-col gap-6 text-white">
                  <Typography variant="6xl/medium" className=" leading-tight text-white">
                    {landingPageContent.heroContent.title}
                    <br />
                  </Typography>
                  <Typography variant="lg/normal" className="text-white">
                    {landingPageContent.heroContent.valueProposition}
                  </Typography>

                  <div className="flex flex-col gap-4 pt-6 sm:flex-row">
                    <Button className="h-13 rounded-full bg-primary px-7 py-4 font-medium text-background transition hover:opacity-90">
                      {landingPageContent.heroContent.ctaText}
                    </Button>
                    <Button
                      variant="outline"
                      className="h-13 rounded-full px-7 py-4 font-medium transition hover:opacity-90"
                    >
                      {landingPageContent.heroContent.secondaryCtaText}
                    </Button>
                  </div>
                </div>
              </PageContainer>
            </div>
          </div> */}

          {/* <div className="relative flex w-full flex-col gap-10 overflow-hidden bg-background py-8">
            <PageContainer className="h-full">
              <div className="grid h-full w-full grid-cols-1 gap-20">
                <div className="flex h-full w-full flex-col justify-between rounded-2xl pt-20">
                  <div className="flex flex-col gap-6">
                    <Typography variant="6xl/normal" className="">
                      {landingPageContent.heroContent.title}
                    </Typography>
                    <Typography variant="lg/normal" className="text-foreground/70">
                      {landingPageContent.heroContent.valueProposition}
                    </Typography>

                    <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                      <Button className="h-13 group rounded-full bg-primary px-7 py-4 font-medium text-background transition hover:opacity-90">
                        {landingPageContent.heroContent.ctaText}
                      </Button>
                      <Button variant="secondary" className="h-13 rounded-full border px-7">
                        {landingPageContent.heroContent.secondaryCtaText}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </PageContainer>
            <PageContainer size="lg">
              <div className="flex h-full w-full justify-center rounded-2xl bg-accent p-2 sm:p-3">
                <div className="relative flex aspect-[16/9] h-full w-full flex-col items-center justify-center rounded-2xl bg-accent p-4">
                  <img
                    src={landingPageContent.heroContent.backgroundImage}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-lg object-cover"
                  />
                </div>
              </div>
            </PageContainer>
          </div> */}

          <section className="relative">
            {/* Background Image */}

            {/* Content */}
            <PageContainer size="full" className="relative flex h-[100vh] items-center">
              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem]">
                <div className="absolute inset-0 h-screen w-full">
                  <img
                    src={landingPageContent.heroContent.backgroundImage}
                    alt="Luxury clinic interior"
                    className="h-full w-full object-cover object-top"
                  />

                  {/* Elegant Overlay */}
                  {/* <div className="bg-black/45 absolute inset-0" /> */}
                  {/* #141523 */}
                  {/* Soft Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#231614] via-[#2b1b18]/50 to-transparent" />
                  {/* bg-gradient-to-b
from-[#151C3A]/90
via-[#1D2855]/50
to-transparent */}
                </div>

                <div className="relative z-10 flex">
                  <div className="mx-auto flex max-w-4xl flex-col items-center py-20 text-center">
                    {/* Premium Label */}

                    {/* Main Heading */}
                    <Typography variant="7xl/normal" className="font-serif text-white lg:leading-[1.3]">
                      {landingPageContent.heroContent.title.line1}
                      <br />
                      <span>{landingPageContent.heroContent.title.highlight}</span>
                      <br />
                      {landingPageContent.heroContent.title.line2}
                    </Typography>

                    {/* Description */}
                    <Typography variant="xl/medium" className="mt-8 max-w-xl font-sans leading-relaxed text-white">
                      {/* A modern medical experience designed around comfort, precision, and trust — located in one of
                      Riyadh’s most prestigious destinations. */}
                      {landingPageContent.heroContent.subtitle}
                    </Typography>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                      <button
                        className="
                      rounded-full
                      bg-white
                      px-8
                      py-4
                      text-sm
                      font-medium
                      tracking-wide
                      text-black
                      transition-all
                      duration-300
                      hover:bg-[#e8dfcf]
                    "
                      >
                        {landingPageContent.heroContent.ctaText}
                      </button>

                      <button
                        className="
                      rounded-full
                      border
                      border-white/30
                      bg-white/10
                      px-8
                      py-4
                      text-sm
                      font-medium
                      tracking-wide
                      text-white
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:bg-white/20
                    "
                      >
                        {landingPageContent.heroContent.secondaryCtaText}
                      </button>
                    </div>

                    {/* Luxury Metrics */}
                    {/* <div className="border-white/15 mt-16 grid grid-cols-3 gap-8 border-t pt-8">
                    <div>
                      <h3 className="text-3xl font-light text-white">15+</h3>
                      <p className="mt-2 text-sm text-white/60">Specialist Doctors</p>
                    </div>

                    <div>
                      <h3 className="text-3xl font-light text-white">25k+</h3>
                      <p className="mt-2 text-sm text-white/60">Patients Served</p>
                    </div>

                    <div>
                      <h3 className="text-3xl font-light text-white">5★</h3>
                      <p className="mt-2 text-sm text-white/60">Premium Experience</p>
                    </div>
                  </div> */}
                  </div>
                </div>
              </div>
            </PageContainer>

            {/* Bottom Fade */}
            {/* <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#f8f6f2] to-transparent" /> */}
          </section>

          {/* <PageContainer size="full" className="py-6">
            <section className="relative min-h-screen overflow-hidden rounded-[32px]">
              <div className="absolute inset-0">
                <img
                  src={landingPageContent.heroContent.backgroundImage}
                  alt="Luxury clinic interior"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/10" />
              </div>

              <div className="relative z-10 flex min-h-screen items-center px-8 py-20 lg:px-20">
                <div className="max-w-2xl">
                  <h1
                    className="
            text-5xl
            font-normal
            leading-[1.05]
            text-white
            md:text-6xl
            lg:text-7xl
          "
                    style={{
                      fontFamily: '"Roboto Serif", serif',
                    }}
                  >
                    Exceptional Care
                    <br />
                    Elegant Clinical
                    <br />
                    Environment
                  </h1>

                  <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
                    A modern medical experience designed around comfort, precision, and trust — located in one of
                    Riyadh’s most prestigious destinations.
                  </p>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <button
                      className="
              rounded-full
              bg-white
              px-8
              py-4
              text-sm
              font-medium
              tracking-wide
              text-black
              transition-all
              duration-300
              hover:bg-[#e8dfcf]
            "
                    >
                      Book Appointment
                    </button>

                    <button
                      className="
              rounded-full
              border
              border-white/30
              bg-white/10
              px-8
              py-4
              text-sm
              font-medium
              tracking-wide
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:bg-white/20
            "
                    >
                      Explore Our Clinic
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </PageContainer> */}

          {/* <section className="min-h-screen">
            <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
              <div className="flex items-center justify-end px-8">
                <div className="max-w-xl">

                  <Typography variant="6xl/normal" className="font-serif lg:leading-[1.2]">
                    {landingPageContent.heroContent.title.line1}
                    <br />
                    <span>{landingPageContent.heroContent.title.highlight}</span>
                    <br />
                    {landingPageContent.heroContent.title.line2}
                  </Typography>

                  <p className="mt-8 max-w-lg text-lg leading-relaxed text-[#5f5a54]">
                    {landingPageContent.heroContent.subtitle}
                  </p>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <button
                      className="
                  rounded-full
                  bg-[#1f1f1f]
                  px-8
                  py-4
                  text-sm
                  font-medium
                  tracking-wide
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#2d2d2d]
                "
                    >
                      {landingPageContent.heroContent.ctaText}
                    </button>

                    <button
                      className="
                  rounded-full
                  border
                  border-[#d6cdc0]
                  bg-transparent
                  px-8
                  py-4
                  text-sm
                  font-medium
                  tracking-wide
                  text-[#1f1f1f]
                  transition-all
                  duration-300
                  hover:bg-[#ece5dc]
                "
                    >
                      {landingPageContent.heroContent.secondaryCtaText}
                    </button>
                  </div>

                </div>
              </div>

              <div className="relative h-[50vh] lg:h-screen">
                <img
                  src={landingPageContent.heroContent.backgroundImage}
                  alt="Luxury Clinic Interior"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#f7f3ee]/20" />
              </div>
            </div>
          </section> */}

          {/* <section className="relative min-h-screen overflow-hidden bg-[#f8f6f2]">
            <div className="absolute inset-0">
              <img
                src={landingPageContent.heroContent.backgroundImage}
                alt="Luxury clinic interior"
                className="h-full w-full object-cover"
              />

              <div className="bg-black/45 absolute inset-0" />

              <div className="via-black/35 absolute inset-0 bg-gradient-to-l from-[#231614] to-transparent" />
            </div>

            <PageContainer>
              <div className="relative z-10 flex min-h-screen items-center">
                <div className="max-w-2xl">
                  <Typography
                    variant="7xl/normal"
                    className="font-serif
                    text-white
                    lg:leading-[1.2]"
                  >
                    {landingPageContent.heroContent.title.line1}
                    <br />
                    {landingPageContent.heroContent.title.highlight}
                    <br />
                    {landingPageContent.heroContent.title.line2}
                  </Typography>

                  <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
                    {landingPageContent.heroContent.subtitle}
                  </p>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <button
                      className="
                      rounded-full
                      bg-white
                      px-8
                      py-4
                      text-base
                      font-medium
                      tracking-wide
                      text-black
                      transition-all
                      duration-300
                      hover:bg-[#e8dfcf]
                    "
                    >
                      {landingPageContent.heroContent.ctaText}
                    </button>

                    <button
                      className="
                      rounded-full
                      border
                      border-white/30
                      bg-white/10
                      px-8
                      py-4
                      text-base
                      font-medium
                      tracking-wide
                      text-white
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:bg-white/20
                    "
                    >
                      {landingPageContent.heroContent.secondaryCtaText}
                    </button>
                  </div>
                </div>
              </div>
            </PageContainer>

            <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#f8f6f2] to-transparent" />
          </section> */}

          <Section className="bg-background py-16">
            <Stack spacing="page">
              {/* HEADER */}
              <PageContainer>
                <div className="max-w-2xl">
                  <SectionTag id="services">{landingPageContent.servicesSection.label}</SectionTag>

                  <SectionTitle title={landingPageContent.servicesSection.title} />
                </div>
              </PageContainer>

              {/* GRID */}
              <PageContainer size="xl">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {landingPageContent.servicesSection.items.map((service, idx) => (
                    <div
                      key={idx}
                      className="group relative h-[640px] overflow-hidden rounded-2xl bg-card transition-all duration-500 hover:z-10 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl sm:hover:scale-110"
                    >
                      {/* IMAGE */}
                      <div className="relative h-full overflow-hidden rounded-2xl">
                        <img
                          src={service.image}
                          alt={service.title.line1 + ' ' + service.title.highlight}
                          className="
                  aspect-[3/4] h-full w-full object-cover
                  transition-transform duration-700
                  group-hover:scale-[1.08]
                "
                        />

                        {/* STRONGER READABILITY OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
                      </div>

                      {/* CONTENT */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                        {/* LABEL */}
                        <p className="text-xs tracking-[0.2em] text-white/60">
                          {landingPageContent.servicesSection.label}
                        </p>

                        {/* TITLE */}
                        <h3 className="mt-2 text-lg font-medium leading-snug text-white sm:text-xl">
                          {service.title.line1} <span className="text-white">{service.title.highlight}</span>
                        </h3>

                        {/* DESCRIPTION (clean animation - no max-height hacks) */}
                        <p
                          className="
                  mt-3 translate-y-2 text-sm leading-relaxed
                  text-white/70 opacity-0
                  transition-all duration-500
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
                        >
                          {service.description}
                        </p>

                        {/* GOLD ACCENT LINE */}
                        <div className="mt-4 h-1 w-10 bg-white/30 transition-all duration-500 group-hover:w-16 group-hover:bg-white/80" />
                      </div>
                    </div>
                  ))}
                </div>
              </PageContainer>
            </Stack>
          </Section>

          <Section className="py-24">
            <PageContainer>
              {/* Header */}
              <div className="max-w-2xl">
                <SectionTag id="doctors">{landingPageContent.doctorsSection.label}</SectionTag>

                <SectionTitle
                  title={
                    landingPageContent.doctorsSection.title.line1 +
                    ' ' +
                    landingPageContent.doctorsSection.title.highlight +
                    ' ' +
                    landingPageContent.doctorsSection.title.line2
                  }
                />

                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  {landingPageContent.doctorsSection.description}
                </p>
              </div>

              {/* Doctors Grid */}
              <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {landingPageContent.doctorsSection.doctors.map((doc, idx) => (
                  <div key={idx} className="group">
                    {/* Image */}
                    <div className="overflow-hidden rounded-2xl bg-card">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="
                aspect-square
                w-full
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.03]
              "
                      />
                    </div>

                    {/* Content */}
                    <div className="mt-6 px-1">
                      <div className="flex flex-col justify-between gap-1">
                        <Typography variant="2xl/medium" className="font-serif text-foreground">
                          {doc.name}
                        </Typography>
                        <p className="mt-1 text-foreground">{doc.specialty}</p>

                        <span className="text-sm text-muted-foreground">{doc.qualifications}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </PageContainer>
          </Section>

          <Section className="py-24">
            <PageContainer>
              <div className="mb-12 max-w-2xl">
                <SectionTag id="experience">{landingPageContent.clinicExperience.label}</SectionTag>

                <SectionTitle title={landingPageContent.clinicExperience.title} />

                <p className="mt-4 max-w-xl text-muted-foreground">{landingPageContent.clinicExperience.description}</p>
              </div>

              <div className="grid items-start gap-16 lg:grid-cols-2">
                {/* LEFT IMAGE */}
                <div className="relative">
                  <div className="sticky top-28 overflow-hidden rounded-2xl">
                    <img
                      src="https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1ec4ab-0f58-be08-63d0-4a2b6a303f69732dd47d-e976-4750-9ea2-f00017fef38c-src_ar..jpg"
                      alt=""
                      className="h-[42rem] w-full object-cover"
                    />

                    {/* subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                  </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex h-full  sm:items-center ">
                  <div className="w-full space-y-10">
                    {landingPageContent.clinicExperience.items.map((item, idx) => (
                      <div key={idx} className="w-full border-b border-border/60 pb-10 last:border-none">
                        <div className="flex items-start gap-5">
                          {/* Number */}
                          <div className="text-sm font-medium text-primary/40">0{idx + 1}</div>

                          {/* Content */}
                          <div className="space-y-2">
                            <h3 className="text-xl font-medium">{item.title}</h3>

                            <p className="max-w-lg leading-relaxed text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </PageContainer>
          </Section>

          <Section className="bg-background py-20">
            <Stack spacing="page">
              {/* HEADER */}
              <PageContainer>
                <div className="max-w-2xl">
                  <SectionTag id="testimonials">{landingPageContent.testimonials.label ?? 'آراء المراجعين'}</SectionTag>

                  <SectionTitle title={landingPageContent.testimonials?.title ?? 'تجارب حقيقية من مراجعين العيادة'} />
                </div>
              </PageContainer>

              {/* GRID */}
              <PageContainer size="xl">
                <div className="grid grid-cols-1 gap-6 py-16 md:grid-cols-2 lg:grid-cols-3">
                  {landingPageContent.testimonials.items.map((t, idx) => (
                    <div
                      key={idx}
                      className="
              group rounded-2xl border border-border
              bg-card p-6
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg
            "
                    >
                      {/* TOP USER INFO */}
                      <div className="flex items-center gap-4">
                        {/* avatar */}
                        <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
                          <img src={t.photo} alt={t.patientName} className="h-full w-full object-cover" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-sm font-medium text-foreground">{t.patientName}</p>

                          <p className="text-xs text-muted-foreground">{t.treatment}</p>
                        </div>
                      </div>

                      {/* STARS */}
                      <div className="mt-4 flex gap-1 text-yellow-500">
                        {Array.from({ length: t.stars }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>

                      {/* QUOTE */}
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">“{t.quote}”</p>
                    </div>
                  ))}
                </div>
              </PageContainer>
            </Stack>
          </Section>

          <FAQ />

          {/*
          #c58d00
          #21326a
          #425573
          #22336A

          */}

          <section className="relative py-32">
            <PageContainer size="lg" className="relative overflow-hidden rounded-[2.5rem]">
              <div className="max-w-2xl">
                <SectionTag id="contact">{landingPageContent.contactSection.label}</SectionTag>

                <SectionTitle title={landingPageContent.contactSection.title} />

                <Typography
                  variant="lg/medium"
                  className="
                mt-8 max-w-xl
                leading-relaxed
                text-foreground/60
              "
                >
                  {landingPageContent.contactSection.description}
                </Typography>

                <div className="mt-10">
                  <div className="w-[90%] space-y-6">
                    {landingPageContent.contactSection.items.map((item, index) => (
                      <div key={item.label + index} className="flex items-center gap-2">
                        <p className="sr-only">{item.label}</p>

                        <span className="rounded-md bg-primary/10 p-2 text-primary">
                          {/* <item. className="h-5 w-5 text-primary/80" /> */}
                          {item.icon}
                        </span>

                        <p className="text-lg font-medium text-primary">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                {/* Background Glow */}
                <div
                  className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)]
        "
                />

                <div className="relative mt-10 grid gap-6 overflow-hidden rounded-2xl border bg-card lg:grid-cols-2">
                  {/* LEFT CONTENT */}
                  <div className="relative flex flex-col justify-between bg-foreground">
                    <img
                      src="https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1ec4ab-0f58-be08-63d0-4a2b6a303f69732dd47d-e976-4750-9ea2-f00017fef38c-src_ar..jpg"
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    {/* Contact Details */}
                    {/* <div className="absolute bottom-7 z-10 mx-auto w-full">
                      <div className="w-[90%] space-y-8">
                        <div className="flex items-center gap-2 bg-white text-foreground backdrop-blur">
                          <p className="sr-only">Phone</p>

                          <span className="rounded-md bg-primary/10 p-2">
                            <PhoneIcon className="h-6 w-6 text-primary/80" />
                          </span>

                          <p className="text-xl text-primary">+966 50 123 4567</p>
                        </div>

                        <div className="flex max-w-full items-center gap-2 rounded-lg bg-white p-2">
                          <p className="sr-only">Location</p>

                          <span className="rounded-md bg-primary/10 p-2">
                            <MapPinIcon className="h-6 w-6 text-primary/80" />
                          </span>

                          <p className="text-xl text-primary">Riyadh, Saudi Arabia</p>
                        </div>

                        <div className="flex items-center gap-2">
                          <p className="sr-only">Hours</p>

                          <span className="rounded-md bg-primary/10 p-2">
                            <MapPinIcon className="h-6 w-6 text-primary/80" />
                          </span>

                          <p className="mt-2 text-xl text-white">Saturday — Thursday</p>
                        </div>
                      </div>
                    </div> */}
                  </div>

                  <div className="px-10 py-10">
                    <h3 className="font-serif text-2xl font-medium"></h3>

                    <Typography variant="2xl/medium" className="font-serif">
                      {landingPageContent.contactSection.label}
                    </Typography>

                    <form className="mt-10 space-y-14">
                      <Input
                        type="text"
                        placeholder={landingPageContent.contactSection.form.fullName.placeholder}
                        className="w-full rounded-none border-0 border-b border-black/10 bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 md:text-base"
                      />

                      <Input
                        type="email"
                        placeholder={landingPageContent.contactSection.form.email.placeholder}
                        className="w-full rounded-none border-0 border-b border-black/10 bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 md:text-base"
                      />

                      <Select>
                        <SelectTrigger className="w-full flex-row-reverse rounded-none border-0 border-b border-black/10 bg-transparent text-base placeholder:text-muted-foreground focus:border-primary focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                          <SelectValue placeholder={landingPageContent.contactSection.form.service.placeholder} />
                        </SelectTrigger>
                        <SelectContent className="w-full">
                          {landingPageContent.contactSection.form.service.options.map((item, index) => (
                            <SelectItem
                              key={item.label + index}
                              value={item.value}
                              className="h-12 flex-row-reverse px-4 text-base"
                            >
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      {/* <option>Service of interest</option>
                      <option>Dermatology</option>
                      <option>Aesthetic treatments</option>
                      <option>Hair restoration</option> */}

                      <Textarea
                        rows={4}
                        placeholder={landingPageContent.contactSection.form.message.placeholder}
                        className="w-full resize-none rounded-none border-0 border-b border-black/10 bg-transparent py-3 text-base outline-none ring-0 ring-offset-0 placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 md:text-base"
                      />

                      <Button className="mt-6 h-14 w-full rounded-full bg-primary py-4 font-medium text-background transition hover:bg-black/90">
                        {landingPageContent.contactSection.ctaText}
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </PageContainer>
          </section>

          {/*
          Hero (immersive)

Minimal intro statement

Services (image-led)

Large whitespace

Philosophy split layout

Doctors

Full-width image moment

Testimonials

Contact */}

          <footer className="relative ">
            {/* subtle texture glow */}
            {/* <div className="absolute inset-0 opacity-[0.13]">
              <img src={landingPageContent.heroContent.backgroundImage} alt="" className="h-full w-full object-cover" />
            </div> */}
            {/* #141523 */}
            {/* Soft Gradient */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-[#231614] via-[#2b1b18]/50 to-transparent" /> */}
            <PageContainer size="full" className="pb-8">
              <div className="relative overflow-hidden rounded-3xl sm:border sm:bg-card">
                <div className="pb-44">
                  {/* <h5 className="absolute bottom-64 left-0 w-full bg-red-300 text-2xl font-bold text-foreground opacity-5 sm:text-[31rem]">
                    Marilyn
                  </h5> */}
                  <h5
                    className="
    pointer-events-none
    absolute
    inset-x-0
    bottom-0
    select-none
    overflow-hidden
    whitespace-nowrap
    text-center
    font-serif
    font-bold
    leading-none
    text-foreground/[0.03]
  "
                    style={{
                      fontSize: 'clamp(5rem, 26vw, 28rem)',
                    }}
                  >
                    مارلين
                  </h5>
                  <PageContainer>
                    <div className="relative">
                      {/* <div className="max-w-4xl">
                        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Marilyn Clinics</p>

                        <h2
                          className="
            mt-8
            font-serif
            text-5xl
            leading-[1.05]
            tracking-tight
            lg:text-7xl
            lg:leading-[1.15]
          "
                        >
                          Begin your journey toward refined aesthetic care.
                        </h2>

                        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                          Personalized dermatology and aesthetic treatments designed with expertise, precision, and
                          care.
                        </p>

                        <button
                          className="
            mt-12
            rounded-full
            bg-black
            px-8
            py-4
            text-sm
            font-medium
            text-white
            transition
            hover:opacity-90
          "
                        >
                          Book Consultation
                        </button>
                      </div> */}

                      <div className="grid gap-16 py-20 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:py-56">
                        {/* Brand */}
                        <div className="max-w-md">
                          <img
                            src="https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=324,height=96,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1d84d4-4fb7-72eb-b27f-93edde22cb64.png"
                            alt="Marilyn Clinics"
                            className="h-24 w-auto"
                          />

                          <p className="mt-8 text-base leading-relaxed text-foreground">
                            {landingPageContent.footer.shortDescription}
                          </p>
                        </div>

                        {/* <div>
                          <p className="font-serif text-base font-medium text-foreground sm:text-lg">العيادة</p>

                          <ul className="mt-6 flex flex-col gap-6">
                            {['عن العيادة', 'الأطباء', 'الخدمات', 'التقنيات', 'نتائج الحالات', 'آراء المراجعين'].map(
                              (item) => (
                                <li key={item}>
                                  <a className="text-foreground/70">{item}</a>
                                </li>
                              ),
                            )}
                          </ul>
                        </div> */}

                        <div>
                          <p className="font-serif text-base font-medium text-foreground sm:text-lg">الخدمات</p>

                          <ul className="mt-6 flex flex-col gap-6">
                            {['الجلدية', 'التجميل غير الجراحي', 'الليزر', 'تجديد البشرة', 'علاج الشعر'].map((item) => (
                              <li key={item}>
                                <a className="text-foreground/70">{item}</a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Contact */}
                        <div>
                          <p className="font-serif text-base font-medium text-foreground sm:text-lg">تواصل معنا</p>

                          <div className="mt-6 space-y-5">
                            {landingPageContent.contactSection.items.map((item, index) => (
                              <div key={item.label + index} className="flex items-center gap-2 text-lg">
                                <span className="rounded-md bg-primary/10 p-2">{item.icon}</span>
                                <p className="sr-only">{item.label}</p>
                                <a className="block text-foreground/70 hover:text-foreground">{item.value}</a>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 flex gap-4">
                            <span className="rounded-md bg-primary/10 p-2">
                              <InstagramIcon className="h-5 w-5 text-foreground/80" />
                            </span>
                            <span className="rounded-md bg-primary/10 p-2">
                              <LinkedinIcon className="h-5 w-5 text-foreground/80" />
                            </span>
                            <span className="rounded-md bg-primary/10 p-2">
                              <FacebookIcon className="h-5 w-5 text-foreground/80" />
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* <div
                        className="
          mt-32
          flex
          flex-col
          gap-12
          border-t
          border-black/[0.06]
          pt-10
          lg:flex-row
          lg:items-end
          lg:justify-between
        "
                      >
                        <div className="space-y-4 text-sm">
                          <p className="text-muted-foreground">info@marilynclinics.com</p>

                          <p className="text-muted-foreground">0115444888</p>

                          <p className="text-muted-foreground">Riyadh, Saudi Arabia</p>
                        </div>

                        <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
                          <a className="transition hover:text-foreground">About</a>

                          <a className="transition hover:text-foreground">Services</a>

                          <a className="transition hover:text-foreground">Doctors</a>

                          <a className="transition hover:text-foreground">Contact</a>

                          <a className="transition hover:text-foreground">Instagram</a>
                        </div>
                      </div> */}

                      <div className="mt-10 flex justify-center text-base font-medium text-foreground">
                        {/* <div className="flex gap-2">
                          <span className="rounded-md bg-primary/10 p-2">
                            <InstagramIcon className="h-5 w-5 text-foreground/80" />
                          </span>
                          <span className="rounded-md bg-primary/10 p-2">
                            <LinkedinIcon className="h-5 w-5 text-foreground/80" />
                          </span>
                          <span className="rounded-md bg-primary/10 p-2">
                            <FacebookIcon className="h-5 w-5 text-foreground/80" />
                          </span>
                        </div> */}
                        <div></div>
                        <div>
                          <p className="text-muted-foreground">{landingPageContent.footer.copyright}</p>
                          {/* <p>© 2026 Marilyn Clinics. All rights reserved.</p> */}
                        </div>
                      </div>
                    </div>
                  </PageContainer>
                </div>
              </div>
            </PageContainer>
          </footer>
        </div>
      </div>
    </div>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'الشركة',
      links: ['عنا', 'فريقنا', 'الوظائف', 'الأخبار'],
    },
    {
      title: 'الخدمات',
      links: ['اختيار الجامعة', 'دعم التطبيق', 'تحضير المقابلات', 'مساعدة المنح'],
    },
    {
      title: 'الموارد',
      links: ['المدونة', 'الأدلة', 'تحضير الاختبارات', 'الجدول الزمني'],
    },
    {
      title: 'الدعم',
      links: ['الأسئلة الشائعة', 'اتصل بنا', 'سياسة الخصوصية', 'شروط الخدمة'],
    },
  ]

  return (
    <footer className="bg-v2-darkgray py-16 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Logo Section */}
          <div className="col-span-2 mb-16 ml-12 md:col-span-1 md:mb-0">
            <h2 className=" mb-4 text-2xl font-bold">مسار غير</h2>
            <p className="text-sm leading-relaxed text-primary-foreground/80">
              تمكين الطلاب السعوديين لتحقيق أحلامهم التعليمية الأمريكية.
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="mb-4 text-sm font-semibold">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="hover:text-lightgreen text-sm font-medium text-primary-foreground/70 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-v1-primary-foreground/20 border-t pt-8">
          <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
            <p className="mt-10 text-sm text-primary-foreground/60 md:mt-0">
              © {currentYear} مسار غير. جميع الحقوق محفوظة.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="#"
                className="hover:text-lightgreen text-sm font-medium text-primary-foreground/60 transition-colors"
              >
                سياسة الخصوصية
              </a>
              <a
                href="#"
                className="hover:text-lightgreen text-sm font-medium text-primary-foreground/60 transition-colors"
              >
                شروط الخدمة
              </a>
              <a
                href="#"
                className="hover:text-lightgreen text-sm font-medium text-primary-foreground/60 transition-colors"
              >
                إعدادات ملفات تعريف الارتباط
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
