import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react'

export const landingPageContentAr = {
  header: {
    announcementBar: {
      enabled: true,

      text: 'خبرة طبية تمتد لأكثر من 30 عاماً في الجلدية والتجميل والليزر',

      phone: '0115444888',

      email: 'info@marilynclinics.com',
    },

    logo: {
      alt: 'شعار عيادات مارلين',

      image:
        'https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=324,height=96,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1d84d4-4fb7-72eb-b27f-93edde22cb64.png',
    },

    navigation: [
      {
        label: 'الرئيسية',
        href: '#home',
      },

      {
        label: 'الخدمات',
        href: '#services',
      },

      {
        label: 'الأطباء',
        href: '#doctors',
      },

      // {
      //   label: 'التقنيات',
      //   href: '#technology',
      // },

      {
        label: 'النتائج',
        href: '#results',
      },

      // {
      //   label: 'الأسئلة الشائعة',
      //   href: '#faq',
      // },

      {
        label: 'تواصل معنا',
        href: '#contact',
      },
    ],

    mobileNavigation: [
      {
        label: 'الرئيسية',
        href: '#home',
      },

      {
        label: 'الخدمات الطبية',
        href: '#services',
      },

      {
        label: 'الأطباء',
        href: '#doctors',
      },

      // {
      //   label: 'تقنيات وأجهزة العيادة',
      //   href: '#technology',
      // },

      {
        label: 'نتائج بعض الحالات',
        href: '#results',
      },

      {
        label: 'الأسئلة الشائعة',
        href: '#faq',
      },

      {
        label: 'تواصل معنا',
        href: '#contact',
      },
    ],

    cta: {
      text: 'حجز موعد',

      href: '/book-appointment',
    },

    secondaryCTA: {
      text: 'واتساب',

      href: 'https://wa.me/966115444888',
    },

    quickLinks: [
      {
        label: 'الجلدية',
        href: '/services/dermatology',
      },

      {
        label: 'التجميل',
        href: '/services/aesthetic',
      },

      {
        label: 'الليزر',
        href: '/services/laser',
      },

      {
        label: 'العناية بالبشرة',
        href: '/services/skincare',
      },
    ],
  },
  heroContent: {
    title: {
      line1: 'عيادات متخصصة في',
      highlight: 'الجلدية والتجميل',
      line2: 'والعناية بالبشرة',
    },

    subtitle: 'نقدم خدمات طبية وتجميلية بإشراف أطباء مختصين، باستخدام أحدث التقنيات في بيئة مريحة وخصوصية عالية.',

    ctaText: 'حجز موعد',

    secondaryCtaText: 'استعرض الخدمات',

    valueProposition: 'خبرة طبية تمتد لأكثر من 30 عاماً في مجال الجلدية والتجميل والليزر.',

    backgroundImage:
      'https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1ec4ab-0f58-be08-63d0-4a2b6a303f6905edd1b4-cb4e-484a-b855-feb1a84c9953-src_ar..jpg',

    insights: [
      {
        value: '+30',
        title: 'سنة من الخبرة',
      },
      {
        value: '+20,000',
        title: 'حالة تم علاجها',
      },
      {
        value: 'أطباء مختصون',
        title: 'بخبرات متعددة',
      },
    ],
  },

  trustStrip: [
    {
      title: 'أطباء معتمدون ومتخصصون',
    },
    {
      title: 'أجهزة وتقنيات حديثة',
    },
    {
      title: 'خصوصية وراحة في كل زيارة',
    },
    {
      title: 'خطط علاج تناسب كل حالة',
    },
  ],

  aboutSection: {
    label: 'من نحن',

    title: 'خبرة طبية متخصصة في الجلدية والتجميل والعناية بالبشرة',

    description:
      'في عيادات مارلين نقدم خدمات الجلدية والتجميل والليزر ضمن بيئة طبية حديثة، مع اهتمام بالتفاصيل وجودة الرعاية وراحة المراجعين. نحرص على تقديم حلول مناسبة لكل حالة باستخدام تقنيات معتمدة وخطط علاج مدروسة.',
  },

  servicesSection: {
    label: 'الخدمات الطبية',

    title: 'مجموعة من خدمات الجلدية والتجميل والعناية بالشعر والبشرة',

    description: 'نوفر خدمات متنوعة بإشراف أطباء مختصين وتقنيات حديثة تناسب مختلف الاحتياجات الطبية والتجميلية.',

    items: [
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
      // {
      //   title: 'الجلدية',
      //   description: 'تشخيص وعلاج مشاكل البشرة والشعر والأظافر باستخدام خطط علاج طبية متخصصة.',
      //   image: 'https://images.pexels.com/photos/36930338/pexels-photo-36930338.jpeg',
      // },

      // {
      //   title: 'التجميل غير الجراحي',
      //   description: 'خدمات البوتكس والفيلر والإجراءات التجميلية البسيطة للحصول على نتائج طبيعية ومتوازنة.',
      //   image: 'https://images.pexels.com/photos/36930338/pexels-photo-36930338.jpeg',
      // },

      // {
      //   title: 'الليزر',
      //   description: 'تقنيات ليزر حديثة لإزالة الشعر وعلاج التصبغات وآثار الحبوب وتجديد البشرة.',
      //   image: 'https://images.pexels.com/photos/36930338/pexels-photo-36930338.jpeg',
      // },

      // {
      //   title: 'العناية بالشعر',
      //   description: 'حلول لعلاج تساقط الشعر وتقوية البصيلات والعناية بفروة الرأس.',
      //   image: 'https://images.pexels.com/photos/36930338/pexels-photo-36930338.jpeg',
      // },

      // {
      //   title: 'جلسات البشرة',
      //   description: 'جلسات تنظيف وتقشير ونضارة لتحسين مظهر البشرة وملمسها.',
      //   image: 'https://images.pexels.com/photos/36930338/pexels-photo-36930338.jpeg',
      // },

      // {
      //   title: 'تقنيات تجديد البشرة',
      //   description: 'إجراءات حديثة لتحسين مرونة البشرة وتقليل آثار التقدم بالعمر.',
      //   image: 'https://images.pexels.com/photos/36930338/pexels-photo-36930338.jpeg',
      // },
    ],
  },

  // technologySection: {
  //   label: 'التقنيات',

  //   title: 'أجهزة وتقنيات حديثة لدقة أعلى ونتائج أكثر أماناً',

  //   description:
  //     'نستخدم تقنيات وأجهزة معتمدة تساعد على تقديم جلسات دقيقة ومناسبة لكل حالة مع مراعاة راحة المراجع وجودة النتائج.',
  // },

  // doctorsSection: {
  //   label: 'الأطباء',

  //   title: 'فريق طبي بخبرات متعددة في الجلدية والتجميل',

  //   description: 'يضم فريقنا أطباء مختصين في مختلف مجالات الجلدية والتجميل والليزر، بخبرات عملية وشهادات معتمدة.',

  //   doctors: [
  //     {
  //       name: 'د. سارة الهيبي',
  //       specialty: 'طبيبة مختصة بالأمراض الجلدية و التجميل الغير جراحي',
  //       qualifications: 'ماجستير في الأمراض الجلدية والتجميل — تصنيف الهيئة السعودية للتخصصات الصحية',
  //       credentials: 'ماجستير في الأمراض الجلدية والتجميل — تصنيف الهيئة السعودية للتخصصات الصحية',
  //       image:
  //         'https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1dc277-bd08-4c0e-37e6-01fe3dc11ebc246497e4-6397-4581-a1b3-18f993748460-src_ar..png',
  //     },

  //     {
  //       name: 'د. ياسمين الجبيلي',
  //       specialty: 'طبيب مقيم جلدية وتجميل',
  //       qualifications: 'بكالوريوس الطب والجراحة - ماجستير الأمراض الجلدية والتجميل',
  //       credentials: 'خبرة في الليزر والبوتكس والفيلر وتقنيات العناية بالبشرة والشعر',
  //       image:
  //         'https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1ec509-8fe0-b284-cfa2-40cb9432b324d056122b-fc50-4047-86b2-eeae360b2e80-src_ar..png',
  //     },
  //   ],
  // },

  technologySection: {
    label: 'التقنيات',

    title: {
      line1: 'أجهزة وتقنيات حديثة',
      highlight: 'لدقة أعلى',
      line2: 'ونتائج أكثر أماناً',
    },

    description:
      'نستخدم أجهزة وتقنيات معتمدة تساعد على تقديم جلسات دقيقة ومناسبة لكل حالة، مع التركيز على راحة المراجع وجودة النتائج في مختلف خدمات الجلدية والتجميل والليزر.',

    technologies: [
      {
        name: 'أجهزة الليزر الحديثة',
        category: 'الليزر والعناية بالبشرة',
        description: 'تقنيات مخصصة لإزالة الشعر وعلاج التصبغات وتحسين ملمس البشرة باستخدام إعدادات تناسب كل نوع بشرة.',
        image: 'https://images.pexels.com/photos/5069609/pexels-photo-5069609.jpeg',
      },

      {
        name: 'تقنيات العناية بالبشرة',
        category: 'النضارة والتجديد',
        description: 'جلسات وتقنيات تهدف لتحسين نضارة البشرة وتقليل آثار الإجهاد والتصبغات بشكل تدريجي وطبيعي.',
        image: 'https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg',
      },

      {
        name: 'أجهزة تحليل البشرة',
        category: 'التقييم والتشخيص',
        description: 'فحص وتحليل يساعد على تحديد احتياج البشرة واختيار الخطة المناسبة لكل حالة بشكل أدق.',
        image: 'https://images.pexels.com/photos/7581572/pexels-photo-7581572.jpeg',
      },

      {
        name: 'تقنيات العناية بالشعر',
        category: 'الشعر والفروة',
        description: 'حلول وتقنيات متقدمة لدعم صحة الشعر والفروة ضمن برامج علاجية مناسبة لكل حالة.',
        image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg',
      },
    ],

    stats: [
      {
        value: '30+',
        label: 'سنة خبرة',
      },

      {
        value: '20K+',
        label: 'مراجع',
      },

      {
        value: 'أجهزة معتمدة',
        label: 'تقنيات حديثة',
      },
    ],
  },

  doctorsSection: {
    label: 'الأطباء',

    title: {
      line1: 'فريق طبي بخبرات',
      highlight: 'متعددة',
      line2: 'في الجلدية والتجميل',
    },

    description:
      'يضم فريقنا أطباء مختصين في الجلدية والتجميل والليزر، بخبرات عملية وشهادات معتمدة، مع اهتمام بتقديم خطط علاجية واضحة ومناسبة لكل مراجع.',

    cta: {
      text: 'عرض جميع الأطباء',
      href: '/doctors',
    },

    doctors: [
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

        image:
          'https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1dc277-bd08-4c0e-37e6-01fe3dc11ebc246497e4-6397-4581-a1b3-18f993748460-src_ar..png',

        image2: 'https://marilynclinics.com/wp-content/uploads/2025/04/K09A7496-683x1024.jpg',

        experience: '12+ سنة خبرة',
      },

      {
        name: 'د. ياسمين الجبيلي',

        specialty: 'طبيب مقيم جلدية وتجميل',

        shortSpecialty: 'الجلدية والليزر',

        qualifications: [
          'بكالوريوس الطب والجراحة',
          'ماجستير الأمراض الجلدية والتجميل',
          'خبرة في الليزر والعناية بالبشرة',
        ],

        credentials: 'خبرة في البوتكس والفيلر وتقنيات العناية بالبشرة والشعر.',

        image:
          'https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1ec509-8fe0-b284-cfa2-40cb9432b324d056122b-fc50-4047-86b2-eeae360b2e80-src_ar..png',

        image2: 'https://marilynclinics.com/wp-content/uploads/2025/04/dryasmin-682x1024.jpeg',

        experience: '5+ سنوات خبرة',
      },
    ],

    values: [
      'خطط علاجية واضحة ومناسبة لكل حالة',
      'اهتمام براحة وخصوصية المراجع',
      'متابعة مستمرة بعد الجلسات',
      'استخدام تقنيات وأجهزة معتمدة',
    ],
  },

  clinicExperience: {
    label: 'تجربة العيادة',

    title: 'تصميم مريح وخصوصية عالية لتجربة أكثر هدوءاً',

    description:
      'تم تصميم العيادة لتوفير بيئة مريحة وعملية تساعد المراجعين على الشعور بالراحة والخصوصية منذ لحظة الوصول.',

    items: [
      {
        title: 'بيئة عيادة مريحة وهادئة',

        description:
          'تم تصميم العيادة لتوفير أجواء مريحة تساعد المراجعين على الشعور بالهدوء والخصوصية منذ لحظة الوصول.',

        image: '/images/clinic1.jpg',
      },

      {
        title: 'أجهزة وتقنيات حديثة',

        description:
          'نعتمد على أجهزة وتقنيات حديثة تساعد على تقديم جلسات دقيقة ومناسبة لمختلف الحالات الطبية والتجميلية.',

        image: '/images/clinic2.jpg',
      },

      {
        title: 'خصوصية واهتمام بكل حالة',

        description: 'نحرص على توفير استشارات وجلسات ضمن بيئة منظمة وخصوصية عالية مع متابعة تناسب احتياجات كل مراجع.',

        image: '/images/clinic3.jpg',
      },
    ],
  },

  philosophySection: {
    label: 'نهجنا في الرعاية',

    title: {
      line1: 'رعاية طبية',
      highlight: 'تركّز على التفاصيل',
      line2: 'والنتائج الطبيعية',
    },

    description:
      'نحرص في عيادات مارلين على تقديم علاجات جلدية وتجميلية مبنية على تقييم طبي دقيق وخطة تناسب احتياج كل حالة. نهتم بأن تكون النتائج طبيعية ومتوازنة مع الحفاظ على صحة البشرة وجودة العناية.',

    secondaryDescription:
      'تم تصميم بيئة العيادة لتوفر تجربة مريحة وهادئة، مع استخدام تقنيات حديثة وإشراف طبي متخصص في جميع مراحل العلاج.',

    values: [
      'خطط علاجية تناسب كل حالة',
      'اهتمام بالتفاصيل وراحة المراجع',
      'استخدام أجهزة وتقنيات حديثة',
      'نتائج طبيعية بأسلوب علاجي متوازن',
    ],

    signature: 'عيادات مارلين — الرياض',

    image:
      'https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1ec4ab-0f58-be08-63d0-4a2b6a303f69732dd47d-e976-4750-9ea2-f00017fef38c-src_ar..jpg',
  },

  testimonials: {
    label: 'آراء العملاء',

    title: 'تجارب حقيقية من مراجعين عيادات مارلين',

    description: 'نسعى دائماً لتقديم تجربة مريحة وخدمات دقيقة تناسب احتياجات كل مراجع.',

    items: [
      {
        patientName: 'أحمد العتيبي',

        treatment: 'العناية بالشعر',

        quote: 'كانت التجربة منظمة ومريحة، وتم شرح الخطة العلاجية بشكل واضح من البداية. النتائج كانت مناسبة لتوقعي.',

        photo:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        stars: 5,
      },

      {
        patientName: 'فاطمة الخالدي',

        treatment: 'جلسات البشرة',

        quote: 'أعجبني الاهتمام بالتفاصيل وراحة المكان، والطبيبة شرحت الخطوات المناسبة لحالتي بشكل بسيط وواضح.',

        photo:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        stars: 5,
      },

      {
        patientName: 'منى السالم',

        treatment: 'التجميل غير الجراحي',

        quote: 'العيادة مرتبة وهادئة، وكانت التجربة مريحة من الحجز وحتى الجلسة والمتابعة بعد العلاج.',

        photo:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        stars: 5,
      },
    ],
  },

  beforeAfter: {
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
    ],
  },

  faq: {
    label: 'الأسئلة الشائعة',

    title: 'إجابات على أكثر الأسئلة شيوعاً',

    items: [
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
    ],
  },

  contactSection: {
    label: 'تواصل معنا',

    title: 'يمكنكم التواصل معنا للحجز أو الاستفسارات',

    description: 'فريق العيادة متواجد للرد على الاستفسارات ومساعدتكم في اختيار الخدمة المناسبة.',

    phone: '0115444888',

    email: 'info@marilynclinics.com',

    address: 'طريق الملك عبدالله، حي القدس، الرياض',

    ctaText: 'حجز موعد',

    form: {
      label: 'اتصل بنا',
      description: 'نقدم خدمات طبية وتجميلية بإشراف أطباء مختصين، باستخدام أحدث التقنيات في بيئة مريحة وخصوصية عالية.',

      fullName: {
        label: 'الإسم الكامل',
        placeholder: 'الإسم الكامل',
      },
      email: {
        label: 'البريد الإلكتروني',
        placeholder: 'البريد الإلكتروني',
      },
      phone: {
        label: 'رقم الهاتف',
        placeholder: 'رقم الهاتف',
      },
      address: {
        label: 'العنوان',
        placeholder: 'العنوان',
      },
      message: {
        label: 'الرسالة',
        placeholder: 'الرسالة',
      },
      service: {
        label: 'اختيار الخدمة',
        placeholder: 'اختيار الخدمة',
        options: [
          {
            label: 'الجلدية',
            value: 'Dermatology Consultation',
          },
          {
            label: 'التجميل',
            value: 'Laser & Skin Rejuvenation',
          },
          {
            label: 'الليزر',
            value: 'Skin Rejuvenation',
          },
          {
            label: 'العناية بالبشرة',
            value: 'Skin Care',
          },
          {
            label: 'العناية بالشعر',
            value: 'Aesthetic Treatments',
          },
        ],
      },
    },

    items: [
      {
        label: 'رقم الهاتف',
        value: '0115444888',
        icon: <PhoneIcon className="h-5 w-5" />,
      },
      {
        label: 'البريد الإلكتروني',
        value: 'info@marilynclinics.com',
        icon: <MailIcon className="h-5 w-5" />,
      },
      {
        label: 'العنوان',
        value: 'طريق الملك عبدالله، حي القدس، الرياض',
        icon: <MapPinIcon className="h-5 w-5" />,
      },
    ],
  },

  footer: {
    shortDescription:
      'عيادات مارلين تقدم خدمات الجلدية والتجميل والليزر تحت إشراف أطباء مختصين وباستخدام تقنيات طبية حديثة ومعتمدة.',

    contact: {
      phone: '0115444888',
      email: 'info@marilynclinics.com',
      address: 'طريق الملك عبدالله، حي القدس، الرياض، المملكة العربية السعودية',
      workingHours: 'يومياً من 10 صباحاً إلى 10 مساءً',
    },

    links: {
      clinic: ['عن العيادة', 'الأطباء', 'الخدمات', 'التقنيات', 'نتائج الحالات', 'آراء المراجعين'],

      services: ['الجلدية', 'التجميل غير الجراحي', 'الليزر', 'علاج حب الشباب', 'تجديد البشرة', 'علاج تساقط الشعر'],

      support: ['الأسئلة الشائعة', 'احجز موعد', 'تواصل معنا', 'سياسة الخصوصية', 'الشروط والأحكام'],
    },

    social: [
      { name: 'Instagram', href: 'https://instagram.com/marilynclinics' },
      { name: 'X', href: 'https://x.com/marilynclinics' },
      { name: 'Snapchat', href: 'https://snapchat.com/add/marilynclinics' },
    ],

    booking: {
      title: 'احجز موعدك بسهولة',
      description: 'يمكنك حجز موعدك مباشرة عبر الموقع أو التواصل معنا عبر الهاتف.',
      ctaText: 'حجز موعد',
      ctaLink: '/book-appointment',
    },

    legal: ['سياسة الخصوصية', 'الشروط والأحكام', 'حقوق المريض'],

    copyright: '© ٢٠٢٦ عيادات مارلين. جميع الحقوق محفوظة.',

    // copyright: '© ٢٠٢٦ عيادات مارلين. جميع الحقوق محفوظة.',
    // copyright: '© 2026 Marilyn Clinics. All rights reserved.',
  },
}

const landingContent = {
  heroContent: {
    title: 'Advanced Dermatology & Aesthetic Care',
    subtitle: 'Personalized treatments for skin, hair, and beauty — delivered with medical excellence.',
    ctaText: 'Book Consultation',
    ctaLink: '/book-appointment',
    secondaryCtaText: 'Explore Services',
    secondaryCtaLink: '/services',
    backgroundImage:
      'https://img.rekaz.io/cdn-cgi/image/quality=85,fit=contain,width=1920,f=auto/https://cdn.rekaz.io/tenants/3a1d8086-dd13-dde8-1a4b-853a3feb35e4/3a1ec4ab-0f58-be08-63d0-4a2b6a303f6905edd1b4-cb4e-484a-b855-feb1a84c9953-src_ar..jpg', // path to your hero image/video
    valueProposition: 'Trusted by thousands of patients for safe, effective, and luxurious aesthetic care.',

    insights: [
      {
        value: '25+',
        title: 'Years of experience',
      },
      {
        value: '20K+',
        title: 'Patients treated',
      },
      {
        value: '98%',
        title: 'Satisfaction rate',
      },
    ],
  },

  trustStrip: [
    {
      title: 'Certified Specialists',
      icon: '/icons/doctor.svg',
    },
    {
      title: '15+ Years Experience',
      icon: '/icons/experience.svg',
    },
    {
      title: 'Advanced Medical Technology',
      icon: '/icons/technology.svg',
    },
    {
      title: 'Thousands of Successful Treatments',
      icon: '/icons/success.svg',
    },
  ],

  services: [
    {
      title: 'Dermatology',
      description:
        'Comprehensive skin care solutions, from medical treatments to preventive care, personalized for each patient.',
      icon: '/icons/dermatology.svg',
      image: 'https://images.pexels.com/photos/36930338/pexels-photo-36930338.jpeg',
      link: '/services/dermatology',
    },
    {
      title: 'Aesthetic Treatments',
      description:
        'Luxury aesthetic services including Botox, fillers, and skin rejuvenation for natural and radiant results.',
      icon: '/icons/aesthetic.svg',
      image: 'https://images.pexels.com/photos/14187891/pexels-photo-14187891.jpeg',
      link: '/services/aesthetic-treatments',
    },
    {
      title: 'Hair Restoration',
      description:
        'Advanced hair transplant and restoration solutions tailored to restore confidence and natural appearance.',
      icon: '/icons/hair.svg',
      image: 'https://images.pexels.com/photos/23532307/pexels-photo-23532307.jpeg',
      link: '/services/hair-restoration',
    },
    {
      title: 'Laser & Skin Rejuvenation',
      description:
        'State-of-the-art laser treatments for hair removal, pigmentation, acne scars, and overall skin rejuvenation.',
      icon: '/icons/laser.svg',
      image: 'https://images.pexels.com/photos/5069609/pexels-photo-5069609.jpeg',
      link: '/services/laser-skin-rejuvenation',
    },
  ],

  beforeAfter: [
    {
      patient: 'Patient A',
      treatment: 'Hair Restoration',
      beforeImage: '/images/before-hair1.jpg',
      afterImage: '/images/after-hair1.jpg',
    },
    {
      patient: 'Patient B',
      treatment: 'Skin Rejuvenation',
      beforeImage: '/images/before-skin1.jpg',
      afterImage: '/images/after-skin1.jpg',
    },
    {
      patient: 'Patient C',
      treatment: 'Aesthetic Treatments',
      beforeImage: '/images/before-aesthetic1.jpg',
      afterImage: '/images/after-aesthetic1.jpg',
    },
  ],

  doctors: [
    {
      name: 'Dr. Sara Al-Harbi',
      specialty: 'Dermatologist & Aesthetic Specialist',
      photo: '/images/dr-sara.jpg',
      credentials: 'Board-Certified, 12 Years Experience',
    },
    {
      name: 'Dr. Khalid Al-Faraj',
      specialty: 'Hair Restoration Expert',
      photo: '/images/dr-khalid.jpg',
      credentials: '10+ Years in Hair Transplant & Restoration',
    },
    {
      name: 'Dr. Laila Al-Mutairi',
      specialty: 'Laser & Skin Treatments',
      photo: '/images/dr-laila.jpg',
      credentials: 'Certified Laser Specialist',
    },
  ],

  clinicExperience: [
    {
      title: 'Luxury Clinic Environment',
      description:
        'Our clinic combines modern design, comfort, and privacy to provide a serene experience for all patients.',
      image: '/images/clinic1.jpg',
    },
    {
      title: 'State-of-the-Art Technology',
      description: 'We use the latest devices and technologies to ensure safe, effective, and advanced treatments.',
      image: '/images/clinic2.jpg',
    },
    {
      title: 'Private & Comfortable Consultations',
      description: 'Personalized care in a discreet and relaxing environment is at the heart of our clinic experience.',
      image: '/images/clinic3.jpg',
    },
  ],

  testimonials: [
    {
      patientName: 'Ahmed Al-Otaibi',
      treatment: 'Hair Restoration',
      quote:
        'Thanks to the clinic, my hair restoration results exceeded my expectations. Professional and luxurious experience!',
      photo:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      stars: 5,
    },
    {
      patientName: 'Fatima Al-Khaldi',
      treatment: 'Skin Rejuvenation',
      quote: 'The aesthetic treatments were subtle, natural, and highly effective. I feel confident and cared for!',
      photo:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      stars: 3,
    },
    {
      patientName: 'Mona Al-Saud',
      treatment: 'Aesthetic Fillers',
      quote: 'The team’s expertise and the clinic’s environment made the whole experience feel premium and safe.',
      photo:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      stars: 5,
    },
  ],

  ctaSection: {
    title: 'Begin Your Personalized Consultation Today',
    ctaText: 'Book Appointment',
    ctaLink: '/book-appointment',
    backgroundImage: '/images/cta-background.jpg',
  },

  footer: {
    logo: '/images/footer-logo.png',
    email: 'info@marilynclinics.com',
    phone: '0115444888',
    address: '13214 King Abdullah Road, Al-Qadisiyah, Riyadh, Saudi Arabia',
    navLinks: [
      { name: 'Home', link: '/' },
      { name: 'Services', link: '/services' },
      { name: 'Doctors', link: '/doctors' },
      { name: 'Results', link: '/before-after' },
      { name: 'About', link: '/about' },
      { name: 'Contact', link: '/contact' },
    ],
    socialLinks: [
      { name: 'Instagram', link: 'https://instagram.com/marilynclinics' },
      { name: 'Twitter', link: 'https://twitter.com/marilynclinics' },
      { name: 'Facebook', link: 'https://facebook.com/marilynclinics' },
    ],
    copyright: '© 2026 Marilyn Clinics. All rights reserved.',
  },
}

export const landingPageContent = landingPageContentAr
