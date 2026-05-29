export default {
  "id": 670,
  "name": "Maximum Swap",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-swap",
  "relativeDir": "M/Maximum Swap",
  "slug": "0670-maximum-swap",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 20,
    "python": 22,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 5.8 MB (Top 87.89%)\r\nclass Solution {\r\npublic:\r\n    int maximumSwap(int num) {\r\n        string st_n=to_string(num);\r\n        int maxNum=-1,maxIdx=-1;\r\n        int leftidx=-1,rightidx=-1;\r\n        for(int i=st_n.size()-1;i>=0;i--)\r\n        {\r\n            if(st_n[i]>maxNum)\r\n            {\r\n                maxNum=st_n[i];\r\n                maxIdx=i;\r\n                continue;\r\n            }\r\n\r\n            if(st_n[i]<maxNum)\r\n            {\r\n                leftidx=i;\r\n                rightidx=maxIdx;\r\n            }\r\n        }\r\n        if(leftidx==-1)\r\n            return num;\r\n\r\n        swap(st_n[leftidx],st_n[rightidx]);\r\n        return stoi(st_n);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maximumSwap(self, num: int) -> int:\r\n        digits = [int(x) for x in str(num)]\r\n        n = len(digits)\r\n        \r\n        for i in range(n):\r\n            maxx = digits[i]\r\n            indx = i\r\n            \r\n            for j in range(i+1,n):\r\n                if digits[j]>=maxx and digits[j]!=digits[i]:\r\n                    maxx = digits[j]\r\n                    indx = j\r\n                                        \r\n            if indx!=i:\r\n                digits[i],digits[indx] = digits[indx],digits[i]\r\n                    \r\n                #only one swap allowed\r\n                return \"\".join([str(x) for x in digits])\r\n                \r\n        #already sorted\r\n        return num",
    "java": "// Runtime: 1 ms (Top 90.26%) | Memory: 41.4 MB (Top 23.64%)\r\nclass Solution {\r\n    public int maximumSwap(int num) {\r\n        char str[]=String.valueOf(num).toCharArray();\r\n        char arr[]=str.clone();\r\n        Arrays.sort(arr);\r\n        int i=0;\r\n        int j=str.length-1;\r\n        while(i<str.length && j>=0 && arr[j]==str[i]){i++;j--;}\r\n        int search=j;\r\n        if(i==str.length) return num;\r\n        j=str.length-1;\r\n        while(arr[search]!=str[j]){j--;}\r\n\r\n        char c=str[i];\r\n        str[i]=str[j];\r\n        str[j]=c;\r\n        return Integer.parseInt(new String(str));\r\n    }\r\n}",
    "javascript": "var maximumSwap = function(num) {\r\n\tconst nums = `${num}`.split('');\r\n\r\n\tfor (let index = 0; index < nums.length - 1; index++) {\r\n\t\tconst current = nums[index];\r\n\t\tconst diff = nums.slice(index + 1);\r\n\t\tconst max = Math.max(...diff);\r\n\r\n\t\tif (current >= max) continue;\r\n\t\tconst swapIndex = index + diff.lastIndexOf(`${max}`) + 1;\r\n\t\t[nums[index], nums[swapIndex]] = [nums[swapIndex], nums[index]];\r\n\t\tbreak;\r\n\t}\r\n\treturn nums.join('');\r\n};"
  }
}
