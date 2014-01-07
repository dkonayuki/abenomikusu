package models;

import play.*;
import play.db.jpa.*;

import javax.persistence.*;

import java.util.*;


public class Comment extends Model{
	//public static int id; //	auto make, auto increment
	public User user;
	public String content;
	public Date date;
	public Photo photo;
	
	public Comment(User user, String content,Photo photo){
		this.user=user;
		this.content=content;
		this.date=new Date();
		this.photo=photo;
	}
}
