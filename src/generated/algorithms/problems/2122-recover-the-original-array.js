export default {
  "id": 2122,
  "name": "Recover the Original Array",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/recover-the-original-array",
  "relativeDir": "R/Recover the Original Array",
  "slug": "2122-recover-the-original-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 33,
    "java": 36,
    "python": 28
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int n;\r\n    vector<int> recoverArray(vector<int>& nums) {\r\n        sort(nums.begin(), nums.end());\r\n        int n2 = nums.size();\r\n        n = n2/2;\r\n        int a = nums[0];\r\n        vector<int> v1, v2, ans;\r\n        v1.reserve(n);v2.reserve(n);\r\n        for (int i = 1; i < n2; i++)\r\n        {\r\n            int k = nums[i] - a;\r\n            if (k % 2 == 1 || k == 0 || nums[i] == nums[i - 1]) continue;       \r\n            v1.clear();v2.clear();\r\n            v1.push_back(a);\r\n            int x = 0;\r\n            for (int j = 1; j < n2; j++)\r\n            {\r\n                if (x < v1.size() && (nums[j] == v1[x] + k)) {\r\n                    v2.push_back(nums[j]);\r\n                    x++;\r\n                } else  v1.push_back(nums[j]);\r\n            \r\n                if (v1.size() > n || v2.size() > n) break;\r\n            }\r\n            if (v1.size() != n || v2.size() != n) continue;\r\n            for (int i = 0; i < n; i++) ans.push_back((v1[i] + v2[i]) / 2);\r\n            return ans;\r\n        }\r\n        return ans; \r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def recoverArray(self, nums):\r\n        nums.sort()\r\n        mid = len(nums) // 2\r\n        # All possible k are (nums[j] - nums[0]) // 2, otherwise there is no num that satisfies nums[0] + k = num - k.\r\n        # For nums is sorted, so that any 2 elements (x, y) in nums[1:j] cannot satisfy x + k = y - k.\r\n        # In other words, for any x in nums[1:j], it needs to find y from nums[j + 1:] to satisfy x + k = y - k, but\r\n        # unfortunately if j > mid, then len(nums[j + 1:]) < mid <= len(nums[1:j]), nums[j + 1:] are not enough.\r\n        # The conclusion is j <= mid.\r\n\t\t# If you think it’s not easy to understand why mid is enough, len(nums) can also work well\r\n\t\t# for j in range(1, len(nums)):  \r\n        for j in range(1, mid + 1):  # O(N)\r\n            if nums[j] - nums[0] > 0 and (nums[j] - nums[0]) % 2 == 0:  # Note the problem described k is positive.\r\n                k, counter, ans = (nums[j] - nums[0]) // 2, collections.Counter(nums), []\r\n                # For each number in lower, we try to find the corresponding number from higher list.\r\n                # Because nums is sorted, current n is always the current lowest num which can only come from lower\r\n                # list, so we search the corresponding number of n which equals to n + 2 * k in the left\r\n                # if it can not be found, change another k and continue to try.\r\n                for n in nums:  # check if n + 2 * k available as corresponding number in higher list of n\r\n                    if counter[n] == 0:  # removed by previous num as its corresponding number in higher list\r\n                        continue\r\n                    if counter[n + 2 * k] == 0:  # not found corresponding number in higher list\r\n                        break\r\n                    ans.append(n + k)\r\n                    counter[n] -= 1  # remove n\r\n                    counter[n + 2 * k] -= 1  # remove the corresponding number in higher list\r\n                if len(ans) == mid:\r\n                    return ans",
    "java": "// Runtime: 910 ms (Top 16.67%) | Memory: 44.70 MB (Top 72.22%)\r\n\r\nclass Solution {\r\n    public int[] recoverArray(int[] nums) {\r\n        \r\n    \tint i,n=nums.length;\r\n    \tint ans[]=new int[n/2];\r\n    \tArrays.sort(nums);\r\n    \tPriorityQueue<Integer> pq=new PriorityQueue<>();\r\n    \tfor(i=0;i<n;i++)\r\n    \t\tpq.add(nums[i]);\r\n    \tfor(i=1;i<n;i++)\r\n    \t{\r\n    \t\tPriorityQueue<Integer> pq1=new PriorityQueue<>(pq);\r\n    \t\tint p=0;\r\n    \t\tif((nums[0]+nums[i])%2==0)\r\n    \t\t{\r\n    \t\t\tint k=(nums[0]+nums[i])/2-nums[0];\r\n    \t\t\tif(k==0)\r\n    \t\t\t\tcontinue;\r\n    \t\t\tint curr=pq1.poll();\r\n    \t\t\twhile(pq1.contains((curr+k+k))) {\r\n    \t\t\t\r\n    \t\t\t\tpq1.remove(curr+k+k); \r\n\t\t\t\t\tans[p++]=curr+k;\r\n\t\t\t\t\tif(p==n/2)\r\n\t\t\t\t\t\tbreak;\r\n    \t\t\t\tcurr=pq1.poll();\r\n    \t\t\t}\r\n    \t\t\tif(p==n/2)\r\n    \t\t\t\tbreak;\r\n    \t\t}\r\n    \t}\r\n    \treturn ans;\r\n    }\r\n}"
  }
}
