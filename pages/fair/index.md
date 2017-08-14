---
layout: page-fullwidth
show_meta: false
title:  "Arts and Crafts Fair"
teaser: "Here you will find information on the Arts and Crafts Fair."
tags:
    - fair
permalink: "/fair/"
header:
    image_fullwidth: "boosters.png"
---
<ul>
    {% for post in site.categories.fair %}
    <li><a href="{{ site.url }}{{ page.url }}">{{ page.title }}</a></li>
    {% endfor %}
</ul>
