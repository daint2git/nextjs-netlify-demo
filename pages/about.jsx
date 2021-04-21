import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function About() {
  const { t } = useTranslation("common", { useSuspense: false });
  return (
    <div>
      <h1>About</h1> <p>{t("error")}</p>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default About;
