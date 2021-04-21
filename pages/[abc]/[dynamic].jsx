import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from '../../next-i18next.config'

const Dynamic = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { dynamic } = router.query;

  return (
    <div>
      <p>{`Dynamic: ${dynamic}`}</p>
      <p>{t("error")}</p>
    </div>
  );
};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"]), nextI18NextConfig),
  },
});

export default Dynamic;
