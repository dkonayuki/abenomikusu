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
	