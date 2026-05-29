export default {
  "id": 409,
  "name": "Longest Palindrome",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-palindrome",
  "relativeDir": "L/Longest Palindrome",
  "slug": "0409-longest-palindrome",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 31,
    "python": 22,
    "javascript": 22
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int longestPalindrome(string s) {\r\n        map<char,int> mp;\r\n        for(int i=0;i<s.length();i++){\r\n            mp[s[i]]++;\r\n        }\r\n        int ans = 0;\r\n        int odd = 0;\r\n        for(auto i:mp){\r\n            if(i.second % 2 == 1){\r\n                odd = 1;\r\n            }\r\n            ans = ans + (i.second/2)*2;\r\n        }\r\n        return ans+odd;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def longestPalindrome(self, s: str) -> int:\r\n        letters = {} \r\n        for letter in s: #count each letter and update letters dict\r\n            if letter in letters:\r\n                letters[letter] += 1\r\n            else:\r\n                letters[letter] = 1\r\n        \r\n        \r\n        plus1 = 0 # if there is a letter with count of odd ans must +=1 \r\n        ans = 0\r\n        for n in letters.values():\r\n            if n == 1: #1 can only appear in the middle of our word\r\n                plus1 = 1\r\n            elif n%2 == 0:\r\n                ans += n\r\n            else:\r\n                ans += n - 1\r\n                plus1 = 1\r\n                \r\n        return ans + plus1",
    "java": "// Runtime: 6 ms (Top 56.47%) | Memory: 40.7 MB (Top 92.38%)\r\nclass Solution {\r\n    public int longestPalindrome(String s) {\r\n        HashMap<Character, Integer> map = new HashMap<>();\r\n\r\n        int evenNo = 0;\r\n        int oddNo = 0;\r\n\r\n        for ( int i = 0; i < s.length(); i++) {\r\n            char c = s.charAt(i);\r\n            if (map.containsKey(c)) {\r\n                map.put(c, map.get(c) + 1);\r\n            } else {\r\n                map.put(c, 1);\r\n            }\r\n\r\n        }\r\n        for (Map.Entry e : map.entrySet()) {\r\n            int n = (int) e.getValue();\r\n            if (n % 2 != 0) {\r\n                oddNo += n;\r\n            }\r\n            evenNo += (n / 2) * 2;\r\n        }\r\n\r\n        if (oddNo > 0) {\r\n            evenNo += 1;\r\n        }\r\n        return evenNo;\r\n    }\r\n}",
    "javascript": "// Runtime: 112 ms (Top 32.41%) | Memory: 43.7 MB (Top 65.09%)\r\nvar longestPalindrome = function(s) {\r\n    const hashMap = {};\r\n    let ouput = 0;\r\n    let hashOdd = false;\r\n\r\n    for (let i = 0; i < s.length; i++) {\r\n        if (!hashMap[s[i]]) {\r\n            hashMap[s[i]] = 0;\r\n        }\r\n        hashMap[s[i]] += 1;\r\n    }\r\n\r\n    Object.values(hashMap)?.forEach(character => {\r\n        ouput += character%2 ? character - 1 : character;\r\n        if (character%2 && !hashOdd) {\r\n            hashOdd = true;\r\n        }\r\n    });\r\n\r\n    return ouput + (hashOdd ? 1 : 0);\r\n};"
  }
}
