export default {
  "id": 2073,
  "name": "Time Needed to Buy Tickets",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/time-needed-to-buy-tickets",
  "relativeDir": "T/Time Needed to Buy Tickets",
  "slug": "2073-time-needed-to-buy-tickets",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 19,
    "python": 3,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 67.44%) | Memory: 7.6 MB (Top 66.09%)\r\nclass Solution {\r\npublic:\r\n    int timeRequiredToBuy(vector<int>& tickets, int k) {\r\n            int ans =0;\r\n            int n = tickets.size();\r\n            int ele = tickets[k];\r\n            for(int i=0;i< n; i++){\r\n                    if(i<=k){\r\n                        ans+= min(ele, tickets[i]);\r\n                    }else{\r\n                        ans+= min(ele-1, tickets[i]);\r\n                    }\r\n            }\r\n            return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def timeRequiredToBuy(self, t: List[int], k: int) -> int:\r\n        return sum(min(v, t[k] if i <= k else t[k] - 1) for i, v in enumerate(t))",
    "java": "// Runtime: 2 ms (Top 62.6%) | Memory: 40.11 MB (Top 61.2%)\r\n\r\nclass Solution {\r\n    public int timeRequiredToBuy(int[] tickets, int k){\r\n        int n= tickets.length;\r\n        int time=0;\r\n    \r\n        if(tickets[k]==1) return k+1;\r\n        while(tickets[k]>0){\r\n            for(int i=0;i<n;i++){\r\n                if(tickets[i]==0) continue;\r\n                tickets[i]=tickets[i]-1;\r\n                time++;\r\n                if(tickets[k]==0) break;\r\n            }\r\n        }k--;\r\n        return time;\r\n    }\r\n}",
    "javascript": "var timeRequiredToBuy = function(tickets, k) {\r\n     \r\n    let countTime = 0;\r\n\r\n    while(tickets[k] !== 0){\r\n\r\n        for(let i = 0; i < tickets.length; i++){\r\n            \r\n            if(tickets[k] == 0){\r\n                return countTime;\r\n            }\r\n            if(tickets[i] !== 0){\r\n                tickets[i] = tickets[i] - 1;\r\n                countTime++;\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n    return countTime;\r\n};"
  }
}
