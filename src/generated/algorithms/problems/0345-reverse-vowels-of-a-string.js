export default {
  "id": 345,
  "name": "Reverse Vowels of a String",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reverse-vowels-of-a-string",
  "relativeDir": "R/Reverse Vowels of a String",
  "slug": "0345-reverse-vowels-of-a-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 34,
    "java": 32,
    "python": 17,
    "javascript": 19
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    \r\n    bool isVowel(char s)\r\n    {\r\n        if(s == 'a' or s == 'e' or s == 'i' or s == 'o' or s == 'u'\r\n           or s == 'A' or s == 'E' or s == 'I' or s == 'O' or s == 'U') return true;\r\n        return false;\r\n    }\r\n    \r\n    string reverseVowels(string s) {\r\n        if(s.size() == 0) return \"\";\r\n        int left = 0, right = s.size() - 1;\r\n        \r\n        while(left < right)\r\n        {\r\n            if(isVowel(s[left]) and isVowel(s[right]))\r\n            {\r\n                swap(s[left], s[right]);\r\n                left++;\r\n                right--;\r\n            }\r\n            else if(isVowel(s[left])) right--;\r\n            else if(isVowel(s[right])) left++;\r\n            else {\r\n                left++;\r\n                right--;\r\n            }\r\n        }\r\n        \r\n        \r\n        return s;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def reverseVowels(self, s: str) -> str:\r\n        s=list(s)\r\n        vow=[]\r\n        for i,val in enumerate(s):\r\n            if val in ('a','e','i','o','u','A','E','I','O','U'):\r\n                vow.append(val)\r\n                s[i]='_'\r\n                \r\n        vow=vow[::-1]\r\n        c=0\r\n        print(vow)\r\n        for i,val in enumerate(s):\r\n            if val =='_':\r\n                s[i]=vow[c]\r\n                c+=1\r\n        return \"\".join(s)",
    "java": "class Solution {\r\n    public String reverseVowels(String s) {\r\n        Set<Character> set = new HashSet<>();\r\n        set.add('a');\r\n        set.add('e');\r\n        set.add('i');\r\n        set.add('o');\r\n        set.add('u');\r\n        set.add('A');\r\n        set.add('E');\r\n        set.add('I');\r\n        set.add('O');\r\n        set.add('U');\r\n        \r\n        StringBuilder str = new StringBuilder(s);\r\n        int left = 0, right = str.length() - 1;\r\n        while (left < right) {\r\n            if (!set.contains(str.charAt(left))) {\r\n                left++;\r\n            }\r\n            if (!set.contains(str.charAt(right))) {\r\n                right--;\r\n            }\r\n            if (set.contains(str.charAt(left)) && set.contains(s.charAt(right))) {\r\n                char temp = str.charAt(left);\r\n                str.setCharAt(left++, str.charAt(right));\r\n                str.setCharAt(right--, temp);\r\n            }\r\n        }\r\n        return str.toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 62 ms (Top 89.7%) | Memory: 48.50 MB (Top 60.7%)\r\n\r\nvar reverseVowels = function(s) {\r\n    const VOWELS = { 'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1 };\r\n    const arr = s.split('');\r\n    let i = 0, j = arr.length - 1;\r\n    while (i < j) {\r\n        if (VOWELS[arr[i]] && VOWELS[arr[j]]) {\r\n            [arr[i], arr[j]] = [arr[j], arr[i]];\r\n            i++;\r\n            j--;\r\n        } else if (VOWELS[arr[i]]) {\r\n            j--;\r\n        } else {\r\n            i++;\r\n        }\r\n    }\r\n    return arr.join('');\r\n};"
  }
}
