export default {
  "id": 1389,
  "name": "Create Target Array in the Given Order",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/create-target-array-in-the-given-order",
  "relativeDir": "C/Create Target Array in the Given Order",
  "slug": "1389-create-target-array-in-the-given-order",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "python": 42,
    "javascript": 15
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tvector<int> createTargetArray(vector<int>& nums, vector<int>& index) {\r\n\r\n\t\tvector<int> ans;\r\n\r\n\t\tfor(int i=0 ; i<nums.size() ; i++){\r\n\t\t\tans.insert(ans.begin() + index[i], nums[i]);\r\n\t\t}\r\n\r\n\t\treturn ans;\r\n\t}\r\n};",
    "python": "class Solution:\r\n    def createTargetArray(self, nums, index):\r\n        \r\n        def merge(arr, low, mid, high):\r\n            L, R = arr[low:mid+1], arr[mid+1:high+1]\r\n            i = j = 0\r\n            k = low\r\n            \r\n            while i < len(L) and j < len(R):\r\n                if L[i][0] + j >= R[j][0]:\r\n                    arr[k] = R[j]\r\n                    j += 1\r\n                else:\r\n                    L[i][0] += j\r\n                    arr[k] = L[i]\r\n                    i += 1\r\n                k += 1\r\n            \r\n            while i < len(L):\r\n                L[i][0] += j\r\n                arr[k] = L[i]\r\n                i += 1; k += 1\r\n                \r\n            while j < len(R):\r\n                arr[k] = R[j]\r\n                j += 1; k += 1\r\n            \r\n        \r\n        def mergeSort(arr, low, high):\r\n            if low < high:\r\n                mid = (low + high) // 2\r\n                mergeSort(arr, low, mid)\r\n                mergeSort(arr, mid + 1, high)\r\n                merge(arr, low, mid, high)\r\n                \r\n        arr = [[index[i], nums[i]] for i in range(len(nums))]\r\n        mergeSort(arr, 0, len(nums) - 1)\r\n        \r\n        for x in arr:\r\n            nums[x[0]] = x[1]\r\n        \r\n        return nums",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @param {number[]} index\r\n * @return {number[]}\r\n */\r\nvar createTargetArray = function(nums, index) {\r\n   Array.prototype.insert = function ( index, item ) {\r\n    this.splice( index, 0, item );\r\n    };\r\n    let result=[]\r\n    for(let i=0;i<nums.length;i++){\r\n        result.insert(index[i],nums[i]);\r\n    }\r\n    return result;\r\n};"
  }
}
