---
layout: dailylog
postType: dailylog
font:
extraClasses:
postType: dailylog
title: "NDTM vs DTM"
metaTitle:
metaDescription:
publishedOn:
updateAt:
readingTime:
published: 1
maths: 1
coverImg:
subtitle:
subtitleBottom:
extract: |
  From a set-theorical point of view, nondeterministic Turing machines (or NDTMs) and deterministic Turing machines (or DTMs) are pretty similar objects. Actually, all DTMs are NDTMs since all functions are relations satisfying the property that no two ordered pairs have their first elements the same, and the only difference between DTMs and NDTMs lies in that one is defined in terms of a function while the other is defined in terms of a relation.
---

From a set-theorical point of view, nondeterministic Turing machines (or NDTMs) and deterministic Turing machines (or DTMs) are pretty similar objects. Actually, all DTMs are NDTMs since all functions are relations satisfying the property that no two ordered pairs have their first elements the same, and the only difference between DTMs and NDTMs lies in that one is defined in terms of a function while the other is defined in terms of a relation. To be more precise, a DTM is basically some 3-tuples $$(\Sigma, Q, f)$$ where

$$f : Q \times \Sigma^k \mapsto Q \times \Sigma^{k-1} \times \{-1,0,1\}^k$$

(for some $$k \geq 2$$), while a NDTM is some 3-tuples $$(\Sigma, Q, r)$$ where $$r$$ is some relation between $$Q \times \Sigma^k$$ and $$Q \times \Sigma^{k-1} \times \{-1,0,1\}^k$$.

Consider the following variant of the P vs NP question: for every finite subset of any language $$A$$ decidable by a NDTM in a polynomial number of steps proportional to the size of the input, does there exist a DTM that too decides this subset of language $$A$$ in a polynomial number of steps? Unlike the P vs NP question, this is asking about a finite subset of a language, rather than the language itself which has a cardinality of $$\aleph_0$$, and is to be answered in the affirmative.

For any finite subset of some language $$A$$ decidable by a polynomial-time NDTM, there always exists a polynomial-time DTM, where the complement of the set of initial and accepting states with respect to its set of states is the Cartesian product of this subset of language $$A$$ and the set of states of the NDTM, while the transition function of such DTM would simply be a union of the transition functions of DTMs each deciding only a singleton subset of the subset (with its set of states $$Q$$ changed to $$\{ (S,q) : q \in Q \}$$ where $$S$$ is the element in the singleton), to be constructed based on how the NDTM would halt on the element, together with a function for transiting from the initial state to the corresponding initial state for the corresponding DTM that decides a singleton, or a rejecting state, based on the input. Apparently, to be able to design such machine, one is required to know how the NDTM would decide the subset of the language, and thus we can actually go one step further and design a DTM that halts in constant steps for all inputs (such DTM is an equivalent of a hash table).

The idea is that so long as it decides on a finite subset of a language, we can always derive a DTM with finite set of states from a NDTM theoretically.

Now consider another variant of the question about the existence of a DTM whose set of states has a cardinality less than or equal to $$\aleph_0$$, rather than a DTM with a finite set of states (as how it is normally defined). Similar to how there always exists a DTM for deciding a finite subset of a language as demonstrated above, there always exists an infinite-states DTM for deciding language A in polynomial time for every polynomial-time NDTM. And similar to the corresponding finite-states DTM for a subset of the language, the construction of such infinite-states DTM relies on the knowledge about how the NDTM would decide each element in the language. Thus once again, there is no practical way for constructing such DTM if we do not have access to the NDTM at the first place.

But as a matter of fact, such infinite-states DTM exist.

So here is a question: "*does a finite-states DTM equivalence exist for every such infinite-states DTM?*" and that is one way of viewing the P vs NP question.
