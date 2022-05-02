;(function(){
    //前台首页
    $('.navbar-collapse a.myindex').click(function () {
        $('.navbar-collapse').collapse('hide');
    });
    //退出按钮
    $('.navbar-collapse .closes a').click(function () {
        $('.navbar-collapse').collapse('hide');
    });
    $(".myclose").click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $("input:radio").click(function(){
        const checkedState = $(this).attr('checked');//记录当前选中状态
        if(checkedState === 'checked'){
            $("input:radio").removeAttr('checked');
        }else {
            const that = $(this);
            $("input:radio").each(function () {
                if($(this).attr("id") !== that.attr("id"))
                {
                    $(this).removeAttr('checked');
                }else{
                    $(this).attr('checked',true);
                }
            });

        }
    });
})();