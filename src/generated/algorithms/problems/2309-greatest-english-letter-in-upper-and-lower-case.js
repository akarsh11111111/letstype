export default {
  "id": 2309,
  "name": "Greatest English Letter in Upper and Lower Case",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case",
  "relativeDir": "G/Greatest English Letter in Upper and Lower Case",
  "slug": "2309-greatest-english-letter-in-upper-and-lower-case",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 16,
    "python": 6,
    "javascript": 10
  },
  "languages": {
    "cpp": "// Runtime: 15 ms (Top 22.24%) | Memory: 6.7 MB (Top 73.98%)\r\nclass Solution {\r\npublic:\r\n\r\n    string greatestLetter(string s)\r\n    {\r\n        vector<int> low(26), upp(26); //storing occurences of lower and upper case letters\r\n        string res = \"\";\r\n\r\n        for(auto it : s) //iterate over each char and mark it in respective vector\r\n        {\r\n            if(it-'A'>=0 && it-'A'<26)\r\n                upp[it-'A']++;\r\n            else\r\n                low[it-'a']++;\r\n        }\r\n\r\n        for(int i=25; i>=0; i--) //start from greater char\r\n        {\r\n            if(low[i] && upp[i]) //if char found in upp and low that will be the result\r\n            {\r\n                res += 'A'+i;\r\n                break;\r\n            }\r\n\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "# Runtime: 34 ms (Top 92.91%) | Memory: 13.8 MB (Top 66.80%)\r\n\r\nclass Solution:\r\n    def greatestLetter(self, s: str) -> str:\r\n        cnt = Counter(s)\r\n        return next((u for u in reversed(ascii_uppercase) if cnt[u] and cnt[u.lower()]), \"\")",
    "java": "// Runtime: 6 ms (Top 53.1%) | Memory: 41.50 MB (Top 23.1%)\r\n\r\nclass Solution\r\n{\r\n    public String greatestLetter(String s)\r\n    {\r\n        Set<Character> set = new HashSet<>();\r\n        for(char ch : s.toCharArray())\r\n            set.add(ch);\r\n        \r\n        for(char ch = 'Z'; ch >= 'A'; ch--)\r\n            if(set.contains(ch) && set.contains((char)('a'+(ch-'A'))))\r\n               return \"\"+ch;\r\n        return \"\";\r\n    }\r\n}",
    "javascript": "var greatestLetter = function(s) {\r\n    let set=new Set(s.split(\"\"));\r\n\t// ASCII(A-Z, a-z)=(65-90, 97-122).\r\n    for(let i=90; i>=65; i--){\r\n        if(set.has(String.fromCharCode(i)) && set.has(String.fromCharCode(i+32))){\r\n            return String.fromCharCode(i);\r\n        }\r\n    }\r\n    return \"\";\r\n};"
  }
}
