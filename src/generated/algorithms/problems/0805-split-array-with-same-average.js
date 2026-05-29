export default {
  "id": 805,
  "name": "Split Array With Same Average",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/split-array-with-same-average",
  "relativeDir": "S/Split Array With Same Average",
  "slug": "0805-split-array-with-same-average",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 38,
    "java": 31,
    "python": 15
  },
  "languages": {
    "cpp": "// Runtime: 319 ms (Top 70.63%) | Memory: 37 MB (Top 67.84%)\r\nclass Solution {\r\npublic:\r\n    int totsum;\r\n    bool findans(vector<set<int>>& dp, vector<int>& nums, int start, int sum, int bitcnt){\r\n        if(start==nums.size()){\r\n            for(int i=0; i<dp.size(); i++)\r\n                if(i+bitcnt!= 0 && i+bitcnt!= nums.size() && ((i+bitcnt)*totsum)%nums.size() == 0 && dp[i].find((((i+bitcnt)*totsum)/nums.size()) - sum)!=dp[i].end())\r\n                    return true;\r\n            return false;\r\n        }\r\n        return findans(dp, nums, start+1, sum, bitcnt) || findans(dp, nums, start+1, sum+nums[start], bitcnt+1);\r\n    }\r\n\r\n    void filldp(vector<set<int>>& dp, vector<int>& nums, int start, int mask){\r\n        if(start==nums.size()/2){\r\n            int sum = 0, cnt=0;\r\n            for(int i=0; i<nums.size(); i++)\r\n                if(mask&(1<<i)){\r\n                    sum += nums[i];\r\n                    cnt++;\r\n                }\r\n            dp[cnt].insert(sum);\r\n            return;\r\n        }\r\n        filldp(dp, nums, start+1, mask);\r\n        filldp(dp, nums, start+1, mask^(1<<start));\r\n    }\r\n\r\n    bool splitArraySameAverage(vector<int>& nums) {\r\n        totsum = 0;\r\n        for(int i=0; i<nums.size(); i++)\r\n            totsum += nums[i];\r\n        vector<set<int>> dp(nums.size()/2 + 1);\r\n        filldp(dp, nums, 0, 0);\r\n        return findans(dp, nums, nums.size()/2, 0, 0);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def splitArraySameAverage(self, A: List[int]) -> bool:\r\n        A.sort()\r\n        DP=[set() for _ in range(len(A)//2+1)]    #DP[i] stores the all available sum with i items in a bracket\r\n        all_sum=sum(A)\r\n        DP[0]=set([0])\r\n        for item in A:                  #iterate over items in the list\r\n            for count in range(len(DP)-2,-1,-1):          # iterate backwards w.r.t. the bracket size\r\n                if len(DP[count])>0:                             # if DP[i] is not empty, then update DP[i+1] by adding the current item into all sums in DP[i]\r\n                    for a in DP[count]:\r\n                        DP[count+1].add(a+item)\r\n        for size in range(1,len(DP)):\r\n            if all_sum*size/len(A) in DP[size]:\r\n                return True\r\n        return False",
    "java": "class Solution {\r\n    public boolean splitArraySameAverage(int[] nums) {\r\n        int n = nums.length, sum = Arrays.stream(nums).sum();\r\n        Set<Integer>[] a = new HashSet[n/2+1];\r\n        Set<Integer>[] b = new HashSet[n/2+2];\r\n        Arrays.setAll(a, o -> new HashSet<>());\r\n        Arrays.setAll(b, o -> new HashSet<>());\r\n        gen(0, n/2, 0, 0, nums, a);\r\n        gen(n/2, n, 0, 0, nums, b);\r\n        for (int i = 0; i < a.length; i++){ // i = num of elements selected from A\r\n            for (int j = 0; j < b.length; j++){ // j = num of elements selected from B\r\n                if (i+j>0 && i+j < n && sum*(i+j)%n == 0){\r\n                    for (int cur : a[i]){ // do Two Sum\r\n                        if (b[j].contains(sum*(i+j)/n-cur)){\r\n                            return true;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n    \r\n    private void gen(int cur, int n, int bits, int sum, int[] nums, Set<Integer>[] set){\r\n        set[bits].add(sum);\r\n        if (cur < n){\r\n            gen(cur+1, n, bits+1, sum+nums[cur], nums, set);\r\n            gen(cur+1, n, bits, sum, nums, set);\r\n        }\r\n    }\r\n}"
  }
}
