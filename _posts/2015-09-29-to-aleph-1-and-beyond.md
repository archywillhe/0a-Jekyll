---
layout: dailylog
postType: dailylog
font: 
extraClasses: 
postType: dailylog
title: "to \\aleph 1 and beyond"
metaTitle:
metaDescription: 
publishedOn: 
updateAt: 
readingTime: 
published: 1
coverImg: 
subtitle:
maths: 1
subtitleBottom:
extract: |
    Today's letcture was on code abstraction. In one part Professor Danvy gave an example on how recurison can be viewed from a more mathematical point of view through demonstrating the <span class="MathJax" id="MathJax-Element-1-Frame"><nobr><span class="math" id="MathJax-Span-1" role="math" style="width: 0.911em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.751em; height: 0px; font-size: 117%;"><span style="position: absolute; clip: rect(1.765em 1000em 2.727em -999.997em); top: -2.561em; left: 0.003em;"><span class="mrow" id="MathJax-Span-2"><span class="texatom" id="MathJax-Span-3"><span class="mrow" id="MathJax-Span-4"><span class="mi" id="MathJax-Span-5" style="font-family: STIXGeneral-Regular;">ℕ</span></span></span></span><span style="display: inline-block; width: 0px; height: 2.567em;"></span></span></span><span style="border-left-width: 0.003em; border-left-style: solid; display: inline-block; overflow: hidden; width: 0px; height: 0.878em; vertical-align: -0.059em;"></span></span></nobr></span>-bijective natural of some set of procedures. Here is the idea:

    <div class="highlight"><pre><code class="language-scheme" data-lang="scheme"><span class="p">(</span><span class="k">define </span><span class="nv">f0</span>
    <span class="p">(</span><span class="k">lambda </span><span class="p">(</span><span class="nf">a</span><span class="p">)</span>
        <span class="p">(</span><span class="nf">errorf</span> <span class="ss">'f</span> <span class="s">"is not defined for ~s"</span> <span class="nv">a</span><span class="p">)))</span>
    <span class="p">(</span><span class="k">define </span><span class="nv">f1</span>
    <span class="p">(</span><span class="k">lambda </span><span class="p">(</span><span class="nf">a</span><span class="p">)</span>
        <span class="p">(</span><span class="k">if </span><span class="p">(</span><span class="nb">zero? </span><span class="nv">a</span><span class="p">)</span>
            <span class="mi">1</span>
            <span class="p">(</span><span class="nb">* </span><span class="nv">a</span> <span class="p">(</span><span class="nf">f0</span> <span class="p">(</span><span class="nb">- </span><span class="nv">a</span> <span class="mi">1</span><span class="p">))))))</span>
    <span class="p">(</span><span class="k">define </span><span class="nv">f2</span>
    <span class="p">(</span><span class="k">lambda </span><span class="p">(</span><span class="nf">a</span><span class="p">)</span>
        <span class="p">(</span><span class="k">if </span><span class="p">(</span><span class="nb">zero? </span><span class="nv">a</span><span class="p">)</span>
            <span class="mi">1</span>
            <span class="p">(</span><span class="nb">* </span><span class="nv">a</span> <span class="p">(</span><span class="nf">f1</span> <span class="p">(</span><span class="nb">- </span><span class="nv">a</span> <span class="mi">1</span><span class="p">))))))</span>
    <span class="p">(</span><span class="k">define </span><span class="nv">f3</span>
    <span class="p">(</span><span class="k">lambda </span><span class="p">(</span><span class="nf">a</span><span class="p">)</span>
        <span class="p">(</span><span class="k">if </span><span class="p">(</span><span class="nb">zero? </span><span class="nv">a</span><span class="p">)</span>
            <span class="mi">1</span>
            <span class="p">(</span><span class="nb">* </span><span class="nv">a</span> <span class="p">(</span><span class="nf">f2</span> <span class="p">(</span><span class="nb">- </span><span class="nv">a</span> <span class="mi">1</span><span class="p">))))))</span></code></pre></div>

    <p>as more procedures are enumerated in this a manner, we would be able to do factorial on a bigger subset of the natural numbers. There isn’t really recursion going on since there is no self-referencing. And this can continue to infinity. But as anyone with a common sense would know, this goes as far as <span class="MathJax_Preview" style="color: inherit;"></span><span class="MathJax" id="MathJax-Element-2-Frame"><nobr><span class="math" id="MathJax-Span-6" role="math" style="width: 1.392em; display: inline-block;"><span style="display: inline-block; position: relative; width: 1.178em; height: 0px; font-size: 117%;"><span style="position: absolute; clip: rect(1.338em 1000em 2.513em -999.997em); top: -2.188em; left: 0.003em;"><span class="mrow" id="MathJax-Span-7"><span class="msubsup" id="MathJax-Span-8"><span style="display: inline-block; position: relative; width: 1.124em; height: 0px;"><span style="position: absolute; clip: rect(3.154em 1000em 4.169em -999.997em); top: -4.004em; left: 0.003em;"><span class="mi" id="MathJax-Span-9" style="font-family: STIXGeneral-Regular;">ℵ</span><span style="display: inline-block; width: 0px; height: 4.009em;"></span></span><span style="position: absolute; top: -3.843em; left: 0.697em;"><span class="mn" id="MathJax-Span-10" style="font-size: 70.7%; font-family: STIXGeneral-Regular;">0</span><span style="display: inline-block; width: 0px; height: 4.009em;"></span></span></span></span></span><span style="display: inline-block; width: 0px; height: 2.193em;"></span></span></span><span style="border-left-width: 0.003em; border-left-style: solid; display: inline-block; overflow: hidden; width: 0px; height: 1.128em; vertical-align: -0.247em;"></span></span></nobr></span><script type="math/tex" id="MathJax-Element-2">\aleph_0</script> by virtue to the fact that it is bijecitve to <span class="MathJax_Preview" style="color: inherit;"></span><span class="MathJax" id="MathJax-Element-3-Frame"><nobr><span class="math" id="MathJax-Span-11" role="math" style="width: 0.911em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.751em; height: 0px; font-size: 117%;"><span style="position: absolute; clip: rect(1.765em 1000em 2.727em -999.997em); top: -2.561em; left: 0.003em;"><span class="mrow" id="MathJax-Span-12"><span class="texatom" id="MathJax-Span-13"><span class="mrow" id="MathJax-Span-14"><span class="mi" id="MathJax-Span-15" style="font-family: STIXGeneral-Regular;">ℕ</span></span></span></span><span style="display: inline-block; width: 0px; height: 2.567em;"></span></span></span><span style="border-left-width: 0.003em; border-left-style: solid; display: inline-block; overflow: hidden; width: 0px; height: 0.878em; vertical-align: -0.059em;"></span></span></nobr></span><script type="math/tex" id="MathJax-Element-3">\mathbb{N}</script>, which is to say, it would not reach $\aleph_1$ and beyond.</p>
---

Today's letcture was on code abstraction. In one part Professor Danvy gave an example on how recurison can be viewed from a more mathematical point of view through demonstrating the $\mathbb{N}$-bijective natural of some set of procedures. Here is the idea:

{% highlight Scheme %}

(define f0
    (lambda (a)
        (errorf 'f "is not defined for ~s" a)))
(define f1
    (lambda (a)
        (if (zero? a)
            1
            (* a (f0 (- a 1))))))
(define f2
    (lambda (a)
        (if (zero? a)
            1
            (* a (f1 (- a 1))))))
(define f3
    (lambda (a)
        (if (zero? a)
            1
            (* a (f2 (- a 1))))))
{% endhighlight %}

as more procedures are enumerated in this a manner, we would be able to do factorial on a larger subset of the natural numbers. There isn't really recursion going on since there is no self-referencing. And this can continue to infinity. But as anyone with a common sense would know, this goes as far as $\aleph_0$ by virtue to the fact that it is bijecitve to $\mathbb{N}$, which is to say, it would not reach $\aleph_1$ and beyond.

So a curious question arises: let $$F_{\mathbb{N}}$$ be some set of procedures that can be enumerated like above, is it possible to construct a set of procedures, $$F_{\mathbb{R}}$$, similiar to $$F_{\mathbb{N}}$$ (the notation of it being similiar to $$F_{\mathbb{N}}$$ is rather tricky here: let's just say it is similiar in that it is related to recursion, or that it is a generalisation of $$F_{\mathbb{N}}$$), that has a cardinality greater than $$\aleph_0$$? Since such set of procedures cannot be enumerated as George Cantor had demonstrated more than a decade ago (O! the whirligig of time), we would certainly need to construct it in a different manner.

The same question can be asked regarding Turing machine: can we formulate a model of computation, similiar to that of Turing's (or more of a generalization of it), such that there exists a single object, U, that can (similiar to how every Turing machine can be simulated by a Universal Turing machine) simulate every object in this model, wherein every $r \in \mathbb{R}$ can be used to encode a distinct object? Perhaps in such model, there exists some object that can solve the Halting problem? But does such model of computation even exist in the realm of the computing science as we know it? 

