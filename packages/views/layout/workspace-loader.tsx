"use client";

import { MulticaIcon } from "@multica/ui/components/common/multica-icon";
import { useTranslation } from "@multica/core/i18n";

export function WorkspaceLoader({ name }: { name?: string | null }) {
  const { t } = useTranslation('layout');
  return (
    <div
      className="flex h-svh w-full items-center justify-center bg-background"
      aria-live="polite"
      role="status"
    >
      <div className="flex flex-col items-center gap-4">
        <MulticaIcon className="size-8 animate-pulse" />
        {name ? (
          <p className="text-sm text-muted-foreground">
            {t('loading')} <span className="font-medium text-foreground">{name}</span>…
          </p>
        ) : (
          <p className="text-sm text-muted-foreground">{t('loadingWorkspace')}</p>
        )}
      </div>
    </div>
  );
}
