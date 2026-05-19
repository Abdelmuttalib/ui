import { PlusIcon, ArrowUpLeft, Clock3, Instagram, Mail, MapPin, Phone, Plus, Minus } from 'lucide-react'
import { PageContainer } from './common/page-container'
import { Typography } from './ui/typography'
import React, { useState } from 'react'
import { cn } from 'src/lib/utils'
import { landingPageContent } from 'src/lib/data'
import { Button } from './ui/button'
import { Helmet } from 'react-helmet'

export default function V5Page() {
  return (
    <>
      <Helmet>
        <title>نموذج 3</title>
      </Helmet>

      <div className="">
        <Header />
        <V5 />
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
            <Button className="hidden rounded-none border border-[#C58D00]/40 bg-primary px-6 py-3 text-xs transition md:block">
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

            <h2 className="mt-6 font-serif text-5xl font-light md:text-7xl  lg:leading-[1.05]">
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

            {/* <h2 className="mt-5 font-serif text-4xl font-light leading-[1.05]  sm:text-5xl md:text-6xl lg:text-7xl">
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

            {/* <h2 className="mt-6 font-serif text-5xl font-light leading-[1.05]  md:text-6xl lg:text-7xl">
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

            <h2 className="mt-6 font-serif text-5xl font-light leading-[1.05]  md:text-6xl lg:text-7xl">
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
    <Section className="relative overflow-hidden py-24 text-foreground md:py-32">
      <PageContainer>
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionTag>{landingPageContent.beforeAfter.label}</SectionTag>

            <SectionTitle
              title={
                <>
                  {landingPageContent.beforeAfter.title.line1}{' '}
                  <span className="text-[#C58D00]">{landingPageContent.beforeAfter.title.highlight}</span>
                  <br />
                  {landingPageContent.beforeAfter.title.line2}
                </>
              }
            />
          </div>

          <div className="lg:col-span-5">
            <p className="text-foreground/65 max-w-lg text-base leading-relaxed">
              {landingPageContent.beforeAfter.description}
            </p>
          </div>
        </div>

        {/* RESULTS GRID */}
        <div className="mt-20 grid md:grid-cols-3">
          {landingPageContent.beforeAfter.items.map((item, idx) => (
            <article key={idx} className="group relative overflow-hidden bg-background">
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
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
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" /> */}

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
                      {/* <span className="text-xs uppercase tracking-[0.25em] text-[#C58D00]">{item.category}</span> */}

                      {/* <h3
                        className="mt-4 font-serif text-3xl leading-tight text-white md:text-4xl"
                        style={{
                          textShadow: '0 2px 14px rgba(0,0,0,0.25)',
                        }}
                      >
                        {item.title}
                      </h3> */}
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
          <p className="text-foreground/55 max-w-3xl text-sm leading-relaxed">
            {landingPageContent.beforeAfter.disclaimer}
          </p>
        </div>
      </PageContainer>
    </Section>
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
    <Typography variant="5xl/normal" className="mb-8 mt-6 font-serif font-light lg:leading-[1.18]">
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

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-background">
      <PageContainer size="full" className="relative min-h-screen">
        <div className="relative flex min-h-screen items-center overflow-hidden rounded-none md:rounded-[2rem]">
          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0">
            <img
              src={landingPageContent.heroContent.backgroundImage}
              alt="عيادات مارلين"
              className="h-full w-full scale-[1.02] object-cover object-center"
            />

            {/* Soft luxury overlay (NOT dark) */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-background/80" />

            {/* subtle warm tint for medical luxury feel */}
            <div className="absolute inset-0 bg-[#22336A]/5" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            {/* SMALL LABEL */}
            <p className="mb-6 text-xs tracking-[0.35em] text-foreground/60">عيادات مارلين — الجلدية والتجميل</p>

            {/* MAIN TITLE (LINE 1 / HIGHLIGHT / LINE 2 STYLE) */}
            <h1 className="font-serif text-5xl font-light leading-[1.05] md:text-6xl lg:text-7xl">
              {/* line 1 */}
              <span className="block text-foreground/90">عيادات متخصصة في</span>

              {/* highlight */}
              <span className="block text-[#C58D00]">الجلدية والتجميل</span>

              {/* line 2 */}
              <span className="block text-foreground/80">والعناية بالبشرة</span>
            </h1>

            {/* SUBTITLE */}
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/60 md:text-lg">
              نقدم خدمات طبية متخصصة في الجلدية والتجميل والعناية بالبشرة باستخدام أحدث التقنيات الطبية وبأسلوب يركز على
              الراحة والدقة.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-none bg-[#22336A] px-8 py-4 text-sm text-white transition hover:bg-[#1b2552]">
                حجز موعد
              </button>

              <button className="rounded-none border border-[#22336A]/20 bg-white/40 px-8 py-4 text-sm text-foreground backdrop-blur-md transition hover:bg-white/60">
                استعراض الخدمات
              </button>
            </div>

            {/* subtle trust line */}
            <p className="mt-10 text-xs tracking-[0.25em] text-foreground/40">
              رعاية طبية دقيقة — نتائج طبيعية — بيئة آمنة
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  )
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
                  <Button
                    type="button"
                    className="
                      group
                      inline-flex
                      h-14
                      items-center
                      gap-4
                      rounded-none
                      border
                      border-black/10
                      px-8
                      text-sm
                      transition-all
                      duration-300
                      hover:border-[#C58D00]/40
                    "
                  >
                    إرسال الطلب
                    <ArrowUpLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C58D00]" />
                  </Button>
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

            <h2 className="mt-6 font-serif text-5xl font-light leading-[1.05]  md:text-6xl">
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

export function V5() {
  return (
    <div className="bg-background">
      <div>
        <div className="relative w-full">
          <Section className="overflow-hidden py-10 lg:py-16">
            <PageContainer>
              <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
                {/* LEFT */}
                <div>
                  <div className="max-w-xl">
                    <SectionTag>عيادات مارلين</SectionTag>

                    <Typography variant="6xl/normal" className="mt-6 font-serif font-light lg:leading-[1.2]">
                      {landingPageContent.heroContent.title.line1}
                      <br />
                      <span className="text-[#C58D00]">{landingPageContent.heroContent.title.highlight}</span>
                      <br />
                      {landingPageContent.heroContent.title.line2}
                    </Typography>

                    <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                      {landingPageContent.heroContent.subtitle}
                    </p>

                    {/* ACTIONS */}
                    <div className="mt-10 flex flex-wrap gap-4">
                      <Button className="h-14 w-full rounded-none px-8 sm:w-auto">
                        {landingPageContent.heroContent.ctaText}
                      </Button>

                      <Button variant="secondary" className="h-14 w-full rounded-none px-8 sm:w-auto">
                        {landingPageContent.heroContent.secondaryCtaText}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* RIGHT - LUXURY IMAGE STACK */}
                <div className="relative">
                  {/* BACK LAYER (soft shadow frame) */}
                  <div className="absolute -inset-4 rounded-none bg-[#22336A]/5 blur-xl" />

                  {/* MID LAYER (gold subtle glow) */}
                  <div className="absolute -bottom-5 right-6 h-full w-full rounded-none border border-black/5 bg-[#C58D00]/20" />

                  {/* MAIN IMAGE CARD */}
                  <div className="group relative overflow-hidden rounded-none border border-black/20 bg-muted">
                    <img
                      src={landingPageContent.heroContent.backgroundImage}
                      alt="Clinic interior"
                      className="duration-[1200ms] aspect-[4/5] w-full object-cover transition-transform ease-out group-hover:scale-[1.03]"
                    />

                    {/* SOFT LIGHT FALL (important for luxury feel) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />

                    {/* EDGE VIGNETTE */}
                    <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.08)]" />
                  </div>

                  {/* FLOATING LABEL (adds editorial feel) */}
                  <div className="absolute bottom-6 left-6  border border-black/5 bg-background/80 px-4 py-2 text-xs text-foreground/60 backdrop-blur-md">
                    بيئة طبية مريحة — تصميم حديث
                  </div>
                </div>
              </div>
            </PageContainer>
          </Section>

          {/* <Section className="bg-background py-24">
            <PageContainer>
              <div className="max-w-3xl">
                <SectionTag id="results">{beforeAfterSection.label}</SectionTag>

                <Typography variant="6xl/normal" className="mt-6 font-serif leading-[1.1] tracking-tight">
                  {beforeAfterSection.title.line1}
                  <br />
                  <span className="text-foreground">{beforeAfterSection.title.highlight}</span>
                  <br />
                  {beforeAfterSection.title.line2}
                </Typography>

                <p className="mt-6 text-base leading-relaxed text-muted-foreground">{beforeAfterSection.description}</p>
              </div>

              <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
                {beforeAfterSection.items.map((item, idx) => (
                  <div key={idx} className="group border border-border bg-card">
                    <div className="grid grid-cols-1 gap-px bg-border">
                      <div className="relative overflow-hidden bg-muted">
                        <img
                          src={
                            'https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1ec4a7-b881-7d54-8416-a1601a411c174bd3bdc1-adbe-4630-b5c0-7ca16cdba3f3-src_ar..png'
                          }
                          alt={`${item.title} قبل`}
                          className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        />

                        <div className="absolute bottom-4 right-4 bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-sm">
                          قبل
                        </div>
                      </div>

                      <div className="relative overflow-hidden bg-muted">
                        <img
                          src={
                            'https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1ec4a7-b881-7d54-8416-a1601a411c174bd3bdc1-adbe-4630-b5c0-7ca16cdba3f3-src_ar..png'
                          }
                          alt={`${item.title} بعد`}
                          className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        />

                        <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 text-xs text-black">بعد</div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-medium text-foreground">{item.title}</h3>

                          <p className="mt-1 text-sm text-muted-foreground">{item.category}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 border-t border-border pt-6">
                <p className="text-sm leading-relaxed text-muted-foreground">{beforeAfterSection.disclaimer}</p>
              </div>
            </PageContainer>
          </Section> */}

          <ServicesSection2 />

          <BeforeAfterSection />

          {/* <BeforeAfterSection2 /> */}

          {/* <TechnologySection /> */}

          {/* <DoctorsSection /> */}

          <DoctorsSectionMinimal />

          <section className="relative py-28 lg:py-44">
            <PageContainer>
              <div className="grid items-start gap-20 lg:grid-cols-[1.1fr_1fr]">
                {/* LEFT - EDITORIAL TEXT */}
                <div>
                  <SectionTag>فلسفتنا</SectionTag>

                  {/* <h2 className="mt-6 font-serif text-5xl font-light leading-[1.1] lg:text-6xl">
                    <span className="block">الطب التجميلي</span>
                    <span className="block text-[#C58D00]">بأسلوب دقيق</span>
                    <span className="block">ومبني على النتائج</span>
                  </h2> */}

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

                  <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
                    نؤمن أن العناية بالبشرة والتجميل يجب أن تكون مبنية على التشخيص الطبي الدقيق وليس على المبالغة أو
                    الاتجاهات المؤقتة. هدفنا هو تحقيق نتائج طبيعية وآمنة تحافظ على صحة الجلد على المدى الطويل.
                  </p>

                  {/* KEY PRINCIPLES (structured, not decorative) */}
                  <div className="mt-12 space-y-6 border-t border-border pt-10">
                    {[
                      'تشخيص طبي قبل أي إجراء تجميلي',
                      'نتائج طبيعية بدون مبالغة',
                      'خطة علاج مخصصة لكل حالة',
                      'اعتماد أحدث التقنيات الطبية',
                    ].map((item) => (
                      <div key={item} className="flex gap-4">
                        <div className="mt-2 h-px w-10 bg-[#C58D00]/40" />
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT - ARCHITECTURAL IMAGE BLOCK */}
                <div className="relative">
                  {/* FRAME STRUCTURE */}
                  <div className="absolute inset-0 border border-border" />

                  {/* GOLD ALIGNMENT LINE */}
                  <div className="absolute left-6 top-0 h-full w-px bg-[#C58D00]/25" />

                  {/* IMAGE */}
                  <div className="relative overflow-hidden border border-border bg-background">
                    <img
                      src="https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1ec4ab-0f58-be08-63d0-4a2b6a303f69732dd47d-e976-4750-9ea2-f00017fef38c-src_ar..jpg"
                      alt="Clinic philosophy"
                      className="aspect-[4/5] w-full object-cover"
                    />

                    {/* controlled lighting */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />

                    {/* subtle inner depth */}
                    <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.08)]" />
                  </div>

                  {/* FOOTNOTE */}
                  <div className="mt-4 border-t border-border pt-4">
                    <p className="text-xs tracking-[0.3em] text-muted-foreground">
                      فلسفة طبية تعتمد على الدقة والنتائج الطبيعية
                    </p>
                  </div>
                </div>
              </div>
            </PageContainer>
          </section>

          <FAQSection />

          <ContactSection2 />

          {/*
          #c58d00
          #21326a
          #425573
          #22336A

          */}

          <footer className="border-t border-border bg-background text-foreground">
            <PageContainer className="py-20 pt-44">
              {/* TOP GRID */}
              <div className="grid gap-16 lg:grid-cols-12">
                {/* LEFT: BRAND */}
                <div className="lg:col-span-4">
                  <img
                    src="https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=324,height=96,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1d84d4-4fb7-72eb-b27f-93edde22cb64.png"
                    alt="Marilyn Clinics"
                    className="h-24 w-auto object-cover"
                  />
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                    عيادات مارلين تقدم خدمات الجلدية والتجميل والليزر تحت إشراف أطباء مختصين وباستخدام تقنيات طبية حديثة
                    ومعتمدة.
                  </p>

                  {/* BOOKING CTA */}
                  <div className="mt-8 border border-border p-6">
                    <p className="text-sm font-medium">احجز موعدك بسهولة</p>
                    <p className="mt-2 text-xs text-muted-foreground">حجز مباشر عبر الموقع أو الهاتف</p>

                    <a href="/book-appointment" className="mt-4 inline-block text-sm text-[#C58D00] hover:underline">
                      حجز موعد →
                    </a>
                  </div>
                </div>

                {/* CLINIC LINKS */}
                <div className="lg:col-span-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">العيادة</p>

                  <ul className="mt-6 space-y-3 text-sm">
                    {['عن العيادة', 'الأطباء', 'الخدمات', 'التقنيات', 'نتائج الحالات', 'آراء المراجعين'].map((item) => (
                      <li key={item}>
                        <a className="transition-colors hover:text-[#C58D00]">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SERVICES */}
                <div className="lg:col-span-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">الخدمات</p>

                  <ul className="mt-6 space-y-3 text-sm">
                    {['الجلدية', 'التجميل غير الجراحي', 'الليزر', 'تجديد البشرة', 'علاج الشعر'].map((item) => (
                      <li key={item}>
                        <a className="transition-colors hover:text-[#C58D00]">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CONTACT */}
                <div className="lg:col-span-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">تواصل معنا</p>

                  <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                    <p className="text-foreground">0115444888</p>
                    <p>info@marilynclinics.com</p>
                    <p>طريق الملك عبدالله - الرياض</p>
                    <p>يومياً 10 صباحاً - 10 مساءً</p>
                  </div>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="my-12 border-t border-border" />

              {/* BOTTOM ROW */}
              <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                <p className="text-xs text-muted-foreground">© ٢٠٢٦ عيادات مارلين. جميع الحقوق محفوظة.</p>

                {/* LEGAL */}
                <div className="flex gap-6 text-xs text-muted-foreground">
                  <a className="hover:text-[#C58D00]">سياسة الخصوصية</a>
                  <a className="hover:text-[#C58D00]">الشروط والأحكام</a>
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
