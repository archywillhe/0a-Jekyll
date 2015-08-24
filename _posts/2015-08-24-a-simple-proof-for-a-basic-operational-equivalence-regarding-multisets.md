---
layout: dailylog
postType: dailylog
font: 
extraClasses: 
postType: dailylog
title: "a simple proof for a basic operational equivalence regarding multisets"
metaTitle:
metaDescription: 
publishedOn: 
updateAt: 
readingTime: 
published: 1
coverImg: 
subtitle:
subtitleBottom:
maths: 1
extract: |
    Among my favorite Youtube channels is [that of Prof N J Wildberger](https://www.youtube.com/user/njwildberger/), on which he uploads explanatory videos on different topics in mathematics (along with lectures he gave in UNSW). The [latest video is on multisets](https://youtu.be/alMiaIbxNV4), and it happens to be related to what I am currently working with. So I figured I would take a bit time to compose a short proof for the interesting equivalence he pointed out at the 11th minute mark of the video.
---

Among my favorite Youtube channels is [that of Prof N J Wildberger](https://www.youtube.com/user/njwildberger/), on which he uploads explanatory videos on different topics in mathematics (along with lectures he gave in UNSW). The [latest video is on multisets](https://youtu.be/alMiaIbxNV4), and it happens to be related to what I am currently working with. So I figured I would take a bit time to compose a short proof for the interesting equivalence he pointed out at the 11th minute mark of the video:

### Theorem: 

For any multisets A and B

$$(A \cup B) + (A \cap B) = A + B $$

### Proof: 

Firstly, let $a_k$ denote some element in $A$ or $B$ and let's establish that 

$$a_i = a_j \Leftrightarrow i = j$$

Now let $n_i$ denote the number of $a_i$ occurring in $(A \cup B)$, <br>$p_i$ denotes the number of $a_i$ occurring in  $(A \cap B)$, and <br>$v_i$ to denotes the number of $a_i$ occurring in $(A + B)$.

The equivalence theorem above can be rewritten as:

$$n_i + p_i = v_i \quad \forall i \in I, \text{ where } \\ \bigcup_{i \in I} a_i \text{ is the set of distinct elements in } A \text{ and } B $$

According to the definitions of union and intersection between multisets:

$$m_{A \cup B}(x) = max( m_A(x), m_B(x)) \\ m_{A \cap B}(x) = max( m_A(x), m_B(x))$$

we can further rewrite the formula as 

$$max( m_A(x), m_B(x)) + min( m_A(x), m_B(x)) = m_A(x) + m_B(x)$$

and that is equivalent as stating

$$max(a,b) + min(a,b) = a + b$$

which is trivially true.