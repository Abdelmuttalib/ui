import { PlusIcon } from 'lucide-react'
import { PageContainer } from './common/page-container'
import { Typography } from './ui/typography'
import React, { useState } from 'react'
import { cn } from 'src/lib/utils'
import { landingPageContent } from 'src/lib/data'
import { Button } from './ui/button'
import { Helmet } from 'react-helmet'

export default function V4Page() {
  return (
    <>
      <Helmet>
        <title>نموذج 4</title>
      </Helmet>

      <div>
        <Header />
        <V4 />
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
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <PageContainer>
        {/* TOP BORDER */}
        <div className="h-px w-full bg-black/10" />

        <div className="flex h-20 items-center justify-between">
          {/* LEFT: BRAND */}
          <div className="flex items-center gap-6">
            <div className="h-6 w-[1px] bg-[#C58D00]/40" />

            <img
              src="https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=324,height=96,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1d84d4-4fb7-72eb-b27f-93edde22cb64.png"
              alt="logo"
              className="h-16 w-auto"
            />

            {/* <div className="leading-none">
              <p className="font-serif text-lg font-light tracking-[-0.02em]">Marilyn Clinic</p>

              <p className="text-[10px] uppercase tracking-[0.35em] text-foreground/50">Dermatology & Aesthetic Care</p>
            </div> */}
          </div>

          {/* CENTER NAV */}
          <nav className="hidden items-center gap-10 lg:flex">
            {landingPageContent.header.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
              relative text-base uppercase tracking-[0.25em]
              text-foreground/70 transition
              hover:text-[#C58D00]
            "
              >
                {item.label}

                {/* subtle underline */}
                <span
                  className="
                absolute -bottom-2 left-0
                h-px w-0 bg-[#C58D00]/60
                transition-all duration-300
                hover:w-full
              "
                />
              </a>
            ))}
          </nav>

          {/* RIGHT: CTA */}
          <div className="flex items-center gap-6">
            <Button className="hidden rounded-none border border-[#C58D00]/40 bg-black px-6 py-3 text-xs uppercase text-white transition hover:bg-[#d69a06] md:block">
              {landingPageContent.heroContent.ctaText}
            </Button>

            {/* mobile menu placeholder */}
            <button className="text-foreground/70 lg:hidden">
              <div className="space-y-1">
                <div className="h-px w-6 bg-foreground/70" />
                <div className="h-px w-6 bg-foreground/70" />
                <div className="h-px w-6 bg-foreground/70" />
              </div>
            </button>
          </div>
        </div>

        {/* BOTTOM BORDER */}
        <div className="h-px w-full bg-black/10" />
      </PageContainer>
    </header>
  )
}

{
  /* <header className="sticky top-0 z-50 border-b border-border bg-background">
      <PageContainer>
        <div className="grid h-20 grid-cols-3 items-center sm:h-24">
          <nav className="hidden justify-center gap-4 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href="#"
                data-active={item.name === 'Home'}
                className="relative rounded-full px-2.5 py-1 text-sm font-semibold text-foreground/80 transition-colors duration-300 after:transition-all after:duration-300 hover:bg-accent/50 hover:text-primary hover:after:w-full data-[active=true]:bg-accent/30 data-[active=true]:text-primary data-[active=true]:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </nav>


          <div className="flex items-center justify-center ">
            <img
              src="https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=324,height=96,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1d84d4-4fb7-72eb-b27f-93edde22cb64.png"
              alt=""
              className="h-16 w-16"
            />
          </div>

          <div className="flex items-center justify-end gap-3">
            <div className="hidden lg:block">
              <Button variant="secondary" className="rounded-full">
                {landingPageContent.heroContent.ctaText}
              </Button>
            </div>

            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

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
    </header> */
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

const howItWorks = [
  {
    step: 1,
    title: 'التسجيل وطلب الاستشارة',
    description: 'ابدأ رحلتك الدراسية بتعبئة نموذج التسجيل للحصول على استشارة مجانية من فريقنا المتخصص.',
  },
  {
    step: 2,
    title: 'اختيار الجامعات والتخصصات',
    description: 'نساعدك في اختيار الجامعات الأمريكية الأنسب بناءً على تخصصك الأكاديمي واحتياجاتك الشخصية.',
  },
  {
    step: 3,
    title: 'إعداد المستندات والتقديم',
    description: 'نقوم بمساعدتك في تحضير جميع المستندات المطلوبة، ومن ثم تقديمها للجامعات بشكل دقيق.',
  },
  {
    step: 4,
    title: 'التقديم للفيزا والموافقات',
    description: 'نساعدك في تقديم طلب الفيزا الأمريكية والحصول على الموافقات الحكومية اللازمة.',
  },
  {
    step: 5,
    title: 'الاستعداد للسفر',
    description: 'نقدم لك نصائح عملية قبل السفر لضمان بداية دراستك في أمريكا بسلاسة.',
  },
]

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
]

function SectionTitle({ title }: { title: string | React.ReactNode }) {
  return (
    <Typography variant="5xl/normal" className="mb-8 mt-6 font-light lg:leading-[1.18]">
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
            <SectionTag id="faq">FAQ</SectionTag>

            <SectionTitle title="Frequently Asked Questions" />
          </div>

          {/* FAQ Items */}
          <div className="grid gap-6">
            {faqs.map((faq, index) => (
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
    <div className="">
      {/* <div className="h-2 w-2 rounded-xl bg-primary/50"></div> */}
      <Typography variant="base/medium" className={cn('uppercase text-[#C58D00]', className)} id={id} {...props} />
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
                  {service.title.line1}

                  <span className="text-foreground/70">{service.title.highlight}</span>
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

export function V4() {
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

          {/* <section className="relative overflow-hidden bg-background text-foreground">
            <div className="absolute inset-0">
              <img
                src={landingPageContent.heroContent.backgroundImage}
                alt="Luxury clinic interior"
                className="h-full w-full object-cover object-center"
              />

              <div
                className="
        from-[#131A38]/92 absolute
        inset-0
        bg-gradient-to-b
        via-[#18214A]/70
        to-[#131A38]/40
      "
              />

              <div
                className="
        absolute inset-0
        bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:120px_120px]
      "
              />
            </div>

            <PageContainer
              size="full"
              className="
      relative z-10
      flex min-h-screen
      items-center
      py-24
    "
            >
              <div className="grid w-full grid-cols-1 gap-16 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <div
                    className="
            mb-10
            flex items-center gap-4
          "
                  >
                    <div className="h-px w-20 bg-[#C58D00]/60" />

                    <span
                      className="
              text-white/55
              text-xs
              uppercase
              tracking-[0.35em]
            "
                    >
                      Riyadh Luxury Clinic
                    </span>
                  </div>

                  <h1
                    className="
            max-w-5xl
            font-serif
            text-5xl
            font-light
            leading-[0.95]
            tracking-[-0.04em]
            text-white
            md:text-7xl
            xl:text-[7.5rem]
          "
                    style={{
                      fontFamily: 'var(--font-robotoserif)',
                    }}
                  >
                    Advanced
                    <span className="text-[#C58D00]"> Dermatology</span>
                    <br />
                    & Aesthetic
                    <br />
                    Care
                  </h1>

                  <p
                    className="
            mt-10
            max-w-2xl
            text-lg
            leading-relaxed
            text-white/70
            md:text-xl
          "
                  >
                    A refined medical experience blending advanced dermatological expertise with elevated architectural
                    luxury in the heart of Riyadh.
                  </p>

                  <div className="mt-14 flex flex-col gap-5 sm:flex-row">
                    <button
                      className="
              group
              relative
              overflow-hidden
              border border-[#C58D00]/40
              bg-[#C58D00]
              px-10
              py-5
              text-sm
              uppercase
              tracking-[0.18em]
              text-[#131A38]
              transition-all
              duration-500
              hover:bg-[#d69a06]
            "
                    >
                      Book Consultation
                    </button>

                    <button
                      className="
              border-white/15
              group border
              bg-white/[0.03]
              px-10
              py-5
              text-sm
              uppercase
              tracking-[0.18em]
              text-white
              backdrop-blur-sm
              transition-all
              duration-500
              hover:border-[#C58D00]/40
              hover:bg-white/[0.05]
            "
                    >
                      Explore Clinic
                    </button>
                  </div>

                  <div
                    className="
            mt-24
            grid
            max-w-3xl
            grid-cols-3
            border-t border-white/10
            pt-10
          "
                  >
                    <div>
                      <h3
                        className="
                font-serif
                text-4xl
                font-light
                text-white
              "
                      >
                        15+
                      </h3>

                      <p className="text-white/45 mt-3 text-sm uppercase tracking-[0.15em]">Specialists</p>
                    </div>

                    <div>
                      <h3
                        className="
                font-serif
                text-4xl
                font-light
                text-white
              "
                      >
                        25k+
                      </h3>

                      <p className="text-white/45 mt-3 text-sm uppercase tracking-[0.15em]">Patients</p>
                    </div>

                    <div>
                      <h3
                        className="
                font-serif
                text-4xl
                font-light
                text-white
              "
                      >
                        12+
                      </h3>

                      <p className="text-white/45 mt-3 text-sm uppercase tracking-[0.15em]">Technologies</p>
                    </div>
                  </div>
                </div>

                <div
                  className="
          relative hidden
          lg:col-span-5
          lg:flex
          lg:items-end
          lg:justify-end
        "
                >
                  <div
                    className="
            border border-white/10
            bg-white/[0.03]
            p-10
            backdrop-blur-md
          "
                  >
                    <div className="space-y-8">
                      <div>
                        <p
                          className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-[#C58D00]
                "
                        >
                          Featured Technology
                        </p>

                        <h3
                          className="
                  mt-4
                  max-w-sm
                  font-serif
                  text-3xl
                  leading-tight
                  text-white
                "
                        >
                          Precision-Driven Modern Aesthetic Medicine
                        </h3>
                      </div>

                      <div className="space-y-5 border-t border-white/10 pt-8">
                        {['Advanced Laser Systems', 'Personalized Skin Analysis', 'Non-Invasive Rejuvenation'].map(
                          (item) => (
                            <div
                              key={item}
                              className="
                    flex items-center
                    justify-between
                    border-b border-white/5
                    pb-5
                  "
                            >
                              <span className="text-white/70">{item}</span>

                              <div className="h-[1px] w-8 bg-[#C58D00]/50" />
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PageContainer>

            <div
              className="
      pointer-events-none
      absolute
      bottom-0
      left-1/2
      -translate-x-1/2
      select-none
      whitespace-nowrap
      font-serif
      leading-none
      text-white/[0.03]
    "
              style={{
                fontSize: 'clamp(7rem, 22vw, 26rem)',
                fontFamily: 'var(--font-corm)',
                fontWeight: 600,
                letterSpacing: '-0.06em',
              }}
            >
              Marilyn
            </div>
          </section> */}

          <section className="min-h-screen">
            <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
              {/* LEFT CONTENT */}
              <div className="flex items-center justify-end pl-16">
                <div className="max-w-2xl">
                  {/* Premium Label */}

                  {/* Heading */}
                  <h1 className="text-5xl font-light text-foreground md:text-6xl lg:text-7xl lg:leading-[1.18]">
                    {landingPageContent.heroContent.title.line1}
                    <br />
                    <span className="font-display text-[#C58D00]">
                      {landingPageContent.heroContent.title.highlight}
                    </span>
                    <br />
                    {landingPageContent.heroContent.title.line2}
                    {/* <span className="text-[#C58D00]">Experience</span> */}
                  </h1>

                  {/* Description */}
                  <p className="mt-8 max-w-lg text-lg leading-relaxed text-[#5f5a54]">
                    {landingPageContent.heroContent.subtitle}
                  </p>

                  {/* Buttons */}
                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <button
                      className="
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

                  {/* Metrics */}
                  {/* <div className="mt-16 grid grid-cols-3 gap-8 border-t border-[#ddd4c7] pt-8">
                    <div>
                      <h3 className="text-3xl font-light text-[#1f1f1f]">15+</h3>
                      <p className="mt-2 text-sm text-[#7b746d]">Specialists</p>
                    </div>

                    <div>
                      <h3 className="text-3xl font-light text-[#1f1f1f]">25k+</h3>
                      <p className="mt-2 text-sm text-[#7b746d]">Patients Served</p>
                    </div>

                    <div>
                      <h3 className="text-3xl font-light text-[#1f1f1f]">5★</h3>
                      <p className="mt-2 text-sm text-[#7b746d]">Premium Experience</p>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative h-[50vh] lg:h-screen">
                <img
                  src={landingPageContent.heroContent.backgroundImage}
                  alt="Luxury Clinic Interior"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Soft Luxury Gradient */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#f7f3ee]/20" />
              </div>
            </div>
          </section>

          {/* <section className="relative bg-background">
            <PageContainer className="py-10">
              <div className="h-px w-full bg-[#C58D00]/20" />

              <div className="grid grid-cols-2 gap-10 py-10 md:grid-cols-4">
                {[
                  'Board Certified Dermatologists',
                  'International Training',
                  'Advanced Medical Technology',
                  'Precision Aesthetic Care',
                ].map((item) => (
                  <div key={item} className="relative">
                    <div className="mb-4 h-px w-10 bg-[#C58D00]/40" />

                    <p className="text-xs uppercase tracking-[0.25em] text-foreground/60">{item}</p>
                  </div>
                ))}
              </div>

              <div className="h-px w-full bg-black/10" />
            </PageContainer>
          </section> */}

          <section className="relative bg-background text-foreground">
            <PageContainer className="py-32">
              {/* HEADER */}
              <div className="mx-auto max-w-4xl text-center">
                {/* line */}
                <SectionTag id="services">{landingPageContent.servicesSection.label}</SectionTag>

                <h2 className="mt-6 font-serif text-5xl font-light leading-[1.05]">
                  {landingPageContent.servicesSection.title}
                </h2>

                <p className="mt-8 text-foreground/70">{landingPageContent.servicesSection.description}</p>
              </div>

              {/* GRID */}
              <div className="mt-24 grid grid-cols-1 gap-0 border border-black/10 lg:grid-cols-2">
                {landingPageContent.servicesSection.items.map((service, idx) => (
                  <div
                    key={service.title.line1 + ' ' + service.title.highlight}
                    className="
            group relative
            border-b border-black/10
            lg:border-b-0 lg:border-r
          "
                  >
                    {/* IMAGE BLOCK */}
                    <div className="relative h-[340px] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title.line1 + ' ' + service.title.highlight}
                        className="
                h-full w-full object-cover
                transition duration-700
                group-hover:scale-[1.05]
              "
                      />

                      {/* subtle dark overlay for readability */}
                      <div className="absolute inset-0 bg-black/10" />

                      {/* gold line accent */}
                      <div className="absolute left-8 top-8 h-1 w-12 bg-[#C58D00] transition-all duration-500 group-hover:w-20" />
                    </div>

                    {/* TEXT BLOCK */}
                    <div className="p-10">
                      <h3 className="font-serif text-2xl">
                        {service.title.line1} {service.title.highlight}
                      </h3>

                      <p className="mt-4 text-sm leading-relaxed text-foreground/70 sm:text-base">
                        {service.description}
                      </p>

                      {/* subtle hover line */}
                      <div className="mt-8 h-px w-0 bg-[#C58D00]/40 transition-all duration-500 group-hover:w-full" />
                    </div>
                  </div>
                ))}
              </div>
            </PageContainer>
          </section>

          <section className="relative bg-background text-foreground">
            <PageContainer className="py-32">
              {/* HEADER */}
              <div className="mx-auto max-w-4xl text-center">
                <SectionTag id="">{landingPageContent.doctorsSection.label}</SectionTag>

                <h2 className="mt-6 font-serif text-5xl font-light leading-[1.05]">
                  {landingPageContent.doctorsSection.title.line1}
                  <br />
                  <span>{landingPageContent.doctorsSection.title.highlight}</span>
                  <br />
                  {landingPageContent.doctorsSection.title.line2}
                </h2>

                <p className="mt-8 text-foreground/70">{landingPageContent.doctorsSection.description}</p>
              </div>

              {/* GRID */}
              <div className="mt-24 grid grid-cols-1 gap-0 border border-black/10 lg:grid-cols-3">
                {[...landingPageContent.doctorsSection.doctors, landingPageContent.doctorsSection.doctors[0]].map(
                  (doc) => (
                    <div
                      key={doc.name}
                      className="
            group relative
            border-r border-black/10
            transition
            last:border-l-0
            hover:bg-black/[0.01]
          "
                    >
                      {/* IMAGE */}
                      <div className="relative h-[360px] overflow-hidden">
                        <img
                          src={doc.image}
                          alt={doc.name}
                          className="
                aspect-[4/5] h-full w-full
                object-cover transition
                duration-700
                group-hover:scale-[1.05]
              "
                        />

                        {/* subtle dark overlay for editorial feel */}
                        <div className="absolute inset-0 bg-black/10" />

                        {/* gold accent line */}
                        <div className="absolute right-8 top-8 h-px w-10 bg-[#C58D00]/50 transition-all duration-500 group-hover:w-20" />
                      </div>

                      {/* TEXT */}
                      <div className="p-10">
                        <h3 className="font-serif text-2xl font-light tracking-[-0.02em]">{doc.name}</h3>

                        <p className="mt-2 text-sm uppercase tracking-[0.25em] text-foreground/60">{doc.specialty}</p>

                        <p className="mt-6 text-sm leading-relaxed text-foreground/70">{doc.qualifications}</p>

                        {/* subtle bottom line */}
                        <div className="mt-8 h-px w-0 bg-[#C58D00]/40 transition-all duration-500 group-hover:w-full" />
                      </div>
                    </div>
                  ),
                )}
              </div>
            </PageContainer>
          </section>

          <section className="relative bg-background text-foreground">
            <PageContainer className="py-32">
              <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-12">
                {/* LEFT: IMAGE / ARCHITECTURAL VISUAL */}
                <div className="lg:col-span-6">
                  <div className="relative border border-black/10">
                    <img
                      src="https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1ec4ab-0f58-be08-63d0-4a2b6a303f69732dd47d-e976-4750-9ea2-f00017fef38c-src_ar..jpg"
                      alt="Clinic interior"
                      className="h-full w-full object-cover"
                    />

                    {/* subtle gold frame accent */}
                    <div className="absolute inset-0 border border-[#C58D00]/20" />
                  </div>
                </div>

                {/* RIGHT: TEXT CONTENT */}
                <div className="lg:col-span-6">
                  <SectionTag id="">{landingPageContent.philosophySection.label}</SectionTag>

                  <SectionTitle
                    title={
                      <>
                        {landingPageContent.philosophySection.title.line1}
                        <br />
                        <span className="font-display text-[#C58D00]">
                          {landingPageContent.philosophySection.title.highlight}
                        </span>
                        <br />
                        {landingPageContent.philosophySection.title.line2}
                      </>
                    }
                  />
                  {/* <h2 className="mt-6 font-serif text-5xl font-light leading-[1.05] tracking-[-0.03em] md:text-6xl">
                    {landingPageContent.philosophySection.title.line1}
                    <br />
                    <span className="font-display text-[#C58D00]">
                      {landingPageContent.philosophySection.title.highlight}
                    </span>
                    <br />
                    {landingPageContent.philosophySection.title.line2}
                  </h2> */}

                  <p className="mt-10 max-w-xl text-base leading-relaxed text-foreground/70">
                    {landingPageContent.philosophySection.description}
                  </p>

                  <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70">
                    {landingPageContent.philosophySection.secondaryDescription}
                  </p>

                  {/* DIVIDER */}
                  <div className="mt-12 h-px w-20 bg-[#C58D00]/40" />

                  {/* KEY VALUES */}
                  <div className="mt-10 space-y-6">
                    {landingPageContent.philosophySection.values.map((item) => (
                      <div key={item} className="flex items-start gap-5">
                        <div className="mt-2 h-px w-10 bg-[#C58D00]/50" />
                        <p className="text-sm text-foreground/70">{item}</p>
                      </div>
                    ))}
                  </div>

                  {/* SIGNATURE LINE */}
                  <div className="mt-14 flex items-center gap-4">
                    <div className="h-px w-16 bg-black/10" />
                    <p className="text-xs uppercase text-foreground/50">
                      {landingPageContent.philosophySection.signature}
                    </p>
                  </div>
                </div>
              </div>
            </PageContainer>
          </section>

          {/* <section className="relative bg-background text-foreground">
            <PageContainer size="full" className="py-28">
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#C58D00]">Medical Specialists</p>

                <h2 className="mt-6 font-serif text-5xl font-light leading-[1.05]">
                  Expert physicians
                  <br />
                  dedicated to precision care
                </h2>

                <p className="mt-8 text-foreground/70">
                  A team of internationally trained dermatology specialists focused on delivering safe, precise, and
                  refined aesthetic outcomes.
                </p>
              </div>

              <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-0 border border-black/10 lg:grid-cols-3">
                {[
                  {
                    name: 'Dr. Aesthetic Specialist',
                    role: 'Consultant Dermatologist',
                    desc: 'Specialized in advanced dermatological procedures and skin rejuvenation therapies.',
                  },
                  {
                    name: 'Dr. Clinical Expert',
                    role: 'Laser & Skin Surgery',
                    desc: 'Focused on precision laser treatments and minimally invasive dermatological procedures.',
                  },
                  {
                    name: 'Dr. Skin Wellness',
                    role: 'Aesthetic Medicine',
                    desc: 'Expert in regenerative aesthetics and long-term skin health optimization.',
                  },
                ].map((doc) => (
                  <div
                    key={doc.name}
                    className="group relative border-r border-black/10 p-10 last:border-r-0 hover:bg-black/[0.01]"
                  >
                    <div className="mb-6 h-px w-12 bg-[#C58D00]/40 transition-all duration-500 group-hover:w-20" />

                    <h3 className="font-serif text-2xl font-light">{doc.name}</h3>

                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-foreground/60">{doc.role}</p>

                    <p className="mt-6 text-sm leading-relaxed text-foreground/70">{doc.desc}</p>

                    <div className="absolute bottom-0 left-0 h-px w-0 bg-[#C58D00]/30 transition-all duration-500 group-hover:w-full" />
                  </div>
                ))}
              </div>
            </PageContainer>
          </section> */}

          <section className="relative bg-background text-foreground">
            <PageContainer className="py-28">
              {/* HEADER */}
              <div className="mx-auto max-w-4xl text-center">
                <SectionTag id="">{landingPageContent.faq.label}</SectionTag>

                <SectionTitle title={<>{landingPageContent.faq.title}</>} />

                {/* <p className="mt-8 text-foreground/70">{landingPageContent.faq.}</p> */}
              </div>

              {/* FAQ GRID */}
              <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-0 border border-black/10">
                {landingPageContent.faq.items.map((item, i) => (
                  <div
                    key={item.question}
                    className="group relative border-b border-black/10 p-10 transition hover:bg-black/[0.015]"
                  >
                    {/* GOLD LINE */}
                    <div className="mb-5 h-px w-10 bg-[#C58D00]/40 transition-all duration-500 group-hover:w-20" />

                    {/* QUESTION */}
                    <h3 className="font-serif text-xl leading-snug">{item.question}</h3>

                    {/* ANSWER */}
                    <p className="mt-5 max-w-3xl text-sm leading-relaxed text-foreground/70">{item.answer}</p>

                    {/* subtle accent line */}
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-[#C58D00]/30 transition-all duration-500 group-hover:w-full" />
                  </div>
                ))}
              </div>
            </PageContainer>
          </section>

          <section className="relative bg-background text-foreground">
            {/* TOP DIVIDER */}
            <div className="mx-auto w-full max-w-7xl px-6 pt-24">
              <div className="h-px w-full bg-[#C58D00]/20" />
            </div>

            <PageContainer className="py-28">
              <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
                {/* LEFT: INFO / BRAND */}
                <div className="lg:col-span-5">
                  <SectionTag id="">{landingPageContent.contactSection.label}</SectionTag>

                  {/* <h2 className="mt-6 font-serif text-5xl font-light tracking-[-0.03em] md:text-6xl lg:leading-[1.15]">
                    {landingPageContent.contactSection.title}
                  </h2> */}

                  <SectionTitle title={landingPageContent.contactSection.title} />
                  {/* <Typography variant="lg/normal" className="mt-8 max-w-md leading-relaxed text-foreground/70">
                    {landingPageContent.contactSection.title}
                  </Typography> */}

                  <p className="mt-8 max-w-md text-base leading-relaxed text-foreground/70">
                    {landingPageContent.contactSection.description}
                  </p>

                  {/* CONTACT DETAILS */}
                  <div className="mt-14 space-y-6 border-t border-black/10 pt-10">
                    {landingPageContent.contactSection.items.map((item) => (
                      <div key={item.label}>
                        <p className="text-sm uppercase text-foreground/60">{item.label}</p>
                        <p className="mt-2 text-base text-foreground/80">
                          {item.value}
                          {/* Riyadh, Saudi Arabia — Premium Medical District */}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT: FORM */}
                <div className="lg:col-span-7">
                  <div className="border border-black/10 bg-white/40 p-10 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#C58D00]">
                      {landingPageContent.contactSection.ctaText}
                    </p>

                    <h3 className="mt-4 font-serif text-3xl font-light">
                      {landingPageContent.contactSection.form.label}
                    </h3>

                    <form className="mt-10 space-y-8">
                      {/* ROW 1 */}
                      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div>
                          <label className="text-xs uppercase tracking-[0.25em] text-foreground/50">
                            {landingPageContent.contactSection.form.fullName.label}
                          </label>
                          <input
                            type="text"
                            className="mt-3 w-full border-b border-transparent border-b-black/20 bg-transparent py-3 text-sm outline-none transition focus:border-transparent focus:border-b-[#C58D00]  focus:outline-none focus:ring-0"
                            placeholder={landingPageContent.contactSection.form.fullName.placeholder}
                          />
                        </div>

                        <div>
                          <label className="text-xs uppercase tracking-[0.25em] text-foreground/50">
                            {landingPageContent.contactSection.form.phone.label}
                          </label>
                          <input
                            type="text"
                            className="mt-3 w-full border-b border-transparent border-b-black/20 bg-transparent py-3 text-sm outline-none transition focus:border-transparent  focus:border-b-[#C58D00] focus:outline-none focus:ring-0"
                            placeholder={landingPageContent.contactSection.form.phone.placeholder}
                          />
                        </div>
                      </div>

                      {/* ROW 2 */}
                      <div>
                        <label className="text-xs uppercase tracking-[0.25em] text-foreground/50">Email</label>
                        <input
                          type="email"
                          className="mt-3 w-full border-b border-transparent border-b-black/20 bg-transparent py-3 text-sm outline-none transition focus:border-transparent focus:border-b-[#C58D00] focus:outline-none focus:ring-0"
                          placeholder={landingPageContent.contactSection.form.email.placeholder}
                        />
                      </div>

                      {/* ROW 3 */}
                      <div>
                        <label className="text-sm uppercase tracking-[0.25em] text-foreground/50">
                          {landingPageContent.contactSection.form.service.label}
                        </label>
                        <select
                          dir="rtl"
                          className="mt-3 w-full border-b border-transparent border-b-black/20 bg-transparent py-3 text-sm outline-none focus:border-transparent focus:border-b-[#C58D00] focus:outline-none focus:ring-0"
                        >
                          {landingPageContent.contactSection.form.service.options.map((item, index) => (
                            <option key={item.label + index}>{item.label}</option>
                          ))}
                        </select>
                      </div>

                      {/* ROW 4 */}
                      <div>
                        <label className="text-sm uppercase tracking-[0.25em] text-foreground/50">
                          {landingPageContent.contactSection.form.message.label}
                        </label>
                        <textarea
                          rows={4}
                          className="mt-3 w-full border-b border-transparent border-b-black/20 bg-transparent py-3 text-sm outline-none transition focus:border-transparent
focus:border-b-[#C58D00] focus:outline-none focus:ring-0"
                          placeholder={landingPageContent.contactSection.form.message.placeholder}
                        />
                      </div>

                      {/* BUTTON */}
                      <div className="pt-6">
                        <Button
                          className="
                  group
                  relative
                  h-14
                  w-full
                  rounded-none
                  border
                  border-[#C58D00]/40 bg-black
                  py-5
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  transition-all
                  duration-500
                  hover:bg-[#d69a06]
                "
                        >
                          {landingPageContent.contactSection.ctaText}
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </PageContainer>

            {/* BOTTOM ACCENT LINE */}
            <div className="mx-auto w-full max-w-7xl px-6 pb-24">
              <div className="bg-[#C58D00]/15 mt-24 h-px w-full" />
            </div>
          </section>

          {/*
          #c58d00
          #21326a
          #425573
          #22336A

          */}

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

          <footer className="relative overflow-hidden">
            {/* TOP BORDER */}
            <div className="absolute left-0 top-0 h-px w-full bg-black/5" />

            <PageContainer className="relative py-32">
              {/* HUGE BACKGROUND BRAND */}
              <div
                className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        select-none
        whitespace-nowrap
        font-serif
        text-white/[0.025]
      "
                style={{
                  fontSize: 'clamp(8rem, 20vw, 24rem)',
                }}
              >
                مارلين
              </div>

              {/* MAIN CONTENT */}
              <div className="relative z-10 grid grid-cols-1 gap-24 lg:grid-cols-12">
                {/* LEFT SIDE */}
                <div className="lg:col-span-5">
                  <img
                    src="https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=324,height=96,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1d84d4-4fb7-72eb-b27f-93edde22cb64.png"
                    alt=""
                    className="h-28 w-auto object-cover"
                  />

                  {/* HUGE TITLE */}
                  {/* <h2
                    className="
            mt-8
            max-w-4xl
            font-serif
            text-5xl
            font-light
            leading-[0.95]
            tracking-[-0.04em]
            md:text-7xl
          "
                    style={{
                      fontFamily: 'var(--font-robotoserif)',
                    }}
                  >
                    Precision-driven
                    <br />
                    aesthetic medicine
                  </h2> */}

                  {/* DESCRIPTION */}
                  <p className="mt-10 max-w-xl text-sm leading-relaxed text-foreground/60">
                    {landingPageContent.footer.shortDescription}
                  </p>
                </div>

                {/* RIGHT SIDE */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-2 gap-16">
                    {/* COLUMN */}
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-[#C58D00]">العيادة</p>

                      <div className="mt-8 space-y-5">
                        {landingPageContent.footer.links.clinic.map((item) => (
                          <a
                            key={item}
                            href="#"
                            className="text-foreground/65 block text-base transition hover:text-foreground"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* COLUMN */}
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-[#C58D00]">
                        {/* {landingPageContent.footer.links.contact.label} */}
                        تواصل معنا
                      </p>

                      <div className="text-foreground/65 mt-8 space-y-5 text-base">
                        {landingPageContent.contactSection.items.map((item, index) => (
                          <div key={item.label + index} className="flex items-center gap-2 text-lg">
                            {/* <p className="text-sm">{item.label}</p> */}
                            {item.icon}
                            <p className="block hover:text-foreground">{item.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM AREA */}
              <div className="relative z-10 mt-28">
                <div className="h-px w-full bg-foreground/10" />

                <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm uppercase tracking-[0.2em] text-foreground/40">
                    {landingPageContent.footer.copyright}
                  </p>

                  <div className="flex gap-10">
                    {['Instagram', 'Privacy Policy', 'Terms'].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="
                text-xs uppercase tracking-[0.2em]
                text-white/40
                transition
                hover:text-[#C58D00]
              "
                      >
                        {item}
                      </a>
                    ))}
                  </div>
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
