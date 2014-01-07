package models;

import play.*;
import play.db.jpa.*;

import javax.persistence.*;

import java.util.*;


@Entity
public class Photo extends Model{
    //public static int id; //	auto make, auto increment
    public String url;
    public String title;
    public String caption;
    //public List<String> tag;
    public User user;
    //public List<Comment> comments;
    public Date date;
    public HashMap<Long,Integer> rank;//<userid,point>
    
    public double calc_rank(){
    	double sum=0;
    	 Iterator it = rank.keySet().iterator();
         while (it.hasNext()) {
        	 Object o = it.next();
        	 sum+=rank.get(o);
         }
    	return sum/rank.size();
    }
    
    public Photo(String url ,String title ,String caption ,User user){
    	this.url=url;
    	this.title=title;
    	this.caption=caption;
    	//this.tag=new ArrayList<String>();
    	this.user=user;
    	//this.comments=new ArrayList<Comment>();
    	this.date=new Date();
    	this.rank=new HashMap<Long,Integer>();
    }
}
