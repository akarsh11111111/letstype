export default {
  "id": 887,
  "name": "Super Egg Drop",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/super-egg-drop",
  "relativeDir": "S/Super Egg Drop",
  "slug": "0887-super-egg-drop",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 93,
    "python": 36
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 89.00%) | Memory: 6.1 MB (Top 94.15%)\r\n/*\r\nLogic Here used is:\r\n - we need to find, max no of floors soluiton can be found with K egg by using m move\r\n - recursion will use like to find m moves no of floor count we need to add dp[m-1][k-1] & dp[m-1][k];\r\n\r\n*/\r\n\r\nclass Solution {\r\npublic:\r\n    int superEggDrop(int k, int n) {\r\n        vector<int> dp(k+1, 0);\r\n        int m = 0;\r\n        while(dp[k] < n){\r\n            m++;\r\n            for(int i = k; i >= 1; --i){\r\n                dp[i] = dp[i] + dp[i-1] + 1;\r\n            }\r\n        }\r\n        return m;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def superEggDrop(self, e: int, f: int) -> int:\r\n        dp = [[-1 for _ in range(e+1)] for _ in range(f+1)]\r\n        \r\n        def solve(floors,eggs):\r\n            \r\n            if eggs==1:\r\n                dp[floors][eggs] = floors\r\n                return floors\r\n\r\n            if floors==0:\r\n                dp[floors][eggs] = 0\r\n                return 0\r\n            \r\n            if dp[floors][eggs]==-1:\r\n                \r\n                ans = math.inf\r\n                low = 1\r\n                high = floors\r\n                # Binary Search for the floor where to drop the egg\r\n                while low<=high:\r\n                    mid = (low+high)//2\r\n                    left = solve(mid-1,eggs-1)\r\n                    right = solve(floors-mid,eggs)\r\n                    tmp = 1 + max(left,right)\r\n                    if left < right:\r\n                        low = mid+1\r\n                    else:\r\n                        high = mid-1\r\n                    ans = min(ans,tmp)\r\n              \r\n                dp[floors][eggs] = ans\r\n                \r\n            return dp[floors][eggs]\r\n        \r\n        return solve(f,e)",
    "java": "// Runtime: 72 ms (Top 33.33%) | Memory: 54.3 MB (Top 43.02%)\r\nclass Solution {\r\n\r\n    int [][]dp;\r\n    public int superEggDrop(int k, int n) {\r\n        dp=new int[k+1][n+1];\r\n\r\n        for(int i=0;i<=k;i++){\r\n            Arrays.fill(dp[i],-1);\r\n        }\r\n\r\n        return solve(k,n);\r\n\r\n    }\r\n\r\n    public int solve(int e, int f){\r\n        if(f==0 || f==1){\r\n            return f;\r\n        }\r\n\r\n        if(e==1){\r\n            return f;\r\n        }\r\n\r\n        if(dp[e][f]!=-1){\r\n            return dp[e][f];\r\n        }\r\n\r\n        int high=f;\r\n        int low=1;\r\n        int min=Integer.MAX_VALUE;\r\n\r\n        while(low<=high){\r\n            int k=low+(high-low)/2;\r\n\r\n            int l=0;\r\n            int r=0;\r\n\r\n            if(dp[e-1][k-1]!=-1){\r\n                l=dp[e-1][k-1];\r\n            }else{\r\n                l=solve(e-1,k-1);\r\n            }\r\n\r\n            if(dp[e][f-k]!=-1){\r\n                r=dp[e][f-k];\r\n            }else{\r\n                r=solve(e,f-k);\r\n            }\r\n\r\n            if(l>r){\r\n               high=k-1;\r\n            }else{\r\n               low=k+1;\r\n            }\r\n\r\n            int temp=Math.max(l,r)+1;\r\n            min=Math.min(min,temp);\r\n        }\r\n\r\n        return dp[e][f]=min;\r\n    }\r\n}\r\n\r\n//-------------------------TLE--------------------------\r\n\r\n// class Solution {\r\n// public int superEggDrop(int k, int n) {\r\n// int [][]dp=new int[k+1][n+1];\r\n\r\n// for(int i=1;i<=k;i++){\r\n// for(int j=1;j<=n;j++){\r\n// if(i==1){\r\n// dp[i][j]=j;\r\n// }else if(j==1){\r\n// dp[i][j]=1;\r\n// }else{\r\n// int min=Integer.MAX_VALUE;\r\n\r\n// for(int m=j-1,p=0;m>=0;m--,p++){\r\n// int max=Math.max(dp[i][m],dp[i-1][p]);\r\n\r\n// min=Math.min(min,max);\r\n// }\r\n\r\n// dp[i][j]=min+1;\r\n// }\r\n// }\r\n// }\r\n\r\n// return dp[k][n];\r\n// }\r\n// }"
  }
}
