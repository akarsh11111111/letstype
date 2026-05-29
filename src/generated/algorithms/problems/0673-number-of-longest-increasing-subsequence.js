export default {
  "id": 673,
  "name": "Number of Longest Increasing Subsequence",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-longest-increasing-subsequence",
  "relativeDir": "N/Number of Longest Increasing Subsequence",
  "slug": "0673-number-of-longest-increasing-subsequence",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 30,
    "python": 33,
    "javascript": 24
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tint findNumberOfLIS(vector<int>& nums) {\r\n\t\tint n = nums.size(), maxI=0, inc=0;\r\n\t\tvector<int> dp(n,1), count(n,1);\r\n\t\tfor(int i=0;i<n;i++)\r\n\t\t{\r\n\t\t\tfor(int j=0;j<i;j++){\r\n\t\t\t\tif(nums[i]>nums[j] && 1+dp[j] > dp[i])\r\n\t\t\t\t{\r\n\t\t\t\t\tdp[i] = 1+dp[j];\r\n\t\t\t\t\tcount[i] = count[j];\r\n\t\t\t\t}\r\n\t\t\t\telse if(nums[i]>nums[j] && 1+dp[j] == dp[i])\r\n\t\t\t\t\tcount[i] += count[j];\r\n\t\t\t}\r\n\t\t\tmaxI = max(maxI, dp[i]);\r\n\t\t}\r\n\t\tfor(int i=0;i<n;i++)\r\n\t\t\tif(maxI == dp[i])   inc += count[i];\r\n\t\treturn inc;\r\n\t}\r\n};",
    "python": "class Solution:\r\n    def findNumberOfLIS(self, nums: List[int]) -> int:\r\n        \r\n        if not nums or len(nums) == 0:\r\n            return 0\r\n        \r\n        def find_pos(sub, val):\r\n            left, right = 0, len(sub) - 1\r\n            while left < right:\r\n                mid = (left + right) >> 1\r\n                if sub[mid] >= val: \r\n                    right = mid\r\n                else:\r\n                    left = mid + 1\r\n            return left \r\n        \r\n    \r\n        sub_list = []\r\n        \r\n        for val in nums:\r\n            if len(sub_list) == 0 or val > sub_list[-1][-1][0]:\r\n                # should append a new element at the end\r\n                cur_count = sum([x[1] for x in sub_list[-1] if val > x[0]]) if len(sub_list) != 0 else 1\r\n                sub_list.append([(val, cur_count)])\r\n            else:\r\n                # get the last number to turn it back to a LIS problem\r\n                cur_sub = [array[-1][0] for array in sub_list]\r\n                pos = find_pos(cur_sub, val)\r\n                # if pos == 0, means it is smallest, no need to look the previous level and set it to be 1\r\n                cur_count = sum([x[1] for x in sub_list[pos - 1] if val > x[0]]) if pos > 0 else 1\r\n                sub_list[pos].append((val, cur_count))\r\n      \r\n        return sum([x[1] for x in sub_list[-1]])",
    "java": "// Runtime: 29 ms (Top 72.27%) | Memory: 44.7 MB (Top 20.08%)\r\nclass Solution {\r\n    public int findNumberOfLIS(int[] nums) {\r\n        int N = nums.length;\r\n        int []dp =new int[N];\r\n        int []count = new int[N];\r\n        Arrays.fill(dp,1);Arrays.fill(count,1);\r\n        int maxi = 1;\r\n        for(int i=0;i<N;i++){\r\n            for(int j=0;j<i;j++){\r\n                if(nums[j] < nums[i] && dp[j]+1 > dp[i]){\r\n                    dp[i] = dp[j]+1;\r\n                    //inherit a new one\r\n                    count[i]=count[j];\r\n                    maxi = Math.max(dp[i],maxi);\r\n                }else if(nums[j] < nums[i] && dp[j]+1 == dp[i]){\r\n                    //got one as same len, increase count\r\n                    count[i]+=count[j];\r\n                }\r\n            }\r\n        }//for ends\r\n        int maxlis=0;\r\n        for(int i=0;i<N;i++){\r\n            if(maxi == dp[i]){\r\n                maxlis+=count[i];\r\n            }\r\n        }\r\n        return maxlis;\r\n    }\r\n}",
    "javascript": "// Runtime: 153 ms (Top 49.62%) | Memory: 44.3 MB (Top 25.19%)\r\nvar findNumberOfLIS = function(nums) {\r\n    const { length } = nums;\r\n    const dpLength = Array(length).fill(1);\r\n    const dpCount = Array(length).fill(1);\r\n\r\n    for (let right = 0; right < length; right++) {\r\n        for (let left = 0; left < right; left++) {\r\n            if (nums[left] >= nums[right]) continue;\r\n            if (dpLength[left] + 1 === dpLength[right]) {\r\n                dpCount[right] += dpCount[left];\r\n            } else if (dpLength[left] + 1 > dpLength[right]) {\r\n                dpLength[right] = dpLength[left] + 1;\r\n                dpCount[right] = dpCount[left];\r\n            }\r\n        }\r\n    }\r\n\r\n    const maxLength = Math.max(...dpLength);\r\n    return dpLength.reduce((result, length, index) => {\r\n        const count = dpCount[index];\r\n        return result + (maxLength === length ? count : 0);\r\n    }, 0);\r\n};"
  }
}
