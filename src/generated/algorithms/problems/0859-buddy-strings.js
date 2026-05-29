export default {
  "id": 859,
  "name": "Buddy Strings",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/buddy-strings",
  "relativeDir": "B/Buddy Strings",
  "slug": "0859-buddy-strings",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "java": 48,
    "python": 29,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    //In case string is duplicated, check if string has any duplicate letters\r\n    bool dupeCase(string s){\r\n        unordered_set<char> letters;\r\n        for(auto it : s){\r\n            if(letters.count(it)){  //Found dupe letter (they can be swapped)\r\n                return true;\r\n            } else {\r\n                letters.insert(it);\r\n            }\r\n        }\r\n        return false;   //all letters unique\r\n    }\r\n    \r\n    bool buddyStrings(string s, string goal) {\r\n        //check len\r\n        if(goal.length() != s.length()) return false;\r\n        //If strings are the same, use diff. method\r\n        if(s == goal) return dupeCase(s);\r\n        //Track index of differences \r\n        vector<int> diff;\r\n        for(int i = 0; i < s.length(); i++){\r\n            if(s[i] != goal[i]){    //If diff found\r\n                if(diff.size() > 2){    //If this is third diff, return false\r\n                    return false;\r\n                } else {            //If not store in diff array\r\n                    diff.push_back(i);\r\n                }\r\n            }\r\n        }\r\n        //If only one diff found, return false\r\n        if(diff.size() == 1) return false;\r\n        //else return if swap works\r\n        return (s[diff[0]] == goal[diff[1]] && s[diff[1]] == goal[diff[0]]);\r\n    }\r\n};",
    "python": "# Runtime: 54 ms (Top 48.33%) | Memory: 14.1 MB (Top 96.59%)\r\n\r\nfrom collections import Counter\r\n\r\nclass Solution:\r\n    def buddyStrings(self, s: str, goal: str) -> bool:\r\n        if len(s) != len(goal):\r\n            return False\r\n        diffCharactersCount = 0\r\n        diffCharactersInS = []\r\n        diffCharactersInGoal = []\r\n        for i in range(len(s)):\r\n            if s[i] != goal[i]:\r\n                diffCharactersCount += 1\r\n                diffCharactersInS.append(s[i])\r\n                diffCharactersInGoal.append(goal[i])\r\n        if diffCharactersCount == 2:\r\n            # if there are only 2 different characters, then they should be swappable\r\n            if ((diffCharactersInS[0] == diffCharactersInGoal[1]) and (diffCharactersInS[1] == diffCharactersInGoal[0])):\r\n                return True\r\n            return False\r\n        elif diffCharactersCount == 0:\r\n            # if there is atleast one repeating character in the string then its possible for swap\r\n            counts = Counter(s)\r\n            for k,v in counts.items():\r\n                if v > 1:\r\n                    return True\r\n        # if different characters count is not 2 or 0, then it's not possible for the strings to be buddy strings\r\n        return False",
    "java": "// Runtime: 2 ms (Top 90.24%) | Memory: 43 MB (Top 54.79%)\r\nclass Solution {\r\n    public boolean buddyStrings(String s, String goal) {\r\n        char a = '\\u0000', b = '\\u0000';\r\n        char c = '\\u0000', d = '\\u0000';\r\n        int lenS = s.length();\r\n        int lenGoal = goal.length();\r\n        boolean flag = true;\r\n        HashSet<Character> hset = new HashSet<>();\r\n\r\n        if(lenS != lenGoal)\r\n            return false;\r\n\r\n        if(s.equals(goal)){\r\n            for(int i = 0; i < lenS; i++){\r\n                if(!hset.contains(s.charAt(i))){\r\n                    hset.add(s.charAt(i));\r\n                }\r\n                else\r\n                    return true;\r\n            }\r\n            return false;\r\n        }\r\n        else{\r\n            for(int i = 0; i < lenS; i++){\r\n                if(s.charAt(i) == goal.charAt(i)){\r\n                    continue;\r\n                }\r\n                if(a == '\\u0000'){\r\n                    a = s.charAt(i);\r\n                    c = goal.charAt(i);\r\n                    continue;\r\n                }\r\n                if(b == '\\u0000'){\r\n                    b = s.charAt(i);\r\n                    d = goal.charAt(i);\r\n                    continue;\r\n                }\r\n                return false;\r\n            }\r\n\r\n            if(a == d && c == b && a != '\\u0000')\r\n                return true;\r\n\r\n            return false;\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 49 ms (Top 97.2%) | Memory: 44.05 MB (Top 38.9%)\r\n\r\nvar buddyStrings = function(A, B) {\r\n    if(A.length != B.length) return false;\r\n    const diff = [];\r\n    \r\n    for(let i = 0; i < A.length; i++) {\r\n        if(A[i] != B[i]) diff.push(i);\r\n        if(diff.length > 2) return false;\r\n    }\r\n    if(!diff.length) return A.length != [...new Set(A)].length;\r\n    const [i, j] = diff; \r\n    return A[i] == B[j] && B[i] == A[j];\r\n};"
  }
}
