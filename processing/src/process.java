import java.io.*;
import java.io.BufferedReader;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import java.io.InputStreamReader;
import java.io.FileInputStream;
import org.json.simple.parser.ParseException;

public class process
{
	public static void main(String[] args)
	{
		JSONParser parser = new JSONParser();
		File folder = new File("input");
		File[] listOfFiles = folder.listFiles();
		
		for (File jsonFile : listOfFiles)
		{
			if (jsonFile.isFile())
			{
				String fileName = jsonFile.getName();
				String[] extension = fileName.split("\\.");
				if(!extension[extension.length-1].equals("json"))
				{
					System.out.println("not Json");
					continue;
				}
				JSONObject jsonObject = null;
				
				try
				{
					InputStreamReader temp = new InputStreamReader(new FileInputStream(jsonFile),"UTF-8");
					temp.skip(1);
					jsonObject =  (JSONObject) parser.parse(temp);
					System.out.println(jsonObject);
				}
				catch (IOException e)
				{
					e.printStackTrace();
				} catch (ParseException e)
				{
					e.printStackTrace();
				}
				
				
				String[] parts = fileName.split("-");
				String documentCode = parts[0];
				
				//Can be dealt with prettier when looking at the JSON code...
				int point;
				boolean isPoint = true;
				try
				{
					point = Integer.parseInt(parts[1]);
					if(point > 100)
						isPoint = false;
				}
				catch (NumberFormatException e)
				{
					isPoint = false;
				}
				
				/*try
				{
					Object obj = parser.parse(new FileReader(jsonFile));
					jsonObject = (JSONObject) obj;
				} catch (IOException e)
				{
					e.printStackTrace();
				} catch (ParseException e)
				{
					e.printStackTrace();
				}
				System.out.println(jsonObject);*/
				return;
			}
		}
	}
}