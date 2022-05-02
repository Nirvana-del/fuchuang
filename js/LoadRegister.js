;(function(){
	//登录
	let user = document.getElementById("username")
	let pass = document.getElementById("password")
	let userFault = document.getElementById("userFault")
	let passFault = document.getElementById("passFault")
	//console.log(1)
	user.onblur = function(){
		userFault.style.display="none"
		//console.log(1)
		var myreg = /^[1][3,5,7,8][0-9]{9}$/;
		let value = user.value;
		if(value == ''){
			userFault.innerHTML="账号不能为空"
			userFault.style.display="block"
			//alert("账号不能为空");
			return false;
		}
			;
		 if (!myreg.test(value)) {
					userFault.innerHTML="输入的账号无效"
					userFault.style.display="block"
		            //alert("手机号校验失败");
		            return false;
		        } else {
		           // alert("手机号校验成功");
		            return true;
		        }
	}
	pass.onblur = function(){
		passFault.style.display="none"
		//console.log(1)
		var myreg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
		//密码必须是数字 字母 特殊字符 不支持空格  最少8位
		let value = pass.value;
		if(value == ''){
			passFault.innerHTML="密码不能为空"
			passFault.style.display="block"
			//alert("账号不能为空");
			return false;
		}

		//  if (!myreg.test(value)) {
		// 			passFault.innerHTML="请检查您输入的密码格式是否正确"
		// 			passFault.style.display="block"
		//             //alert("手机号校验失败");
		//             return false;
		//         } else {
		//            // alert("手机号校验成功");
		//             return true;
		//         }
		
	}
	//注册
	let tel = document.getElementById("tel")
	let ps = document.getElementById("ps")
	let rps = document.getElementById("rps")
	let telFault = document.getElementById("telFault")
	let psFault = document.getElementById("psFault")
	let rpsFault = document.getElementById("rpsFault")
	//console.log(1)
	tel.onblur = function(){
		telFault.style.display="none"
		//console.log(1)
		var myreg = /^[1][3,5,7,8][0-9]{9}$/;
		let value = tel.value;
		if(value == ''){
			telFault.innerHTML="账号不能为空"
			telFault.style.display="block"
			//alert("账号不能为空");
			return false;
		}
		 if (!myreg.test(value)) {
					telFault.innerHTML="账号格式错误"
					telFault.style.display="block"
		            return false;
		        } else {
		            return true;
		        }
	}
	ps.onblur = function(){
		psFault.style.display="none"
		//console.log(1)
		var myreg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
		//密码必须是数字、字母最少6位
		let value = ps.value;
		if(value == ''){
			psFault.innerHTML="密码不能为空"
			psFault.style.display="block"
			//alert("账号不能为空");
			return false;
		}
	
		 if (!myreg.test(value)) {
					psFault.innerHTML="请检查您输入的密码格式是否正确"
					psFault.style.display="block"		
		            return false;
		        } else {
		            return true;
		        }
	}
	rps.onblur = function(){
		rpsFault.style.display="none"
		var value = ps.value;
		var rvalue = rps.value;
		if(value!==rvalue){
			rpsFault.innerHTML="请确定和以上设定的密码一致"
			rpsFault.style.display="block"		
		}
		}
    let myname = document.getElementById("myname")
	let mynameFault = document.getElementById("mynameFault")
	myname.onblur = function(){
		mynameFault.style.display="none"
		var value = myname.value;
		if(value==''){
			mynameFault.innerHTML="年龄不可为空"
			mynameFault.style.display="block"		
		}
		}
})();