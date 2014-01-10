function submitStop(e){//Enterでの画面遷移防止
    if (!e) var e = window.event;
    if(e.keyCode == 13)
        return false;
}

function ChangeTab_login_signup(tabname) {
	// 全部消す
	document.getElementById('login').style.display = 'none';
	document.getElementById('signup').style.display = 'none';
	// 指定箇所のみ表示
	if(tabname) {
		document.getElementById(tabname).style.display = 'block';
	}
}

function showThumbNail() {
	document.getElementById('thumbnail').style.display = "block";
}

function hideThumbNail() {
	document.getElementById('thumbnail').style.display = "none";
}
function signup_check(){
	var name=document.signup.inputName_signup.value;
	var pass1=document.signup.inputPassword_signup1.value;
	var pass2=document.signup.inputPassword_signup2.value;
	alert("name: "+name+"\npass1: "+pass1+"\npass2: "+pass2);
	if(name==""){
		alert("名前を入力してください");
	}else if((pass1=="")||(pass2=="")){
		alert("パスワードを入力してください");
	}else if(pass1!=pass2){
		alert("確認用パスワードが一致しません");
	}else if(confirm("名前は"+name+"でよろしいですか？")){
		var req = new XMLHttpRequest();
	    // 送信先のURLを指定
	    req.open("POST", "/post_signup_info");
	    // 結果が帰ってきた際に実行されるハンドラを指定
	    req.onreadystatechange = function () {
	        // readyState == 4: 修了
	        if (req.readyState != 4) {
	            return;
	        }
	        // status == 200: 成功
	        if (req.status != 200) {
	            // 成功しなかった．失敗であることを表示して抜ける．
	            alert("失敗．");
	            return;
	        }
	        
	        // body にはサーバから返却された文字列が格納される．
	        var body = req.responseText;
	        // デバッグ表示 
	        //alert('body: ' + body);
	
	        // 戻ってきた JSON 文字列を JavaScript オブジェクトに変換
	        var data = eval("(" + body + ")");
	        // 入力に利用したインプットボックスの値を，サーバから戻ってきた値で書き換える
//	        document.getElementById(todo_id+"_button").value = data.button_next_value;
//	        document.getElementById(todo_id+"_state").innerHTML = data.todo_state;
	    }
	    // Content-Type の指定
	    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	    // <input id="f"> に入力された文字列をエンコードして送信        
	    req.send("name=" + enc(name));
	    req.send("pass=" + enc(pass1));
	}
	
}

//入力文字列を urlencode して返す
function enc(s) {
    return encodeURIComponent(s).replace(/%20/g, '+');
}