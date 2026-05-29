export default {
  "id": 77,
  "name": "Combinations",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/combinations",
  "relativeDir": "C/Combinations",
  "slug": "0077-combinations",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 17,
    "python": 3,
    "javascript": 25
  },
  "languages": {
    "cpp": "// Runtime: 753 ms (Top 12.23%) | Memory: 149.9 MB (Top 18.31%)\r\nclass Solution {\r\npublic:\r\n    void solve(vector<int> arr,vector<vector<int>> &ans,vector<int> &temp,int k,int x){\r\n        if(temp.size()==k){\r\n            ans.push_back(temp);\r\n            return;\r\n        }\r\n        if(x>=arr.size()) return ;\r\n        for(int i = x;i<arr.size();i++){\r\n            temp.push_back(arr[i]);\r\n            solve(arr,ans,temp,k,i+1);\r\n            temp.pop_back();\r\n        }\r\n}\r\n    vector<vector<int>> combine(int n, int k) {\r\n        vector<vector<int>> ans;\r\n        vector<int> temp;\r\n        vector<int> arr;\r\n        for(int i = 1;i<=n;i++) arr.push_back(i);\r\n        solve(arr,ans,temp,k,0);\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def combine(self, n: int, k: int) -> List[List[int]]:\r\n        return itertools.combinations(range(1, n+1), k)",
    "java": "class Solution {\r\n    public List<List<Integer>> combine(int n, int k) {\r\n        List<List<Integer>> subsets=new ArrayList<>();\r\n        generatesubsets(1,n,new ArrayList(),subsets,k);\r\n        return subsets;\r\n    }\r\n    void generatesubsets(int start,int n,List<Integer> current,List<List<Integer>> subsets,int k){\r\n        if(current.size()==k){\r\n            subsets.add(new ArrayList(current));\r\n        }\r\n        for(int i=start;i<=n;i++){\r\n            current.add(i);\r\n            generatesubsets(i+1,n,current,subsets,k);\r\n            current.remove(current.size()-1);\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 164 ms (Top 64.86%) | Memory: 47.8 MB (Top 82.84%)\r\nvar combine = function(n, k) {\r\n\r\n    function helper (start, end, combo, subset, answer) {\r\n        if (combo==0) {\r\n            answer.push([...subset])\r\n            return;\r\n        }\r\n        if (end - start + 1 < combo) {\r\n            return;\r\n        }\r\n        if (start > end) {\r\n            return;\r\n        }\r\n        subset.push(start)\r\n        helper(start+1, end, combo - 1, subset, answer)\r\n\r\n        subset.pop()\r\n        helper(start+1, end, combo, subset, answer)\r\n    }\r\n\r\n    const answer = []\r\n    helper(1, n, k, [], answer)\r\n    return answer\r\n};"
  }
}
