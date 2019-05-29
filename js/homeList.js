Zepto(function ($) {
    // 一级菜单
    $('.secondList .list .on').on("click",function () {
        if ($(this).next(".on_content").css("display")==="block"){
            $(".on_content").css("display","none");
            $('.hide').hide();
            $('.secondList .list .on').find("a").removeClass("down");
        } else{
            $(".on_content").css("display","none");
            $(this).next(".on_content").css("display","block");
            $('.hide').hide();
            $(this).parents(".list").siblings('.hide').show();
            $('.secondList .list .on').find("a").removeClass("down");
            $(this).find("a").addClass("down");
        }
    });
    if($('.hide').css('display')==='none'){
        $('.hide').on('click',function () {
            $('.secondList .list .on').find("a").removeClass('down');
            $(".on_content").css('display','none');
            $('.hide').hide();
        })
    }
    // 二级菜单
    $('.area .title h2').on('click',function () {
        $('.area .title h2').removeClass('active');
        $(this).addClass('active');
    });
    $('.area .hideList ul li').on('click',function () {
        $(this).find("a").toggleClass('active');
    });
    $('.price ul li').on('click',function () {
        $(this).find("a").toggleClass('active');
    });
    $('.house ul li span').on('click',function () {
        $('.house ul li span').removeClass('active');
        $(this).addClass('active');
    });
    $('.more .childList li').on('click',function () {
        $(this).toggleClass('active');
    });
    $.ajax({
        url:"./json/home.json",
        dataType:"json",
        success:function (data) {
            var lis="";
            for (var i = 0 ; i< data.home.length;i++){
                lis += "<li>";
                lis += "<a href='detailHome.html'><img src='"+data.home[i].img+"'></a>";
                lis +="<div class='message_text'>";
                lis += "<h4>"+data.home[i].title+"</h4>";
                lis += "<p><span>"+data.home[i].ceng+"</span></p>";
                lis += "<p><span>"+data.home[i].price+"</span><span class='money'>"
                    +data.home[i].money+"</span></p>";
                lis += "<p><span>"+data.home[i].date+"</span></p>"
                lis +="</div>";
                lis +="</li>"
            }
            $(".message ul").append(lis);
        }
    })
})