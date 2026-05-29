export default {
  "id": 985,
  "name": "Sum of Even Numbers After Queries",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sum-of-even-numbers-after-queries",
  "relativeDir": "S/Sum of Even Numbers After Queries",
  "slug": "0985-sum-of-even-numbers-after-queries",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 25,
    "python": 21,
    "javascript": 26
  },
  "languages": {
    "cpp": "// Runtime: 239 ms (Top 12.55%) | Memory: 45.4 MB (Top 84.80%)\r\nclass Solution {\r\npublic:\r\n    vector<int> sumEvenAfterQueries(vector<int>& nums, vector<vector<int>>& queries) {\r\n    //Sum of all even numbers in the array intially\r\n        int tes=accumulate(nums.begin(),nums.end(),0,[](int curr,int a) {if(a%2==0) return curr+=a;\r\n                else return curr;});\r\n        vector<int> ans(queries.size());\r\n        bool a=false,b=false;\r\n        for(int i=0;i<queries.size();i++)\r\n        {\r\n            //If both are even or odd it stays even then\r\n            a=nums[queries[i][1]]%2==0 && queries[i][0]%2==0;\r\n            b=abs(nums[queries[i][1]]%2)==1 && abs(queries[i][0]%2)==1;\r\n            if(a)\r\n                tes+=queries[i][0];\r\n            else if(b)\r\n                tes+=queries[i][0]+nums[queries[i][1]];\r\n            else if(nums[queries[i][1]]%2==0)\r\n                tes-=nums[queries[i][1]]; //If even turns to odd because of operation remove that even value from ans\r\n            ans[i]=tes; //Adding the result\r\n            nums[queries[i][1]]+=queries[i][0]; //now completing the operation in queries to use in further operations\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 1565 ms (Top 5.26%) | Memory: 20.6 MB (Top 46.36%)\r\nclass Solution:\r\n# O(n) || O(1)\r\n# Runtime: 583ms 72.40% || memory: 20.5mb 37.69%\r\n    def sumEvenAfterQueries(self, nums: List[int], queries: List[List[int]]) -> List[int]:\r\n        totalEvenNumSum = sum([num for num in nums if num % 2 == 0])\r\n        result = []\r\n\r\n        for val, idx in queries:\r\n            oldVal = nums[idx]\r\n            nums[idx] += val\r\n\r\n            if oldVal % 2 == 0:\r\n                totalEvenNumSum -= oldVal\r\n\r\n            if nums[idx] % 2 == 0:\r\n                totalEvenNumSum += nums[idx]\r\n\r\n            result.append(totalEvenNumSum)\r\n\r\n        return result",
    "java": "// Runtime: 5 ms (Top 90.94%) | Memory: 68.3 MB (Top 82.52%)\r\nclass Solution {\r\n    public int[] sumEvenAfterQueries(int[] nums, int[][] queries) {\r\n        int sum = 0;\r\n        for (int i : nums) {\r\n            if ((i & 1) == 0) { // (i % 2 == 0)\r\n                sum += i;\r\n            }\r\n        }\r\n        int[] ans = new int[nums.length];\r\n        int k = 0;\r\n        for (int[] q : queries) {\r\n            int idx = q[1];\r\n            if ((nums[idx] & 1) == 0) { // (nums[idx] % 2 == 0)\r\n                sum -= nums[idx];\r\n            }\r\n            nums[idx] += q[0];\r\n            if ((nums[idx] & 1) == 0) { // (nums[idx] % 2 == 0)\r\n                sum += nums[idx];\r\n            }\r\n            ans[k++] = sum;\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 187 ms (Top 62.12%) | Memory: 50.6 MB (Top 51.52%)\r\n/**\r\n * @param {number[]} nums\r\n * @param {number[][]} queries\r\n * @return {number[]}\r\n */\r\nvar sumEvenAfterQueries = function(nums, queries) {\r\n    let sumEven = 0, ans = []\r\n    for (let i = 0; i < nums.length; i++) {\r\n        if (nums[i] % 2 == 0) sumEven += nums[i]\r\n    }\r\n\r\n    for (let [val, idx] of queries) {\r\n        if (nums[idx] % 2 == 0) {\r\n            if (val % 2 == 0) sumEven += val\r\n            else sumEven -= nums[idx]\r\n        } else {\r\n            // odd + odd\r\n            if (val % 2 !== 0) sumEven += nums[idx] + val\r\n        }\r\n        nums[idx] += val\r\n        ans.push(sumEven)\r\n    }\r\n\r\n    return ans\r\n};"
  }
}
