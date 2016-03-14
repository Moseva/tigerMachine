var flag=0;
var timer1=null;
var timer2=null;
var timer3=null;

function go(){
    if(flag==0){
        //开始滚
        timer1=setInterval(function(){
            var speed=-100;
            var cardTop=parseInt($("#cards1").css("top"));
            $("#cards1").css("top",cardTop+speed+"px");
            if (cardTop<=-1100) {
                $("#cards1").css("top",0);
            };
        },100)
        timer2=setInterval(function(){
            var speed=-100;
            var cardTop2=parseInt($("#cards2").css("top"));
            $("#cards2").css("top",cardTop2+speed+"px");
            if (cardTop2<=-1100) {
                $("#cards2").css("top",0);
            };
        },100)
        timer3=setInterval(function(){
            var speed=-100;
            var cardTop3=parseInt($("#cards3").css("top"));
            $("#cards3").css("top",cardTop3+speed+"px");
            if (cardTop3<=-1100) {
                $("#cards3").css("top",0);
            };
        },100)
        $("#ctrlBtn span").text("STOP");
        flag=1;
    }else{
        disableBtn();
        //停
        clearInterval(timer1);
        var cardTopnow=parseInt($("#cards1").css("top"));
        var whichcard=Math.floor(cardTopnow/240);
        $("#cards1").css("top",whichcard*20+"rem");
        setTimeout(function(){
            clearInterval(timer2);
            var card2Topnow=parseInt($("#cards2").css("top"));
            var whichcard2=Math.floor(card2Topnow/240);
            $("#cards2").css("top",whichcard2*20+"rem");
        },500)
        setTimeout(function(){
            clearInterval(timer3);
            var card3Topnow=parseInt($("#cards3").css("top"));
            var whichcard3=Math.floor(card3Topnow/240);
            $("#cards3").css("top",whichcard3*20+"rem");
            recoverBtn();
        },1000)
        $("#ctrlBtn span").text("START");
        flag=0;
    }
}

function disableBtn(){
    $("#ctrlBtn").removeAttr("onclick");
}
function recoverBtn(){
    $("#ctrlBtn").attr("onclick","go()");
}
