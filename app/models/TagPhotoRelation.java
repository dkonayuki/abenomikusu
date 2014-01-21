package models;

import play.*;
import play.db.jpa.*;

import javax.persistence.*;

import java.util.*;

@Entity
public class TagPhotoRelation extends Model{
	//public static int id; //	auto make, auto increment
	private long tagId;
	private long photoId;
	
	public long get_photoId(){ return this.photoId;}
	public long get_tagId(){ return this.tagId;}
	
	public TagPhotoRelation(Tag tag, Photo photo){
		this.tagId = tag.id;
		this.photoId = photo.id;
	}
}