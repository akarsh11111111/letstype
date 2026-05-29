export default {
  "id": 318,
  "name": "Maximum Product of Word Lengths",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-product-of-word-lengths",
  "relativeDir": "M/Maximum Product of Word Lengths",
  "slug": "0318-maximum-product-of-word-lengths",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 19,
    "python": 21,
    "javascript": 33
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maxProduct(vector<string>& words) {\r\n        vector<unordered_set<char>> st;\r\n        int res =0;\r\n        for(string s : words){\r\n            unordered_set<char> temp;\r\n            for(char c : s){\r\n                temp.insert(c);\r\n            }\r\n            st.push_back(temp);\r\n        }\r\n        for(int i = 0;i<words.size();i++){\r\n            for(int j =0;j<i;j++){\r\n                bool flag = false;\r\n                for(auto val : st[i]){\r\n                    if(st[j].find(val) != st[j].end()){\r\n                        flag = true;\r\n                        break;\r\n                    }\r\n                }\r\n                if(flag == false) {\r\n                    int prd = words[i].length() * words[j].length();\r\n                    res =max(res, prd);\r\n                }\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "// Runtime: 332 ms (Top 87.93%) | Memory: 19.80 MB (Top 74.15%)\r\n\r\nclass Solution:\r\n    def maxProduct(self, words: List[str]) -> int:\r\n        n=len(words)\r\n        \r\n        bit_masks = [0] * n\r\n        lengths = [0] * n\r\n        \r\n        for i in range(n):             \r\n            for c in words[i]:\r\n                bit_masks[i]|=1<<(ord(c) - ord('a')) # set the character bit            \r\n            lengths[i]=len(words[i])\r\n                        \r\n        max_val = 0\r\n        for i in range(n):\r\n            for j in range(i+1, n):\r\n                if not (bit_masks[i] & bit_masks[j]):\r\n                    max_val=max(max_val, lengths[i] * lengths[j])\r\n        \r\n        return max_val",
    "java": "// Runtime: 14 ms (Top 91.40%) | Memory: 44.6 MB (Top 93.55%)\r\nclass Solution {\r\n    public int maxProduct(String[] words) {\r\n        int n = words.length;\r\n        int[] masks = new int[n];\r\n\r\n        for (int i=0; i<n; i++)\r\n            for (char c: words[i].toCharArray())\r\n                masks[i] |= (1 << (c - 'a'));\r\n\r\n        int largest = 0;\r\n        for (int i=0; i<n-1; i++)\r\n            for (int j=i+1; j<n; j++)\r\n                if ((masks[i] & masks[j]) == 0)\r\n                    largest = Math.max(largest, words[i].length() * words[j].length());\r\n\r\n        return largest;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {string[]} words\r\n * @return {number}\r\n */\r\nvar maxProduct = function(words) {\r\n    words.sort((a, b) => b.length - a.length);\r\n    \r\n    const m = new Map();\r\n    for(let word of words) {\r\n        if(m.has(word)) continue;\r\n        const alpha = new Array(26).fill(0);\r\n        for(let w of word) {\r\n            let idx = w.charCodeAt(0) - 'a'.charCodeAt(0);\r\n            alpha[idx] = 1;\r\n        }\r\n        m.set(word, parseInt(alpha.join(''), 2));\r\n    }\r\n    \r\n    const hasCommonLetters = (a, b) => {\r\n        const sb = m.get(b);\r\n        const sa = m.get(a);\r\n        return (sa & sb) != 0;\r\n    }\r\n    let ans = 0, len = words.length;\r\n    for(let i = 0; i < len; i++) {\r\n        for(let j = i + 1; j < len; j++) {\r\n            if(!hasCommonLetters(words[i], words[j])) {\r\n                ans = Math.max(ans, words[i].length * words[j].length);\r\n            }\r\n        }\r\n    }\r\n    return ans;\r\n};"
  }
}
