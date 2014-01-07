function avatarChange(obj) {

	var reader = new FileReader();
	var avatar = document.getElementById("avatarImage");

	reader.onload = function(evt) {
		avatar.src = evt.target.result;
	}
	reader.readAsDataURL(obj.files[0]);
	console.log(avatar);
}

/*

jQuery(document).ready(function(){
    // ボタンが押されたとき
    jQuery("#cancel").click(function(){
    	console.log("ボタンが押された");
        jQuery('#avatarInput').upload(
           'upload.php',    // 送信先
            {type:'photo'},     // 同時にPOSTするデータ
            function (result) {
                jQuery("#results").html(result);
            },
            'text'       // 戻り値の種類
        );
    });
});
*/