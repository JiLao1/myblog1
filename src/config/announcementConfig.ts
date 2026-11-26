import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	title: "网站更新公告",
	content:
		"博客升级到 Firefly 6.17.0 啦！教程里的代码标签页现在可以把说明和命令放在一起，手机菜单和平板目录也修了一些显示问题。旧文章的链接照常可用。",
	closable: true,
	link: {
		enable: true,
		text: "查看这次更新",
		url: "/dynamic/#dynamic-2026-11-26-firefly-6-17-0",
		external: false,
	},
};
