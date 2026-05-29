export default {
  "id": 880,
  "name": "Decoded String at Index",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/decoded-string-at-index",
  "relativeDir": "D/Decoded String at Index",
  "slug": "0880-decoded-string-at-index",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 17,
    "python": 20,
    "javascript": 30
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string decodeAtIndex(string s, int k) {\r\n        k--;\r\n        struct op { string s; size_t mult; size_t total; };\r\n        vector<op> v;\r\n        size_t total = 0;\r\n        for (auto c : s) {\r\n            if (isalpha(c)) {\r\n                if (v.empty() || v.back().mult > 1)\r\n                    v.push_back({\"\", 1, total});\r\n                v.back().s += c;\r\n                v.back().total = ++total;\r\n            } else {\r\n                size_t m = c-'0';\r\n                v.back().mult *= m;\r\n                v.back().total = total *= m;\r\n            }\r\n            if (total > k) break;\r\n        }\r\n        while (!v.empty()) {\r\n            auto [s, mult, total] = v.back();\r\n            v.pop_back();\r\n            size_t part = total / mult;\r\n            k %= part;\r\n            if (size_t i = k-part+s.size(); i < s.size())\r\n                return {s[i]};\r\n        }\r\n        return \"#\";\r\n    }\r\n};",
    "python": "class Solution:\r\n    def decodeAtIndex(self, S: str, K: int) -> str:\r\n        idx = {}\r\n        acclens = [0]\r\n        prevd = 1\r\n        j = 0\r\n        for i, c in enumerate(S + '1'):\r\n            if c.isalpha():\r\n                idx[acclens[-1] * prevd + j] = i\r\n                j += 1\r\n            else:\r\n                acclens.append(acclens[-1] * prevd + j)\r\n                prevd = int(c)\r\n                j = 0\r\n        k = K - 1\r\n        for al in reversed(acclens[1:]):\r\n            k %= al\r\n            if k in idx:\r\n                return S[idx[k]]\r\n        return None  # should never reach this",
    "java": "class Solution {\r\n    public String decodeAtIndex(String s, int k) {\r\n        long sz = 0;\r\n        for (char ch : s.toCharArray()){ // total length\r\n            sz = Character.isDigit(ch)? sz * (ch - '0') : ++sz;\r\n        }\r\n        --k; // make it 0 index based.\r\n        for (int i = s.length() - 1; true; i--){\r\n            if (Character.isLetter(s.charAt(i)) && --sz == k){ // found!\r\n                return \"\"+s.charAt(i);\r\n            }else if(Character.isDigit(s.charAt(i))){\r\n                sz /= (s.charAt(i) - '0');\r\n                k %= sz; // we are at the end of a multplied string, we can mod k with sz.\r\n            }\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 76 ms (Top 58.82%) | Memory: 42 MB (Top 61.76%)\r\nvar decodeAtIndex = function(s, k) {\r\n    let len=0;\r\n    let isDigit=false\r\n\r\n    for(let v of s){\r\n        if(v>='0'&&v<='9'){\r\n            len*=+v\r\n            isDigit=true\r\n        }else{\r\n            len++\r\n            if(len===k&&!isDigit){\r\n                return s[k-1]\r\n            }\r\n        }\r\n    }\r\n\r\n    for(let i=s.length-1;i>=0;i--){\r\n        const v=s[i]\r\n        if(v>='0'&&v<='9'){\r\n            len=Math.ceil(len/+v) // Math.floor() wont work because we endup leaving few strings\r\n            k%=len\r\n        }else{\r\n            if(k===0||k===len){\r\n                    return v\r\n               }\r\n            len--\r\n        }\r\n    }\r\n};"
  }
}
