export type SettingsDict = {
  page: {
    title: string;
    myAccount: string;
    workspace: string;
  };
  tabs: {
    profile: string;
    appearance: string;
    tokens: string;
    general: string;
    repositories: string;
    members: string;
  };
  account: {
    title: string;
    name: string;
    clickToUpload: string;
    updateProfile: string;
    updating: string;
    avatarUpdated: string;
    profileUpdated: string;
    failedToUploadAvatar: string;
    failedToUpdateProfile: string;
  };
  appearance: {
    theme: string;
    light: string;
    dark: string;
    system: string;
    language: string;
  };
  tokens: {
    title: string;
    tokenNamePlaceholder: string;
    days30: string;
    days90: string;
    oneYear: string;
    noExpiry: string;
    create: string;
    creating: string;
    tokenCreated: string;
    copyPrompt: string;
    copyToken: string;
    done: string;
    revokeToken: string;
    revokeDescription: string;
    cancel: string;
    revoke: string;
    tokenRevoked: string;
    failedToLoad: string;
    failedToCreate: string;
    failedToRevoke: string;
    created: string;
    lastUsed: string;
    neverUsed: string;
    expires: string;
    revokeTooltip: string;
  };
  workspace: {
    general: string;
    name: string;
    description: string;
    descriptionPlaceholder: string;
    context: string;
    contextPlaceholder: string;
    slug: string;
    save: string;
    saving: string;
    saved: string;
    failedToSave: string;
    permissionDenied: string;
    dangerZone: string;
    leaveWorkspace: string;
    leaveDescription: string;
    deleteWorkspace: string;
    deleteDescription: string;
    leaveTitle: string;
    leaveConfirmDescription: string;
    deleteTitle: string;
    deleteConfirmDescription: string;
    cancel: string;
    confirm: string;
    leaving: string;
    deleting: string;
    failedToLeave: string;
    failedToDelete: string;
  };
  members: {
    title: string;
    inviteMember: string;
    emailPlaceholder: string;
    invite: string;
    inviting: string;
    owner: string;
    admin: string;
    member: string;
    ownerDescription: string;
    adminDescription: string;
    memberDescription: string;
    changeRole: string;
    remove: string;
    pending: string;
    pendingInvitations: string;
    revokeInvitation: string;
    revokeInvitationTitle: string;
    revokeInvitationDescription: string;
    noMembers: string;
    cancel: string;
    confirm: string;
    roleUpdated: string;
    failedToUpdateRole: string;
    memberRemoved: string;
    failedToRemoveMember: string;
    invitationSent: string;
    failedToSendInvitation: string;
    invitationRevoked: string;
    failedToRevokeInvitation: string;
    removeTitle: string;
    removeDescription: string;
  };
  repositories: {
    title: string;
    description: string;
    urlPlaceholder: string;
    descriptionPlaceholder: string;
    addRepository: string;
    save: string;
    saving: string;
    saved: string;
    failedToSave: string;
    permissionDenied: string;
  };
};

export const enSettings: SettingsDict = {
  page: {
    title: "Settings",
    myAccount: "My Account",
    workspace: "Workspace",
  },
  tabs: {
    profile: "Profile",
    appearance: "Appearance",
    tokens: "API Tokens",
    general: "General",
    repositories: "Repositories",
    members: "Members",
  },
  account: {
    title: "Profile",
    name: "Name",
    clickToUpload: "Click to upload avatar",
    updateProfile: "Update Profile",
    updating: "Updating...",
    avatarUpdated: "Avatar updated",
    profileUpdated: "Profile updated",
    failedToUploadAvatar: "Failed to upload avatar",
    failedToUpdateProfile: "Failed to update profile",
  },
  appearance: {
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    system: "System",
    language: "Language",
  },
  tokens: {
    title: "API Tokens",
    tokenNamePlaceholder: "Token name (e.g. My CLI)",
    days30: "30 days",
    days90: "90 days",
    oneYear: "1 year",
    noExpiry: "No expiry",
    create: "Create",
    creating: "Creating...",
    tokenCreated: "Token created",
    copyPrompt: "Copy your personal access token now. You won't be able to see it again.",
    copyToken: "Copy token",
    done: "Done",
    revokeToken: "Revoke token",
    revokeDescription: "This token will be permanently revoked and can no longer be used. This cannot be undone.",
    cancel: "Cancel",
    revoke: "Revoke",
    tokenRevoked: "Token revoked",
    failedToLoad: "Failed to load tokens",
    failedToCreate: "Failed to create token",
    failedToRevoke: "Failed to revoke token",
    created: "Created",
    lastUsed: "Last used",
    neverUsed: "Never used",
    expires: "Expires",
    revokeTooltip: "Revoke",
  },
  workspace: {
    general: "General",
    name: "Name",
    description: "Description",
    descriptionPlaceholder: "What does this workspace focus on?",
    context: "Context",
    contextPlaceholder: "Background information and context for AI agents working in this workspace",
    slug: "Slug",
    save: "Save",
    saving: "Saving...",
    saved: "Workspace settings saved",
    failedToSave: "Failed to save workspace settings",
    permissionDenied: "Only admins and owners can update workspace settings.",
    dangerZone: "Danger Zone",
    leaveWorkspace: "Leave workspace",
    leaveDescription: "Remove yourself from this workspace.",
    deleteWorkspace: "Delete workspace",
    deleteDescription: "Permanently delete this workspace and its data.",
    leaveTitle: "Leave workspace",
    leaveConfirmDescription: "Leave {name}? You will lose access until re-invited.",
    deleteTitle: "Delete workspace",
    deleteConfirmDescription: "Delete {name}? This cannot be undone. All issues, agents, and data will be permanently removed.",
    cancel: "Cancel",
    confirm: "Confirm",
    leaving: "Leaving...",
    deleting: "Deleting...",
    failedToLeave: "Failed to leave workspace",
    failedToDelete: "Failed to delete workspace",
  },
  members: {
    title: "Members",
    inviteMember: "Invite member",
    emailPlaceholder: "user@company.com",
    invite: "Invite",
    inviting: "Inviting...",
    owner: "Owner",
    admin: "Admin",
    member: "Member",
    ownerDescription: "Full access, manage all settings",
    adminDescription: "Manage members and settings",
    memberDescription: "Create and work on issues",
    changeRole: "Change role",
    remove: "Remove from workspace",
    pending: "Pending",
    pendingInvitations: "Pending invitations",
    revokeInvitation: "Revoke invitation",
    revokeInvitationTitle: "Revoke invitation",
    revokeInvitationDescription: "Revoke the invitation to {email}? They will no longer be able to join this workspace.",
    noMembers: "No members found.",
    cancel: "Cancel",
    confirm: "Confirm",
    roleUpdated: "Role updated",
    failedToUpdateRole: "Failed to update member",
    memberRemoved: "Member removed",
    failedToRemoveMember: "Failed to remove member",
    invitationSent: "Invitation sent",
    failedToSendInvitation: "Failed to send invitation",
    invitationRevoked: "Invitation revoked",
    failedToRevokeInvitation: "Failed to revoke invitation",
    removeTitle: "Remove {name}",
    removeDescription: "Remove {name} from {workspace}? They will lose access to this workspace.",
  },
  repositories: {
    title: "Repositories",
    description: "Git repositories associated with this workspace. Agents use these to clone and work on code.",
    urlPlaceholder: "https://git.example.com/org/repo.git",
    descriptionPlaceholder: "Description (e.g. Go backend + Next.js frontend)",
    addRepository: "Add repository",
    save: "Save",
    saving: "Saving...",
    saved: "Repositories saved",
    failedToSave: "Failed to save repositories",
    permissionDenied: "Only admins and owners can manage repositories.",
  },
};

export const zhSettings: SettingsDict = {
  page: {
    title: "设置",
    myAccount: "我的账号",
    workspace: "工作区",
  },
  tabs: {
    profile: "个人资料",
    appearance: "外观",
    tokens: "API 令牌",
    general: "通用",
    repositories: "代码仓库",
    members: "成员",
  },
  account: {
    title: "个人资料",
    name: "姓名",
    clickToUpload: "点击上传头像",
    updateProfile: "更新资料",
    updating: "更新中...",
    avatarUpdated: "头像已更新",
    profileUpdated: "资料已更新",
    failedToUploadAvatar: "上传头像失败",
    failedToUpdateProfile: "更新资料失败",
  },
  appearance: {
    theme: "主题",
    light: "浅色",
    dark: "深色",
    system: "跟随系统",
    language: "语言",
  },
  tokens: {
    title: "API 令牌",
    tokenNamePlaceholder: "令牌名称（如 My CLI）",
    days30: "30 天",
    days90: "90 天",
    oneYear: "1 年",
    noExpiry: "永不过期",
    create: "创建",
    creating: "创建中...",
    tokenCreated: "令牌已创建",
    copyPrompt: "请立即复制你的个人访问令牌。你之后将无法再次查看。",
    copyToken: "复制令牌",
    done: "完成",
    revokeToken: "撤销令牌",
    revokeDescription: "此令牌将被永久撤销，无法再使用。此操作不可撤销。",
    cancel: "取消",
    revoke: "撤销",
    tokenRevoked: "令牌已撤销",
    failedToLoad: "加载令牌失败",
    failedToCreate: "创建令牌失败",
    failedToRevoke: "撤销令牌失败",
    created: "创建于",
    lastUsed: "上次使用",
    neverUsed: "从未使用",
    expires: "过期",
    revokeTooltip: "撤销",
  },
  workspace: {
    general: "通用",
    name: "名称",
    description: "描述",
    descriptionPlaceholder: "这个工作区关注什么？",
    context: "上下文",
    contextPlaceholder: "为在此工作区工作的 AI 代理提供的背景信息",
    slug: "标识",
    save: "保存",
    saving: "保存中...",
    saved: "工作区设置已保存",
    failedToSave: "保存工作区设置失败",
    permissionDenied: "仅管理员和所有者可以更新工作区设置。",
    dangerZone: "危险操作",
    leaveWorkspace: "离开工作区",
    leaveDescription: "将自己从此工作区移除。",
    deleteWorkspace: "删除工作区",
    deleteDescription: "永久删除此工作区及其数据。",
    leaveTitle: "离开工作区",
    leaveConfirmDescription: "离开 {name}？你将失去访问权限，直到被重新邀请。",
    deleteTitle: "删除工作区",
    deleteConfirmDescription: "删除 {name}？此操作不可撤销。所有问题、代理和数据将被永久删除。",
    cancel: "取消",
    confirm: "确认",
    leaving: "离开中...",
    deleting: "删除中...",
    failedToLeave: "离开工作区失败",
    failedToDelete: "删除工作区失败",
  },
  members: {
    title: "成员",
    inviteMember: "邀请新成员",
    emailPlaceholder: "user@company.com",
    invite: "邀请",
    inviting: "邀请中...",
    owner: "所有者",
    admin: "管理员",
    member: "成员",
    ownerDescription: "完全访问，管理所有设置",
    adminDescription: "管理成员和设置",
    memberDescription: "创建和处理问题",
    changeRole: "更改角色",
    remove: "从工作区移除",
    pending: "待处理",
    pendingInvitations: "待处理邀请",
    revokeInvitation: "撤销邀请",
    revokeInvitationTitle: "撤销邀请",
    revokeInvitationDescription: "撤销对 {email} 的邀请？他们将无法加入此工作区。",
    noMembers: "未找到成员。",
    cancel: "取消",
    confirm: "确认",
    roleUpdated: "角色已更新",
    failedToUpdateRole: "更新成员失败",
    memberRemoved: "成员已移除",
    failedToRemoveMember: "移除成员失败",
    invitationSent: "邀请已发送",
    failedToSendInvitation: "发送邀请失败",
    invitationRevoked: "邀请已撤销",
    failedToRevokeInvitation: "撤销邀请失败",
    removeTitle: "移除 {name}",
    removeDescription: "将 {name} 从 {workspace} 移除？他们将失去此工作区的访问权限。",
  },
  repositories: {
    title: "代码仓库",
    description: "与此工作区关联的 Git 仓库。代理使用这些仓库来克隆和处理代码。",
    urlPlaceholder: "https://git.example.com/org/repo.git",
    descriptionPlaceholder: "描述（如 Go 后端 + Next.js 前端）",
    addRepository: "添加仓库",
    save: "保存",
    saving: "保存中...",
    saved: "仓库已保存",
    failedToSave: "保存仓库失败",
    permissionDenied: "仅管理员和所有者可以管理仓库。",
  },
};
