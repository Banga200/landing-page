import { useI18n } from "vue-i18n";
export function updateDirection(lang: string) {
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
}
export const formatNumber = (n: string | number) => {
  return Intl.NumberFormat().format(n);
}
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
  id: number;
  imageUrl?: string;
  title: string;
  subtitle: string,
  description: string;
  techs: string[];
  stats: StatItem[];
}

export interface ContactItem extends ServiceItem {
  href: string;
}
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
      href: `https://wa.me/+966501234567`
    },
    {
      title: t("phone"),
      subTitle: "+966 12 345 6789",
      icon: "phone",
      href: `tel:+966123456789`
    },
    {
      title: t("email"),
      subTitle: "info@company.com",
      icon: "mail",
      href: `mailto:info@company.com`
    },
  ];

  return contacts;
};
export const getProjects = (): ProjectItem[] => {
  const { t } = useI18n();

  const projects: ProjectItem[] = [
    {
      id: 1,
      imageUrl: "/images/project1.jpg",
      title: t("project1_title"),
      subtitle: t("project1_subtitle"),
      description: t("project1_desc"),
      techs:  [
        "React Native",
        "Firebase",
        "Redux",
        "TypeScript"
      ] ,// your icon name,
      stats: [
        { value: formatNumber(10000) + "+", title: t("active_user"), icon: "users" },
        { value: formatNumber(500) + "+", title: t("daily_opretion"), icon: "trending-up" },
        { value: formatNumber(6), title: t("development_months"), icon: "clock" }
      ]
    },
    {
      id: 2,
      imageUrl: "/images/project2.jpg",
      title: t("project2_title"),
      subtitle: t('project2_subtitle'),
      description: t("project2_desc"),
      techs: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Stripe"
      ],
      stats: [
        { value: formatNumber(50) + "+", title: t("team"), icon: "users" },
        { value: formatNumber(200) + "+", title: t("active_project"), icon: "trending-up" },
        { value: formatNumber(4), title: t("development_months"), icon: "clock" }
      ]
    },
    {
      id: 3,
      imageUrl: "/images/project3.jpg",
      title: t("project3_title"),
      subtitle: t('project3_subtitle'),
      description: t("project3_desc"),
      techs: [
        "Vue.js",
        "Express",
        "MySQL",
        "Socket.io"
      ],
      stats: [
        { value: formatNumber(5000) + "+", title: t("content_page"), icon: "users" },
        { value: formatNumber(25) + "+", title: t("editor"), icon: "trending-up" },
        { value: formatNumber(5), title: t("development_months"), icon: "clock" }
      ]
    },
    {
      id: 4,
      imageUrl: "/images/project4.jpg",
      title: t("project4_title"),
      subtitle: t('project4_subtitle'),
      description: t("project4_desc"),
      techs: [
        "Next.js",
        "TailwindCSS",
        "Prisma",
        "MongoDB"
      ],
      stats: [
        { value: formatNumber(1500) + "+", title: t("monthly_book"), icon: "users" },
        { value: formatNumber(95) + "%", title: t("satisfaction_rate"), icon: "trending-up" },
        { value: formatNumber(3), title: t("development_months"), icon: "clock" }
      ]
    },
  ];

  return projects;
};