export default {
  "id": 151,
  "name": "Reverse Words in a String",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reverse-words-in-a-string",
  "relativeDir": "R/Reverse Words in a String",
  "slug": "0151-reverse-words-in-a-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 33,
    "java": 20,
    "python": 40,
    "javascript": 3
  },
  "languages": {
    "cpp": "// Runtime: 32 ms (Top 12.73%) | Memory: 20.7 MB (Top 30.32%)\r\nclass Solution {\r\npublic:\r\n    string reverseWords(string s) {\r\n        int i=0;\r\n        string res = \"\";\r\n        while(i<s.length())\r\n        {\r\n            while(i<s.length() && s[i]==' ')\r\n                i++;\r\n\r\n            if(i>=s.length())\r\n                break;\r\n\r\n            int j=i+1;\r\n\r\n            while(j<s.length() && s[j]!=' ')\r\n                j++;\r\n\r\n            string tmp = s.substr(i,j-i);\r\n            if(res.length()==0)\r\n            {\r\n                res = tmp;\r\n            }\r\n            else\r\n            {\r\n                res = tmp + \" \" + res;\r\n            }\r\n            i=j+1;\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def split(self, s: str, delimiter=\" \") -> List[str]:\r\n        start, end = 0, 0\r\n\r\n        res = []\r\n        for ch in s:\r\n            if ch == delimiter:\r\n                if start == end:\r\n                    start += 1\r\n                else:\r\n                    res.append(s[start:end])\r\n                    start  = end + 1\r\n            \r\n            end += 1\r\n        \r\n        if start != end:\r\n            res.append(s[start:end])\r\n\r\n        return res\r\n\r\n    def reverse_list(self, ll: List[str]) -> List[str]:\r\n        l, r = 0, len(ll) - 1\r\n\r\n        while l < r:\r\n            ll[l], ll[r] = ll[r], ll[l]\r\n            l += 1\r\n            r -= 1\r\n        \r\n        return ll\r\n\r\n    def reverseWords(self, s: str) -> str:\r\n\r\n        # split first\r\n        splitted_str_list = self.split(s)\r\n\r\n        # reverse splitted list\r\n        reversed_str_list = self.reverse_list(splitted_str_list)\r\n\r\n        # join an return\r\n        return \" \".join(reversed_str_list)",
    "java": "class Solution {\r\n    public String reverseWords(String s) {\r\n        String[] arr = s.replaceAll(\"\\\\s{2,}\", \" \").split(\" \"); \r\n        // splitting based on while spaces by replaceing spaces by single gap \r\n        int n = arr.length;\r\n        String temp = \"\";\r\n        for(int i =0;i<n/2;i++){\r\n            temp = arr[i];\r\n            arr[i] = arr[n-i-1];\r\n            arr[n-i-1]=temp;\r\n        }\r\n        String result =\"\";\r\n        for(int i =0;i<n-1;i++){\r\n            result+=arr[i]+\" \";\r\n        }\r\n        result+=arr[n-1];\r\n        return result.trim();\r\n        \r\n    }\r\n}",
    "javascript": "var reverseWords = function(s) {\r\n    return s.split(\" \").filter(i => i).reverse().join(\" \");\r\n};"
  }
}
