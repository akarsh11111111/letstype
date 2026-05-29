export default {
  "id": 1563,
  "name": "Stone Game V",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/stone-game-v",
  "relativeDir": "S/Stone Game V",
  "slug": "1563-stone-game-v",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 44,
    "python": 36,
    "javascript": 33
  },
  "languages": {
    "cpp": "// Runtime: 1664 ms (Top 43.66%) | Memory: 10.6 MB (Top 82.68%)\r\nclass Solution {\r\npublic:\r\n    int dp[501][501];\r\n\r\n    int f(vector<int> &v,int i,int j){\r\n\r\n        if(i>=j) return 0;\r\n\r\n        if(dp[i][j]!=-1) return dp[i][j];\r\n\r\n        int r=0;\r\n        for(int k=i;k<=j;k++) r+=v[k];\r\n\r\n        int l=0,ans=0;\r\n        for(int k=i;k<=j;k++){\r\n            l+=v[k];\r\n            r-=v[k];\r\n            if(l<r) ans=max(ans,l+f(v,i,k));\r\n            else if(r<l) ans=max(ans,r+f(v,k+1,j));\r\n            else ans=max(ans,max(l+f(v,i,k),r+f(v,k+1,j)));\r\n        }\r\n        return dp[i][j]=ans;\r\n    }\r\n\r\n    int stoneGameV(vector<int>& stoneValue) {\r\n\r\n        memset(dp,-1,sizeof(dp));\r\n        return f(stoneValue,0,stoneValue.size()-1);\r\n\r\n    }\r\n};",
    "python": "# Runtime: 6408 ms (Top 13.33%) | Memory: 26.1 MB (Top 43.33%)\r\nfrom collections import defaultdict\r\nfrom itertools import accumulate\r\n\r\nclass Solution:\r\n\r\n    def stoneGameV(self, stoneValue: List[int]) -> int:\r\n        n = len(stoneValue)\r\n        dp = [[0]*n for _ in range(n)]\r\n        left = [[0]*n for _ in range(n)]\r\n        prefix = list(accumulate(stoneValue))\r\n        prefix = [0]+prefix+[prefix[-1]]\r\n\r\n        def sum(i,j):\r\n            return prefix[j+1]-prefix[i]\r\n\r\n        row_idx = [i for i in range(n)]\r\n        for i in range(n):\r\n            left[i][i] = stoneValue[i]\r\n        for d in range(1,n):\r\n            for i in range(n-d):\r\n                j = i+d\r\n                while sum(i,row_idx[i]) < sum(row_idx[i]+1,j):\r\n                    row_idx[i] +=1\r\n                if sum(i, row_idx[i]) == sum(row_idx[i]+1,j):\r\n                    dp[i][j] = max(left[i][row_idx[i]], left[j][row_idx[i]+1])\r\n                else:\r\n                    if row_idx[i] == i:\r\n                        dp[i][j] = left[j][i+1]\r\n                    elif row_idx[i] == j:\r\n                        dp[i][j] = left[i][j-1]\r\n                    else:\r\n                        dp[i][j] = max(left[i][row_idx[i]-1], left[j][row_idx[i]+1])\r\n                left[j][i] = max(left[j][i+1],sum(i,j)+dp[i][j])\r\n                left[i][j] = max(left[i][j-1],sum(i,j)+dp[i][j])\r\n        return dp[0][n-1]",
    "java": "// Runtime: 299 ms (Top 83.10%) | Memory: 42.5 MB (Top 97.18%)\r\nclass Solution {\r\n    int dp[][];\r\n    public int fnc(int a[], int i, int j, int sum){\r\n        //System.out.println(i+\" \"+j);\r\n        int n=a.length;\r\n        if(i>j)\r\n            return 0;\r\n        if(j>n)\r\n            return 0;\r\n        if(i==j){\r\n            dp[i][j]=-1;\r\n            return 0;\r\n        }\r\n        if(dp[i][j]!=0)\r\n            return dp[i][j];\r\n\r\n   int temp=0;\r\n        int ans=Integer.MIN_VALUE;\r\n\r\n        for(int index=i;index<=j;index++){\r\n            temp+=a[index];\r\n            if(temp>sum-temp){\r\n                ans=Math.max(ans,((sum-temp)+fnc(a,index+1,j,sum-temp)));\r\n            }\r\n            else if(temp<sum-temp){\r\n                ans=Math.max(ans,temp+fnc(a,i,index,temp));\r\n            }\r\n            else\r\n                ans=Math.max(ans,Math.max(sum-temp+fnc(a,index+1,j,sum-temp),temp+fnc(a,i,index,temp)));\r\n        }\r\n        dp[i][j]=ans;\r\n        return dp[i][j];\r\n    }\r\n    public int stoneGameV(int[] stoneValue) {\r\n        int n=stoneValue.length;\r\n        int sum=0;\r\n        for(int ele:stoneValue)\r\n            sum+=ele;\r\n        dp= new int[n][n];\r\n        return fnc(stoneValue,0,n-1,sum);\r\n\r\n    }\r\n}",
    "javascript": "// Runtime: 2912 ms (Top 12.50%) | Memory: 51.4 MB (Top 50.00%)\r\nvar stoneGameV = function(stoneValue) {\r\n    // Find the stoneValue array's prefix sum\r\n    let prefix = Array(stoneValue.length).fill(0);\r\n    for (let i = 0; i < stoneValue.length; i++) {\r\n        prefix[i] = stoneValue[i] + (prefix[i - 1] || 0);\r\n    }\r\n\r\n    let dp = Array(stoneValue.length).fill().map(() => Array(stoneValue.length).fill(0));\r\n\r\n    function game(start, end) {\r\n        if (dp[start][end]) return dp[start][end];\r\n        if (start === end) return 0;\r\n\r\n        let max = 0;\r\n        for (let i = start + 1; i <= end; i++) {\r\n            let sumL = prefix[i - 1] - (prefix[start - 1] || 0);\r\n            let sumR = prefix[end] - (prefix[i - 1] || 0);\r\n            if (sumL > sumR) {\r\n                max = Math.max(max, sumR + game(i, end));\r\n            } else if (sumL < sumR) {\r\n                max = Math.max(max, sumL + game(start, i - 1));\r\n            } else {\r\n                // If tied, check both rows\r\n                let left = sumR + game(i, end);\r\n                let right = sumL + game(start, i - 1);\r\n                max = Math.max(max, left, right);\r\n            }\r\n        } return dp[start][end] = max;\r\n    }\r\n\r\n    return game(0, stoneValue.length - 1);\r\n};"
  }
}
