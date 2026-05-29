export default {
  "id": 1239,
  "name": "Maximum Length of a Concatenated String with Unique Characters",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters",
  "relativeDir": "M/Maximum Length of a Concatenated String with Unique Characters",
  "slug": "1239-maximum-length-of-a-concatenated-string-with-unique-characters",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 41,
    "java": 23,
    "python": 45,
    "javascript": 35
  },
  "languages": {
    "cpp": "/*\r\n1. Create a integer vector, where each integer's bits represent, if a particular char is present or not\r\n2. Loop each word in the array and set each bit, create bit map of each word\r\n3. Use recursion to add each word with take once and not to take once type dp recursion \r\n4. A word can only be taken if its bits are not overlaping with the current string's bit status\r\n   - to do this, we need to check if there sum is equal to bit wise andding of them, \r\n     if eaual then there is no overlaping, if not equal then there is overlaping\r\n5. Also we don't have to take the word which has repeted char ( if we have set it to INT_MAX )\r\n6. Finally if i is less then 0, check the size of the s with the ans and take maximum\r\n*/\r\n\r\nclass Solution {\r\npublic:\r\n    int ans = 0;\r\n    void solve(vector<int>& v, vector<string>& arr, int i, string s, int status){\r\n        if(i < 0) { \r\n            ans = max(ans, (int)s.size());\r\n        }else{\r\n            solve(v, arr, i-1, s, status);\r\n            if( (v[i] != INT_MAX ) && ( (v[i] + status) == (v[i] | status)) ){ \r\n                solve(v, arr, i-1, s+arr[i], status  | v[i]);\r\n            }\r\n        }\r\n    }\r\n    \r\n    int maxLength(vector<string>& arr) {\r\n        vector<int> v(arr.size());\r\n        for(int i= 0; i < arr.size(); ++i){\r\n            for(auto c: arr[i]) {\r\n                if((v[i] >> (c - 'a'))& 1){ //if already bit is set, then set value to INT_MAX\r\n                    v[i] = INT_MAX;\r\n                }else{                      // if not set, then set it to 1\r\n                    v[i] = v[i] | (1 << (c - 'a'));\r\n                }\r\n            }\r\n        }\r\n        string s = \"\";\r\n        solve(v, arr, arr.size()-1, s, 0);\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 266 ms (Top 32.10%) | Memory: 14.1 MB (Top 35.69%)\r\nclass Solution:\r\n    def maxLength(self, arr: List[str]) -> int:\r\n        ans = 0\r\n        count = [0]*26\r\n        counts = []\r\n        new_arr = []\r\n\r\n        for string in arr:\r\n            flag = True\r\n            tmp = [0]*26\r\n            for ch in string:\r\n                if tmp[ord(ch) - 97] == True:\r\n                    flag = False\r\n                    break\r\n                else:\r\n                    tmp[ord(ch) - 97] = True\r\n\r\n            if flag == False:continue\r\n            counts.append(tmp)\r\n            new_arr.append(string)\r\n\r\n        n = len(new_arr)\r\n\r\n        def compatible(a,b):\r\n            for i in range(26):\r\n                if a[i] == True and b[i] == True: return False\r\n            return True\r\n\r\n        def addUp(a,b):\r\n            for i in range(26):\r\n                if b[i] == True: a[i] = True\r\n\r\n        def solve(index,count):\r\n            if index == n:return 0\r\n            cpy = count.copy()\r\n            ch1 = -inf\r\n            if compatible(count,counts[index]):\r\n                addUp(count,counts[index])\r\n                ch1 = solve(index+1,count) + len(new_arr[index])\r\n            ch2 = solve(index+1 , cpy)\r\n            ans = max(ch1,ch2)\r\n            return ans\r\n\r\n        return solve(0,count)",
    "java": "// Runtime: 32 ms (Top 61.57%) | Memory: 49.1 MB (Top 67.72%)\r\nclass Solution {\r\n    public int maxLength(List<String> arr) {\r\n        String[] words = arr.stream().filter(o -> o.chars().distinct().count() == o.length()).toArray(String[]::new);\r\n        int[] dp = new int[1<<words.length];\r\n        int[] ok = new int[1<<words.length];\r\n        for (int i = 0; i < words.length; i++){\r\n            for (char ch : words[i].toCharArray()){\r\n                ok[1<<i]|=1<<(ch-'a');\r\n                dp[1<<i]++;\r\n            }\r\n        }\r\n        int ans = 0;\r\n        for (int i = 0; i < dp.length; i++){\r\n            if ((ok[i&(i-1)]&ok[i&-i])==0){\r\n                dp[i] = dp[i&(i-1)] + dp[i&-i];\r\n                ok[i] = ok[i&(i-1)] | ok[i&-i];\r\n            }\r\n            ans = Math.max(ans, dp[i]);\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 68 ms (Top 96.23%) | Memory: 44.50 MB (Top 96.23%)\r\n\r\nvar maxLength = function(arr) {\r\n    const n = arr.length;\r\n    let maxLen = 0;\r\n    \r\n    backtrack(0, \"\");\r\n    \r\n    return maxLen;\r\n    \r\n    function backtrack(start, prevStr) {\r\n        maxLen = Math.max(maxLen, prevStr.length);\r\n        \r\n        if (start === n) return; \r\n        \r\n        for (let i = start; i < n; i++) {\r\n            const word = arr[i];\r\n            \r\n            if (isUnique(prevStr + word)) backtrack(i + 1, prevStr + word);\r\n        }\r\n    }\r\n    \r\n    function isUnique(str) {\r\n        let bits = 0 | 0;\r\n\r\n        for (const char of str) {\r\n            const index = char.charCodeAt(0) - 97;\r\n            \r\n            if (bits & (1 << index)) return false;\r\n            bits |= (1 << index);\r\n        }\r\n        \r\n        return true;\r\n    }\r\n};"
  }
}
