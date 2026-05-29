export default {
  "id": 753,
  "name": "Cracking the Safe",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/cracking-the-safe",
  "relativeDir": "C/Cracking the Safe",
  "slug": "0753-cracking-the-safe",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 37,
    "python": 20
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int total;\r\n    unordered_set<string> st;\r\n    bool func(int i,int k,int n,string& s){\r\n        if(i==total) return 1;\r\n        \r\n        for(int j=0;j<k;j++){\r\n            s.push_back(j+'0');\r\n            \r\n            if(s.size()>=n){\r\n                string a = s.substr(s.size()-n);\r\n                if(st.find(a)==st.end()){\r\n                    st.insert(a);\r\n                    if(func(i+1,k,n,s)) return 1;\r\n                    st.erase(a);\r\n                }\r\n            }\r\n            else if(func(i,k,n,s)) return 1;\r\n            \r\n            s.pop_back();\r\n        }\r\n        \r\n        return 0;\r\n    }\r\n    string crackSafe(int n, int k) {\r\n        total = pow(k,n);\r\n        string s;\r\n        func(0,k,n,s);\r\n        return s;\r\n    }\r\n};",
    "python": "# Runtime: 121 ms (Top 27.97%) | Memory: 27.9 MB (Top 17.84%)\r\nclass Solution:\r\n    def crackSafe(self, n: int, k: int) -> str:\r\n        seen=set()\r\n        def dfs(s,last_n):\r\n            if len(seen)==(k**n): return s\r\n            if len(last_n)<n: # If len<n,keep adding zeros as and valid string can be returned\r\n                if len(s+\"0\")==n:\r\n                    seen.add(s+\"0\")\r\n                ans=dfs(s+\"0\",last_n+\"0\")\r\n                return ans\r\n            ans=None\r\n            for i in range(k):\r\n                new=last_n[1:]+str(i)\r\n                if new not in seen:\r\n                    seen.add(new)\r\n                    ans=dfs(s+str(i),new)\r\n                    if ans: return ans\r\n                    seen.remove(new)\r\n        return dfs(\"\",\"\")",
    "java": "// Runtime: 91 ms (Top 5.23%) | Memory: 124.1 MB (Top 5.06%)\r\n\r\nclass Solution {\r\n    String ans;\r\n    public String crackSafe(int n, int k) {\r\n        int minLen = (int)Math.pow(k, n) + (n -1);\r\n\r\n        dfs(\"\", n ,k, new HashSet<String>(),minLen);\r\n        return ans;\r\n    }\r\n\r\n    private void dfs(String s, int n, int k, HashSet<String>visited,int minLen){\r\n        if (s.length() == minLen){\r\n            ans = s;\r\n            return;\r\n        }\r\n        if (s.length() > minLen){return;}\r\n\r\n        for (int i = 0; i < k; i++){\r\n            s += String.valueOf(i);\r\n            String lastN = s.substring(Math.max(0,s.length() - n), s.length());\r\n            //If already in hashset, rollback and continue;\r\n            if (visited.contains(lastN)){\r\n                s = s.substring(0, s.length() - 1);\r\n                continue;}\r\n            if(lastN.length() == n){ // only put n length string in hashset\r\n               visited.add(lastN);\r\n            }\r\n\r\n            dfs(s,n,k,visited,minLen);\r\n            if (visited.size() == minLen - n + 1){return;} // if hashset contains all possible combinations just return\r\n            visited.remove(lastN);\r\n            s = s.substring(0, s.length() - 1);\r\n        }\r\n\r\n    }\r\n}"
  }
}
