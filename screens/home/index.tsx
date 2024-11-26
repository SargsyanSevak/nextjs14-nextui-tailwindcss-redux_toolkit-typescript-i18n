import { useTranslations } from "next-intl";
import React from "react";

const HomeScrreen = () => {
  const t = useTranslations("index");
  return <div className="w-full h-full bg-purple-400">{t("hello")}</div>;
};

export default HomeScrreen;
