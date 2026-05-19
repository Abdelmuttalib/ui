import { ArrowLeft, ChevronDown, Menu, Search, X, Star, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from './ui/button'
import { PageContainer } from './common/page-container'
import { Typography } from './ui/typography'
import { JoinSection, Section, SectionTag } from './common/section'
import { useState } from 'react'
import { cn } from 'src/lib/utils'

export function V1Page() {
  return (
    <div className="font-ibm-plex-sans-arabic">
      <Header />
      <V1 />
    </div>
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

  return (
    <header className="supports-backdrop-filter:bg-white/[0.7] supports-backdrop-filter:backdrop-blur-xl sticky top-0 z-50 border-b border-border backdrop-blur-xl">
      <PageContainer>
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            {/* <h1 className=" text-2xl font-bold tracking-tight text-v2-primary">
            مسار غير
          </h1> */}
            {/* <h3 className="text-2xl font-medium uppercase tracking-tight text-v2-darkgray">
              مسار
              <span className="mr-1 font-normal text-v2-darkgray/70 text-base sm:text-2xl">
                غير
              </span>
            </h3> */}

            <img src="/masarghair.webp" alt="" className="h-16 w-16 lg:h-20 lg:w-20" />
          </div>

          <nav className="hidden items-center gap-10 rounded-lg lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-v2-primary after:bg-v2-primary relative text-sm font-medium text-foreground transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full md:text-base"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <div className="bg-v2-gray rounded-lg p-2">
              <Search className="h-7 w-full" />
            </div>
            <div>
              <Button className="bg-v2-darkgray hover:bg-v2-primary/90 text-v2-primary shadow-premium hover:shadow-premium-lg border-v2-primary ring-v2-darkgray rounded-lg border-2 px-8 py-5 font-semibold ring-2 transition-all duration-300">
                ابدأ الآن
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="space-y-2 pb-4 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-v2-primary block py-2 text-sm font-medium text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-v2-darkgray hover:bg-v2-primary/90 text-v2-primary border-v2-primary/40 mt-4 w-full rounded-lg border-2 py-6 font-semibold">
              ابدأ الآن
            </Button>
          </nav>
        )}
      </PageContainer>
    </header>
  )
}

const landingPageContent = {
  heroContent: {
    title: 'بوابتك للجامعات الأمريكية المتميزة',
    subtitle:
      'نساعد الطلاب في العثور على الجامعات الأمريكية المناسبة لهم، ونقوم بإتمام جميع إجراءات المستندات والموافقات.',
    ctaText: 'ابدأ الآن',
    ctaLink: '/get-started',
    backgroundImage: 'path/to/hero-image.jpg',
    valueProposition: 'نحن موثوقون من قبل العديد من الطلاب لتحقيق حلم الدراسة في أمريكا.',
  },
  services: [
    {
      title: 'مساعدة في اختيار الجامعات',
      description: 'نساعدك في اختيار الجامعة الأنسب لك بناءً على تخصصك واهتماماتك، لتضمن مستقبلاً أكاديمياً مشرقاً.',
      icon: 'path/to/icon1.svg',
      link: '/services/university-selection',
    },
    {
      title: 'دعم التقديم والقبول',
      description: 'نوجهك في عملية التقديم بالكامل، من تعبئة استمارات الطلب إلى كتابة المقالات الشخصية المؤثرة.',
      icon: 'path/to/icon2.svg',
      link: '/services/application-support',
    },
    {
      title: 'إعداد المستندات والمراجعة',
      description: 'نساعدك في تحضير جميع المستندات المطلوبة لضمان تقديم طلبك بشكل صحيح وكامل.',
      icon: 'path/to/icon3.svg',
      link: '/services/document-preparation',
    },
    {
      title: 'خدمات الفيزا والموافقات',
      description: 'نرشدك خلال عملية الحصول على الفيزا الأمريكية وكل ما يتعلق بالموافقات الحكومية.',
      icon: 'path/to/icon4.svg',
      link: '/services/visa-approval',
    },
    {
      title: 'دعم قبل السفر',
      description: 'نقدم لك نصائح عملية حول الإقامة، السفر، وتأقلمك مع الحياة الجامعية في أمريكا.',
      icon: 'path/to/icon5.svg',
      link: '/services/pre-departure-support',
    },
  ],
  whyChooseUs: [
    {
      title: 'خبرة في الجامعات الأمريكية',
      description: 'نحن نمتلك المعرفة العميقة بالجامعات الأمريكية، مما يضمن لك اختيار الجامعة الأنسب.',
    },
    {
      title: 'دعم شامل طوال العملية',
      description: 'من لحظة التقديم حتى وصولك إلى الولايات المتحدة، نحن معك في كل خطوة.',
    },
    {
      title: 'ثقة الطلاب',
      description: 'خدمتنا موثوقة من قبل العديد من الطلاب الذين تمكنوا من الالتحاق بأفضل الجامعات الأمريكية.',
    },
  ],
  successStories: [
    {
      studentName: 'أحمد العتيبي',
      university: 'جامعة هارفارد',
      quote: 'مساعدتكم كانت حاسمة في قبولي في أفضل جامعة أمريكية. شكراً لدعمكم الرائع!',
      photo: 'path/to/student1.jpg',
    },
    {
      studentName: 'فاطمة الخالدي',
      university: 'جامعة ستانفورد',
      quote: 'لم أكن أعتقد أنني سأتمكن من التقديم للجامعات الأمريكية، ولكن بفضل مساعدتكم، تحققت أحلامي!',
      photo: 'path/to/student2.jpg',
    },
  ],
  faqs: [
    {
      question: 'كيف أختار الجامعة المناسبة لي؟',
      answer: 'نساعدك في اختيار الجامعة الأنسب بناءً على تخصصك وميزانيتك واحتياجاتك الشخصية.',
    },
    {
      question: 'ما هي المستندات المطلوبة للتقديم؟',
      answer: 'نرشدك في تحضير جميع المستندات، بما في ذلك الشهادات الأكاديمية، خطابات التوصية، والسيرة الذاتية.',
    },
    {
      question: 'كم يستغرق الأمر للحصول على القبول؟',
      answer: 'تختلف المدة حسب الجامعة، ولكننا نعمل معك لتحديد الجدول الزمني الأمثل.',
    },
  ],
  contactInfo: {
    email: 'contact@yourcompany.com',
    phone: '+1 123 456 7890',
    address: '1234 Main Street, City, Country',
  },
}

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
    question: 'متى يجب أن أبدأ عملية التقديم للجامعة؟',
    answer:
      'نوصي بالبدء في السنة الأخيرة من الثانوية. من الناحية المثالية، ابدأ في سبتمبر لديك متسع من الوقت لاختيار الجامعة والاستعداد والتطبيق.',
  },
  {
    question: 'ما تكلفة خدمات مسار غير؟',
    answer:
      'خدماتنا ميسورة وشفافة. نقدم حزم مرنة بدءاً من رسوم الاستشارة، مع خطط شاملة تتضمن الدعم الكامل من الاختيار إلى الوصول. تواصل معنا للحصول على تفاصيل الأسعار.',
  },
  {
    question: 'أي جامعات تتعامل معها؟',
    answer:
      'نتعامل مع أكثر من 500 جامعة عبر الولايات المتحدة، بما في ذلك جميع الجامعات ضمن أفضل 50. نساعد الطلاب على تحديد الخيار الأفضل بناءً على ملفهم الأكاديمي والأهداف.',
  },
  {
    question: 'هل تساعدون في فرص المنح الدراسية؟',
    answer:
      'نقدم إرشادات شاملة عن المنح الدراسية، ونساعدك في تحديد فرص التمويل والتدريب على طلبات المنح لتعظيم مساعدتك المالية.',
  },
  {
    question: 'كم يستغرق التطبيق عادةً؟',
    answer:
      'العملية الكاملة عادةً ما تستغرق 6-12 شهراً من الاستشارة الأولية إلى الالتحاق. يتضمن ذلك اختيار الجامعة والاختبارات والتطبيقات والمقابلات ومعالجة التأشيرة.',
  },
  {
    question: 'ماذا إذا لم أتم قبولي في البداية؟',
    answer:
      'لا نستسلم! يعمل فريقنا معك على الطعون وتجربة جامعات بديلة ومناقشة خيارات سنة تحضيرية. لدينا معدل نجاح 95% في تأمين القبول لجميع طلابنا.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative overflow-hidden py-32 sm:py-48">
      <div className="absolute inset-0 -z-10">
        <div className="bg-v1-primary/3 absolute -bottom-32 right-1/4 h-96 w-96 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          {/* <span className="inline-flex items-center gap-2 px-4 py-2 bg-lightgreen/25 text-v1darkgreen rounded-full text-sm font-semibold mb-8 border border-v1darkgreen/20">
          <span className="w-1.5 h-1.5 bg-v1darkgreen rounded-full"></span>
          الأسئلة الشائعة
        </span> */}
          <SectionTag id="faq" className="">
            الأسئلة الشائعة
          </SectionTag>
          <h2 className="mb-8 mt-4 text-4xl font-medium text-foreground lg:text-5xl">أسئلة متكررة</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            كل ما تحتاج إلى معرفته حول خدماتنا وعملية التقديم.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="hover:border-v1-primary/40 group overflow-hidden rounded-xl border border-border transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between bg-background px-8 py-6 transition-colors duration-300 hover:bg-muted/30"
              >
                <h3 className="text-right text-lg font-semibold leading-tight text-foreground">{faq.question}</h3>
                <ChevronDown
                  className={`text-v1-primary h-6 w-6 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="border-t border-border bg-muted/20 px-8 py-6">
                  <p className="text-base font-light leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
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

export function V1() {
  return (
    <div>
      <div className="">
        <div>
          <div className="relative h-screen w-screen">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1698248476242-bfde13928633?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="size-full object-cover"
              />
            </div>
            <div className="bg-v2-darkgray/50 absolute inset-0"></div>
            <div className="bg-linear-to-l from-v2-darkgray/80 absolute inset-0 to-transparent"></div>
            {/* nav */}
            {/* <div className="bg-red-400"></div> */}
            {/* hero */}
            <div className="size-full absolute flex h-full w-full flex-col items-end justify-end py-32">
              <PageContainer className="flex items-end">
                <div className="flex max-w-2xl flex-col gap-6 text-white">
                  <Typography variant="7xl/medium" className="leading-tight text-white">
                    {/* Powering Morocco’s Future with */}
                    بوابتك للجامعات الأمريكية المتميزة
                    <br />
                    {/* <span className="text-v2-primary">Solar Innovation.</span> */}
                    {/* Embrace the
                sun, <br />
                <span className="text-lime-500">embrace your power.</span> */}
                  </Typography>
                  <Typography variant="lg/normal" className="text-white">
                    نساعد الطلاب في العثور على الجامعات الأمريكية المناسبة لهم، ونقوم بإتمام جميع إجراءات المستندات
                    والموافقات.
                  </Typography>
                  {/* <div>
                <Button className="rounded-none text-base py-4 px-6">
                  Get Started
                </Button>
              </div> */}
                  <div>
                    <Button className="rounded-none px-6 py-4 text-base backdrop-blur-lg" asChild></Button>
                  </div>
                  <div className="flex flex-col gap-4 pt-6 sm:flex-row">
                    <Button
                      variant="outline"
                      className="text-v2-darkgray hover:bg-v2-primary/5 hover:border-v2-primary/50 rounded-lg px-10 py-6 text-base font-semibold transition-all duration-300"
                    >
                      ابدأ رحلتك{' '}
                      <ArrowLeft className="ml-2 transition-transform group-hover:-translate-x-1" size={20} />
                    </Button>
                    <Button
                      // variant="outline"
                      className="bg-v2-darkgray hover:bg-v2-primary/90 text-v2-primary border-v2-primary/40 hover:shadow-premium-lg group rounded-lg border-2 px-10 py-6 text-base font-semibold transition-all duration-300"
                    >
                      احجز استشارة مجانية
                    </Button>
                  </div>
                </div>
              </PageContainer>
            </div>
          </div>

          {/* project overview */}
          <Section id="oasis" className="">
            <PageContainer className="flex flex-col items-center gap-12">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-16">
                <div className="col-span-5 lg:col-span-2">
                  <div className="flex flex-col gap-10">
                    <SectionTag id="" className="">
                      خدماتنا
                    </SectionTag>

                    <div className="flex flex-col gap-6">
                      <Typography variant="5xl/medium" className="">
                        دعم شامل في كل خطوة
                      </Typography>
                      <Typography variant="lg/normal">
                        من اختيار الجامعة إلى الوصول، نوفر إرشادات شاملة مخصصة لرحلتك الفريدة.
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="col-span-5 lg:col-span-5">
                  <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 ">
                    {landingPageContent.services.map((j) => (
                      <div
                        key={j.title}
                        className={cn(
                          'border-v2-darkgray/15 border-b-v2-darkgray relative flex flex-col gap-2 rounded-lg border border-b-2 bg-white p-4',
                        )}
                      >
                        <div className="size-6 bg-v2-primary/70 absolute left-0.5 top-0.5 inline-flex items-center justify-center rounded-md text-xl text-white">
                          <div className="bg-v2-darkgray absolute h-0.5 w-full"></div>
                          <div className="bg-v2-darkgray absolute h-0.5 w-full rotate-90"></div>
                          <div className="bg-v2-darkgray absolute h-0.5 w-full rotate-45"></div>
                          <div className="bg-v2-darkgray absolute h-0.5 w-full -rotate-45"></div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <Typography className="text-v2-darkgray tracking-tight" variant="2xl/medium">
                            {/* {i + 1}.  */}
                            {j.title}
                          </Typography>
                          <Typography className="text-v2-darkgray/70 tracking-tight" variant="lg/medium">
                            {j.description}
                          </Typography>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* <img
                src="https://moroccan-solar-cells.com/wp-content/uploads/2025/01/13627641.jpeg"
                alt=""
                className="w-full"
              /> */}
                </div>
              </div>
            </PageContainer>
          </Section>

          <Section>
            <PageContainer className="flex flex-col items-center gap-12">
              <div className="grid grid-cols-1 gap-8 py-20 lg:grid-cols-7 lg:gap-16">
                <div className="col-span-5 lg:col-span-3">
                  <div className="grid gap-2">
                    <SectionTag>التقدم</SectionTag>
                    <Typography variant="5xl/medium" className="mt-2 text-black">
                      التقدم في مسار غير
                    </Typography>
                  </div>

                  <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />

                  <div className="grid gap-4">
                    {howItWorks.map(({ step, title, description }) => (
                      <div key={step} className="">
                        <div className="grid gap-2">
                          <div className="flex items-center gap-2">
                            <Typography variant="3xl/semibold" className="text-darkgreen tracking-tight">
                              {step.toString().padStart(2, '0')}
                            </Typography>
                            <Typography variant="2xl/medium" className="text-darkgreen tracking-tighter">
                              {title}
                            </Typography>
                          </div>

                          <Typography variant="lg/normal" className="text-darkgreen tracking-tight">
                            {description}
                          </Typography>
                        </div>

                        <hr className="my-4 border-gray-200" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-span-5 lg:col-span-4">
                  <div className="bg-darkgreen grid grid-cols-1 gap-1 p-1 sm:grid-cols-2">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="w-full"
                      />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1627556704353-016baeb12c79?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="w-full"
                      />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1583373834259-46cc92173cb7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D"
                        alt=""
                        className="w-full"
                      />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1655964581196-14735105c38c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </PageContainer>
          </Section>

          {/* Video */}

          {/* <Section className="bg-v2-darkgray text-white">
        <PageContainer
          size="md"
          className="flex flex-col gap-y-12 items-center"
        >
          <div className="text-center flex flex-col gap-12">
            <Typography
              variant="5xl/medium"
              className="text-white tracking-tighter"
            >
              The MSC Advantage
            </Typography>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-3xl mx-auto w-full ">
              {[
                {
                  title: "Local Manufacturing Power",
                  subtitle: "1 GW Annual Production",
                  description:
                    "MSC is launching Morocco’s first photovoltaic module factory, starting with 1 GW capacity and scaling to 10 GW to meet global demand.",
                },
                {
                  title: "Full Solar Value Chain",
                  subtitle: "From Silicon to Module",
                  description:
                    "We bring every step of solar manufacturing — crystallization, wafering, cell, and module production — directly to Morocco.",
                },
                {
                  title: "Global Expertise",
                  subtitle: "International Team, Local Impact",
                  description:
                    "Our experienced international network in the PV industry is building Morocco’s place in the global renewable energy market.",
                },
                {
                  title: "Sustainable Growth",
                  subtitle: "Driving Energy Independence",
                  description:
                    "By producing high-efficiency solar technology locally, we reduce imports, strengthen Morocco’s economy, and cut carbon emissions.",
                },
              ].map((j, i) => (
                <div
                  key={j.title}
                  className={cn(
                    "p-6 border-b-2 border-v2-primary bg-[#2b5254] flex flex-col gap-2",
                    {
                      "border-b-0": i > 1,
                      "border-t-2": i > 1,
                    }
                  )}
                >
                  <div>
                    <Typography
                      className="text-v2-primary tracking-tight"
                      variant="2xl/medium"
                    >
                      {j.title}
                    </Typography>
                    <Typography
                      className="text-white tracking-tight"
                      variant="xl/medium"
                    >
                      {j.subtitle}
                    </Typography>
                  </div>
                  <Typography variant="base/normal" className="text-white">
                    {j.description}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </Section> */}
          <Section className="relative bg-gray-100/70">
            <PageContainer
              // size="xl"
              className="flex flex-col items-center gap-y-12"
            >
              <div className="flex flex-col gap-16">
                {/* <SectionTag id="what-we-do" className="bg-transparent">
              What we do
            </SectionTag> */}

                <div className="">
                  {/* <span className="inline-flex items-center gap-2 px-4 py-2 bg-lightgreen/25 text-v1darkgreen rounded-full text-sm font-semibold mb-8 border border-v1darkgreen/20">
          <span className="w-1.5 h-1.5 bg-v1darkgreen rounded-full"></span>
          الأسئلة الشائعة
        </span> */}
                  <SectionTag id="faq" className="">
                    لماذا
                  </SectionTag>
                  <h2 className="mb-8 mt-4 text-4xl font-medium text-foreground lg:text-5xl">لماذا تختار مسار غير </h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {' '}
                    لسنا مجرد استشاريين - نحن شركاء مخصصون ملتزمون بتحويل أحلامك التعليمية إلى واقع.{' '}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 ">
                  <div className="grid h-fit w-full grid-cols-1 gap-4 text-right md:grid-cols-1">
                    {landingPageContent.whyChooseUs.map((j, i) => (
                      <div
                        key={j.title}
                        className={cn('border-v2-primary relative flex flex-col gap-2 border-b-2 bg-white p-4')}
                      >
                        <div className="size-6 bg-v2-primary absolute left-0.5 top-0.5 inline-flex items-center justify-center text-xl text-white">
                          <div className="bg-v2-darkgray absolute h-0.5 w-full"></div>
                          <div className="bg-v2-darkgray absolute h-0.5 w-full rotate-90"></div>
                          <div className="bg-v2-darkgray absolute h-0.5 w-full rotate-45"></div>
                          <div className="bg-v2-darkgray absolute h-0.5 w-full -rotate-45"></div>
                        </div>

                        <div>
                          <Typography className="text-v2-darkgray tracking-tight" variant="2xl/medium">
                            {i + 1}. {j.title}
                          </Typography>
                          {/* <Typography
                        className="text-v2-darkgray/70 tracking-tight"
                        variant="xl/medium"
                      >
                        {j.description}
                      </Typography> */}
                        </div>
                        <Typography variant="lg/normal" className="text-v2-darkgray/70">
                          {j.description}
                        </Typography>
                      </div>
                      // <div
                      //   key={j.title}
                      //   className={cn(
                      //     "relative p-6 border-b-2 border-v2-primary bg-v2-darkgray flex flex-col gap-2",
                      //     {
                      //       "border-b-0": i > 1,
                      //       "border-t-2": i > 1,
                      //     }
                      //   )}
                      // >
                      //   <div className="size-6 bg-v2-primary absolute top-0.5 left-0.5 inline-flex items-center justify-center text-xl text-white">
                      //     <div className="absolute w-full h-0.5 bg-v2-darkgray"></div>
                      //     <div className="absolute w-full h-0.5 bg-v2-darkgray rotate-90"></div>
                      //     <div className="absolute w-full h-0.5 bg-v2-darkgray rotate-45"></div>
                      //     <div className="absolute w-full h-0.5 bg-v2-darkgray -rotate-45"></div>
                      //   </div>

                      //   <div>
                      //     <Typography
                      //       className="text-v2-primary tracking-tight"
                      //       variant="2xl/medium"
                      //     >
                      //       {j.title}
                      //     </Typography>
                      //     <Typography
                      //       className="text-white tracking-tight"
                      //       variant="xl/medium"
                      //     >
                      //       {j.subtitle}
                      //     </Typography>
                      //   </div>
                      //   <Typography variant="base/normal" className="text-white">
                      //     {j.description}
                      //   </Typography>
                      // </div>
                    ))}
                  </div>
                  <div className="bg-v2-darkgray order-first xl:order-last">
                    <img
                      src="https://images.unsplash.com/photo-1734116271748-8c9434e6c97e?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      // src="https://images.unsplash.com/photo-1643826884444-7cf7fd46c69f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="w-full opacity-90"
                    />
                  </div>
                </div>
              </div>
            </PageContainer>
          </Section>

          {/* <Section className="text-v2-darkgray">
        <PageContainer
          size="sm"
          className="flex flex-col gap-12 items-center"
        >
          <div className="text-center flex flex-col gap-20">
            <SectionTag id="team" className="bg-v2-darkgray">
              Team
            </SectionTag>
            <Typography
              variant="6xl/medium"
              className="text-v2-darkgray tracking-tighter"
            >
              Our Team - Leadership Driving Morocco’s Solar Future
            </Typography>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {[
                {
                  name: "Ahmed Jaafar",
                  title: "CEO",
                  description: "Founder / CEO",
                  image: "/images/ahmed-jaafar.webp",
                },
                {
                  name: "Dr. Dirk Habermann",
                  title: "CTO",
                  description: "Founder / CTO",
                  image: "/images/dr-dirk.webp",
                },
              ].map((team) => (
                <div
                  key={team.name}
                  className="relative border-2 border-v2-darkgray"
                >
                  <img
                    src={team.image}
                    alt=""
                    className="w-full h-96 object-cover"
                  />
                  <div className="px-4 py-3 flex flex-col gap-1 absolute bottom-0 left-0 left-0 bg-v2-darkgray/50 backdrop-blur-xl ">
                    <Typography
                      variant="xl/medium"
                      className="text-white tracking-tight"
                    >
                      {team.name}
                    </Typography>

                    <Typography variant="base/normal" className="text-white">
                      {team.description}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </Section> */}
          <section id="testimonials" className="relative overflow-hidden bg-muted/5 py-32 sm:py-48">
            <div className="absolute inset-0 -z-10">
              <div className="bg-v1-accent/3 absolute -left-40 -top-40 h-96 w-96 rounded-full blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-24 flex max-w-3xl flex-col gap-10">
                <div className="">
                  {/* <span className="inline-flex items-center gap-2 px-4 py-2 bg-lightgreen/25 text-v1darkgreen rounded-full text-sm font-semibold mb-8 border border-v1darkgreen/20">
          <span className="w-1.5 h-1.5 bg-v1darkgreen rounded-full"></span>
          الأسئلة الشائعة
        </span> */}
                  <SectionTag id="faq" className="">
                    قصص النجاح
                  </SectionTag>
                  <h2 className="mb-8 mt-4 text-4xl font-medium text-foreground lg:text-5xl">أصوات من النجاح</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {' '}
                    استمع من الطلاب الذين حققوا أحلامهم بمساعدة مسار غير.{' '}
                  </p>
                </div>
                {/* <div className="flex flex-col gap-6">
              <SectionTag id="technology" className="">
                قصص النجاح
              </SectionTag>

              <div className="flex flex-col gap-6">
                <Typography variant="6xl/medium" className="text-">
                  أصوات من النجاح
                </Typography>
                <Typography variant="lg/normal" className="">
                  {" "}
                  استمع من الطلاب الذين حققوا أحلامهم بمساعدة مسار غير.
                </Typography>
              </div>
            </div> */}
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="hover:shadow-premium-lg hover:border-v1-primary/30 group rounded-xl border border-border bg-background p-10 transition-all duration-300"
                  >
                    <div className="mb-8 flex gap-1.5">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="fill-v2-primary text-v2-primary h-5 w-5" />
                      ))}
                    </div>
                    <p className="mb-10 text-lg font-light italic leading-relaxed text-foreground">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="flex items-center gap-4 border-t border-border pt-8">
                      <img
                        src={testimonial.image || '/placeholder.svg'}
                        alt={testimonial.name}
                        className="h-14 w-14 rounded-full border border-border bg-muted object-cover"
                      />
                      <div>
                        <p className=" font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-v1-primary text-sm font-medium">{testimonial.university}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <FAQ />

          <JoinSection />
          <section id="contact" className="text-v2-darkgray relative overflow-hidden py-32 sm:py-48">
            <div className="absolute inset-0 -z-10">
              <div className="bg-white/8 absolute left-0 top-0 h-96 w-96 rounded-full blur-3xl"></div>
              <div className="bg-v1-accent/5 absolute bottom-0 right-0 h-96 w-96 rounded-full blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid items-center gap-24 lg:grid-cols-2">
                <div>
                  <h2 className=" text-pretty mb-8 text-5xl font-semibold lg:text-6xl">هل أنت مستعد؟</h2>
                  <p className="mb-14 text-xl font-light leading-relaxed text-foreground/80">
                    تواصل مع استشاريينا الخبراء اليوم. احجز استشارتك المجانية واكتشف طريقك إلى أفضل الجامعات الأمريكية.
                  </p>

                  <div className="space-y-10">
                    <div className="group flex items-start gap-6">
                      <div className="bg-v2-primary/15 group-hover:bg-v2-primary/25 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg transition-all duration-300">
                        <Mail className="text-v2-primary h-7 w-7" />
                      </div>
                      <div>
                        <p className="mb-2 text-lg font-semibold">البريد الإلكتروني</p>
                        <a
                          href="mailto:hello@masarghair.com"
                          className="hover:text-v2-primary text-base font-medium text-foreground/75 transition-colors"
                        >
                          hello@masarghair.com
                        </a>
                      </div>
                    </div>

                    <div className="group flex items-start gap-6">
                      <div className="bg-v2-primary/15 group-hover:bg-v2-primary/25 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg transition-all duration-300">
                        <Phone className="text-v2-primary h-7 w-7" />
                      </div>
                      <div>
                        <p className="mb-2 text-lg font-semibold">الهاتف</p>
                        <a
                          href="tel:+966123456789"
                          className="hover:text-v2-primary text-base font-medium text-foreground/75 transition-colors"
                        >
                          +966 (12) 345-6789
                        </a>
                      </div>
                    </div>

                    <div className="group flex items-start gap-6">
                      <div className="bg-v2-primary/15 group-hover:bg-v2-primary/25 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg transition-all duration-300">
                        <MapPin className="text-v2-primary h-7 w-7" />
                      </div>
                      <div>
                        <p className="mb-2 text-lg font-semibold">المقرات</p>
                        <p className="text-base font-medium text-foreground/75">
                          الرياض، المملكة العربية السعودية
                          <br />
                          نيويورك، الولايات المتحدة الأمريكية
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-v2-darkgray border-v1-primary-foreground/20 hover:border-v1-primary-foreground/40 rounded-2xl border p-12 text-white backdrop-blur-md transition-all duration-300">
                  <h3 className=" mb-10 text-3xl font-bold">احجز استشارة مجانية</h3>
                  <form className="space-y-6">
                    <div>
                      <label className="mb-3 block text-sm font-semibold">الاسم الكامل</label>
                      <input
                        type="text"
                        placeholder="اسمك"
                        className="bg-v1-primary-foreground/10 border-v1-primary-foreground/30 text-v1-primary-foreground placeholder:text-v1-primary-foreground/50 focus:border-v2-primary focus:ring-v2-primary/30 w-full rounded-lg border px-5 py-3.5 transition-all duration-300 focus:outline-none focus:ring-2"
                      />
                    </div>

                    <div>
                      <label className="mb-3 block text-sm font-semibold">البريد الإلكتروني</label>
                      <input
                        type="email"
                        placeholder="بريدك@البريد.com"
                        className="bg-v1-primary-foreground/10 border-v1-primary-foreground/30 text-v1-primary-foreground placeholder:text-v1-primary-foreground/50 focus:border-v2-primary focus:ring-v2-primary/30 w-full rounded-lg border px-5 py-3.5 transition-all duration-300 focus:outline-none focus:ring-2"
                      />
                    </div>

                    <div>
                      <label className="mb-3 block text-sm font-semibold">الصف الحالي</label>
                      <select className="bg-v1-primary-foreground/10 border-v1-primary-foreground/30 text-v1-primary-foreground focus:border-v2-primary focus:ring-v2-primary/30 w-full rounded-lg border px-5 py-3.5 transition-all duration-300 focus:outline-none focus:ring-2">
                        <option>الصف 10</option>
                        <option>الصف 11</option>
                        <option>الصف 12</option>
                        <option>تخرج</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-3 block text-sm font-semibold">الرسالة</label>
                      <textarea
                        placeholder="أخبرنا عن أحلامك الجامعية..."
                        rows={4}
                        className="bg-v1-primary-foreground/10 border-v1-primary-foreground/30 text-v1-primary-foreground placeholder:text-v1-primary-foreground/50 focus:border-v2-primary focus:ring-v2-primary/30 w-full resize-none rounded-lg border px-5 py-3.5 transition-all duration-300 focus:outline-none focus:ring-2"
                      />
                    </div>

                    <Button className="bg-v2-primary hover:bg-v1-accent/90 text-v1-accent-foreground shadow-premium hover:shadow-premium-lg group w-full rounded-lg py-6 font-semibold transition-all duration-300 sm:text-base">
                      احجز الاستشارة{' '}
                      <ArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" size={20} />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <Footer />
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
    <footer className="bg-v2-darkgray text-v1-primary-foreground py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Logo Section */}
          <div className="col-span-2 mb-16 ml-12 md:col-span-1 md:mb-0">
            <h2 className=" mb-4 text-2xl font-bold">مسار غير</h2>
            <p className="text-v1-primary-foreground/80 text-sm leading-relaxed">
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
                      className="text-v1-primary-foreground/70 hover:text-lightgreen text-sm font-medium transition-colors"
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
            <p className="text-v1-primary-foreground/60 mt-10 text-sm md:mt-0">
              © {currentYear} مسار غير. جميع الحقوق محفوظة.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="#"
                className="text-v1-primary-foreground/60 hover:text-lightgreen text-sm font-medium transition-colors"
              >
                سياسة الخصوصية
              </a>
              <a
                href="#"
                className="text-v1-primary-foreground/60 hover:text-lightgreen text-sm font-medium transition-colors"
              >
                شروط الخدمة
              </a>
              <a
                href="#"
                className="text-v1-primary-foreground/60 hover:text-lightgreen text-sm font-medium transition-colors"
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
