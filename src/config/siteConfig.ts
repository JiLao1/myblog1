import type { SiteConfig } from "@/types/siteConfig";

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

	favicon: [
		{ src: "/favicon/avatar-32.png", sizes: "32x32" },
		{ src: "/favicon/avatar-180.png", sizes: "180x180" },
		{ src: "/favicon/avatar-192.png", sizes: "192x192" },
	],

	navbar: {
		logo: {
			type: "image",
			value: "/assets/images/icon.jpg",
			alt: "P_star7",
		},
		title: "P_star7",
		widthFull: false,
		menuAlign: "center",
		followTheme: false,
		stickyNavbar: true,
	},

	siteStartDate: "2025-12-21",
	timezone: "Asia/Shanghai",

	pages: {
		friends: true,
		sponsor: true,
		guestbook: true,
		bangumi: false,
		gallery: false,
		anime: false,
	},

	categoryBar: true,
	foldArticle: true,

	postListLayout: {
		defaultMode: "list",
		mobileDefaultMode: "list",
		allowSwitch: true,
		descriptionLines: 2,
		showStatsIcons: true,
		tagsPosition: "meta",
		meta: {
			showPublished: true,
			showCategory: true,
			showTags: true,
			tagCount: 5,
			showWords: false,
			showReadingTime: false,
		},
		stats: {
			showPublished: true,
			showWords: true,
			showReadingTime: true,
		},
		grid: {
			masonry: true,
			columnWidth: 320,
		},
	},

	post: {
		rehypeCallouts: {
			theme: "github",
			enablePythonMarkdownAdmonitions: false,
		},
		showLastModified: true,
		outdatedThreshold: 30,
		sharePoster: true,
		generateOgImages: false,
	},

	bangumi: {
		userId: "",
		mode: "dynamic",
		apiUrl: "https://bgmapi.anibt.net",
		subjectBaseUrl: "https://bgmmi.anibt.net/subject/",
		categoryOrder: ["anime", "book", "music", "game"],
	},

	anime: {
		bilibili: {
			uid: "356542846",
		},
	},

	pagination: {
		postsPerPage: 8,
	},

	imageOptimization: {
		formats: "webp",
		quality: 85,
		noReferrerDomains: [],
	},

	lang: SITE_LANG,
};
