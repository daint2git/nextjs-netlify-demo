import { useTranslation } from 'next-i18next';
import { useRouter} from 'next/router'
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Dynamic = () => {
  const router = useRouter()
  const { dynamic } = router.query

  return <p>Dynamic: {dynamic}</p>
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});

export default Dynamic
