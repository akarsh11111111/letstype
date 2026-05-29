export default {
  "id": 2145,
  "name": "Count the Hidden Sequences",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-the-hidden-sequences",
  "relativeDir": "C/Count the Hidden Sequences",
  "slug": "2145-count-the-hidden-sequences",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 31,
    "python": 6,
    "javascript": 20
  },
  "languages": {
    "cpp": "// Runtime: 130 ms (Top 78.41%) | Memory: 107.10 MB (Top 22.73%)\r\n\r\nclass Solution {\r\npublic:\r\n    int numberOfArrays(vector<int>& d, int l, int u) {\r\n        \r\n        long long int n = d.size();\r\n        long long int pr =0;\r\n        long long int mini =0;\r\n        long long int maxi =0;\r\n        for(long long int i=0;i<n;i++)\r\n        {\r\n            pr+=d[i];\r\n            maxi=max(maxi,pr);\r\n            mini=min(mini,pr);\r\n        }\r\n        \r\n\r\n        long long int range = maxi-mini;\r\n        long long int cnt=0;\r\n        if(u-l<range)\r\n            return 0;\r\n        cnt = u-(l+range);\r\n        return cnt+1;\r\n        \r\n    }\r\n};",
    "python": "class Solution:\r\n    def numberOfArrays(self, differences: List[int], lower: int, upper: int) -> int:\r\n        l = [0]\r\n        for i in differences:\r\n            l.append(l[-1]+i)\r\n        return max(0,(upper-lower+1)-(max(l)-min(l)))",
    "java": "class Solution {\r\n    public int numberOfArrays(int[] differences, int lower, int upper) {\r\n        ArrayList<Integer> ans = new ArrayList<>();\r\n        ans.add(lower); \r\n        int mn = lower;\r\n        int mx = lower;\r\n        \r\n        for (int i = 0; i < differences.length; i++) {\r\n            int d = differences[i];\r\n            ans.add(d + ans.get(ans.size() - 1));\r\n            mn = Math.min(mn, ans.get(ans.size() - 1));\r\n            mx = Math.max(mx, ans.get(ans.size() - 1));\r\n        }\r\n\r\n        int add = lower - mn;\r\n        \r\n        for (int i = 0; i < ans.size(); i++) {\r\n            ans.set(i, ans.get(i) + add);\r\n        }\r\n        \r\n        for (int i = 0; i < ans.size(); i++) {\r\n            if (ans.get(i) < lower ||  upper < ans.get(i)) {\r\n                return 0;\r\n            }\r\n        }\r\n        \r\n        int add2 = upper - mx;\r\n        \r\n        return add2 - add + 1;\r\n    }\r\n}",
    "javascript": "// Runtime: 212 ms (Top 12.50%) | Memory: 69.6 MB (Top 12.50%)\r\nvar numberOfArrays = function(differences, lower, upper) {\r\n    let temp = 0;\r\n    let res = 0;\r\n    let n = lower;\r\n\r\n    for (let i = 0; i < differences.length; i++) {\r\n        temp += differences[i];\r\n        differences[i] = temp;\r\n    }\r\n\r\n    const min = Math.min(...differences);\r\n    const max = Math.max(...differences);\r\n\r\n    while (n <= upper) {\r\n        if (n + min >= lower && n + max <= upper) res++;\r\n        n++;\r\n    }\r\n    return res;\r\n};"
  }
}
