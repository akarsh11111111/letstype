export default {
  "id": 2347,
  "name": "Best Poker Hand",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/best-poker-hand",
  "relativeDir": "B/Best Poker Hand",
  "slug": "2347-best-poker-hand",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 16,
    "python": 25,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 10.50 MB (Top 58.44%)\r\n\r\nclass Solution {\r\npublic:\r\n    string bestHand(vector<int>& ranks, vector<char>& suits) {\r\n        map<int, int> m1;\r\n        int mn = INT_MIN;\r\n        int all_same = count(begin(suits), end(suits), suits[0]);\r\n        int n = ranks.size();\r\n        for (int i = 0; i < n; i++) {\r\n            m1[ranks[i]]++;\r\n            mn = max(mn, m1[ranks[i]]);\r\n        }\r\n        if (all_same == n)     return \"Flush\";\r\n        if (mn >= 3)      return \"Three of a Kind\";\r\n        if (mn == 2)      return \"Pair\";\r\n        return \"High Card\";\r\n    }\r\n};",
    "python": "# Runtime: 38 ms (Top 59.18%) | Memory: 13.9 MB (Top 14.06%)\r\nclass Solution:\r\n    def bestHand(self, ranks: List[int], suits: List[str]) -> str:\r\n        s={}\r\n        for i in suits:\r\n            if i in s:\r\n                s[i]+=1\r\n                if s[i]==5:\r\n                    return 'Flush'\r\n            else:\r\n                s[i]=1\r\n        r={}\r\n        max_ = 0\r\n        for i in ranks:\r\n            if i in r:\r\n                r[i]+=1\r\n                max_=max(max_,r[i])\r\n            else:\r\n                r[i]=1\r\n        if max_>=3:\r\n            return \"Three of a Kind\"\r\n        elif max_==2:\r\n            return \"Pair\"\r\n        else:\r\n            return \"High Card\"",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 41.6 MB (Top 33.75%)\r\nclass Solution {\r\n    public String bestHand(int[] ranks, char[] suits) {\r\n    int max = 0;\r\n    int card = 0;\r\n    char ch = suits[0];\r\n    int[] arr = new int[14];\r\n    for(int i = 0; i < 5; i++){\r\n        arr[ranks[i]]++;\r\n        max = Math.max(max,arr[ranks[i]]);\r\n        if(suits[i] == ch) card++;\r\n    }\r\n        if(card == 5) return \"Flush\";\r\n     return max >= 3 ? \"Three of a Kind\":(max == 2 ? \"Pair\" : \"High Card\");\r\n    }\r\n}",
    "javascript": "var bestHand = function(ranks, suits) {\r\n    let suitsMap = {}\r\n    for (let i=0; i<suits.length; i++) {\r\n        if (suitsMap[suits[i]]) {\r\n            suitsMap[suits[i]]++;\r\n        } else {\r\n            suitsMap[suits[i]] = 1;\r\n        }\r\n    }\r\n    if (Object.keys(suitsMap).length === 1) return \"Flush\";\r\n    let pair = false;\r\n    let ranksMap = {};\r\n    for (let i=0; i<ranks.length; i++) {\r\n        if (ranksMap[ranks[i]]) {\r\n            ranksMap[ranks[i]]++;\r\n            if (ranksMap[ranks[i]] >= 3) return \"Three of a Kind\";\r\n        } else {\r\n            ranksMap[ranks[i]] = 1;\r\n        }\r\n    }\r\n    if (Object.keys(ranksMap).length === 5) return \"High Card\";\r\n    return \"Pair\";\r\n};"
  }
}
