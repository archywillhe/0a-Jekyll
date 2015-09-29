---
layout: dailylog
postType: dailylog
font: 
extraClasses: 
postType: dailylog
title: "Don't underestimate the pigs and their Great Firewall of China"
metaTitle:
metaDescription: 
publishedOn: 
updateAt: 
readingTime: 
published: 1
coverImg: 
subtitle:
subtitleBottom:
extract: |
    I stumbled upon [this comment on HN](https://news.ycombinator.com/item?id=10101653) today:

    >I was visiting China recently (my first time there). I thought bypassing The Great Firewall was going to be as simple as an "ssh -D" SOCKS setup, or a "ssh -w" tunnel. Oh boy, I was wrong. If you try this, or even a basic OpenVPN setup, you will quickly find out your VPN works fine for about 5 minutes, but then latency increases to 5sec, 10sec, 30sec(!), and then everything times out. After some research I read online the government does deep packet analysis and uses machine learning to find heuristics to guess which TCP connection or UDP stream is likely being used as a VPN. When they think there is a high probability a VPN is detected, they simply start dropping all the packets.
    Encryption is not enough. You need to disguise your VPN traffic to make it look like standard HTTPS sessions (since they don't block HTTPS). For example in a traditional HTTPS session, if the client browser downloads, say, a 500kB image over HTTPS, it will send periodical empty TCP ACK packets as it receives the data. But when using a VPN that encrypts data at the IP layer, these empty ACK packets will be encrypted, so The Great Firewall will see the client sending small ~80-120 bytes encrypted packets, and will count this as one more sign that this might be a VPN.
    That's why people in China have to use VPN tools that most westerners have never heard of: obfsproxy, ShadowVPN, SoftEther, gohop, etc. All these tools try to obfuscate and hide VPNs. I have a lot of respect for all these Chinese hackers like clowwindy who try to escape censorship, as it takes more technical prowess than you think to design a VPN that works in China.
---

I stumbled upon [this comment on HN](https://news.ycombinator.com/item?id=10101653) today:

>I was visiting China recently (my first time there). I thought bypassing The Great Firewall was going to be as simple as an "ssh -D" SOCKS setup, or a "ssh -w" tunnel. Oh boy, I was wrong. If you try this, or even a basic OpenVPN setup, you will quickly find out your VPN works fine for about 5 minutes, but then latency increases to 5sec, 10sec, 30sec(!), and then everything times out. After some research I read online the government does deep packet analysis and uses machine learning to find heuristics to guess which TCP connection or UDP stream is likely being used as a VPN. When they think there is a high probability a VPN is detected, they simply start dropping all the packets.
Encryption is not enough. You need to disguise your VPN traffic to make it look like standard HTTPS sessions (since they don't block HTTPS). For example in a traditional HTTPS session, if the client browser downloads, say, a 500kB image over HTTPS, it will send periodical empty TCP ACK packets as it receives the data. But when using a VPN that encrypts data at the IP layer, these empty ACK packets will be encrypted, so The Great Firewall will see the client sending small ~80-120 bytes encrypted packets, and will count this as one more sign that this might be a VPN.
That's why people in China have to use VPN tools that most westerners have never heard of: obfsproxy, ShadowVPN, SoftEther, gohop, etc. All these tools try to obfuscate and hide VPNs. I have a lot of respect for all these Chinese hackers like clowwindy who try to escape censorship, as it takes more technical prowess than you think to design a VPN that works in China.

Everything makes sense now. No wonder I kept getting into some strange time-out with VPN services like VyprVPN, strongVPN, etc, when I was in China one and a half year ago. At first I thought it was because the ISP randomly blocked packages going to overseas servers but appearntly it was a lot more sophisticated than that. The Chinese Government is paying vigilant attention to Internet censorship. (Perhaps one reason being that tension is building up in Hong Kong?) Initally I got the impression that it is all just a form of protectionism (you know, that "micro-blog" thingy would not have won against the made-in-harvard-I-am-the-CEO-bitch thingy). But the pigs are indeed serious about social control as well.

And yup, recently the Chinese polices just contacted the author of [a popular open-source tool to circumvent the Great Fire Wall of China](https://github.com/shadowsocks) and [politely requested her or him](https://news.ycombinator.com/item?id=10101469) to stop working on the project and delete the source code on Github. So the author cleaned up the repo [/shadowsocks/shadowsocks](https://github.com/shadowsocks/shadowsocks), although for the repos [/shadowsocks/shadowsocks-windows](https://github.com/shadowsocks/shadowsocks-windows) and [/shadowsocks/shadowsocks-iOS](https://github.com/shadowsocks/shadowsocks-iOS) she or he simply created a new branch `rm` and switched to it, so you can still grab the source of latest versions in the `master` branch. 