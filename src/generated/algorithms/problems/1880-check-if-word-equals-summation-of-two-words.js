export default {
  "id": 1880,
  "name": "Check if Word Equals Summation of Two Words",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-word-equals-summation-of-two-words",
  "relativeDir": "C/Check if Word Equals Summation of Two Words",
  "slug": "1880-check-if-word-equals-summation-of-two-words",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 19,
    "python": 19,
    "javascript": 25
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool isSumEqual(string firstWord, string secondWord, string targetWord) {\r\n        int first=0,second=0,target=0;\r\n        for(int i=0;i<firstWord.size();i++)\r\n            first=first*10 + (firstWord[i]-'a');\r\n        \r\n        for(int i=0;i<secondWord.size();i++)\r\n            second=second*10 +(secondWord[i]-'a');\r\n        \r\n        for(int i=0;i<targetWord.size();i++)\r\n            target=target*10 +(targetWord[i]-'a');\r\n        \r\n        \r\n        return first+second == target;\r\n    }\r\n};",
    "python": "# Runtime: 40 ms (Top 58.1%) | Memory: 16.21 MB (Top 73.9%)\r\n\r\nclass Solution:\r\n    def isSumEqual(self, firstWord: str, secondWord: str, targetWord: str) -> bool:\r\n        x=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']\r\n        a=\"\"\r\n        for i in firstWord:\r\n            a=a+str(x.index(i))\r\n        \r\n        b=\"\"\r\n        for i in secondWord:\r\n            b=b+str(x.index(i))\r\n\r\n        c=\"\"\r\n        for i in targetWord:\r\n            c=c+str(x.index(i))\r\n        if int(a)+int(b)==int(c):\r\n            return True\r\n        return False",
    "java": "class Solution {\r\n    public boolean isSumEqual(String firstWord, String secondWord, String targetWord) {\r\n        int sumfirst=0, sumsecond=0, sumtarget=0;\r\n        for(char c : firstWord.toCharArray()){\r\n            sumfirst += c-'a';\r\n            sumfirst *= 10;\r\n        }\r\n        for(char c : secondWord.toCharArray()){\r\n            sumsecond += c-'a';\r\n            sumsecond *= 10;\r\n        }\r\n        for(char c : targetWord.toCharArray()){\r\n            sumtarget += c-'a';\r\n            sumtarget *= 10;\r\n        }\r\n       \r\n        return (sumfirst + sumsecond) == sumtarget;\r\n    }\r\n}",
    "javascript": "var isSumEqual = function(firstWord, secondWord, targetWord) {\r\n    let obj = {\r\n        'a' : '0',\r\n        \"b\" : '1',\r\n        \"c\" : '2',\r\n        \"d\" : '3',\r\n        \"e\" : '4',\r\n        'f' : '5',\r\n        'g' : '6',\r\n        'h' : '7',\r\n        'i' : '8', \r\n        \"j\" : '9'\r\n    }\r\n    let first = \"\", second = \"\", target = \"\"\r\n    for(let char of firstWord){\r\n        first += obj[char]\r\n    }\r\n    for(let char of secondWord){\r\n        second += obj[char]\r\n    }\r\n    for(let char of targetWord){\r\n        target += obj[char]\r\n    }\r\n    return parseInt(first) + parseInt(second) === parseInt(target)\r\n};"
  }
}
