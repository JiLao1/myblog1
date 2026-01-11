---
title: 利用边缘函数中转Gemini API，无需翻墙使用Gemini
published: 2025-12-22
pinned: false
description: 利用边缘函数中转Gemini API，实现国内直接使用Gemini，无需翻墙。
tags: [Gemini3pro,API,中转,Cloudflare,Vercel]
category: 教程
licenseName: "CC BY 4.0"
author: P_star7
draft: false
date: 2025-12-22
pubDate: 2025-12-22
---
# 😍 利用边缘函数中转Gemini API，无需翻墙使用Gemini

与其说是教程，不如说是笔记，本文只是怕我哪天忘记如何部署才写的。但内容很详细，完全可以当作教程。

项目原作者：**技术爬爬虾** 。

Github：[https://github.com/tech-shrimp/gemini-balance-lite](https://github.com/tech-shrimp/gemini-balance-lite)

>💡**注意** :
> 
>可使用多种方式进行部署，但使用Cloudflare可能会被分配HongKong IP地址导致无法使用Gemini。
这里给出部署到Vercel的方法，此方法最方便。

---

## 📓 部署流程

### 1.登录Github，并点击部署

* 打开上文的github链接，下滑，在README中找到“Vercel部署（推荐）”

* 点击`Deploy`按钮进行一键部署。

### 2.在Vercel上部署

* 跳转到vercel网站后在 “ Private Repository Name”中填写一个项目名字，可随便填写。

* 输入完成后点击`Create`，如果部署成功会显示“Proxy is Running!”

* 此时如果点击这行文字会跳转到Vercel给你分配的域名，但此域名无法在国内使用，需要绑定一个自己的域名来解决。

### 3.完成域名绑定

* 返回刚才的页面，点击`Continue to dashboard`按钮。

* 找到右上方的`Settings`按钮。

* 进入`Settings`后在左边选择`Domains`。点击`Add Domain`来添加一个域名。这里建议使用一个不常用的域名，因为使用这种方法可能会导致域名被墙。
  
  > 本教程使用我托管到Cloudflare的一个免费域名，关于免费域名如何领取后续会更新文章。

* 添加完成后会有红色警告，展开后按照Vercel的要求将DNS记录填写到cloudflare里。（记得关代理状态）

* 完成后回到Vercel点击刷新，打上蓝色的勾就说明成功了。

> （如果不行就多刷新几次或多等一会）

---

### 至此已经完成边缘函数中转Gemini API的所有操作，下面将其导入一个AI工具箱来测试。

---

## 🤖 测试与使用

> PC端以Cherry studio为例， 
> 移动端推荐使用Rikkahub。

### 1.添加API并添加模型

* 打开Cherry studio，点击左下角设置，点击添加

* 提供商名称随意填写，提供商类型选择OpenAI、Gemini均可。

* 点击确定后在右侧输入API地址，也就是你刚才绑定的域名。

* 上方的API密钥直接前往Google AI Studio网站，在左下角就可以看到获取按钮，复制后填写即可。

* 在`模型`一栏中点击下方`添加`按钮

* 添加你要用的模型。
  
  > （如果你不清楚如何填写，可前往[https://ai.google.dev/gemini-api/docs/models?hl=zh-cn#gemini-3-pro](https://ai.google.dev/gemini-api/docs/models?hl=zh-cn#gemini-3-pro)查看各模型的模型代码，复制填写即可）

* 添加完成后可点击`健康监测`按钮检查是否可用。

### 2.开始使用

* 回到助手页面，选择一个你刚才添加的模型，发送消息。

---

## 🎉 至此，全部操作已完成，你现在可以在国内直接使用Gemini。
