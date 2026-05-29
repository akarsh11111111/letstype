export default {
  "id": 331,
  "name": "Verify Preorder Serialization of a Binary Tree",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree",
  "relativeDir": "V/Verify Preorder Serialization of a Binary Tree",
  "slug": "0331-verify-preorder-serialization-of-a-binary-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 21,
    "python": 13,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 10 ms (Top 30.76%) | Memory: 6.8 MB (Top 63.53%)\r\nclass Solution {\r\npublic:\r\n    bool isValidSerialization(string preorder) {\r\n        stringstream s(preorder);\r\n        string str;\r\n        int slots=1;\r\n        while(getline(s, str, ',')) {\r\n            if(slots==0) return 0;\r\n            if(str==\"#\") slots--;\r\n            else slots++;\r\n        }\r\n        return slots==0;\r\n    }\r\n};",
    "python": "# Runtime: 77 ms (Top 11.09%) | Memory: 13.8 MB (Top 99.05%)\r\nclass Solution:\r\n    def isValidSerialization(self, preorder: str) -> bool:\r\n        nodes = preorder.split(',')\r\n        counter=1\r\n        for i, node in enumerate(nodes):\r\n            if node != '#':\r\n                counter+=1\r\n            else:\r\n                if counter <= 1 and i != len(nodes) - 1:\r\n                    return False\r\n                counter-=1\r\n        return counter == 0",
    "java": "class Solution {\r\n    public boolean isValidSerialization(String preorder) {\r\n        String[] strs = preorder.split(\",\");\r\n        //In starting we have one vacany for root\r\n        int vacancy = 1;\r\n        \r\n        for(String str : strs){\r\n            \r\n            if(--vacancy < 0 ) return false;\r\n            \r\n            // whenever we encounter a new node vacancy decreases by 1 and  left and right two vacancy for                   that node will added in total\r\n            if(!str.equals(\"#\"))            \r\n                vacancy += 2;\r\n           \r\n        }\r\n        \r\n        \r\n        return vacancy == 0;\r\n        \r\n    }\r\n}",
    "javascript": "// Runtime: 63 ms (Top 38.1%) | Memory: 43.90 MB (Top 52.3%)\r\n\r\n/**\r\n * @param {string} preorder\r\n * @return {boolean}\r\n */\r\nvar isValidSerialization = function(preorder) {\r\n    let balance = 1\r\n    for(const node of preorder.split(','))\r\n        if (balance > 0)\r\n            if (node === '#') --balance\r\n            else ++balance\r\n        else return false\r\n    return balance < 1\r\n}"
  }
}
