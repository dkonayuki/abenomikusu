package models;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import play.Play;
import play.libs.Files;

public class Avatar {
    
    public File file;
    private final static String location = "/public/uploads/avatars/";
    
    public Avatar(File file) {
        this.file = file;
    }

    public String getName() {
        return file.getName();
    }
    
    public Long getSize() {
        return file.length();
    }
    
    public static List<Avatar> findAll() {
        List<Avatar> all = new ArrayList<Avatar>();
        for (File file : Play.getFile(location).listFiles()) {
            all.add(new Avatar(file));
        }
        return all;
    }
    
    public static Avatar findByName(String name) {
    	return new Avatar(Play.getFile(name));
        //return new Avatar(Play.getFile("uploads/avatar/" + name));
    }
    
    public static Avatar create(File file, Long id) {
        //File to = Play.getFile("uploads/avatar/" + file.getName());
    	File to = Play.getFile(location + id + ".png");
        Files.copy(file, to);
        User user = User.find("id = ?", id).first();
    	user.set_avatar(location + id + ".png");
		user.save();
        return new Avatar(to);
    }
}