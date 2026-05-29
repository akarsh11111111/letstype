export default {
  "id": 1296,
  "name": "Divide Array in Sets of K Consecutive Numbers",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers",
  "relativeDir": "D/Divide Array in Sets of K Consecutive Numbers",
  "slug": "1296-divide-array-in-sets-of-k-consecutive-numbers",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 26,
    "python": 36,
    "javascript": 33
  },
  "languages": {
    "cpp": "// Runtime: 118 ms (Top 84.8%) | Memory: 50.10 MB (Top 89.92%)\r\n\r\nclass Solution {\r\npublic:\r\n    bool isPossibleDivide(vector<int>& nums, int k) {\r\n        if (nums.size() % k != 0) {\r\n            return false;\r\n        }\r\n        \r\n        unordered_map<int,int> map;\r\n        for (int num : nums) {\r\n            map[num]++;\r\n        }\r\n        \r\n        sort(nums.begin(), nums.end());\r\n        \r\n        for (int num : nums) {\r\n            if (map[num] > 0) {\r\n                for (int i = num + 1; i < num + k; i++) {\r\n                    if (map[i] == 0) {\r\n                        return false;\r\n                    }\r\n                    map[i]--;\r\n                }\r\n                map[num]--;\r\n            }\r\n        }\r\n        \r\n        return true;\r\n    }\r\n};",
    "python": "// Runtime: 304 ms (Top 99.22%) | Memory: 27.60 MB (Top 95.6%)\r\n\r\nclass Solution:\r\n    def isPossibleDivide(self, nums: List[int], k: int) -> bool:\r\n        # if we see x, we expect to see x+1 later\r\n        #   and then x+2 after that\r\n        #   and then x+3 after that\r\n\r\n        # so maybe we can enqueue (x+1, k-2)  === (next number expected, count after x+1)\r\n        #   e.g. k == 2: find x, enqueue (x+1, 0)\r\n        \r\n        # for each x:\r\n        #   if front of queue has x, pop it. Re-enqueue with rem-1 if rem, else we finished a length k sequence\r\n        #   if front of queue has x' < x, we have a gap. return False\r\n        #   otherwise we found the start of a new sequence: append (x+1, k-2)\r\n        #     meaning we found x (1), we're looking for x+1 (another 1), and after that we should find another k-2 numbers\r\n\r\n        if k == 1: return True # length 1 sequences are trivial\r\n\r\n        nums.sort()\r\n        q = deque()\r\n        for n in nums:\r\n            if not q or q[0][0] > n:\r\n                q.append((n+1, k-2))\r\n            elif q[0][0] == n:\r\n                _, rem = q.popleft()\r\n                if rem:\r\n                    q.append((n+1, rem-1))\r\n                # else: end of len k sequence\r\n            else:\r\n                return False # found n > next expected, so we can't complete an earlier sequence\r\n\r\n        if q:\r\n            return False # expected at least one more element to finish a sequence\r\n        else:\r\n            return True",
    "java": "// Runtime: 127 ms (Top 67.88%) | Memory: 81.5 MB (Top 9.11%)\r\nclass Solution {\r\n    public boolean isPossibleDivide(int[] nums, int k) {\r\n        if (nums.length % k != 0) return false;\r\n        Map<Integer, Integer> countMap = new HashMap<>();\r\n        for (int num : nums) {\r\n            int count = countMap.getOrDefault(num, 0);\r\n            countMap.put(num , count + 1);\r\n        }\r\n        Arrays.sort(nums);\r\n        for (int num : nums) {\r\n            if (!countMap.containsKey(num)) continue;\r\n            int count = countMap.get(num);\r\n            if (count == 1) countMap.remove(num);\r\n            else countMap.put(num, count - 1);\r\n            for (int i = 1; i < k; i++) {\r\n                int next = num + i;\r\n                if (!countMap.containsKey(next)) return false;\r\n                count = countMap.get(next);\r\n                if (count == 1) countMap.remove(next);\r\n                else countMap.put(next, count - 1);\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 330 ms (Top 57.14%) | Memory: 59.4 MB (Top 77.14%)\r\nvar isPossibleDivide = function(nums, k) {\r\n    if(nums.length % k) {\r\n        return false;\r\n    }\r\n\r\n    nums.sort((a, b) => a - b);\r\n\r\n    let numberOfArrays = nums.length / k, index = 0, dp = Array(numberOfArrays).fill(null).map(() => []);\r\n\r\n    dp[0].push(nums[0]);\r\n\r\n    for(let i = 1; i < nums.length; i++) {\r\n        if(nums[i] === nums[i - 1]) {\r\n            if(index === numberOfArrays - 1) {\r\n                return false;\r\n            }\r\n            index++;\r\n        }\r\n        else {\r\n            index = 0;\r\n            while(dp[index].length === k) {\r\n                index++;\r\n            }\r\n        }\r\n        if(dp[index].length && dp[index].at(-1) + 1 != nums[i]) {\r\n            return false;\r\n        }\r\n        dp[index].push(nums[i])\r\n    }\r\n\r\n    return true;\r\n};"
  }
}
