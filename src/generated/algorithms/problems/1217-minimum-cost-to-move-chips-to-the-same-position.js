export default {
  "id": 1217,
  "name": "Minimum Cost to Move Chips to The Same Position",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position",
  "relativeDir": "M/Minimum Cost to Move Chips to The Same Position",
  "slug": "1217-minimum-cost-to-move-chips-to-the-same-position",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 15,
    "python": 10,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 9 ms (Top 9.81%) | Memory: 7.4 MB (Top 10.15%)\r\nclass Solution {\r\npublic:\r\n    int minCostToMoveChips(vector<int>& position) {\r\n        int even=0,odd=0;\r\n        for(int i=0;i<position.size();i++)\r\n        {\r\n                if(position[i]%2==0)\r\n                    even++;\r\n                else\r\n                    odd++;\r\n\r\n        }\r\n        return min(odd,even);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minCostToMoveChips(self, position: List[int]) -> int:\r\n        count_even=0\r\n        count_odd=0\r\n        for i in position:\r\n            if i%2==0:\r\n                count_even+=1\r\n            else:\r\n                count_odd+=1\r\n        return min(count_even,count_odd)",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 41.8 MB (Top 34.98%)\r\nclass Solution {\r\n    public int minCostToMoveChips(int[] position) {\r\n        int even = 0;\r\n        int odd = 0;\r\n        for(int i=0;i<position.length;i++){\r\n            if(position[i]%2==0){\r\n                even++;\r\n            }else{\r\n                odd++;\r\n            }\r\n        }\r\n        return Math.min(even,odd);\r\n    }\r\n}",
    "javascript": "// Runtime: 101 ms (Top 27.52%) | Memory: 44.6 MB (Top 5.50%)\r\nvar minCostToMoveChips = function(position) {\r\n    const hashMap = new Map();\r\n    let odd = 0, even = 0;\r\n    for(const chip of position){\r\n        if(hashMap.has(chip)) hashMap.set(chip, hashMap.get(chip)+1);\r\n        else hashMap.set(chip, 1);\r\n    }\r\n    for(const [key, value] of hashMap){\r\n        if(key%2===0) even+=value;\r\n        else odd+=value;\r\n    }\r\n    return Math.min(odd, even);\r\n};"
  }
}
