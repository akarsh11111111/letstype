export default {
  "id": 1013,
  "name": "Partition Array Into Three Parts With Equal Sum",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum",
  "relativeDir": "P/Partition Array Into Three Parts With Equal Sum",
  "slug": "1013-partition-array-into-three-parts-with-equal-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 25,
    "python": 17,
    "javascript": 20
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tbool canThreePartsEqualSum(vector<int>& arr) {\r\n\t\tint sum=0;\r\n\t\tfor(auto i : arr)\r\n\t\t\tsum+=i;\r\n\t\tif(sum%3!=0)\r\n\t\t\treturn false;   //partition not possible\r\n\t\tint part=sum/3,temp=0,found=0;\r\n\t\tfor(int i=0;i<arr.size();i++){\r\n\t\t\ttemp+=arr[i];\r\n\t\t\tif(temp==part){\r\n\t\t\t\ttemp=0;\r\n\t\t\t\tfound++;\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn found>=3 ? true : false;\r\n\t}\r\n};\r\n\r\nfeel free to ask your doubts :)\r\nand pls upvote if it was helpful :)",
    "python": "# Runtime: 668 ms (Top 23.61%) | Memory: 21 MB (Top 37.82%)\r\nclass Solution:\r\n    def canThreePartsEqualSum(self, arr: List[int]) -> bool:\r\n        total = sum(arr)\r\n        if total % 3 != 0:\r\n            return False\r\n        ave = total // 3\r\n        stage = 0\r\n        add = 0\r\n        for i in arr[:-1]:\r\n            add += i\r\n            if add == ave:\r\n                stage +=1\r\n                add = 0\r\n            if stage == 2:\r\n                return True\r\n        return False",
    "java": "class Solution { \r\n     public boolean canThreePartsEqualSum(int[] arr) {\r\n        int sum = 0;\r\n        \r\n        for (Integer no : arr) {\r\n            sum += no;\r\n        }\r\n        if (sum % 3 != 0) {\r\n            return false;\r\n        }\r\n        sum = sum / 3;\r\n        int tempSum = 0;\r\n        int count = 0;\r\n\r\n        for (int i = 0; i < arr.length; i++) {\r\n            tempSum += arr[i];\r\n            if (tempSum == sum) {\r\n                count++;\r\n                tempSum = 0;\r\n            }\r\n        }\r\n\r\n        return count >= 3;\r\n    }\r\n}",
    "javascript": "// Runtime: 131 ms (Top 30.56%) | Memory: 46 MB (Top 85.19%)\r\nvar canThreePartsEqualSum = function(arr) {\r\n    const length = arr.length;\r\n    let sum =0, count = 0, partSum = 0;\r\n    for(let index = 0; index < length; index++) {\r\n        sum += arr[index];\r\n    }\r\n    if(sum%3 !== 0) return false;\r\n    partSum = sum/3;\r\n    sum = 0;\r\n    for(let index = 0; index < length; index++) {\r\n        sum += arr[index];\r\n        if(sum === partSum){\r\n            count++;\r\n            sum = 0;\r\n            if(count == 2 && index < length-1) return true;\r\n        }\r\n    }\r\n    return false;\r\n};"
  }
}
