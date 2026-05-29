export default {
  "id": 646,
  "name": "Maximum Length of Pair Chain",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-length-of-pair-chain",
  "relativeDir": "M/Maximum Length of Pair Chain",
  "slug": "0646-maximum-length-of-pair-chain",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 34,
    "python": 34,
    "javascript": 34
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int findLongestChain(vector<vector<int>>& arr) {\r\n      \r\n       if(arr.size()==1)\r\n       {\r\n           return 1;\r\n       }\r\n       vector<pair<int,int>>v;\r\n       for(int i=0;i<arr.size();i++)\r\n       {\r\n           v.push_back({arr[i][0],arr[i][1]});\r\n       }\r\n       sort(v.begin(),v.end());\r\n       \r\n       vector<int>dp(v.size(),0);\r\n       int ans=INT_MIN; \r\n       dp[0]=1;\r\n       for(int i=1;i<v.size();i++)\r\n       {\r\n           int temp=0;\r\n           for(int j=i-1;j>=0;j--)\r\n           {\r\n               if(v[j].second<v[i].first)\r\n               {\r\n                   temp=max(temp,dp[j]);\r\n               }\r\n           }\r\n           dp[i]=1+temp;\r\n           ans=max(ans,dp[i]);\r\n       }\r\n       return ans;\r\n    }\r\n};",
    "python": "class Solution {\r\npublic:\r\n    int findLongestChain(vector<vector<int>>& arr) {\r\n      \r\n       if(arr.size()==1)\r\n       {\r\n           return 1;\r\n       }\r\n       vector<pair<int,int>>v;\r\n       for(int i=0;i<arr.size();i++)\r\n       {\r\n           v.push_back({arr[i][0],arr[i][1]});\r\n       }\r\n       sort(v.begin(),v.end());\r\n       \r\n       vector<int>dp(v.size(),0);\r\n       int ans=INT_MIN; \r\n       dp[0]=1;\r\n       for(int i=1;i<v.size();i++)\r\n       {\r\n           int temp=0;\r\n           for(int j=i-1;j>=0;j--)\r\n           {\r\n               if(v[j].second<v[i].first)\r\n               {\r\n                   temp=max(temp,dp[j]);\r\n               }\r\n           }\r\n           dp[i]=1+temp;\r\n           ans=max(ans,dp[i]);\r\n       }\r\n       return ans;\r\n    }\r\n};",
    "javascript": "class Solution {\r\npublic:\r\n    int findLongestChain(vector<vector<int>>& arr) {\r\n      \r\n       if(arr.size()==1)\r\n       {\r\n           return 1;\r\n       }\r\n       vector<pair<int,int>>v;\r\n       for(int i=0;i<arr.size();i++)\r\n       {\r\n           v.push_back({arr[i][0],arr[i][1]});\r\n       }\r\n       sort(v.begin(),v.end());\r\n       \r\n       vector<int>dp(v.size(),0);\r\n       int ans=INT_MIN; \r\n       dp[0]=1;\r\n       for(int i=1;i<v.size();i++)\r\n       {\r\n           int temp=0;\r\n           for(int j=i-1;j>=0;j--)\r\n           {\r\n               if(v[j].second<v[i].first)\r\n               {\r\n                   temp=max(temp,dp[j]);\r\n               }\r\n           }\r\n           dp[i]=1+temp;\r\n           ans=max(ans,dp[i]);\r\n       }\r\n       return ans;\r\n    }\r\n};"
  }
}
