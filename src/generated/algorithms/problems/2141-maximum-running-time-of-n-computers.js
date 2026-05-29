export default {
  "id": 2141,
  "name": "Maximum Running Time of N Computers",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-running-time-of-n-computers",
  "relativeDir": "M/Maximum Running Time of N Computers",
  "slug": "2141-maximum-running-time-of-n-computers",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 49,
    "java": 49,
    "python": 9,
    "javascript": 16
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\nbool canFit(int n,long timeSpan,vector<int>batteries)\r\n{\r\n    long currBatSum=0;\r\n\tlong targetBatSum=n*timeSpan; \r\n    for(auto it:batteries)\r\n    {\r\n        if(it<timeSpan)\r\n            currBatSum+=it;\r\n        else\r\n            currBatSum+=timeSpan;\r\n        \r\n        if(currBatSum>=targetBatSum)\r\n            return true;  \r\n    }\r\n    \r\n    return false;\r\n }\r\n\r\nlong long maxRunTime(int n, vector<int>& batteries) {\r\n  long totalSum=0;\r\n  long low=*min_element(batteries.begin(),batteries.end());\r\n  \r\n    for(auto it:batteries)\r\n    {\r\n        totalSum+=it;  \r\n    }\r\n    \r\n    long high = totalSum/n;\r\n    long ans=-1;\r\n    \r\n    while(low<=high)\r\n    {\r\n     \r\n      long mid = low+(high-low)/2;    \r\n     if(canFit(n,mid,batteries))\r\n     {\r\n         ans=mid;\r\n         low=mid+1;\r\n     }\r\n     else\r\n     {\r\n         high=mid-1;\r\n     }\r\n           \r\n    }  \r\n   return ans;       \r\n}",
    "python": "# Runtime: 1321 ms (Top 44.04%) | Memory: 28.7 MB (Top 24.77%)\r\nclass Solution:\r\n    def maxRunTime(self, n: int, batteries: List[int]) -> int:\r\n        batteries.sort()\r\n        total=sum(batteries)\r\n        while batteries[-1]>total//n:\r\n            n-=1\r\n            total-=batteries.pop()\r\n        return total//n",
    "java": "// Runtime: 16 ms (Top 70.5%) | Memory: 56.31 MB (Top 66.2%)\r\n\r\nclass Solution {\r\n\r\n    private boolean canFit(int n, long k, int[] batteries) {\r\n        long currBatSum = 0;\r\n        long target = n * k;\r\n\r\n        for (int bat : batteries) {\r\n            if (bat < k) {\r\n                currBatSum += bat;\r\n            } else {\r\n                currBatSum += k;\r\n            }\r\n\r\n            if (currBatSum >= target) {\r\n                return true;\r\n            }\r\n        }\r\n\r\n        return currBatSum >= target;\r\n\r\n    }\r\n\r\n    public long maxRunTime(int n, int[] batteries) {\r\n        long batSum = 0;\r\n        for (int bat : batteries) {\r\n            batSum += bat;\r\n        }\r\n        \r\n        long lower = 0;\r\n        long upper = batSum / n;\r\n        long res = -1;\r\n\r\n\t\t// binary search\r\n        while (lower <= upper) {\r\n            long mid = lower + (upper - lower) / 2;\r\n\r\n            if (canFit(n, mid, batteries)) {\r\n                res = mid;\r\n                lower = mid + 1;\r\n            } else {\r\n                upper = mid - 1;\r\n            }\r\n        }\r\n\r\n        return res;\r\n    }\r\n}",
    "javascript": "var maxRunTime = function(n, batteries) {\r\n    let total = batteries.reduce((acc,x)=>acc+x,0)\r\n    let batts = batteries.sort((a,b)=>b-a)\r\n    let i = 0\r\n    while(1){\r\n        let average_truncated = parseInt(total / n)\r\n        let cur = batts[i]\r\n        if(cur > average_truncated){\r\n            total -= cur // remove all of that batteries charge from the equation\r\n            n --         // remove the computer from the equation\r\n            i++\r\n        } else {\r\n            return average_truncated\r\n        }\r\n    }\r\n};"
  }
}
