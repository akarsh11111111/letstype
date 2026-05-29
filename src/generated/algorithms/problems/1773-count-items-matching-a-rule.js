export default {
  "id": 1773,
  "name": "Count Items Matching a Rule",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-items-matching-a-rule",
  "relativeDir": "C/Count Items Matching a Rule",
  "slug": "1773-count-items-matching-a-rule",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 15,
    "python": 4,
    "javascript": 9
  },
  "languages": {
    "cpp": "// Runtime: 159 ms (Top 10.55%) | Memory: 30.9 MB (Top 79.63%)\r\nclass Solution {\r\npublic:\r\n    int countMatches(vector<vector<string>>& items, string ruleKey, string ruleValue) {\r\n        int i;\r\n        if(ruleKey==\"type\")i=0;\r\n        if(ruleKey==\"color\")i=1;\r\n        if(ruleKey==\"name\")i=2;\r\n\r\n        int ans=0;\r\n        for(int j=0;j<items.size();j++){\r\n            if(items[j][i]==ruleValue)ans++;\r\n        }\r\n\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countMatches(self, items: List[List[str]], ruleKey: str, ruleValue: str) -> int:\r\n        d = {'type': 0, 'color': 1, 'name': 2}\r\n        return sum(1 for item in items if item[d[ruleKey]] == ruleValue)",
    "java": "// Runtime: 8 ms (Top 61.48%) | Memory: 56.3 MB (Top 75.54%)\r\nclass Solution {\r\n    public int countMatches(List<List<String>> items, String ruleKey, String ruleValue) {\r\n        int res = 0;\r\n\r\n        for(int i = 0 ;i<items.size();i++){\r\n            if(ruleKey.equals(\"type\") && items.get(i).get(0).equals(ruleValue)) res++;\r\n            if(ruleKey.equals(\"color\") && items.get(i).get(1).equals(ruleValue)) res++;\r\n            if(ruleKey.equals(\"name\") && items.get(i).get(2).equals(ruleValue)) res++;\r\n        }\r\n\r\n        return res;\r\n\r\n    }\r\n}",
    "javascript": "const RULE_IDX = {\r\n    'type': 0,\r\n    'color': 1,\r\n    'name': 2\r\n};\r\n\r\nvar countMatches = function(items, ruleKey, ruleValue) {\r\n    return items.reduce((ans, item) => item[RULE_IDX[ruleKey]] === ruleValue ? ans + 1 : ans, 0);\r\n};"
  }
}
