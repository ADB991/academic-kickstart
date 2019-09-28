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
<div>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>
  <dd> What is the dd HTML tag?. Use HTML <em>tags</em>.</dd>
  <dd> DD is just the new line tag... </dd>
  <dt> And now... the interactive sketch! </dt>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.js"></script>
  <script src="sketch.js"></script>

    <div id="canvasContainer" style="border: 1px solid black">
    </div>
</div>
</dl>

That's just amazing!

Trying to move it around...


[^1]: this is a footnote