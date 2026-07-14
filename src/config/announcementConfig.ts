import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	title: "网站更新公告",
	content:
		"本站已更新至 Firefly 6.13.9 最新版本。本次升级加入 Astro 7、分类与标签页、图片低清占位优化、字体子集化和新版 Mermaid 图表渲染，并继续优化文章展示、壁纸与移动端体验。",
	closable: true,
	link: {
		enable: true,
		text: "查看文章",
		url: "/archive/",
		external: false,
	},
};
