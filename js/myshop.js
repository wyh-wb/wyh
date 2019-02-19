$(function(){
			$("textarea").focus(function(){
				this.style.borderColor="#f7471e";
			})
			$("textarea").blur(function(){
				this.style.borderColor="#EBEBEB";
			})
			/*合计总价的计算*/
			var price = $(".js_price span");
			var total=0;
			for(var i=0;i<price.length;i++){
				total=accAdd(total,price[i].innerHTML);
			}
			$('.hj span').html(verificationi(total));
			/*加减点击事件*/
			 /*人数加减号点击事件*/
	var renShu=1;
	/*赋予加号下标*/
	var jia=$(".jia");
	var jian=$(".jian");
	var rs_num=$(".rs_num");
	for(var i=0;i<jia.length;i++){
		jia[i].index=i;
		jian[i].index=i;
		rs_num[i].index=i;
		jia[i].onclick=function(){
			var now_price=$(".js_price")[this.index].getElementsByTagName("span")[0].innerHTML;
		if(this.nextElementSibling.value>=1){
			this.nextElementSibling.nextElementSibling.style.color="#f7471c";
			this.nextElementSibling.nextElementSibling.style.borderColor="#f7471c";
		}
		if(this.nextElementSibling.value==999){
			this.nextElementSibling.value=999;
		}else{
			this.nextElementSibling.value++;
			$(".js_price")[this.index].getElementsByTagName("span")[0].innerHTML=verificationi(accMul(this.nextElementSibling.value,$(".hw_dj")[this.index].getElementsByTagName("span")[0].innerHTML));
			$(".hj span")[0].innerHTML=verificationi(accAdd(accSub($(".hj span")[0].innerHTML,now_price),$(".js_price")[this.index].getElementsByTagName("span")[0].innerHTML));
		}
		
		}
	}
	
	$(".jian").click(function(){
		var now_price=$(".js_price")[this.index].getElementsByTagName("span")[0].innerHTML;
		if(this.previousElementSibling.value==1){
			 $(".hj span")[0].innerHTML=verificationi(accSub($(".hj span")[0].innerHTML,now_price));
			this.parentElement.parentElement.parentElement.remove();
			
			var jia=$(".jia");
	var jian=$(".jian");
	var rs_num=$(".rs_num");
			for(var i=0;i<jia.length;i++){
		jia[i].index=i;
		jian[i].index=i;
		rs_num[i].index=i;
		}
		}else{
			this.previousElementSibling.value--;
			if(this.previousElementSibling.value==1){
				this.style.color="#DADADA";
			    this.style.borderColor="#DADADA";
			};
			 $(".js_price")[this.index].getElementsByTagName("span")[0].innerHTML=verificationi(accMul(this.previousElementSibling.value,$(".hw_dj")[this.index].getElementsByTagName("span")[0].innerHTML));
			 $(".hj span")[0].innerHTML=verificationi(accAdd(accSub($(".hj span")[0].innerHTML,now_price),$(".js_price")[this.index].getElementsByTagName("span")[0].innerHTML));
		
		}
		
	})
	var begin_num=0;
	$(".rs_num").focus(function(){
		begin_num=this.value;
	})
	$(".rs_num").blur(function(){
		var now_price=$(".js_price")[this.index].getElementsByTagName("span")[0].innerHTML;
		if(this.value>999){
			this.value=999;
			this.nextElementSibling.style.color="#f7471c";
			this.nextElementSibling.style.borderColor="#f7471c";
			 $(".js_price")[this.index].getElementsByTagName("span")[0].innerHTML=verificationi(accMul(this.value,$(".hw_dj")[this.index].getElementsByTagName("span")[0].innerHTML));
			 $(".hj span")[0].innerHTML=verificationi(accAdd(accSub($(".hj span")[0].innerHTML,now_price),$(".js_price")[this.index].getElementsByTagName("span")[0].innerHTML));
			   return false;
		};
		if(this.value<1){
			/*this.value=1;
		   $(".js_price")[this.index].getElementsByTagName("span")[0].innerHTML=verificationi(accMul(this.value,$(".hw_dj")[this.index].getElementsByTagName("span")[0].innerHTML));
			 $(".hj span")[0].innerHTML=verificationi(accAdd(accSub($(".hj span")[0].innerHTML,now_price),$(".js_price")[this.index].getElementsByTagName("span")[0].innerHTML));
			*/
			 $(".hj span")[0].innerHTML=verificationi(accSub($(".hj span")[0].innerHTML,now_price));
			
			this.parentElement.parentElement.parentElement.remove();
			var jia=$(".jia");
	var jian=$(".jian");
	var rs_num=$(".rs_num");
			for(var i=0;i<jia.length;i++){
		jia[i].index=i;
		jian[i].index=i;
		rs_num[i].index=i;
		}
			return false;
		}
		if(this.value==1){
			this.nextElementSibling.style.color="#DADADA";
			this.nextElementSibling.style.borderColor="#DADADA";
		 $(".js_price")[this.index].getElementsByTagName("span")[0].innerHTML=verificationi(accMul(this.value,$(".hw_dj")[this.index].getElementsByTagName("span")[0].innerHTML));
			 $(".hj span")[0].innerHTML=verificationi(accAdd(accSub($(".hj span")[0].innerHTML,now_price),$(".js_price")[this.index].getElementsByTagName("span")[0].innerHTML));
				return false;
		}
		if(this.value>1){
			this.nextElementSibling.style.color="#f7471c";
			this.nextElementSibling.style.borderColor="#f7471c";
			 $(".js_price")[this.index].getElementsByTagName("span")[0].innerHTML=verificationi(accMul(this.value,$(".hw_dj")[this.index].getElementsByTagName("span")[0].innerHTML));
			 $(".hj span")[0].innerHTML=verificationi(accAdd(accSub($(".hj span")[0].innerHTML,now_price),$(".js_price")[this.index].getElementsByTagName("span")[0].innerHTML));
			return false;
		}
	})
			
		/*送货方式的点击事件*/
		/*默认选择快递*/
		$(".kd")[0].style.display="none";
		$('.zt')[0].onclick=function(){
			$(".kd")[0].style.display="block";
			$(".kd")[1].style.display="none";
		}
		$('.zt')[1].onclick=function(){
			$(".kd")[1].style.display="block";
			$(".kd")[0].style.display="none";
		}
		/*付款方式的点击事件*/
		/*默认付款方式*/
	/*	$(".kd")[3].style.display="none";
		$('.zt')[2].onclick=function(){
			$(".kd")[2].style.display="block";
			$(".kd")[3].style.display="none";
		}
		$('.zt')[3].onclick=function(){
			$(".kd")[3].style.display="block";
			$(".kd")[2].style.display="none";
		}*/
		})