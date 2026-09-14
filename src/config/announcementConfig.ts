import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	title: "网站更新公告",
	content:
		"本站已升级至 Firefly 6.16.8！新增文章系列、桌面端沉浸阅读和 Atom 订阅，优化导航、壁纸与阅读体验。后续文章也会用上新的步骤条、时间线和标签页，欢迎来逛逛。",
	closable: true,
	link: {
		enable: true,
		text: "查看文章",
		url: "/archive/",
		external: false,
	},
};
