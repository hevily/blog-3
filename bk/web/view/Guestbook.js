/**
 * Created by Administrator on 2017/5/2.
 */
$(function () {
    //留言列表
    var currentPage = 1; // 当前页码, 从1开始
    function  refreshMsg(currentPage) {
        $.ajax({
            type:"post",
            url:"msg?action=getAllMsg",
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
                        var htmls=[];
                        //循环生成数组
                        if(((currentPage-1)*pageSize+pageSize)<totalNumber)
                        {
                            var maxIndex=((currentPage-1)*pageSize+pageSize);
                        }
                        else {
                            var maxIndex=totalNumber;
                        }
                        for(var i = ((currentPage-1)*pageSize); i <maxIndex; i++) {
                            var msgRplList='';
                            for(var j=0;j<msgString.data[i].msgReplyList.length;j++)
                            {
                                msgRplList+='<img src="../assets/img/photo.jpg" class="commentItem-left"><div class="commentItem-right"><p class="Reply-name">'
                                    +msgString.data[i].msgReplyList[j].replyUser+
                                    '</p><p class="Reply-content">'
                                    +msgString.data[i].msgReplyList[j].content+
                                    '</p><p class="Reply-bottom"><span class="comment-createTime">'
                                    +msgString.data[i].msgReplyList[j].replyTime+
                                    '</span></p></div>'
                            }
                            htmls.push('<li id="'
                                +msgString.data[i].msgId+
                                '"><div class="comment-top"><img src="../assets/img/photo.jpg" class="commentItem-left"><div class="commentItem-right"><p class="comment-name">'
                                +msgString.data[i].userName+'</p><p class="comment-content">'
                                +msgString.data[i].content+
                                '</p><p class="comment-bottom"><span class="comment-createTime">'
                                +msgString.data[i].msgTime+
                                '</span><span class="mui-icon mui-icon-undo reply-btn">回复</span><span class="mui-icon mui-icon-closeempty msgDel-btn">删除</span></p> </div> </div><div class="Reply-list">'
                                +msgRplList+
                                '</div><div class="Reply"><img src="../assets/img/photo.jpg" class="make-comment-left"><div class="make-comment-right clearfix"><textarea name="" placeholder="说点什么吧" class="comment-text replt-text"></textarea><button class="comment-cancle">取消</button><button class="comment-btn" disabled>回复</button></div></div></li>')
                        }
                        $("#msgList").html(htmls)
                        // //开始页
                        var rangeStart = Math.max(1, currentPage - parseInt(maxButtons / 2));
                        //最后一页
                        var rangeEnd = Math.min(totalPage, rangeStart + maxButtons - 1);

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
    refreshMsg(currentPage);
    $('html').delegate('.pagination a','click',function () {
        var currentPage = this.getAttribute('data-num');
        // alert(currentPage)
        refreshMsg(currentPage);
    })

    //添加留言
    $('#addMsg').click(function () {
        var btn=$(this);
        $.ajax({
            type:"post",
            url:"msg?action=addMsg",
            dataType:"json",
            data:{
                'userName':$.cookie('nickname'),
                'content':$(this).siblings('textarea').val(),
            },
            success:function (msgString) {
                refreshMsg(currentPage);
                btn.siblings('textarea').val('');
                // alert($(this).siblings('textarea').val())
                mui.toast('留言成功')
            }
        })
    })
    //回复留言
    $(".comment-list").delegate('.comment-btn','click',function () {
        var btn=$(this);
        $.ajax({
            type: "post",
            url: "msgReply?action=addMsgReply",
            dataType: "json",
            data: {
                'msgId': btn.parents('li').attr('id'),
                'userName':$.cookie('nickname'),
                'content': btn.siblings('textarea').val()
            },
            success:function (msgString) {
                refreshMsg(currentPage);
                mui.toast('回复成功')
                btn.parent().parent('.Reply').fadeOut();
            },
            error:function () {
                alert('error')
            }
        })
    })
    //删除留言
    $(".comment-list").delegate('.msgDel-btn','tap',function () {
        var btn=$(this);
        // alert(id.attr('id'))
        var btnArray = ['否', '是'];
        mui.confirm('确认要删除吗？', '警告', btnArray, function(e) {
            if (e.index == 1) {
                $.ajax({
                    type:"post",
                    url:"msg?action=deleteMsg",
                    data:{
                        "msgId":btn.parents('li').attr('id')
                    },
                    success:function (msgString) {
                        mui.toast('删除成功');
                        $('.mui-popup').fadeOut();
                        refreshMsg(currentPage);
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

    //无分页
    // function  refreshMsg() {
    //     $.ajax({
    //         type:"get",
    //         url:"msg?action=getAllMsg",
    //         dataType:"json",
    //         success:function (msgString) {
    //             var htmls=[];
    //             if(msgString.code=='200')
    //             {
    //                 for(var i=0;i<msgString.data.length;i++)
    //                 {
    //                     var msgRplList='';
    //                     for(var j=0;j<msgString.data[i].msgReplyList.length;j++)
    //                     {
    //                         msgRplList+='<img src="../assets/img/photo.jpg" class="commentItem-left"><div class="commentItem-right"><p class="Reply-name">'
    //                             +msgString.data[i].msgReplyList[j].replyUser+
    //                             '</p><p class="Reply-content">'
    //                             +msgString.data[i].msgReplyList[j].content+
    //                             '</p><p class="Reply-bottom"><span class="comment-createTime">'
    //                             +msgString.data[i].msgReplyList[j].replyTime+
    //                             '</span></p></div>'
    //                     }
    //                     $("#msgList").prepend('<li id="'
    //                         +msgString.data[i].msgId+
    //                         '"><div class="comment-top"><img src="../assets/img/photo.jpg" class="commentItem-left"><div class="commentItem-right"><p class="comment-name">'
    //                         +msgString.data[i].userName+'</p><p class="comment-content">'
    //                         +msgString.data[i].content+
    //                         '</p><p class="comment-bottom"><span class="comment-createTime">'
    //                         +msgString.data[i].msgTime+
    //                         '</span><span class="mui-icon mui-icon-undo reply-btn">回复</span><span class="mui-icon mui-icon-closeempty msgDel-btn">删除</span></p> </div> </div><div class="Reply-list">'
    //                         +msgRplList+
    //                         '</div><div class="Reply"><img src="../assets/img/photo.jpg" class="make-comment-left"><div class="make-comment-right clearfix"><textarea name="" placeholder="说点什么吧" class="comment-text replt-text"></textarea><button class="comment-cancle">取消</button><button class="comment-btn" disabled>回复</button></div></div></li>')
    //                 }
    //                 // $("#msgList").html(htmls);
    //             }
    //             else {
    //                 alert('into ajax but fail')
    //             }
    //         },
    //         error:function (msgString) {
    //             alert('fail to ajax')
    //         }
    //     })
    // }
    // refreshMsg();
})