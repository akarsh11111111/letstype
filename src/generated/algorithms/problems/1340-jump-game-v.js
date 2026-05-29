export default {
  "id": 1340,
  "name": "Jump Game V",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/jump-game-v",
  "relativeDir": "J/Jump Game V",
  "slug": "1340-jump-game-v",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 39,
    "java": 42,
    "python": 19,
    "javascript": 36
  },
  "languages": {
    "cpp": "// Runtime: 70 ms (Top 44.94%) | Memory: 14.9 MB (Top 51.98%)\r\nclass Solution {\r\n    vector<int> dp;\r\n    int countJumps(vector<int>& arr, int i, int d){\r\n        if(dp[i]!=-1) return dp[i];\r\n        int jumps = 0;\r\n        int k = 1;\r\n        while(k <= d && k + i < arr.size()){\r\n            if(arr[k+i] < arr[i]){\r\n                jumps = max(countJumps(arr, k+i, d)+1, jumps);\r\n                k++;\r\n            }\r\n            else{\r\n                break;\r\n            }\r\n        }\r\n        k = 1;\r\n        while(k <= d && i - k >= 0){\r\n            if(arr[i] > arr[i - k]){\r\n                jumps = max(countJumps(arr, i-k, d)+1, jumps);\r\n                k++;\r\n            }\r\n            else{\r\n                break;\r\n            }\r\n        }\r\n        return dp[i] = jumps;\r\n    }\r\npublic:\r\n    int maxJumps(vector<int>& arr, int d) {\r\n        dp.resize(arr.size(), -1);\r\n        int maxJumps = 0;\r\n        int n = arr.size();\r\n        for(int i = 0; i < n; i++){\r\n            maxJumps = max(countJumps(arr, i, d), maxJumps);\r\n        }\r\n        return maxJumps + 1;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxJumps(self, arr: List[int], d: int) -> int:\r\n        n = len(arr)\r\n        sorted_arr = []\r\n        for i in range(n):\r\n            sorted_arr.append((arr[i], i))\r\n        sorted_arr.sort(reverse = True)\r\n        depth = [1 for i in range(n)]\r\n        while(sorted_arr):\r\n            val, i = sorted_arr.pop()\r\n            for j in range(i-1, max(-1, i-d-1), -1):\r\n                if(arr[j] >= arr[i]):\r\n                    break\r\n                depth[i] = max(depth[j] + 1, depth[i])\r\n            for j in range(i+1, min(n, i+d+1)):\r\n                if(arr[j] >= arr[i]):\r\n                    break\r\n                depth[i] = max(depth[j] + 1, depth[i])\r\n        return max(depth)",
    "java": "// Runtime: 19 ms (Top 24.5%) | Memory: 43.52 MB (Top 29.6%)\r\n\r\nclass Solution {\r\n    public int maxJumps(int[] arr, int d) {\r\n        List jumpsFrom[] =  new List[arr.length];  //find all possible jumps from each spot\r\n        findJumps (arr,d,true,jumpsFrom); // add left jumps (itareting left to right)\r\n        findJumps (arr,d,false,jumpsFrom); // add right jumps\r\n        int jumpChain[] = new int[arr.length] , max = 1; // 0 - unvisited\r\n        for (int i = 0 ; i < arr.length; i++) {\r\n            if (jumpChain[i] == 0) {\r\n                jumpChain[i] = dfs(arr, jumpChain, jumpsFrom, i);\r\n                max = Math.max(max, jumpChain[i]);\r\n            }\r\n        }\r\n        return max;\r\n    }\r\n\r\n    private void findJumps(int[] arr, int d, boolean left , List jumpsFrom[]){\r\n        Stack<Integer> s = new Stack();\r\n        int i = (left) ? 0 : arr.length - 1;\r\n        while (i >=0  && i < arr.length){\r\n            if (left) jumpsFrom[i] = new ArrayList();\r\n            while (!s.isEmpty() && arr[i] > arr[s.peek()]){ // pop stack until higher step found from left/right, adding all left/right lower jumps from i\r\n                int lowerIndex = s.pop(); \r\n                if (Math.abs(i - lowerIndex) <= d) jumpsFrom[i].add(lowerIndex); \r\n                else s = new Stack(); // past d steps\r\n            }\r\n            s.push(i);\r\n            i += (left) ? 1 : -1;\r\n        }\r\n    }\r\n\r\n    private int dfs(int[] arr , int jumpChain[], List<Integer> jumpsFrom[], int start){\r\n        int max = 1;\r\n        for (int i: jumpsFrom[start]) {\r\n            if (jumpChain[i] == 0) jumpChain[i] = dfs(arr, jumpChain, jumpsFrom, i);\r\n            max = Math.max (max , 1 + jumpChain[i]);\r\n        }\r\n        return max;\r\n    }\r\n\r\n}",
    "javascript": "// Runtime: 183 ms (Top 40.91%) | Memory: 47.7 MB (Top 22.73%)\r\nvar maxJumps = function(arr, d) {\r\n\r\n    let n = arr.length;\r\n    let dp = new Array(n).fill(0);\r\n    let result = 0;\r\n\r\n    // Time complexity:\r\n    // O(nlogn) + O(n*d) => O(ologn)\r\n\r\n    // First we sort the arr (small -> large) , then calculating DP by sortedArr.\r\n    // O(nlogn)\r\n    let sortedArr = arr.map((v,i)=>([v,i])).sort((a,b)=>a[0]-b[0]);\r\n\r\n    // Shifting with single way\r\n    // mid -> left ; mid -> right\r\n    // O(n*d)\r\n    for(let index=1 ; index< n; index++){\r\n        let [v,i] = sortedArr[index];\r\n\r\n        for(let shift =1 ; shift <=d ; shift++){\r\n            if(i+shift >= n || arr[i+shift] >= arr[i]) break;\r\n            dp[i] = Math.max(dp[i],dp[i+shift]+1);\r\n            if(dp[i] > result) result = dp[i];\r\n        };\r\n\r\n        for(let shift=-1 ; shift >= -d; shift--){\r\n            if(i+shift < 0 || arr[i+shift] >= arr[i]) break;\r\n            dp[i] = Math.max(dp[i],dp[i+shift]+1);\r\n            if(dp[i] > result) result = dp[i];\r\n        };\r\n    };\r\n\r\n    return result+1;\r\n\r\n};"
  }
}
