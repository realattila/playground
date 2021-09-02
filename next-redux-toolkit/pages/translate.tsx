import Link from "next/link";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Homepage = () => {
  const router = useRouter();
  const { t } = useTranslation("main");

  return (
    <>
      <main>
        <div>
          <Link href="/translate" locale={router.locale === "en" ? "fa" : "en"}>
            <button>{t("text")}</button>
          </Link>
        </div>
      </main>
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["main"])),
  },
});

export default Homepage;
