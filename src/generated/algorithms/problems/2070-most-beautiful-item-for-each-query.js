export default {
  "id": 2070,
  "name": "Most Beautiful Item for Each Query",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/most-beautiful-item-for-each-query",
  "relativeDir": "M/Most Beautiful Item for Each Query",
  "slug": "2070-most-beautiful-item-for-each-query",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 48,
    "java": 35,
    "python": 23,
    "javascript": 31
  },
  "languages": {
    "cpp": "// Runtime: 321 ms (Top 69.62%) | Memory: 89.00 MB (Top 83.54%)\r\n\r\nclass Solution {\r\npublic:\r\n\r\n    vector<int> maximumBeauty(vector<vector<int>>& items, vector<int>& queries) {\r\n        sort(items.begin(),items.end());\r\n        int maxi = items[0][1];\r\n        // for(auto xt : items)\r\n        // {\r\n        //    cout<<xt[0]<<\" \"<<xt[1]<<endl;\r\n        // }\r\n        for(auto &xt : items)\r\n        {\r\n            maxi = max(maxi , xt[1]);\r\n            xt[1] = maxi;\r\n        }\r\n        // for(auto xt : items)\r\n        // {\r\n        //    cout<<xt[0]<<\" \"<<xt[1]<<endl;\r\n        // }\r\n        vector<int>ans;\r\n        int n = items.size();\r\n        \r\n        for(int key : queries){\r\n            int left = 0;\r\n            int right = n - 1;\r\n\r\n            int count = 0;\r\n\r\n            while (left <= right) {\r\n                int mid = (right + left) / 2;\r\n                if (items[mid][0] <= key) {\r\n                    count = mid + 1;\r\n                    left = mid + 1;\r\n                }\r\n                else\r\n                    right = mid - 1;\r\n            }\r\n            \r\n            if(count==0)\r\n                ans.push_back(0);\r\n            else\r\n                ans.push_back(items[count-1][1]);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 2544 ms (Top 32.35%) | Memory: 73.6 MB (Top 48.94%)\r\nclass Solution:\r\n    def maximumBeauty(self, items: List[List[int]], queries: List[int]) -> List[int]:\r\n\r\n        items.sort()\r\n        dic = dict()\r\n        res = []\r\n        gmax = 0\r\n        for p,b in items:\r\n            gmax = max(b,gmax)\r\n            dic[p] = gmax\r\n\r\n        keys = sorted(dic.keys())\r\n        for q in queries:\r\n            ind = bisect.bisect_left(keys,q)\r\n            if ind<len(keys) and keys[ind]==q:\r\n                res.append(dic[q])\r\n            elif ind==0:\r\n                res.append(0)\r\n            else:\r\n                res.append(dic[keys[ind-1]])\r\n\r\n        return res",
    "java": "class Solution {\r\n    public int[] maximumBeauty(int[][] items, int[] queries) {\r\n        int[] ans = new int[queries.length];\r\n        Arrays.sort(items, (a, b) -> (a[0] - b[0]));\r\n        int maxBeautySoFar = Integer.MIN_VALUE;\r\n        int[] maxBeauty = new int[items.length];\r\n        \r\n        for(int i = 0; i < items.length; i++) {\r\n            if(maxBeautySoFar < items[i][1]) maxBeautySoFar = items[i][1];\r\n            maxBeauty[i] = maxBeautySoFar;\r\n        }\r\n        \r\n        for(int i = 0; i < queries.length; i++) {\r\n            int idx = findLargestIdxWithPriceLessThan(items, queries[i]);\r\n            if(idx != Integer.MIN_VALUE) ans[i] = maxBeauty[idx];\r\n        }\r\n        return ans;\r\n    }\r\n    \r\n    public int findLargestIdxWithPriceLessThan(int[][] items, int price) {\r\n        int l = 0;\r\n        int r = items.length - 1;\r\n        int maxIdxLessThanEqualToPrice = Integer.MIN_VALUE; \r\n        while(l <= r) {\r\n            int mid = (l + r)/2;\r\n            if(items[mid][0] > price) {\r\n                r = mid - 1;\r\n            } else {\r\n                maxIdxLessThanEqualToPrice = Math.max(maxIdxLessThanEqualToPrice, mid);\r\n                l = mid + 1;\r\n            }\r\n        }\r\n        return maxIdxLessThanEqualToPrice;\r\n    }\r\n}",
    "javascript": "// Runtime: 192 ms (Top 92.3%) | Memory: 78.58 MB (Top 69.2%)\r\n\r\nvar maximumBeauty = function(items, queries) {\r\n    items.sort((a,b) => a[0]-b[0]);\r\n    const n = items.length;\r\n    \r\n    \r\n    let mx = items[0][1];\r\n    \r\n    for (let i = 0; i<n; i++) {\r\n        mx = Math.max(mx, items[i][1]);\r\n        items[i][1] = mx;\r\n    }\r\n    \r\n    \r\n    const ans = [];\r\n    \r\n    for (const q of queries) {\r\n        let l = 0, r = n-1, a = 0;\r\n        while (l<=r) {\r\n            let mid = Math.floor(l+(r-l)/2);\r\n            if (items[mid][0]<=q) {\r\n                a = items[mid][1]\r\n                l = mid+1;\r\n            } else r = mid-1;\r\n        }\r\n        ans.push(a)\r\n    }\r\n    \r\n    return ans;\r\n};"
  }
}
