export default {
  "id": 2287,
  "name": "Rearrange Characters to Make Target String",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/rearrange-characters-to-make-target-string",
  "relativeDir": "R/Rearrange Characters to Make Target String",
  "slug": "2287-rearrange-characters-to-make-target-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 19,
    "python": 5,
    "javascript": 24
  },
  "languages": {
    "cpp": "Approach :\r\n       => Take two map,  one to store frequency of target, and another for sentence. \r\n\t   => Traverse over the mp(frequency of target ) and calculate the minimum frequency ratio \r\n\t                            mn =  min(mn ,   frequency of a char in sentance / frequency of same char in target) ; \t\t  \r\n\t\t\t\t\t\t\t\t\t\t \r\n\t\tSpace : O(n) \r\n\t\tTime : O(n)\r\nclass Solution {\r\npublic:\r\n    int rearrangeCharacters(string s, string target) {\r\n        unordered_map<char,int> targetFreq ; \r\n        for(auto a : target) {\r\n             targetFreq[a] ++;\r\n        }\r\n        unordered_map<char , int> sentFreq ; \r\n        for(auto a : s) {\r\n            sentFreq[a] ++ ; \r\n        }\r\n        int mn = INT_MAX  ; \r\n        for(auto a : targetFreq ) {\r\n             mn = min(mn , sentFreq[a.first]/a.second); \r\n        }\r\n        return mn ; \r\n    }\r\n};",
    "python": "# Runtime: 55 ms (Top 32.02%) | Memory: 13.9 MB (Top 67.72%)\r\nclass Solution:\r\n    def rearrangeCharacters(self, s: str, target: str) -> int:\r\n        counter_s = Counter(s)\r\n        return min(counter_s[c] // count for c,count in Counter(target).items())",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 41.04 MB (Top 6.2%)\r\n\r\nclass Solution\r\n{\r\n    public int rearrangeCharacters(String s, String target)\r\n    {\r\n        int[] freq = new int[26], freq2 = new int[26];\r\n        for(char ch : s.toCharArray())\r\n            freq[ch-'a']++;\r\n        for(char ch : target.toCharArray())\r\n            freq2[ch-'a']++;\r\n\r\n        int min = Integer.MAX_VALUE;\r\n        for(char ch : target.toCharArray())\r\n            min = Math.min(min,freq[ch-'a']/freq2[ch-'a']);\r\n        \r\n        return min;\r\n    }\r\n}",
    "javascript": "// Runtime: 100 ms (Top 32.29%) | Memory: 42.8 MB (Top 30.21%)\r\n/**\r\n * @param {string} s\r\n * @param {string} target\r\n * @return {number}\r\n */\r\nvar rearrangeCharacters = function(s, target) {\r\n    let cnt = Number.MAX_VALUE;\r\n\r\n    let m1 = new Map();\r\n    for(const x of target) m1.set(x , m1.get(x)+1 || 1);\r\n\r\n    let m2 = new Map();\r\n    for(const x of s) m2.set(x , m2.get(x)+1 || 1);\r\n\r\n    for(let it of m1){\r\n        let ch = it[0];\r\n        let x = it[1];\r\n        let y = m2.get(ch);\r\n        if(y === undefined) y=0;\r\n        cnt = Math.min(cnt,Math.floor(y/x));\r\n    }\r\n    return cnt;\r\n};"
  }
}
