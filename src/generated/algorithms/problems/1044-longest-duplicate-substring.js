export default {
  "id": 1044,
  "name": "Longest Duplicate Substring",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-duplicate-substring",
  "relativeDir": "L/Longest Duplicate Substring",
  "slug": "1044-longest-duplicate-substring",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 48,
    "java": 36,
    "python": 18
  },
  "languages": {
    "cpp": "// Runtime: 1100 ms (Top 92.69%) | Memory: 218.6 MB (Top 73.97%)\r\nclass Solution {\r\n    using ull = unsigned long long;\r\npublic:\r\n    string longestDupSubstring(string s) {\r\n        int n = s.size();\r\n        vector<ull> power(n, 1);\r\n        for (int i=1; i<n; i++) {\r\n            power[i] = power[i-1] * 27;\r\n        }\r\n        return solve(s, power);\r\n    }\r\n\r\n    string solve(string& s, vector<ull>& power) {\r\n        int low = 1, high = s.size();\r\n        while(low <= high) {\r\n            int mid = low + (high - low)/2;\r\n            if (check(s, mid, power) != -1) {\r\n                low = mid + 1;\r\n            } else {\r\n                high = mid - 1;\r\n            }\r\n        }\r\n        int start = check(s, low-1, power);\r\n        if (start > 0) return s.substr(start, low-1);\r\n        return \"\";\r\n    }\r\n\r\n    int check(string&s, int len, vector<ull>& power) {\r\n        if (len <= 0) return -1;\r\n        unordered_set<ull> st;\r\n        ull curr_hash = 0;\r\n        for(int i=0; i<len;i++) {\r\n            curr_hash = curr_hash + power[len-i-1] * (s[i] - 'a');\r\n        }\r\n        st.insert(curr_hash);\r\n        for(int i=len; i<s.size(); i++) {\r\n            curr_hash = curr_hash - power[len-1] * (s[i-len] - 'a');\r\n            curr_hash = curr_hash * 27;\r\n            curr_hash = curr_hash + (s[i]-'a');\r\n            if (st.count(curr_hash)) {\r\n                return i-len+1;\r\n            }\r\n            st.insert(curr_hash);\r\n        }\r\n        return -1;\r\n    }\r\n};",
    "python": "# Runtime: 2799 ms (Top 43.0%) | Memory: 16.80 MB (Top 93.0%)\r\n\r\nclass Solution:\r\n    def longestDupSubstring(self, s: str) -> str:\r\n        left = 0\r\n        right = 1\r\n        res = \"\"\r\n        n = len(s)\r\n        while right<n:\r\n            if s[left:right] in s[left+1:]:\r\n                if right - left > len(res):\r\n                    res = s[left:right]\r\n                right+=1\r\n                continue\r\n            left+=1\r\n            if left == right:\r\n                right+=1\r\n        return res",
    "java": "class Solution {\r\n    public String longestDupSubstring(String s) {\r\n        long[] e = new long[s.length()+1];\r\n        long h = 1;\r\n        int p = 991919;\r\n        long M = 957689076713L;\r\n        for (int i = 0; i < e.length; i++){\r\n            e[i]=h;\r\n            h=h*p%M;\r\n        }\r\n        int lo = 0, hi = s.length(), st = 0, end = 0;\r\n        while(lo < hi){\r\n            int mid = (lo+hi+1)>>1;\r\n            Set<Long> seen = new HashSet<>();\r\n            long hash = 0;\r\n            boolean ok=false;\r\n            for (int i = 0; i < s.length() && !ok; i++){\r\n                hash = (hash*p+s.charAt(i))%M;\r\n                if (i >= mid){\r\n                    hash = (hash - e[mid]*(s.charAt(i-mid))%M+M)%M;\r\n                }\r\n                if (i >= mid-1 && !seen.add(hash)){\r\n                    end = i;\r\n                    st = i-mid+1;\r\n                    ok=true;\r\n                }\r\n            }\r\n            if (ok){\r\n                lo=mid;\r\n            }else{\r\n                hi=mid-1;\r\n            }\r\n        }\r\n        return lo == 0? \"\": s.substring(st, end+1);\r\n    }\r\n}"
  }
}
