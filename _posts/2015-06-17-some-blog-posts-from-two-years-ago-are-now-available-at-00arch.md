---
layout: dailylog
postType: dailylog
font:
extraClasses:
postType: dailylog
title: "Some articles from an old Blog of mine are now available at 0a.io/0.0ar.ch"
metaTitle:
permalink: some-blog-posts-from-two-years-ago-are-now-available-at/0.0ar.ch
metaDescription:
publishedOn:
updateAt:
readingTime:
published: 1
coverImg:
subtitle:
subtitleBottom:
noreadmore: 1
extract: |
    These were some stuff I wrote roughly two years ago. At that time I was still a kid (and an overly confident one, just like any other optimistic self-assured adolescents who have not seen the world or experienced anything outside of their comfort zone to realize how unrealistic the assumptions about reality many of their beliefs are based on), preparing for his univ applications. A lot has changed since then.

    One thing is that I no longer write in that manner, or at least that is what I incline to think.

    They are now available [here](http://0a.io/0.0ar.ch), but mind you, they are pretty badly written. As a redditor with 7k karma would put it, ["This guy is an intolerably bad writer, narcissistic and sophomoric and lacking real insights."](http://www.reddit.com/r/lifehack/comments/1v943g/how_to_excel_at_anything_in_life_the_key_here_is/). (And I agree.)
---

These were some stuff I wrote roughly two years ago. At that time I was still a kid (and an overly confident one, just like any other optimistic self-assured adolescents who have not seen the world or experienced anything outside of their comfort zone to realize how unrealistic the assumptions about reality many of their beliefs are based on), preparing for his univ applications. A lot has changed since then.

One thing is that I no longer write in that manner, or at least that is what I incline to think.

They are now available [here](http://0a.io/0.0ar.ch), but mind you, they are pretty badly written. As a redditor with 7k karma would put it, ["This guy is an intolerably bad writer, narcissistic and sophomoric and lacking real insights."](http://www.reddit.com/r/lifehack/comments/1v943g/how_to_excel_at_anything_in_life_the_key_here_is/). (And I agree.) Or simply click on the pictures & links below:

{% assign posts =  site.days_of_yore | sort: 'num', %}
{% assign posts_groups = posts | group_by:"layout" %}
{% for posts_group in posts_groups %}
{% assign listFilterName = "article" %}
{% include list.html %}
{% endfor %}
