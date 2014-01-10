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
    
    public static void postEditProfile(File file){
    	Long id = Long.parseLong(session.get("id"));
    	User user = User.find("id = ?", id).first();
    	String username = params.get("username");
    	String profile  = params.get("profile");
    	user.set_username(username);
    	user.set_profile(profile);
    	user.save();
    	
    	System.out.println("\n\n");
    	//System.out.println(params.get("uploadAvatar"));
    	System.out.println("\n\n");
    	
    	profile();
    }    	

    public static void avatars(){
    	//List<UploadPhoto> uploadphotos = Photo.findAll();
        //render(UploadPhotos);
    }
    
    public static void editProfile() {
    	System.out.println("送信されました");
    }
    
    public static void toppage() {
    	render();
    }
    
    public static void home() {
    	render();
    	
    }
    
    public static void upload(String title, String tags, File image) {
        if (image != null) {
            String targetPath = "public/" + image.getName();
            image.renameTo(new File(targetPath));
        	Photo photo = new Photo(targetPath, "", title, null);
        	//photo.save();
            System.out.println("File saved in " + targetPath);
        } else {
            System.out.println("File not found");
        }  
        toppage();
    }
}
