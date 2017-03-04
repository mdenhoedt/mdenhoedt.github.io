package movies.mdenhoedt;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;

public class JSONConnection {
    private URL url;

    public JSONConnection(String adress) throws MalformedURLException {
        url = new URL(adress);
    }

    public JSONObject download() throws IOException, JSONException {
        URLConnection conn = url.openConnection();
        conn.setConnectTimeout(1000);
        InputStream input = conn.getInputStream();
        BufferedReader reader = new BufferedReader(new InputStreamReader(input));
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            sb.append(line);
        }
        input.close();
        return new JSONObject(sb.toString());
    }
}
