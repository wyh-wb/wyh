var xin_bianji;
$(function() {
				/*设为默认点击事件*/
				$('.th_fir img').click(function() {
					$(".th_fir img").attr("src", "images/wd14.png");
					$(this).attr("src", "images/wd13.png");
				})
				var th_sec=$('.th_sec');/*编辑*/
				var th_th=$('.th_th');/*删除*/
				$(".tai_xiao").click(function(){
					
				$(".tai").css("display","none");
				})
				/*点击编辑事件*/
				for(var i = 0;i<th_sec.length;i++){
					th_sec[i].index=i;
					th_th[i].index=i;
					th_sec[i].onclick=function(){
						xin_bianji=this.index;
						var info_name=this.parentElement.parentElement.getElementsByClassName("info_name")[0].innerHTML;
						var tel=this.parentElement.parentElement.getElementsByClassName("tel")[0].innerHTML;
						var info_sheng=this.parentElement.parentElement.getElementsByClassName("info_sheng")[0].innerHTML;
						var info_shi=this.parentElement.parentElement.getElementsByClassName("info_shi")[0].innerHTML;
						var info_qu=this.parentElement.parentElement.getElementsByClassName("info_qu")[0].innerHTML;
						var info_address=this.parentElement.parentElement.getElementsByClassName("info_address")[0].innerHTML;
						var address_id=this.getElementsByTagName("img")[0].getAttribute("address_id");
						$(".tai_sure").attr("address_id",address_id);
						xian("编辑",info_name,tel,info_sheng,info_shi,info_qu,info_address);
					}
				}
				/*点击新增事件*/
				$(".xin_address").click(function(){
					xian("新增");
				})
				/*点击删除事件*/
				$(".th_th").click(function(){
					$(".info")[this.index].remove();
					var th_sec=$('.th_sec');/*编辑*/
				var th_th=$('.th_th');/*删除*/
				for(var i = 0;i<th_sec.length;i++){
					th_sec[i].index=i;
					th_th[i].index=i;
				}
				})
			})
			var height = document.documentElement.clientHeight+"px";;
			$(".tai").css("height",height);
			$(".mo").css("height",height);
			function xian(obj,info_name,tel,info_sheng,info_shi,info_qu,info_address){
				$(".tai").css("display","block");
				$('.sheng').html("");
				$('.shi').html("");
				$('.qu').html("");
				$(".tai_title").html(obj);
				$('#info_name').val(info_name);
				$('#tel').val(tel);
				$('.sheng').html(info_sheng);
				$('.shi').html(info_shi);
				$('.qu').html(info_qu);
				$('#info_address').val(info_address);
				if(obj=="编辑"){
					$(".defalut").css("display","none");
					$(".info1").css("height","199px");
				}else{
					$(".defalut").css("display","block");
					$(".info1").css("height","250px");
				}
			}
			/*新增地址中是否默认的点击事件*/
			$(".xin_defalut img").click(function(){
				if(this.getAttribute("src")=="images/wd13.png"){
					this.setAttribute("src","images/wd14.png");
				}else{
					this.setAttribute("src","images/wd13.png");
				}
			})
			/*省市区的点击事件*/
		
			$(".ssq_sec")[0].onclick=function(){
				$('.mo').css("display","block");
				$('.mo_ssq').css("display","block");
				var Province=$(".sheng")[0].innerHTML;
               	var City=$(".shi")[0].innerHTML;
               	var Area=$(".qu")[0].innerHTML;
               	if(Province!=""){
               		$("#Province i")[0].innerHTML=Province;
               		
               	
               		var sheng_li=$(".num1 li");
               		for(var i = 0;i<sheng_li.length;i++){
               			if(sheng_li[i].getElementsByTagName("a")[0].innerHTML==Province){
               				sheng_li[i].onclick();
               				$("#City i")[0].innerHTML=City;
               				break;
               			}
               		}
               		var shi_li=$(".num2 li");
               		for(var i = 0;i<shi_li.length;i++){
               			if(shi_li[i].getElementsByTagName("a")[0].innerHTML==City){
               				shi_li[i].onclick();
               				$("#Area i")[0].innerHTML=Area;
               				break;
               			}
               		}
               		var qu_li=$(".num3 li");
               		for(var i = 0;i<qu_li.length;i++){
               			if(qu_li[i].getElementsByTagName("a")[0].innerHTML==Area){
               				qu_li[i].getElementsByTagName("a")[0].style.color="rgb(247, 71, 30)";	
               				break;
               			}
               		}
               	    $(".ul").css("display","none");
               	    $(".mo_ssq i").css("border-bottom-color","#FFFFFF");
				    $(".mo_ssq i").css("color","#000000");
               		$("#Province i").css("color","#F7471E");
				    $("#Province i").css("border-bottom-color","#F7471E")
              
               		
               		
               	}else{	
               	}
			}
			$(".mo_ssq i").click(function(){
				$(".mo_ssq i").css("border-bottom-color","#FFFFFF");
				$(".mo_ssq i").css("color","#000000");
				$(this).css("color","#F7471E");
				$(this).css("border-bottom-color","#F7471E")
				$(".ul").css("display","none");
				var biao = $(this).attr("num");
				$("."+biao).css("display","block");
			})
			    $("#Province ul li").click(function(){
				   
			})
               $("#City ul").click(function(){
				    
			})
               $(".mo").click(function(){
               	var Province=$("#Province i")[0].innerHTML;
               	var City=$("#City i")[0].innerHTML;
               	var Area=$("#Area i")[0].innerHTML;
               	if(Province=="请选择省份" || City=="请选择城市" || Area=="请选择地区"){
               		$('.mo').css("display","none");
				    $('.mo_ssq').css("display","none");
				    return false;
               	}
				    ssq(Province,City,Area);
			})
               $(".ms_title span").click(function(){
               	var Province=$("#Province i")[0].innerHTML;
               	var City=$("#City i")[0].innerHTML;
               	var Area=$("#Area i")[0].innerHTML;
               	if(Province=="请选择省份" || City=="请选择城市" || Area=="请选择地区"){
               		$('.mo').css("display","none");
				    $('.mo_ssq').css("display","none");
				    return false;
               	}
				    ssq(Province,City,Area);
			})
               /*新增、更改地址信息的确定按钮*/
              $(".tai_sure").click(function(){
              	if($(".tai_title")[0].innerHTML=="新增"){
              		var info_name=$('#info_name').val();
						var tel=$('#tel').val();
						var info_sheng=$('.sheng').html();
						var info_shi=$('.shi').html();
						var info_qu=$('.qu').html();
						var info_address=$('#info_address').val();
						if($(".xin_defalut img").attr("src")=="images/wd13.png"){
							var is_defalut=1;
						}else{
							var is_defalut=0;
						}
						alert(is_defalut);
              		location.reload();
              	}else{
              		/*编辑*/
              		var info_name=$('#info_name').val();
						var tel=$('#tel').val();
						var info_sheng=$('.sheng').html();
						var info_shi=$('.shi').html();
						var info_qu=$('.qu').html();
						var info_address=$('#info_address').val();
              	        $(".tai").css("display","none");
              	        $(".info")[xin_bianji].getElementsByClassName("info_name")[0].innerHTML=info_name;
              	        $(".info")[xin_bianji].getElementsByClassName("tel")[0].innerHTML=tel;
              	        $(".info")[xin_bianji].getElementsByClassName("info_sheng")[0].innerHTML=info_sheng;
              	        $(".info")[xin_bianji].getElementsByClassName("info_shi")[0].innerHTML=info_shi;
              	        $(".info")[xin_bianji].getElementsByClassName("info_qu")[0].innerHTML=info_qu;
              	        $(".info")[xin_bianji].getElementsByClassName("info_address")[0].innerHTML=info_address;
              	}        
              })
               
               
			function ssq(Province,City,Area){
				$(".sheng")[0].innerHTML=Province;
				$(".shi")[0].innerHTML=City;
				$(".qu")[0].innerHTML=Area;
				$('.mo').css("display","none");
				$('.mo_ssq').css("display","none");
			}