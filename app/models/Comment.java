package models;

import play.*;
import play.db.jpa.*;

import javax.persistence.*;

import java.util.*;


public class Comment extends Model{
	//public static int id; //	auto make, auto increment
	private User user;
	private String content;
	private Date date;
	private Photo photo;

    public void set_user(User user){this.user=user;}
    public User get_user(){return this.user;}
    
    public void set_content(String content){this.content=content;}
    public String get_content(){return this.content;}
    
    public void set_date(Date date){this.date=date;}
    public Date get_date(){return this.date;}
    
    public void set_photo(Photo photo){this.photo=photo;}
    public Photo get_photo(){return this.photo;}
	
	public Comment(User user, String content,Photo photo){
		this.user=user;
		this.content=content;
		this.date=new Date();
		this.photo=photo;
	}
}
