export default {
  "id": 854,
  "name": "K-Similar Strings",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/k-similar-strings",
  "relativeDir": "K/K-Similar Strings",
  "slug": "0854-k-similar-strings",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 67,
    "python": 22,
    "javascript": 50
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    unordered_map<string,int>m;\r\n    int solve(string &s1,string &s2,int i)\r\n    {\r\n        if(i==s1.length())\r\n            return 0;\r\n        if(m.find(s1)!=m.end())return m[s1];\r\n        if(s1[i]==s2[i])\r\n            return m[s1]=solve(s1,s2,i+1);\r\n        int ans=1e5;\r\n        for(int j=i+1;j<s1.length();j++)\r\n        {\r\n            if(s1[j]==s2[i])\r\n            {\r\n                swap(s1[j],s1[i]);\r\n                ans=min(ans,1+solve(s1,s2,i+1));\r\n                swap(s1[j],s1[i]);\r\n            }\r\n        }\r\n        return m[s1]=ans;\r\n    }\r\n    int kSimilarity(string s1, string s2) {\r\n        return solve(s1,s2,0);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def kSimilarity(self, s1: str, s2: str) -> int:\r\n        n = len(s1)\r\n        \r\n        def helper(i, curr, dp):\r\n            if curr == s2:\r\n                return 0\r\n            \r\n            if curr not in dp[i]:\r\n                if curr[i] == s2[i]:\r\n                    dp[i][curr] = helper(i+1, curr, dp)\r\n                else:\r\n                    temp = sys.maxsize\r\n                    for j in range(i+1, n):\r\n                        if curr[j] == s2[i]:\r\n                            temp = min(temp, 1+helper(i+1, curr[:i]+curr[j]+curr[i+1:j]+curr[i]+curr[j+1:], dp))\r\n\r\n                    dp[i][curr] = temp\r\n            return dp[i][curr]\r\n        \r\n        dp = [{} for _ in range(n)]\r\n        return helper(0, s1, dp)",
    "java": "class Solution {\r\n    public int kSimilarity(String s1, String s2) {\r\n        HashSet<String> vis = new HashSet<>();\r\n        \r\n        ArrayDeque<String> queue = new ArrayDeque<>();\r\n        int level = 0;\r\n        queue.add(s1);\r\n        \r\n        while(queue.size() > 0){\r\n            int size = queue.size();\r\n            for(int i=0;i<size;i++){\r\n                \r\n                String rem = queue.remove();        // remove\r\n                \r\n                if(vis.contains(rem)){              // Mark*\r\n                    continue;\r\n                }\r\n                vis.add(rem);\r\n                \r\n                if(rem.equals(s2)){                 // Work\r\n                    return level;\r\n                }\r\n                \r\n                // Add\r\n                for(String s : getNeighbors(rem,s2)){\r\n                    if(!vis.contains(s)){\r\n                        queue.add(s);\r\n                    }\r\n                }\r\n            }\r\n            level++;\r\n        }\r\n        return -1;\r\n    }\r\n    \r\n    public ArrayList<String> getNeighbors(String rem,String s2){\r\n        ArrayList<String> res = new ArrayList<>();\r\n        \r\n        int idx = -1;\r\n        for(int i=0;i<rem.length();i++){\r\n            if(rem.charAt(i) != s2.charAt(i)){\r\n                idx = i;\r\n                break;\r\n            }\r\n        }\r\n        \r\n        for(int j=idx+1;j<rem.length();j++){\r\n            if(rem.charAt(j) == s2.charAt(idx)){\r\n                String s = swap(rem,idx,j);\r\n                res.add(s);\r\n            }\r\n        }\r\n        \r\n        return res;\r\n    }\r\n    \r\n    public String swap(String str,int i,int j){\r\n        StringBuilder sb = new StringBuilder(str);\r\n        char chi = sb.charAt(i);\r\n        char chj = sb.charAt(j);\r\n        \r\n        sb.setCharAt(i,chj);\r\n        sb.setCharAt(j,chi);\r\n        \r\n        return sb.toString();\r\n    }\r\n}",
    "javascript": "var kSimilarity = function(s1, s2) {\r\n    // abc --> bca\r\n    // swap from 0: a !== b, find next b, swap(0,1) --> bac\r\n    // swap from 1: a !== c, find next c, swap(1,2) --> bca\r\n    return bfs(s1, s2);    \r\n};\r\n\r\nconst bfs = (a,b)=>{\r\n    if(a===b)\r\n        return 0;\r\n    const visited = new Set();\r\n    const queue = [];\r\n    queue.push([a,0,0]); // str, idx, swapCount\r\n    while(queue.length>0)\r\n    {\r\n        let [s, idx, cnt] = queue.shift();\r\n        while(s[idx]===b[idx])\r\n        {\r\n                idx++;\r\n        }\r\n        for(let j = idx+1; j<s.length; j++)\r\n        {\r\n            if(s[j]===b[idx]) {\r\n                s = swap(s, idx, j);\r\n                \r\n                if(s===b) {\r\n                    return cnt+1;\r\n                }\r\n            \r\n                if(!visited.has(s))\r\n                {\r\n                    queue.push([s.slice(), idx, cnt+1]);\r\n                    visited.add(s.slice());\r\n                }\r\n                \r\n                // swap back for later index\r\n                s = swap(s, idx, j);\r\n            }\r\n        }\r\n    }\r\n    return -1;\r\n}\r\n\r\nconst swap = (s, i, j)=>{\r\n  let arr = s.split('');\r\n  let tmp = arr[i];\r\n  arr[i] = arr[j];\r\n  arr[j] = tmp;\r\n  return arr.join('');\r\n}"
  }
}
