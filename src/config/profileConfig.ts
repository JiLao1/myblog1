import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	avatar: "/assets/images/icon.jpg",
	name: "P_star7",
	bio: "Hello, I'm P_star7.",
	links: [
		{
			name: "Bilibili",
			icon: "simple-icons:bilibili",
			url: "https://space.bilibili.com/356542846",
			showName: false,
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/JiLao1",
			showName: false,
		},
		{
			name: "Tiktok",
			icon: "simple-icons:tiktok",
			url: "https://www.douyin.com/user/MS4wLjABAAAAGE6EIUwY2Kx8X7UhTp2IOhKs5FdggZVJM2Rop-PoSxWTCh7Vh7EoMqtvSeTgQJsj?from_tab_name=main",
			showName: false,
		},
		{
			name: "Steam",
			icon: "fa7-brands:steam",
			url: "https://steamcommunity.com/id/dingzhen520/",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
};
