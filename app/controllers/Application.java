package controllers;

import play.*;
import play.mvc.*;
import models.*;

import javax.persistence.*;

import org.apache.commons.io.FileUtils;

import java.io.File;
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
    
    public static void upload(String title, String tags, File photo) {
        if (photo != null) {
            String targetPath = "public/" + photo.getName();
            photo.renameTo(new File(targetPath));
            //FileUtils.moveFile(photo, new File("public/images/products", photo.getName()));
            System.out.println("File saved in " + targetPath);
        } else {
            System.out.println("File not found");
        }  
        toppage();
    }
}
