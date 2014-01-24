package controllers;


import java.io.File;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.xml.bind.annotation.adapters.HexBinaryAdapter;

import models.Avatar;
import models.Comment;
import models.FollowingData;
import models.Photo;
import models.Tag;
import models.TagPhotoRelation;
import models.User;
import play.mvc.Controller;

public class Application extends Controller {

	public static void index() {
		User user = getCurrentUser();
		
		if (user != null)
			home();
		else
			login_signup();
	}    

	public static void login_signup(){render();}

	public static void post_login_info() throws NoSuchAlgorithmException{
		// 標準出力に入力されたパラメータの名前を出力
		System.out.println(params.all().keySet());
		String name =params.get("name");
		String pass =params.get("pass");
		System.out.println(name+" "+pass);
		Map<String, Object> map = new HashMap<String, Object>();
		//name,passあってるかの確認
		List<User> users =User.find("username = ?",	name).fetch();
		if(users.size()!=1){//名前が存在しないor同名が存在（ありえないが念のため）
			map.put("result", "Error: no such name");
		}else{
			if(users.get(0).compare_pass(pass)){
				map.put("result", "OK");
				session.put("login_user", users.get(0).id);
			}else{
				map.put("result", "Error: wrong password");
			}
		}
		// Map に結果を蓄え，JSON として出力
		renderJSON(map);
	}

	public static void post_signup_info() throws NoSuchAlgorithmException{
		// 標準出力に入力されたパラメータの名前を出力
		System.out.println(params.all().keySet());
		String name =params.get("name");
		String pass =params.get("pass");
		System.out.println(name+" "+pass);
		Map<String, Object> map = new HashMap<String, Object>();

		//名前かぶってないか確認
		List<User> users =User.find("username = ?",	name).fetch();	
		if(!users.isEmpty()){//名前被り処理
			map.put("result", "Error: the name is already exist");
		}else{
			map.put("result", "OK");
			// アンケートデータをデータベースに書き込む
			User user = new User(name, pass);
			user.save();
			
			// 埋め込むべき変数をテンプレートに渡す．
			// テンプレートからはキー名で参照できる．
			// テンプレートからは，${entry.id} として該当データで自動生成された
			// ID番号を取得している． 
			renderArgs.put("user", user);

			session.put("login_user", user.id);
		}
		// Map に結果を蓄え，JSON として出力
		renderJSON(map);
	}

	public static void profile(){
		User user = getCurrentUser();
		//File
		render(user);
	}

	public static void postEditProfile(File uploadAvatar) throws NoSuchAlgorithmException{
		Long id = Long.parseLong(session.get("login_user"));
		User user = User.find("id = ?", id).first();
		String nickname = params.get("nickname");
		String profile  = params.get("profile");
		user.set_nickname(nickname);
		user.set_profile(profile);
		user.save();
		if(uploadAvatar != null){
			//Avatar.create(uploadAvatar, id);
			home();
		} else
		
		profile();
	}

	/*
	 * avatar content
	 */
	public static void avatarContent(String name) {
		Avatar avatar = Avatar.findByName(name);
		renderBinary(avatar.file);
	}

	public static void toppage() {
		User user = getCurrentUser();
		if (user == null)
			login_signup();
		else
			render(user);
	}

	public static User getCurrentUser() {
		String userId = session.get("login_user");
		if (userId == null){
			login_signup();
			return null;
		}
		Long id = Long.parseLong(session.get("login_user"));
		User user = User.find("id = ?", id).first();
		
		if (user == null) {
			login_signup();
			return null;
		}
		
		if(user.get_avatar() == null || user.get_avatar().equals("")){
			user.set_avatar("/public/images/default.png");
			user.save();
		}
		return user;
	}

	public static void home() {
		User user = getCurrentUser();
		if (user == null)
			login_signup();
		else{	
			List<Photo> photos = Photo.find("user = ?", user).fetch();
			render(photos, user);
		}
	}

	public static void upload(String title, String tags, String caption, File image) throws NoSuchAlgorithmException {
		if (image != null) {
			User user = getCurrentUser();
			String targetPath = "public/uploads/" + user.get_username().toString() + "/photos";
			File dir = new File(targetPath);
			if (!dir.exists()) {
				dir.mkdirs();
			}
			
			String fileName = image.getName();
			String extension = "";

			int i = fileName.lastIndexOf('.');
			if (i > 0) {
			    extension = fileName.substring(i+1);
			}

			MessageDigest md5 = MessageDigest.getInstance("MD5");
			String hex = (new HexBinaryAdapter()).marshal(md5.digest(fileName.getBytes()));
			
			targetPath += "/" + hex + "." + extension;
			image.renameTo(new File(targetPath));
			Photo photo = new Photo(targetPath, title, caption, user);
			photo.save();
			System.out.println("File saved in " + targetPath);
			
			//tags
			//spaceでsplit
			String[] tagNames = tags.replaceAll("　", " ").split(" ");
			for(String tagName : tagNames){
				//重複確認
				Tag tag = Tag.find("name = ?", tagName).first();
				if(tag == null){
					tag = new Tag(tagName);
					tag.save();
				}
				//タグと写真の関係を保存
				TagPhotoRelation tpr = new TagPhotoRelation(tag, photo);
				tpr.save();
			}
		} else {
			System.out.println("File not found");
		}  
		home();
	}
	
	public static void deletephoto() {
		long photoid = Long.parseLong(params.get("photoid"));
		Map<String, Object> map = new HashMap<String, Object>();
		
		Photo photo = Photo.find("id = ?", photoid).first();
		
		if (photo != null) {
			File dir = new File(photo.get_url());
			if (dir.delete()) {
				Photo.delete("id = ?", photoid);
				map.put("result", "OK");
			} else {
				map.put("result", "Error : unable to delete file from server");
			}
		} else {
			map.put("result", "error");
		}
		renderJSON(map);
	}
	
	public static void addcomment() {
		long photoid = Long.parseLong(params.get("photoid"));
		String content = params.get("content");
		long userid = Long.parseLong(params.get("userid"));
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		Photo photo = Photo.find("id = ?", photoid).first();
		User user = User.find("id = ?", userid).first();
		
		Comment comment = new Comment(user, content, photo);
		
		photo.addComment(comment);
		comment.save();
		map.put("result", "OK");
		map.put("uri", photoid + "&" + userid + "&" + content);
		
		/*
		if (photo != null) {
			File dir = new File(photo.get_url());
			if (dir.delete()) {
				Photo.delete("id = ?", photoid);
				map.put("result", "OK");
			} else {
				map.put("result", "Error : unable to delete file from server");
			}
		} else {
			map.put("result", "error");
		}
		*/
		renderJSON(map);
	}
	
	public static void serchResult(){
		User user = getCurrentUser();
		int count = 0;
		
		
		String search = params.get("serch");
		String[] searchs = search.replaceAll("　", " ").split(" ");
		for (int i=0; i<searchs.length; i++){
			searchs[i] = "%" + searchs[i] + "%";
		}
		
		
		String type = params.get("searchType");
		//ユーザー検索の場合
		if (type.equals("user")){
			HashSet<User> userSet = new HashSet();
			HashSet<User> userSet2 = new HashSet();
			for (String s: searchs){
				List<User> userList = User.find("username like ? OR nickname like ?", s, s).fetch();
				if (count == 0){
					userSet = ListToHashSet(userList);
				} else {
					userSet2 = ListToHashSet(userList);
					userSet.retainAll(userSet2);
				}
				count++;
			}
			
			List<User> userList = SetToList(userSet);
			render(user, userList);
			return;
		}
		
		//photo検索の場合
		//タイトルで検索
		HashSet<Photo> photoTitleSet = new HashSet();
		HashSet<Photo> photoTitleSet2 = new HashSet();
		for (String s: searchs){
			List<Photo> photoTitleList = Photo.find("title like ?", s).fetch();	
			if (count == 0){
				photoTitleSet = ListToHashSet(photoTitleList);
			} else {
				photoTitleSet2 = ListToHashSet(photoTitleList);
				photoTitleSet.retainAll(photoTitleSet2);
			}
			count++;
		}
		
		HashSet<Photo> photoSet = photoTitleSet;		
		
		//タグ検索
		HashSet<Photo> photoTagSet = new HashSet();
		HashSet<Photo> photoTagSet2 = new HashSet();
		count = 0;
		
		for (String s: searchs){
			photoTagSet2.clear();
			List<Tag> tags = Tag.find("name like ?", s).fetch();
			
			for (Tag tag : tags){
				List<TagPhotoRelation> relations = TagPhotoRelation.find("tagId = ?", tag.id).fetch();
				for(TagPhotoRelation relation : relations){
					Photo photo = Photo.find("id = ?", relation.get_photoId()).first();
					if(photo != null){
						if (count == 0){
							photoTagSet.add(photo);
						} else {
							photoTagSet2.add(photo);
						}
					}
				}
				
			}
			if(count != 0){
				photoTagSet.retainAll(photoTagSet2);
			}
			count++;
		}
		
		photoSet.addAll(photoTagSet);
		List<Photo> photoList = SetToList(photoSet);
		
		render(user, photoList);
	}
	
	private static <T> HashSet ListToHashSet(List<T> list){
		HashSet<T> set = new HashSet();
		for (T photo: list){
			set.add(photo);
		}
		return set;
	}
	
	private static <T> List SetToList(Set<T> set){
		ArrayList<T> list = new ArrayList();
		for (T photo: set){
			list.add(photo);
		}
		return list;
	}
	

	public static void logout(){
		session.clear();
		login_signup();
	}
	

	public static void photoviewer(String url) {
		/* 
		 * get photo from parent
		 */
		
		User user = getCurrentUser();
		Photo photo = Photo.find("url = ?", url).first();
		
		List<Comment> comments = Comment.find("photo = ? order by date desc", photo).fetch();
		
		/*
		if (comments.size() < 1) {
			photo.addComment(new Comment(user, "this is a default comment", photo));
			comments = photo.getComment();
		}
		*/
			
		// render
		if (user == null)
			render(photo, comments);
		else
			render(photo, comments, user);
	}
	
	public static void user(long id) {
		User user = User.find("id = ?", id).first();
		if (user == null)
			home();
		else {
				List<Photo> photos = Photo.find("user = ?", user).fetch();
				render(photos, user);
			}
		}

	public static void follower(){
		User user = getCurrentUser();
		//List<User> followings=user.getFollowing();
		List<Photo> photos = Photo.find("user = ?", user).fetch();
		render(user, photos);
	}
	
	public static void follow(long id) {
		User currentUser = getCurrentUser();
		User user = User.find("id = ?", id).first();

		FollowingData data = new FollowingData(currentUser, user);
		data.save();
		user(id);
	}
	
	public static void unFollow(long id) {
		User currentUser = getCurrentUser();
		User user = User.find("id = ?", id).first();

		FollowingData data = FollowingData.find("follower = ? AND followee = ?", currentUser, user).first();
		data.delete();
		user(id);
	}
	
	public static void timeline() {
		User user = getCurrentUser();
		List<Photo> photos = Photo.find("order by date desc").fetch();
		render(photos, user);
	}
}
