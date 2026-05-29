export default {
  "id": 1964,
  "name": "Find the Longest Valid Obstacle Course at Each Position",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position",
  "relativeDir": "F/Find the Longest Valid Obstacle Course at Each Position",
  "slug": "1964-find-the-longest-valid-obstacle-course-at-each-position",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 61,
    "java": 34,
    "python": 12,
    "javascript": 35
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\t// ranking each element to make segment tree of small size\r\n    void compress(vector<int>& a){\r\n        vector<int> b=a;\r\n        sort(b.begin(),b.end());\r\n        map<int,int> mp;\r\n        int prev=b[0],rnk=0,n=a.size();\r\n        for(int i=0;i<n;i++){\r\n            if(b[i]!=prev){\r\n                prev=b[i];\r\n                rnk++;\r\n            }\r\n            mp[b[i]]=rnk;\r\n        }\r\n        for(int i=0;i<n;i++)\r\n            a[i]=mp[a[i]];\r\n    }\r\n    \r\n    void update(int st[],int tind,int ind,int val,int tl,int tr){\r\n        if(tl>tr)\r\n            return;\r\n        if(tl==tr){\r\n            st[tind]=val;\r\n            return;\r\n        }\r\n        int m=tl+(tr-tl)/2,left=tind<<1;\r\n        if(ind<=m)\r\n            update(st,left,ind,val,tl,m);\r\n        else\r\n            update(st,left+1,ind,val,m+1,tr);\r\n        st[tind]=max(st[left],st[left+1]);\r\n    }\r\n    \r\n    int query(int st[],int tind,int tl,int tr,int ql,int qr){\r\n        if(tl>tr or ql>tr or qr<tl)\r\n            return 0;\r\n        if(ql<=tl and tr<=qr)\r\n            return st[tind];\r\n        int m=tl+(tr-tl)/2,left=tind<<1;\r\n        return max(query(st,left,tl,m,ql,qr),query(st,left+1,m+1,tr,ql,qr));\r\n    }\r\n\r\n    vector<int> longestObstacleCourseAtEachPosition(vector<int>& a) {\r\n        compress(a);\r\n        int i,n=a.size();\r\n        int st[4*n+10];\r\n        memset(st,0,sizeof(st));\r\n        update(st,1,a[0],1,0,n-1);\r\n        vector<int> dp(n);\r\n        dp[0]=1;\r\n        \r\n        for(i=1;i<n;i++){\r\n            int mx=query(st,1,0,n-1,0,a[i]);\r\n            dp[i]=1+mx;\r\n            update(st,1,a[i],dp[i],0,n-1);\r\n        }\r\n        \r\n        return dp;\r\n    }\r\n};",
    "python": "from bisect import bisect_right\r\nclass Solution:\r\n    def longestObstacleCourseAtEachPosition(self, obstacles: List[int]) -> List[int]:\r\n        longest, res = [], []\r\n        for i in range(len(obstacles)):\r\n            idx = bisect_right(longest, obstacles[i])\r\n            if idx == len(longest):\r\n                longest.append(obstacles[i])\r\n            else:\r\n                longest[idx] = obstacles[i]\r\n            res.append(idx+1)\r\n        return res",
    "java": "class Solution {\r\n    public int[] longestObstacleCourseAtEachPosition(int[] obstacles) {\r\n        int i = -1, cur = 0, lisSize = -1;\r\n        int[] lis = new int[obstacles.length];\r\n        int[] ans = new int[obstacles.length];\r\n        \r\n        for (int curHeight: obstacles) {\r\n            if (i == -1 || lis[i] <= curHeight) {\r\n                lis[++i] = curHeight;\r\n                lisSize = i;\r\n            } else {\r\n                lisSize = search(lis, 0, i, curHeight);\r\n                lis[lisSize] = curHeight;\r\n            }\r\n            \r\n            ans[cur++] = lisSize + 1;\r\n        }\r\n        \r\n        return ans;      \r\n    }\r\n    \r\n    private int search(int[] nums, int start, int end, int target) {\r\n        int left = start, right = end;\r\n        int boundary = 0;\r\n        while (left <= right) {\r\n            int mid = left + (right - left) / 2;\r\n            if (nums[mid] > target) {\r\n                boundary = mid;\r\n                right = mid - 1;\r\n            } else left = mid + 1;\r\n        }\r\n        return boundary;\r\n    }\r\n}",
    "javascript": "// Runtime: 715 ms (Top 57.14%) | Memory: 85.7 MB (Top 42.86%)\r\nvar longestObstacleCourseAtEachPosition = function(obstacles) {\r\n    var n = obstacles.length;\r\n    var lis = [];\r\n    var res = new Array(n).fill(0);\r\n    for(var i = 0; i<n; i++)\r\n    {\r\n        if(lis.length>0 && obstacles[i] >= lis[lis.length-1])\r\n        {\r\n            lis.push(obstacles[i]);\r\n            res[i] = lis.length;\r\n        }\r\n        else\r\n        {\r\n            // find the upper bound\r\n            var l = 0;\r\n            var r = lis.length;\r\n            while(l<=r)\r\n            {\r\n                var mid = Math.floor((l+r)/2);\r\n                if(lis[mid]<=obstacles[i])\r\n                {\r\n                    l = mid+1;\r\n                }\r\n                else\r\n                {\r\n                    r = mid-1;\r\n                }\r\n            }\r\n            lis[l] = obstacles[i];\r\n            res[i] = l+1;\r\n        }\r\n    }\r\n    return res;\r\n}"
  }
}
