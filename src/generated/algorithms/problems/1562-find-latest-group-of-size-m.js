export default {
  "id": 1562,
  "name": "Find Latest Group of Size M",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-latest-group-of-size-m",
  "relativeDir": "F/Find Latest Group of Size M",
  "slug": "1562-find-latest-group-of-size-m",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 69,
    "python": 21,
    "javascript": 13
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int findLatestStep(vector<int>& arr, int m) {\r\n        int n=size(arr),ans=-1;\r\n        vector<int>cntL(n+2),indL(n+2);\r\n        for(int i=0;i<n;i++){\r\n            int li=indL[arr[i]-1],ri=indL[arr[i]+1],nl=li+ri+1;\r\n            indL[arr[i]]=nl;\r\n            indL[arr[i]-li]=nl;\r\n            indL[arr[i]+ri]=nl;\r\n            cntL[li]--;\r\n            cntL[ri]--;\r\n            cntL[nl]++;\r\n            if(cntL[m]>0)ans=i+1;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findLatestStep(self, arr: List[int], m: int) -> int:\r\n        n = len(arr)\r\n        ans = -1\r\n        if n == m: return m #just in case\r\n        \r\n#       make in \"inverted\" array with artificial ends higher then everything between\r\n\r\n        sor= [0 for _ in range(n+2)]\r\n        for i in range(n):\r\n            sor[(arr[i])] = i+1 \r\n        sor[0] = sor[n+1] = n+1\r\n        \r\n#       scan and see, if ones in the middle of space of length m appear \r\n#       before ones on its ends,\r\n#       and find the latest of such spaces to disappear, if exists\r\n\r\n        for i in range(1, n-m+2): \r\n            if all(sor[i-1]>sor[j] and sor[i+m]>sor[j] for j in range(i,i+m)):\r\n                if min(sor[i-1]-1,sor[i+m]-1)>ans: ans = min(sor[i-1]-1,sor[i+m]-1) \r\n        return ans",
    "java": "\r\nclass Solution {\r\n    int[] par, size, count, bits;    \r\n    // par: parent array, tells about whose it the parent of ith element\r\n    // size: it tells the size of component\r\n    // count: it tells the count of islands (1111 etc) of size i;\r\n    // count[3] = 4: ie -> there are 4 islands of size 3\r\n    \r\n    public int find(int u) {\r\n        if (u == par[u]) return u;\r\n        par[u] = find(par[u]);\r\n        return par[u];\r\n    }\r\n    \r\n    public void union(int u, int v) {\r\n        // union is performed over parents of elements not nodes itself\r\n        int p1 = find(u), p2 = find(v);\r\n        if (p1 == p2) return;\r\n        \r\n        // decrease the count of islands of size p1, p2\r\n        count[size[p1]]--;\r\n        count[size[p2]]--;\r\n        \r\n        // now merge\r\n        par[p2] = p1;\r\n        \r\n        // adjust sizes\r\n        size[p1] += size[p2];\r\n        \r\n        // adjust the count of islands of new size ie: size of p1\r\n        count[size[p1]]++;\r\n    }\r\n    \r\n    public int findLatestStep(int[] arr, int m) {\r\n        int n = arr.length;\r\n        par = new int[n + 1];\r\n        size = new int[n + 1];\r\n        count = new int[n + 1];\r\n        bits = new int[n + 2];\r\n        \r\n        for (int i = 0; i < n; i++) {\r\n            par[i] = i;\r\n            size[i] = 1;\r\n        }\r\n        \r\n        int ans = -1;\r\n        for (int i = 0; i < n; i++) {\r\n            int idx = arr[i];\r\n            // set the bit\r\n            bits[idx] = 1;\r\n            // increase the count of islands of size 1\r\n            count[1]++;\r\n            \r\n            if (bits[idx - 1] > 0) {\r\n                union(idx, idx - 1);\r\n            }   \r\n            if (bits[idx + 1] > 0) {\r\n                union(idx, idx + 1);\r\n            }\r\n            \r\n            // check if island of size m exists\r\n            if (count[m] > 0) {\r\n                ans = i + 1;\r\n                // as it is 1 based indexing\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 198 ms (Top 72.22%) | Memory: 54.2 MB (Top 88.89%)\r\nvar findLatestStep = function(arr, m) {\r\n    if (m === arr.length) return arr.length\r\n    let bits = new Array(arr.length+1).fill(true), pos, flag, i, j\r\n    for (i = arr.length - 1, bits[0] = false; i >= 0; i--) {\r\n        pos = arr[i], bits[pos] = false\r\n        for (j = 1, flag = true; flag && j <= m; j++) flag = bits[pos-j]\r\n        if (flag && !bits[pos-m-1]) return i\r\n        for (j = 1, flag = true; flag && j <= m; j++) flag = bits[pos+j]\r\n        if (flag && !bits[pos+m+1]) return i\r\n    }\r\n    return -1\r\n};"
  }
}
