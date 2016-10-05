---
layout: page-fullwidth
title:  "FHHS Band Boosters Minutes"
teaser: "Here you will find FHHs Band Booster Board meeting minutes."
categories:
    - boosters
tags:
    - boosters
    - board
permalink: "/boosters/minutes/"
header:
    image_fullwidth: "boosters.png"
---

<ul>
  {% for pdf in site.minutes %}
  <li><a href="{{ pdf.path }}">{{ pdf.name }}</a></li>
  {% endfor %}
</ul>
