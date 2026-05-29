export default {
  "id": 1015,
  "name": "Smallest Integer Divisible by K",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/smallest-integer-divisible-by-k",
  "relativeDir": "S/Smallest Integer Divisible by K",
  "slug": "1015-smallest-integer-divisible-by-k",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 14,
    "python": 13,
    "javascript": 13
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int smallestRepunitDivByK(int k) {\r\n        if(k&1==0)return -1;\r\n        long long val=0;\r\n\r\n        for(int i=1; i<=k;i++)\r\n        {\r\n            // val=((val*10)+1);\r\n            if((val=(val*10+1)%k)==0)return i;\r\n        }\r\n        return -1;\r\n        \r\n        \r\n        \r\n    }\r\n};",
    "python": "class Solution:\r\n    def smallestRepunitDivByK(self, k: int) -> int:\r\n        if k % 2 == 0: return -1\r\n        n = 1\r\n        leng = 1\r\n        mapp = {}\r\n        while True:\r\n            rem = n % k\r\n            if rem == 0: return leng\r\n            if rem in mapp : return -1\r\n            mapp[rem] = True\r\n            n = n*10 + 1\r\n            leng += 1",
    "java": "class Solution {\r\n    public int smallestRepunitDivByK(int k) {\r\n        // if (k % 2 == 0 || k % 5 == 0) return -1;  // this trick may save a little time\r\n        boolean[] hit = new boolean[k];\r\n        int n = 0, ans = 0;\r\n        while (true) { // at most k times, because 0 <= remainder < k\r\n            ++ ans;\r\n            n = (n * 10 + 1) % k; // we only focus on whether to divide, so we only need to keep the remainder.\r\n            if (n == 0) return ans; // can be divisible\r\n            if (hit[n]) return -1; // the remainder of the division repeats, so it starts to loop that means it cannot be divisible.\r\n            hit[n] = true;\r\n        }\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nvar smallestRepunitDivByK = function(k) {\r\n    if( 1 > k > 1e6 ) return -1;\r\n    let val = 0;\r\n    for (let i = 1; i < 1e6; i++) {\r\n        val = (val * 10 + 1) % k;\r\n        if (val === 0) return i;\r\n    }\r\n    return -1;\r\n};"
  }
}
