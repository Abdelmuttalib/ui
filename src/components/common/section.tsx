import { cn } from 'src/lib/utils'
import { Typography } from 'src/components/ui/typography'
import { PageContainer } from 'src/components/common/page-container'

export function LogoText({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('font-sans text-xl font-semibold tracking-tighter', className)} {...props}>
      MSC
    </p>
  )
}

export function SectionTag({ id, className, ...props }: SectionProps) {
  return (
    <div className="bg-v2-gray/60 flex w-fit items-center gap-2 rounded-full px-3.5 py-0.5">
      {/* <div className="size-3 bg-v2-primary"></div> */}/
      <Typography variant="lg/normal" className={cn('uppercase', className)} id={id} {...props} />
    </div>
  )
}

type SectionProps = {
  id?: string
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

export function Section({ id, className, ...props }: SectionProps) {
  return <section id={id || ''} className={cn('bg-white py-20 sm:py-28 lg:py-36', className)} {...props} />
}

export function JoinSection() {
  return (
    <Section className="relative bg-black py-80 text-white sm:py-72 md:py-64 lg:py-72 xl:py-80">
      <div className="grid-rows-8 absolute left-0 top-0 grid h-full w-full grid-cols-10 gap-[0.5px] bg-white/50">
        {Array.from({ length: 80 }).map((_, i) => (
          <div key={i} className="bg-black"></div>
        ))}
      </div>
      <img
        // src="https://images.unsplash.com/photo-1643826884444-7cf7fd46c69f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        src="https://images.unsplash.com/photo-1567878874660-beba6dbb1762?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // src="https://images.unsplash.com/photo-1712620602288-8adb09edbef2?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // src="https://images.unsplash.com/photo-1474398777522-cabeb42e8132?q=80&w=2130&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // src="https://images.unsplash.com/photo-1694327671697-730cc4c5b9e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // src="https://images.unsplash.com/photo-1643826884444-7cf7fd46c69f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // src="https://framerusercontent.com/images/I63aDOGkxJKmUUtuNtByyqTZAHU.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="size-full absolute inset-0 flex items-center justify-center">
        <PageContainer size="sm" className="flex flex-col gap-8">
          <Typography variant="6xl/medium" className="text-white">
            انطلق في رحلة التعليم الجامعي مع <span className="text-v2-primary">مسار غير</span>.
          </Typography>
          <Typography variant="lg/normal" className="text-white">
            اكتشف فرص التعليم المتميزة في أمريكا وساهم في بناء مستقبلك الأكاديمي. ابدأ خطوتك الأولى اليوم!
          </Typography>

          <div className="flex flex-wrap gap-2 text-white">
            {[
              // "مساعدة الطلاب الدوليين",
              'استشارات تعليمية متخصصة',
              'شراكات مع الجامعات الأمريكية الرائدة',
              'دعم شامل من البداية حتى الوصول',
              'توجيه شخصي لكل طالب',
              'مستندات مطابقة للمعايير الأكاديمية',
              // "التمويل والمساعدات الدراسية",
              'تجربة دراسية سلسة في أمريكا',
              'شهادة رضا الطلاب في كل مرحلة',
            ].map((j, i) => (
              <span
                key={`${j}${i}`}
                className="border-white/15 relative border px-2.5 py-1.5 text-white backdrop-blur-xl"
              >
                {/* <div className="size-2.5 bg-lightgreen absolute bottom-0 right-0 inline-flex items-center justify-center text-xl text-white">
                      <div className="absolute w-full h-px bg-darkgreen"></div>
                      <div className="absolute w-full h-px bg-darkgreen rotate-90"></div>
                      <div className="absolute w-full h-px bg-darkgreen rotate-45"></div>
                      <div className="absolute w-full h-px bg-darkgreen -rotate-45"></div>
                    </div> */}
                {j}
              </span>
            ))}
          </div>
        </PageContainer>
      </div>
    </Section>
  )
}
