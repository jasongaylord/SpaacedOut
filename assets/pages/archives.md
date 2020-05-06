---
title: Archives
permalink: /archives/
include_nav: true
---

<div class="archives" itemscope itemtype="http://schema.org/Blog">
{% assign postCount = 0 }
{% for post in site.posts %}
{% assign postCount = 1}
{% if post.layout == 'post' %}
	{% include post/archive_post.html %}
{% endif %}
{% endfor %}
{% if postCount == 0 %}
  </ul>
{% endif %}
</div>