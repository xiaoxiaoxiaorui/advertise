/**
 * Created by Administrator on 2017/3/13.
 */
$(function () {
                        /* fullpage */
    /*$("#contents").fullpage({
        anchors:["page1","page2","page3","page4"],
        menu:"#menu",
        resize:true,
        onLeave: function (index,nextIndex) {
            if(nextIndex == 1){
                $(".nav2").attr({"class":"nav1 nav"});
                $(".logo2").attr({"class":"logo1"});
                $("a").css({"color":"#ffffff"});
            }else{
                $(".nav1").attr({"class":"nav2 nav"});
                $(".logo1").attr({"class":"logo2"});
                $("a").css({"color":"#2497ea"});
            }
        }
    });*/

                        /*nav toggle*/
    $(window).scroll(function () {
        var top = $(document).scrollTop();
        if(top>150){
            $(".nav1").attr({"class":"nav2 nav"});
            $(".logo1").attr({"class":"logo2"});
            $("a").css({"color":"#2497ea"});
        }else if( top < 150){
            $(".nav2").attr({"class":"nav1 nav"});
            $(".logo2").attr({"class":"logo1"});
            $("a").css({"color":"#ffffff"});
        }
    });
                        /*  maodian */
    var name = $(".section");
    $(".navbar-nav a").click(function () {
        var index = $(".navbar-nav a").index(this);
        $("html,body").animate({scrollTop:$(name[index]).offset().top-70},{duration: 500,easing: "swing"});
    });

    $(".top form input").click(function () {
        $("html,body").animate({scrollTop:$(name[3]).offset().top-70},{duration: 500,easing: "swing"});
    })
});