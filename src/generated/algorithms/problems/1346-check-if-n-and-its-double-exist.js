export default {
  "id": 1346,
  "name": "Check If N and Its Double Exist",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-n-and-its-double-exist",
  "relativeDir": "C/Check If N and Its Double Exist",
  "slug": "1346-check-if-n-and-its-double-exist",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 15,
    "python": 25,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool checkIfExist(vector<int>& arr) {\r\n        \r\n        sort(arr.begin(), arr.end());\r\n        \r\n        int i =0;\r\n            int j  = 1;\r\n        int n = arr.size();\r\n        while(i<n && j<n)\r\n        {\r\n                \r\n                if(  arr[i]<0 && arr[j]<0 && arr[i]==2*arr[j])return true;\r\n            \r\n                else if(2*arr[i]<arr[j])\r\n                {\r\n                    \r\n                    i++;\r\n                  \r\n\r\n                \r\n                }\r\n            else if(2*arr[i]>arr[j])j++;\r\n            else if(i==j && arr[i]==0){\r\n            i++;\r\n                j++;\r\n            }\r\n            \r\n            else return true;\r\n        \r\n        }\r\n        return false;\r\n        \r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def checkIfExist(self, arr):\r\n        \"\"\"\r\n        :type arr: List[int]\r\n        :rtype: bool\r\n        \"\"\"\r\n        '''\r\n            执行用时：24 ms, 在所有 Python 提交中击败了59.63%的用户\r\n            内存消耗：13 MB, 在所有 Python 提交中击败了58.72%的用户\r\n        '''\r\n        arr = sorted(arr) # 排序\r\n        for i in range(len(arr) - 1): # 只要搜寻 n - 1 个，因为最后一个数不会有倍数出现\r\n            l = 0\r\n            r = len(arr) - 1\r\n            while (l <= r):\r\n                mid = int((l + r) / 2) # 目前位置\r\n                val1 = arr[mid] # 目前位置的数值\r\n                val2 = arr[i] * 2 # 要寻找的目标\r\n                if(val1 == val2 and mid != i): # arr[mid] 必須和 arr[i] * 2 且不同位置\r\n                    return True\r\n                elif(val2 < val1): # 目标在目前位置的左边，所以要往左边找\r\n                    r = mid - 1\r\n                else: # 目标在目前位置的右边，所以要往右边找\r\n                    l = mid + 1\r\n        return False",
    "java": "// Runtime: 2 ms (Top 76.57%) | Memory: 42.30 MB (Top 45.56%)\r\n\r\nclass Solution {\r\n    public boolean checkIfExist(int[] arr) {\r\n\t    int n = arr.length;\r\n        for (int i = 0; i < n; i++) \r\n            for (int j = 0; j < n; j++) \r\n                if (i != j && arr[i] == 2 * arr[j]) \r\n                    return true;\r\n\r\n        return false;\r\n    }\r\n}\r\n\r\n// TC: O(n ^ 2), SC: O(1)",
    "javascript": "/**\r\n * @param {number[]} arr\r\n * @return {boolean}\r\n */\r\nvar checkIfExist = function(arr) {\r\n    for(let i=0;i<arr.length;i++){\r\n        for(let j=0;j<arr.length;j++){\r\n            if ( i!==j && arr[i]==2*arr[j]){\r\n                return true;\r\n            }\r\n        }\r\n    }\r\n    return false;\r\n};"
  }
}
