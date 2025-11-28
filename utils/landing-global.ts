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
export interface ProjectItem {
  imageUrl?: string;
  title: string;
  description: string;
  techs: string[];
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
export const getProjects = (): ProjectItem[] => {
  const { t } = useI18n();

  const projects: ProjectItem[] = [
    {
      imageUrl: "/images/project1.jpg",
      title: t("project1_title"),
      description: t("project1_desc"),
      techs:  [
        "React Native",
        "Firebase",
        "Redux",
        "TypeScript"
      ] // your icon name
    },
    {
      imageUrl: "/images/project2.jpg",
      title: t("project2_title"),
      description: t("project2_desc"),
      techs: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Stripe"
      ]
    },
    {
      imageUrl: "/images/project3.jpg",
      title: t("project3_title"),
      description: t("project3_desc"),
      techs: [
        "Vue.js",
        "Express",
        "MySQL",
        "Socket.io"
      ],
    },
    {
      imageUrl: "/images/project4.jpg",
      title: t("project4_title"),
      description: t("project4_desc"),
      techs: [
      "Next.js",
      "TailwindCSS",
      "Prisma",
      "MongoDB"
],
    },
  ];

  return projects;
};