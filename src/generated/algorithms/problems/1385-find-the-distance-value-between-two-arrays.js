export default {
  "id": 1385,
  "name": "Find the Distance Value Between Two Arrays",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-the-distance-value-between-two-arrays",
  "relativeDir": "F/Find the Distance Value Between Two Arrays",
  "slug": "1385-find-the-distance-value-between-two-arrays",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 16,
    "python": 33,
    "javascript": 42
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int findTheDistanceValue(vector<int>& arr1, vector<int>& arr2, int d) {\r\n        sort(arr2.begin(),arr2.end());\r\n        int ans = 0;\r\n        for(int i : arr1){\r\n            int id = lower_bound(arr2.begin(),arr2.end(),i) - arr2.begin();\r\n            int closest = d+1;\r\n            if(id != arr2.size()){\r\n                closest = min(abs(arr2[id]-i), closest);\r\n            } \r\n            if(id != 0){\r\n                closest = min(abs(arr2[id-1]-i), closest);\r\n            }\r\n            if(closest > d) ans++;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n\tdef findTheDistanceValue(self, array1: List[int], array2: List[int], d: int) -> int:\r\n\r\n\t\tresult = 0\r\n\r\n\t\tarray2 = sorted(array2)\r\n\r\n\t\tfor num in array1:\r\n\r\n\t\t\tflag = True\r\n\r\n\t\t\tlow = 0\r\n\t\t\thigh = len(array2)-1\r\n\r\n\t\t\twhile low <= high:\r\n\r\n\t\t\t\tmid = (low + high) // 2\r\n\r\n\t\t\t\tif abs(array2[mid] - num) <= d:\r\n\t\t\t\t\tflag = False\r\n\t\t\t\t\tbreak\r\n\r\n\t\t\t\telif array2[mid] > num:\r\n\t\t\t\t\thigh = mid - 1\r\n\r\n\t\t\t\telse:\r\n\t\t\t\t\tlow = mid + 1;\r\n\r\n\t\t\tif flag == True:\r\n\r\n\t\t\t\tresult = result + 1\r\n\r\n\t\treturn result",
    "java": "// Runtime: 5 ms (Top 68.55%) | Memory: 44.9 MB (Top 25.67%)\r\nclass Solution {\r\n    public int findTheDistanceValue(int[] arr1, int[] arr2, int d) {\r\n        int x=0,val=0;\r\n        for(int i:arr1){\r\n            for(int j:arr2){\r\n                if(Math.abs(i-j)<=d){\r\n                   x--;\r\n                    break;\r\n                }\r\n            }\r\n            x++;\r\n        }\r\n      return x;\r\n    }\r\n}",
    "javascript": "// Runtime: 123 ms (Top 21.70%) | Memory: 45 MB (Top 6.60%)\r\n/**\r\n * @param {number[]} arr1\r\n * @param {number[]} arr2\r\n * @param {number} d\r\n * @return {number}\r\n */\r\nvar findTheDistanceValue = function(arr1, arr2, d) {\r\n    const arr2Sorted = arr2.sort((a, b) => a - b);\r\n    let dist = 0;\r\n\r\n    for (const num of arr1) {\r\n        if (isDistanceValid(num, d, arr2Sorted)) {\r\n            dist += 1;\r\n        }\r\n    }\r\n\r\n    return dist;\r\n};\r\n\r\nfunction isDistanceValid(number, dist, array) {\r\n    let left = 0;\r\n    let right = array.length - 1;\r\n\r\n    while (left <= right) {\r\n        const mid = Math.floor((right + left) / 2);\r\n\r\n        if (Math.abs(number - array[mid]) <= dist) {\r\n            return false;\r\n        }\r\n\r\n        if (array[mid] < number) {\r\n            left = mid + 1;\r\n        }\r\n\r\n        if (array[mid] > number) {\r\n            right = mid - 1;\r\n        }\r\n    }\r\n\r\n    return true;\r\n}"
  }
}
