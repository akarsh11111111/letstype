export default {
  "id": 335,
  "name": "Self Crossing",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/self-crossing",
  "relativeDir": "S/Self Crossing",
  "slug": "0335-self-crossing",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 21,
    "python": 9,
    "javascript": 21
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool isSelfCrossing(vector<int>& distance) {\r\n        if (distance.size() <= 3) return false; //only can have intersection with more than 4 lines\r\n\r\n        distance.insert(distance.begin(), 0); //for the edge case: line i intersect with line i-4 at (0, 0)\r\n        for (int i = 3; i < distance.size(); i++) {\r\n            //check line i-3\r\n            if (distance[i - 2] <= distance[i] && distance[i - 1] <= distance[i - 3]) return true;\r\n\r\n            //check line i-5\r\n            if (i >= 5) {\r\n                if (distance[i - 1] <= distance[i - 3] && distance[i - 1] >= distance[i - 3] - distance[i - 5] \r\n                    && distance[i - 2] >= distance[i - 4] && distance[i - 2] <= distance[i - 4] + distance[i])\r\n                    return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def isSelfCrossing(self, x):\r\n        n = len(x)\r\n        if n < 4: return False\r\n        for i in range(3, n):\r\n            if x[i] >= x[i-2] and x[i-1] <= x[i-3]: return True\r\n            if i >= 4 and x[i-1]==x[i-3] and x[i]+x[i-4]>=x[i-2]: return True\r\n            if i >= 5 and 0<=x[i-2]-x[i-4]<=x[i] and 0<=x[i-3]-x[i-1]<=x[i-5]: return True\r\n        return False",
    "java": "class Solution {\r\n\r\npublic boolean isSelfCrossing(int[] x) {\r\nboolean arm = false;\r\nboolean leg = false;\r\nfor (int i = 2; i < x.length; ++i) {\r\nint a = f(x, i - 2) - f(x, i - 4);\r\nint b = f(x, i - 2);\r\n\r\nif (arm && x[i] >= b)          return true;  // cross [i - 2]\r\nif (leg && x[i] >= a && a > 0) return true;  // cross [i - 4]\r\n\r\nif (x[i] < a)       arm = true;\r\nelse if (x[i] <= b) leg = true;\r\n}\r\nreturn false;\r\n}\r\nprivate int f(int[] x, int index) {\r\nreturn (index < 0) ? 0 : x[index];\r\n}\r\n}",
    "javascript": "class Solution {\r\n\r\npublic boolean isSelfCrossing(int[] x) {\r\nboolean arm = false;\r\nboolean leg = false;\r\nfor (int i = 2; i < x.length; ++i) {\r\nint a = f(x, i - 2) - f(x, i - 4);\r\nint b = f(x, i - 2);\r\n\r\nif (arm && x[i] >= b)          return true;  // cross [i - 2]\r\nif (leg && x[i] >= a && a > 0) return true;  // cross [i - 4]\r\n\r\nif (x[i] < a)       arm = true;\r\nelse if (x[i] <= b) leg = true;\r\n}\r\nreturn false;\r\n}\r\nprivate int f(int[] x, int index) {\r\nreturn (index < 0) ? 0 : x[index];\r\n}\r\n}"
  }
}
