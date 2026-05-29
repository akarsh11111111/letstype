export default {
  "id": 792,
  "name": "Number of Matching Subsequences",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-matching-subsequences",
  "relativeDir": "N/Number of Matching Subsequences",
  "slug": "0792-number-of-matching-subsequences",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 39,
    "python": 19,
    "javascript": 21
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int numMatchingSubseq(string s, vector<string>& words) {\r\n       int ct=0;\r\n        unordered_map<string,int>m;\r\n        \r\n        for(int i=0;i<words.size();i++)\r\n        {\r\n             m[words[i]]++;\r\n        }\r\n        \r\n        \r\n        for(auto it=m.begin();it!=m.end();it++)\r\n        {\r\n            string k=it->first;\r\n            \r\n            int z=0;\r\n            \r\n            for(int i=0;i<s.length();i++)\r\n            {\r\n                if(s[i]==k[z])\r\n                    z++;\r\n                else if(z==k.length())\r\n                    break;\r\n            }\r\n            if(z==k.length())\r\n                ct=ct+it->second;\r\n            \r\n        }        \r\n    return ct;\r\n    }\r\n};",
    "python": "# Runtime: 851 ms (Top 55.45%) | Memory: 16.4 MB (Top 32.26%)\r\nclass Solution:\r\n    def numMatchingSubseq(self, s: str, words: List[str]) -> int:\r\n        word_dict = defaultdict(list)\r\n        numMatch = 0\r\n        # add words into bucket with key as order of the first letter\r\n        for w in words:\r\n            word_dict[ord(w[0])-ord('a')].append(w)\r\n        # loop through the characters in s\r\n        for c in s:\r\n            qualified = word_dict[ord(c)-ord('a')]\r\n            word_dict[ord(c)-ord('a')] = []\r\n            for q in qualified:\r\n                # if the word starts with the specified letter. i.e this is the last letter of the word\r\n                if len(q) == 1:\r\n                    numMatch += 1\r\n                else:\r\n                    word_dict[ord(q[1])-ord('a')].append(q[1:])\r\n        return numMatch",
    "java": "class Solution {\r\n    public int numMatchingSubseq(String s, String[] words) {\r\n        int count = 0;\r\n        Map<String, Integer> map = new HashMap<>();\r\n        for(String word : words){\r\n            if(!map.containsKey(word)){\r\n                map.put(word, 1);\r\n            }\r\n            else{\r\n                map.put(word, map.get(word)+1);\r\n            }\r\n        }\r\n        for(String word : map.keySet()){\r\n            if(isSeq(word, s)){\r\n                count += map.get(word);\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n    public boolean isSeq(String s1, String s2){\r\n        int s1ind = 0;\r\n        int s2ind = 0;\r\n        int counter = 0;\r\n        if(s1.length() > s2.length()){\r\n            return false;\r\n        }\r\n        while(s1ind < s1.length() && s2ind < s2.length()){\r\n            if(s1.charAt(s1ind) == s2.charAt(s2ind)){\r\n                counter++;\r\n                s1ind++;\r\n                s2ind++;\r\n            }\r\n            else{\r\n                s2ind++;\r\n            }\r\n        }\r\n        return counter == s1.length();\r\n    }\r\n}",
    "javascript": "var numMatchingSubseq = function(s, words) {\r\n    let subsequence = false;\r\n    let count = 0;\r\n    let prevIdx, idx \r\n    for(const word of words) {\r\n        prevIdx = -1;\r\n        idx = -1;\r\n        subsequence = true;\r\n        for(let i = 0; i < word.length; i++) {\r\n            idx = s.indexOf(word[i], idx + 1);\r\n            if(idx > prevIdx) {\r\n                prevIdx = idx;\r\n            } else {\r\n                subsequence = false;\r\n                break;\r\n            }\r\n        }\r\n        if(subsequence) count++;\r\n    }\r\n    return count;\r\n};"
  }
}
