export default {
  "id": 605,
  "name": "Can Place Flowers",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/can-place-flowers",
  "relativeDir": "C/Can Place Flowers",
  "slug": "0605-can-place-flowers",
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
    "python": 21,
    "javascript": 15
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool canPlaceFlowers(vector<int>& flowerbed, int n) {\r\n       int count = 1;\r\n    int result = 0;\r\n    for(int i=0; i<flowerbed.size(); i++) {\r\n        if(flowerbed[i] == 0) {\r\n            count++;\r\n        }else {\r\n            result += (count-1)/2;\r\n            count = 0;\r\n        }\r\n    }\r\n    if(count != 0) result += count/2;\r\n    return result>=n; \r\n    }\r\n};",
    "python": "class Solution:\r\n    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:\r\n        f = [0] + flowerbed + [0]\r\n\r\n        i, could_plant = 1, 0\r\n        while could_plant < n and i < len(f) - 1:\r\n            if f[i + 1]:\r\n                # 0 0 1 -> skip 3\r\n                i += 3\r\n            elif f[i]:\r\n                # 0 1 0 -> skip 2\r\n                i += 2\r\n            elif f[i - 1]:\r\n                # 1 0 0 -> skip 1\r\n                i += 1\r\n            else:\r\n                # 0 0 0 -> plant, becomes 0 1 0 -> skip 2\r\n                could_plant += 1\r\n                i += 2\r\n\r\n        return n <= could_plant",
    "java": "class Solution {\r\n    public boolean canPlaceFlowers(int[] flowerbed, int n) {\r\n        if(flowerbed[0] != 1){\r\n            n--;\r\n            flowerbed[0] = 1;   \r\n        }\r\n        for(int i = 1; i < flowerbed.length; i++){\r\n            if(flowerbed[i - 1] == 1 && flowerbed[i] == 1){\r\n                flowerbed[i - 1] = 0;\r\n                n++;\r\n            }\r\n            if(flowerbed[i - 1] != 1 && flowerbed[i] != 1){\r\n                flowerbed[i] = 1;\r\n                n--;\r\n            }\r\n        }\r\n        return (n <= 0) ? true: false;\r\n    }\r\n}",
    "javascript": "// Runtime: 106 ms (Top 46.81%) | Memory: 44 MB (Top 75.83%)\r\n/**\r\n * @param {number[]} flowerbed\r\n * @param {number} n\r\n * @return {boolean}\r\n */\r\nvar canPlaceFlowers = function(flowerbed, n) {\r\n    for(let i=0 ; i<flowerbed.length ; i++) {\r\n        if((i===0 || flowerbed[i-1]===0) && flowerbed[i]===0 && (i===flowerbed.length-1 || flowerbed[i+1]===0)) {\r\n            flowerbed[i]=1;\r\n            n--;\r\n        }\r\n    }\r\n    return n < 1;\r\n};"
  }
}
