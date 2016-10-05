---
layout: page-fullwidth
show_meta: false
title:  "Bands"
teaser: "Here you will find information on the bands at Francis Howell High School."
tags:
    - bands
    - marching
    - Drumline
    - Winter Guard
    - Concert
    - Jazz
    - Symphonic
permalink: "/bands/"
header:
    image_fullwidth: "mb-header.jpg"
---
<ul>
    {% for post in site.categories.bands %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
