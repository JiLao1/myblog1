import {
	LinkPreset,
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/config";
import { siteConfig } from "./siteConfig";

const getDynamicNavBarConfig = (): NavBarConfig => {
	const links: (NavBarLink | LinkPreset)[] = [
		LinkPreset.Home,
		LinkPreset.Archive,
		{
			name: "链接",
			url: "/links/",
			icon: "material-symbols:link",
			children: [
				{
					name: "GitHub",
					url: "https://github.com/JiLao1",
					external: true,
					icon: "fa7-brands:github",
				},
				{
					name: "Bilibili",
					url: "https://space.bilibili.com/356542846",
					external: true,
					icon: "simple-icons:bilibili",
				},
				{
					name: "Tiktok",
					url: "https://www.douyin.com/user/MS4wLjABAAAAGE6EIUwY2Kx8X7UhTp2IOhKs5FdggZVJM2Rop-PoSxWTCh7Vh7EoMqtvSeTgQJsj?from_tab_name=main",
					external: true,
					icon: "simple-icons:tiktok",
				},
				{
					name: "Steam",
					url: "https://steamcommunity.com/id/dingzhen520/",
					external: true,
					icon: "fa7-brands:steam",
				},
			],
		},
	];

	if (siteConfig.pages.friends) {
		links.push(LinkPreset.Friends);
	}

	if (siteConfig.pages.guestbook) {
		links.push(LinkPreset.Guestbook);
	}

	links.push({
		name: "关于",
		url: "/content/",
		icon: "material-symbols:info",
		children: [
			...(siteConfig.pages.sponsor ? [LinkPreset.Sponsor] : []),
			LinkPreset.About,
			...(siteConfig.pages.bangumi ? [LinkPreset.Bangumi] : []),
		],
	});

	return { links };
};

export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
