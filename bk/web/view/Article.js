/**
 * Created by Administrator on 2017/5/1.
 */
$(function () {
    //获取所有文章列表
    var currentPage = 1; // 当前页码, 从1开始
    function  Refresh(currentPage) {
        $.ajax({
            type:"get",
            url:"essay?action=getAllEssay",
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
                            arr.push('<article class=" clearfix" id="'
                                +msgString.data[o].essayId+
                                '"><a href="../view/articleDetail.jsp"> <div class="article-bg"> <img src="../assets/img/1-1504022119110-L.jpg" alt="文章图片"></div> <div class="article-content"> <header> <h3>'
                                +msgString.data[o].title+
                                '</h3> </header> <p class="p-bottom">'
                                +msgString.data[o].content+
                                '</p><p class="article-footer clearfix"><span>分类:<a href="#">'
                                +msgString.data[o].etype+
                                '</a></span><span>发布时间：<time>'
                                +msgString.data[o].createTime+
                                '</time></span></p> </div> </a></article>');
                        }
                        // //开始页
                        var rangeStart = Math.max(1, currentPage - parseInt(maxButtons / 2));
                        //最后一页
                        var rangeEnd = Math.min(totalPage, rangeStart + maxButtons - 1);
                        $('#article-wrap').html(arr);

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
    Refresh(currentPage);
    $('main').delegate('.pagination a','click',function () {
        var currentPage = this.getAttribute('data-num');
        // alert(currentPage)
        Refresh(currentPage);
    })

    //获取文章点赞排行
    $.ajax({
        type:"get",
        url:"essay?action=getEssayByZan",
        dataType:"json",
        success:function (msgString) {
            var htmls=[];
            var numbers=[];
            if(msgString.code=='200')
            {
                // alert('into 200')
                for(var i=0;i<10;i++)
                {
                    var index=i+1;
                    // alert(msgString.data[i])
                    htmls.push('<li class="zan" id="'
                        +msgString.data[i].essayId+
                        '"> <a href="../view/articleDetail.jsp">'+msgString.data[i].title+'</a></li>');
                    numbers.push('<li>'+index+'</li>');
                }
                console.log(msgString.data+''+msgString.data.length)
                $("#Article-list").html(htmls);
                $("#numbers").html(numbers);
            }
            else{
                alert('ajax success but not 200')
            }
        },
        error:function (msgString) {
            alert('fail to ajax');
        }
    })
})
