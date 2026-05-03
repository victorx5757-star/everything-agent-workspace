"use client";

import { useEffect, useState } from "react";
import { Save, LogOut } from "lucide-react";
import { Input } from "@multica/ui/components/ui/input";
import { Textarea } from "@multica/ui/components/ui/textarea";
import { Label } from "@multica/ui/components/ui/label";
import { Button } from "@multica/ui/components/ui/button";
import { Card, CardContent } from "@multica/ui/components/ui/card";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@multica/ui/components/ui/alert-dialog";
import { toast } from "sonner";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "@multica/core/auth";
import { useLeaveWorkspace, useDeleteWorkspace } from "@multica/core/workspace/mutations";
import { useWorkspaceId } from "@multica/core/hooks";
import { useCurrentWorkspace } from "@multica/core/paths";
import {
  memberListOptions,
  workspaceKeys,
  workspaceListOptions,
} from "@multica/core/workspace/queries";
import { api } from "@multica/core/api";
import { paths } from "@multica/core/paths";
import { useTranslation } from "@multica/core/i18n";
import type { Workspace } from "@multica/core/types";
import { useNavigation } from "../../navigation";

export function WorkspaceTab() {
  const { t } = useTranslation();
  const user = useAuthStore((s) => s.user);
  const workspace = useCurrentWorkspace();
  const wsId = useWorkspaceId();
  const { data: members = [] } = useQuery(memberListOptions(wsId));
  const qc = useQueryClient();
  const leaveWorkspace = useLeaveWorkspace();
  const deleteWorkspace = useDeleteWorkspace();
  const navigation = useNavigation();

  const navigateAwayFromCurrentWorkspace = async () => {
    const wsList = await qc.fetchQuery({
      ...workspaceListOptions(),
      staleTime: 0,
    });
    const remaining = wsList.filter((w) => w.id !== workspace?.id);
    const next = remaining[0];
    navigation.push(
      next ? paths.workspace(next.slug).issues() : paths.onboarding(),
    );
  };

  const [name, setName] = useState(workspace?.name ?? "");
  const [description, setDescription] = useState(workspace?.description ?? "");
  const [context, setContext] = useState(workspace?.context ?? "");
  const [saving, setSaving] = useState(false);
  const [actionId, setActionId] = useState<string | null>(null);
  const [confirmAction, setConfirmAction] = useState<{
    title: string;
    description: string;
    variant?: "destructive";
    onConfirm: () => Promise<void>;
  } | null>(null);

  const currentMember = members.find((m) => m.user_id === user?.id) ?? null;
  const canManageWorkspace = currentMember?.role === "owner" || currentMember?.role === "admin";
  const isOwner = currentMember?.role === "owner";

  useEffect(() => {
    setName(workspace?.name ?? "");
    setDescription(workspace?.description ?? "");
    setContext(workspace?.context ?? "");
  }, [workspace]);

  const handleSave = async () => {
    if (!workspace) return;
    setSaving(true);
    try {
      const updated = await api.updateWorkspace(workspace.id, {
        name,
        description,
        context,
      });
      qc.setQueryData(workspaceKeys.list(), (old: Workspace[] | undefined) =>
        old?.map((ws) => (ws.id === updated.id ? updated : ws)),
      );
      toast.success(t.settings.workspace.saved);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : t.settings.workspace.failedToSave);
    } finally {
      setSaving(false);
    }
  };

  const handleLeaveWorkspace = () => {
    if (!workspace) return;
    setConfirmAction({
      title: t.settings.workspace.leaveTitle,
      description: t.settings.workspace.leaveConfirmDescription.replace("{name}", workspace.name),
      variant: "destructive",
      onConfirm: async () => {
        setActionId("leave");
        try {
          await leaveWorkspace.mutateAsync(workspace.id);
          await navigateAwayFromCurrentWorkspace();
        } catch (e) {
          toast.error(e instanceof Error ? e.message : t.settings.workspace.failedToLeave);
        } finally {
          setActionId(null);
        }
      },
    });
  };

  const handleDeleteWorkspace = () => {
    if (!workspace) return;
    setConfirmAction({
      title: t.settings.workspace.deleteTitle,
      description: t.settings.workspace.deleteConfirmDescription.replace("{name}", workspace.name),
      variant: "destructive",
      onConfirm: async () => {
        setActionId("delete-workspace");
        try {
          await deleteWorkspace.mutateAsync(workspace.id);
          await navigateAwayFromCurrentWorkspace();
        } catch (e) {
          toast.error(e instanceof Error ? e.message : t.settings.workspace.failedToDelete);
        } finally {
          setActionId(null);
        }
      },
    });
  };

  if (!workspace) return null;

  return (
    <div className="space-y-8">
      {/* Workspace settings */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold">{t.settings.workspace.general}</h2>

        <Card>
          <CardContent className="space-y-3">
            <div>
              <Label className="text-xs text-muted-foreground">{t.settings.workspace.name}</Label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!canManageWorkspace}
                className="mt-1"
              />
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">{t.settings.workspace.description}</Label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                disabled={!canManageWorkspace}
                className="mt-1 resize-none"
                placeholder={t.settings.workspace.descriptionPlaceholder}
              />
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">{t.settings.workspace.context}</Label>
              <Textarea
                value={context}
                onChange={(e) => setContext(e.target.value)}
                rows={4}
                disabled={!canManageWorkspace}
                className="mt-1 resize-none"
                placeholder={t.settings.workspace.contextPlaceholder}
              />
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">{t.settings.workspace.slug}</Label>
              <div className="mt-1 rounded-md border bg-muted/50 px-3 py-2 text-sm text-muted-foreground">
                {workspace.slug}
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 pt-1">
              <Button
                size="sm"
                onClick={handleSave}
                disabled={saving || !name.trim() || !canManageWorkspace}
              >
                <Save className="h-3 w-3" />
                {saving ? t.settings.workspace.saving : t.settings.workspace.save}
              </Button>
            </div>
            {!canManageWorkspace && (
              <p className="text-xs text-muted-foreground">
                {t.settings.workspace.permissionDenied}
              </p>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Danger Zone */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <LogOut className="h-4 w-4 text-muted-foreground" />
          <h2 className="text-sm font-semibold">{t.settings.workspace.dangerZone}</h2>
        </div>

        <Card>
          <CardContent className="space-y-3">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium">{t.settings.workspace.leaveWorkspace}</p>
                <p className="text-xs text-muted-foreground">
                  {t.settings.workspace.leaveDescription}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLeaveWorkspace}
                disabled={actionId === "leave"}
              >
                {actionId === "leave" ? t.settings.workspace.leaving : t.settings.workspace.leaveWorkspace}
              </Button>
            </div>

            {isOwner && (
              <div className="flex flex-col gap-2 border-t pt-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-destructive">{t.settings.workspace.deleteWorkspace}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.settings.workspace.deleteDescription}
                  </p>
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={handleDeleteWorkspace}
                  disabled={actionId === "delete-workspace"}
                >
                  {actionId === "delete-workspace" ? t.settings.workspace.deleting : t.settings.workspace.deleteWorkspace}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      <AlertDialog open={!!confirmAction} onOpenChange={(v) => { if (!v) setConfirmAction(null); }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{confirmAction?.title}</AlertDialogTitle>
            <AlertDialogDescription>{confirmAction?.description}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t.settings.workspace.cancel}</AlertDialogCancel>
            <AlertDialogAction
              variant={confirmAction?.variant === "destructive" ? "destructive" : "default"}
              onClick={async () => {
                await confirmAction?.onConfirm();
                setConfirmAction(null);
              }}
            >
              {t.settings.workspace.confirm}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
