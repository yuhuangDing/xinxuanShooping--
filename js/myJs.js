/*********************************图片展示列表js************************************************************************/
function leftpho() {
    setpho1();
}
function rightpho() {
    setpho4();
}
function setpho1() {
    var nowpho= $("#pholist1").attr("src");//获取当前图片
    $("#pho").attr("src",nowpho);//设置图片
    $("#pholist-1").addClass("chosepho");//设置选中
    $("#pholist-2").removeClass("chosepho");
    $("#pholist-3").removeClass("chosepho");
    $("#pholist-4").removeClass("chosepho");
}
function setpho2() {
    var nowpho= $("#pholist2").attr("src");//获取当前图片
    $("#pho").attr("src",nowpho);//设置图片
    $("#pholist-2").addClass("chosepho");//设置选中
    $("#pholist-1").removeClass("chosepho");
    $("#pholist-3").removeClass("chosepho");
    $("#pholist-4").removeClass("chosepho");
}
function setpho3() {
    var nowpho= $("#pholist3").attr("src");//获取当前图片
    $("#pho").attr("src",nowpho);//设置图片
    $("#pholist-3").addClass("chosepho");//设置选中
    $("#pholist-2").removeClass("chosepho");
    $("#pholist-1").removeClass("chosepho");
    $("#pholist-4").removeClass("chosepho");
}
function setpho4() {
    var nowpho= $("#pholist4").attr("src");//获取当前图片
    $("#pho").attr("src",nowpho);//设置图片
    $("#pholist-4").addClass("chosepho");//设置选中
    $("#pholist-2").removeClass("chosepho");
    $("#pholist-3").removeClass("chosepho");
    $("#pholist-1").removeClass("chosepho");
}

/**************************************商品详情页颜色版本选择************************************************************/
function select0() {
    $("#ys0").addClass("myselsect-border");

}
function select1() {
    $("#ys1").addClass("myselsect-border");
    $("#ys2").removeClass("myselsect-border");
    $("#ys3").removeClass("myselsect-border");
}
function select2() {
    $("#ys2").addClass("myselsect-border");
    $("#ys1").removeClass("myselsect-border");
    $("#ys3").removeClass("myselsect-border");

}
function select3() {
    $("#ys3").addClass("myselsect-border");
    $("#ys1").removeClass("myselsect-border");
    $("#ys2").removeClass("myselsect-border");
}

function selectfw1() {
    $("#fw1").addClass("myselsect-border");
    $("#fw2").removeClass("myselsect-border");
    $("#fw3").removeClass("myselsect-border");
}
function selectfw2() {
    $("#fw2").addClass("myselsect-border");
    $("#fw1").removeClass("myselsect-border");
    $("#fw3").removeClass("myselsect-border");

}
function selectfw3() {
    $("#fw3").addClass("myselsect-border");
    $("#fw1").removeClass("myselsect-border");
    $("#fw2").removeClass("myselsect-border");
}