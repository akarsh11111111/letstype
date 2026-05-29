export default {
  "id": 1390,
  "name": "Four Divisors",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/four-divisors",
  "relativeDir": "F/Four Divisors",
  "slug": "1390-four-divisors",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 23,
    "python": 19,
    "javascript": 24
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int sumFourDivisors(vector<int>& nums) {\r\n        int n = nums.size();\r\n        int sum = 0,cnt=0,temp=0;\r\n        for(int i=0;i<n;i++){\r\n            \r\n            int x = nums[i];\r\n            int sq = sqrt(x);\r\n            \r\n            for(int j=1;j<=sq;j++){\r\n                if(x%j==0){\r\n                    cnt+=2; temp += (j+x/j);\r\n                    \r\n                    if(j==x/j){\r\n                        cnt--; temp-=j;\r\n                    }\r\n                    \r\n                    if(cnt>4)\r\n                        break;\r\n                }\r\n            }\r\n            if(cnt==4){\r\n                sum += temp;\r\n            }\r\n            temp=0; cnt=0;\r\n        }\r\n        return sum;\r\n    }\r\n};",
    "python": "import math \r\nclass Solution:\r\n    def sumFourDivisors(self, nums: List[int]) -> int:\r\n        s=0\r\n        for i in nums:\r\n            r=i+1\r\n            c=2\r\n            for j in range(2, int(math.sqrt(i))+1):\r\n                if i%j==0:\r\n                    if (i / j == j) :\r\n                        c+=1\r\n                        r+=j\r\n                    else :\r\n                        c+=2\r\n                        r+=j+int(i/j)\r\n            print(c, r)\r\n            if c==4:\r\n                s+=r\r\n        return s",
    "java": "class Solution {\r\n    public int sumFourDivisors(int[] nums) {\r\n        int res = 0;\r\n        for(int val : nums){\r\n            int sum = 0;\r\n            int count = 0;\r\n            for(int i=1;i*i <= val;i++){\r\n                if(val % i == 0){\r\n                    sum += i;\r\n                    count++;\r\n                    if(i != val/i){\r\n                        sum += val/i;\r\n                        count++;\r\n                    }\r\n                }\r\n            }\r\n            if(count == 4){\r\n                res += sum;\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "var sumFourDivisors = function(nums) {\r\n    let check = (num) => {\r\n        let divs = [num]; // init the array with the number itself\r\n        let orig = num;\r\n        num = num >> 1; // divide in half to avoid checking too many numbers\r\n        while (num > 0) {\r\n            if (orig % num === 0) divs.push(num);\r\n            num--;\r\n            if (divs.length > 4) return 0;\r\n        }\r\n        if (divs.length === 4) {\r\n            return divs.reduce((a, b) => a + b, 0);\r\n        }\r\n        return 0;\r\n    }\r\n    \r\n    let total = 0;\r\n    \r\n    for (let num of nums) {\r\n        total += check(num);\r\n    }\r\n    \r\n    return total;\r\n};"
  }
}
