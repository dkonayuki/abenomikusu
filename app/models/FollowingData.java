package models;

import javax.persistence.*;

import play.db.jpa.Model;


@Entity
public class FollowingData extends Model{
	@ManyToOne
	private User follower;
	
	@ManyToOne
	private User followee;

	public FollowingData(User follower, User followee) {
		this.follower = follower;
		this.followee = followee;
	}
	
	public User getFollower() {
		return this.follower;
	}

	public User getFollowee() {
		return this.followee;
	}
}
