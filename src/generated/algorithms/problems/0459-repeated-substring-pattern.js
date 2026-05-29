export default {
  "id": 459,
  "name": "Repeated Substring Pattern",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/repeated-substring-pattern",
  "relativeDir": "R/Repeated Substring Pattern",
  "slug": "0459-repeated-substring-pattern",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 49,
    "java": 20,
    "python": 6,
    "javascript": 6
  },
  "languages": {
    "cpp": "\r\nclass Solution {\r\npublic:\r\n    \r\n    vector<int> get_kmp_table(const string &s) {\r\n        vector<int> table(s.size());\r\n        int i=0; int j=-1;\r\n        table[0] = -1;\r\n        while (i < s.size()) {\r\n            if (j == -1 || s[i] == s[j]) {\r\n                i++;\r\n                j++;\r\n                table[i] = j;\r\n            }\r\n            else {\r\n                j = table[j];\r\n            }\r\n        }\r\n        return table;\r\n    }\r\n    \r\n    bool validate_table(const vector<int>& table) {\r\n        int idx = table.size() - 1;\r\n        while (idx >= 0 && table[idx] > 0) {\r\n            idx--;\r\n        }\r\n        if (idx <= 0) return false;\r\n        int substr_len = idx;\r\n        if (table.size() % substr_len != 0) return false;\r\n        idx = idx + 1; // the first nonzero element in the string\r\n        while (idx < table.size()-1) {\r\n            if (table[idx] != table[idx+1]-1) return false;\r\n            idx++;\r\n        }\r\n        return true;\r\n    }\r\n    \r\n    bool repeatedSubstringPattern(string s) {\r\n        if (s.size() <= 1) return true;\r\n        \r\n        auto table1 = get_kmp_table(s);\r\n        string ss = s;\r\n        reverse(ss.begin(), ss.end());\r\n        auto table2 = get_kmp_table(ss);\r\n        \r\n        return (validate_table(table1) && validate_table(table2));\r\n        \r\n    }\r\n};",
    "python": "class Solution:\r\n    def repeatedSubstringPattern(self, s: str) -> bool:\r\n        for i in range(1, len(s)//2+1):\r\n            if s[:i] * (len(s)//i) == s:\r\n                return True\r\n        return False",
    "java": "// Runtime: 324 ms (Top 17.74%) | Memory: 165.9 MB (Top 16.84%)\r\nclass Solution {\r\n\r\n  public boolean repeatedSubstringPattern(String s) {\r\n       String temp=\"\";\r\n        for(int i=0 ;i<s.length()/2 ;i++){\r\n            temp+=s.charAt(i);\r\n\r\n            if(s.length()%temp.length()==0) {\r\n                int times_repeat= s.length()/temp.length();\r\n                StringBuilder str = new StringBuilder();\r\n                for(int j=0 ;j<times_repeat ;j++){\r\n                    str.append(temp);\r\n                }\r\n                if(str.toString().equals(s)) return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n}",
    "javascript": "// Runtime: 120 ms (Top 50.89%) | Memory: 44.6 MB (Top 76.49%)\r\nvar repeatedSubstringPattern = function(s) {\r\n    let repeatStr = s.repeat(2) //first duplicate the string with repeat function\r\n    let sliceStr = repeatStr.slice(1,-1) // slice string first and last string word\r\n    return sliceStr.includes(s) // now check if the main string(s) is included by sliced string\r\n}"
  }
}
