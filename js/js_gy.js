/*保留两位小数*/
		 function verificationi(value) {
    	var z="";
    	var kk = "";
        if (value != "") {
        	/*扩大百倍*/
            z =z+value;
            ns = z.length;
            //var nn = z.substr(ns - 3, ns);
            if (z.indexOf('.') > 0) {
                if (ns - z.indexOf('.') <= 3) {

                    if (ns - z.indexOf('.') == 3) {
                        z = z.replace(".", "");
                    }
                    else if(ns - z.indexOf('.') == 2)
                    {
                         z = z.replace(".", "") + "0";
                    }
                }
                else if (ns - z.indexOf('.') > 3) {
                    z = z.substring(0,z.indexOf(".")+4);
                    z=z.replace(".","");
                    z = z.substring(0,z.length-1)+"."+z.charAt(z.length-1);
                    z=Math.round(z);
                }
            }
            else {

                 z += "00";
            };
            /*缩小百倍*/
          
         
      
        if (z != "") {
        	if(parseFloat(z)>=0){
        		 z=z+"";
                 var keng = z.length;
        	if(keng>2){
               kk=z.substring(0,(keng-2))+"."+z.substring((keng-2),keng);
           }else if(keng==2){
           	kk="0."+z;
           }else{
           	kk="0.0"+z;
           }
            return kk;
           }else{
           	z=z+"";
           	z=z.substring(1,z.length);
            var keng = z.length;
            if(keng>2){
             kk=z.substring(0,(keng-2))+"."+z.substring((keng-2),keng);
           }else if(keng==2){
           	kk="0."+z;
           }else{
           	kk="0.0"+z;
           }
            return "-"+kk;
           }
        } 
            

        }
        return 0.00;
    }
		 /*小数计算*/
		/*加*/
function accAdd(arg1,arg2){
	var r1,r2,m;
	try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
	try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
	m=Math.pow(10,Math.max(r1,r2))
	return (Math.round(arg1*m)+Math.round(arg2*m))/m
	}
/*减*/
function accSub(arg1,arg2){
	return accAdd(arg1,-arg2);
}
	//给Number类型增加一个add方法，调用起来更加方便。
	Number.prototype.add = function (arg){
	return accAdd(arg,this);
}

//说明：javascript的减法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的减法结果。
//调用：accSub(arg1,arg2)
//返回值：arg1减上arg2的精确结果
/*减*/
function accSub(arg1,arg2){
	return accAdd(arg1,-arg2);
}
/*乘*/
function accMul(arg1,arg2){   
    arg1=String(arg1);var i=arg1.length-arg1.indexOf(".")-1;i=(i>=arg1.length)?0:i;   
    arg2=String(arg2);var j=arg2.length-arg2.indexOf(".")-1;j=(j>=arg2.length)?0:j;   
    return arg1.replace(".","")*arg2.replace(".","")/Math.pow(10,i+j);   
}
/*除*/
function accDiv(arg1, arg2) {
     var t1 = 0, t2 = 0, r1, r2;
     try {
         t1 = arg1.toString().split(".")[1].length;
     }
     catch (e) {
     }
     try {
         t2 = arg2.toString().split(".")[1].length;
     }
     catch (e) {
     }
     with (Math) {
         r1 = Number(arg1.toString().replace(".", ""));
         r2 = Number(arg2.toString().replace(".", ""));
         return (r1 / r2) * pow(10, t2 - t1);
     }
 }