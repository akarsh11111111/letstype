export default {
  "id": 457,
  "name": "Circular Array Loop",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/circular-array-loop",
  "relativeDir": "C/Circular Array Loop",
  "slug": "0457-circular-array-loop",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 40,
    "java": 36,
    "python": 17,
    "javascript": 49
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 8.00 MB (Top 36.07%)\r\n\r\nclass Solution {\r\npublic:\r\n    \r\n    int next(vector<int>& nums, int i){\r\n        int n = nums.size();\r\n        return (n+nums[i]+i)%n;\r\n    }\r\n    \r\n    bool circularArrayLoop(vector<int>& nums) {\r\n        int n = nums.size();\r\n        // we can use slow and fast pointer to check whether there is loop or not\r\n        for(int &num: nums)\r\n            num %= n;\r\n        for(int i=0;i<n;i++){\r\n            int slow = i,\r\n                fast = i;\r\n            while(nums[slow]*nums[next(nums,fast)]>0 && nums[slow]*nums[next(nums,next(nums,fast))]>0){\r\n                slow = next(nums,slow);\r\n                fast = next(nums,next(nums,fast));\r\n                if(slow==fast){\r\n                    if(slow==next(nums,slow)) // single length\r\n                        return false;\r\n                    return true;\r\n                }\r\n            }\r\n\t\t\t/// DONOT TRAVERSE WHERE THERE IS NO PATH TO GET LOOP.\r\n            int j = i;\r\n            int val = nums[i];\r\n            while (nums[j] * val > 0) {\r\n                int nexx = next(nums,j);\r\n                nums[j] = 0;\r\n                j = nexx;\r\n            }\r\n        }\r\n        \r\n        return false;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def circularArrayLoop(self, nums: List[int]) -> bool:\r\n        n = len(nums)\r\n        for i in range(n):\r\n            seen = set()\r\n            minval = float('inf')\r\n            maxval = float('-inf')\r\n            j = i\r\n            while j not in seen:\r\n                seen.add(j)\r\n                minval = min(minval, nums[j])\r\n                maxval = max(maxval, nums[j])\r\n                k = 1 + abs(nums[j]) // n\r\n                j = (k * n + j + nums[j]) % n\r\n            if j == i and len(seen) > 1 and (minval > 0 or maxval < 0):\r\n                return True\r\n        return False",
    "java": "// Runtime: 16 ms (Top 46.1%) | Memory: 40.11 MB (Top 41.3%)\r\n\r\nclass Solution {\r\n    public boolean circularArrayLoop(int[] nums) {\r\n        for (int i=0; i<nums.length; i++) {\r\n            boolean isForward = nums[i] > 0;\r\n            int slow = i;\r\n            int fast = i; \r\n            do {\r\n                slow = findNextIndex(nums, isForward, slow);\r\n                fast = findNextIndex(nums, isForward, fast);\r\n                if (fast != -1) {\r\n                    fast = findNextIndex(nums, isForward, fast);\r\n                }\r\n            } while (slow != -1 && fast != -1 && slow != fast);\r\n            if (slow != -1 && slow == fast) {\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n    private int findNextIndex(int[] arr, boolean isForward, int currentIndex) {\r\n        boolean direction = arr[currentIndex] >= 0;\r\n        if (isForward != direction) {\r\n            return -1;\r\n        }\r\n        int nextIndex = (currentIndex + arr[currentIndex]) % arr.length;\r\n        if (nextIndex < 0) {\r\n            nextIndex += arr.length;\r\n        }\r\n        if (nextIndex == currentIndex) {\r\n            nextIndex = -1;\r\n        }\r\n        return nextIndex;\r\n    }\r\n}",
    "javascript": "var circularArrayLoop = function(nums) {\r\n    // cannot be a cycle if there are less than 2 elements\r\n    const numsLen = nums.length;\r\n    if (numsLen < 2) return false;\r\n\r\n    // init visited array\r\n    const visited = Array(numsLen).fill(false);\r\n\r\n    // check each index to see if a cycle can be produced\r\n    for (let i = 0; i < numsLen; i++) {\r\n        if (visited[i]) continue;\r\n        visited[i] = true;\r\n        // determine initial direction\r\n        const isPositive = nums[i] > 0;\r\n        \r\n        // reset which indices were visited after each iteration\r\n        const visitedPerIdx = Array(numsLen).fill(false);\r\n        \r\n        // reset cycle length and current index after each iteration\r\n        let cycleLen = 0,\r\n            currIdx = i;\r\n        \r\n        // loop while cycle is valid\r\n        while (true) {\r\n            // break if current index moves cycle in opposite direction\r\n            if (isPositive !== nums[currIdx] > 0) break;\r\n\t\t\t\r\n            // calc next valid index\r\n            let nextIdx = (currIdx + nums[currIdx]) % numsLen;\r\n            // map negative index to a positive index\r\n            if (nextIdx < 0) nextIdx += numsLen; \r\n          \r\n            // break if cycle points to same index\r\n            if (currIdx === nextIdx) break;\r\n            \r\n            cycleLen++; \r\n\t\t\t// a cycle is found when the index has already been visited in the current outer iteration, and\r\n\t\t\t// the cycle length is greater than 1.\r\n            if (visitedPerIdx[nextIdx] && cycleLen > 1) return true;\r\n\t\t\t\r\n            visitedPerIdx[nextIdx] = true;\r\n            visited[nextIdx] = true;\r\n            // set curr index to new index\r\n            currIdx = nextIdx;\r\n        }\r\n    }\r\n\r\n    return false;\r\n};"
  }
}
