"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useLocaleStore } from "./store";
import type { Locale } from "./types";

// Import translation files
import enCommon from "./locales/en/common.json";
import enNavigation from "./locales/en/navigation.json";
import enLayout from "./locales/en/layout.json";
import enSettings from "./locales/en/settings.json";
import enInbox from "./locales/en/inbox.json";
import enAgents from "./locales/en/agents.json";
import enSkills from "./locales/en/skills.json";
import enAutopilots from "./locales/en/autopilots.json";
import enProjects from "./locales/en/projects.json";
import enIssues from "./locales/en/issues.json";
import enOnboarding from "./locales/en/onboarding.json";
import enModals from "./locales/en/modals.json";
import enDesktop from "./locales/en/desktop.json";
import enAuth from "./locales/en/auth.json";
import enRuntimes from "./locales/en/runtimes.json";
import enChat from "./locales/en/chat.json";

import zhCommon from "./locales/zh/common.json";
import zhNavigation from "./locales/zh/navigation.json";
import zhLayout from "./locales/zh/layout.json";
import zhSettings from "./locales/zh/settings.json";
import zhInbox from "./locales/zh/inbox.json";
import zhAgents from "./locales/zh/agents.json";
import zhSkills from "./locales/zh/skills.json";
import zhAutopilots from "./locales/zh/autopilots.json";
import zhProjects from "./locales/zh/projects.json";
import zhIssues from "./locales/zh/issues.json";
import zhOnboarding from "./locales/zh/onboarding.json";
import zhModals from "./locales/zh/modals.json";
import zhDesktop from "./locales/zh/desktop.json";
import zhAuth from "./locales/zh/auth.json";
import zhRuntimes from "./locales/zh/runtimes.json";
import zhChat from "./locales/zh/chat.json";

const resources = {
  en: {
    common: enCommon,
    navigation: enNavigation,
    layout: enLayout,
    settings: enSettings,
    inbox: enInbox,
    agents: enAgents,
    skills: enSkills,
    autopilots: enAutopilots,
    projects: enProjects,
    issues: enIssues,
    onboarding: enOnboarding,
    modals: enModals,
    desktop: enDesktop,
    auth: enAuth,
    runtimes: enRuntimes,
    chat: enChat,
  },
  zh: {
    common: zhCommon,
    navigation: zhNavigation,
    layout: zhLayout,
    settings: zhSettings,
    inbox: zhInbox,
    agents: zhAgents,
    skills: zhSkills,
    autopilots: zhAutopilots,
    projects: zhProjects,
    issues: zhIssues,
    onboarding: zhOnboarding,
    modals: zhModals,
    desktop: zhDesktop,
    auth: zhAuth,
    runtimes: zhRuntimes,
    chat: zhChat,
  },
};

// Read initial locale from Zustand store (which hydrates from localStorage/cookie)
function getInitialLocale(): Locale {
  try {
    return useLocaleStore.getState().locale;
  } catch {
    return "en";
  }
}

let initialized = false;

export function initI18n() {
  if (initialized) return;
  initialized = true;

  i18n.use(initReactI18next).init({
    resources,
    lng: getInitialLocale(),
    defaultNS: "common",
    ns: [
      "common", "navigation", "layout", "settings", "inbox", "agents",
      "skills", "autopilots", "projects", "issues", "onboarding",
      "modals", "desktop", "auth", "runtimes", "chat",
    ],
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

  // Sync i18next language when Zustand store changes
  useLocaleStore.subscribe((state) => {
    if (i18n.language !== state.locale) {
      i18n.changeLanguage(state.locale);
    }
  });
}

export { i18n };
