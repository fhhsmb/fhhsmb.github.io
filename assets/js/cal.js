$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
          left: 'prev,today,next print',
          center: 'title',
          right: 'month,agendaWeek,agendaDay',
          },
        googleCalendarApiKey: 'AIzaSyD0NzQJE0Xg0OxS2wdd-iOZPM3ryGnsah0',
        eventSources: [
          {
              googleCalendarId: 'fhhsmb@gmail.com',
              class: 'fhhsmb',
              color: 'blue',
              textColor: 'yellow'
          },
          {
              googleCalendarId: 'fhhsmbdrumline@gmail.com',
              class: 'fhhsmbdrumline',
              color: 'yellow',
              textColor: 'blue'
          },
          {
              googleCalendarId: 'fhhsmbfamilyarena@gmail.com',
              class: 'fhhsmbfamilyarena',
              color: 'green',
              textColor: 'white'
          },
          {
              googleCalendarId: 'fhhsmbguard@gmail.com',
              class: 'fhhsmbguard',
              color: 'sienna',
              textColor: 'white'
          },
          {
              googleCalendarId: 'fhhsmbbball@gmail.com',
              class: 'fhhsmbbball',
              color: 'white',
              textColor: 'blue'
          },
      ],

        eventClick: function(event) {
          // opens events in a popup window
          var startdate = moment(event.start).format("h:mm a");
          var dated = moment(event.start).format("MM.DD.YYYY");
          var enddate = moment(event.end).format("h:mm a");
          var location = event.location;
          if (location == 'undefined' || location == null) {
            location = ""
          };
          var et = event.url;
          var linkurl = "http://www.google.com/calendar/render?action=TEMPLATE&text=" + event.title + "&dates=" + event.start + "%2F" + "&location=" + location + "&details=&hl=en-GB&ctz=America/Chicago&sf=true&output=xml"
          var link2 = et.split(' ').join('+') + "<p>" + dated + " " + startdate + " - " + enddate + "<p>" + location + "<p><a href=" + linkurl + ">Google</a>"
          window.open(link2, 'gcalevent', 'width=500,height=400');
          return false;
        },

        loading: function(bool) {
              $('#loading').toggle(bool);
       },
       eventRender: function(event, element) {
         var startdate = moment(event.start).format("h:mm a");
         var dated = moment(event.start).format("MM.DD.YYYY");
         var enddate = moment(event.end).format("h:mm a");
         var location = event.location;
         if (location == 'undefined' || location == null) {
           location = " "
         }
         element.qtip({
           content: {
             text: event.title + "<p>" + dated + " " + startdate + " - " + enddate
           },
          style: 'qtip-youtube',
          position: {
            my: 'bottom center',
            at: 'top center'
          }
      });
    },
        eventMouseover: function(event) {
          jQuery(this).qtip();
        },
        eventMouseout: function(event) {
          jQuery(this).qtip().hide();
        }
    });
});
$(".chooser").click(function () {

    $chooser = $(this);
    //getting the next element
    $content = $chooser.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $chooser.text(function () {
            //change text based on condition
            return $content.is(":visible") ? "Close Calendars" : "Choose Calendars";
        });
    });

});
