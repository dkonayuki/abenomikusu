package models;

import play.*;
import play.db.jpa.*;

import javax.persistence.*;

import java.util.*;

@Entity
public class TagPhotoRelation extends Model{
	//public static int id; //	auto make, auto increment
	long tagId;
	long photoId;
	
	public TagPhotoRelation(Tag tag, Photo photo){
		this.tagId = tag.id;
		this.photoId = photo.id;
	}
}