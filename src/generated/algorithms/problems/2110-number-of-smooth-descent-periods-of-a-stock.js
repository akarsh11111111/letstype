export default {
  "id": 2110,
  "name": "Number of Smooth Descent Periods of a Stock",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock",
  "relativeDir": "N/Number of Smooth Descent Periods of a Stock",
  "slug": "2110-number-of-smooth-descent-periods-of-a-stock",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 22,
    "python": 30,
    "javascript": 24
  },
  "languages": {
    "cpp": "// Runtime: 112 ms (Top 92.82%) | Memory: 103.30 MB (Top 60.63%)\r\n\r\nclass Solution {\r\npublic:\r\n    long long getDescentPeriods(vector<int>& prices) {\r\n        int n=prices.size();\r\n        int start=0;\r\n        int end  =0;\r\n        long long ans=1;//since, we will be starting our iteration from ist index\r\n        \r\n        for(end=1 ; end<n; end++){\r\n            \r\n            if(prices[end] == prices[end-1] - 1){\r\n                ans += end - start + 1;\r\n            }\r\n            \r\n            else{\r\n                start=end;\r\n                ans += end - start + 1;\r\n            }\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n};",
    "python": "import sys\r\nclass Solution:\r\n    def getDescentPeriods(self, prices: List[int]) -> int: \r\n        def calculate(k,ans):\r\n            if k>1:\r\n                ans+=((k-1)*(k))//2 \r\n\t\t\t\t#Sum of Natural Numbers\r\n                return ans\r\n            else:\r\n                return ans\r\n        end = 0\r\n        start = 0\r\n        prev= sys.maxsize\r\n        k= 0\r\n        ans = 0\r\n        while end<len(prices):     \r\n            if prev- prices[end]==1 or prev == sys.maxsize:\r\n                k+=1\r\n                prev = prices[end]\r\n                end+=1    \r\n            else:             \r\n                ans = calculate(k,ans)\r\n                start = end\r\n                if end<len(prices):\r\n                    prev = sys.maxsize\r\n                k=0\r\n        if k>1:\r\n            ans = calculate(k,ans)\r\n\t\t\t\r\n        return ans+len(prices)",
    "java": "// Runtime: 7 ms (Top 24.69%) | Memory: 88.4 MB (Top 55.38%)\r\nclass Solution {\r\n    public long getDescentPeriods(int[] prices) {\r\n        int i=0;\r\n        int j=1;\r\n        long ans=1;\r\n        while(j<prices.length){\r\n            if( prices[j-1]-prices[j]==1){\r\n            //It means that j(current element) can be part of previous subarrays (j-i)\r\n            //and can also start a subarray from me (+1). So add (j-i+1) in total Subarrays\r\n                int count=j-i+1;\r\n                ans+=count;\r\n            }else{\r\n            //It means that j cannot be part of previous subarrays but can start subarray from me. So, ans+=1\r\n                i=j;\r\n                ans+=1;\r\n            }\r\n            j++;\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 154 ms (Top 25.58%) | Memory: 52.6 MB (Top 62.79%)\r\nvar getDescentPeriods = function(prices) {\r\n    const n = prices.length;\r\n\r\n    let left = 0;\r\n    let totRes = 0;\r\n\r\n    while (left < n) {\r\n        let count = 1;\r\n\r\n        let right = left + 1;\r\n\r\n        while (right < n && prices[right] + 1 === prices[right - 1]) {\r\n            count += (right - left + 1);\r\n            ++right;\r\n        }\r\n\r\n        totRes += count;\r\n\r\n        left = right;\r\n    }\r\n\r\n    return totRes;\r\n};"
  }
}
