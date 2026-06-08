import streakon0 from "../../../assets/images/projects/streakon/streakon-0.webp";
import streakon1 from "../../../assets/images/projects/streakon/streakon-1.webp";
import streakon2 from "../../../assets/images/projects/streakon/streakon-2.webp";
import streakon3 from "../../../assets/images/projects/streakon/streakon-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "StreakOn",
  theme: "dark",
  tags: ["next", "node", "postgresql", "redis"],
  videoBorder: false,
  live: "https://www.streakon.app",
  description:
    "StreakOn 是一款习惯追踪应用，帮助用户建立和保持日常习惯，提供进度可视化和提醒功能。<br/><br/>应用围绕低交互门槛、移动优先和轻量社交功能设计，使用 Next.js、Node.js、PostgreSQL 和 Redis 构建。",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streakon0,
        alt: "个人与群组习惯",
        caption: "个人与群组习惯",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon1,
        alt: "习惯进度",
        caption: "习惯进度",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon2,
        alt: "好友互动",
        caption: "好友互动",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon3,
        alt: "邀请流程",
        caption: "邀请流程",
      },
    },
  ],
} as const satisfies ProjectContent;
