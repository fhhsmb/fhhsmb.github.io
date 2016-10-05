---
layout: page-fullwidth
title:  "FHHS Band Boosters Board"
teaser: "Here you will find information on the FHHS Band Booster Board."
categories:
    - boosters
tags:
    - boosters
    - board
permalink: "/boosters/board/"
header:
    image_fullwidth: "boosters.png"
---
<ul>
  {% for board in site.data.board %}
  <li>{{ board.Position }} - <a href="mailto:{{ board.Email }}">{{ board.Name }}</a></li>
  {% endfor %}
</ul>
