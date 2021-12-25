import java.util.HashMap;
import java.util.Map;

public class Test2 {

  public static void main(String[] args) {
    Map<Integer, Map<String, Integer>> graph = new HashMap<>();
        Map<String, Integer> map = new HashMap<>();
        map.put("blank", 0);
        map.put("sign", 1);
        map.put(".", 2);
        map.put("digit", 6);
        graph.put(0, map);

        map = new HashMap<>();
        map.put("digit", 6);
        map.put(".", 2);
        graph.put(1, map);

        map = new HashMap<>();
        map.put("digit", 3);
        graph.put(2, map);

        map = new HashMap<>();
        map.put("digit", 3);
        map.put("e", 4);
        graph.put(3, map);

        map = new HashMap<>();
        map.put("sign", 7);
        map.put("digit", 5);
        graph.put(4, map);

        map = new HashMap<>();
        map.put("digit", 5);
        graph.put(5, map);

        map = new HashMap<>();
        map.put("e", 4);
        map.put(".", 3);
        map.put("digit", 6);
        graph.put(6, map);

        map = new HashMap<>();
        map.put("digit", 5);
        graph.put(7, map);

        int state = 0;
        state = graph.get(1).get("digit");
        System.out.println(state);

  }
  
}
