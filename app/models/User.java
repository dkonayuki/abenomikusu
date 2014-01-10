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
    private String profile;
    private String avatar;//URL
    private String cover;//URL
    //nickname , username wo wakete
//    private List<User> folower;
//    private List<Photo> photos;
    private HashMap<Long,User> folower;//List<user_id>

    
    public void set_pass(String pass) throws NoSuchAlgorithmException{this.pass=digest(pass);}
    public boolean compare_pass(String pass) throws NoSuchAlgorithmException{
    	return this.pass.equals(digest(pass));
    }
    
    public void set_username(String username){this.username=username;}
    public String get_username(){return this.username;}
    
    public void set_profile(String profile){this.profile=profile;}
    public String get_profile(){return this.profile;}
    
    public void set_avatar(String avatar){this.avatar=avatar;}
    public String get_avatar(){return this.avatar;}
    
    public void set_cover(String cover){this.cover=cover;}
    public String get_cover(){return this.cover;}
    
    public void add_folower(User user){
    	this.folower.put(user.id,user);
    }
    public void delete_folower(User user){
    	this.folower.remove(user.id);
    }
    public HashMap get_folower(){
    	return this.folower;
    }
    
    public User(String username, String pass) throws NoSuchAlgorithmException {
    	this.username=username;
    	this.pass=digest(pass);
    	this.profile="よろしくお願いします。";
    	this.avatar="/public/images/default.png";//default icon URL
    	this.cover="";//default cover URL
//    	this.folower=new TreeSet<Integer>();
//    	this.photos=new ArrayList<Photo>();
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
