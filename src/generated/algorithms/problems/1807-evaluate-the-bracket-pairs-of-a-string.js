export default {
  "id": 1807,
  "name": "Evaluate the Bracket Pairs of a String",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string",
  "relativeDir": "E/Evaluate the Bracket Pairs of a String",
  "slug": "1807-evaluate-the-bracket-pairs-of-a-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 25,
    "python": 13,
    "javascript": 7
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string evaluate(string s, vector<vector<string>>& knowledge) {\r\n        string ans; // resultant string\r\n        int n = s.size();\r\n        if(n < 2) return s; // because () will come in pair so, size should be more than 2\r\n        int sz = knowledge.size();\r\n        unordered_map<string, string> mp; // To reduce Runtime otherwise it will give TLE\r\n        for(int i=0; i<sz; ++i){\r\n            mp.insert({knowledge[i][0], knowledge[i][1]}); // Inserting {key, value} pair\r\n        }\r\n        for(int i=0; i<n; i++){\r\n            \r\n            if(s[i] == '('){  \r\n                string key;\r\n                i++;\r\n                while(s[i] != ')'){ // getting key till we get ')'\r\n                    key += s[i++];\r\n                }\r\n                string value;\r\n                if(mp.find(key) != mp.end()){ // If {key, value} pair is present then replace (key) by it's value\r\n                    value = mp[key];\r\n                    ans += value;\r\n                }\r\n                else {// otherwise replace (key) by ?\r\n                    ans += \"?\";\r\n                }\r\n            }\r\n            else ans += s[i];\r\n        }\r\n        return ans;\r\n    }\r\n};\r\n\r\n**Please do upvote**",
    "python": "class Solution:\r\n    def evaluate(self, s: str, knowledge: List[List[str]]) -> str:\r\n        knowledge = dict(knowledge)\r\n        answer, start = [], None\r\n        for i, char in enumerate(s):\r\n            if char == '(': \r\n                start = i + 1\r\n            elif char == ')':\r\n                answer.append(knowledge.get(s[start:i], '?'))\r\n                start = None\r\n            elif start is None: \r\n                answer.append(char)\r\n        return ''.join(answer)",
    "java": "// Runtime: 77 ms (Top 56.41%) | Memory: 91.9 MB (Top 81.62%)\r\nclass Solution {\r\n    public String evaluate(String s, List<List<String>> knowledge) {\r\n        Map<String, String> map = new HashMap<>();\r\n        for(List<String> ele : knowledge) {\r\n            map.put(ele.get(0), ele.get(1));\r\n        }\r\n        StringBuilder sb = new StringBuilder();\r\n        int b_start = -1;\r\n        for(int i = 0; i < s.length(); i++) {\r\n            if(s.charAt(i) == '(') {\r\n                b_start = i;\r\n            } else if(s.charAt(i) == ')') {\r\n                String key = s.substring(b_start + 1, i);\r\n                sb.append(map.getOrDefault(key, \"?\"));\r\n                b_start = -1;\r\n            } else {\r\n                if(b_start == -1) {\r\n                    sb.append(s.charAt(i));\r\n                }\r\n            }\r\n        }\r\n        return sb.toString();\r\n    }\r\n}",
    "javascript": "var evaluate = function(s, knowledge) {\r\n    // key => value hash map can be directly constructed using the Map constructor\r\n    const map = new Map(knowledge);\r\n    \r\n\t// since bracket pairs can't be nested we can use a RegExp to capture keys and replace using a map constructed in the line above\r\n\treturn s.replace(/\\(([a-z]+)\\)/g, (_, p1) => map.get(p1) ?? \"?\");\r\n};"
  }
}
