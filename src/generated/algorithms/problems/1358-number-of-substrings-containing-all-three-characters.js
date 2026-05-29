export default {
  "id": 1358,
  "name": "Number of Substrings Containing All Three Characters",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters",
  "relativeDir": "N/Number of Substrings Containing All Three Characters",
  "slug": "1358-number-of-substrings-containing-all-three-characters",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 46,
    "python": 17,
    "javascript": 23
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int numberOfSubstrings(string s) {\r\n        int i=0,j=0;\r\n        int n = s.size();\r\n        map<char,int> mp;\r\n        int count=0;\r\n        while(j<n){\r\n            mp[s[j]]++;\r\n            if(mp.size()<3){\r\n                j++;\r\n            }\r\n            else{\r\n               while(mp.size()==3){\r\n                   count+=(n-j);\r\n                   mp[s[i]]--;\r\n                   if(mp[s[i]]==0) mp.erase(s[i]);\r\n                   i++;\r\n                }\r\n                j++;\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n};",
    "python": "# Runtime: 466 ms (Top 30.17%) | Memory: 14.4 MB (Top 31.83%)\r\nclass Solution:\r\n    def numberOfSubstrings(self, s: str) -> int:\r\n        start = 0\r\n        end = 0\r\n        counter = 0\r\n        store = {'a' : 0, 'b' : 0, 'c' : 0}\r\n\r\n        for end in range(len(s)):\r\n            store[s[end]] += 1\r\n\r\n            while store['a'] > 0 and store['b'] > 0 and store['c'] > 0:\r\n                counter += (len(s) - end)\r\n                store[s[start]] -= 1\r\n                start += 1\r\n\r\n        return counter",
    "java": "// Runtime: 19 ms (Top 41.17%) | Memory: 45.4 MB (Top 53.10%)\r\n\r\nclass Solution {\r\n    public int numberOfSubstrings(String s) {\r\n        int a = 0, b = 0, c = 0, count = 0;\r\n        for (int i = 0; i < s.length(); i++) {\r\n            switch (s.charAt(i)) {\r\n                case 'a': ++a; break;\r\n                case 'b': ++b; break;\r\n                case 'c': ++c; break;\r\n            }\r\n            if (a > 0 && b > 0 && c > 0) {\r\n                while (a > 0 && b > 0 && c > 0) {\r\n                    char farLeft = s.charAt(i - a - b - c + 1);\r\n                    switch (farLeft) {\r\n                        case 'a': {\r\n                            --a;\r\n                            count += doCount(s, i);\r\n                            break;\r\n                        }\r\n                        case 'b': {\r\n                            --b;\r\n                            count += doCount(s, i);\r\n                            break;\r\n                        }\r\n                        case 'c': {\r\n                            --c;\r\n                            count += doCount(s, i);\r\n                            break;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n\r\n    private int doCount(String s, int i) {\r\n        int count = 0;\r\n        int n = s.length() - i;\r\n        if (n > 0) {\r\n            count += n;\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 438 ms (Top 7.57%) | Memory: 49.2 MB (Top 13.64%)\r\n/**\r\n * @param {string} s\r\n * @return {number}\r\n */\r\nvar numberOfSubstrings = function(s) {\r\n    let ans = 0;\r\n    let map = {};\r\n    for(let i = 0, l = 0; i < s.length; i++) {\r\n        const c = s[i];\r\n        map[c] = (map[c] || 0) + 1;\r\n\r\n        while(Object.keys(map).length == 3) {\r\n            ans += s.length - i;\r\n            map[s[l]]--;\r\n            if(map[s[l]] == 0) {\r\n                delete map[s[l]];\r\n            }\r\n            l++;\r\n        }\r\n    }\r\n    return ans;\r\n};"
  }
}
