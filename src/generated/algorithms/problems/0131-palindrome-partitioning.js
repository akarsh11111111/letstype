export default {
  "id": 131,
  "name": "Palindrome Partitioning",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/palindrome-partitioning",
  "relativeDir": "P/Palindrome Partitioning",
  "slug": "0131-palindrome-partitioning",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 33,
    "python": 49,
    "javascript": 26
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool check(string k)\r\n    {\r\n        string l=k;\r\n        reverse(l.begin(),l.end());\r\n        if(k==l)return true;\r\n        return false;\r\n    }\r\n    void solve(string &s,vector<vector<string>>&ans,\r\n               vector<string>temp,int pos)\r\n    {\r\n        if(pos>=s.size()){ans.push_back(temp); return;}\r\n        string m;\r\n        for(int i=pos;i<s.size();i++)\r\n        {\r\n            m+=s[i];\r\n            if(check(m))\r\n            {temp.push_back(m);\r\n            solve(s,ans,temp,i+1);\r\n            temp.pop_back();}\r\n        }\r\n    }\r\n    vector<vector<string>> partition(string s) {\r\n        vector<vector<string>>ans;\r\n        vector<string>temp;\r\n        solve(s,ans,temp,0);\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 1302 ms (Top 13.95%) | Memory: 35.7 MB (Top 6.05%)\r\n\"\"\"\r\nwe can approach this problem using manacher's algorithm with backtracking and recursion\r\n\"\"\"\r\nclass Solution:\r\n    def partition(self, s: str) -> List[List[str]]:\r\n        lookup = {\"\": [[]]}\r\n        def lps(s):\r\n            if s in lookup:\r\n                return lookup[s]\r\n\r\n            final_res = []\r\n            result_set = set()\r\n            for k in range(len(s)):\r\n                i, j = k, k\r\n\r\n                # check for odd length palindromes\r\n                while i>= 0 and j < len(s) and s[i] == s[j]:\r\n                    # palindrome found\r\n                    res = []\r\n                    for partition in lps(s[:i]):\r\n                        res.append(partition + [s[i:j+1]])\r\n                    for partition in res:\r\n                        for part in lps(s[j+1:]):\r\n                            temp = partition + part\r\n                            if tuple(temp) not in result_set:\r\n                                result_set.add(tuple(temp))\r\n                                final_res.append(temp)\r\n                    i-=1\r\n                    j+=1\r\n\r\n                # check for even length palindromes\r\n                i, j = k, k+1\r\n                while i >= 0 and j < len(s) and s[i] == s[j]:\r\n                    # palindrome found\r\n                    res = []\r\n                    for partition in lps(s[:i]):\r\n                        res.append(partition + [s[i:j+1]])\r\n                    for partition in res:\r\n                        for part in lps(s[j+1:]):\r\n                            temp = partition + part\r\n                            if tuple(temp) not in result_set:\r\n                                result_set.add(tuple(temp))\r\n                                final_res.append(temp)\r\n                    i-=1\r\n                    j+=1\r\n            lookup[s] = final_res\r\n            return final_res\r\n        return lps(s)",
    "java": "// Runtime: 26 ms (Top 25.04%) | Memory: 136.1 MB (Top 72.32%)\r\n// Plaindrome Partitioning\r\n// Leetcode : https://leetcode.com/problems/palindrome-partitioning/\r\n\r\nclass Solution {\r\n    public List<List<String>> partition(String s) {\r\n        List<List<String>> result = new ArrayList<>();\r\n        if(s == null || s.length() == 0)\r\n            return result;\r\n        helper(s, 0, new ArrayList<String>(), result);\r\n        return result;\r\n    }\r\n    private void helper(String s, int start, List<String> list, List<List<String>> result){\r\n        if(start == s.length()){\r\n            result.add(new ArrayList<>(list));\r\n            return;\r\n        }\r\n        for(int i = start; i < s.length(); i++){\r\n            if(isPalindrome(s, start, i)){\r\n                list.add(s.substring(start, i+1));\r\n                helper(s, i+1, list, result);\r\n                list.remove(list.size()-1);\r\n            }\r\n        }\r\n    }\r\n    private boolean isPalindrome(String s, int start, int end){\r\n        while(start < end){\r\n            if(s.charAt(start++) != s.charAt(end--))\r\n                return false;\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 615 ms (Top 6.03%) | Memory: 86.7 MB (Top 24.65%)\r\nvar partition = function(s) {\r\n    let result = []\r\n    backtrack(0, [], s, result)\r\n    return result\r\n};\r\n\r\nfunction backtrack(i, partition, s, result){\r\n    if(i === s.length){\r\n        result.push([...partition])\r\n        return\r\n    }\r\n\r\n    for(let j=i;j<s.length;j++){\r\n        let str = s.slice(i,j+1)\r\n        if(isPal(str)){\r\n            partition.push(str)\r\n            backtrack(j+1, partition, s, result)\r\n            partition.pop()\r\n        }\r\n    }\r\n}\r\n\r\nfunction isPal(str){\r\n    return JSON.stringify(str.split('').reverse()) === JSON.stringify(str.split(''))\r\n}"
  }
}
