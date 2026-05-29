export default {
  "id": 556,
  "name": "Next Greater Element III",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/next-greater-element-iii",
  "relativeDir": "N/Next Greater Element III",
  "slug": "0556-next-greater-element-iii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 51,
    "python": 20,
    "javascript": 24
  },
  "languages": {
    "cpp": "// Runtime: 76 ms (Top 14.9%) | Memory: 6.33 MB (Top 5.0%)\r\n\r\nclass Solution {\r\npublic:\r\n    int nextGreaterElement(int n) {\r\n       vector<int>vec;\r\n       int temp = n;\r\n        while(n>0){\r\n            int r = n%10;\r\n            vec.push_back(r);\r\n            n /= 10; \r\n        }\r\n        sort(vec.begin(),vec.end());\r\n        do{\r\n            int num=0;\r\n            long j=0;\r\n            int s = vec.size()-1;\r\n            long i = pow(10,s);\r\n            while(i>0)\r\n           {\r\n            num += i*vec[j++];\r\n            i /= 10;\r\n           }\r\n              if(num>temp)\r\n                 return num;\r\n    \r\n        } while(next_permutation(vec.begin(),vec.end()));\r\n       return -1;\r\n    }\r\n};",
    "python": "// Runtime: 42 ms (Top 26.09%) | Memory: 16.30 MB (Top 30.04%)\r\n\r\nclass Solution:\r\n    def nextGreaterElement(self, n):\r\n        digits = list(str(n))\r\n        i = len(digits) - 1\r\n        while i-1 >= 0 and digits[i] <= digits[i-1]:\r\n            i -= 1\r\n            \r\n        if i == 0: return -1\r\n        \r\n        j = i\r\n        while j+1 < len(digits) and digits[j+1] > digits[i-1]:\r\n            j += 1\r\n        \r\n        digits[i-1], digits[j] = digits[j], digits[i-1]\r\n        digits[i:] = digits[i:][::-1]\r\n        ret = int(''.join(digits))\r\n        \r\n        return ret if ret < 1<<31 else -1",
    "java": "class Solution {\r\n    public int nextGreaterElement(int n) {\r\n        char[] arr = (n + \"\").toCharArray();\r\n        \r\n        int i = arr.length - 1;\r\n        while(i > 0){\r\n            if(arr[i-1] >= arr[i]){\r\n                i--;\r\n            }else{\r\n                break;\r\n            }\r\n        }\r\n        if(i == 0){\r\n            return -1;\r\n        }\r\n        \r\n        int idx1 = i-1;\r\n        \r\n        int j = arr.length - 1;\r\n        while(j > idx1){\r\n            if(arr[j] > arr[idx1]){\r\n                break;\r\n            }\r\n            j--;\r\n        }\r\n        \r\n        //Swapping\r\n        swap(arr,idx1,j);\r\n        \r\n        //sorting\r\n        int left = idx1+1;\r\n        int right = arr.length-1;\r\n        while(left < right){\r\n            swap(arr,left,right);\r\n            left++;\r\n            right--;\r\n        }\r\n        \r\n        String result = new String(arr);\r\n        long val = Long.parseLong(result);\r\n        \r\n        return (val > Integer.MAX_VALUE ? -1 : (int)val);\r\n        \r\n    }\r\n    \r\n    void swap(char[]arr,int i,int j){\r\n        char temp = arr[i];\r\n        arr[i] = arr[j];\r\n        arr[j] = temp;\r\n    }\r\n}",
    "javascript": "var nextGreaterElement = function(n) {\r\n\tconst MAX_VALUE = 2 ** 31 - 1;\r\n\tconst nums = `${n}`.split('');\r\n\tlet findPos;\r\n\r\n\tfor (let index = nums.length - 2; index >= 0; index--) {\r\n\t\tif (nums[index] < nums[index + 1]) {\r\n\t\t\tfindPos = index;\r\n\t\t\tbreak;\r\n\t\t}\r\n\t}\r\n\r\n\tif (findPos === undefined) return -1;\r\n\tfor (let index = nums.length - 1; index >= 0; index--) {\r\n\t\tif (nums[index] > nums[findPos]) {\r\n\t\t\t[nums[index], nums[findPos]] = [nums[findPos], nums[index]];\r\n\t\t\tbreak;\r\n\t\t}\r\n\t}\r\n\r\n\tconst mantissa = nums.slice(findPos + 1).sort((a, b) => a - b).join('');\r\n\tconst result = Number(nums.slice(0, findPos + 1).join('') + mantissa);\r\n\treturn result > MAX_VALUE ? -1 : result;\r\n};"
  }
}
