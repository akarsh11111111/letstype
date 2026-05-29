export default {
  "id": 1400,
  "name": "Construct K Palindrome Strings",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/construct-k-palindrome-strings",
  "relativeDir": "C/Construct K Palindrome Strings",
  "slug": "1400-construct-k-palindrome-strings",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 35,
    "python": 16,
    "javascript": 18
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool canConstruct(string s, int k) {\r\n        if(s.size() < k) return false;\r\n        \r\n        unordered_map<char, int> m;\r\n        for(char c : s) m[c]++;\r\n        \r\n        int oddFr = 0;\r\n        for(auto i : m) if(i.second % 2) oddFr++;\r\n        \r\n        return oddFr <= k;\r\n    }\r\n};",
    "python": "// Runtime: 74 ms (Top 67.79%) | Memory: 17.30 MB (Top 13.48%)\r\n\r\nfrom collections import Counter\r\n\r\nclass Solution:\r\n    def canConstruct(self, s: str, k: int) -> bool:\r\n        if k > len(s):\r\n            return False\r\n        h = Counter(s)\r\n        countOdd = 0\r\n        for value in h.values():\r\n            if value % 2:\r\n                countOdd += 1\r\n        if countOdd > k:\r\n            return False\r\n        return True",
    "java": "// Runtime: 44 ms (Top 25.64%) | Memory: 42.9 MB (Top 94.32%)\r\nclass Solution {\r\n    public boolean canConstruct(String s, int k) {\r\n        if(k==s.length())\r\n        {\r\n            return true;\r\n        }\r\n        else if(k>s.length())\r\n        {\r\n            return false;\r\n        }\r\n        Map<Character,Integer> map=new HashMap<Character,Integer>();\r\n        for(int i=0;i<s.length();i++)\r\n        {\r\n            if(map.containsKey(s.charAt(i)))\r\n            {\r\n                int count=map.get(s.charAt(i));\r\n                map.put(s.charAt(i),count+1);\r\n            }\r\n            else\r\n            {\r\n                map.put(s.charAt(i),1);\r\n            }\r\n        }\r\n        int odd=0;\r\n        for(Map.Entry<Character,Integer>ele:map.entrySet())\r\n        {\r\n            if((ele.getValue()%2)==1)\r\n            {\r\n                odd++;\r\n            }\r\n        }\r\n        return (odd<=k);\r\n    }\r\n}",
    "javascript": "// Runtime: 160 ms (Top 49.09%) | Memory: 45.8 MB (Top 67.27%)\r\nvar canConstruct = function(s, k) {\r\n    if(s.length < k) return false;\r\n    // all even all even\r\n    // all even max k odd\r\n    const freq = {};\r\n    for(let c of s) {\r\n        freq[c] = (freq[c] || 0) + 1;\r\n    }\r\n\r\n    let oddCount = 0;\r\n    const freqOfNums = Object.values(freq);\r\n    for(let cnt of freqOfNums) {\r\n        if(cnt & 1) oddCount++;\r\n    }\r\n\r\n    return oddCount <= k;\r\n};"
  }
}
