package models;

import java.io.File;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.adapters.HexBinaryAdapter;

import play.Play;
import play.libs.Files;

public class Avatar {
    
    public File file;
    private final static String location = "public/uploads/avatars/";
    
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
    
    public static Avatar create(File file, Long id) throws NoSuchAlgorithmException {
        //File to = Play.getFile("uploads/avatar/" + file.getName());
    	String location2 = location + id;
    	File dir = new File(location2);
    	if (!dir.exists()) {
    		dir.mkdirs();
    	}
    	
    	String fileName = file.getName();
		String extension = "";

		int i = fileName.lastIndexOf('.');
		if (i > 0) {
		    extension = fileName.substring(i+1);
		}

		MessageDigest md5 = MessageDigest.getInstance("MD5");
		String hex = (new HexBinaryAdapter()).marshal(md5.digest(fileName.getBytes()));
		
    	File to = Play.getFile(location2 + "/" + file.getName());
        Files.copy(file, to);
        
        file.renameTo(new File(location2 + "/" + hex + "." + extension));
        
        User user = User.find("id = ?", id).first();
    	user.set_avatar(location2 + "/" + file.getName());
		user.save();
        return new Avatar(file);
    }
}