export default {
  "id": 2351,
  "name": "First Letter to Appear Twice",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/first-letter-to-appear-twice",
  "relativeDir": "F/First Letter to Appear Twice",
  "slug": "2351-first-letter-to-appear-twice",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 12,
    "python": 7,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 25.64%) | Memory: 6.2 MB (Top 18.83%)\r\nclass Solution\r\n{\r\npublic:\r\n    char repeatedCharacter(string s)\r\n    {\r\n        unordered_map<char, int> mp; //for storing occurrences of char\r\n\r\n        char ans;\r\n        for(auto it:s)\r\n        {\r\n            if(mp.find(it) != mp.end()) //any char which comes twice first will be the ans;\r\n            {\r\n                ans = it;\r\n                break;\r\n            }\r\n            mp[it]++; //increase the count of char\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def repeatedCharacter(self, s: str) -> str:\r\n        occurences = defaultdict(int)\r\n        for char in s:\r\n            occurences[char] += 1\r\n            if occurences[char] == 2:\r\n                return char",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 41.60 MB (Top 23.65%)\r\n\r\nclass Solution {\r\n    public char repeatedCharacter(String s) {\r\n        HashSet<Character> set = new HashSet<>();//Create a set of characters\r\n        for(int i = 0 ; i < s.length() ; i++){\r\n            if(set.contains(s.charAt(i))) return s.charAt(i);//If the set already contains the current character, then it is the required ans\r\n            set.add(s.charAt(i));\r\n        }\r\n        return 'a';//As it is given in the question that there is at least one letter that appears twice, therefore it is certain that the ans will be found before we reach this statement. So, just adding any random return statement so that there is no error in the code.\r\n    }\r\n}",
    "javascript": " var repeatedCharacter = function(s) {\r\n    const m = {};\r\n    \r\n    for(let i of s) {\r\n        if(i in m) {\r\n            m[i]++\r\n        } else {\r\n            m[i] = 1\r\n        }\r\n        \r\n        if(m[i] == 2) {\r\n            return i\r\n        }\r\n    }\r\n};"
  }
}
