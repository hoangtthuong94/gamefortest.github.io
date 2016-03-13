$(document).ready(function() {
    function t() {
        var e=$(window).width(), t=1;
        if(e>1200) {
            t=4
        }
        else if(e>992&&e<1200) {
            t=4
        }
        else if(e>768&&e<992) {
            t=2
        }
        else if(e>662&&e<768) {
            t=2
        }
        else if(e<662||e<480) {
            t=1
        }
        return t
    }

 
    $(window).scroll(function() {
        if($(window).scrollTop()>80) {
            $(".navbar").removeClass("navbar-transparent")
        }
        else {
            $(".navbar").addClass("navbar-transparent")
        }
    }
    );
    if($(window).scrollTop()>80) {
        $(".navbar").removeClass("navbar-transparent")
    }
    
    $(window).bind("resize", function() {
        
        }
    );
 
}

)
