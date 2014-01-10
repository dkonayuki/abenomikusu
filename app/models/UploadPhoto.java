package models;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import play.Play;
import play.libs.Files;

public class UploadPhoto {
    
    public File file;
    
    public UploadPhoto(File file) {
        this.file = file;
    }

    public String getName() {
        return file.getName();
    }
    
    public Long getSize() {
        return file.length();
    }

    public static List<UploadPhoto> findAll() {
        List<UploadPhoto> all = new ArrayList<UploadPhoto>();
        for (File file : Play.getFile("uploads/avatar/").listFiles()) {
            all.add(new UploadPhoto(file));
        }
        return all;
    }
    
    public static UploadPhoto findByName(String name) {
        return new UploadPhoto(Play.getFile("uploads/avatar/" + name));
    }
    
    public static UploadPhoto create(File file) {
        File to = Play.getFile("uploads/avatar/" + file.getName());
        Files.copy(file, to);
        return new UploadPhoto(to);
    }
}