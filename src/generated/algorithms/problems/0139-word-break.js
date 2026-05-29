export default {
  "id": 139,
  "name": "Word Break",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/word-break",
  "relativeDir": "W/Word Break",
  "slug": "0139-word-break",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 22,
    "python": 21,
    "javascript": 54
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool wordBreak(string s, vector<string>& wordDict) {\r\n        int m = wordDict.size();\r\n        int n = s.size();\r\n        vector<int> dp(n+1,0);\r\n        dp[0] = 1;\r\n        for(int i = 1; i <= n; i++)\r\n        {\r\n            for(int j = 0; j < m; j++)\r\n            {\r\n                if(i >= wordDict[j].size())\r\n                {\r\n                    for(int k = 0; k < wordDict[j].size(); k++)\r\n                    {\r\n                        if(s[i-wordDict[j].size()+k] != wordDict[j][k])\r\n                            goto cnt;\r\n                    }\r\n                    if(dp[i-wordDict[j].size()] == 1) \r\n                        dp[i] = 1;\r\n                    if(dp[n] == 1) \r\n                        return true;\r\n                    cnt:;\r\n                }\r\n            }\r\n        }\r\n        return dp[n];\r\n    }\r\n};",
    "python": "class Solution:\r\n    def wordBreak(self, s: str, wordDict: List[str]) -> bool:\r\n        memo = {}\r\n\r\n\r\n        def can_construct(target, strings_bank, memo):    \r\n            if target in memo:\r\n                return memo[target]\r\n            if target == \"\":\r\n                return True\r\n            for element in strings_bank: # for every element in our dict we check if we can start constructing the string \"s\"\r\n                if element == target[0:len(element)]: # the remaining of the string \"s\" (which is the suffix) is the new target \r\n                    suffix = target[len(element):]\r\n                    if can_construct(suffix, strings_bank, memo):\r\n                        memo[target] = True\r\n                        return True\r\n            memo[target] = False\r\n            return False\r\n\r\n\r\n        return can_construct(s, wordDict, memo)",
    "java": "// Runtime: 20 ms (Top 16.65%) | Memory: 47.4 MB (Top 24.65%)\r\nclass Solution {\r\n     Map<String,Boolean>map= new HashMap<>();\r\n    public boolean wordBreak(String s, List<String> wordDict) {\r\n\r\n       if(wordDict.contains(s)){\r\n           return true;\r\n       }\r\n        if(map.containsKey(s)){\r\n           return map.get(s);\r\n        }\r\n        for(int i=0;i<s.length();++i){\r\n            String left=s.substring(0,i);\r\n            if(wordDict.contains(left) && wordBreak(s.substring(i),wordDict)){\r\n                map.put(s,true);\r\n                return true;\r\n            }\r\n        }\r\n        map.put(s,false);\r\n        return false;\r\n    }\r\n}",
    "javascript": "// Runtime: 72 ms (Top 92.39%) | Memory: 42.9 MB (Top 90.15%)\r\n\r\n/**\r\n * @param {string} s\r\n * @param {string[]} wordDict\r\n * @return {boolean}\r\n */\r\nvar wordBreak = function(s, wordDict) {\r\n    var dp = new Array(s.length + 1).fill(false);\r\n    dp[s.length] = true;\r\n\r\n    for (var i = s.length - 1; i >= 0; i--) {\r\n        for (const word of wordDict) {\r\n            if ((i + word.length) <= s.length\r\n                && s.substring(i, i + word.length) === word) {\r\n                dp[i] = dp[i + word.length];\r\n            }\r\n\r\n            if(dp[i]) break;\r\n        }\r\n    }\r\n\r\n    return dp[0];\r\n};\r\n\r\n// naive approach, take each word from the set and check if they match\r\n/// O(n ^ 2 * m)\r\n// considering m as the dictionary size\r\n/*\r\nvar dict = new Set();\r\nfor (const word of wordDict) {\r\n    dict.add(word);\r\n}\r\n\r\nreturn canSegment(s, dict, 0);\r\n\r\nfunction canSegment (str, dict, index) {\r\n    if (index >= str.length) return true;\r\n\r\n    var success = false;\r\n    for (const word of dict.values()) {\r\n\r\n        if ((index + word.length) <= str.length) {\r\n            var substring = str.substring(index, index + word.length);\r\n\r\n            if (dict.has(substring)) {\r\n                success = success | canSegment(str, dict, index + word.length);\r\n            }\r\n        }\r\n    }\r\n\r\n    return success;\r\n}\r\n*/"
  }
}
