import { ChevronDown } from 'lucide-react'
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

export default function V2Page() {
  return (
    <>
      <Helmet>
        <title>نموذج 2</title>
      </Helmet>

      <div className="">
        <Header />
        <V2 />
      </div>
    </>
  )
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'الخدمات', href: '#services' },
    { label: 'لماذا مسار غير', href: '#why-us' },
    { label: 'قصص النجاح', href: '#testimonials' },
    { label: 'الأسئلة الشائعة', href: '#faq' },
    { label: 'اتصل بنا', href: '#contact' },
  ]

  const navLinks = [
    { name: 'Home', link: '/' }, // الرئيسية
    { name: 'Services', link: '/services' }, // الخدمات
    { name: 'Doctors', link: '/doctors' }, // الأطباء
    { name: 'About', link: '/about' }, // عن العيادة
    { name: 'Contact', link: '/contact' }, // تواصل
  ]

  const navbarCTA = {
    text: 'Book Appointment', // احجز موعد
    link: '/book-appointment',
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <PageContainer>
        <div className="grid h-20 grid-cols-3 items-center">
          {/* LEFT - Logo */}
          <div className="flex items-center">
            <img
              src="https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=324,height=96,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1d84d4-4fb7-72eb-b27f-93edde22cb64.png"
              alt=""
              className="h-16 w-16"
            />
          </div>

          {/* CENTER - Nav (true center) */}
          <nav className="hidden justify-center gap-6 lg:flex">
            {landingPageContent.header.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-foreground transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-primary hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* RIGHT - CTA + Mobile */}
          <div className="flex items-center justify-end gap-3">
            <div className="hidden lg:block">
              <Button variant="secondary">{landingPageContent.heroContent.ctaText}</Button>
            </div>

            {/* Mobile Menu Button */}
            {/* <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button> */}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="space-y-2 pb-4 lg:hidden">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href="#"
                className="block py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </a>
            ))}

            <Button className="mt-4 w-full rounded-lg border py-6 font-semibold">
              {landingPageContent.heroContent.ctaText}
            </Button>
          </nav>
        )}
      </PageContainer>
    </header>
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
//       'https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1ec4ab-0f58-be08-63d0-4a2b6a303f6905edd1b4-cb4e-484a-b855-feb1a84c9953-src_ar..jpg', // path to your hero image/video
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

// Use the above data to populate the page dynamically as shown earlier.
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
  {
    question: 'How many sessions will I need?',
    answer:
      'The number of sessions varies depending on your condition and treatment type. Your doctor will provide a personalized treatment plan during your consultation.',
  },
  {
    question: 'Do you offer customized treatment plans?',
    answer:
      'Yes. Every patient receives a personalized treatment plan based on a professional medical evaluation to ensure the best possible results.',
  },
  {
    question: 'Can multiple treatments be combined?',
    answer:
      'In some cases, yes. Treatments such as skin procedures, laser, and hair restoration can be combined depending on medical evaluation to ensure safety and effectiveness.',
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
        {/* Header */}
        <div>
          <SectionTag id="faq">{landingPageContent.faq.label}</SectionTag>

          <SectionTitle title={landingPageContent.faq.title} />

          {/* <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Everything you need to know about our treatments, consultations, and appointment process.
          </p> */}
        </div>

        {/* FAQ Items */}
        <div className="mt-24 divide-y divide-black/[0.06]">
          {landingPageContent.faq.items.map((faq, index) => (
            <div key={index} className="py-8">
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
              text-xl
              font-medium
              leading-relaxed
              tracking-tight
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
                bg-muted/50
                transition-transform
                duration-500
                `,
                    openIndex === index && 'rotate-180',
                  )}
                >
                  <ChevronDown className="h-4 w-4" />
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
                  openIndex === index ? 'grid-rows-[1fr] pt-6 opacity-100' : 'grid-rows-[0fr] opacity-0',
                )}
              >
                <div className="overflow-hidden">
                  <p
                    className="
                max-w-3xl
                text-lg
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
    <div className="flex w-fit items-center gap-2 rounded-full bg-accent/60 px-3.5 py-0.5">
      <div className="h-2 w-2 rounded-xl bg-primary/50"></div>
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

function Services() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <PageContainer size="lg">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {landingPageContent.servicesSection.items.map((service, idx) => (
          <a
            key={idx}
            href="#"
            onMouseEnter={() => setActiveIndex(idx as any)}
            onMouseLeave={() => setActiveIndex(null)}
            className={cn(
              `
          group relative overflow-hidden rounded-2xl
          transition-all duration-500 ease-out
          `,
              activeIndex === idx ? 'md:col-span-2' : 'md:col-span-1',
            )}
          >
            {/* Image */}
            <img
              src="https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1ec4ab-0f58-be08-63d0-4a2b6a303f6905edd1b4-cb4e-484a-b855-feb1a84c9953-src_ar..jpg"
              alt={service.title.line1 + ' ' + service.title.highlight}
              className="h-[30rem] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="rounded-2xl bg-white/70 p-4 backdrop-blur-xl">
                <h3 className="text-lg font-medium text-foreground">
                  {service.title.line1} {service.title.highlight}
                </h3>

                <p
                  className={cn(
                    `
                overflow-hidden text-sm text-muted-foreground
                transition-all duration-500
                `,
                    activeIndex === idx ? 'mt-2 max-h-20 opacity-100' : 'max-h-0 opacity-0',
                  )}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </PageContainer>
  )
}

export function HeroMinimal() {
  return (
    <section className="relative min-h-screen bg-background">
      <PageContainer size="full" className="relative min-h-screen">
        <div className="absolute inset-0">
          <img src={landingPageContent.heroContent.backgroundImage} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 flex min-h-screen items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-6xl leading-[1.1]">
              <span className="block">عيادات متخصصة</span>
              <span className="block text-[#C58D00]">في الجلدية والتجميل</span>
              <span className="block">والعناية بالبشرة</span>
            </h1>

            <p className="mt-8 text-foreground/60">رعاية طبية تعتمد على الدقة والنتائج الطبيعية</p>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}

export function V2() {
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

          {/* <section className="relative min-h-screen overflow-hidden bg-[#f8f6f2]">
            <div className="absolute inset-0">
              <img
                src={landingPageContent.heroContent.backgroundImage}
                alt="Luxury clinic interior"
                className="h-full w-full object-cover"
              />

              <div className="bg-black/45 absolute inset-0" />

              <div className="via-black/35 absolute inset-0 bg-gradient-to-l from-black to-transparent" />
            </div>

            <PageContainer>
              <div className="relative z-10 flex min-h-screen items-center">
                <div className="max-w-2xl">
                  <Typography variant="7xl/normal" className="mt-4 font-serif text-white lg:leading-[1.2]">
                    {landingPageContent.heroContent.title}
                  </Typography>

                  <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
                    {landingPageContent.heroContent.subtitle}
                  </p>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <Button
                      className="
                      h-14
                      rounded-full
                      px-8
                      text-sm
                      font-medium
                      tracking-wide
                      transition-all
                      duration-300
                    "
                    >
                      {landingPageContent.heroContent.ctaText}
                    </Button>

                    <Button
                      className="
                      h-14
                      rounded-full
                      border
                      border-white/30
                      bg-white/10
                      px-8
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
                    </Button>
                  </div>
                </div>
              </div>
            </PageContainer>

            <div className="absolute bottom-0 left-0 h-72 w-full bg-gradient-to-t from-[#f8f6f2] to-transparent" />
          </section> */}

          <Section className="overflow-hidden py-10 lg:py-16">
            <PageContainer>
              <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
                {/* LEFT */}
                <div>
                  <div className="max-w-xl">
                    <SectionTag>
                      عيادات مارلين
                      {/* {landingPageContent.heroContent.label} */}
                    </SectionTag>

                    <Typography variant="6xl/normal" className="mt-6 font-serif tracking-tight lg:leading-[1.2]">
                      {landingPageContent.heroContent.title.line1}
                      <br />
                      {landingPageContent.heroContent.title.highlight}
                      <br />
                      {landingPageContent.heroContent.title.line2}
                    </Typography>

                    <p
                      className="
            mt-8
            text-lg
            leading-relaxed
            text-muted-foreground
          "
                    >
                      {landingPageContent.heroContent.subtitle}
                    </p>

                    {/* ACTIONS */}
                    <div className="mt-10 flex flex-wrap gap-4">
                      <Button className="h-14 w-full rounded-full bg-foreground px-8 text-background sm:w-auto">
                        {landingPageContent.heroContent.ctaText}
                      </Button>

                      <Button variant="secondary" className="h-14 w-full rounded-full px-8 sm:w-auto">
                        {landingPageContent.heroContent.secondaryCtaText}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative">
                  <div className="overflow-hidden rounded-3xl bg-muted">
                    <img
                      src={landingPageContent.heroContent.backgroundImage}
                      alt=""
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </PageContainer>
          </Section>

          {/* <Section className="py-32">
            <PageContainer>
              <div className="grid gap-20 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <SectionTag>Our Philosophy</SectionTag>

                  <h2
                    className="
            mt-6
            max-w-2xl
            text-5xl
            leading-[1.08]
            tracking-tight
          "
                  >
                    Beauty, confidence, and medical care — thoughtfully combined.
                  </h2>

                  <p
                    className="
            mt-10
            max-w-xl
            text-lg
            leading-relaxed
            text-muted-foreground
          "
                  >
                    We believe aesthetic and dermatological care should feel deeply personal, refined, and natural.
                    Every treatment experience is designed around comfort, precision, and results that enhance rather
                    than transform.
                  </p>
                </div>

                <div className="space-y-12">
                  {[
                    {
                      title: 'Personalized Care',
                      text: 'Every treatment plan is tailored carefully to individual skin, goals, and lifestyle.',
                    },
                    {
                      title: 'Advanced Expertise',
                      text: 'Combining medical excellence with the latest technologies in dermatology and aesthetics.',
                    },
                    {
                      title: 'Natural Results',
                      text: 'Our philosophy focuses on subtle enhancement and timeless elegance.',
                    },
                  ].map((item, index) => (
                    <div key={index} className="border-t border-black/5 pt-6">
                      <h3 className="text-xl font-medium">{item.title}</h3>

                      <p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </PageContainer>
          </Section>
          <Section className="py-32">
            <PageContainer size="xl">
              <div className="overflow-hidden rounded-[3rem]">
                <img
                  src={landingPageContent.heroContent.backgroundImage}
                  className="
          aspect-[16/9]
          w-full
          object-cover
        "
                />
              </div>

              <div className="mt-10 max-w-lg">
                <p
                  className="
          text-2xl
          leading-relaxed
        "
                >
                  Designed to feel calm, refined, and welcoming from the moment you arrive.
                </p>
              </div>
            </PageContainer>
          </Section>

          <Section className="py-32">
            <PageContainer size="xl">
              <div className="grid items-center gap-20 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="overflow-hidden rounded-[2.5rem] bg-muted">
                  <img
                    src="/images/clinic-equipment.jpg"
                    alt=""
                    className="
            aspect-[5/4]
            w-full
            object-cover
          "
                  />
                </div>

                <div>
                  <SectionTag>Technology</SectionTag>

                  <h2
                    className="
            mt-6
            text-5xl
            leading-[1.05]
            tracking-tight
          "
                  >
                    Advanced technology, excellent patient care.
                  </h2>

                  <p
                    className="
            mt-8
            text-lg
            leading-relaxed
            text-muted-foreground
          "
                  >
                    We invest in globally trusted treatment systems and advanced technologies to ensure precision,
                    safety, comfort, and exceptional outcomes.
                  </p>

                  <div className="mt-12 space-y-6">
                    {[
                      'FDA-approved technologies',
                      'Modern laser systems',
                      'Advanced skin analysis',
                      'Personalized treatment planning',
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="
                flex
                items-center
                gap-4
                border-b
                border-black/5
                pb-4
              "
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-foreground/50" />

                        <p className="text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </PageContainer>
          </Section> */}

          <Section className="bg-background py-16">
            <Stack spacing="page">
              <PageContainer>
                <div className="max-w-2xl">
                  <SectionTag id="services" className="">
                    {landingPageContent.servicesSection.label}
                  </SectionTag>
                  <SectionTitle title={landingPageContent.servicesSection.title} />
                </div>
              </PageContainer>

              <PageContainer size="xl">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:p-4 lg:grid-cols-4">
                  {landingPageContent.servicesSection.items.map((service, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="group relative overflow-hidden rounded-2xl bg-card transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl"
                    >
                      {/* Image */}
                      <div className="overflow-hidden rounded-2xl">
                        <img
                          src={service.image}
                          alt={service.title.line1 + ' ' + service.title.highlight}
                          className="
      aspect-[3/4]
      w-full
      object-cover
      transition-transform
      duration-700
      group-hover:scale-[1.03]
    "
                        />
                      </div>

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                      {/* Content */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="rounded-2xl bg-card/30 p-4 backdrop-blur transition-all duration-500 group-hover:bg-white/80">
                          <Typography variant="2xl/medium" className="text-white group-hover:text-foreground/80">
                            {service.title.line1}
                            <br />
                            <span className="text-foreground/80">{service.title.highlight}</span>
                          </Typography>

                          {/* Optional reveal text */}
                          <p className="max-h-0 overflow-hidden text-sm text-foreground/60 opacity-0 transition-all duration-500 group-hover:mt-2 group-hover:max-h-20 group-hover:opacity-100">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </PageContainer>
            </Stack>
          </Section>

          <Section className="py-24">
            <PageContainer>
              {/* Header */}
              <div>
                <SectionTag id="doctors">Specialists</SectionTag>

                <SectionTitle title="Meet Our Medical Experts" />

                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Our team of specialists combines medical expertise, advanced techniques, and personalized care to
                  deliver exceptional results tailored to every patient.
                </p>
              </div>

              {/* Doctors Grid */}
              <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {landingPageContent.doctorsSection.doctors.map((doc, idx) => (
                  <div key={idx} className="group">
                    {/* Image */}
                    <div className="overflow-hidden rounded-2xl bg-card">
                      <img
                        src={'https://images.pexels.com/photos/8376221/pexels-photo-8376221.jpeg'}
                        alt={doc.name}
                        className="
                aspect-[4/5]
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
                      <div className="flex flex-col  justify-between">
                        <h3 className="text-xl font-medium tracking-tight">{doc.name}</h3>

                        <span className="text-sm text-muted-foreground">{doc.credentials}</span>
                      </div>

                      <p className="mt-2 text-muted-foreground">{doc.specialty}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PageContainer>
          </Section>

          <Section className="py-24">
            <PageContainer>
              <div className="mb-12">
                <SectionTag id="experience">Experience</SectionTag>

                <SectionTitle title="The Clinic Experience" />

                <p className="mt-4 max-w-xl text-muted-foreground">
                  Designed to provide a calm, refined, and comfortable experience from consultation to treatment.
                </p>
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

          <Section className="py-28">
            <PageContainer>
              {/* Header */}
              <div>
                <SectionTag id="testimonials">Patient Experiences</SectionTag>

                <SectionTitle title="What Our Patients Say" />

                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Trusted by patients across Riyadh for personalized care, advanced treatments, and natural-looking
                  results.
                </p>
              </div>

              {/* Testimonials */}
              <div className="mt-24 grid gap-10 lg:grid-cols-2">
                {landingPageContent.testimonials.items.map((testimonial, index) => (
                  <div
                    key={index}
                    className="
            rounded-2xl
            bg-card
            p-10
            transition-all
            duration-500
          "
                  >
                    {/* Quote Icon */}
                    {/* <div className="text-primary/15 text-6xl leading-none">“</div> */}

                    {/* Quote */}
                    <p
                      className="
            mt-6
            text-xl
            leading-relaxed
            text-foreground
          "
                    >
                      {testimonial.quote}
                    </p>

                    {/* Footer */}
                    <div className="mt-10 border-t border-black/5 pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-medium">{testimonial.patientName}</p>

                          <p className="mt-1 text-sm text-muted-foreground">{testimonial.treatment}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </PageContainer>
          </Section>

          <FAQ />

          <section id="contact" className="relative py-28">
            {/* very subtle background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-muted/20" />

            <PageContainer>
              {/* Header */}
              <div className="max-w-2xl">
                <SectionTag id="contact">{landingPageContent.contactSection.label}</SectionTag>

                <SectionTitle title={landingPageContent.contactSection.title} />

                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  {landingPageContent.contactSection.description}
                </p>
              </div>

              {/* Main layout */}
              <div className="mt-20 grid gap-16 lg:grid-cols-2">
                {/* Contact Info */}
                <div className="space-y-10">
                  <div>
                    <p className="text-sm uppercase text-muted-foreground">{landingPageContent.contactSection.label}</p>

                    <div className="mt-8 space-y-8">
                      {landingPageContent.contactSection.items.map((item, index) => (
                        <div key={item.label + index}>
                          <p className="text-lg font-medium">{item.label}</p>
                          <a className="mt-2 block text-muted-foreground transition-colors hover:text-foreground">
                            {item.value}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* subtle trust line */}
                  {/* <div className="rounded-2xl bg-card p-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Consultations are personalized and confidential. Our specialists will guide you through the best
                      treatment options for your needs.
                    </p>
                  </div> */}
                </div>

                {/* Form */}
                <div className="rounded-2xl bg-card p-10">
                  <h3 className="text-2xl font-medium">{landingPageContent.contactSection.ctaText}</h3>

                  {/* <p className="mt-2 text-sm text-muted-foreground">We will contact you within 24 hours</p> */}

                  <form className="mt-10 space-y-6">
                    <Input
                      type="text"
                      placeholder={landingPageContent.contactSection.form.fullName.placeholder}
                      className="w-full rounded-none border-0 border-b border-black/10 bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground focus:border-black/30 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 md:text-base"
                    />

                    <Input
                      type="email"
                      placeholder={landingPageContent.contactSection.form.email.placeholder}
                      className="w-full rounded-none border-0 border-b border-black/10 bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground focus:border-black/30 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 md:text-base"
                    />

                    <Select>
                      <SelectTrigger className="w-full flex-row-reverse rounded-none border-0 border-b border-black/10 bg-transparent text-base placeholder:text-muted-foreground focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0">
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
                      placeholder="Tell us briefly about your concern"
                      className="w-full resize-none rounded-none border-0 border-b border-black/10 bg-transparent py-3 text-base outline-none ring-0 ring-offset-0 placeholder:text-muted-foreground focus:border-black/30 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 md:text-base"
                    />

                    <button className="mt-6 w-full rounded-full bg-foreground py-4 font-medium text-background transition hover:bg-black/90">
                      {landingPageContent.contactSection.ctaText}
                    </button>
                  </form>
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

          <footer className="relative overflow-hidden border-t border-black/[0.06] bg-[#f5efe8]">
            {/* subtle texture glow */}
            <div className="absolute inset-0 opacity-[0.03]">
              <img src="/clinic-interior.jpg" alt="" className="h-full w-full object-cover" />
            </div>

            <PageContainer>
              <div className="relative py-32 lg:py-40">
                {/* Main Statement */}
                <div className="max-w-4xl">
                  <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Marilyn Clinics</p>

                  <h2
                    className="
            mt-8
            text-5xl
            leading-[1.05]
            tracking-tight
            lg:text-7xl
          "
                  >
                    Begin your journey toward refined aesthetic care.
                  </h2>

                  <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                    Personalized dermatology and aesthetic treatments designed with expertise, precision, and care.
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
                </div>

                {/* Bottom Area */}
                <div
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
                  {/* Contact */}
                  <div className="space-y-4 text-sm">
                    <p className="text-muted-foreground">info@marilynclinics.com</p>

                    <p className="text-muted-foreground">0115444888</p>

                    <p className="text-muted-foreground">Riyadh, Saudi Arabia</p>
                  </div>

                  {/* Navigation */}
                  <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
                    <a className="transition hover:text-foreground">About</a>

                    <a className="transition hover:text-foreground">Services</a>

                    <a className="transition hover:text-foreground">Doctors</a>

                    <a className="transition hover:text-foreground">Contact</a>

                    <a className="transition hover:text-foreground">Instagram</a>
                  </div>
                </div>

                {/* Copyright */}
                <div className="mt-10 text-xs text-muted-foreground">© 2026 Marilyn Clinics. All rights reserved.</div>
              </div>
            </PageContainer>
          </footer>

          <footer className="">
            <PageContainer>
              <div className="grid gap-16 py-20 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:py-56">
                {/* Brand */}
                <div className="max-w-md">
                  <img
                    src="https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=324,height=96,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1d84d4-4fb7-72eb-b27f-93edde22cb64.png"
                    alt="Marilyn Clinics"
                    className="h-24 w-auto"
                  />

                  <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                    Marilyn Clinics combines advanced dermatology, aesthetic expertise, and personalized care to create
                    refined treatment experiences tailored to every patient.
                  </p>
                </div>

                {/* Navigation */}
                <div>
                  <p className="text-sm font-medium tracking-[0.15em] text-foreground/70">Navigation</p>

                  <div className="mt-6 flex flex-col gap-4">
                    {['About', 'Services', 'Doctors', 'Experience', 'Testimonials', 'Contact'].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="
                text-muted-foreground
                transition-colors
                hover:text-foreground
              "
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <p className="text-sm font-medium tracking-[0.15em] text-foreground/70">Contact</p>

                  <div className="mt-6 space-y-5">
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a className="mt-1 block hover:text-foreground">0115444888</a>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a className="mt-1 block hover:text-foreground">info@marilynclinics.com</a>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="mt-1">Riyadh, Saudi Arabia</p>
                    </div>
                  </div>

                  <button
                    className="
            mt-8
            rounded-full
            bg-foreground
            px-6
            py-3
            text-sm
            font-medium
            text-background
            transition
            hover:opacity-90
          "
                  >
                    Book Consultation
                  </button>
                </div>
              </div>

              {/* Bottom */}
              <div
                className="
        flex
        flex-col
        items-start
        justify-between
        gap-4
        border-t
        border-black/[0.06]
        py-6
        text-sm
        text-muted-foreground
        sm:flex-row
        sm:items-center
      "
              >
                <p>© 2026 Marilyn Clinics. All rights reserved.</p>

                <div className="flex items-center gap-6">
                  <a className="hover:text-foreground">Instagram</a>

                  <a className="hover:text-foreground">Privacy Policy</a>
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
