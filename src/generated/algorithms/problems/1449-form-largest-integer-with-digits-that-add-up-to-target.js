export default {
  "id": 1449,
  "name": "Form Largest Integer With Digits That Add up to Target",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target",
  "relativeDir": "F/Form Largest Integer With Digits That Add up to Target",
  "slug": "1449-form-largest-integer-with-digits-that-add-up-to-target",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 48,
    "python": 13,
    "javascript": 14
  },
  "languages": {
    "cpp": "\r\nclass Solution {\r\npublic:\r\n    vector<vector<string>> dp ;\r\n    string largestNumber(vector<int>& cost, int target) {\r\n        dp.resize(10,vector<string>(target+1,\"-1\"));\r\n        return solve(cost,0,target) ;\r\n    }\r\n    \r\n    string solve(vector<int>& cost,int idx,int target){\r\n        if(!target) return \"\";\r\n        if(target < 0 || idx >= size(cost)) return \"0\"; \r\n        \r\n        if(dp[idx][target]!=\"-1\") return dp[idx][target];\r\n        \r\n        string a = to_string(idx+1) + solve(cost,0,target-cost[idx]);\r\n        string b = solve(cost,idx+1,target);\r\n        \r\n        return dp[idx][target] = a.back() == '0' ? b : b.back() == '0' ? a : size(a) == size(b) ? max(a,b) : size(a) > size(b) ? a : b ;\r\n    }\r\n};",
    "python": "from functools import lru_cache\r\nclass Solution:\r\n    def largestNumber(self, cost: List[int], target: int) -> str:\r\n        @lru_cache(None)\r\n        def dfs(t):\r\n            if t == 0: return 0\r\n            res = float('-inf')\r\n            for digit in range(1,10):\r\n                if t - cost[digit-1] >= 0:\r\n                    res = max(res, dfs(t - cost[digit-1])*10+digit)\r\n            return res\r\n        res = dfs(target)\r\n        return \"0\" if res == float('-inf') else str(res)",
    "java": "// Space Complexity = O(N*M) (N == length of cost array and M == target )\r\n// Time Complexity = O(N*M)\r\n\r\nclass Solution {\r\n    Map<String,String> map =  new HashMap<>();\r\n    String[][] memo;\r\n    public String largestNumber(int[] cost, int target) {\r\n        memo = new String[cost.length+1][target+1];\r\n        \r\n        for( int i = 0;i<=cost.length;i++ ){\r\n            for(int j = 0;j<=target;j++) memo[i][j] = \"0\";\r\n        }\r\n        \r\n        String res = helper(cost,cost.length-1,target);\r\n        \r\n        return res == \"-1\" ? \"0\" : res; \r\n        \r\n    }\r\n    \r\n    public String helper( int[] cost , int index , int target){\r\n        if(target == 0) {\r\n            return \"\";\r\n        }\r\n        \r\n        if(target < 0) return \"-1\";\r\n        \r\n        if(index < 0) return \"-1\";\r\n        \r\n        if( memo[index][target] != \"0\") return memo[index][target];\r\n        \r\n        String str1 = (index+1) + helper(cost,cost.length-1,target-cost[index]) ;\r\n        String str2 = helper(cost,index-1,target);\r\n        \r\n        String res = getBigger(str1,str2);\r\n        \r\n        memo[index][target] =  res;\r\n        \r\n        return res;\r\n    }\r\n    \r\n    public String getBigger(String num1 , String num2){\r\n        if( num1.contains(\"-1\") ) return num2;\r\n        if( num2.contains(\"-1\") ) return num1;\r\n        if( num1.length() > num2.length() ) return num1;\r\n        if( num2.length() > num1.length() ) return num2;\r\n        return Double.parseDouble( num1 ) < Double.parseDouble( num2 ) ? num2 : num1;\r\n    }\r\n}",
    "javascript": "var largestNumber = function(cost, target) {\r\n    const arr = new Array(target+1).fill('#');\r\n    arr[0] = '';\r\n    \r\n    for (let i = 0; i < 9; i++) {\r\n        for (let j = cost[i]; j <= target; j++) {\r\n            if (arr[j-cost[i]] !== '#' && arr[j-cost[i]].length + 1 >= arr[j].length) {\r\n                arr[j] = (i+1).toString().concat(arr[j-cost[i]]);\r\n            }\r\n        }\r\n    }\r\n    \r\n    return arr[target] == '#' ? '0' : arr[target];\r\n};"
  }
}
