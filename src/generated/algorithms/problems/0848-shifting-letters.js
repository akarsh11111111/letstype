export default {
  "id": 848,
  "name": "Shifting Letters",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/shifting-letters",
  "relativeDir": "S/Shifting Letters",
  "slug": "0848-shifting-letters",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 25,
    "python": 18,
    "javascript": 10
  },
  "languages": {
    "cpp": "class Solution {\r\n    void shift(string& s, int times, int amt)\r\n    {\r\n        const int clampL = 97;\r\n        const int clampR = 123;\r\n        \r\n        for (int i = 0; i <= times; i++)\r\n        {\r\n            int op = (s[i] + amt) % clampR;\r\n            \r\n            if (op < clampL)\r\n                op += clampL;\r\n            \r\n            s[i] = op;\r\n        }\r\n    }\r\npublic:\r\n    string shiftingLetters(string s, vector<int>& shifts) {\r\n        \r\n        for (int i = 0; i < shifts.size(); i++)\r\n            shift(s,i,shifts[i]);\r\n        \r\n        return s;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def shiftingLetters(self, s: str, shifts: List[int]) -> str:\r\n        n = len(s)\r\n        nums = []\r\n        sums = 0\r\n        for i in shifts[::-1]:\r\n            sums = (sums+i)%26\r\n            nums.append(sums)\r\n        nums = nums[::-1]\r\n        \r\n        res = ''\r\n        for i, ch in enumerate(s):\r\n            val = ord(s[i]) + nums[i]\r\n            while val > 122:\r\n                val -= 26\r\n            res += chr(val)\r\n        \r\n        return res",
    "java": "// Runtime: 26 ms (Top 23.48%) | Memory: 82.1 MB (Top 8.82%)\r\nclass Solution {\r\n    public String shiftingLetters(String s, int[] shifts) {\r\n        char[] arr = s.toCharArray();\r\n        int[] arr1 = new int[shifts.length];\r\n        arr1[arr1.length-1] = (shifts[shifts.length-1])%26;\r\n        for(int i =shifts.length -2 ;i>=0 ;i--){\r\n            arr1[i] = (shifts[i] + arr1[i+1])%26;\r\n        }\r\n        for(int i =0; i<arr.length ; i++ ){\r\n            int c = (int)(arr[i]);\r\n            int n = c+arr1[i];\r\n            if(n>122){\r\n                    int m = arr1[i] -(122-c);\r\n                    n = m+96;\r\n                }\r\n            char ch = (char)n;\r\n            arr[i] = ch;\r\n\r\n        }\r\n        String string = new String(arr);\r\n        return string;\r\n\r\n    }\r\n}",
    "javascript": "// 848. Shifting Letters\r\nvar shiftingLetters = function(s, shifts) {\r\n\tlet res = '', i = shifts.length;\r\n\tshifts.push(0);\r\n\twhile (--i >= 0) {\r\n\t\tshifts[i] += shifts[i+1];\r\n\t\tres = String.fromCharCode((s.charCodeAt(i) - 97 + shifts[i]) % 26 + 97) + res;\r\n\t}\r\n\treturn res;\r\n};"
  }
}
