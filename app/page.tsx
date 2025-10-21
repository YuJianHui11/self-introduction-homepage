import Image from "next/image";

const techTags = [
  "Go",
  "C++",
  "AI Agent",
  "分布式系统",
  "MySQL",
  "Redis",
  "Kafka",
  "K8s",
];

const highlights = [
  {
    title: "海量数据处理",
    description:
      "在互联网大厂核心部门负责千万级吞吐的分布式处理系统，关注稳定性与可观测性。",
  },
  {
    title: "AI 技术落地",
    description:
      "深入研究 AI 与工程的融合，持续推进 Agent 能力在研发流程与业务场景的应用。",
  },
  {
    title: "体系化工程观",
    description:
      "从架构设计到工程落地保持全链路视角，交付可维护、可扩展的技术方案。",
  },
];

const skillGroups = [
  {
    title: "技术栈",
    items: ["Go / C++", "MySQL · Redis · Kafka", "Kubernetes · 云原生"],
  },
  {
    title: "系统经验",
    items: [
      "大型分布式系统设计与演进",
      "海量数据存储与处理平台建设",
      "工程效率与质量体系搭建",
    ],
  },
  {
    title: "AI 关注",
    items: [
      "AI Agent 工程化实践",
      "大模型与工具编排",
      "智能化协同研发流程",
    ],
  },
];

const focusAreas = [
  {
    title: "分布式处理系统",
    detail:
      "从架构规划到性能调优，构建可水平扩展的海量数据平台，保障核心业务稳定进化。",
  },
  {
    title: "AI × 工程融合",
    detail:
      "探索 AI 在研发协同中的角色，让智能代理成为团队的工程伙伴，驱动效率提升。",
  },
  {
    title: "技术影响力",
    detail:
      "在公众号、知乎和 GitHub 分享技术洞察，与行业伙伴共创工程实践的升级。",
  },
];

const contacts = [
  {
    label: "公众号",
    value: "AI 技术研习社",
    href: "https://mp.weixin.qq.com/s/HhCGsXouM4-Gu7ymjZfK9g",
  },
  { label: "微信", value: "UpsXiaobei" },
  {
    label: "知乎",
    value: "小贝",
    href: "https://www.zhihu.com/people/yu-jian-hui-72",
  },
  {
    label: "GitHub",
    value: "YuJianHui11",
    href: "https://github.com/YuJianHui11",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden text-[#1e1e1e]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-6 h-64 w-64 rounded-full bg-[#ffd6e8]/70 blur-3xl sm:-left-10 sm:h-80 sm:w-80" />
        <div className="absolute right-[-120px] top-32 h-72 w-72 rounded-full bg-[#d8e3ff]/80 blur-[120px] sm:right-[-40px] sm:h-96 sm:w-96" />
        <div className="absolute inset-x-0 bottom-[-120px] mx-auto h-64 w-[70%] rounded-full bg-[#fff3d8]/70 blur-[100px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:px-10 md:py-24">
        <section className="grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
          <div className="space-y-8">
            <h1 className="text-4xl font-semibold leading-tight text-[#1f1f1f] sm:text-5xl">
              小贝
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-[#565656] sm:text-lg">
              现任互联网大厂核心部门研发工程师，负责海量数据分布式处理系统的开发与维护。
              <br />
              熟悉主流 AI Coding 工具与 Agent 技术栈，致力于让前沿 AI 能力真正服务于业务与工程团队。
            </p>
            <div className="flex flex-wrap gap-3">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/70 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#5b5b5b] shadow-sm backdrop-blur"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_15px_45px_rgba(31,41,55,0.12)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#9a8c7f]">
                  工作理念
                </p>
                <p className="mt-2 text-base font-medium text-[#3a3a3a] sm:text-lg">
                  以工程视角拥抱 AI，让智能与规模化系统协同，打造可靠的技术产品。
                </p>
              </div>
              <a
                href="https://mp.weixin.qq.com/s/HhCGsXouM4-Gu7ymjZfK9g"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#1f1f1f]/10 bg-[#1f1f1f] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                关注公众号了解更多
              </a>
            </div>
          </div>

          <div className="relative md:justify-self-end">
            <div className="overflow-hidden rounded-[32px] border border-white/60 bg-white/70 p-8 shadow-[0_25px_55px_rgba(31,41,55,0.16)] backdrop-blur">
              <div className="relative h-64 w-full overflow-hidden rounded-3xl">
                <Image
                  src="/avatar.jpg"
                  alt="小贝头像"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mt-6 space-y-3 text-sm text-[#585858]">
                <p className="text-base font-medium text-[#303030]">
                  构建高可靠性的分布式智能基础设施，让数据与 AI 协同驱动业务持续增长。
                </p>
                <p>
                  坚信技术的价值在于落地实现，从架构设计、工程实现到运维迭代形成闭环。
                </p>
                <p>与团队共同探索下一代 AI 增强的工程协作方式。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/60 bg-white/75 p-8 shadow-[0_12px_35px_rgba(31,41,55,0.12)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(31,41,55,0.14)]"
            >
              <h3 className="text-lg font-semibold text-[#2f2f2f]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#626262]">
                {item.description}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-20 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-8 rounded-3xl border border-white/60 bg-white/75 p-10 shadow-[0_16px_40px_rgba(31,41,55,0.12)] backdrop-blur">
            <h2 className="text-xl font-semibold text-[#2f2f2f]">
              能力框架与方法论
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title} className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#a58f7a]">
                    {group.title}
                  </p>
                  <ul className="space-y-2 text-sm text-[#545454]">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 rounded-full border border-[#1f1f1f]/8 bg-white/70 px-3 py-2"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#a58f7a]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-dashed border-[#1f1f1f]/20 bg-white/60 p-6 text-sm text-[#5e5e5e]">
              深耕分布式系统与 AI 技术融合，持续打磨工程方法论：以数据驱动决策、以自动化守护质量、以开放分享构建社群价值。
            </div>
          </div>

          <div className="space-y-6 rounded-3xl border border-white/60 bg-white/80 p-10 shadow-[0_16px_40px_rgba(31,41,55,0.12)] backdrop-blur">
            <h2 className="text-xl font-semibold text-[#2f2f2f]">
              当前聚焦
            </h2>
            <div className="space-y-5">
              {focusAreas.map((area) => (
                <div key={area.title} className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#9ca2ff]">
                    {area.title}
                  </p>
                  <p className="text-sm leading-relaxed text-[#555]">
                    {area.detail}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-white/60 bg-[#1f1f1f] p-6 text-sm text-white">
              探索 AI 在工程团队中的真实价值：让智能代理承担重复性工作，释放工程师在架构思考、创新落地上的精力。
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="rounded-3xl border border-white/60 bg-white/80 p-10 shadow-[0_16px_45px_rgba(31,41,55,0.12)] backdrop-blur">
            <h2 className="text-xl font-semibold text-[#2f2f2f]">
              联系与合作
            </h2>
            <p className="mt-3 text-sm text-[#5d5d5d]">
              欢迎就分布式系统、AI Agent 落地、工程效率工具等方向交流合作，共同推动技术在业务场景中的价值实现。
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href ?? "#"}
                  target={contact.href ? "_blank" : undefined}
                  rel={contact.href ? "noopener noreferrer" : undefined}
                  className="group rounded-2xl border border-[#1f1f1f]/8 bg-white/70 p-4 transition hover:-translate-y-1 hover:border-[#1f1f1f]/15 hover:shadow-[0_12px_30px_rgba(31,41,55,0.12)]"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-[#a58f7a]">
                    {contact.label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#353535] group-hover:text-[#222222]">
                    {contact.value}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/70 bg-white/80 p-8 text-center shadow-[0_16px_45px_rgba(31,41,55,0.12)] backdrop-blur">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#9ca2ff]">
                微信交流
              </p>
              <p className="mt-2 text-sm text-[#525252]">
                长按识别二维码，添加微信沟通。
              </p>
            </div>
            <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-4 shadow-inner">
              <Image
                src="/wechat-qr.jpg"
                alt="微信二维码"
                fill
                sizes="(max-width: 768px) 192px, 240px"
                className="rounded-2xl object-cover"
              />
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#9f9f9f]">
              Let&apos;s build together
            </p>
          </div>
        </section>

        <footer className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-white/60 pt-8 text-xs uppercase tracking-[0.28em] text-[#9f9f9f] sm:flex-row">
          <span>小贝 · AI 技术研发工程师</span>
          <span>Based in 华中 · 拥抱变化 · 笃定前行</span>
        </footer>
      </main>
    </div>
  );
}
