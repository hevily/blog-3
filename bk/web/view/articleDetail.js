/**
 * Created by Administrator on 2017/5/1.
 */
$(function () {
    var currentPage = 1; // 当前页码, 从1开始
    function refreshAritceDetail(currentPage) {
        $.ajax({
            type:"post",
            url:"essay?action=getEssayDetailById",
            data:{
                'essayId':$.cookie('articleId')
            },
            dataType:"json",
            success:function (msgString) {
                var htmls=[];
                var Length=msgString.data.evaluatesList.length;
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
                        var detail=[];
                        var commentList='';
                        detail.push('<h1>'
                            +msgString.data.essay.title+
                            '</h1><div class="articleDetail-top"><span>发表时间<i>'
                            +msgString.data.essay.createTime+
                            '</i></span><span>文章分类：<i>'
                            +msgString.data.essay.etype+
                            '</i></span></div><div class="articleDetail-content">'
                            +msgString.data.essay.content+
                            '</div><div class="articleOperate"><button class="articleDel" id="'
                            +msgString.data.essay.essayId+
                            '">删除文章</button><button class="articleEditor">编辑文章</button></div>')

                        for(var o = ((currentPage-1)*pageSize); o <maxIndex; o++) {
                            commentList+='<li><div class="comment-top"><img src="../assets/img/photo.jpg" class="commentItem-left"><div class="commentItem-right"><p class="comment-name">'
                                +msgString.data.evaluatesList[o].userName+
                                '</p><p class="comment-content">'
                                +msgString.data.evaluatesList[o].commentText+
                                '</p><p class="comment-bottom"><span class="comment-createTime">'
                                +msgString.data.evaluatesList[o].commentTime+
                                '</span><span style="color: #ac8b72;margin-left: 70px" class="mui-icon mui-icon-closeempty msgDel-btn" id="'
                                +msgString.data.evaluatesList[o].commentId+
                                '">删除</span></p></div></div></li>';
                        }
                        // //开始页
                        var rangeStart = Math.max(1, currentPage - parseInt(maxButtons / 2));
                        //最后一页
                        var rangeEnd = Math.min(totalPage, rangeStart + maxButtons - 1);
                        $("#article-Detail").html(detail);
                        $("#comment-list").html(commentList);

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
    refreshAritceDetail(currentPage);
    $('main').delegate('.pagination a','click',function () {
        var currentPage = this.getAttribute('data-num');
        // alert(currentPage)
        refreshAritceDetail(currentPage);
    })

    //评论文章
    $("#addComment").click(function () {
        $.ajax({
            type:"post",
            url:"comment?action=addComment",
            data:{
                'essayId':$.cookie('articleId'),
                'userName':$.cookie('nickname'),
                'comment':$("#commentText").val()
            },
            dataType:"json",
            success:function (msgString) {
                if (msgString.code='200')
                {
                    refreshAritceDetail(currentPage);
                    mui.toast('评论成功')
                }
            }
        })
    })
    //删除文章评论
    $("main").delegate('.msgDel-btn','tap',function () {
        var btn=$(this);
        // alert(id.attr('id'))
        var btnArray = ['否', '是'];
        mui.confirm('确认要删除吗？', '警告', btnArray, function(e) {
            if (e.index == 1) {
                $.ajax({
                    type:"post",
                    url:"comment?action=deleteCommentById",
                    data:{
                        'commentId':btn.attr('id'),
                    },
                    success:function (msgString) {
                        $('.mui-popup').fadeOut();
                        refreshAritceDetail(currentPage);
                        mui.toast('删除文章评论成功！')
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
    //删除文章
    $("main").delegate('.articleDel','tap',function () {
        var id=$(this);
        // alert(id.attr('id'))
        var btnArray = ['否', '是'];
        mui.confirm('确认要删除吗？', '警告', btnArray, function(e) {
            if (e.index == 1) {
                $.ajax({
                    type:"post",
                    url:"essay?action=deleteEssay",
                    data:{
                        "essayId":id.attr('id')
                    },
                    success:function (msgString) {
                        mui.toast('删除成功');
                        $('.mui-popup').fadeOut();
                        window.location.href='/view/Article.jsp'
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
})
