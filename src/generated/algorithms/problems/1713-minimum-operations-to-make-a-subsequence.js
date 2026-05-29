export default {
  "id": 1713,
  "name": "Minimum Operations to Make a Subsequence",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-operations-to-make-a-subsequence",
  "relativeDir": "M/Minimum Operations to Make a Subsequence",
  "slug": "1713-minimum-operations-to-make-a-subsequence",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 34,
    "java": 58,
    "python": 14,
    "javascript": 34
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> ans;\r\n    \r\n    void bin(int lo, int hi, int num) {\r\n        if(lo == hi) {\r\n            ans[lo] = num;\r\n            return;\r\n        }\r\n        int mid = (lo + hi) / 2;\r\n        if(ans[mid] < num) bin(mid + 1, hi, num);\r\n        else bin(lo, mid, num);\r\n    }\r\n    \r\n    int minOperations(vector<int>& target, vector<int>& arr) {\r\n        unordered_map<int, int> idx;\r\n        for(int i = 0; i < target.size(); i++) {\r\n            idx[target[i]] = i;\r\n        }\r\n        \r\n        for(int i = 0; i < arr.size(); i++) {\r\n            if(idx.find(arr[i]) == idx.end()) continue;\r\n            int num = idx[arr[i]];\r\n            if(ans.size() == 0 || num > ans.back()) {\r\n                ans.push_back(num);\r\n            }\r\n            else {\r\n                bin(0, ans.size() - 1, num);\r\n            }\r\n        }\r\n        \r\n        return (target.size() - ans.size());\r\n    }\r\n};",
    "python": "# Runtime: 962 ms (Top 100.00%) | Memory: 36.9 MB (Top 93.24%)\r\nfrom bisect import bisect_left\r\nclass Solution:\r\n    def minOperations(self, target: List[int], arr: List[int]) -> int:\r\n        dt = {num: i for i, num in enumerate(target)}\r\n        stack = []\r\n        for num in arr:\r\n            if num not in dt: continue\r\n            i = bisect_left(stack, dt[num])\r\n            if i == len(stack):\r\n                stack.append(dt[num])\r\n            else:\r\n                stack[i] = dt[num]\r\n        return len(target) - len(stack)",
    "java": "// Runtime: 98 ms (Top 85.00%) | Memory: 59.9 MB (Top 96.25%)\r\nclass Solution {\r\n    public int minOperations(int[] target, int[] arr) {\r\n        int n = target.length;\r\n        Map<Integer, Integer> map = new HashMap<>();\r\n\r\n        for(int i = 0; i < n; i++) {\r\n            map.put(target[i], i);\r\n        }\r\n\r\n        List<Integer> array = new ArrayList<>();\r\n\r\n        for(int i = 0; i < arr.length; i++) {\r\n            if(!map.containsKey(arr[i])) {\r\n                continue;\r\n            }\r\n\r\n            array.add(map.get(arr[i]));\r\n        }\r\n\r\n        int maxLen = 0;\r\n        int[] tails = new int[n + 1];\r\n\r\n        for(int i = 0; i < n; i++) {\r\n            tails[i] = -1;\r\n        }\r\n\r\n        for(int num: array) {\r\n            int index = findMinIndex(tails, maxLen, num);\r\n\r\n            if(tails[index] == -1) {\r\n                maxLen++;\r\n            }\r\n            tails[index] = num;\r\n        }\r\n\r\n        return n - maxLen;\r\n    }\r\n\r\n    public int findMinIndex(int[] tails, int n, int val) {\r\n        int low = 0;\r\n        int ans = n;\r\n        int high = n - 1;\r\n\r\n        while(low <= high) {\r\n            int mid = (high + low) / 2;\r\n\r\n            if(tails[mid] >= val) {\r\n                ans = mid;\r\n                high = mid - 1;\r\n            }\r\n            else {\r\n                low = mid + 1;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 266 ms (Top 33.33%) | Memory: 83.90 MB (Top 33.33%)\r\n\r\nvar lengthOfLIS = function(A) {\r\n    if(!A.length) return 0;\r\n    let tails = [-Infinity];  //here -Infinity acts as a Sentinel, for cleaner code (or else I would ahve to place A[0] here)\r\n\r\n    for(let i=0; i<A.length; i++){\r\n        // If my curr element is bigger than all possible tails, i just need to create a new subarray, which of course will be of length tails.length-1 +1\r\n        if(A[i]>tails[tails.length-1])\r\n            tails.push(A[i]);\r\n        else{\r\n            let lo=0, hi = tails.length-1;\r\n            //binary search to find where to place my current element so i have more chances of creating a bigger subarray\r\n            while(lo<hi){\r\n                let mid = (lo+hi)>>1\r\n                if(tails[mid] < A[i])\r\n                    lo = mid+1;\r\n                else\r\n                    hi = mid;\r\n            }\r\n            tails[lo] = A[i];\r\n        }\r\n    }\r\n    return tails.length-1;// is the length of the longest possible subarray (-1 because of the -Infinity I added)\r\n};\r\nvar minOperations = function(T, A) {\r\n    let seen=new Set(T),res=0,originalIndex={},n=T.length\r\n    //filter out all the unnecessary values\r\n    A=A.filter(d=>seen.has(d))\r\n    for(let i=0;i<T.length;i++)\r\n        originalIndex[T[i]]=i //maintain the original indices of the values in T\r\n    A=A.map(d=>originalIndex[d])    \r\n    return  T.length-lengthOfLIS(A)\r\n};"
  }
}
