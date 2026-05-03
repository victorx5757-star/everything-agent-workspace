"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { defaultStorage } from "../platform/storage";
import type { Locale } from "./types";

const COOKIE_NAME = "multica-locale";
const COOKIE_MAX_AGE = 31536000; // 1 year

interface LocaleStore {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

function readLocaleCookie(): Locale | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|;\s*)multica-locale=(\w+)/);
  const value = match?.[1];
  if (value === "en" || value === "zh") return value;
  return null;
}

function writeLocaleCookie(locale: Locale) {
  if (typeof document === "undefined") return;
  document.cookie = `${COOKIE_NAME}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

export const useLocaleStore = create<LocaleStore>()(
  persist(
    (set) => ({
      locale: "en" as Locale,
      setLocale: (locale: Locale) => {
        set({ locale });
        writeLocaleCookie(locale);
      },
    }),
    {
      name: "multica-locale",
      storage: createJSONStorage(() => defaultStorage),
      // On hydration, prefer cookie value over localStorage as the source of truth
      // (cookie is shared with landing page, localStorage is dashboard-only).
      onRehydrateStorage: () => {
        return (_state, error) => {
          if (error) return;
          const cookieLocale = readLocaleCookie();
          if (cookieLocale) {
            useLocaleStore.setState({ locale: cookieLocale });
          }
        };
      },
    },
  ),
);
