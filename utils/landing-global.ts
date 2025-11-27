import { useI18n } from "vue-i18n";

// const { t } = useNuxtApp().$i18n;
// Define a type for each stat item
export interface StatItem {
  value: string;
  title: string;
  icon: string;
}
export interface ServiceItem {
  title: string;
  subTitle: string;
  icon: string;
}

export interface ContactItem extends ServiceItem {}
// Export a function that returns the stats array
export const getStats = (): StatItem[] => {
  const { t } = useI18n();

  const stats: StatItem[] = [
    { value: "150+", title: t("stats.experience"), icon: 'calendar' },
    { value: "120+", title: t("stats.clients"), icon: 'users' },
    { value: "8+",  title: t("stats.projects"), icon: 'briefcase' },
  ];

  return stats;
};
export const getServices = (): ServiceItem[] => {
  const { t } = useI18n();

  const services: ServiceItem[] = [
    { title: t("web_development"), subTitle: t("web_development_desc"), icon: 'globe' },
    { title: t("mobile_apps"), subTitle: t("mobile_apps_desc"), icon: 'smartphone' },
    { title: t("ui_ux"), subTitle: t("ui_ux_desc"), icon: 'palette' },
    { title: t("cloud_solutions"), subTitle: t("cloud_solutions_desc"), icon: 'cloud' },
  ];

  return services;
};

export const getContacts = (): ContactItem[] => {
  const { t } = useI18n();

  const contacts: ContactItem[] = [
    {
      title: t("whatsapp"),
      subTitle: "+966 50 123 4567",
      icon: "message-circle", // your icon name
    },
    {
      title: t("phone"),
      subTitle: "+966 12 345 6789",
      icon: "phone",
    },
    {
      title: t("email"),
      subTitle: "info@company.com",
      icon: "mail",
    },
  ];

  return contacts;
};