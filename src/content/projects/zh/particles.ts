import videoParticles from "../../../assets/videos/particles.mp4";

import particles0 from "../../../assets/images/projects/particles/particles-0.webp";
import particles1 from "../../../assets/images/projects/particles/particles-1.webp";
import particles2 from "../../../assets/images/projects/particles/particles-2.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "WebGL Particles",
  theme: "dark",
  tags: ["ogl", "javascript", "glsl"],
  live: "https://particles.david-hckh.com/",
  videoBorder: false,
  description:
    "交互式粒子效果集合，利用 WebGL 和着色器在浏览器中创建令人惊叹的视觉体验。<br/><br/>粒子在不同 3D 形态之间流畅过渡，通过数学公式和噪声函数驱动动画。",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoParticles,
        caption: "粒子系统",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles0,
        alt: "结状形态",
        caption: "结状形态",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles1,
        alt: "环状形态",
        caption: "环状形态",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles2,
        alt: "球状形态",
        caption: "球状形态",
      },
    },
  ],
} as const satisfies ProjectContent;
