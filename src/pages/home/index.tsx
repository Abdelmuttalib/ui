import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import V2Page from 'src/components/v2'

export default function Home() {
  const { t } = useTranslation('translation')
  return (
    <>
      <Helmet>
        <title>{t('title')}</title>
      </Helmet>
      <V2Page />
    </>
  )
}
