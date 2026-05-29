export default {
  "id": 481,
  "name": "Magical String",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/magical-string",
  "relativeDir": "M/Magical String",
  "slug": "0481-magical-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 38,
    "python": 12,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int magicalString(int n) {\r\n        string s=\"122\";\r\n        int sz=3;\r\n        int start=2,lastDig=2;\r\n        while(sz<n){\r\n            int cnt=s[start++]-'0';\r\n            int currDig=(lastDig==2)?1:2;\r\n            for(int i=0;i<cnt;i++){\r\n                s.push_back('0'+currDig);\r\n                sz++;\r\n            }\r\n            lastDig=currDig;\r\n        }\r\n        int ans=0;\r\n        for(int i=0;i<n;i++){\r\n            if(s[i]=='1'){\r\n                ans++;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 489 ms (Top 6.14%) | Memory: 14.1 MB (Top 72.07%)\r\nclass Solution:\r\n    def magicalString(self, n: int) -> int:\r\n        queue, ans, i = deque([2]), 1, 1\r\n\r\n        while i <= n - 2:\r\n            m = queue.popleft()\r\n            ans += (m == 1)\r\n            queue.extend([1 + (i % 2 == 0)] * m)\r\n            i += 1\r\n\r\n        return ans",
    "java": "// Runtime: 21 ms (Top 32.48%) | Memory: 43.8 MB (Top 21.66%)\r\nclass Solution {\r\n    public int magicalString(int n) {\r\n        if(n <= 3)\r\n            return 1;\r\n        Magical m = new Magical();\r\n        int ans = 1;\r\n        for(int i = 3; i < n; ++i)\r\n            if(m.next() == 1)\r\n                ++ans;\r\n        return ans;\r\n    }\r\n}\r\n\r\nclass Magical{\r\n\r\n    private Deque<Integer> nums;\r\n    private int n;\r\n\r\n    public Magical(){\r\n        nums = new ArrayDeque<>();\r\n        nums.offerLast(1);\r\n        nums.offerLast(1);\r\n        n = 1;\r\n    }\r\n\r\n    public int next(){\r\n        if(n-- < 0){\r\n            int c = nums.pollFirst();\r\n            n = c - 2;\r\n            int curr = 3 - nums.peekLast();\r\n            for(; c > 0; --c)\r\n                nums.offerLast(curr);\r\n            return curr;\r\n        }\r\n        return nums.peekLast();\r\n    }\r\n}",
    "javascript": "// Runtime: 167 ms (Top 9.09%) | Memory: 53.9 MB (Top 27.27%)\r\nvar magicalString = function(n) {\r\n    const stack = ['1', '2', '2'];\r\n    let magic = 2;\r\n\r\n    while (stack.length < n) {\r\n        const count = stack[magic++];\r\n        const last = stack[stack.length - 1];\r\n        const addStr = last === '1' ? '2' : '1';\r\n\r\n        for (let n = 1; n <= count; n++) stack.push(addStr);\r\n    }\r\n    return stack.slice(0, n).filter(str => str === '1').length;\r\n};"
  }
}
