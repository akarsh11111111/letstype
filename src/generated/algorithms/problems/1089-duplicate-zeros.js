export default {
  "id": 1089,
  "name": "Duplicate Zeros",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/duplicate-zeros",
  "relativeDir": "D/Duplicate Zeros",
  "slug": "1089-duplicate-zeros",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 22,
    "python": 14,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 87 ms (Top 26.83%) | Memory: 9.5 MB (Top 93.67%)\r\nclass Solution {\r\npublic:\r\n    void duplicateZeros(vector<int>& arr) {\r\n        for(int i=0;i<arr.size();i++)\r\n        {\r\n          if(arr[i]==0)\r\n          {\r\n              arr.pop_back();\r\n              arr.insert(arr.begin()+i,0);\r\n              i++;\r\n          }\r\n            }\r\n\r\n    }\r\n};",
    "python": "# Runtime: 107 ms (Top 60.66%) | Memory: 14.9 MB (Top 70.68%)\r\nclass Solution:\r\n    def duplicateZeros(self, arr: List[int]) -> None:\r\n        \"\"\"\r\n        Do not return anything, modify arr in-place instead.\r\n        \"\"\"\r\n        l = len(arr)\r\n        i,c=0,0\r\n        while i<l:\r\n            if arr[i]==0:\r\n                arr.insert(i+1,0)\r\n                i+=1\r\n                arr.pop()\r\n            i+=1",
    "java": "class Solution {\r\n    \r\n    //  Time Complexity = O(n)\r\n    //  Space Complexity = O(1)\r\n    \r\n    public void duplicateZeros(int[] arr) {\r\n        \r\n        //  Loop through the array\r\n        for(int i = 0; i < arr.length; i++) {\r\n        \r\n        //  Trigger Condition     \r\n            if(arr[i] ==0) {\r\n                int j;      // auxilliary variable for swapping \r\n                for(j = arr.length-2; j>=i+1; j--) {\r\n                    arr[j+1] = arr[j];      //  Shift each element by one space\r\n                }\r\n                arr[j+1] = 0;               //  Duplicating the zero on the consecutive index of i\r\n                i++;                        //  Skipping the duplicated zero index in the array \r\n            }\r\n        }\r\n    }       \r\n}",
    "javascript": "/**\r\n * @param {number[]} arr\r\n * @return {void} Do not return anything, modify arr in-place instead.\r\n */\r\nvar duplicateZeros = function(arr) {\r\n    // Variables\r\n    const originalLength = arr.length;\r\n    \r\n    // Iterate over all the numbers in 'arr', if the number is 0 we duplicate it and skip the next loop iteration to prevent an overflow.\r\n    for (let idx = 0; idx < arr.length; idx ++)\r\n    {\r\n      const number = arr[idx];\r\n      if (number === 0 )\r\n      {\r\n        arr.splice(idx, 0, 0);\r\n        idx += 1;\r\n      };\r\n    };\r\n    \r\n    // Here we restore the array to its original length.\r\n    return (arr.length = originalLength);\r\n};"
  }
}
