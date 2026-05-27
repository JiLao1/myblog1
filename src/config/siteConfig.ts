import type { SiteConfig } from "@/types/config";
import { fontConfig } from "./fontConfig";

const SITE_LANG = "zh_CN";

export const siteConfig: SiteConfig = {
	title: "P_star7的主页",
	subtitle: "",
	site_url: "https://blog-cf.2553385.xyz",
	description: "DDC的个人博客",
	keywords: [
		"Firefly",
		"Fuwari",
		"Astro",
		"ACGN",
		"博客",
		"技术博客",
		"静态博客",
		"P_star7",
	],

	lang: SITE_LANG,

	themeColor: {
		hue: 235,
		fixed: false,
		defaultMode: "system",
	},

	pageWidth: 100,

	card: {
		border: true,
		followTheme: false,
	},

	font: fontConfig,

	siteStartDate: "2025-12-21",
	timezone: "Asia/Shanghai",

	rehypeCallouts: {
		theme: "github",
	},

	bangumi: {
		userId: "",
		categoryOrder: ["anime", "book", "music", "game"],
	},

	generateOgImages: false,
	favicon: [
		{
			src: "/favicon/avatar-32.png",
			sizes: "32x32",
		},
		{
			src: "/favicon/avatar-180.png",
			sizes: "180x180",
		},
		{
			src: "/favicon/avatar-192.png",
			sizes: "192x192",
		},
	],

	navbar: {
		logo: {
			type: "image",
			value: "/assets/images/icon.jpg",
			alt: "Logo",
		},
		title: "P_star7",
		widthFull: false,
		menuAlign: "center",
		followTheme: false,
		stickyNavbar: true,
	},

	showLastModified: true,
	outdatedThreshold: 30,
	sharePoster: true,

	pages: {
		friends: true,
		sponsor: true,
		guestbook: true,
		bangumi: false,
		gallery: false,
	},

	categoryBar: true,

	postListLayout: {
		defaultMode: "list",
		mobileDefaultMode: "list",
		showTags: true,
		descriptionLines: 2,
		allowSwitch: true,
		grid: {
			masonry: true,
			columnWidth: 320,
		},
	},

	pagination: {
		postsPerPage: 8,
	},

	analytics: {
		googleAnalyticsId: "",
		microsoftClarityId: "",
		umamiAnalytics: {
			websiteId: "",
			scriptUrl: "https://cloud.umami.is/script.js",
			replaysScriptUrl: "https://cloud.umami.is/recorder.js",
			trackOutboundLinks: true,
			collectWebVitals: false,
			replays: {
				enabled: false,
				sampleRate: 0.15,
				maskLevel: "moderate",
				maxDuration: 300000,
				blockSelector: "",
			},
		},
		la51Analytics: {
			Id: "",
			sdkUrl: "",
			ck: "",
			autoTrack: false,
			hashMode: false,
			screenRecord: true,
		},
	},

	imageOptimization: {
		formats: "webp",
		quality: 85,
		noReferrerDomains: [],
	},
};
