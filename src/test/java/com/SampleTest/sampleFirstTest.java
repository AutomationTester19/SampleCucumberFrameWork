package com.SampleTest;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class sampleFirstTest {

	public static void main(String[] args) {
		
		String filePath = System.getProperty("user.dir");
		System.out.println(filePath);
		JSONParser json = new JSONParser();
		FileReader read = null ;
		Object obj = null;
		try {
			read = new FileReader(filePath+"\\Resources\\testData\\empDetails.json");
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}

		try {
			obj = json.parse(read);
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		Map<String,String> map = new HashMap<String,String>();
		
	}

}
