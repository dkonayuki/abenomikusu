package models;

import play.*;
import play.db.jpa.*;

import javax.persistence.*;
import java.util.*;

@Entity
public class User extends Model{
    //public static int id; //	auto make, auto increment
    public String pass;//digested
    public String username;
    public String profile;
    public String avatar;//URL
    public String cover;//URL
    //public List<User> folower;
    //public List<Photo> photos;
    
    public User(String username, String pass) {
    	this.username=username;
    	this.pass=pass;
    	this.profile="よろしくお願いします。";
    	this.avatar="";//default icon URL
    	this.cover="";//default cover URL
    	//this.folower=new ArrayList<User>();
    	//this.photos=new ArrayList<Photo>();
    }
}
