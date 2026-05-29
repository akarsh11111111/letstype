export default {
  "id": 1814,
  "name": "Count Nice Pairs in an Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-nice-pairs-in-an-array",
  "relativeDir": "C/Count Nice Pairs in an Array",
  "slug": "1814-count-nice-pairs-in-an-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 34,
    "java": 31,
    "python": 15,
    "javascript": 35
  },
  "languages": {
    "cpp": "const MOD = 1e9 + 7;\r\nconst countNicePairs = (a) => {\r\n    let m = new Map();\r\n    let res = 0;\r\n    for (const e of a) {\r\n        let target = e - rev(e);\r\n        let cnt = m.get(target) || 0;\r\n        res += cnt;\r\n        m.set(target, cnt + 1);\r\n    }\r\n    return res % MOD;\r\n};\r\n\r\n/* Another version\r\nconst countNicePairs = (a) => {\r\n    let m = new Map();\r\n    let res = 0;\r\n    for (const e of a) {\r\n        let target = e - rev(e);\r\n        let cnt = m.get(target) + 1 || 1;\r\n        m.set(target, cnt);\r\n        res += cnt - 1;\r\n    }\r\n    return res % MOD;\r\n};\r\n*/\r\n\r\nconst rev = (num) => {\r\n    let s = num + '';\r\n    let res = '';\r\n    let n = s.length;\r\n    for (let i = n - 1; ~i; i--)  res += s[i];\r\n    return Number(res);\r\n};",
    "python": "// Runtime: 500 ms (Top 94.22%) | Memory: 26.90 MB (Top 76.37%)\r\n\r\nclass Solution:\r\n    def countNicePairs(self, nums: List[int]) -> int:\r\n        res = 0\r\n        count = {}\r\n        mod = 10**9 + 7\r\n        \r\n        for n in nums:\r\n            rev = int(str(n)[::-1])\r\n            cur = count.get(n - rev, 0)\r\n            res += cur\r\n            count[n - rev] = 1 + cur\r\n\r\n        return res % mod",
    "java": "// Runtime: 21 ms (Top 85.52%) | Memory: 58.10 MB (Top 25.69%)\r\n\r\nclass Solution {\r\n    public int countNicePairs(int[] nums) {\r\n        final int mod = 1000000007;\r\n        int len = nums.length;\r\n        for (int i = 0; i < len; i++) {\r\n            nums[i] = nums[i] - reverse(nums[i]);\r\n        }\r\n        Arrays.sort(nums);\r\n        long res = 0;\r\n        for (int i = 0; i < len - 1; i++) {\r\n            long count = 1;\r\n            while (i < len - 1 && nums[i] == nums[i + 1]) {\r\n                count++;\r\n                i++;\r\n            }\r\n            res = (res % mod + (count * (count - 1)) / 2) % mod;\r\n        }\r\n\r\n        return (int) (res % mod);\r\n    }\r\n    private int reverse(int num) {\r\n        int rev = 0;\r\n        while (num > 0) {\r\n            rev = rev * 10 + num % 10;\r\n            num /= 10;\r\n        }\r\n        return rev;\r\n    }\r\n}",
    "javascript": "// Runtime: 180 ms (Top 83.67%) | Memory: 63.4 MB (Top 69.39%)\r\nconst MOD = 1e9 + 7;\r\nconst countNicePairs = (a) => {\r\n    let m = new Map();\r\n    let res = 0;\r\n    for (const e of a) {\r\n        let target = e - rev(e);\r\n        let cnt = m.get(target) || 0;\r\n        res += cnt;\r\n        m.set(target, cnt + 1);\r\n    }\r\n    return res % MOD;\r\n};\r\n\r\n/* Another version\r\nconst countNicePairs = (a) => {\r\n    let m = new Map();\r\n    let res = 0;\r\n    for (const e of a) {\r\n        let target = e - rev(e);\r\n        let cnt = m.get(target) + 1 || 1;\r\n        m.set(target, cnt);\r\n        res += cnt - 1;\r\n    }\r\n    return res % MOD;\r\n};\r\n*/\r\n\r\nconst rev = (num) => {\r\n    let s = num + '';\r\n    let res = '';\r\n    let n = s.length;\r\n    for (let i = n - 1; ~i; i--) res += s[i];\r\n    return Number(res);\r\n};"
  }
}
