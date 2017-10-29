/**
 * Created by Administrator on 2017/5/2.
 */
$(function () {
    //获取所有文章列表
    var currentPage = 1; // 当前页码, 从1开始
    function  DairyRefresh(currentPage) {
        $.ajax({
            type:"get",
            url:"daily?action=getAllDaily",
            dataType:"json",
            success:function (msgString) {
                var htmls=[];
                var Length=msgString.data.length;
                if(msgString.code=='200')
                {
                    //实现分页
                    var pageSize = 5; // 每页显示记录数
                    var maxButtons =Math.ceil( Length/5); // 显示的分页按钮数量
                    var totalNumber = Length; // 记录总数
                    var totalPage = parseInt(Math.ceil(totalNumber / pageSize)); // 总页数
                    initPage();

                    function initPage() {
                        //循环生成数组
                        var arr = [];
                        if(((currentPage-1)*pageSize+pageSize)<totalNumber)
                        {
                            var maxIndex=((currentPage-1)*pageSize+pageSize);
                        }
                        else {
                            var maxIndex=totalNumber;
                        }
                        for(var o = ((currentPage-1)*pageSize); o <maxIndex; o++) {
                            arr.push('<li class="clearfix"><p>'
                                +msgString.data[o].content+
                                '</p><p><span>发表时间：<i>'+msgString.data[o].createTime+'</i></span><button class="deleteDairy" id="'
                                +msgString.data[o].dailyId+
                                '">删除</button></p></li>')
                        }
                        // //开始页
                        var rangeStart = Math.max(1, currentPage - parseInt(maxButtons / 2));
                        //最后一页
                        var rangeEnd = Math.min(totalPage, rangeStart + maxButtons - 1);
                        $('#DiaryList').html(arr);

                        //创建分页模板
                        var str = "";
                        str += "<div class='pagination'>";
                        //如果总页数大于1
                        if(totalPage > 1) {
                            //当前页不是第一页
                            if(currentPage != 1) {
                                str += '<a data-num="1"><span>首页</span></a>';
                                str += '<a data-num="' + (currentPage - 1) + '"><span>上一页</span></a>';
                            } else {
                                //如果是第一页，禁用上一页按钮
                                str += '<span>首页</span>';
                                str += '<span>上一页</span>';
                            }
                            //中间页码
                            for(var i = rangeStart; i <= rangeEnd; i++) {
                                //如果是当前页的话，就禁用当前页的按钮
                                if(i == currentPage) {
                                    str += '<span class="on">' + i + "</span>";
                                } else {
                                    //否则就可以点击该页
                                    str += '<a data-num="' + i + '"><span>' + i + "</span></a>";
                                }
                            }
                            //当前页不是总页，即是最后一页
                            if(currentPage != totalPage) {
                                str += '<a data-num="' + (parseInt(currentPage) + 1) + '"><span>下一页</span></a>';
                                str += '<a data-num="' + totalPage + '"><span>末页</span></a>';
                            } else {
                                //如果是最后页，禁用下一页
                                str += '<span>下一页</span>';
                                str += '<span>末页</span>';
                            }
                        }
                        str += ' 一共' + totalPage + '页, ' + totalNumber + '条记录 </div>';

                        var divpager = document.getElementById("pager");
                        divpager.innerHTML = str;
                    }
                }
                else{
                    alert('ajax success but not 200')
                }
            },
            error:function (msgString) {
                alert('fail to ajax');
            }
        })
    }
    DairyRefresh(currentPage);
    $('main').delegate('.pagination a','click',function () {
        var currentPage = this.getAttribute('data-num');
        // alert(currentPage)
        DairyRefresh(currentPage);
    })

    //发表日记
    $("#addDairyBtn").click(function () {
        $.ajax({
            type:"post",
            url:"daily?action=addDaily",
            data:{
                "content":$("#DiartConent").val()
            },
            dataType:"json",
            success:function (msgString) {
                if(msgString.code='200')
                {
                    mui.toast('发表成功！');
                    DairyRefresh(currentPage);
                    $(".add-Diary-content").fadeOut();
                }
            }
        })
    })
    //删除日记
    $("#DiaryList").delegate('.deleteDairy','tap',function () {
        var id=$(this);
        // alert(id.attr('id'))
            var btnArray = ['否', '是'];
            mui.confirm('确认要删除吗？', '警告', btnArray, function(e) {
                if (e.index == 1) {
                    $.ajax({
                        type:"post",
                        url:"daily?action=deleteDaily",
                        data:{
                            "dailyId":id.attr('id')
                        },
                        success:function (msgString) {
                                mui.toast('删除成功');
                                $('.mui-popup').fadeOut();
                                DairyRefresh(currentPage);
                        },
                        error:function (msgString) {
                            alert('not into ajax')
                        }
                    })
                } else {
                    $('.mui-popup').fadeOut();
                }
            })
    })
    //显示日记填写框
    $(".add-Diary-content").delegate('#DiartConent','input propertychange',function () {
        if($.trim($(this).val()) != '') {
            $("#addDairyBtn").attr('disabled', false);
        } else {
            $("#addDairyBtn").attr('disabled', true);
        }
    })
     $("#addDairy").click(function () {
         $("#DiartConent").val('');
         $(".add-Diary-content").fadeIn();
     })
    $("#DiaryCancle").click(function () {
        $(".add-Diary-content").fadeOut();
    })
})