export default {
  "id": 1147,
  "name": "Longest Chunked Palindrome Decomposition",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-chunked-palindrome-decomposition",
  "relativeDir": "L/Longest Chunked Palindrome Decomposition",
  "slug": "1147-longest-chunked-palindrome-decomposition",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 10,
    "python": 19,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 6 ms (Top 43.33%) | Memory: 7.90 MB (Top 47.14%)\r\n\r\nclass Solution {\r\npublic:\r\n    int longestDecomposition(string text) {\r\n        int ans=0,i=0,j=text.size()-1;\r\n        string s=\"\",t=\"\";\r\n        \r\n        while(i<j){\r\n            s+=text[i];\r\n            t+=text[j];\r\n            string rev=t;\r\n            reverse(rev.begin(),rev.end());\r\n            \r\n            if(s==rev){\r\n                ans++;\r\n                t=\"\";\r\n                s=\"\";\r\n            }\r\n            \r\n            i++;\r\n            j--;\r\n        }\r\n        ans*=2;\r\n        \r\n        if(i==j || s.size()!=0)ans++;\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 82 ms (Top 23.89%) | Memory: 13.9 MB (Top 78.76%)\r\n\r\nclass Solution:\r\n    def longestDecomposition(self, text: str) -> int:\r\n        left, right = 0, len(text) - 1\r\n        sol, last_left = 0, 0\r\n        a, b = deque(), deque()\r\n        while right > left:\r\n            a.append(text[left])\r\n            b.appendleft(text[right])\r\n            if a == b:\r\n                sol += 2\r\n                last_left = left\r\n                a, b = deque(), deque()\r\n            right -= 1\r\n            left += 1\r\n        if left == right or left > last_left + 1:\r\n            sol += 1\r\n        return max(sol, 1)",
    "java": "class Solution {\r\n\r\n public int longestDecomposition(String text) {\r\n    int n = text.length();   \r\n    for (int i = 0; i < n/2; i++) \r\n        if (text.substring(0, i + 1).equals(text.substring(n-1-i, n))) \r\n            return 2+longestDecomposition(text.substring(i+1, n-1-i));\r\n    return (n==0)?0:1;\r\n}\r\n}",
    "javascript": "var longestDecomposition = function(text) {\r\n    var i = 1\r\n    var output = 0\r\n    while(i < text.length)\r\n    {\r\n        if(text.substring(0,i) == text.substring(text.length-i))\r\n        {\r\n            output += 2 //add 2 to simulate adding to both sides of output array\r\n            text = text.substring(i,text.length-i) //cut text to simulate popping off of both sides\r\n            i=1\r\n        } else {\r\n            i++\r\n        }\r\n    }\r\n    \r\n    return text ? output + 1 : output //if there's any text leftover that didn't have a match, it's the middle and would add 1 to output array\r\n}"
  }
}
