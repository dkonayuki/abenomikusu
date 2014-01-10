package controllers;


import play.*;
import play.mvc.*;
import sun.misc.BASE64Encoder;

import models.*;

import javax.persistence.*;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import org.apache.commons.io.FileUtils;

import java.io.File;
import java.util.*;

import models.User;
import play.mvc.Controller;
import play.mvc.Http;



public class Application extends Controller {

    public static void index() {
    	session.clear();
        render();
    }
    

    public static void login_signup(){render();}
    
    public static void post_login_info(){}
    
    public static void post_signup_info() throws NoSuchAlgorithmException{
    	// 標準出力に入力されたパラメータの名前を出力
        System.out.println(params.all().keySet());
        String name =params.get("name");
        String pass =params.get("pass");
        
        //TODO　名前かぶってないか確認
        
        
    	// アンケートデータをデータベースに書き込む
        User user = new User(name, pass);
        user.save();
        
        // 埋め込むべき変数をテンプレートに渡す．
        // テンプレートからはキー名で参照できる．
        // テンプレートからは，${entry.id} として該当データで自動生成された
        // ID番号を取得している． 
        renderArgs.put("user", user);
        
     // Map に結果を蓄え，JSON として出力
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("result", "OK");
        renderJSON(map);

    }
    
    public static void profile(){
    	/*
    	User user = new User("夏目漱石", "1234");
    	user.avatar = "/public/default.png";
    	user.profile = "吾輩は猫である　名前は既にある";
    	user.save();
    	*/
    	session.put("id", 1L);
    	User user = User.find("id = ?", Long.parseLong(session.get("id"))).first();
    	render(user);
    }
    
    public static void postEditProfile(File uploadAvatar){
    	Long id = Long.parseLong(session.get("id"));
    	
    	User user = User.find("id = ?", id).first();
    	String username = params.get("username");
    	String profile  = params.get("profile");
    	user.set_username(username);
    	user.set_profile(profile);
    	user.save();
    	Avatar.create(uploadAvatar, id);
    	
    	profile();
    }    	

    /*
     * アバターの一覧表示(for debug)
     */
    public static void avatars(){
    	List<Avatar> avatars = Avatar.findAll();
        render(avatars);
    }
    
    /*
     * avatar content
     */
    public static void avatarContent(String name) {
        Avatar avatar = Avatar.findByName(name);
        renderBinary(avatar.file);
    }
    
    public static void newAvatar() {
        render();
    }
    
    public static void toppage() {
    	render();
    }
    
    public static void home() {
    	//render();
    	List<Photo> photos = Photo.all().fetch();
    	render(photos);
    }
    
    public static void upload(String title, String tags, String caption, File image) {
        if (image != null) {
            String targetPath = "public/" + image.getName();
            image.renameTo(new File(targetPath));
        	Photo photo = new Photo(targetPath, title, caption, null);
        	photo.save();
            System.out.println("File saved in " + targetPath);
        } else {
            System.out.println("File not found");
        }  
        toppage();
    }
}
