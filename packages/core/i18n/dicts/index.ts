import type { SettingsDict } from "./settings";
import { enSettings, zhSettings } from "./settings";
import type { Locale } from "../types";

export type DashboardDict = {
  settings: SettingsDict;
};

const dictionaries: Record<Locale, DashboardDict> = {
  en: { settings: enSettings },
  zh: { settings: zhSettings },
};

export { dictionaries };
export { enSettings, zhSettings } from "./settings";
export type { SettingsDict } from "./settings";
