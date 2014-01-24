package models;

import javax.persistence.*;

import play.db.jpa.Model;


@Entity
public class FollowerData extends Model{
	@ManyToOne
	private User user;

	public FollowerData(User follower) {
		this.user = follower;
	}
	
	public User getUser() {
		return this.user;
	}
}
