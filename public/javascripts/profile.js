function avatarChange(obj) {

	var reader = new FileReader();
	var avatar = document.getElementById("avatar");

	reader.onload = function(evt) {
		avatar.src = evt.target.result;
	}
	reader.readAsDataURL(obj.files[0]);
}