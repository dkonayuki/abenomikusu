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
        
    public static void profile(){
    	render();
    }
    
    public static void editProfile(){
    	System.out.println("送信されました");
    }
    public static void toppage() {
    	render();
    }
}
