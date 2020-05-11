---
title: Tags
permalink: /tags/
include_nav: false
---

{% assign tags = site.tags %}

{% for tag in tags %}
  {% assign tagname = tag | first | slugify %}
<div id="{{ tagname }}" class="tag">
  <h2>{{ tagname }} Posts</h2>
  {% assign posts = tag[1] %}
  <ul>
  {% for post in posts %}
    <li>
      <h3 class="title"><a href="{{ post.url }}">{{post.title}}</a></h3>
    </li>
  {% endfor %}
  </ul>
</div>
{% endfor %}