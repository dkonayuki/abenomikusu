package controllers;

import play.*;
import play.mvc.*;

import models.*;

import javax.persistence.*;
import java.util.*;


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
    
    public static void postEditProfile(){
    	Long id = Long.parseLong(session.get("id"));
    	User user = User.find("id = ?", id).first();
    	String username = params.get("username");
    	String profile  = params.get("profile");
    	System.out.println("\n\n");
    	System.out.println(profile);
    	System.out.println(params);
    	//System.out.println(params.get("avatarInput"));
    	System.out.println("\n\n");
    	user.username = username;
    	user.profile = profile;
    	user.save();
    	profile();
    }
    public static void toppage() {
    	render();
    }
}
