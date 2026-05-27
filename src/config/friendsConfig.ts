import type { FriendLink, FriendsPageConfig } from "../types/config";

export const friendsPageConfig: FriendsPageConfig = {
	title: "",
	description: "",
	showCustomContent: true,
	showComment: true,
	randomizeSort: false,
};

export const friendsConfig: FriendLink[] = [
	{
		title: "Nth2miss",
		imgurl: "https://q1.qlogo.cn/g?b=qq&nk=1226666897&s=640",
		desc: "Hello, I'm Nth2Miss.",
		siteurl: "https://blog.nth2miss.cn/",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "Firefly Docs",
		imgurl: "https://docs-firefly.cuteleaf.cn/logo.png",
		desc: "Firefly主题模板文档",
		siteurl: "https://docs-firefly.cuteleaf.cn",
		tags: ["Docs"],
		weight: 9,
		enabled: true,
	},
	{
		title: "Astro",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "The web framework for content-driven websites.",
		siteurl: "https://github.com/withastro/astro",
		tags: ["Framework"],
		weight: 8,
		enabled: true,
	},
];

export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
