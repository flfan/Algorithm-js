import java.util.ArrayList;
import java.util.List;

public class Test3 {
  public static void main(String[] args) {
    //2147483647
    int[] nums = {1,2,3};
    Solution sol = new Test3().new Solution();
    sol.permute(nums);
  }

  class Solution {
    List<List<Integer>> res = new ArrayList<>();
    int[] nums;
    public List<List<Integer>> permute(int[] nums) {
        this.nums = nums;
        backtrack(new ArrayList<>());
        return res;
    }

    public void backtrack(List<Integer> path) {
        if(path.size() == nums.length) {
            res.add(new ArrayList<>(path));
            return;
        }

        for(int n: nums) {
            if(path.contains(n)) continue;
            List<Integer> path2 = new ArrayList<>(path);
            path2.add(n);
            backtrack(path2);
            System.out.println(path2.toString());
        }

    }
  }
}
