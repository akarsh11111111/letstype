export default {
  "id": 838,
  "name": "Push Dominoes",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/push-dominoes",
  "relativeDir": "P/Push Dominoes",
  "slug": "0838-push-dominoes",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 40,
    "python": 43,
    "javascript": 20
  },
  "languages": {
    "cpp": "// Runtime: 52 ms (Top 67.07%) | Memory: 22.8 MB (Top 17.97%)\r\nclass Solution {\r\npublic:\r\n    string pushDominoes(string dominoes) {\r\n        #define SET(ch, arr) \\\r\n                    if (dominoes[i] == ch) { count = 1; prev = ch; } \\\r\n                    else if (dominoes[i] != '.') prev = dominoes[i]; \\\r\n                    if (prev == ch && dominoes[i] == '.') arr[i] = count++;\r\n\r\n        string res = \"\";\r\n        char prev;\r\n        int n = dominoes.size(), count = 1;\r\n\r\n        vector<int> left(n, 0), right(n, 0);\r\n        for (int i = 0; i < n; i++) {\r\n            SET('R', right);\r\n        }\r\n\r\n        prev = '.';\r\n        for (int i = n-1; i >= 0; i--) {\r\n            SET('L', left);\r\n        }\r\n\r\n        for (int i = 0; i < n; i++) {\r\n            if (!left[i] && !right[i]) res += dominoes[i];\r\n            else if (!left[i]) res += 'R';\r\n            else if (!right[i]) res += 'L';\r\n            else if (left[i] == right[i]) res += '.';\r\n            else if (left[i] < right[i]) res += 'L';\r\n            else res += 'R';\r\n        }\r\n\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def pushDominoes(self, dom: str) -> str:\r\n        from collections import deque\r\n        n = len(dom)\r\n        d = set()\r\n        q = deque()\r\n        arr = [0 for i in range(n)]\r\n        for i in range(n):\r\n            if dom[i] == \"L\":\r\n                arr[i] = -1\r\n                d.add(i)\r\n                q.append((i,\"L\"))\r\n            if dom[i] == \"R\":\r\n                arr[i] = 1\r\n                d.add(i)\r\n                q.append((i,\"R\"))\r\n        while q:\r\n            t1 = set()\r\n            for _ in range(len(q)):\r\n                t = q.popleft()\r\n                if t[1] == \"L\":\r\n                    if t[0]-1 >= 0 and t[0]-1 not in d:\r\n                        t1.add(t[0]-1)\r\n                        arr[t[0]-1] -= 1\r\n                else:\r\n                    if t[0]+1 < n and t[0]+1 not in d:\r\n                        t1.add(t[0]+1)\r\n                        arr[t[0]+1] += 1\r\n            for val in t1:\r\n                d.add(val)\r\n                if arr[val] > 0:\r\n                    q.append((val,\"R\"))\r\n                elif arr[val]<0:\r\n                    q.append((val,\"L\"))\r\n        ans = \"\"\r\n        for val in arr:\r\n            if val<0:\r\n                ans += \"L\"\r\n            elif val>0:\r\n                ans += \"R\"\r\n            else:\r\n                ans += \".\"\r\n        return ans",
    "java": "// Runtime: 11 ms (Top 100.00%) | Memory: 43.4 MB (Top 96.04%)\r\n// Time complexity: O(N)\r\n// Space complexity: O(N), where N is the length of input string\r\nclass Solution {\r\n    public String pushDominoes(String dominoes) {\r\n        // ask whether dominoes could be null\r\n        final int N = dominoes.length();\r\n        if (N <= 1) return dominoes;\r\n        char[] res = dominoes.toCharArray();\r\n        int i = 0;\r\n        while (i < N) {\r\n            if (res[i] == '.') {\r\n                i++;\r\n            } else if (res[i] == 'L') { // push left\r\n                int j = i-1;\r\n                while (j >= 0 && res[j] == '.') {\r\n                    res[j--] = 'L';\r\n                }\r\n                i++;\r\n            } else { // res[i] == 'R'\r\n                int j = i+1;\r\n                while (j < N && res[j] == '.') { // try to find 'R' or 'L' in the right side\r\n                    j++;\r\n                }\r\n                if (j < N && res[j] == 'L') { // if found 'L', push left and right\r\n                    for (int l = i+1, r = j-1; l < r; l++, r--) {\r\n                        res[l] = 'R';\r\n                        res[r] = 'L';\r\n                    }\r\n                    i = j + 1;\r\n                } else { // if no 'L', push right\r\n                    while (i < j) {\r\n                        res[i++] = 'R';\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        return String.valueOf(res);\r\n    }\r\n}",
    "javascript": "// Runtime: 81 ms (Top 96.77%) | Memory: 56.70 MB (Top 74.19%)\r\n\r\nvar pushDominoes = function(dominoes) {\r\n    let l=0, r=1;\r\n    const arr = (\"L\"+dominoes+\"R\").split(\"\");\r\n    while(l<arr.length-1){\r\n        while(arr[r]=='.') \r\n            r++;\r\n        if(arr[l]==arr[r]) \r\n            for(let i=l+1; i<r; i++) \r\n                arr[i]=arr[l];\r\n        if(arr[l]>arr[r]) \r\n            for(let i=1; i<=(r-l-1)/2; i++){\r\n                arr[l+i] = 'R';\r\n                arr[r-i] = 'L';\r\n            }   \r\n        l=r++;\r\n    }\r\n    return arr.slice(1,arr.length-1).join(\"\");\r\n};"
  }
}
