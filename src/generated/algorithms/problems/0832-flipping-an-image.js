export default {
  "id": 832,
  "name": "Flipping an Image",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/flipping-an-image",
  "relativeDir": "F/Flipping an Image",
  "slug": "0832-flipping-an-image",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 25,
    "python": 3,
    "javascript": 26
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<vector<int>> flipAndInvertImage(vector<vector<int>>& image) {\r\n        int n = image.size();\r\n        vector<int >ans;\r\n        for(int i=0;i<image.size();i++){\r\n            ans=image[i];\r\n            reverse(ans.begin(),ans.end());\r\n            image[i]=ans;\r\n        }\r\n        for(int i = 0; i < n; i++){\r\n            for(int j = 0; j < n; j++){\r\n                if(image[i][j] == 0){\r\n                    image[i][j] = 1;\r\n                }\r\n                else{\r\n                    image[i][j] = 0;\r\n                }\r\n            }\r\n        }\r\n        return image;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def flipAndInvertImage(self, image: List[List[int]]) -> List[List[int]]:\r\n        return [[(1 - i) for i in row[::-1]] for row in image]",
    "java": "// Runtime: 1 ms (Top 81.21%) | Memory: 44.9 MB (Top 51.92%)\r\nclass Solution {\r\n    public int[][] flipAndInvertImage(int[][] image) {\r\n        for (int i = 0; i < image.length; ++i) {\r\n            flip(image[i]);\r\n        }\r\n        for (int i = 0; i < image.length; ++i) {\r\n            for (int j = 0; j < image[i].length; ++j) {\r\n                image[i][j] = image[i][j] == 1 ? 0:1;\r\n            }\r\n        }\r\n        return image;\r\n    }\r\n    public static void flip(int[] row) {\r\n        int i = 0;\r\n        int j = row.length - 1;\r\n        while (i < j) {\r\n            int temp = row[i];\r\n            row[i] = row[j];\r\n            row[j] = temp;\r\n            ++i;\r\n            --j;\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 83 ms (Top 79.20%) | Memory: 44.5 MB (Top 14.19%)\r\nvar flipAndInvertImage = function(image) {\r\n    const resversedArr = []\r\n    for(let i=0; i<image.length; i++){\r\n         resversedArr.push(resverseArr(image[i]));\r\n    }\r\n  return resversedArr;\r\n};\r\n\r\nfunction resverseArr(arr){\r\n    const lastIndex = arr.length -1, reversedArr = [];\r\n    for(i=0; i<=lastIndex; i++){\r\n        if(arr[i] !== arr[lastIndex-i]){\r\n            reversedArr[i] = arr[lastIndex-i] === 0 ? 1 : 0;\r\n            reversedArr[lastIndex-i] = arr[i] === 0 ? 1 : 0;\r\n        }else{\r\n           reversedArr[i] = arr[i] === 0 ? 1 : 0;\r\n        }\r\n    }\r\n    return reversedArr;\r\n}```\r\n\r\n/*\r\nRuntime: 68 ms, faster than 96.46% of JavaScript online submissions for Flipping an Image.\r\nMemory Usage: 44.4 MB, less than 16.91% of JavaScript online submissions for Flipping an Image.\r\n*/"
  }
}
