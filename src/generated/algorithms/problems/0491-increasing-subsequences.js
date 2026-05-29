export default {
  "id": 491,
  "name": "Increasing Subsequences",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/increasing-subsequences",
  "relativeDir": "I/Increasing Subsequences",
  "slug": "0491-increasing-subsequences",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 30,
    "python": 15,
    "javascript": 20
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    set<vector<int>>ans;\r\n    void solve(int start, int n, vector<int>&nums, vector<int>&result){\r\n        if(result.size()>1)ans.insert(result);\r\n        if(start==n){\r\n            return;\r\n        }\r\n        for(int i=start; i<n; i++){\r\n            if(result.empty() || result.back()<=nums[i]){\r\n                result.push_back(nums[i]);\r\n                solve(i+1, n, nums, result);\r\n                result.pop_back();\r\n            }\r\n        }\r\n        \r\n    }\r\n    vector<vector<int>> findSubsequences(vector<int>& nums) {\r\n        int n = nums.size();\r\n        vector<int>result;\r\n        solve(0, n, nums, result);\r\n        return vector<vector<int>>(ans.begin(), ans.end());\r\n    }\r\n};",
    "python": "# Runtime: 750 ms (Top 10.08%) | Memory: 22.4 MB (Top 30.72%)\r\nclass Solution:\r\n    def findSubsequences(self, nums: List[int]) -> List[List[int]]:\r\n        def backtracking(nums,path):\r\n           # to ensure that the base array has at least 2 elements\r\n            if len(path)>=2:\r\n                res.add(tuple(path))\r\n            for i in range(len(nums)):\r\n                # to ensure that every element to be added is equal or larger than the former\r\n                if not path or path[-1] <= nums[i]:\r\n                    backtracking(nums[i+1:],path+[nums[i]])\r\n\r\n        res=set()\r\n        backtracking(nums,[])\r\n        return res",
    "java": "// Runtime: 48 ms (Top 13.29%) | Memory: 68.6 MB (Top 66.07%)\r\nclass Solution {\r\n    HashSet<List<Integer>> set;\r\n    public List<List<Integer>> findSubsequences(int[] nums) {\r\n        set=new HashSet<>();\r\n\r\n        dfs(nums,0,new ArrayList<>());\r\n\r\n        List<List<Integer>> ans=new ArrayList<>();\r\n        if(set.size()>0){\r\n            ans.addAll(set);\r\n        }\r\n        return ans;\r\n    }\r\n\r\n    private void dfs(int nums[], int start, List<Integer> temp){\r\n        if(start==nums.length) return;\r\n\r\n        for(int i=start;i<nums.length;i++){\r\n            if(temp.size()==0 || temp.get(temp.size()-1)<=nums[i]){\r\n                temp.add(nums[i]);\r\n\r\n                if(temp.size()>=2) set.add(new ArrayList<>(temp));\r\n\r\n                dfs(nums,i+1,temp);\r\n                temp.remove(temp.size()-1);\r\n            }\r\n        }\r\n    }\r\n}",
    "javascript": "var findSubsequences = function(nums) {\r\n    \r\n    const result = [];\r\n    const set = new Set();\r\n    \r\n    function bt(index=0,ar=[]){\r\n        if(!set.has(ar.join(\"_\")) && ar.length >=2){\r\n            set.add(ar.join(\"_\"));\r\n            result.push(ar);\r\n        }\r\n        for(let i =index; i<nums.length; i++){\r\n            if(nums[i] >= ar[ar.length-1] || ar.length===0){\r\n                bt(i+1, [...ar, nums[i]]);\r\n            }\r\n        }\r\n    }\r\n    \r\n    bt();\r\n    return result;\r\n};"
  }
}
