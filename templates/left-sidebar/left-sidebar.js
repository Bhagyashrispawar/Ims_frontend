$(document).ready(function() {
    $('#sidebar-control').click(function() {
        $('#left-sidebar').toggleClass("active");
        if ($('#control-icon').hasClass('fa-caret-right')) {
            $('#control-icon').removeClass('fa-caret-right');
            $('#control-icon').addClass('fa-caret-left');
        } else {
            $('#control-icon').removeClass('fa-caret-left');
            $('#control-icon').addClass('fa-caret-right');
        }
        $(".side_main").toggleClass('active');
     

    });

});