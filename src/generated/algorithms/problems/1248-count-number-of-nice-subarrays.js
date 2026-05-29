export default {
  "id": 1248,
  "name": "Count Number of Nice Subarrays",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-number-of-nice-subarrays",
  "relativeDir": "C/Count Number of Nice Subarrays",
  "slug": "1248-count-number-of-nice-subarrays",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 52,
    "python": 30,
    "javascript": 42
  },
  "languages": {
    "cpp": "// Runtime: 196 ms (Top 75.30%) | Memory: 70.9 MB (Top 52.97%)\r\nclass Solution {\r\npublic:\r\n    vector<int> nums;\r\n    int solve(int k){\r\n        int low = 0, high = 0, cnt = 0, res = 0;\r\n\r\n        while(high < nums.size()){\r\n            if(nums[high] & 1){\r\n                cnt++;\r\n\r\n                while(cnt > k){\r\n                    if(nums[low] & 1) cnt--;\r\n                    low++;\r\n                }\r\n            }\r\n            high++;\r\n            res += high - low;\r\n        }\r\n\r\n        return res;\r\n    }\r\n    int numberOfSubarrays(vector<int>& nums, int k) {\r\n        this -> nums = nums;\r\n        return solve(k) - solve(k - 1);\r\n    }\r\n};",
    "python": "# Runtime: 628 ms (Top 69.2%) | Memory: 18.88 MB (Top 60.5%)\r\n\r\nclass Solution(object):\r\n\tdef numberOfSubarrays(self, nums, k):\r\n\t\t\"\"\"\r\n\t\te.g. k = 2\r\n\t\tnums = [2, 2, 1, 2, 1, 2, 2]\r\n\t\tindex=  0  1  2  3  4  5  6\r\n\t\t2 even numbers to left of first 1\r\n\t\t2 even numbers to right of last 1\r\n\t\ttotal number of subarrays = pick between 0-2 numbers on left, then, pick between 0-2 numbers on right\r\n\t\ti.e (left+1)  (right+1)\r\n\t\tThen slide window to next set of 2 odd numbers\r\n\t\t\"\"\"\r\n\r\n\t\todds = []\r\n\r\n\t\tfor i in range(len(nums)):\r\n\t\t\tif nums[i] & 1:\r\n\t\t\t\todds.append(i)                      #' Find index of all odd numbers '\r\n\r\n\t\todds = [-1] + odds + [len(nums)]            #' Handle edge cases '\r\n\t\tnice = 0\r\n\r\n\t\tfor i in range(1, len(odds)-k):\r\n\t\t\tleft = odds[i] - odds[i-1] - 1          #' Number of 'left' even numbers '\r\n\t\t\tright = odds[i+k] - odds[i+k-1] - 1     #' Number of 'right' even numbers '\r\n\t\t\tnice += (left+1)*(right+1)              #' Total sub-arrays in current window '\r\n\r\n\t\treturn nice",
    "java": "// Runtime: 12 ms (Top 87.36%) | Memory: 75.4 MB (Top 41.15%)\r\nclass Solution {\r\n    public int numberOfSubarrays(int[] nums, int k) {\r\n        int i = 0;\r\n        int j = 0;\r\n        int odd = 0;\r\n        int result = 0;\r\n        int temp = 0;\r\n\r\n        /*\r\n            Approach : two pointer + sliding window technique\r\n\r\n            step 1 : we have fix i and moving j until our count of odd numbers == k\r\n            step 2 : when(odd == count) we are counting every possible subarray by reducing the size of subarray from i\r\n\r\n        why temp?\r\n        from reducing the size of subarray we will count all the possible subarray from between i and j\r\n        but when i encounter a odd element the odd count will reduce and that while will stop executing\r\n\r\n        now there are two possible cases\r\n        1.The leftover elements have a odd number\r\n        2.The leftover elements do not have any odd number\r\n\r\n        1. if our leftover elements have a odd number\r\n                then we cannot include our old possible subarrays into new possible subarrays because now new window for having odd == k is formed\r\n                that's why temp = 0;\r\n\r\n        2. if out leftover elements do not have any odd element left\r\n            then our leftover elements must also take in consideration becuase they will also contribute in forming subarrays\r\n        */\r\n        while(j< nums.length){\r\n            if(nums[j]%2 != 0)\r\n            {\r\n                odd++;\r\n                //if leftover elements have odd element then new window is formed so we set temp = 0;\r\n                temp = 0;\r\n            }\r\n            while(odd ==k){\r\n                temp++;\r\n                if(nums[i] %2 != 0)\r\n                    odd--;\r\n                i++;\r\n             }\r\n          //if no leftover elements is odd, each element will part in forming subarray\r\n        //so include them\r\n            result += temp;\r\n            j++;\r\n\r\n        }\r\n        return result;\r\n    }\r\n}",
    "javascript": "// Runtime: 180 ms (Top 16.28%) | Memory: 52.2 MB (Top 45.35%)\r\n/**\r\n * @param {number[]} nums\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nvar numberOfSubarrays = function(nums, k) {\r\n    const len = nums.length;\r\n    const pre = new Array(len).fill(-1);\r\n    const post = new Array(len).fill(len);\r\n\r\n    let lastOcc = -1;\r\n    for(let i = 0; i < len; i++) {\r\n        pre[i] = lastOcc;\r\n        if(nums[i] & 1) lastOcc = i;\r\n    }\r\n    lastOcc = len;\r\n    for(let i = len - 1; i >= 0; i--) {\r\n        post[i] = lastOcc;\r\n        if(nums[i] & 1) lastOcc = i;\r\n    }\r\n\r\n    let l = 0, r = 0, oddCount = 0;\r\n\r\n    let ans = 0;\r\n\r\n    for(; r < len; r++) {\r\n        while(l < len && !(nums[l] & 1)) l++;\r\n        if(nums[r] & 1) oddCount++;\r\n\r\n        if(oddCount == k) {\r\n            let leftCount = l - pre[l];\r\n            let rightCount = post[r] - r;\r\n            ans += leftCount * rightCount;\r\n\r\n            oddCount--;\r\n            l++;\r\n        }\r\n    }\r\n\r\n    return ans;\r\n};"
  }
}
