---
layout: dailylog
postType: dailylog
font:
extraClasses:
postType: dailylog
title: "DancePrince.com is now live"
metaTitle:
permalink: danceprince.com-is-now-live
metaDescription:
publishedOn:
updateAt:
readingTime:
published: 1
coverImg:
subtitle:
subtitleBottom:
extract: |
    About two years ago I promised a friend that I would *handcraft* a WordPress theme for him as a birthday present. And by that I meant building everything from the ground up - from designing the GUI to implementing the back-end - and [relying on libraries & frameworks as little as possible](http://0a.io/the-framework-library-phobia/). Theroically there is nothing wrong with such a beautiful plan that demonstrates the princple of [self-reliance](http://www.emersoncentral.com/selfreliance.htm) and opens up one's mind to learn that practically that was the dumbest thing to do. Espeically true for someone who often overestimates what she or he is capable of.

    Eventually I did not feel like working on this project anymore and had it shelved. However, the promise remained a kind of parasite that lived in my mind and grew over time, as I became more conscious about its existence.
---

About two years ago I promised a friend that I would *handcraft* a WordPress theme for him as a birthday present. And by that I meant building everything from the ground up - from designing the GUI to implementing the back-end - and [relying on libraries & frameworks as little as possible](http://0a.io/the-framework-library-phobia/). Theroically there is nothing wrong with such a beautiful plan that demonstrates the princple of [self-reliance](http://www.emersoncentral.com/selfreliance.htm) and opens up one's mind to learn that practically that was the dumbest thing to do. Espeically true for someone who often overestimates what she or he is capable of.

Eventually I did not feel like working on this project anymore and had it shelved. However, the promise remained a kind of parasite that lived in my mind and grew over time, as I became more conscious about its existence.

<p class="text-center"> ● ● ● </p>

Back when I was working on [The HacKIDemia Event Site](https://github.com/0a-/hackidemia-event-site) I bought some icons and stuff on [Creative Market](https://creativemarket.com/?u=0a-). Some promotion was going on, and there was [this bundle](https://creativemarket.com/bundle/april-big-bundle?u=0a-) to grab. Later I learnt that there are some really sweet WordPress themes in it. [Dicot](https://creativemarket.com/designorbital/166739-Dicot-Magazine-WordPress-Theme?u=0a-) by [DesignOrbital](http://designorbital.com/) is one of them.

<p class="text-center">
<img src="https://d3ui957tjb5bqd.cloudfront.net/images/screenshots/products/32/322/322742/dicot-magazine-wordpress-theme-2_1-o.png?1422369547">
</p>

Sadly I don't have a use case for it. I wanted to give it to the friend I made the promise with, but as a designer and a developer, that just doesn't feel right. So I decided to use it to boostrap the old project of mine and see if I can have something for my friend's birthday this year.

Yesterday was the day, and I barely made it. [DancePrince.com is now live](http://danceprince.com/).

<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="4" style=" background:#FFF; margin: 1px auto; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15);  max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAGFBMVEUiIiI9PT0eHh4gIB4hIBkcHBwcHBwcHBydr+JQAAAACHRSTlMABA4YHyQsM5jtaMwAAADfSURBVDjL7ZVBEgMhCAQBAf//42xcNbpAqakcM0ftUmFAAIBE81IqBJdS3lS6zs3bIpB9WED3YYXFPmHRfT8sgyrCP1x8uEUxLMzNWElFOYCV6mHWWwMzdPEKHlhLw7NWJqkHc4uIZphavDzA2JPzUDsBZziNae2S6owH8xPmX8G7zzgKEOPUoYHvGz1TBCxMkd3kwNVbU0gKHkx+iZILf77IofhrY1nYFnB/lQPb79drWOyJVa/DAvg9B/rLB4cC+Nqgdz/TvBbBnr6GBReqn/nRmDgaQEej7WhonozjF+Y2I/fZou/qAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://instagram.com/p/4gjYrxmsFC/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_top">Happy birthday Mr Fen! @stephenahsen danceprince.com is now live.</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A video posted by @0a.__ on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2015-06-29T09:50:00+00:00">Jun 29, 2015 at 2:50am PDT</time></p></div></blockquote>
<script async defer src="//platform.instagram.com/en_US/embeds.js"></script>

At some point when I was so close to having a presentable website, I thought that I should rewrite everything, and get rid of all the unnecessary pieces (I don't use more than 90% of its code) so that I can open-source it without getting into legal issue.

<blockquote>
  <p>Most of the necessary parts were already written in the prototype before I shelved the project. Here is one of the functions that have the most use-cases. It is for extracting some content from a post based on its formats (assuming that they can be generalized into either <em>non-gallery</em> or <em>gallery</em>).</p>

  {% highlight php startinline %}
function get_only_few_lines($content,$id){
    $format = get_post_format($id);
    $string = apply_filters('the_content', $content);
    $dom = new DOMDocument();
    $new = new DOMDocument();
    $string = mb_convert_encoding($string, 'HTML-ENTITIES', 'UTF-8');
    libxml_use_internal_errors(true);
    $dom->loadHTML("<html><head></head><body id='the_body'>".$string."</body></html>");
    $new->loadHTML("<html><head></head><body id='the_body'></body></html>");
    $body = $dom->getElementById('the_body');
    $new_body = $new->getElementById('the_body');
    if($format!="gallery"){
        $children =  $body->childNodes;
        $threshold = 6;
        $x = 0;
        foreach($children as $child){
            $number = $child->childNodes->length;
            if($number>2){
                $x+=2;
            }else{
                $x+=1;
            }
            $new_body->appendChild(
                $new->importNode( $child, true )
            );
            if($x>$threshold){
                break;
            }
        }
        return  centralize_image(extract_body_content($new));
    }else{
        $img = $body->getElementsByTagName('img');
        $img = $img->item(0);
        $p = $new->createElement('p');
        $new_body->appendChild($p);
        $p->appendChild(
            $new->importNode( $img, true )
        );
        $p->setAttribute('class', 'image-p');
        return  extract_body_content($new);
    }
}
{% endhighlight %}
<br>
  <p>For anyone who is curious, this is how the prototype looks like.</p>
<p class="text-center"><img src="/assets/img/dp_proto.jpg" alt="dance_prince_prototype"></p>
  <p class="text-center"><img src="/assets/img/dp_proto2.jpg" alt="dance_prince_prototype2"></p>
  <p>The design of the prototype was done one and a half year ago. As you can see it is rather immature. I have learnt a lot since then.</p>
  <p>Needless to say, some of the changes I made for the final design are inspired by elements in Dicot's. And I did borrow some DOM objects & CSS from it. (I got the license anyway.)</p>
  <p> p.s. The typography used in the logo was an imitation of that used in the cover of <a href="https://en.wikipedia.org/wiki/The_Little_Prince">Le Petit Prince</a>, designed by <a href="https://en.wikipedia.org/wiki/Antoine_de_Saint-Exup%C3%A9ry">Antoine de Saint-Exupéry</a>. </p>

</blockquote>

Rewriting everything was an impractical idea, considering that I am not entirely familiar with WordPress' APIs, and right now I need to be more productivity-focus and "result-oriented", or I would seldom get things done. (That was how things had been and I'd like a change.) It'd be neat to have danceprince.com open-source, but I have to prioritize things well.

At the moment I'm still going through textbooks & papers and working on the upcoming article, *0a explains: Logic*. I figured I should resume *DailyLog of Arch's* since things are going on in my life as usual, and it appears [I'm just using writing article as an excuse to take a break from logging](http://localhost:4000/halt1/).
