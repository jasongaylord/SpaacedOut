---
title: Tags
permalink: /tags/
include_nav: false
---

<script>
  SpaacedOut.ready(() => {
    let title = document.getElementsByClassName('post-title')
    if (title) {
      title[0].style.display = 'none'
    }
    let tag = window.location.hash
    if(tag) {
        let tagElement = document.getElementById(tag.substring(1))
        if (tagElement) {
          tagElement.style.display = 'block'
        }
    }
    else {
      // Let's just show them all
      var tags = document.getElementsByClassName('tag')
      for (var tagElement of tags) {
        if (tagElement) {
          tagElement.style.display = 'block'
        }
      }
    }
  })
</script>

{% assign tags = site.tags %}

<div class="tag_page">
{% for tag in tags %}
  {% assign tagname = tag | first | slugify %}
<div id="{{ tagname }}" class="tag">
  <h2>#{{ tagname }} Posts</h2>
  {% assign posts = tag[1] %}
  <ul>
  {% for post in posts %}
    <li>
      <a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a>
    </li>
  {% endfor %}
  </ul>
</div>
{% endfor %}
</div>