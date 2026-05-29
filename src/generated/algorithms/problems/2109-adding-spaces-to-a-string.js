export default {
  "id": 2109,
  "name": "Adding Spaces to a String",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/adding-spaces-to-a-string",
  "relativeDir": "A/Adding Spaces to a String",
  "slug": "2109-adding-spaces-to-a-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 15,
    "python": 13,
    "javascript": 11
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string addSpaces(string s, vector<int>& spaces) {\r\n        \r\n        int i,n=spaces.size(),m=s.size(),j;\r\n        string ans=\"\";\r\n        i=0;\r\n        j=0;\r\n        \r\n        //jth pointer for current index of spaces vector\r\n        //ith pointer for current index of our answer string\r\n        while(i<m)\r\n        {\r\n            //if at our current index i is equals to spaces[j] which means we have space at this index,so we add space right here\r\n            if(j<n&&i==spaces[j])\r\n            {\r\n                ans+=\" \";\r\n                j++;\r\n                //incrementing j to get next space index location\r\n            }\r\n            ans+=s[i];\r\n            i++;\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n};",
    "python": "// Runtime: 460 ms (Top 99.07%) | Memory: 53.10 MB (Top 90.93%)\r\n\r\nclass Solution:\r\n    def addSpaces(self, s: str, spaces: List[int]) -> str:\r\n        \r\n        arr = []\r\n        prev = 0\r\n        for space in spaces:\r\n            arr.append(s[prev:space])\r\n            prev = space\r\n        arr.append(s[space:])\r\n       \r\n        return \" \".join(arr)",
    "java": "// Runtime: 24 ms (Top 68.74%) | Memory: 81.70 MB (Top 14.26%)\r\n\r\nclass Solution {\r\n    public String addSpaces(String s, int[] spaces) {\r\n        StringBuilder sb=new StringBuilder();\r\n        int k=0;\r\n        for(int i=0;i<spaces.length;i++){\r\n            sb.append(s.substring(k,spaces[i]));\r\n            k=spaces[i];\r\n            sb.append(\" \");\r\n        }\r\n        sb.append(s.substring(k,s.length()));\r\n        return sb.toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 206 ms (Top 91.18%) | Memory: 83.4 MB (Top 96.08%)\r\n/**\r\n * @param {string} s\r\n * @param {number[]} spaces\r\n * @return {string}\r\n */\r\nvar addSpaces = function(s, spaces) {\r\n    let words = spaces.map((space, index) => s.slice(index == 0 ? 0 : spaces[index-1], space));\r\n    words.push(s.slice(spaces[spaces.length-1]));\r\n    return words.join(' ');\r\n};"
  }
}
