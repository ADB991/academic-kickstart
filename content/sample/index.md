---
title: Testing the creation of a page.
subtitle: Hope everything works out!
summary: Here I try for the first time to upload a page.
date: "2019-09-28"
authors: ["admin"]
tags: ["Test"]

featured: true

markup: mmark
diagram: true

reading_time: false  # Show estimated reading time?
share: false  # Show social sharing links?
profile: false  # Show author profile?
comments: false  # Show comments?

# Optional header image (relative to `static/img/` folder).
header:
  caption: "Can you see this pic?"
  image: "graph.png"
---

If you see this, all went well!

## Heading 2

Gonna try some math: inline $F=ma$ and as a block.

$$\int_V \mathrm{d}\omega = \int_{\partial V}\omega$$

## That worked out!

Let's try some more stuff[^1]:

For example, this should display a video:

{{< youtube WNSf1F-tcJc >}}


Also, i'm gonna put in the graph of the bipartite Bell scenario.

```mermaid
graph TD;
  X-->A;
  L-->A;
  L-->B;
  Y-->B;
```

This graph aint too stable...


### And now for the big one

First, I'll try putting in some HTML

<dl>
<div id="canvasContainer" style="border: 1px solid black"> 
</div>
</dl>

That's just amazing!

I mean, I need to refine it, but damn!


[^1]: this is a footnote