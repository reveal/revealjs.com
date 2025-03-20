---
id: lightbox
title: Lightbox
layout: default
---

# Lightbox <span class="r-version-badge new">5.2.0</span>

A lightbox is a modal that displays an image or video in a full-screen overlay. It's great for things like clicking on thumbnails to view a larger [image](#image-lightbox) or [video](#video-lightbox).

## Image Lightbox

The simplest way to trigger a lightbox in reveal.js is to add the `data-preview-image` attribute to an `img` tag. Clicking on the image below, will open the same image in an overlay.

```html
<img src="reveal.png" data-preview-image>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <img src="/images/logo/reveal-black-text-sticker.png" data-preview-image width="400px">
    </section>
  </div>
</div>

Lightboxes aren't limited to opening the image src. You can open any image you like by assigning a value to the `data-preview-image` attribute.

```html
<img src="reveal.png" data-preview-image="mastering.svg">
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <img src="/images/logo/reveal-black-text-sticker.png" data-preview-image="/images/docs/mastering.svg" width="400px">
    </section>
  </div>
</div>


## Video Lightbox

Video lightboxes work the same way as image lightboxes except you use the `data-preview-video` attribute instead.

```html
<video src="video.mp4" data-preview-video></video>
<img src="reveal.png" data-preview-video="video.mp4">
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <div class="r-hstack" style="gap: 40px;">
        <video src="https://static.slid.es/site/homepage/v1/homepage-video-editor.mp4" data-preview-video width="400px"></video>
        <img src="/images/logo/reveal-black-text-sticker.png" data-preview-video="https://static.slid.es/site/homepage/v1/homepage-video-editor.mp4" width="400px">
      </div>
    </section>
  </div>
</div>

## Lightbox Media Size
The sizing of media in the lightbox can be controlled using the `data-preview-fit` attribute. The following fit modes are supported:

| Value                | Effect                                                                   |
| :------------------- | :----------------------------------------------------------------------- |
| scale-down (default) | Scale media down if needed to fit in the lightbox.                       |
| contain              | Scale media up and down to fit the lightbox without cropping.            |
| cover                | Scale media to cover the entire lightbox, even if some of it is cut off. |
```html
<img src="reveal.png" data-preview-image data-preview-fit="cover">
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <img src="/images/logo/reveal-white-text.svg" data-preview-image data-preview-fit="cover" width="400px">
    </section>
  </div>
</div>

## Works on Any Element

Note that the lightbox feature works on any element, not just images and videos. For example, you can trigger an image or video lightbox from clicking a button or link.

```html
<a data-preview-image="image.png">📸 Open Logo</a>
<button data-preview-video="video.mp4">🎥 Open Video</button>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <a data-preview-image="/images/logo/reveal-black-text-sticker.png">📸 Open Logo</a>
      <br/>
      <br/>
      <button data-preview-video="https://static.slid.es/site/homepage/v1/homepage-video-editor.mp4">🎥 Open Video</button>
    </section>
  </div>
</div>

## Iframe Lightbox

It's possible to preview links in iframe lightboxes using the `data-preview-link` attribute. When this attribute is added to an `<a>` tag, reveal.js will automatically open the link's `href` in an iframe.

If you want to open an iframe lightbox from another element, you can set the iframe source as a value to the `data-preview-link` attribute.

```html
<a href="https://hakim.se" data-preview-link>Open Hakim's Website</a>
<img src="reveal.png" data-preview-link="https://hakim.se">
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <a href="https://hakim.se" data-preview-link>Open Hakim's Website</a>
      <br />
      <br />
      <img src="/images/logo/reveal-black-text-sticker.png" data-preview-link="https://hakim.se" width="400px">
    </section>
  </div>
</div>

Note that this will only work if the link allows for embedding. Many websites prevent embedding via `x-frame-options` or `Content-Security-Policy`.