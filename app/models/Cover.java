package models;

import java.io.File;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.adapters.HexBinaryAdapter;

import play.Play;
import play.libs.Files;

public class Cover {
    
    public File file;
    private final static String location = "public/uploads/covers/";
    
    public Cover(File file) {
        this.file = file;
    }

    public String getName() {
        return file.getName();
    }
    
    
    
    public static Cover create(File file, Long id) throws NoSuchAlgorithmException {
    	String location2 = location + id;
    	File dir = new File(location2);
    	if(!dir.exists()){
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
		
        
        file.renameTo(new File(location2 + "/" + hex + "." + extension));
        
        User user = User.find("id = ?", id).first();
    	user.set_cover(location2 + "/" + hex + "." + extension);
		user.save();
        return new Cover(file);
    }
}