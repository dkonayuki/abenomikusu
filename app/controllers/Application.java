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
    
    public static void login_signup() {
    	render();
    }
    
    public static void post_login_info() {
    }
    
    public static void post_signup_info() {}
        
    public static void profile() {
    	render();
    }
    
    public static void editProfile() {
    	System.out.println("送信されました");
    }
    
    public static void toppage() {
    	render();
    }
}
