# Firefly 6.16.8 升级记录

日期：2026-09-14。

- 本地起点：`6e5a9ba`，模板版本 6.15.9。
- 上游基准：`da1dfc6bd399d511ce004da5197c708b2ed3b4e5`。
- 升级目标：`567313c1eb357874f3ad03fbae0eb552ede7a06b`（6.16.8）。
- 上游：https://github.com/CuteLeaf/Firefly
- 工作分支：`codex/update-firefly-6-16-8`。

仓库没有上游共同历史，本次使用两个上游快照与本地文件进行三方合并。后续升级应以上述升级目标为基准，不再以版本号猜测起点。

## 已合入

文章系列、沉浸阅读、MDX 标签页/步骤条/时间线/徽章、项目集合与页面、Atom 订阅、llms.txt、导航和壁纸改进、布局与移动菜单调整、GitHub 卡片缓存、SEO 和依赖更新。

## 个性化处理

- 保留全部原有文章、动态、“关于我”、图片、个人资料、评论与部署配置，未导入上游示例内容。
- 保留导航标题及个人外链；旧 `stickyNavbar: true` 迁移为 `navbarMode: "fixed"`。
- 保留旧灰色标签外观，迁移为 `tagStyle: "pill-gray"`。
- 保留 `generateOgImages: false`、随机封面关闭及原页面开关。
- 新增项目页暂关闭（`pages.projects: false`），项目目录预留，不展示虚构示例项目。
- 沉浸阅读已启用，但默认不自动进入。
- `blurNsfw: true` 迁移为 VNDB 的 `nsfw: "blur"`；其他列表保持原来的不过滤行为。
- 更新 `docs/blog-writing-guide.md`，记录新增写作能力。

## 验证

- `pnpm install --frozen-lockfile`：通过。
- `pnpm check`：260 个文件，0 errors、0 warnings、0 hints。
- `pnpm type-check`：通过（在 Astro 完成内容类型生成后执行）。
- `pnpm build`：通过，34 个页面；Pagefind 索引 12 个页面。
- `git diff --check`：通过。
- 生产预览：实际检查首页、文章跳转、Mermaid 展示及沉浸阅读与目录。

本机 Node 下载字体时需要使用系统证书；成功构建命令为 `ASTRO_TELEMETRY_DISABLED=1 NODE_USE_SYSTEM_CA=1 pnpm build`。未关闭 TLS 证书验证，也未修改站点字体选择。

GitHub 卡片的远程仓库数据及评论服务仍依赖外部网络；预览中部分仓库数据不可用，但卡片和正文正常显示。此记录不代表全部外部服务或所有移动端交互均已验证。

本次未推送远程、未部署线上。
