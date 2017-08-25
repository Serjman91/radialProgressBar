$(document).ready(
	function() {
        radialProgressBar();
	   function radialProgressBar() {
           var s = Snap('#animated');
           var progress = s.select('#progress');

               progress.attr({strokeDasharray: '0, 251.2'});
               Snap.animate(0, 251.2, function (value) {
                   if (value > 249) {
                     if($(".text").is(':visible')) {
                         $(".text").hide();
                         $(".text1").show("slow");
                     }
                       if($(".text1").is(':visible')) {
                           $(".text1").hide();
                           $(".text").show("slow");
                       }

                   }
                   progress.attr({'stroke-dasharray': value + ',251.2'});

               }, 5000,  radialProgressBar);


       }

        $(".menu-dropdown").hover(
            function(){
                $('.drop li').show();
            },
            function(){
                $('.drop li').hide();
            });

});

