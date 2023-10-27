import type { LocaleType } from "./index";

const en: LocaleType = {
  Auth: {
    Submit: "提交",
    Email: "邮箱",
    Phone: "手机",
    Code: "验证码",
    GetCode: "获取验证码",
    WeChat: "微信",
    Username: "用户名",
    Password: "密码",
    Login: (type?: string) => `${type ?? ""}登录`,
    Register: (type?: string) => `${type ?? ""}注册`,
    Sent: (ttl: number) => `已发送(${ttl}s)`,
  },
  // Index Page
  Index: {
    Title: process.env.NEXT_PUBLIC_TITLE || "ChatGPT Admin Web",
    SubTitle: "欢迎关注微信公众号：",
    Premium: "升级到高级版",
    WelcomeTitle: "欢迎使用ChatGPT Admin Web",
    WelcomeMessage:
      "你好，我是ChatGPT，一个基于GPT-3.5架构的人工智能助手。我被设计用来回答各种问题、提供信息、提供建议和与您进行对话。我在各种主题上有一定的知识，并且可以用多种语言与您交流。如果您有任何问题或需要帮助，随时问我，我会尽力为您提供所需的信息和支持。",
    Return: "返回",
    WelcomeCaption: "点击下面的按钮开始聊天吧！",
  },
  UnknownError: "未知错误，请联系管理员",
  WIP: "WIP...",
  Error: {
    Unauthorized:
      "Now you are not logged in, please refresh your browser cache and log in.",
    TooManyRequests:
      "Your account has reached the maximum number of requests in three hours, please try again later.",
    TooFastRequests:
      "The request is too fast, wait a bit (5s between requests)",
    ContentBlock:
      "Please check the text for sensitive words, and contact customer service if you have been killed by mistake.",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} messages`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} messages with ChatGPT`,
    Actions: {
      ChatList: "Go To Chat List",
      CompressedHistory: "Compressed History Memory Prompt",
      Export: "Export All Messages as Markdown",
      Copy: "Copy",
      Stop: "Stop",
      Retry: "Retry",
    },
    Typing: "Typing…",
    Input: (submitKey: string) =>
      `Type something and press ${submitKey} to send`,
    Send: "Send",
  },
  Profile: {
    Title: "User Information",
    Plan: {
      Title: "Plan",
    },
    Invite: {
      Title: "Invite Others",
      SubTitle:
        "Successfully inviting others can earn reset chances and recharge discounts",
      Code: "Invitation Code",
      InviteLink: "Invite Link",
      CopyInviteLink: "Copy Invite Link",
      InviteeNumber: "Current Number of Invitees",
    },
    Upgrade: "Upgrade to Paid User",
    Reset: {
      Title: "Reset Current Limit",
      SubTitle: "Can clear the message limit within a fixed time",
      Click: (t: number) => `Clear once Remaining: ${t}`,
    },
    RateLimit: {
      Title: (t: number) => `Fixed Time Message Limit (${t}Hours)`,
      TitleFree: "Fixed Time Message Limit (Free User)",
      Subtitle:
        "Total number of requested messages Click to view specific request time",
      Interval: "Request Interval",
      IntervalDesp: "Request once every few seconds",
    },
  },
  Export: {
    Title: "All Messages",
    Copy: "Copy All",
    Download: "Download",
  },
  Memory: {
    Title: "Memory Prompt",
    EmptyContent: "Nothing yet.",
    Copy: "Copy All",
  },
  Home: {
    NewChat: "New Chat",
    DeleteChat: "Confirm to delete the selected conversation?",
  },
  Settings: {
    Title: "Settings",
    SubTitle: "All Settings",
    Actions: {
      ClearAll: "Clear All Data",
      ResetAll: "Reset All Settings",
      Close: "Close",
    },
    Lang: {
      Name: "语言",
      Options: {
        cn: "中文",
        en: "English",
      },
    },
    Avatar: "Avatar",
    Account: "Account",
    Update: {
      Version: (x: string) => `Version: ${x}`,
      IsLatest: "Latest version",
      CheckUpdate: "Check Update",
      IsChecking: "Checking update...",
      FoundUpdate: (x: string) => `Found new version: ${x}`,
      GoToUpdate: "Update",
    },
    SendKey: "Send Key",
    Theme: "Theme",
    TightBorder: "Tight Border",
    HistoryCount: {
      Title: "Attached Messages Count",
      SubTitle: "Number of sent messages attached per request",
    },
    CompressThreshold: {
      Title: "History Compression Threshold",
      SubTitle:
        "Will compress if uncompressed messages length exceeds the value",
    },
    Token: {
      Title: "API Key",
      SubTitle: "Use your key to ignore access code limit",
      Placeholder: "OpenAI API Key",
    },
    AccessCode: {
      Title: "Access Code",
      SubTitle: "Access control enabled",
      Placeholder: "Need Access Code",
    },
    Model: "Model",
    Temperature: {
      Title: "Temperature",
      SubTitle: "A larger value makes the more random output",
    },
    MaxTokens: {
      Title: "Max Tokens",
      SubTitle: "Maximum length of input tokens and generated tokens",
    },
    PresencePenlty: {
      Title: "Presence Penalty",
      SubTitle:
        "A larger value increases the likelihood to talk about new topics",
    },
  },
  Store: {
    DefaultTopic: "New Conversation",
    BotHello: "Hello! How can I assist you today?",
    Error: "Something went wrong, please try again later.",
    Prompt: {
      History: (content: string) =>
        "This is a summary of the chat history between the AI and the user as a recap: " +
        content,
      Topic:
        "Provide a brief topic of the sentence without explanation. If there is no topic, return 'Chitchat'.",
      Summarize:
        "Summarize our discussion briefly in 50 characters or less to use as a prompt for future context.",
    },
    ConfirmClearAll: "Confirm to clear all chat and setting data?",
  },
  Copy: {
    Success: "Copied to clipboard",
    Failed: "Copy failed, please grant permission to access clipboard",
  },
};

export default en;
