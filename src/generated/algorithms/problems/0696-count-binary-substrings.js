export default {
  "id": 696,
  "name": "Count Binary Substrings",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-binary-substrings",
  "relativeDir": "C/Count Binary Substrings",
  "slug": "0696-count-binary-substrings",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 25,
    "python": 33,
    "javascript": 47
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int countBinarySubstrings(string s) {\r\n        int prev=0;\r\n        int curr=1;\r\n        int sum=0;\r\n\r\n        for(int i=1;i<s.length();i++){\r\n            if(s[i]==s[i-1]){\r\n                curr++;\r\n            }\r\n            else{\r\n                sum+= min(prev, curr);\r\n                prev=curr;\r\n                curr=1;\r\n            }\r\n        }\r\n\r\n        sum+= min(prev, curr);\r\n        return sum;\r\n    }\r\n};",
    "python": "# Runtime: 133 ms (Top 63.3%) | Memory: 16.65 MB (Top 94.0%)\r\n\r\nclass Solution:\r\n    def countBinarySubstrings(self, s: str) -> int:\r\n        \r\n        # previous continuous occurrence, current continuous occurrence\r\n        pre_cont_occ, cur_cont_occ = 0, 1\r\n        \r\n        # counter for binary substrings with equal 0s and 1s\r\n        counter = 0\r\n        \r\n\t\t# scan each character pair in s\r\n        for idx in range(1, len(s)):\r\n            \r\n            if s[idx] == s[idx-1]:\r\n                \r\n                # update current continuous occurrence\r\n                cur_cont_occ += 1\r\n            \r\n            else:\r\n                # update counter of binary substrings between prevous character group and current character group\r\n                counter += min(pre_cont_occ, cur_cont_occ)\r\n\r\n                # update previous as current's continuous occurrence\r\n                pre_cont_occ = cur_cont_occ\r\n                \r\n                # reset current continuous occurrence to 1\r\n                cur_cont_occ = 1\r\n        \r\n        # update for last time\r\n        counter += min(pre_cont_occ, cur_cont_occ)\r\n        \r\n        return counter",
    "java": "// Runtime: 16 ms (Top 47.54%) | Memory: 49 MB (Top 60.10%)\r\nclass Solution\r\n{\r\n    public int countBinarySubstrings(String s)\r\n    {\r\n        int i , prevRunLength = 0 , curRunLength = 1 , count = 0 ;\r\n        for ( i = 1 ; i < s.length() ; i++ )\r\n        {\r\n            if( s.charAt(i) == s.charAt( i - 1 ) )\r\n            {\r\n                curRunLength++;\r\n            }\r\n            else\r\n            {\r\n                prevRunLength = curRunLength;\r\n                curRunLength = 1;\r\n            }\r\n            if(prevRunLength >= curRunLength)\r\n            {\r\n                count++ ;\r\n            }\r\n        }\r\n        return count ;\r\n    }\r\n}",
    "javascript": "/**\r\n * find all bit switches '01' and '10'. \r\n * From each one expand sideways: i goes left, j goes right\r\n * Until:\r\n * if '01' -> i,j != 0,1\r\n * if '10' -> i,j != 1,0\r\n * and within input boundaries\r\n */\r\nvar countBinarySubstrings = function(s) {\r\n    let i = 0;\r\n    const n = s.length;\r\n    let count = 0;\r\n    while (i < n-1) {\r\n        if (s[i] != s[i+1]) {\r\n            if (s[i] === '0') {\r\n                count += countZeroOnes(s, i, true);\r\n            } else {\r\n                count += countZeroOnes(s, i, false);\r\n            }\r\n            \r\n        }\r\n        i++;\r\n    }\r\n    return count;\r\n    \r\n    // count the number of valid substrings substrings\r\n    function countZeroOnes(s, start, startsWithZero) {\r\n        let count = 0;\r\n        let i = start;\r\n        let j = start+1;\r\n        const n = s.length;\r\n        if (startsWithZero) {\r\n            while(i >= 0 && j < n && s[i] === '0' && s[j] === '1') {\r\n                count++;\r\n                i--;\r\n                j++;\r\n            }\r\n        } else {\r\n            while(i >= 0 && j < n && s[i] === '1' && s[j] === '0') {\r\n                count++;\r\n                i--;\r\n                j++;\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n}"
  }
}
