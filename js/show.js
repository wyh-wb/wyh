$(function(){
	
	/*分割线的宽度*/
	
	       /* var fen_h=document.getElementById("flxm_img").height;
			document.getElementById("flxm").style.lineHeight=fen_h+"px";
			document.getElementById("flxm").style.top="-"+fen_h+"px";*/
			var num=1;
			/*图片轮播*/
			var imgs = $(".lun_img");
			var lis = $(".lun li");
			function lunBo(){
				$(".lun_img").css("display","none");	
				$(".lun li").css("background","#d9d7d7");
				imgs[num].style.display="block";
				lis[num].style.background="#ffffff";
				num++;
				if(num>2){
					num=0;
				}
		  
			}
			/*时间函数*/
			var time = setInterval(lunBo,2000); 
			$(".lun li").click(function(){
				num = this.getAttribute("num");
				$(".lun_img").css("display","none");
				$(".lun li").css("background","#d9d7d7");
				imgs[num].style.display="block";
				this.style.background="#ffffff";	
			})
			
			/*点击搜索想要的美食*/
			$(".search_span").click(function(){
				this.style.display="none";
				$(".search_input").focus();
			})
			$(".search_input").blur(function(){
				if(this.value==""){
					$(".search_span").css("display","inline-block");
				}
			})
			/*添加至购物车的动态效果*/
			if($(".num")[0].style.display=="none"){
				var total=0;
			}else{
			var total=parseFloat($('.num').html());
			}
			$(".jia").click(function(){
				total++;
				var img = $($(this).parent().find('img')[0]);
				var src=img.attr("src");
				 flyImg = document.createElement("img");
				 flyImg.width="100%";
				 flyImg.src=src;
			$('.shangPin').append(flyImg);
			flyImg=$(flyImg);
			flyImg.css({'opacity':'0.6'});
			flyImg.css({
				'z-index':999,
				'border':'3px solid #fff',
				'position': 'absolute',
				'height' : img.height() + 'px',
				'width' : img.width() + 'px',
				'top' : img.offset().top +'px',
				'left' : img.offset().left + 'px'
			});
			flyImg.animate({
				'width' : 50 + 'px',
				'height' : 50 + 'px',
				'border-radius' : 100 + '%'
			},1000,function(){
				flyImg.animate({
					'top':(document.documentElement.clientHeight+document.documentElement.scrollTop-55)+'px',
					'left':'65%',
					'height':0 +'px',
					'width' :0+'px',
				},1000,function(){
					flyImg.remove();
					$('.num').html(total);
					$(".num").css("display","inline");
				})
				
			})
			})
			/*分类 鼠标悬浮事件*/
			
			/*跳转商品详情页面*/
			$(".shopping").click(function(){
				window.location.href="itemdetail.html";
			})
			
			
		})
		  