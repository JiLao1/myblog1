import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	title: "网站更新公告",
	content:
		"本站已更新至 Firefly 6.10.5 最新版本。本次更新带来了全新的分类栏、站内搜索、相册与加密内容支持，优化了壁纸/显示设置、文章展示和图标加载体验，后续会继续同步学习记录、教程与资源分享。",
	closable: true,
	link: {
		enable: true,
		text: "查看文章",
		url: "/archive/",
		external: false,
	},
};
