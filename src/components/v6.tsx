import {
  PlusIcon,
  ArrowUpLeft,
  Clock3,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Plus,
  Minus,
  ArrowLeft,
  Check,
  Star,
  ChevronDown,
  Twitter,
  MessageCircle,
  Menu,
  X,
} from 'lucide-react'
import { PageContainer } from './common/page-container'
import { Typography } from './ui/typography'
import React, { useState } from 'react'
import { cn } from 'src/lib/utils'
import { landingPageContent } from 'src/lib/data'
import { Button } from './ui/button'

export default function V6Page() {
  return (
    <>
      <Helmet>
        <title>نموذج 4</title>
      </Helmet>

      <div>
        <Header3 content={landingPageContent.header} />
        <V6 />
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

// Header.tsx

export function Header3({ content }: { content: any }) {
  const [open, setOpen] = useState(false)

  return (
    <header dir="rtl" className="sticky top-0 z-50 w-full">
      {/* ANNOUNCEMENT BAR */}
      {/* {content.announcementBar?.enabled && (
        <div className="bg-[#21326a] text-sm text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
            <p className="text-white/80">{content.announcementBar.text}</p>

            <div className="hidden items-center gap-6 text-white/70 md:flex">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#c58d00]" />
                <span>{content.announcementBar.phone}</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#c58d00]" />
                <span>{content.announcementBar.email}</span>
              </div>
            </div>
          </div>
        </div>
      )} */}

      {/* MAIN NAV */}
      <div className="border-b border-black/5 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-3">
            <img src={content.logo.image} alt={content.logo.alt} className="h-16 w-auto object-contain" />
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 text-base text-[#21326a] lg:flex">
            {content.navigation.map((item: any, idx: number) => (
              <a key={idx} href={item.href} className="transition hover:text-[#c58d00]">
                {item.label}
              </a>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Secondary CTA (WhatsApp) */}
            <a
              href={content.secondaryCTA.href}
              className="rounded-xl border border-[#21326a]/20 px-4 py-2 text-sm text-[#21326a] transition hover:border-[#c58d00] hover:text-[#c58d00]"
            >
              {content.secondaryCTA.text}
            </a>

            {/* Primary CTA */}
            <a
              href={content.cta.href}
              className="rounded-xl bg-primary px-5 py-2 text-sm text-white shadow-sm transition"
            >
              {content.cta.text}
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button onClick={() => setOpen(!open)} className="text-[#21326a] lg:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="border-t border-black/5 bg-white lg:hidden">
            <div className="space-y-4 px-6 py-4">
              {content.mobileNavigation.map((item: any, idx: number) => (
                <a
                  key={idx}
                  href={item.href}
                  className="block text-[#21326a] hover:text-[#c58d00]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <div className="space-y-3 border-t border-black/5 pt-4">
                <a
                  href={content.secondaryCTA.href}
                  className="block rounded-xl border border-[#21326a]/20 py-2 text-center text-[#21326a]"
                >
                  {content.secondaryCTA.text}
                </a>

                <a href={content.cta.href} className="block rounded-xl bg-[#c58d00] py-2 text-center text-white">
                  {content.cta.text}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

// HeroSection.tsx

import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet'

const metrics = [
  {
    value: '+30',
    label: 'سنة خبرة',
  },
  {
    value: 'خصوصية عالية',
    label: 'وتجربة راقية',
  },
]

export function HeroSection() {
  return (
    <section id="home" dir="rtl" className="relative overflow-hidden bg-[#f8f6f2]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#c58d00]/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#21326a]/5 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.7),rgba(248,246,242,1))]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-28 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <div className="relative z-10">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c58d00]/20 bg-white/80 px-4 py-2 backdrop-blur-xl"
            >
              {/* <Sparkles className="h-4 w-4 text-[#c58d00]" /> */}

              <span className="text-sm font-medium tracking-wide text-[#21326a]">عيادات مارلين • الرياض</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-2xl font-serif text-5xl text-[#21326a] sm:text-6xl lg:leading-[1.15]"
            >
              خبرة طبية متخصصة
              <br />
              <span className="text-[#c58d00]">في الجلدية والتجميل</span>
              <br />
              بمعايير حديثة
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 max-w-xl text-lg leading-9 text-[#425573]"
            >
              نقدم خدمات الجلدية والتجميل والليزر بإشراف أطباء مختصين، باستخدام أحدث التقنيات ضمن بيئة راقية وخصوصية
              عالية.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <button className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#c58d00] px-8 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#b88200] hover:shadow-[0_20px_40px_rgba(197,141,0,0.25)]">
                حجز موعد
                {/* <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" /> */}
              </button>

              <button className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-[#21326a]/10 bg-white/70 px-8 text-sm font-medium text-[#21326a] backdrop-blur-xl transition-all duration-300 hover:border-[#21326a]/20 hover:bg-white">
                {/* <Play className="h-4 w-4" /> */}
                استعرض الخدمات
              </button>
            </motion.div>

            {/* Metrics */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 grid grid-cols-3 gap-8 border-t border-[#21326a]/10 pt-8"
            >
              {metrics.map((item) => (
                <div key={item.label}>
                  <div className="text-2xl font-medium text-[#21326a]">{item.value}</div>

                  <div className="mt-2 text-sm leading-6 text-[#425573]">{item.label}</div>
                </div>
              ))}
            </motion.div> */}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-[40px] border border-white/50 shadow-[0_40px_100px_rgba(33,50,106,0.12)]">
              <img
                src="https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1ec4ab-0f58-be08-63d0-4a2b6a303f6905edd1b4-cb4e-484a-b855-feb1a84c9953-src_ar..jpg"
                alt="Marilyn Clinics"
                className="h-[720px] w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#21326a]/20 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-8 -left-8 hidden w-[320px] rounded-[32px] border border-white/50 bg-white/80 p-6 shadow-[0_20px_60px_rgba(33,50,106,0.12)] backdrop-blur-2xl lg:block"
            >
              <div className="mb-4 text-lg font-semibold text-[#21326a]">تجربة طبية راقية</div>

              <div className="space-y-4">
                {['أطباء مختصون ومعتمدون', 'أحدث الأجهزة والتقنيات', 'خصوصية وراحة في كل زيارة'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#c58d00]" />

                    <span className="text-sm text-[#425573]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// --gold: #c58d00;
// --navy: #21326a;
// --navy-soft: #22336A;
// --slate: #425573;
// --white: #ffffff;
// --cream: #f8f6f2;
// --light-gold: #f5ecd3;

const services = [
  {
    id: '01',
    title: {
      line1: 'علاجات',
      highlight: 'الجلدية',
    },
    description: 'تشخيص وعلاج مختلف مشاكل البشرة باستخدام خطط علاجية تناسب احتياج كل حالة.',
    image: 'https://images.pexels.com/photos/7581572/pexels-photo-7581572.jpeg',
  },
  {
    id: '02',
    title: {
      line1: 'خدمات',
      highlight: 'التجميل',
    },
    description: 'إجراءات تجميلية غير جراحية تهدف للحفاظ على مظهر طبيعي ومتوازن.',
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg',
  },
  {
    id: '03',
    title: {
      line1: 'تقنيات',
      highlight: 'الليزر',
    },
    description: 'أجهزة وتقنيات حديثة للعناية بالبشرة وإزالة الشعر وعلاج التصبغات.',
    image: 'https://images.pexels.com/photos/4586728/pexels-photo-4586728.jpeg',
  },
  {
    id: '04',
    title: {
      line1: 'العناية',
      highlight: 'بالشعر',
    },
    description: 'حلول متقدمة لمشاكل الشعر والفروة تحت إشراف طبي متخصص.',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg',
  },
]

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <section className="relative overflow-hidden bg-background py-32 text-foreground">
      <PageContainer size="full">
        {/* SECTION HEADER */}
        <div className="mb-20 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <SectionTag>الخدمات الطبية</SectionTag>

            <h2 className="mt-6 font-serif text-5xl font-light leading-[1.05] md:text-7xl">
              خدمات متخصصة
              <br />
              في <span className="text-[#C58D00]">الجلدية والتجميل</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-foreground/60">
            نقدم مجموعة من الخدمات الجلدية والتجميلية باستخدام تقنيات حديثة وخطط علاجية مناسبة لكل حالة.
          </p>
        </div>

        {/* SERVICES */}
        <div className="flex h-[620px] gap-3 overflow-hidden">
          {services.map((service, index) => {
            const isActive = activeIndex === index

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveIndex(index)}
                className={cn(
                  'group relative overflow-hidden border border-black/10 transition-all duration-700 ease-out',
                  isActive ? 'flex-[4]' : 'flex-[1.2]',
                )}
              >
                {/* IMAGE */}
                <img
                  src={service.image}
                  alt={service.title.highlight}
                  className={cn(
                    'duration-[1400ms] absolute inset-0 h-full w-full object-cover grayscale backdrop-grayscale transition-transform ease-out',
                    isActive ? 'scale-[1.03]' : 'scale-100',
                  )}
                />

                {/* OVERLAY */}
                <div
                  className={cn(
                    'absolute inset-0 transition-all duration-500',
                    isActive ? 'bg-black/45' : 'bg-black/25',
                  )}
                />

                {/* GOLD FRAME */}
                <div className="absolute inset-0 border border-[#C58D00]/0 transition-all duration-500 group-hover:border-[#C58D00]/30" />

                {/* LARGE BG NUMBER */}
                <div
                  className={cn(
                    'absolute left-8 top-8 font-serif text-8xl text-white/0 transition-all duration-700',
                    isActive && 'text-white/[0.08]',
                  )}
                >
                  {service.id}
                </div>

                {/* CONTENT */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-8">
                  {/* GOLD LINE */}
                  <div
                    className={cn('mb-6 h-px bg-[#C58D00] transition-all duration-700', isActive ? 'w-20' : 'w-10')}
                  />

                  {/* TITLE */}
                  <h3 className="font-serif text-3xl leading-tight text-white md:text-4xl">
                    {service.title.line1}
                    <br />
                    <span className="text-[#C58D00]">{service.title.highlight}</span>
                  </h3>

                  {/* DESCRIPTION */}
                  <div
                    className={cn(
                      'grid transition-all duration-500',
                      isActive ? 'mt-5 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-sm text-sm leading-relaxed text-white/75">{service.description}</p>

                      {/* CTA */}
                      <button className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C58D00]">
                        استكشف الخدمة
                        <ArrowUpLeft className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </PageContainer>
    </section>
  )
}

// ServicesSection.tsx

const services3 = [
  {
    id: '01',
    title: 'الجلدية',
    category: 'Dermatology',
    description: 'تشخيص وعلاج مختلف مشاكل البشرة باستخدام خطط علاجية متخصصة وتقنيات حديثة.',
    image: 'https://images.pexels.com/photos/7581572/pexels-photo-7581572.jpeg',
    large: true,
  },
  {
    id: '02',
    title: 'التجميل',
    category: 'Aesthetic',
    description: 'إجراءات تجميلية غير جراحية للحفاظ على مظهر طبيعي ومتوازن بأسلوب طبي احترافي.',
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg',
  },
  {
    id: '03',
    title: 'تقنيات الليزر',
    category: 'Laser',
    description: 'أحدث أجهزة الليزر للعناية بالبشرة وإزالة الشعر وعلاج التصبغات وآثار الحبوب.',
    image: 'https://images.pexels.com/photos/4586728/pexels-photo-4586728.jpeg',
  },
  {
    id: '04',
    title: 'العناية بالشعر',
    category: 'Hair Care',
    description: 'حلول متقدمة للعناية بالشعر والفروة ضمن خطط علاجية مخصصة لكل حالة.',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg',
  },
]

export function ServicesSection3() {
  const featured = services[0]
  const gridServices = services.slice(1)

  return (
    <section id="services" dir="rtl" className="relative overflow-hidden bg-white py-32">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[#c58d00]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex rounded-full border border-[#c58d00]/20 bg-[#c58d00]/5 px-4 py-2 text-sm font-medium text-[#c58d00]">
            الخدمات الطبية
          </div>

          <h2 className="font-serif text-4xl font-normal text-[#21326a] sm:text-5xl lg:leading-[1.2]">
            حلول متقدمة
            <br />
            <span className="text-[#c58d00]">في الجلدية والتجميل</span>
            <br />
            والعناية بالبشرة
          </h2>

          <p className="mt-8 text-lg leading-9 text-[#425573]">
            نقدم مجموعة متكاملة من الخدمات الطبية والتجميلية باستخدام أحدث التقنيات وبإشراف أطباء مختصين.
          </p>
        </div>

        {/* Featured Card */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.4 }}
          className="border-[#21326a]/6 group relative mt-20 overflow-hidden rounded-[40px] border bg-[#f8f6f2]"
        >
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title.line1}
                className="h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#21326a]/10" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-10 lg:p-16">
              <div className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-[#c58d00]">{featured.id}</div>

              <h3 className="text-4xl font-medium text-[#21326a]">
                {featured.title.line1}
                <br />
                {featured.title.highlight}
              </h3>

              <p className="mt-6 max-w-xl text-lg leading-9 text-[#425573]">{featured.description}</p>

              <button className="group mt-10 inline-flex w-fit items-center gap-3 text-sm font-medium text-[#21326a]">
                استعرض الخدمة
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {gridServices.map((service, index) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
              className={`border-[#21326a]/6 group overflow-hidden rounded-[36px] border bg-white ${
                index === 1 ? 'lg:mt-16' : ''
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title.line1}
                  className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#21326a]/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#c58d00]">
                  {service.category}
                </div> */}

                <h3 className="text-2xl font-medium text-[#21326a]">
                  {service.title.line1} {service.title.highlight}
                </h3>

                <p className="mt-4 text-base leading-8 text-[#425573]">{service.description}</p>

                <button className="group mt-8 inline-flex items-center gap-3 text-sm font-medium text-[#21326a]">
                  استعرض الخدمة
                  <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <button className="inline-flex h-14 items-center justify-center rounded-full bg-[#21326a] px-10 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1b2957] hover:shadow-[0_20px_40px_rgba(33,50,106,0.2)]">
            عرض جميع الخدمات
          </button>
        </div>
      </div>
    </section>
  )
}

const services2 = [
  {
    id: '01',
    title: {
      line1: 'علاجات',
      highlight: 'الجلدية',
    },
    description: 'تشخيص وعلاج مختلف مشاكل البشرة باستخدام خطط علاجية تناسب احتياج كل حالة.',
    image: 'https://images.pexels.com/photos/7581572/pexels-photo-7581572.jpeg',
  },
  {
    id: '02',
    title: {
      line1: 'خدمات',
      highlight: 'التجميل',
    },
    description: 'إجراءات تجميلية غير جراحية تهدف للحفاظ على مظهر طبيعي ومتوازن.',
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg',
  },
  {
    id: '03',
    title: {
      line1: 'تقنيات',
      highlight: 'الليزر',
    },
    description: 'أجهزة وتقنيات حديثة للعناية بالبشرة وإزالة الشعر وعلاج التصبغات.',
    image: 'https://images.pexels.com/photos/4586728/pexels-photo-4586728.jpeg',
  },
  {
    id: '04',
    title: {
      line1: 'العناية',
      highlight: 'بالشعر',
    },
    description: 'حلول متقدمة لمشاكل الشعر والفروة تحت إشراف طبي متخصص.',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg',
  },
]

export function ServicesSection2() {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <Section id="services" className="relative overflow-hidden bg-background py-24 text-foreground md:py-32">
      <PageContainer>
        {/* HEADER */}
        <div className="mb-14 flex flex-col gap-8 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SectionTag>الخدمات الطبية</SectionTag>

            {/* <h2 className="mt-5 font-serif text-4xl font-light leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
              خدمات متخصصة
              <br />
              في <span className="text-[#C58D00]">الجلدية والتجميل</span>
            </h2> */}

            <SectionTitle
              title={
                <>
                  خدمات متخصصة
                  <br />
                  في <span className="text-[#C58D00]">الجلدية والتجميل</span>
                </>
              }
            />
          </div>

          <p className="max-w-md text-sm leading-relaxed text-foreground/60 md:text-base">
            نقدم مجموعة من الخدمات الجلدية والتجميلية باستخدام تقنيات حديثة وخطط علاجية مناسبة لكل حالة.
          </p>
        </div>
      </PageContainer>

      <PageContainer size="full">
        {/* MOBILE LAYOUT */}
        <div className="grid gap-4 lg:hidden">
          {services2.map((service, i) => (
            <article key={service.id} className="group relative h-[460px] overflow-hidden border bg-black">
              {/* IMAGE */}
              <img
                src={service.image}
                alt={service.title.highlight}
                className="duration-[1600ms] absolute inset-0 h-full w-full object-cover transition-transform ease-out group-hover:scale-[1.03]"
              />

              {/* CINEMATIC OVERLAY */}
              <div className="via-[#16120f]/35 absolute inset-0 bg-gradient-to-t from-[#16120f]/95 to-transparent" />

              {/* GOLD FRAME */}
              <div className="border-[#C58D00]/15 absolute inset-0 border" />

              {/* BG NUMBER */}
              <div className="absolute left-6 top-6 font-serif text-7xl text-white/[0.1]">{`0${i + 1}`}</div>

              {/* CONTENT */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                <div className="bg-black/10 p-1 backdrop-blur-[2px]">
                  <div className="mb-5 h-px w-16 bg-[#C58D00]" />

                  <div className="min-h-[140px]">
                    <h3
                      className="font-serif text-3xl leading-tight text-white"
                      style={{
                        textShadow: '0 2px 14px rgba(0,0,0,0.25)',
                      }}
                    >
                      {service.title.line1}
                      <br />
                      <span className="text-[#C58D00]">{service.title.highlight}</span>
                    </h3>

                    <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">{service.description}</p>
                  </div>

                  <button className="mt-7 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C58D00]">
                    استكشف الخدمة
                    <ArrowUpLeft className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden h-[640px] gap-3 overflow-hidden lg:flex">
          {services.map((service, index) => {
            const isActive = activeIndex === index

            return (
              <article
                key={service.id}
                onMouseEnter={() => setActiveIndex(index)}
                className={cn(
                  'group relative overflow-hidden border bg-black transition-all duration-700 ease-out',
                  isActive ? 'flex-[4]' : 'flex-[1.15]',
                )}
              >
                {/* IMAGE */}
                <img
                  src={service.image}
                  alt={service.title.highlight}
                  className={cn(
                    'duration-[1600ms] absolute inset-0 h-full w-full object-cover transition-transform ease-out',
                    isActive ? 'scale-[1.03]' : 'scale-100',
                  )}
                />

                {/* CINEMATIC OVERLAY */}
                <div
                  className={cn(
                    'absolute inset-0 transition-all duration-500',
                    isActive
                      ? 'via-[#16120f]/45 bg-gradient-to-t from-[#16120f]/95 to-transparent'
                      : 'bg-gradient-to-t from-[#16120f]/80 via-[#16120f]/20 to-transparent',
                  )}
                />

                {/* GOLD FRAME */}
                <div className="absolute inset-0 border border-[#C58D00]/0 transition-all duration-500 group-hover:border-[#C58D00]/25" />

                {/* BG NUMBER */}
                <div
                  className={cn(
                    'absolute left-8 top-8 font-serif text-8xl transition-all duration-700',
                    isActive ? 'text-white/[0.08]' : 'text-white/[0.03]',
                  )}
                >
                  {service.id}
                </div>

                {/* CONTENT */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-8">
                  <div
                    className={cn(
                      'transition-all duration-500',
                      isActive ? 'bg-black/10 backdrop-blur-[2px]' : 'bg-transparent',
                    )}
                  >
                    {/* GOLD LINE */}
                    <div
                      className={cn('mb-6 h-px bg-[#C58D00] transition-all duration-700', isActive ? 'w-20' : 'w-10')}
                    />

                    <div className="min-h-[180px]">
                      {/* TITLE */}
                      <h3
                        className="font-serif text-3xl leading-tight text-white md:text-4xl"
                        style={{
                          textShadow: '0 2px 14px rgba(0,0,0,0.25)',
                        }}
                      >
                        {service.title.line1}
                        <br />
                        <span className="text-[#C58D00]">{service.title.highlight}</span>
                      </h3>

                      {/* DESCRIPTION */}
                      <div
                        className={cn(
                          'grid transition-all duration-500',
                          isActive ? 'mt-5 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0',
                        )}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-sm text-sm leading-relaxed text-white/75">{service.description}</p>

                          {/* CTA */}
                          <button className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C58D00]">
                            استكشف الخدمة
                            <ArrowUpLeft className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </PageContainer>
    </Section>
  )
}

export function TechnologySection() {
  return (
    <section className="relative overflow-hidden py-24 text-foreground md:py-32">
      {/* BG Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <PageContainer className="relative">
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionTag>{landingPageContent.technologySection.label}</SectionTag>

            {/* <h2 className="mt-6 font-serif text-5xl font-light leading-[1.05] md:text-6xl lg:text-7xl">
              {landingPageContent.technologySection.title.line1}{' '}
              <span className="text-[#C58D00]">{landingPageContent.technologySection.title.highlight}</span>
              <br />
              {landingPageContent.technologySection.title.line2}
            </h2> */}

            <SectionTitle
              title={
                <>
                  {landingPageContent.technologySection.title.line1}{' '}
                  <span className="text-[#C58D00]">{landingPageContent.technologySection.title.highlight}</span>
                  <br />
                  {landingPageContent.technologySection.title.line2}
                </>
              }
            />
          </div>

          <div className="lg:col-span-5">
            <p className="text-foreground/65 max-w-lg text-base leading-relaxed">
              {landingPageContent.technologySection.description}
            </p>
          </div>
        </div>

        {/* TECHNOLOGIES GRID */}
        <div className="mt-20 grid gap-px bg-black/10 lg:grid-cols-2">
          {landingPageContent.technologySection.technologies.map((item) => (
            <article key={item.name} className="group relative overflow-hidden bg-[#f7f5f1]">
              <div className="grid min-h-[520px] lg:grid-cols-2">
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="duration-[1600ms] h-full w-full object-cover transition-transform ease-out group-hover:scale-[1.05]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col justify-between p-8 md:p-10">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.25em] text-[#C58D00]">{item.category}</span>

                      <ArrowUpLeft className="h-5 w-5 text-foreground/30 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C58D00]" />
                    </div>

                    <h3 className="mt-10 font-serif text-3xl leading-tight md:text-4xl">{item.name}</h3>

                    <p className="text-foreground/65 mt-6 text-sm leading-relaxed md:text-base">{item.description}</p>
                  </div>

                  {/* GOLD LINE */}
                  <div className="mt-10 h-px w-20 bg-[#C58D00]/40 transition-all duration-500 group-hover:w-32" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}

export function DoctorsSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 text-foreground md:py-32">
      <PageContainer>
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionTag>{landingPageContent.doctorsSection.label}</SectionTag>

            <h2 className="mt-6 font-serif text-5xl font-light leading-[1.05] md:text-6xl lg:text-7xl">
              {landingPageContent.doctorsSection.title.line1}{' '}
              <span className="text-[#C58D00]">{landingPageContent.doctorsSection.title.highlight}</span>
              <br />
              {landingPageContent.doctorsSection.title.line2}
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-foreground/65 max-w-lg text-base leading-relaxed">
              {landingPageContent.doctorsSection.description}
            </p>
          </div>
        </div>

        {/* VALUES */}
        <div className="mt-14 grid gap-px bg-black/10 md:grid-cols-2 lg:grid-cols-4">
          {landingPageContent.doctorsSection.values.map((item) => (
            <div key={item} className="bg-background px-6 py-7">
              <div className="mb-5 h-px w-10 bg-[#C58D00]" />

              <p className="text-sm leading-relaxed text-foreground/70">{item}</p>
            </div>
          ))}
        </div>

        {/* DOCTORS */}
        <div className="mt-20 grid gap-px bg-black/10 lg:grid-cols-2">
          {landingPageContent.doctorsSection.doctors.map((doctor) => (
            <article key={doctor.name} className="group relative overflow-hidden bg-background">
              <div className="grid lg:grid-cols-[1fr_1.1fr]">
                {/* IMAGE */}
                <div className="relative h-fit overflow-hidden">
                  <img
                    src={doctor.image2}
                    alt={doctor.name}
                    className="duration-[1600ms] h-[520px] w-full object-cover object-top transition-transform ease-out group-hover:scale-[1.03]"
                  />

                  {/* GOLD FRAME */}
                  <div className="absolute inset-0 border border-[#C58D00]/10" />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col justify-between p-8 md:p-10">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.25em] text-[#C58D00]">
                        {doctor.shortSpecialty}
                      </span>

                      <span className="text-xs text-foreground/40">{doctor.experience}</span>
                    </div>

                    <h3 className="mt-6 font-serif text-3xl leading-tight md:text-4xl">{doctor.name}</h3>

                    <p className="mt-5 text-base leading-relaxed text-foreground/75">{doctor.specialty}</p>

                    {/* QUALIFICATIONS */}
                    <div className="mt-10 space-y-4">
                      {doctor.qualifications.map((item) => (
                        <div key={item} className="flex items-start gap-4">
                          <div className="mt-2 h-px w-8 bg-[#C58D00]/50" />

                          <p className="text-foreground/65 text-sm leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>

                    {/* DESCRIPTION */}
                    <p className="mt-10 border-t border-black/10 pt-8 text-sm leading-relaxed text-foreground/60">
                      {doctor.credentials}
                    </p>
                  </div>

                  {/* CTA */}
                  <button className="mt-10 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C58D00]">
                    عرض الملف الطبي
                    <ArrowUpLeft className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* FOOTER CTA */}
        <div className="mt-20 flex justify-center">
          <button className="group flex items-center gap-4 border border-black/10 px-8 py-5 text-sm transition-all duration-300 hover:border-[#C58D00]/40 hover:bg-[#C58D00]/[0.03]">
            <span>{landingPageContent.doctorsSection.cta.text}</span>

            <ArrowUpLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </button>
        </div>
      </PageContainer>
    </section>
  )
}

export function BeforeAfterSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f1] py-24 text-foreground md:py-32">
      <PageContainer>
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionTag>{beforeAfterSection.label}</SectionTag>

            <SectionTitle
              title={
                <>
                  {beforeAfterSection.title.line1}{' '}
                  <span className="text-[#C58D00]">{beforeAfterSection.title.highlight}</span>
                  <br />
                  {beforeAfterSection.title.line2}
                </>
              }
            />
          </div>

          <div className="lg:col-span-5">
            <p className="text-foreground/65 max-w-lg text-base leading-relaxed">{beforeAfterSection.description}</p>
          </div>
        </div>

        {/* RESULTS GRID */}
        <div className="mt-20 grid gap-px bg-black/10 md:grid-cols-3">
          {beforeAfterSection.items.map((item, idx) => (
            <article key={idx} className="group relative overflow-hidden bg-background">
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  // src={item.image}
                  src={
                    'https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1ec4a7-b881-7d54-8416-a1601a411c174bd3bdc1-adbe-4630-b5c0-7ca16cdba3f3-src_ar..png'
                  }
                  alt={item.title}
                  className="
                    duration-[1600ms]
                    aspect-square
                    w-full
                    object-cover
                    transition-transform
                    ease-out
                    group-hover:scale-[1.03]
                  "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* GOLD FRAME */}
                <div className="absolute inset-0 border border-[#C58D00]/10 transition-all duration-500 group-hover:border-[#C58D00]/25" />

                {/* NUMBER */}
                <div className="absolute left-8 top-8 font-serif text-8xl text-white/[0.06]">{`0${idx + 1}`}</div>

                {/* CONTENT */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-8">
                  {/* GOLD LINE */}
                  <div className="mb-6 h-px w-16 bg-[#C58D00] transition-all duration-500 group-hover:w-24" />

                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <span className="text-xs uppercase tracking-[0.25em] text-[#C58D00]">{item.category}</span>

                      <h3
                        className="mt-4 font-serif text-3xl leading-tight text-white md:text-4xl"
                        style={{
                          textShadow: '0 2px 14px rgba(0,0,0,0.25)',
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <ArrowUpLeft className="h-5 w-5 text-white/70 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* DISCLAIMER */}
        <div className="mt-10 border-t border-black/10 pt-6">
          <p className="text-foreground/55 max-w-3xl text-sm leading-relaxed">{beforeAfterSection.disclaimer}</p>
        </div>
      </PageContainer>
    </section>
  )
}

export function BeforeAfterSection2() {
  return (
    <section className="relative overflow-hidden bg-background py-24 text-foreground md:py-32">
      <PageContainer>
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionTag>{beforeAfterSection.label}</SectionTag>

            <SectionTitle
              title={
                <>
                  {beforeAfterSection.title.line1}{' '}
                  <span className="text-[#C58D00]">{beforeAfterSection.title.highlight}</span>
                  <br />
                  {beforeAfterSection.title.line2}
                </>
              }
            />
          </div>

          <div className="lg:col-span-5">
            <p className="text-foreground/65 max-w-lg text-base leading-relaxed">{beforeAfterSection.description}</p>
          </div>
        </div>

        {/* RESULTS GRID */}
        <div className="mt-20 grid gap-4 md:grid-cols-2">
          {beforeAfterSection.items.map((item, idx) => (
            <article key={idx} className="group relative overflow-hidden bg-black">
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  // src={item.image}
                  src={
                    'https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1ec4a7-b881-7d54-8416-a1601a411c174bd3bdc1-adbe-4630-b5c0-7ca16cdba3f3-src_ar..png'
                  }
                  alt={item.title}
                  className="
                    duration-[1800ms]
                    h-[520px]
                    w-full
                    object-cover
                    transition-transform
                    ease-out
                    group-hover:scale-[1.03]
                  "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* GOLD FRAME */}
                <div className="absolute inset-0 border border-[#C58D00]/10 transition-all duration-500 group-hover:border-[#C58D00]/25" />

                {/* NUMBER */}
                <div className="absolute left-8 top-8 font-serif text-8xl text-white/[0.05]">{`0${idx + 1}`}</div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-8">
                  {/* GOLD LINE */}
                  <div className="mb-6 h-px w-16 bg-[#C58D00] transition-all duration-500 group-hover:w-28" />

                  {/* CATEGORY */}
                  <span className="text-xs uppercase tracking-[0.25em] text-[#C58D00]">{item.category}</span>

                  {/* TITLE */}
                  <h3
                    className="mt-4 max-w-md font-serif text-3xl leading-tight text-white md:text-4xl"
                    style={{
                      textShadow: '0 2px 14px rgba(0,0,0,0.25)',
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* DISCLAIMER */}
        <div className="mt-14 border-t border-black/10 pt-6">
          <p className="max-w-2xl text-sm leading-relaxed text-foreground/50">{beforeAfterSection.disclaimer}</p>
        </div>
      </PageContainer>
    </section>
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

export function DoctorsSectionMinimal() {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <PageContainer>
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionTag>الأطباء</SectionTag>

          <SectionTitle
            title={
              <>
                {landingPageContent.doctorsSection.title.line1}
                <br />
                <span className="text-[#C58D00]">{landingPageContent.doctorsSection.title.highlight}</span>
                <br />
                {landingPageContent.doctorsSection.title.line2}
              </>
            }
          />

          <p className="mt-8 text-base leading-relaxed text-foreground/60">
            {landingPageContent.doctorsSection.description}
          </p>
        </div>

        {/* DOCTORS GRID */}
        {/* center */}
        <div className="mt-20 grid gap-10 md:grid-cols-2">
          {landingPageContent.doctorsSection.doctors.map((doctor) => (
            <article key={doctor.name} className="group relative">
              {/* IMAGE */}
              <div className="relative aspect-square overflow-hidden bg-black/5">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="duration-[1600ms] h-full w-full object-cover transition-transform group-hover:scale-[1.03]"
                />

                {/* soft fade for text readability */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" /> */}
              </div>

              {/* CONTENT */}
              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.25em] text-[#C58D00]">{doctor.specialty}</p>

                <h3 className="mt-3 font-serif text-3xl font-light">{doctor.name}</h3>

                <p className="mt-4 text-sm leading-relaxed text-foreground/60">{doctor.credentials}</p>

                {/* CTA */}
                <button className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C58D00] transition-transform group-hover:translate-x-1">
                  عرض التفاصيل
                  <ArrowUpLeft className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}

export function ContactSection2() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 text-foreground md:py-32">
      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)',
            backgroundSize: '90px 90px',
          }}
        />
      </div>

      <PageContainer className="relative">
        <div className="grid items-start gap-20 lg:grid-cols-12">
          {/* LEFT */}
          <div className="lg:col-span-5">
            <SectionTag>تواصل معنا</SectionTag>

            {/* <h2 className="mt-6 font-serif text-5xl font-light leading-[1.02] tracking-[-0.04em] md:text-6xl lg:text-7xl">
              احجز موعدك
              <br />
              <span className="text-[#C58D00]">بكل سهولة</span>
            </h2> */}

            <SectionTitle
              title={
                <>
                  احجز موعدك
                  <br />
                  <span className="text-[#C58D00]">بكل سهولة</span>
                </>
              }
            />

            <p className="mt-10 max-w-md text-base leading-relaxed text-foreground/60">
              يسعد فريق العيادة باستقبال استفساراتكم ومساعدتكم في اختيار الخدمة المناسبة وحجز الموعد.
            </p>

            {/* divider */}
            <div className="mt-12 h-px w-20 bg-[#C58D00]/40" />

            {/* contact info */}
            <div className="mt-12 space-y-10">
              <div>
                <p className="text-foreground/35 text-xs uppercase tracking-[0.25em]">الهاتف</p>

                <a
                  href="tel:0115444888"
                  className="mt-3 block text-2xl font-light transition-colors hover:text-[#C58D00]"
                >
                  0115444888
                </a>
              </div>

              <div>
                <p className="text-foreground/35 text-xs uppercase tracking-[0.25em]">البريد الإلكتروني</p>

                <a
                  href="mailto:info@marilynclinics.com"
                  className="mt-3 block text-lg text-foreground/75 transition-colors hover:text-[#C58D00]"
                >
                  info@marilynclinics.com
                </a>
              </div>

              <div>
                <p className="text-foreground/35 text-xs uppercase tracking-[0.25em]">الموقع</p>

                <p className="mt-3 max-w-sm text-lg leading-relaxed text-foreground/75">
                  طريق الملك عبدالله،
                  <br />
                  حي القدس، الرياض
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-14">
              {/* top */}
              <div className="flex items-center justify-between border-b border-black/10 pb-8">
                <div>
                  <h3 className="font-serif text-3xl font-light md:text-4xl">طلب حجز موعد</h3>

                  <p className="mt-3 text-sm text-foreground/50">اترك بياناتك وسيتم التواصل معك قريباً.</p>
                </div>

                <ArrowUpLeft className="hidden h-5 w-5 text-[#C58D00] md:block" />
              </div>

              {/* form */}
              <form className="mt-10 grid gap-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <label className="text-foreground/45 text-sm">الاسم</label>

                    <input
                      type="text"
                      placeholder="الاسم الكامل"
                      className="
                        mt-4
                        h-14
                        w-full
                        border-0
                        border-b
                        border-black/10
                        bg-transparent
                        px-0
                        text-base
                        outline-none
                        transition-all
                        placeholder:text-foreground/25
                        focus:border-[#C58D00]
                      "
                    />
                  </div>

                  <div>
                    <label className="text-foreground/45 text-sm">رقم الهاتف</label>

                    <input
                      type="text"
                      placeholder="05XXXXXXXX"
                      className="
                        mt-4
                        h-14
                        w-full
                        border-0
                        border-b
                        border-black/10
                        bg-transparent
                        px-0
                        text-base
                        outline-none
                        transition-all
                        placeholder:text-foreground/25
                        focus:border-[#C58D00]
                      "
                    />
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <label className="text-foreground/45 text-sm">الخدمة</label>

                    <select
                      className="
                        mt-4
                        h-14
                        w-full
                        border-0
                        border-b
                        border-black/10
                        bg-transparent
                        px-0
                        text-base
                        outline-none
                        transition-all
                        focus:border-[#C58D00]
                      "
                    >
                      <option>الجلدية</option>
                      <option>التجميل</option>
                      <option>الليزر</option>
                      <option>العناية بالبشرة</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-foreground/45 text-sm">وقت التواصل</label>

                    <input
                      type="text"
                      placeholder="مثلاً بعد 5 مساءً"
                      className="
                        mt-4
                        h-14
                        w-full
                        border-0
                        border-b
                        border-black/10
                        bg-transparent
                        px-0
                        text-base
                        outline-none
                        transition-all
                        placeholder:text-foreground/25
                        focus:border-[#C58D00]
                      "
                    />
                  </div>
                </div>

                <div>
                  <label className="text-foreground/45 text-sm">ملاحظات</label>

                  <textarea
                    rows={4}
                    placeholder="أي تفاصيل إضافية..."
                    className="
                      mt-4
                      w-full
                      resize-none
                      border-0
                      border-b
                      border-black/10
                      bg-transparent
                      px-0
                      py-4
                      text-base
                      outline-none
                      transition-all
                      placeholder:text-foreground/25
                      focus:border-[#C58D00]
                    "
                  />
                </div>

                {/* button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-4
                      border
                      border-black/10
                      px-8
                      py-5
                      text-sm
                      transition-all
                      duration-300
                      hover:border-[#C58D00]/40
                      hover:bg-[#C58D00]/[0.03]
                    "
                  >
                    إرسال الطلب
                    <ArrowUpLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C58D00]" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-primary py-24 text-white md:py-32">
      {/* BACKGROUND IMAGE */}

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <PageContainer className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* LEFT */}
          <div className="lg:col-span-5">
            <SectionTag className="border-white/10 bg-white/5 text-white">تواصل معنا</SectionTag>

            <h2 className="mt-6 font-serif text-5xl font-light leading-[1.05] md:text-6xl">
              احجز موعدك
              <br />
              <span className="text-[#C58D00]">أو تواصل معنا</span>
            </h2>

            <p className="mt-8 max-w-md text-base leading-relaxed text-white/70">
              فريق العيادة جاهز للإجابة على استفساراتكم ومساعدتكم في اختيار الخدمة المناسبة وحجز الموعد بكل سهولة.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-14 space-y-8">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5">
                  <Phone className="h-5 w-5 text-[#C58D00]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">الهاتف</p>

                  <a href="tel:0115444888" className="mt-2 block text-lg transition-colors hover:text-[#C58D00]">
                    0115444888
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5">
                  <Mail className="h-5 w-5 text-[#C58D00]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">البريد الإلكتروني</p>

                  <a
                    href="mailto:info@marilynclinics.com"
                    className="mt-2 block text-lg transition-colors hover:text-[#C58D00]"
                  >
                    info@marilynclinics.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5">
                  <MapPin className="h-5 w-5 text-[#C58D00]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">الموقع</p>

                  <p className="mt-2 max-w-sm text-lg leading-relaxed text-white/80">
                    طريق الملك عبدالله،
                    <br />
                    حي القدس، الرياض
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5">
                  <Clock3 className="h-5 w-5 text-[#C58D00]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">أوقات العمل</p>

                  <p className="mt-2 text-lg text-white/80">يومياً من 1 ظهراً حتى 10 مساءً</p>
                </div>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="mt-14 flex items-center gap-4">
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5 transition-all duration-300 hover:border-[#C58D00]/30 hover:bg-[#C58D00]/10"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5 transition-all duration-300 hover:border-[#C58D00]/30 hover:bg-[#C58D00]/10"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="lg:col-span-7">
            <div className="border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md md:p-12">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <h3 className="font-serif text-3xl">طلب حجز موعد</h3>

                  <p className="mt-3 text-sm text-white/60">اترك بياناتك وسيتم التواصل معك لتأكيد الموعد.</p>
                </div>

                <div className="hidden h-14 w-14 items-center justify-center border border-[#C58D00]/20 bg-[#C58D00]/10 md:flex">
                  <ArrowUpLeft className="h-5 w-5 text-[#C58D00]" />
                </div>
              </div>

              <form className="mt-10 grid gap-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-sm text-white/60">الاسم</label>

                    <input
                      type="text"
                      placeholder="الاسم الكامل"
                      className="h-14 w-full border border-white/10 bg-white/[0.03] px-5 text-white outline-none transition-all placeholder:text-white/30 focus:border-[#C58D00]/40 focus:bg-white/[0.05]"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm text-white/60">رقم الهاتف</label>

                    <input
                      type="text"
                      placeholder="05XXXXXXXX"
                      className="h-14 w-full border border-white/10 bg-white/[0.03] px-5 text-white outline-none transition-all placeholder:text-white/30 focus:border-[#C58D00]/40 focus:bg-white/[0.05]"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-sm text-white/60">الخدمة المطلوبة</label>

                    <select className="h-14 w-full border border-white/10 bg-white/[0.03] px-5 text-white outline-none transition-all focus:border-[#C58D00]/40 focus:bg-white/[0.05]">
                      <option className="bg-[#111827]">الجلدية</option>

                      <option className="bg-[#111827]">الليزر</option>

                      <option className="bg-[#111827]">التجميل</option>

                      <option className="bg-[#111827]">العناية بالبشرة</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-3 block text-sm text-white/60">الوقت المناسب للتواصل</label>

                    <input
                      type="text"
                      placeholder="مثلاً: بعد 5 مساءً"
                      className="h-14 w-full border border-white/10 bg-white/[0.03] px-5 text-white outline-none transition-all placeholder:text-white/30 focus:border-[#C58D00]/40 focus:bg-white/[0.05]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-sm text-white/60">ملاحظات</label>

                  <textarea
                    rows={5}
                    placeholder="اكتب أي تفاصيل إضافية هنا..."
                    className="w-full border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition-all placeholder:text-white/30 focus:border-[#C58D00]/40 focus:bg-white/[0.05]"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-4 flex h-14 items-center justify-center gap-3 bg-[#C58D00] px-8 text-sm text-black transition-all duration-300 hover:bg-[#d39a07]"
                >
                  إرسال الطلب
                  <ArrowUpLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: 'هل تحتاج الجلسات إلى وقت للتعافي؟',
      a: 'يعتمد ذلك على نوع الإجراء، لكن معظم الجلسات لدينا لا تتطلب فترة تعافي طويلة ويمكن العودة للحياة اليومية بشكل طبيعي.',
    },
    {
      q: 'هل يتم تخصيص العلاج لكل حالة؟',
      a: 'نعم، يتم تقييم الحالة بشكل طبي أولاً ثم يتم وضع خطة علاج مناسبة لكل مراجع حسب احتياجه.',
    },
    {
      q: 'هل النتائج فورية؟',
      a: 'بعض الإجراءات تعطي نتائج مباشرة، بينما تحتاج إجراءات أخرى إلى فترة قصيرة لظهور النتائج النهائية.',
    },
    {
      q: 'هل الإجراءات آمنة؟',
      a: 'جميع الإجراءات تتم تحت إشراف أطباء مختصين وباستخدام أجهزة وتقنيات معتمدة طبياً.',
    },
  ]

  return (
    <section className="relative py-28 lg:py-44">
      <PageContainer size="xs">
        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <SectionTag>الأسئلة الشائعة</SectionTag>

          <h2 className="mt-6 font-serif text-5xl font-light leading-[1.1] lg:text-6xl">
            معلومات
            <span className="text-[#C58D00]"> مهمة</span>
            <br />
            قبل الحجز
          </h2>

          <p className="mt-6 text-muted-foreground">
            إجابات على أكثر الأسئلة شيوعاً حول الخدمات والإجراءات داخل العيادة.
          </p>
        </div>

        {/* FAQ LIST (architectural layout) */}
        <div className="mt-16 border-t border-border">
          {landingPageContent.faq.items.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div key={index} className="border-b border-border">
                {/* QUESTION */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between py-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    {/* gold indicator line */}
                    <div className={`h-px w-8 transition-all ${isOpen ? 'bg-[#C58D00]' : 'bg-border'}`} />

                    <p className="text-lg text-foreground">{item.question}</p>
                  </div>

                  {/* icon */}
                  <div className="text-muted-foreground">{isOpen ? <Minus size={18} /> : <Plus size={18} />}</div>
                </button>

                {/* ANSWER */}
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                  <p className="ml-12 max-w-2xl text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* FOOT NOTE */}
        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs tracking-[0.3em] text-muted-foreground">للاستفسارات الطبية الخاصة — يرجى حجز موعد</p>
        </div>
      </PageContainer>
    </section>
  )
}

const beforeAfterSection = {
  label: 'النتائج',

  title: {
    line1: 'نتائج واقعية',
    highlight: 'قبل وبعد',
    line2: 'بخطط علاجية مناسبة',
  },

  description:
    'نعرض بعض النتائج لحالات تم علاجها داخل العيادة باستخدام تقنيات مختلفة، مع مراعاة أن النتائج قد تختلف من شخص لآخر حسب الحالة ونوع العلاج.',

  disclaimer: 'النتائج تختلف من حالة إلى أخرى ويتم تحديد الخطة المناسبة بعد الاستشارة الطبية.',

  items: [
    {
      title: 'علاج آثار حب الشباب',
      category: 'الجلدية والليزر',

      beforeImage: '/images/before-1.jpg',
      afterImage: '/images/after-1.jpg',
    },

    {
      title: 'توريد وتناسق الشفاه',
      category: 'التجميل غير الجراحي',

      beforeImage: '/images/before-2.jpg',
      afterImage: '/images/after-2.jpg',
    },

    {
      title: 'جلسات توحيد لون البشرة',
      category: 'العناية بالبشرة',

      beforeImage: '/images/before-3.jpg',
      afterImage: '/images/after-3.jpg',
    },
    {
      title: 'علاج آثار حب الشباب',
      category: 'الجلدية والليزر',

      beforeImage: '/images/before-1.jpg',
      afterImage: '/images/after-1.jpg',
    },

    {
      title: 'توريد وتناسق الشفاه',
      category: 'التجميل غير الجراحي',

      beforeImage: '/images/before-2.jpg',
      afterImage: '/images/after-2.jpg',
    },
  ],
}

// BeforeAfterSection.tsx

const results2 = [
  {
    id: '01',
    image:
      'https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1ec4a7-b881-7d54-8416-a1601a411c174bd3bdc1-adbe-4630-b5c0-7ca16cdba3f3-src_ar..png',
  },
  {
    id: '02',
    image:
      'https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1ec4fd-ffaa-9a97-696d-ab786ad8b40eefdaeaad-b158-4d45-a5c1-77b867a6eb09-src_ar..png',
  },
  {
    id: '03',
    image:
      'https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1d8563-3621-0e4d-a5f8-26ec1a26a2bedd97e053-5a26-4ca2-ae0e-e2918db5a666-src_ar..png',
  },
  {
    id: '04',
    image:
      'https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1d8563-3621-0e4d-a5f8-26ec1a26a2beee1dcd48-2a59-49b9-8783-d60734d2caf7-src_ar..png',
  },
  {
    id: '05',
    image:
      'https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1d8563-3621-0e4d-a5f8-26ec1a26a2be21c87cb5-6cda-4349-a708-46db9f8968b0-src_ar..png',
  },
  {
    id: '06',
    image:
      'https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1ec482-6ae0-46ae-1985-3d0700b91c10158d15af-8fce-4817-946c-2cdde26d3d42-src_ar..png',
  },
]

export function BeforeAfterSection3() {
  return (
    <section id="results" dir="rtl" className="relative overflow-hidden bg-[#f8f6f2] py-32">
      {/* Background */}
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#c58d00]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex rounded-full border border-[#c58d00]/20 bg-white/80 px-4 py-2 text-sm font-medium text-[#c58d00] backdrop-blur-xl">
            النتائج
          </div>

          <h2 className="font-serif text-4xl font-normal text-[#21326a] sm:text-5xl lg:leading-[1.2]">
            نتائج طبيعية
            <br />
            <span className="text-[#c58d00]">تعكس جودة العناية</span>
            <br />
            والخبرة الطبية
          </h2>

          <p className="mt-8 text-lg leading-9 text-[#425573]">
            نماذج من بعض الحالات والإجراءات التي تم تنفيذها داخل العيادة باستخدام تقنيات حديثة وخطط علاجية مناسبة لكل
            حالة.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-24 grid gap-8 md:grid-cols-3">
          {results2.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={`border-[#21326a]/6 group relative h-fit overflow-hidden rounded-[40px] border bg-white ${
                index % 2 !== 0 ? 'md:mt-16' : ''
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt="Before and after result"
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#21326a]/40 via-transparent to-transparent opacity-80" />
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-xl">
                      حالة رقم {item.id}
                    </div>

                    {/* <div className="text-lg font-medium text-white">نتائج طبيعية بإشراف طبي متخصص</div> */}
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl transition-all duration-300 group-hover:bg-[#c58d00]">
                    <ArrowLeft className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <div className="border-[#21326a]/6 mx-auto max-w-2xl rounded-[40px] border bg-white/70 p-10 backdrop-blur-xl">
            <h3 className="text-3xl font-medium text-[#21326a]">ابدأ رحلتك مع عناية طبية متخصصة</h3>

            <p className="mt-4 text-lg leading-8 text-[#425573]">
              فريقنا الطبي يساعدك على اختيار الخطة المناسبة لاحتياجك باستخدام أحدث التقنيات الطبية والتجميلية.
            </p>

            <button className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-[#21326a] px-10 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1b2957] hover:shadow-[0_20px_40px_rgba(33,50,106,0.2)]">
              حجز موعد
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// DoctorsSection.tsx

const doctors2 = [
  {
    name: 'د. سارة الهيبي',

    specialty: 'طبيبة مختصة بالأمراض الجلدية والتجميل غير الجراحي',

    shortSpecialty: 'الجلدية والتجميل',

    qualifications: [
      'ماجستير في الأمراض الجلدية والتجميل',
      'تصنيف الهيئة السعودية للتخصصات الصحية',
      'خبرة في الإجراءات التجميلية غير الجراحية',
    ],

    credentials: 'خبرة في البوتكس والفيلر والعناية بالبشرة وتقنيات التجميل الحديثة.',

    image: 'https://marilynclinics.com/wp-content/uploads/2025/04/K09A7496-683x1024.jpg',

    experience: '12+ سنة خبرة',
  },

  {
    name: 'د. ياسمين الجبيلي',

    specialty: 'طبيب مقيم جلدية وتجميل',

    shortSpecialty: 'الجلدية والليزر',

    qualifications: ['بكالوريوس الطب والجراحة', 'ماجستير الأمراض الجلدية والتجميل', 'خبرة في الليزر والعناية بالبشرة'],

    credentials: 'خبرة في البوتكس والفيلر وتقنيات العناية بالبشرة والشعر.',

    image: 'https://marilynclinics.com/wp-content/uploads/2025/04/dryasmin-682x1024.jpeg',

    experience: '5+ سنوات خبرة',
  },
]

export function DoctorsSection2() {
  return (
    <section id="doctors" dir="rtl" className="relative overflow-hidden bg-white py-32">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[#21326a]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex rounded-full border border-[#c58d00]/20 bg-[#c58d00]/5 px-4 py-2 text-sm font-medium text-[#c58d00]">
            الأطباء
          </div>

          <h2 className="font-serif text-4xl font-normal text-[#21326a] sm:text-5xl lg:leading-[1.2]">
            فريق طبي بخبرات
            <br />
            <span className="text-[#c58d00]">متخصصة في الجلدية</span>
            <br />
            والتجميل والليزر
          </h2>

          <p className="mt-8 text-lg leading-9 text-[#425573]">
            يضم فريقنا أطباء مختصين بخبرات عملية وشهادات معتمدة، مع اهتمام بتقديم خطط علاجية دقيقة ومناسبة لكل حالة.
          </p>
        </div>

        {/* Doctors */}
        <div className="mt-24 space-y-10">
          {doctors2.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="border-[#21326a]/6 group overflow-hidden rounded-[40px] border bg-[#f8f6f2]"
            >
              <div
                className={`grid items-center lg:grid-cols-2 ${index % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-[700px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#21326a]/20 via-transparent to-transparent" />

                  {/* Experience Badge */}
                  <div className="absolute bottom-8 right-8 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl">
                    {doctor.experience}
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 lg:p-16">
                  {/* Specialty */}
                  <div className="mb-5 inline-flex rounded-full border border-[#c58d00]/20 bg-white/80 px-4 py-2 text-sm font-medium text-[#c58d00] backdrop-blur-xl">
                    {doctor.shortSpecialty}
                  </div>

                  {/* Name */}
                  <h3 className="text-4xl font-medium leading-tight text-[#21326a]">{doctor.name}</h3>

                  {/* Main Specialty */}
                  <p className="mt-5 text-lg leading-9 text-[#425573]">{doctor.specialty}</p>

                  {/* Credentials */}
                  <p className="mt-6 border-r-2 border-[#c58d00]/20 pr-5 text-base leading-8 text-[#425573]">
                    {doctor.credentials}
                  </p>

                  {/* Qualifications */}
                  <div className="mt-10 space-y-4">
                    {doctor.qualifications.map((item) => (
                      <div key={item} className="flex items-start gap-4">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#c58d00]/10">
                          <Check className="h-3.5 w-3.5 text-[#c58d00]" />
                        </div>

                        <span className="text-base leading-8 text-[#425573]">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="group mt-12 inline-flex items-center gap-3 text-sm font-medium text-[#21326a]">
                    عرض الملف الطبي
                    <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Values */}
        <div className="mt-24 grid gap-6 md:grid-cols-4">
          {['خطط علاجية تناسب كل حالة', 'خصوصية وراحة في كل زيارة', 'استخدام أحدث التقنيات', 'متابعة طبية مستمرة'].map(
            (item) => (
              <div key={item} className="border-[#21326a]/6 rounded-[28px] border bg-[#f8f6f2] p-8 text-center">
                <div className="text-sm leading-7 text-[#21326a]">{item}</div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

// TestimonialsSection.tsx

const testimonials2 = [
  {
    patientName: 'أحمد العتيبي',

    treatment: 'العناية بالشعر',

    quote: 'كانت التجربة منظمة ومريحة، وتم شرح الخطة العلاجية بشكل واضح من البداية. النتائج كانت مناسبة لتوقعي.',

    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop',

    stars: 5,
  },

  {
    patientName: 'فاطمة الخالدي',

    treatment: 'جلسات البشرة',

    quote: 'أعجبني الاهتمام بالتفاصيل وراحة المكان، والطبيبة شرحت الخطوات المناسبة لحالتي بشكل بسيط وواضح.',

    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',

    stars: 5,
  },

  {
    patientName: 'منى السالم',

    treatment: 'التجميل غير الجراحي',

    quote: 'العيادة مرتبة وهادئة، وكانت التجربة مريحة من الحجز وحتى الجلسة والمتابعة بعد العلاج.',

    photo: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop',

    stars: 5,
  },
]

export function TestimonialsSection2() {
  return (
    <section dir="rtl" className="relative overflow-hidden bg-[#f8f6f2] py-32">
      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#c58d00]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex rounded-full border border-[#c58d00]/20 bg-white/80 px-4 py-2 text-sm font-medium text-[#c58d00] backdrop-blur-xl">
            آراء العملاء
          </div>

          <h2 className="font-serif text-4xl font-normal text-[#21326a] sm:text-5xl lg:leading-[1.2]">
            تجارب حقيقية
            <br />
            <span className="text-[#c58d00]">تعكس جودة الرعاية</span>
            <br />
            والاهتمام بالتفاصيل
          </h2>

          <p className="mt-8 text-lg leading-9 text-[#425573]">
            نسعى دائماً لتقديم تجربة مريحة وخدمات دقيقة تناسب احتياجات كل مراجع ضمن بيئة هادئة وخصوصية عالية.
          </p>
        </div>

        {/* Testimonials Layout */}
        <div className="mt-24 grid gap-8 lg:grid-cols-12">
          {/* Featured Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border-[#21326a]/6 relative overflow-hidden rounded-[40px] border bg-white p-10 lg:col-span-7 lg:p-14"
          >
            {/* Soft Glow */}
            <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-[#c58d00]/5 blur-3xl" />

            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(testimonials2[0].stars)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#c58d00] text-[#c58d00]" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mt-8 text-3xl leading-[1.8] tracking-[-0.02em] text-[#21326a] lg:text-4xl">
              “{testimonials2[0].quote}”
            </blockquote>

            {/* Patient */}
            <div className="mt-12 flex items-center gap-5">
              <img
                src={testimonials2[0].photo}
                alt={testimonials2[0].patientName}
                className="h-16 w-16 rounded-full object-cover"
              />

              <div>
                <div className="text-lg font-medium text-[#21326a]">{testimonials2[0].patientName}</div>

                <div className="mt-1 text-sm text-[#425573]">{testimonials2[0].treatment}</div>
              </div>
            </div>
          </motion.div>

          {/* Side Testimonials */}
          <div className="space-y-8 lg:col-span-5">
            {testimonials2.slice(1).map((item, index) => (
              <motion.div
                key={item.patientName}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className={`border-[#21326a]/6 rounded-[32px] border bg-white p-8 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(33,50,106,0.08)] ${
                  index === 1 ? 'lg:mr-10' : ''
                }`}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#c58d00] text-[#c58d00]" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mt-6 text-lg leading-9 text-[#21326a]">“{item.quote}”</blockquote>

                {/* Footer */}
                <div className="mt-8 flex items-center gap-4">
                  <img src={item.photo} alt={item.patientName} className="h-14 w-14 rounded-full object-cover" />

                  <div>
                    <div className="font-medium text-[#21326a]">{item.patientName}</div>

                    <div className="mt-1 text-sm text-[#425573]">{item.treatment}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Strip */}
        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {['خصوصية وراحة في جميع مراحل الزيارة', 'خطط علاجية مناسبة لكل حالة', 'اهتمام بالتفاصيل وجودة الرعاية'].map(
            (item) => (
              <div
                key={item}
                className="border-[#21326a]/6 rounded-[28px] border bg-white/70 p-8 text-center backdrop-blur-xl"
              >
                <div className="text-sm leading-7 text-[#21326a]">{item}</div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

// PhilosophySection.tsx

export function PhilosophySection3() {
  return (
    <section dir="rtl" className="relative overflow-hidden bg-white py-32">
      {/* Background glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#21326a]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex rounded-full border border-[#c58d00]/20 bg-[#c58d00]/5 px-4 py-2 text-sm font-medium text-[#c58d00]">
            نهجنا في الرعاية
          </div>

          <h2 className="font-serif text-4xl font-normal text-[#21326a] sm:text-5xl lg:leading-[1.2]">
            رعاية طبية
            <span className="text-[#c58d00]"> تركز على التفاصيل</span>
            <br />
            والنتائج الطبيعية
          </h2>

          <p className="mt-8 text-lg leading-9 text-[#425573]">
            نحرص في عيادات مارلين على تقديم علاجات جلدية وتجميلية مبنية على تقييم طبي دقيق وخطة تناسب كل حالة.
          </p>
        </div>

        {/* Content */}
        <div className="mt-24 grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-9 text-[#425573]">
              نؤمن بأن الجمال الحقيقي هو التوازن بين الصحة والمظهر الطبيعي، لذلك نعتمد نهجاً طبياً دقيقاً يركز على
              النتائج الطبيعية دون مبالغة.
            </p>

            {/* Values */}
            <div className="mt-10 space-y-5">
              {[
                'خطط علاجية تناسب كل حالة',
                'اهتمام بالتفاصيل وراحة المراجع',
                'استخدام أجهزة وتقنيات حديثة',
                'نتائج طبيعية بأسلوب علاجي متوازن',
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#c58d00]" />
                  <span className="text-[#21326a]">{item}</span>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div className="mt-12 border-r-2 border-[#c58d00]/30 pr-5 text-sm text-[#425573]">
              عيادات مارلين — الرياض
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[40px]">
              <img
                src="https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1ec4ab-0f58-be08-63d0-4a2b6a303f69732dd47d-e976-4750-9ea2-f00017fef38c-src_ar..jpg"
                className="h-[600px] w-full object-cover"
                alt="Philosophy"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-8 right-8 rounded-full bg-white/80 px-6 py-3 text-sm text-[#21326a] backdrop-blur-xl">
              نتائج طبيعية ومتوازنة
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// FAQSection.tsx

const faqItems = [
  {
    question: 'كيف يمكنني حجز موعد؟',
    answer: 'يمكنك حجز موعد من خلال الاتصال أو الواتساب أو عبر نموذج الحجز في الموقع.',
  },
  {
    question: 'هل الاستشارة تتطلب موعد مسبق؟',
    answer: 'نعم، يفضل حجز موعد مسبق لضمان توفر الوقت المناسب مع الطبيب المختص.',
  },
  {
    question: 'ما هي ساعات العمل؟',
    answer: 'نعمل من السبت إلى الخميس من الساعة 10 صباحاً حتى 9 مساءً.',
  },
  {
    question: 'هل توجد جلسات مناسبة لجميع أنواع البشرة؟',
    answer: 'يقوم الطبيب بتقييم الحالة واختيار الجلسات والتقنيات المناسبة لكل نوع بشرة.',
  },
  {
    question: 'هل تستخدمون أجهزة معتمدة؟',
    answer: 'نعم، نستخدم أجهزة وتقنيات حديثة ومعتمدة وفق المعايير الطبية.',
  },
]

export function FAQSection3() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section dir="rtl" className="relative bg-white py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="mb-5 inline-flex rounded-full bg-[#c58d00]/5 px-4 py-2 text-sm text-[#c58d00]">
            الأسئلة الشائعة
          </div>

          <h2 className="font-serif text-4xl font-normal text-[#21326a] sm:text-5xl lg:leading-[1.2]">
            إجابات تساعدك على
            <span className="text-[#c58d00]"> اتخاذ القرار</span>
          </h2>

          <p className="mt-6 text-lg text-[#425573]">نوضح أكثر الأسئلة شيوعاً لضمان تجربة واضحة ومريحة قبل الحجز.</p>
        </div>

        {/* Accordion */}
        <div className="mt-16 space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div key={item.question} className="rounded-2xl border border-[#21326a]/10 bg-white">
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between p-6 text-right"
                >
                  <span className="text-lg font-medium text-[#21326a]">{item.question}</span>

                  <ChevronDown
                    className={`h-5 w-5 text-[#c58d00] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 leading-8 text-[#425573]">{item.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ContactSection.tsx

export function ContactSection3() {
  return (
    <section dir="rtl" className="relative bg-[#f8f6f2] py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm text-[#c58d00]">تواصل معنا</div>

          <h2 className="font-serif text-4xl font-normal text-[#21326a] sm:text-5xl lg:leading-[1.2]">
            نحن هنا لمساعدتك
          </h2>

          <p className="mt-6 text-lg text-[#425573]">
            فريقنا جاهز للإجابة على استفساراتك ومساعدتك في اختيار العلاج المناسب.
          </p>
        </div>

        {/* Content */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-[32px] border border-[#21326a]/10 bg-white p-10">
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <Phone className="text-[#c58d00]" />
                  <div>
                    <div className="text-sm text-[#425573]">رقم الهاتف</div>
                    <div className="text-lg font-medium text-[#21326a]">0115444888</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <Mail className="text-[#c58d00]" />
                  <div>
                    <div className="text-sm text-[#425573]">البريد الإلكتروني</div>
                    <div className="text-lg font-medium text-[#21326a]">info@marilynclinics.com</div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-4">
                  <MapPin className="text-[#c58d00]" />
                  <div>
                    <div className="text-sm text-[#425573]">العنوان</div>
                    <div className="text-lg font-medium leading-8 text-[#21326a]">
                      طريق الملك عبدالله، حي القدس، الرياض
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button variant="outline" className="mt-10 h-14 w-full rounded-2xl transition">
                حجز موعد
              </Button>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[32px] border border-[#21326a]/10 bg-white p-10">
            <h3 className="text-2xl font-medium text-[#21326a]">احجز استشارتك</h3>

            <p className="mt-3 text-[#425573]">املأ النموذج وسنقوم بالتواصل معك في أقرب وقت.</p>

            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="الإسم الكامل"
                className="w-full rounded-xl border border-[#21326a]/10 p-4 outline-none focus:border-[#c58d00]"
              />

              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full rounded-xl border border-[#21326a]/10 p-4 outline-none focus:border-[#c58d00]"
              />

              <input
                type="text"
                placeholder="رقم الهاتف"
                className="w-full rounded-xl border border-[#21326a]/10 p-4 outline-none focus:border-[#c58d00]"
              />

              <textarea
                placeholder="رسالتك"
                rows={4}
                className="w-full rounded-xl border border-[#21326a]/10 p-4 outline-none focus:border-[#c58d00]"
              />

              <Button type="button" className="h-14 w-full rounded-2xl text-white transition">
                إرسال الطلب
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer.tsx

export function Footer3() {
  return (
    <footer dir="rtl" className="relative bg-[#121d3f] text-white">
      {/* Soft glow */}
      {/* <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[#c58d00]/10 blur-3xl" /> */}

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:pt-44">
        {/* TOP SECTION */}
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-medium">عيادات مارلين</h2>

            <p className="mt-6 leading-8 text-white/70">
              عيادات مارلين تقدم خدمات الجلدية والتجميل والليزر تحت إشراف أطباء مختصين وباستخدام تقنيات طبية حديثة
              ومعتمدة.
            </p>

            {/* CTA */}
            <button className="mt-8 rounded-2xl bg-[#c58d00] px-6 py-3 text-white transition hover:bg-[#b07d00]">
              احجز موعدك
            </button>

            {/* Social */}
            <div className="mt-10 flex gap-4">
              <a href="#" className="rounded-full bg-white/10 p-3 transition hover:bg-white/20">
                <Instagram className="h-5 w-5" />
              </a>

              <a href="#" className="rounded-full bg-white/10 p-3 transition hover:bg-white/20">
                <Twitter className="h-5 w-5" />
              </a>

              <a href="#" className="rounded-full bg-white/10 p-3 transition hover:bg-white/20">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6 lg:col-span-3">
            <h3 className="text-lg font-medium">تواصل معنا</h3>

            <div className="space-y-4 text-white/70">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#c58d00]" />
                <span>0115444888</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#c58d00]" />
                <span>info@marilynclinics.com</span>
              </div>

              <div className="flex items-start gap-3 leading-7">
                <MapPin className="h-5 w-5 text-[#c58d00]" />
                <span>طريق الملك عبدالله، حي القدس، الرياض</span>
              </div>

              <div className="text-sm text-white/50">يومياً من 2 مساءً إلى 10 مساءً</div>
            </div>
          </div>

          {/* Clinic Links */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-lg font-medium">العيادة</h3>

            <ul className="space-y-3 text-white/70">
              <li>عن العيادة</li>
              <li>الأطباء</li>
              <li>الخدمات</li>
              <li>التقنيات</li>
              <li>النتائج</li>
              <li>الآراء</li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-lg font-medium">الخدمات</h3>

            <ul className="space-y-3 text-white/70">
              <li>الجلدية</li>
              <li>التجميل</li>
              <li>الليزر</li>
              <li>البشرة</li>
              <li>الشعر</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          {/* Legal */}
          <div className="flex gap-6 text-sm text-white/50">
            <span>سياسة الخصوصية</span>
            <span>الشروط والأحكام</span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-white/50">© 2026 عيادات مارلين. جميع الحقوق محفوظة.</div>
        </div>
      </div>
    </footer>
  )
}

export function V6() {
  return (
    <div className="bg-background">
      <div>
        <div className="relative w-full">
          <HeroSection />

          <ServicesSection3 />

          <BeforeAfterSection3 />

          <DoctorsSection2 />

          <TestimonialsSection2 />

          <PhilosophySection3 />

          <FAQSection3 />

          <ContactSection3 />

          <Footer3 />

          {/*
          #c58d00
          #21326a
          #425573
          #22336A

          */}
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
