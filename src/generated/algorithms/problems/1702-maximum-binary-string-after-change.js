export default {
  "id": 1702,
  "name": "Maximum Binary String After Change",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-binary-string-after-change",
  "relativeDir": "M/Maximum Binary String After Change",
  "slug": "1702-maximum-binary-string-after-change",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 30,
    "python": 7,
    "javascript": 40
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string maximumBinaryString(string binary) {\r\n        int n = binary.size();\r\n        int z_count=0;  //count the number of zeros\r\n        int z_index=-1; //index of the leftmost zero that is why we start iterating from the right\r\n        for(int i=n-1;i>=0;i--) {\r\n         if(binary[i]=='0') {\r\n             z_count++;\r\n             z_index = i;\r\n             binary[i] = '1'; //changing all occurances to 1\r\n         }\r\n        }\r\n        if(z_index!=-1)  //to check if there is atleast 1 zero\r\n        {\r\n            binary[z_index+z_count-1] = '0'; //this is the only zero present\r\n            // -1 because the only zero is also included in zero count \r\n        }\r\n        return binary;\r\n    }\r\n};",
    "python": "# Runtime: 128 ms (Top 57.69%) | Memory: 15.4 MB (Top 69.23%)\r\nclass Solution:\r\n    def maximumBinaryString(self, binary: str) -> str:\r\n        zero = binary.count('0') # count number of '0'\r\n        zero_idx = binary.index('0') if zero > 0 else 0 # find the index of fist '0' if exists\r\n        one = len(binary) - zero_idx - zero # count number of '1' (not including leading '1's)\r\n        return f\"{binary[:zero_idx]}{'1'*(zero-1)}{'0'*min(zero, 1)}{'1'*one}\"",
    "java": "// Runtime: 68 ms (Top 32.6%) | Memory: 45.01 MB (Top 8.1%)\r\n\r\nclass Solution {\r\n    public String maximumBinaryString(String binary) {\r\n        int n = binary.length();\r\n        StringBuffer ans = new StringBuffer(\"\");\r\n        StringBuffer buffer = new StringBuffer(\"\");\r\n        int onesAfter1stZero = 0;\r\n        boolean found1stZero = false;\r\n        for(int i=0;i<n;i++){\r\n            if(found1stZero){\r\n                if(binary.charAt(i)=='0')\r\n                    ans.append('1');\r\n                else\r\n                    buffer.append('1');\r\n            }\r\n            else{\r\n                if(binary.charAt(i)=='0'){\r\n                    found1stZero = true;\r\n                    buffer.append('0');\r\n                }\r\n                else\r\n                    ans.append('1');\r\n            }\r\n        }\r\n        \r\n        ans.append(buffer);\r\n        return ans.toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 298 ms (Top 20.37%) | Memory: 77.6 MB (Top 7.41%)\r\n/**\r\n * @param {string} binary\r\n * @return {string}\r\n */\r\nvar maximumBinaryString = function(binary) {\r\n    /*\r\n    10 -> 01 allows us to move any zero to left by one position\r\n    00 -> 10 allows us to convert any consicutive 00 to 10\r\n    So we can collect all the zeros together then convert them in 1 except for the rightmost 0\r\n    We will club all the zeros togegher on the rightmost possition, to achieve the biggest value, then covert them into 1 except for the rightmost 0\r\n    So we need to choose indexOfFirstZero as the starting possition of the group of zeros\r\n    If there is no 0 then given string is the maximum possible string\r\n    If there are 1 or more zeros\r\n        Then there will be only 1 zero in the answer\r\n        Position of this will be indexOfFirstZero in given string + countOfZeros - 1\r\n    */\r\n    let firstZeroIndex=-1,zeroCount=0,ans=\"\";\r\n    for(let i=0;i<binary.length;i++){\r\n        if(binary[i]==='0'){\r\n            zeroCount++;\r\n            if(firstZeroIndex===-1){\r\n                firstZeroIndex=i;\r\n            }\r\n        }\r\n    }\r\n    if(firstZeroIndex==-1){\r\n        return binary;\r\n    }\r\n    let onlyZeroInAns = firstZeroIndex + (zeroCount-1);\r\n    for(let i=0;i<binary.length;i++){\r\n        if(i==onlyZeroInAns){\r\n            ans+=\"0\";\r\n        }\r\n        else{\r\n            ans+=\"1\";\r\n        }\r\n    }\r\n    return ans;\r\n};"
  }
}
