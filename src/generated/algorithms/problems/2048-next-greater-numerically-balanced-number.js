export default {
  "id": 2048,
  "name": "Next Greater Numerically Balanced Number",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/next-greater-numerically-balanced-number",
  "relativeDir": "N/Next Greater Numerically Balanced Number",
  "slug": "2048-next-greater-numerically-balanced-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 31,
    "python": 28,
    "javascript": 8
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool valid(int n)\r\n    {\r\n        vector<int> map(10,0);\r\n        while(n)\r\n        {\r\n            int rem = n%10;\r\n            map[rem]++;\r\n            n = n/10;\r\n        }\r\n        for(int i=0; i<10; i++)\r\n            if(map[i] && map[i]!=i) return false;\r\n        return true;\r\n    }\r\n    \r\n    int nextBeautifulNumber(int n) {\r\n     \r\n        while(true) \r\n        {\r\n            ++n;\r\n            if(valid(n))\r\n                return n;\r\n        }\r\n        return 1;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def nextBeautifulNumber(self, n: int) -> int:\r\n        n_digits = len(str(n))\r\n        \r\n        next_max = {\r\n            1: [1],\r\n            2: [22],\r\n            3: [122, 333],\r\n            4: [1333, 4444],\r\n            5: [14444, 22333, 55555],\r\n            6: [122333, 224444, 666666, 155555],\r\n            7: [1224444, 2255555, 3334444, 1666666, 7777777]\r\n                }\r\n        \r\n        if n >= int(str(n_digits) * n_digits):\r\n            n_digits += 1\r\n            return min(next_max[n_digits])\r\n        \r\n        ans = float('inf')\r\n        for num in sorted(next_max[n_digits]):      \r\n            cands = set(permutations(str(num)))\r\n            cands = sorted(map(lambda x: int(\"\".join(x)), cands))\r\n        \r\n            loc = bisect.bisect(cands, n)\r\n            if loc < len(cands):           \r\n                ans = min(ans, cands[loc])\r\n        \r\n        return ans",
    "java": "// Runtime: 207 ms (Top 46.27%) | Memory: 117.2 MB (Top 26.87%)\r\nclass Solution {\r\n    public int nextBeautifulNumber(int n) {\r\n\r\n        while(true){\r\n            n++;\r\n           int num = n; //test this number\r\n           int [] freq = new int[10]; // 0 to 9\r\n\r\n            while(num > 0){ //calculate freq of each digit in the num\r\n                int rem = num % 10; //this is remainder\r\n                num = num / 10; //this is quotient\r\n                freq[rem] = freq[rem] + 1; //increase its frequency\r\n                if(freq[rem] > rem) break;\r\n            }\r\n\r\n            boolean ans = true;\r\n\r\n            for(int i = 0;i<10;i++){ //check frequency of each digit\r\n              if(freq[i] != i && freq[i] != 0){\r\n                  ans = false;\r\n                  break;\r\n              }\r\n            }\r\n\r\n            if(ans == true){\r\n                return n;\r\n            }\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 53 ms (Top 100.0%) | Memory: 42.60 MB (Top 60.0%)\r\n\r\nvar nextBeautifulNumber = function(n) {\r\n    let l = [1, 22, 122, 212, 221, 333, 1333, 3133, 3313, 3331, 4444, 14444, 22333, 23233, 23323, 23332, 32233, 32323, 32332, 33223, 33232, 33322, 41444, 44144, 44414, 44441, 55555, 122333, 123233, 123323, 123332, 132233, 132323, 132332, 133223, 133232, 133322, 155555, 212333, 213233, 213323, 213332, 221333, 223133, 223313, 223331, 224444, 231233, 231323, 231332, 232133, 232313, 232331, 233123, 233132, 233213, 233231, 233312, 233321, 242444, 244244, 244424, 244442, 312233, 312323, 312332, 313223, 313232, 313322, 321233, 321323, 321332, 322133, 322313, 322331, 323123, 323132, 323213, 323231, 323312, 323321, 331223, 331232, 331322, 332123, 332132, 332213, 332231, 332312, 332321, 333122, 333212, 333221, 422444, 424244, 424424, 424442, 442244, 442424, 442442, 444224, 444242, 444422, 515555, 551555, 555155, 555515, 555551, 666666,1224444];\r\n    for(let x of l){\r\n        if (x>n){return x;}\r\n    }\r\n};"
  }
}
