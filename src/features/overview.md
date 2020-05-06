---
id: overview
title: Overview
layout: default
---

# Overview Mode

Press »ESC« or »O« keys to toggle the overview mode on and off. While you're in this mode, you can still navigate between slides,
as if you were at 1,000 feet above your presentation. The overview mode comes with a few API hooks:

```javascript
Reveal.on( 'overviewshown', event => { /* ... */ } );
Reveal.on( 'overviewhidden', event => { /* ... */ } );

// Toggle the overview mode programmatically
Reveal.toggleOverview();
```