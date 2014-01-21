package models;

import play.*;
import play.db.jpa.*;

import javax.persistence.*;

import java.util.*;

@Entity
public class Tag extends Model{
	//public static int id; //	auto make, auto increment
	private String name;
	
    public String get_name(){return this.name;}
    
	
	public Tag(String name){
		this.name = name;
	}
}
