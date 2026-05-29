export default {
  "id": 2129,
  "name": "Capitalize the Title",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/capitalize-the-title",
  "relativeDir": "C/Capitalize the Title",
  "slug": "2129-capitalize-the-title",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 26,
    "python": 9,
    "javascript": 11
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string capitalize(string s){\r\n        transform(s.begin(), s.end(), s.begin(), ::tolower);\r\n        if(s.length() <= 2){\r\n            return s;\r\n        }\r\n        s[0] = s[0] - 'a' + 'A';\r\n        return s;\r\n    }\r\n    string capitalizeTitle(string title) {\r\n        string str = \"\";\r\n        string ans = \"\";\r\n        for(int i = 0; i < title.length(); i++){\r\n            if(title[i] != ' '){\r\n                str.push_back(title[i]);\r\n            }\r\n            else{\r\n                str = capitalize(str);\r\n                ans += str + \" \";\r\n                str = \"\";\r\n            }\r\n        }\r\n        str = capitalize(str);\r\n        ans += str;\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def capitalizeTitle(self, title: str) -> str:\r\n        li = title.split()\r\n        for i,l in enumerate(li):\r\n            if len(l) <= 2:\r\n                li[i] = l.lower()\r\n            else:\r\n                li[i] = l[0].upper() + l[1:].lower()\r\n        return ' '.join(li)",
    "java": "// Runtime: 1 ms (Top 99.1%) | Memory: 41.07 MB (Top 90.8%)\r\n\r\nclass Solution {\r\n\tpublic String capitalizeTitle(String title) {\r\n\r\n\t\tchar[] ch = title.toCharArray();\r\n\t\tint len = ch.length;\r\n\r\n\t\tfor(int i = 0; i < len; ++i) {\r\n\r\n\t\t\tint firstIndex = i; // store the first index of the word\r\n\r\n\t\t\twhile(i < len && ch[i] != ' ') {\r\n\t\t\t\tch[i] = Character.toLowerCase(ch[i]); // converting the character at ith index to lower case ony by one\r\n\t\t\t\t++i;\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t// if word is of length greater than 2, then turn the first character of the word to upper case\r\n\t\t\tif(i - firstIndex > 2) {\r\n\t\t\t\tch[firstIndex] =  Character.toUpperCase(ch[firstIndex]); // converting the first character of the word to upper case\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn String.valueOf(ch); // return the final result by converting the char array into string\r\n\t}\r\n}",
    "javascript": "var capitalizeTitle = function(title) {\r\n    const words = title.toLowerCase().split(' ');\r\n    \r\n    for (let i = 0; i < words.length; i++) {\r\n        if (words[i].length > 2) {\r\n            words[i] = words[i][0].toUpperCase() + words[i].slice(1);\r\n        }\r\n    }\r\n    \r\n    return words.join(' ');\r\n};"
  }
}
