export default {
  "id": 1540,
  "name": "Can Convert String in K Moves",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/can-convert-string-in-k-moves",
  "relativeDir": "C/Can Convert String in K Moves",
  "slug": "1540-can-convert-string-in-k-moves",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 36,
    "python": 18,
    "javascript": 50
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool canConvertString(string s, string t, int k) {\r\n        int m = s.length(), n = t.length(), count = 0;\r\n        if (m != n) return false;\r\n        unordered_map<int, int> mp;\r\n        for (int i = 0; i < m; i++) {\r\n            if (t[i] == s[i]) continue;\r\n            int diff = t[i] - s[i] < 0 ? 26 + t[i] - s[i] : t[i] - s[i];\r\n            if (mp.find(diff) == mp.end()) {\r\n                count = max(count, diff);\r\n            } else {\r\n                count = max(count, (mp[diff] * 26) + diff);\r\n            }\r\n            mp[diff]++;\r\n            if (count > k) return false;\r\n        }\r\n        return count <= k;\r\n    }\r\n    \r\n};",
    "python": "# Runtime: 285 ms (Top 92.79%) | Memory: 15.1 MB (Top 75.68%)\r\nclass Solution:\r\n    def canConvertString(self, s: str, t: str, k: int) -> bool:\r\n        if len(s) != len(t):\r\n            return False\r\n\r\n        cycles, extra = divmod(k, 26)\r\n        shifts = [cycles + (shift <= extra) for shift in range(26)]\r\n\r\n        for cs, ct in zip(s, t):\r\n            shift = (ord(ct) - ord(cs)) % 26\r\n            if shift == 0:\r\n                continue\r\n            if not shifts[shift]:\r\n                return False\r\n            shifts[shift] -= 1\r\n\r\n        return True",
    "java": "// Runtime: 23 ms (Top 58.97%) | Memory: 54.5 MB (Top 69.23%)\r\nclass Solution {\r\n    public boolean canConvertString(String s, String t, int k) {\r\n       //if strings lengths not equal return false\r\n        if(s.length()!=t.length())return false;\r\n       //array to count number of times a difference can repeat\r\n        int b[]=new int[26];\r\n        int h=k/26;\r\n        int h1=k%26;\r\n        //count of each number from 1 to 26 from 1 to k\r\n        for(int i=0;i<26;i++){\r\n            b[i]+=h;\r\n            if(i<=h1)b[i]++;\r\n        }\r\n\r\n       int i=0;\r\n        while(i<s.length()){\r\n            //if both characters equal increment i\r\n            if(s.charAt(i)==t.charAt(i)){\r\n                i++;\r\n            }else{\r\n                //else now find difference\r\n                //+26 because we dont know it can be negative also and again mod with 26\r\n                int diff=((t.charAt(i)-s.charAt(i))+26)%26;\r\n                //decrement count after usage of one value of b[diff]\r\n                b[diff]--;\r\n                //if b[diff]<0 means over usage than given so return false\r\n                if(b[diff]<0) return false;\r\n                //else finally increment\r\n                else i++;\r\n            }\r\n\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 239 ms (Top 28.57%) | Memory: 56.4 MB (Top 42.86%)\r\n/**\r\n * @param {string} s\r\n * @param {string} t\r\n * @param {number} k\r\n * @return {boolean}\r\n */\r\n var canConvertString = function(s, t, k) {\r\n    let res = true;\r\n    if(s.length === t.length){\r\n        let tmp = [];\r\n        let countMap = new Map();\r\n        for(let i=0; i<s.length; i++){\r\n            let n1 = s[i].charCodeAt();\r\n            let n2 = t[i].charCodeAt();\r\n            let r = n2 - n1;\r\n            if(r < 0){\r\n                r += 26;\r\n            }\r\n            // exclude special case 0\r\n            if(r > 0){\r\n                // Considering repeated letters, the unrepeated move should change to r + 26*n (n>=0)\r\n                // use hash table to count the same letter\r\n                if(!countMap.has(r)){\r\n                    // first time to move\r\n                    countMap.set(r, 1);\r\n                    tmp.push(r);\r\n                }else{\r\n                    // n time to move, n means the count of the same letter\r\n                    let c = countMap.get(r);\r\n                    tmp.push(r + c * 26);\r\n                    // update count\r\n                    countMap.set(r, c+1);\r\n                }\r\n            }\r\n        }\r\n        // check all possible move in range\r\n        for(let i=0; i<tmp.length; i++){\r\n            let t = tmp[i];\r\n            if(t > k){\r\n                res = false;\r\n                break;\r\n            }\r\n        }\r\n    }else{\r\n        res = false;\r\n    }\r\n\r\n    return res;\r\n};"
  }
}
