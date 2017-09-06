

//盆骨修复划过效果
$(".h-pelvis-repair li").mouseover(function(){
    $(".h-detail").eq($(this).index()).css("display","block");
    $(this).siblings().children(".h-detail").css("display","none");
});
$(".h-pelvis-repair ul").mouseout(function(){
    $(".h-detail").css("display","none");
});

$(function(){
    $(".l-nav li").click(function(){
        $(".l-nav li").eq($(this).index()).addClass("active").siblings().removeClass("active");
    })
});

//划过效果

$(".c-box2 li").mouseover(function(){
    $(this).addClass("on").siblings().removeClass("on");
});
$(".c-box2 li").mouseout(function(){
    $(this).removeClass("on");
});

//锚点效果
var tag=true;
var count=0;
$(".h-maodian-right li").click(function(){
    tag=false;
    var tmp;
    $(this).addClass("active").siblings().removeClass("active");
    var id=$(this).attr("name");
    var index=$(this).index();
    if(count===0){
        tmp=79;
    }else{
        tmp=0;
    }
    if(index==0){
        $("body,html").animate({"scrollTop":$(id).offset().top-40-tmp},1000,function(){ tag=true;});
    }else if(index==3){
        $("body,html").animate({"scrollTop":$(id).offset().top-tmp},1000,function(){ tag=true;});
    }else{
        $("body,html").animate({"scrollTop":$(id).offset().top-120-tmp},1000,function(){ tag=true;});
    }
    count=1;
});
$(window).scroll(function(){
    if($(window).scrollTop()>567){
        count=1;
        $(".h-maodian-wrap").addClass("h-maodian-fixed");
    }else{
        $(".h-maodian-wrap").removeClass("h-maodian-fixed");
        count=0;
    }

    var windowHeight=$(window).height()-200;
    var hanzhengTop=$("#hanzheng").offset().top-windowHeight+50;
    var wenxiuTop=$("#wenxiu").offset().top-windowHeight-120;
    var penguTop=$("#pengu").offset().top-windowHeight-120;
    var sushenTop=$("#sushen").offset().top-windowHeight;

    if(tag){
        if($(window).scrollTop()>wenxiuTop && $(window).scrollTop()<penguTop){

            $(".h-maodian-right li").eq(1).addClass("active").siblings().removeClass("active");

        }else if($(window).scrollTop()>penguTop && $(window).scrollTop()<sushenTop){

            $(".h-maodian-right li").eq(2).addClass("active").siblings().removeClass("active");

        }else if($(window).scrollTop()>sushenTop){

            $(".h-maodian-right li").eq(3).addClass("active").siblings().removeClass("active");

        }else{

            $(".h-maodian-right li").eq(0).addClass("active").siblings().removeClass("active");

        }
    }

});
