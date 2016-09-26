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
