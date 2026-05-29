export default {
  "id": 216,
  "name": "Combination Sum III",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/combination-sum-iii",
  "relativeDir": "C/Combination Sum III",
  "slug": "0216-combination-sum-iii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 36,
    "python": 28,
    "javascript": 27
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<vector<int>> ans;\r\n    //declare temp global vector in this vector we will store temprary combinations\r\n    vector<int> temp;\r\n    void solve(int k,int n,int order){\r\n        //check if our target became zero and combination size became zero then push temp vector inside the ans it means this temp vector combination having sum is equal to target and size of vector is equal to k\r\n        if(n==0 && k==0){\r\n            ans.push_back(temp);\r\n            return;\r\n        }\r\n        //check if our target is less than zero then return \r\n        if(n<0) return;\r\n         // take for loop and check for all posibility ahead of order\r\n        for(int i=order;i<=9;i++){\r\n            //push current index value\r\n            temp.push_back(i);\r\n            // call solve function for further posiblity\r\n            solve(k-1,n-i,i+1);\r\n            //Pop last push value \r\n            temp.pop_back();\r\n        }\r\n    }\r\n    vector<vector<int>> combinationSum3(int k, int n) {\r\n        solve(k,n,1);\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    \r\n    def solve(self,k,target,ans,temp,idx,nums):\r\n        \r\n        if idx==len(nums):\r\n            if target==0 and k==0:\r\n                ans.append(list(temp))\r\n            return\r\n        \r\n        if nums[idx]<=target:\r\n            \r\n            temp.append(nums[idx])\r\n            self.solve(k-1,target-nums[idx],ans,temp,idx+1,nums)\r\n            temp.pop()\r\n        \r\n        self.solve(k,target,ans,temp,idx+1,nums)\r\n        \r\n\r\n    \r\n    def combinationSum3(self, k: int, n: int) -> List[List[int]]:\r\n        \r\n        ans = []\r\n        temp = []\r\n        idx = 0\r\n        nums = list(range(1,10))\r\n        \r\n        self.solve(k,n,ans,temp,idx,nums)\r\n        return ans",
    "java": "// Runtime: 1 ms (Top 86.54%) | Memory: 41.2 MB (Top 80.80%)\r\n\r\n//Recursion\r\n\r\nclass Solution {\r\n    public List<List<Integer>> combinationSum3(int k, int n) {\r\n        List<List<Integer>> ans = new ArrayList<List<Integer>>();\r\n        //int[] arr = new int{1,2,3,4,5,6,7,8,9};\r\n        List<Integer> ds = new ArrayList<>();\r\n        helper(1, n, k, ds, ans);\r\n        return ans;\r\n    }\r\n    private static void helper(int i, int tar, int k, List<Integer> ds, List<List<Integer>> ans){\r\n        //base\r\n        if(k == 0) {\r\n            if(tar == 0){\r\n                ans.add(new ArrayList<>(ds));\r\n            }\r\n            return;\r\n        }\r\n        if(tar == 0) return; //bcz if k is not zero and tar is zero then no possible valid combination\r\n        if(i > tar) return;\r\n        if(i > 9) return;\r\n\r\n        //Take\r\n        if(i <= tar) {\r\n            ds.add(i);\r\n            helper(i+1, tar - i, k-1 , ds, ans);\r\n            ds.remove(ds.size()-1);\r\n        }\r\n        // Not take\r\n        helper(i+1 , tar, k , ds, ans);\r\n\r\n        return;\r\n    }\r\n}",
    "javascript": "// Runtime: 93 ms (Top 42.36%) | Memory: 42 MB (Top 77.09%)\r\n/**\r\n * @param {number} k\r\n * @param {number} n\r\n * @return {number[][]}\r\n */\r\nvar combinationSum3 = function(k, n) {\r\n    const ans = [];\r\n    const st = [];\r\n\r\n    function dfs(start, t) {\r\n        if (t === 0 && st.length === k) {\r\n            ans.push(Array.from(st));\r\n            return;\r\n        }\r\n        for (let i = start; i <= 9 && st.length < k; i++) {\r\n            if (i > t) break;\r\n            st.push(i);\r\n            dfs(i + 1, t - i);\r\n            st.pop();\r\n        }\r\n    }\r\n\r\n    dfs(1, n);\r\n\r\n    return ans;\r\n};"
  }
}
