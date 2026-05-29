export default {
  "id": 1910,
  "name": "Remove All Occurrences of a Substring",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/remove-all-occurrences-of-a-substring",
  "relativeDir": "R/Remove All Occurrences of a Substring",
  "slug": "1910-remove-all-occurrences-of-a-substring",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 36,
    "java": 14,
    "python": 7,
    "javascript": 26
  },
  "languages": {
    "cpp": "// Runtime: 85 ms (Top 5.41%) | Memory: 22.2 MB (Top 5.04%)\r\nclass Solution {\r\npublic:\r\n    bool check(stack<char> st, string part){\r\n        int n2 = part.length();\r\n        int j = n2-1;\r\n        while( j >=0 and st.top() == part[j]){\r\n            st.pop();\r\n            j--;\r\n        }\r\n        return (j == -1);\r\n    }\r\n    string removeOccurrences(string s, string part) {\r\n        int n1 = s.length() , n2 = part.length();\r\n        stack<char>st;\r\n        string str = \"\" ;\r\n        for(int i=0;i<n1;++i){\r\n            st.push(s[i]);\r\n            if(st.size() >= n2){\r\n                if(check(st,part)){\r\n                    int ct = n2;\r\n                    while(ct--){\r\n                        st.pop();\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        string res = \"\";\r\n        while(!st.empty()){\r\n            res += st.top();\r\n            st.pop();\r\n        }\r\n        reverse(res.begin(),res.end());\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def removeOccurrences(self, s: str, part: str) -> str:\r\n        n=len(part)\r\n        while part in s:\r\n            i=s.index(part)\r\n            s=s[:i]+s[i+n:]\r\n        return s",
    "java": "// Runtime: 9 ms (Top 38.9%) | Memory: 43.67 MB (Top 34.2%)\r\n\r\nclass Solution {\r\n    public String removeOccurrences(String s, String part) {\r\n        // s.replace(part,\"\");\r\n        // System.out.println(s);\r\n        \r\n        while(s.contains(part))\r\n        {\r\n            s=s.replaceFirst(part,\"\");\r\n        }\r\n        return s;\r\n    }\r\n}",
    "javascript": "// Runtime: 53 ms (Top 61.16%) | Memory: 45.00 MB (Top 12.4%)\r\n\r\nvar removeOccurrences = function(s, part) {\r\n    let stack = [];\r\n    for(let c of s) {\r\n        stack.push(c);\r\n        if(stack.length >= part.length && stack[stack.length-1] == part[part.length-1]) {\r\n            let temp = [];\r\n            for(let i = 0; i < part.length; i++) {\r\n                temp.push(stack.pop());\r\n            }\r\n            temp.reverse();\r\n            if(temp.join('') != part) {\r\n                for(let c of temp) {\r\n                    stack.push(c);\r\n                }\r\n            }\r\n        }\r\n    }\r\n    let ans = [];\r\n    while(stack.length > 0) {\r\n        ans.push(stack.pop());\r\n    }\r\n    ans.reverse();\r\n    return ans.join('');\r\n};"
  }
}
