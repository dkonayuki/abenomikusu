package controllers;

import play.*;
import play.mvc.*;
import sun.misc.BASE64Encoder;

import models.*;

import javax.persistence.*;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.*;


public class Application extends Controller {

    public static void index() {
    	session.clear();
        render();
    }
    
    public static void login_signup(){render();}
    
    public static void post_login_info(){}
    
    public static void post_signup_info() throws NoSuchAlgorithmException{
    	// 標準出力に入力されたパラメータの名前を出力
        System.out.println(params.all().keySet());
        String name =params.get("name");
        String pass =params.get("pass");
        
        //TODO　名前かぶってないか確認
        
        
    	// アンケートデータをデータベースに書き込む
        User user = new User(name, pass);
        user.save();
        
        // 埋め込むべき変数をテンプレートに渡す．
        // テンプレートからはキー名で参照できる．
        // テンプレートからは，${entry.id} として該当データで自動生成された
        // ID番号を取得している． 
        renderArgs.put("user", user);
        
     // Map に結果を蓄え，JSON として出力
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("result", "OK");
        renderJSON(map);
    }
    
    public static void profile(){
    	render();
    }
    
    public static void editProfile(){
    	System.out.println("送信されました");
    }
    public static void toppage() {
    	render();
    }
}
