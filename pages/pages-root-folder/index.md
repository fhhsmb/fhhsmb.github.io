---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
header:
  image_fullwidth: banner2.jpg
widget1:
  title: "Marching Band Info"
  url: '/bands/marching/'
  image: mb-widget.jpg
  text: 'Select this section to find information on the <em>Francis Howell Marching Band</em>. It will include infomation on schedule, eligibility, band camp, and upcoming events.'
  video: '<a href="#" data-reveal-id="videoModal1"><img src="/images/marching.png" width="302" height="182" alt=""/></a>'
widget2:
  title: "Drumline Info"
  url: '/bands/drumline/'
  text: 'Check out the information on the <em>Francis Howell Drumline</em>. Infomation includes schedule, eligibility, camps and events.'
  video: '<a href="#" data-reveal-id="videoModal"><img src="/images/drumline.png" width="302" height="182" alt=""/></a>'
widget3:
  title: "Winter Guard Info"
  url: '/bands/guard/'
  image: wg-widget.jpg
  text: 'Information on the <em>Francis Howell Winter Guard</em>. Includes information on schedule, eligibility, camps, and events. '
#
# Use the call for action to show a button on the frontpage
#
# To make internal links, just use a permalink like this
# url: /getting-started/
#
# To style the button in different colors, use no value
# to use the main color or success, alert or secondary.
# To change colors see sass/_01_settings_colors.scss
#
callforaction:
  url: https://tinyletter.com/feeling-responsive
  text: Inform me about new updates and features ›
  style: alert
permalink: /index.html
#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: true
---

<div id="videoModal1" class="reveal-modal large" data-reveal="">
  <div class="flex-video widescreen vimeo" style="display: block;">
    <iframe width="1280" height="720" src="http://www.youtube.com/embed/Pxw4wvZTcEY" frameborder="0" allowfullscreen></iframe>
  </div>
  <a class="close-reveal-modal">&#215;</a>
</div>
<div id="videoModal" class="reveal-modal large" data-reveal="">
  <div class="flex-video widescreen vimeo" style="display: block;">
    <iframe width="1280" height="720" src="http://www.youtube.com/embed/OPkQ7RzGX8Q" frameborder="0" allowfullscreen></iframe>
  </div>
  <a class="close-reveal-modal">&#215;</a>
</div>
