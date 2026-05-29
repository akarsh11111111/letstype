export default {
  "id": 2269,
  "name": "Find the K-Beauty of a Number",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-the-k-beauty-of-a-number",
  "relativeDir": "F/Find the K-Beauty of a Number",
  "slug": "2269-find-the-k-beauty-of-a-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 36,
    "java": 20,
    "python": 18
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 6 MB (Top 61.38%)\r\nclass Solution {\r\npublic:\r\n    int divisorSubstrings(int num, int k) {\r\n        string str = to_string(num);\r\n        int i = 0, j = 0, n = str.length();\r\n        int ind = 0;\r\n\r\n        while(j < n)\r\n        {\r\n            if(j - i + 1 < k)\r\n            {\r\n            // increment j till we get the window size\r\n                ++j;\r\n            }\r\n            else if(j - i + 1 == k)\r\n            {\r\n            // on hiting the window size\r\n            // extract window string and convert to int\r\n            // check if it follows the given condition\r\n                string s = str.substr(i,k);\r\n                int n = stoi(s);\r\n                if(n != 0 && num % n == 0 )\r\n                    ++ind;\r\n\r\n                // shift the window by ++j;\r\n                // remove previous calculation by ++i\r\n                ++i;\r\n                ++j;\r\n            }\r\n\r\n        }\r\n\r\n        return ind;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def divisorSubstrings(self, num: int, k: int) -> int:\r\n        # since integer has no length function, we convert our num into a str.\r\n        # Then we run a loop that goes until i+k-1 < len(numStr) and take\r\n        # n = int(numStr[i: i+k]); and if n!=0 and num%n==0 meaning \r\n\t\t# num is divisible by n so we add 1 to k_beauty and return it in the end.\r\n\t\t\r\n        numStr = str(num)\r\n        i, k_beauty = 0, 0\r\n        \r\n        while i+k-1 < len(numStr):\r\n            n = int(numStr[i: i+k])\r\n            if n!=0 and num%n==0:\r\n                k_beauty += 1\r\n                \r\n            i += 1\r\n        \r\n        return k_beauty",
    "java": "class Solution {\r\n    public int divisorSubstrings(int num, int k) {\r\n        String str=String.valueOf(num); // to covert integer to String\r\n        int count=0;   // count of ans..\r\n        for(int i=0;i<str.length()-k+1;i++)  // deciding the starting index of window\r\n        {\r\n            String temp=str.substring(i,i+k);    // storing string till window length\r\n            int n1=Integer.valueOf(temp);       // converting string to integer\r\n            if(n1==0)     // to avoid division error\r\n            {\r\n                continue;\r\n            }\r\n            if(num%n1==0)      // if it is divisible then increase the count\r\n            {\r\n                count++;\r\n            }\r\n        }\r\n        return count;  // lastly return our count\r\n    }\r\n}"
  }
}
