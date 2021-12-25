import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Stack;

class Solution {
  public static void main(String[] args) {
    //boolean res = isValid("(){}}{");
    //System.out.println(res);

    //[1,2,2,1] [2,2]
    int[] num1 = {1,2,2,1};
    int[] num2 = {2,2};
    int[] res = intersection(num1, num2);
    System.out.println(res);

    // Map<Integer, Boolean> map = new HashMap<>();
    // boolean res = map.get(23);
    // System.out.println(res);

  }

  public static int[] intersection(int[] nums1, int[] nums2) {
    Map<Integer, Boolean> map = new HashMap<>();

    for(int n: nums1) {
        map.put(n, true);
    }

    List<Integer> res = new ArrayList<>();
    for(int n: nums2) {
        if(map.containsKey(n)) {
            res.add(n);
            map.remove(n);
        }
    }

    return res.stream().mapToInt(Integer::intValue).toArray();
}

  public int[] intersection1(int[] nums1, int[] nums2) {
    Set<Integer> set1 = new HashSet<>(), set2 = new HashSet<>();
    for(int i: nums1){
        set1.add(i);
    }

    for(int i: nums2) {
        if(set1.contains(i)){
            set2.add(i);
        }
    }

    return set2.stream().mapToInt(i -> i).toArray();
}
  
  public static boolean isValid(String s) {
      if(s.length() % 2 == 1) return false;

      Stack<Character> stack = new Stack<>();
      for(int i = 0; i < s.length(); i++){
          char c = s.charAt(i);
          if(c == '(' || c =='[' || c == '{') {
              stack.push(c);
          }else if (!stack.isEmpty()) {
              char t = stack.peek();
              if(
                  (t == '(' && c == ')') ||
                  (t == '[' && c == ']') ||
                  (t == '{' && c == '}')
              ){
                  stack.pop();
              }else{
                  return false;
              }
          }else {
              return false;
          }
      } 
      return stack.isEmpty();
  }
}