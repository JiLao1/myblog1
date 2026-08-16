import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	title: "网站更新公告",
	content:
		"本站已更新至 Firefly 6.15.9 最新版本。本次升级加入动态内容、Bilibili/VNDB/MAL 页面能力、书签导航、显示设置和更多图片与文章展示优化，并继续保留本站原有的个人内容与配置。",
	closable: true,
	link: {
		enable: true,
		text: "查看文章",
		url: "/archive/",
		external: false,
	},
};
