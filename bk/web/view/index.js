/**
 * Created by Administrator on 2017/5/1.
 */
 $(function () {
     // alert($.cookie('nickname')+','+$.cookie('mobile'))
     //获取推荐文章列表
     $.ajax({
         type:"get",
         url:"essay?action=getEssayByRecommend",
         dataType:"json",
         success:function (msgString) {
             var htmls=[];
             if(msgString.code=='200')
             {
                 // alert('into 200')
                 for(var i=0;i<msgString.data.length;i++)
                 {
                     // alert(msgString.data[i])
                     htmls.push('<article class=" clearfix" id="'
                         +msgString.data[i].essayId+
                         '"><a href="../view/articleDetail.jsp"> <div class="article-bg"> <img src="../assets/img/1-1504022119110-L.jpg" alt="文章图片"></div> <div class="article-content"> <header> <h3>'
                         +msgString.data[i].title+
                         '</h3> </header> <p class="p-bottom">'
                         +msgString.data[i].content+
                         '</p><p class="article-footer clearfix"><span>分类:<a href="#">'
                         +msgString.data[i].etype+
                         '</a></span><span>发布时间：<time>'
                         +msgString.data[i].createTime+
                         '</time></span></p> </div> </a></article>')
                 }
                 console.log(msgString.data+''+msgString.data.length)
                 $("#recommandArticle").html(htmls);
             }
             else{
                 alert('ajax success but not 200')
             }
         },
         error:function (msgString) {
             alert('fail to ajax');
         }
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
