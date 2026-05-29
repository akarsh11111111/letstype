export default {
  "id": 1234,
  "name": "Replace the Substring for Balanced String",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/replace-the-substring-for-balanced-string",
  "relativeDir": "R/Replace the Substring for Balanced String",
  "slug": "1234-replace-the-substring-for-balanced-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 39,
    "java": 19,
    "python": 17,
    "javascript": 69
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int balancedString(string s) {\r\n      int n=s.length();\r\n      unordered_map<char,int>umap;\r\n      for(auto x:s)\r\n      {\r\n         umap[x]++;   \r\n      }\r\n        umap['Q']=umap['Q']-n/4>0?umap['Q']-n/4:0;\r\n        umap['W']=umap['W']-n/4>0?umap['W']-n/4:0;\r\n        umap['E']=umap['E']-n/4>0?umap['E']-n/4:0;\r\n        umap['R']=umap['R']-n/4>0?umap['R']-n/4:0;\r\n        int count=umap['Q']+umap['W']+umap['E']+umap['R'];\r\n        if(count==0)\r\n            return 0;\r\n        int i=0,ans=INT_MAX;\r\n        unordered_map<char,int>newMap;\r\n        for(int j=0;j<n;j++)\r\n        {\r\n            newMap[s[j]]++;\r\n            if(newMap[s[j]]<=umap[s[j]])\r\n            {\r\n                count--;\r\n                while(count==0)\r\n                {\r\n                    newMap[s[i]]--;\r\n                    if(newMap[s[i]]<umap[s[i]])\r\n                    {\r\n                        count++;\r\n                        ans=min(ans,j-i+1);\r\n                    }\r\n                    i++;\r\n                }\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 450 ms (Top 49.65%) | Memory: 14.6 MB (Top 82.17%)\r\nclass Solution:\r\n    def balancedString(self, s):\r\n        count = collections.Counter(s)\r\n        res = n = len(s)\r\n        if all(n/4==count[char] for char in 'QWER'):\r\n            return 0\r\n        left = 0\r\n        for right, char in enumerate(s):\r\n            # replace char whose index==right to check if it is balanced\r\n            count[char] -= 1\r\n            # if it is balanced, window shrinks to get the smallest length of window\r\n            while left <= right and all(n / 4 >= count[char] for char in 'QWER'):\r\n                res = min(res, right - left + 1)\r\n                count[s[left]] =count[s[left]]+ 1\r\n                left += 1\r\n        return res",
    "java": "class Solution {\r\n    public int balancedString(String s) {\r\n        int n = s.length(), ans = n, excess = 0;\r\n        int[] cnt = new int[128];\r\n        cnt['Q'] = cnt['W'] = cnt['E'] = cnt['R'] = -n/4;\r\n        for (char ch : s.toCharArray()) if (++cnt[ch] == 1) excess++; //if count reaches 1, it is extra and to be removed.\r\n        if (excess == 0) return 0;\r\n        for (int i = 0, j = 0; i < n; i++){//i = window right end, j = window left end\r\n            if (--cnt[s.charAt(i)] == 0) excess--; //remove letter at index i\r\n            while (excess == 0){ //if no more excess, then \r\n                if (++cnt[s.charAt(j)] == 1) excess++; //we put letter at index j back\r\n                ans = Math.min(i - j + 1, ans);; //and update ans accordingly\r\n                j++;\r\n            }\r\n        }\r\n\r\n        return ans;\r\n    }\r\n}",
    "javascript": "var balancedString = function(s) {\r\n    \r\n    let output = Infinity;\r\n    \r\n    let map = {\"Q\":0, \"W\":0, \"E\":0, \"R\":0};\r\n    \r\n    for(let letter of s){\r\n        map[letter]++;\r\n    }\r\n    \r\n    let valueGoal = s.length / 4\r\n        \r\n    let remainder = 0;\r\n    \r\n    let count = 4;\r\n    \r\n    for(let [key, val] of Object.entries(map)){\r\n        \r\n        if(val > valueGoal){\r\n            remainder = remainder + (val - valueGoal); \r\n        }\r\n        \r\n        if(val === valueGoal || val < valueGoal){\r\n            map[key] = -Infinity;\r\n            count--;\r\n        }\r\n    }\r\n    \r\n    if(remainder === 0){\r\n        return 0;\r\n    }\r\n    \r\n    let left = 0;\r\n    \r\n    let right = 0;\r\n    \r\n    while(right < s.length){\r\n\r\n        if(map[s[right]] !== -Infinity){\r\n            \r\n            map[s[right]]--;\r\n\r\n            if(map[s[right]] === valueGoal){\r\n                count--;\r\n            }\r\n            \r\n        }\r\n        \r\n        while(count === 0){\r\n\r\n            output = Math.min(output, right - left + 1);\r\n            \r\n            if(map[s[left]] !== -Infinity){\r\n                \r\n                map[s[left]]++;\r\n                \r\n                if(map[s[left]] > valueGoal){\r\n                    count++;\r\n                }\r\n                \r\n            }\r\n            left++\r\n        }\r\n\r\n        right++;\r\n    }\r\n\r\n    return output;\r\n};"
  }
}
