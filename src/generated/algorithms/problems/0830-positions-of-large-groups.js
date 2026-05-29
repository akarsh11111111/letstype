export default {
  "id": 830,
  "name": "Positions of Large Groups",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/positions-of-large-groups",
  "relativeDir": "P/Positions of Large Groups",
  "slug": "0830-positions-of-large-groups",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 34,
    "java": 38,
    "python": 21,
    "javascript": 12
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<vector<int>> largeGroupPositions(string s) {\r\n        vector<vector<int>> res;\r\n        \r\n        int st = 0;\r\n        int en = 1;\r\n        \r\n        while(en < s.size())\r\n        {\r\n            if(s[en] != s[st])\r\n            {\r\n                if(en-st >= 3)\r\n                {\r\n                    res.push_back({st, en-1});\r\n                    \r\n                }\r\n                st = en;\r\n                en = st+1;\r\n            }\r\n            else\r\n            {\r\n                en++;\r\n            }\r\n        }\r\n        \r\n        if(en-st >= 3)\r\n        {\r\n            res.push_back({st, en-1});\r\n        }\r\n        \r\n        return res;\r\n    }\r\n};",
    "python": "# Runtime: 81 ms (Top 17.97%) | Memory: 13.9 MB (Top 73.17%)\r\nclass Solution:\r\n    def largeGroupPositions(self, s: str) -> List[List[int]]:\r\n\r\n        i=0\r\n        c=1\r\n        prev=\"\"\r\n        l=len(s)\r\n        ans=[]\r\n        while i<l:\r\n            if s[i]==prev:\r\n                c+=1\r\n                if (i==l-1) & (c>=3):\r\n                    ans.append([i+1-c,i])\r\n            else:\r\n                if c>=3:\r\n                    ans.append([i-c,i-1])\r\n                c=1\r\n            prev=s[i]\r\n            i+=1\r\n        return ans",
    "java": "// Runtime: 2 ms (Top 35.3%) | Memory: 44.08 MB (Top 18.5%)\r\n\r\nclass Solution {\r\n    public List<List<Integer>> largeGroupPositions(String s) {\r\n        List<List<Integer>> res = new ArrayList<>();\r\n        List<Integer> tmp = new ArrayList<>();\r\n        int count = 1;\r\n        \r\n        for (int i = 0; i < s.length() - 1; i++) {\r\n            // Increment the count until the next element is the same as the previous element. Ex: \"aaa\"\r\n            if (s.charAt(i) == s.charAt(i + 1)) {\r\n                count++;\r\n            } \r\n            // Add the first and last indices of the substring to the list when the next element is different from the previous element. Ex: \"aaab\"\r\n            else if (s.charAt(i) != s.charAt(i + 1) && count >= 3) {\r\n                // gives the starting index of substring\r\n                tmp.add(i - count + 1);\r\n                // gives the last index of substring \r\n                tmp.add(i);\r\n                res.add(tmp);\r\n                count = 1;\r\n                tmp = new ArrayList<>();\r\n            } \r\n            else {\r\n                count = 1;\r\n            }\r\n        }\r\n\r\n        // Check for a large group at the end of the string. Ex: \"abbb\".\r\n        if (count >= 3) {\r\n            tmp.add(s.length() - count);\r\n            tmp.add(s.length() - 1);\r\n            res.add(tmp);\r\n        }\r\n\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 61 ms (Top 83.06%) | Memory: 45.00 MB (Top 57.26%)\r\n\r\nvar largeGroupPositions = function(S) {\r\n    let j = 0, res = [];\r\n    for (let i = 0; i < S.length; i++) {\r\n        if (S[i] !== S[i+1]) {\r\n            if (i-j+1 >= 3) res.push([j,i]);\r\n            j = i+1;\r\n        }\r\n    }\r\n    return res;\r\n};"
  }
}
