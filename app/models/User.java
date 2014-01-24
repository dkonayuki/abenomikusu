package models;

import play.*;
import play.db.jpa.*;
import sun.misc.BASE64Encoder;

import javax.persistence.*;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.*;


//TODO 画像のアップロードetc

@Entity
public class User extends Model{
    //public static int id; //	auto make, auto increment
    private String pass;//digested
    private String username;
    private String nickname;
    private String profile;
    private String avatar;//URL
    private String cover;//URL

    @OneToMany(mappedBy="followee", cascade=CascadeType.ALL)
    public List<FollowingData> followers; //自分をfollowしている人のリスト
    @OneToMany(mappedBy="follower", cascade=CascadeType.ALL)
    public List<FollowingData> followings; //自分がfollowている人のリスト
    //(mappedBy="FollowingData", cascade=CascadeType.ALL)
    
    @OneToMany(mappedBy="user", cascade=CascadeType.ALL)
    private List<Photo> photos;
    
    public void set_pass(String pass) throws NoSuchAlgorithmException{this.pass=digest(pass);}
    public boolean compare_pass(String pass) throws NoSuchAlgorithmException{
    	return this.pass.equals(digest(pass));
    }
    
    public void set_username(String username){this.username=username;}
    public String get_username(){return this.username;}
    
    public void set_nickname(String nickname){this.nickname=nickname;}
    public String get_nickname(){return this.nickname;}
    
    public void set_profile(String profile){this.profile=profile;}
    public String get_profile(){return this.profile;}
    
    public void set_avatar(String avatar){this.avatar=avatar;}
    public String get_avatar(){return this.avatar;}
    
    public void set_cover(String cover){this.cover=cover;}
    public String get_cover(){return this.cover;}

    public User(String username, String pass) throws NoSuchAlgorithmException {
    	this.username=username;
    	this.nickname=username;
    	this.pass=digest(pass);
    	this.profile="よろしくお願いします。";
    	this.avatar="/public/images/default.png";//default icon URL
    	this.cover="";//default cover URL
    }
    
    public void addPhoto(Photo photo) {
    	this.photos.add(photo);
    }
    
    public boolean isFollowed(long id) {
    	User user = User.find("id = ?", id).first();
    	for (FollowingData f : this.followers) {
    		if (f.getFollower() == user) 
    			return true;
    	}
    	return false;
    }
    
    public int getFollowerCount() {
    	return this.followers.size();
    }

    public int getFollowingCount() {
    	return this.followings.size();
    }
    
    /*
    public boolean isFollowed(FollowerData data) {
		if (this.followers.contains(data)) 
			return true;
		else 
			return false;
    }
    public void addFollower(FollowerData data) {
    	this.followers.add(data);
    }
    public void deleteFollower(FollowerData data) {
    	this.followers.remove(data);
    }

    
    public boolean isFollowing(User user) {
    	if (this.followings.contains(user)) 
    		return true;
    	else 
    		return false;
    }
    public void addFollowing(FollowingData data) {
    	this.followings.add(data);
    }
    public void deleteFollowing(FollowingData data) {
    	this.followings.remove(data);
    }

    */
    
    public int getPhotoNumber() {
    	return this.photos.size();
    }
    
    private static  String digest (String password) throws NoSuchAlgorithmException{
    	//ダイジェスト化
		String passDigest = null;
		if (password != null && 0 < password.length()) {
			MessageDigest md = MessageDigest.getInstance("SHA-1");
			//md.update(userName.getBytes());
			md.update("ABENO".getBytes());
			md.update(password.getBytes());
			byte[] digest = md.digest();
			BASE64Encoder encoder = new BASE64Encoder();
			String b64digest = encoder.encodeBuffer(digest);
			passDigest = b64digest.trim();
		}
		return passDigest;

    }
}
