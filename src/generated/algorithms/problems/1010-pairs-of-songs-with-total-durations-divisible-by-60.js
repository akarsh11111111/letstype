export default {
  "id": 1010,
  "name": "Pairs of Songs With Total Durations Divisible by 60",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60",
  "relativeDir": "P/Pairs of Songs With Total Durations Divisible by 60",
  "slug": "1010-pairs-of-songs-with-total-durations-divisible-by-60",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 20,
    "python": 10,
    "javascript": 18
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int numPairsDivisibleBy60(vector<int>& time) {\r\n        int ans=0;\r\n        vector<int>rem(60,0);\r\n        for(int i=0; i<time.size(); i++){\r\n            rem[time[i]%60]++;\r\n        }\r\n        if(rem[0]>0)while(rem[0]--) \r\n            ans+=rem[0];\r\n        if(rem[30]>1)while(rem[30]--) \r\n            ans+=rem[30];\r\n        for(int i=1; i<30; i++){\r\n            ans+=rem[i]*rem[60-i];\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "// Runtime: 235 ms (Top 92.55%) | Memory: 21.60 MB (Top 5.78%)\r\n\r\nclass Solution:\r\n    def numPairsDivisibleBy60(self, time: List[int]) -> int:\r\n        res  , count  = 0,  [0] * 60\r\n        for one in range(len(time)):\r\n            index = time[one] % 60\r\n            res += count[(60 - index)%60] # %60 is for index==0\r\n            count[index] += 1\r\n        return res",
    "java": "class Solution {\r\n    public int numPairsDivisibleBy60(int[] time) \r\n    {\r\n        int[] hm=new int[61];\r\n        int n=time.length;\r\n        for(int i=0;i<n;i++)\r\n            time[i]=time[i]%60;\r\n        int res=0;\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            if(hm[60-time[i]]!=0)\r\n               res=res+hm[60-time[i]];\r\n            if(time[i]==0)\r\n                hm[60]+=1;\r\n            else\r\n                hm[time[i]]+=1;\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 53 ms (Top 94.39%) | Memory: 47.10 MB (Top 9.35%)\r\n\r\nvar numPairsDivisibleBy60 = function(time) {\r\n    let num=0;\r\n    let arr=new Array(60).fill(0);\r\n\r\n    for(let i of time){\r\n        let k=i%60;\r\n\r\n        if(k===0)\r\n            num+=arr[k];\r\n        else\r\n            num+=arr[60-k];\r\n        \r\n        arr[k]++;\r\n    }\r\n    return num;\r\n};"
  }
}
