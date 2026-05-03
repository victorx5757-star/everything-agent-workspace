"use client";

import { useLocaleStore } from "./store";
import { dictionaries } from "./dicts";

export function useTranslation() {
  const locale = useLocaleStore((s) => s.locale);
  const setLocale = useLocaleStore((s) => s.setLocale);
  return { locale, setLocale, t: dictionaries[locale] };
}
