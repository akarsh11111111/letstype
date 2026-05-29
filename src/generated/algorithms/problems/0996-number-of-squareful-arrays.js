export default {
  "id": 996,
  "name": "Number of Squareful Arrays",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-squareful-arrays",
  "relativeDir": "N/Number of Squareful Arrays",
  "slug": "0996-number-of-squareful-arrays",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 45,
    "python": 38
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int numSquarefulPerms(vector<int>& nums) {\r\n     sort(nums.begin(),nums.end());\r\n        int ans=0;\r\n        solve(nums,0,ans);\r\n        return ans;\r\n    }\r\n    void solve(vector<int>nums,int idx,int &ans){\r\n        if(idx>=nums.size())\r\n        {\r\n            ++ans;\r\n        }\r\n        for(int i=idx;i<nums.size();i++){\r\n            if(i>idx && nums[i]==nums[idx])\r\n                continue;\r\n            swap(nums[i],nums[idx]);\r\n            if(idx==0 || ( idx>0 && isSquare(nums[idx]+nums[idx-1])))\r\n                solve(nums,idx+1,ans);\r\n        }\r\n    }\r\n    bool isSquare(int n){\r\n        int temp=sqrt(n);\r\n        return temp*temp==n;\r\n    }\r\n};",
    "python": "# Runtime: 56 ms (Top 51.37%) | Memory: 13.9 MB (Top 48.63%)\r\nclass Solution:\r\n    def isSquare(self,num):\r\n        return int(num**0.5)**2 == num\r\n    def makePermutation(self,used,vis,prev,n):\r\n        if used == n:\r\n            #we reached the end\r\n            self.ans += 1\r\n            return\r\n        tmp = {}\r\n        for i in range(n):\r\n            if vis[i] == False and self.nums[i] not in tmp:\r\n                tmp[self.nums[i]] = True\r\n                if self.nums[i] in self.d[prev]:\r\n                    vis[i] = True\r\n                    self.makePermutation(used+1,vis,self.nums[i],n)\r\n                    vis[i] = False\r\n\r\n    def numSquarefulPerms(self, nums: List[int]) -> int:\r\n        d = { x:{} for x in nums}\r\n        n = len(nums)\r\n        for i in range(n):\r\n            for j in range(i+1,n):\r\n                if self.isSquare(nums[i] + nums[j]):\r\n                    d[nums[i]][nums[j]] = True\r\n                    d[nums[j]][nums[i]] = True\r\n        self.nums = nums\r\n        self.ans = 0\r\n        self.d = d\r\n        vis = [False]*n\r\n        tmp = {}\r\n        for i in range(n):\r\n            if nums[i] in tmp: continue\r\n            tmp[nums[i]] = True\r\n            vis[i] = True\r\n            self.makePermutation(1,vis,self.nums[i],n)\r\n            vis[i] = False\r\n        return self.ans",
    "java": "// Runtime: 1 ms (Top 100.00%) | Memory: 42 MB (Top 28.32%)\r\nclass Solution {\r\n    int count;\r\n    public int numSquarefulPerms(int[] nums) {\r\n        int n = nums.length;\r\n        if(n<2)\r\n            return count;\r\n        backtrack(nums,n,0);\r\n        return count;\r\n\r\n    }\r\n\r\n    void backtrack(int [] nums,int n, int start)\r\n    {\r\n        if(start==n)\r\n        {\r\n            count++;\r\n        }\r\n       Set <Integer> set = new HashSet <>();\r\n        for(int i = start;i<n;i++)\r\n        {\r\n            if(set.contains(nums[i])) continue;\r\n            swap(nums,start,i);\r\n            if(start == 0 || isPerfectSq(nums[start],nums[start-1]))\r\n                backtrack(nums,n,start+1);\r\n            swap(nums,start,i);\r\n            set.add(nums[i]);\r\n        }\r\n    }\r\n\r\n    void swap(int [] A,int a, int b)\r\n    {\r\n        int temp = A[a];\r\n        A[a] = A[b];\r\n        A[b] = temp;\r\n\r\n    }\r\n\r\n    boolean isPerfectSq(int a, int b)\r\n    {\r\n        int x = a+b;\r\n        double sqrt = Math.sqrt(x);\r\n        return (sqrt - (int)sqrt) == 0 ?true:false;\r\n    }\r\n}"
  }
}
