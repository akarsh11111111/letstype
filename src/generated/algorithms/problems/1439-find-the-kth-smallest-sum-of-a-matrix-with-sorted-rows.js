export default {
  "id": 1439,
  "name": "Find the Kth Smallest Sum of a Matrix With Sorted Rows",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows",
  "relativeDir": "F/Find the Kth Smallest Sum of a Matrix With Sorted Rows",
  "slug": "1439-find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 39,
    "java": 32,
    "python": 21,
    "javascript": 31
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\nvector<int> kSmallestPairs(vector<int>& nums1, vector<int>& nums2, int k) {\r\n        auto cmp = [&nums1,&nums2](pair<int,int> a, pair<int,int>b){\r\n            return nums1[a.first]+nums2[a.second] >\r\n                nums1[b.first]+nums2[b.second];\r\n        };\r\n        int n = nums1.size();\r\n        int m = nums2.size();\r\n        vector<int> ans;\r\n        if(n==0 || m==0)\r\n            return ans;\r\n        priority_queue<pair<int,int>,vector<pair<int,int>>,decltype(cmp)>pq(cmp);\r\n        pq.push({0,0});\r\n        while(k-- && !pq.empty())\r\n        {\r\n            int i = pq.top().first;\r\n            int j = pq.top().second;\r\n            pq.pop();\r\n            \r\n            if(j+1<m)\r\n                pq.push({i,j+1});\r\n            if(j==0 && i+1 <n)\r\n                pq.push({i+1,j});\r\n            \r\n            ans.push_back(nums1[i]+nums2[j]);\r\n        }\r\n        return ans;\r\n    }\r\n    int kthSmallest(vector<vector<int>>& mat, int k) {\r\n        vector<int> nums1 = mat[0];\r\n        int n =  mat.size();\r\n        for(int i = 1; i<n; ++i)\r\n        {\r\n            nums1 = kSmallestPairs(nums1,mat[i],k);\r\n        }\r\n        return nums1[k-1];\r\n    }\r\n};",
    "python": "class Solution:\r\n    def kthSmallest(self, mat: List[List[int]], k: int) -> int:\r\n        def kSmallestPairs(nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:\r\n            h = [(nums1[0]+nums2[0],0,0)]\r\n            visited = set()\r\n            res = []\r\n            while h and k > 0:\r\n                e, i, j = heappop(h)\r\n                if (i,j) in visited: continue\r\n                res.append(e)\r\n                visited.add((i,j))\r\n                if j+1 < len(nums2):\r\n                    heappush(h,(nums1[i]+nums2[j+1],i,j+1))\r\n                if i+1 < len(nums1):\r\n                    heappush(h,(nums1[i+1]+nums2[j],i+1,j))\r\n                k -= 1\r\n            return res\r\n        res = mat[0]\r\n        for i in range(1, len(mat)):\r\n            res = kSmallestPairs(res, mat[i], k)\r\n        return res[-1]",
    "java": "class Solution {\r\n    public int kthSmallest(int[][] mat, int k) {\r\n        int[] row = mat[0];\r\n        \r\n        for(int i=1; i<mat.length; i++) {\r\n            row = findKthSmallest(row, mat[i], k);\r\n        }\r\n        \r\n        return row[k-1];\r\n    }\r\n    \r\n    private int[] findKthSmallest(int[] num1, int[] num2, int k) {\r\n        List<Integer> list = new ArrayList<>();\r\n        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a,b) -> (a[0]+a[1]) - (b[0]+b[1]));\r\n        \r\n        for(int i=0; i<num1.length && i<k; i++) {\r\n            minHeap.offer(new int[]{num1[i], num2[0], 0});\r\n        }\r\n        \r\n        for(int i=0; i<k && !minHeap.isEmpty(); i++) {\r\n            int[] candidate = minHeap.poll();\r\n            list.add(candidate[0] + candidate[1]); // SUM;\r\n            int num2Idx = candidate[2];\r\n            \r\n            if(num2Idx<num2.length-1) {\r\n                minHeap.offer(new int[]{candidate[0], num2[num2Idx+1], num2Idx+1});\r\n            }\r\n        }\r\n        \r\n        return list.stream().mapToInt(i->i).toArray();\r\n    }\r\n}",
    "javascript": "// Runtime: 1870 ms (Top 17.39%) | Memory: 49.3 MB (Top 47.83%)\r\n/**\r\n * @param {number[][]} mat\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nvar kthSmallest = function(mat, k) {\r\n    var m = mat.length;\r\n    var n = m ? mat[0].length : 0;\r\n    if (!m || !n) return -1;\r\n    var sums = [0];\r\n    for (var idx = 0; idx < m; idx++) {\r\n        var newSums = []\r\n        for (var sum of sums) {\r\n            for (var i = 0; i < n && i < k; i++) {\r\n                var newSum = sum + mat[idx][i];\r\n                if (newSums.length < k) {\r\n                    newSums.push(newSum);\r\n                } else if (newSum < newSums[k-1]) {\r\n                    newSums.pop();\r\n                    newSums.push(newSum);\r\n                } else {\r\n                    break;\r\n                }\r\n                newSums.sort((a, b) => a - b);\r\n            }\r\n        }\r\n        sums = newSums;\r\n    }\r\n    return sums[k-1];\r\n};"
  }
}
