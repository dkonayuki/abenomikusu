package controllers;

import java.io.File;

import models.User;
import play.mvc.Controller;
import play.mvc.Http;


public class Application extends Controller {

    public static void index() {
        render();
    }
    
    public static void login_signup(){render();}
    
    public static void post_login_info(){
    }
    
    public static void post_signup_info(){}
        
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
    	user.username = username;
    	user.profile = profile;
    	user.save();
    	
    	System.out.println("\n\n");
    	//System.out.println(params.get("uploadAvatar"));
    	System.out.println("\n\n");
    	
    	profile();
    	
    }
    public static void toppage() {
    	render();
    }
}
