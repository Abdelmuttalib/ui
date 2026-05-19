import { useTranslation } from 'react-i18next'

export const Hero = () => {
  const { t } = useTranslation()

  return (
    <div className="flex min-h-screen">
      <section className="w-full py-32 md:py-48">
        <h1 className="mb-6 text-3xl font-bold tracking-tighter">{t('hero-title')}</h1>
      </section>
    </div>
  )
}
