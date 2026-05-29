export default {
  "id": 1033,
  "name": "Moving Stones Until Consecutive",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/moving-stones-until-consecutive",
  "relativeDir": "M/Moving Stones Until Consecutive",
  "slug": "1033-moving-stones-until-consecutive",
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
    "python": 10,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 6.4 MB (Top 13.82%)\r\nclass Solution {\r\npublic:\r\n\r\n    vector<int> numMovesStones(int a, int b, int c) {\r\n\r\n        vector<int> arr = {a, b, c};\r\n\r\n        sort(arr.begin(), arr.end());\r\n\r\n        // find minimum moves\r\n\r\n        int mini = 0;\r\n\r\n        if(arr[1] - arr[0] == 1 && arr[2] - arr[1] == 1)\r\n        {\r\n            mini = 0;\r\n        }\r\n        else if(arr[1] - arr[0] <= 2 || arr[2] - arr[1] <= 2)\r\n        {\r\n            mini = 1;\r\n        }\r\n        else\r\n        {\r\n            mini = 2;\r\n        }\r\n\r\n        // find maximum moves\r\n\r\n        int maxi = (arr[1] - arr[0] - 1) + (arr[2] - arr[1] - 1);\r\n\r\n        return {mini, maxi};\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numMovesStones(self, a: int, b: int, c: int) -> List[int]:\r\n        a,b,c = sorted([a,b,c])\r\n        d1 = abs(b-a)-1 \r\n        d2 = abs(c-b)-1\r\n        mi = 2\r\n        if d1 == 0 and d2 == 0: mi = 0\r\n        elif d1 <= 1 or d2 <= 1: mi =1    \r\n        ma = c - a - 2\r\n        return [mi,ma]",
    "java": "// Runtime: 2 ms (Top 43.75%) | Memory: 41.9 MB (Top 57.50%)\r\nclass Solution {\r\n    public int[] numMovesStones(int a, int b, int c) {\r\n        int[] arr ={a,b,c};\r\n        int[] arr2 = {a,b,c};\r\n        int maximum = findMaximum(arr);\r\n        int minimum = findMinimum(maximum,arr2);\r\n        return new int[]{minimum,maximum};\r\n    }\r\n    public int findMaximum(int[] arr){\r\n        Arrays.sort(arr);\r\n        int count = 0;\r\n        if(arr[0] == (arr[1]-1) && arr[1] == (arr[2] -1) ) return count;\r\n        if(arr[0] == arr[1]-1){\r\n            arr[2]--;\r\n            count++;\r\n        }\r\n        else{\r\n            arr[0]++;\r\n            count++;\r\n        }\r\n        return count + findMaximum(arr);\r\n\r\n    }\r\n\r\n    public int findMinimum(int max,int[] arr){\r\n        Arrays.sort(arr);\r\n        if(max == 0) return 0;\r\n        else if(Math.abs(arr[0]-arr[1]) >2 && Math.abs(arr[1]-arr[2]) >2 ) return 2;\r\n        else return 1;\r\n    }\r\n}",
    "javascript": "// Runtime: 91 ms (Top 47.37%) | Memory: 42.5 MB (Top 31.58%)\r\nvar numMovesStones = function(a, b, c) {\r\n    const nums = [a, b, c];\r\n\r\n    nums.sort((a, b) => a - b);\r\n\r\n    const leftGap = nums[1] - nums[0] - 1;\r\n    const rightGap = nums[2] - nums[1] - 1;\r\n\r\n    const maxMoves = leftGap + rightGap;\r\n\r\n    if (leftGap == 0 && rightGap == 0) return [0, 0];\r\n    if (leftGap > 1 && rightGap > 1) return [2, maxMoves];\r\n    return [1, maxMoves];\r\n};"
  }
}
