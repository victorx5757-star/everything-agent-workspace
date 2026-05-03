"use client";

import { STATUS_CONFIG, PRIORITY_CONFIG } from "@multica/core/issues/config";
import { useActorName } from "@multica/core/workspace/hooks";
import { useTranslation } from "@multica/core/i18n";
import { StatusIcon, PriorityIcon } from "../../issues/components";
import type { InboxItem, InboxItemType, IssueStatus, IssuePriority } from "@multica/core/types";

const typeLabelKeys: Record<InboxItemType, string> = {
  issue_assigned: "activity.assigned",
  unassigned: "activity.unassigned",
  assignee_changed: "activity.assigneeChanged",
  status_changed: "activity.statusChanged",
  priority_changed: "activity.priorityChanged",
  due_date_changed: "activity.dueDateChanged",
  new_comment: "activity.newComment",
  mentioned: "activity.mentioned",
  review_requested: "activity.reviewRequested",
  task_completed: "activity.taskCompleted",
  task_failed: "activity.taskFailed",
  agent_blocked: "activity.agentBlocked",
  agent_completed: "activity.agentCompleted",
  reaction_added: "activity.reacted",
};

export { typeLabelKeys };

function shortDate(dateStr: string): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export function InboxDetailLabel({ item }: { item: InboxItem }) {
  const { getActorName } = useActorName();
  const { t } = useTranslation("inbox");
  const details = item.details ?? {};

  switch (item.type) {
    case "status_changed": {
      if (!details.to) return <span>{t(typeLabelKeys[item.type])}</span>;
      const label = STATUS_CONFIG[details.to as IssueStatus]?.label ?? details.to;
      return (
        <span className="inline-flex items-center gap-1">
          {t("activity.setStatus")}
          <StatusIcon status={details.to as IssueStatus} className="h-3 w-3" />
          {label}
        </span>
      );
    }
    case "priority_changed": {
      if (!details.to) return <span>{t(typeLabelKeys[item.type])}</span>;
      const label = PRIORITY_CONFIG[details.to as IssuePriority]?.label ?? details.to;
      return (
        <span className="inline-flex items-center gap-1">
          {t("activity.setPriority")}
          <PriorityIcon priority={details.to as IssuePriority} className="h-3 w-3" />
          {label}
        </span>
      );
    }
    case "issue_assigned": {
      if (details.new_assignee_id) {
        return <span>{t("activity.assignedTo", { name: getActorName(details.new_assignee_type ?? "member", details.new_assignee_id) })}</span>;
      }
      return <span>{t(typeLabelKeys[item.type])}</span>;
    }
    case "unassigned":
      return <span>{t("activity.removedAssignee")}</span>;
    case "assignee_changed": {
      if (details.new_assignee_id) {
        return <span>{t("activity.assignedTo", { name: getActorName(details.new_assignee_type ?? "member", details.new_assignee_id) })}</span>;
      }
      return <span>{t(typeLabelKeys[item.type])}</span>;
    }
    case "due_date_changed": {
      if (details.to) return <span>{t("activity.setDueDateTo", { date: shortDate(details.to) })}</span>;
      return <span>{t("activity.removedDueDate")}</span>;
    }
    case "new_comment": {
      if (item.body) return <span>{item.body}</span>;
      return <span>{t(typeLabelKeys[item.type])}</span>;
    }
    case "reaction_added": {
      const emoji = details.emoji;
      if (emoji) return <span>{t("activity.reactedEmoji", { emoji })}</span>;
      return <span>{t(typeLabelKeys[item.type])}</span>;
    }
    default:
      return <span>{t(typeLabelKeys[item.type] as string) ?? item.type}</span>;
  }
}
