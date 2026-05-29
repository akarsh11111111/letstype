export default {
  "id": 522,
  "name": "Longest Uncommon Subsequence II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-uncommon-subsequence-ii",
  "relativeDir": "L/Longest Uncommon Subsequence II",
  "slug": "0522-longest-uncommon-subsequence-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 36,
    "java": 26,
    "python": 20,
    "javascript": 28
  },
  "languages": {
    "cpp": "class Solution {\r\nprivate:\r\n    bool isCommon(string &s,string &t){\r\n        int index=0;\r\n        for(int i=0;i<s.size();i++){\r\n            if(s[i]==t[index]){\r\n                if(++index==t.size()){\r\n                    return true;\r\n                }\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n    bool isUncommon(vector<string>&strs,int index){\r\n        for(int i=0;i<strs.size() and strs[index].size()<=strs[i].size();i++){\r\n            if(index!=i and isCommon(strs[i],strs[index])){\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\npublic:\r\n    int findLUSlength(vector<string>& strs) {\r\n        sort(strs.begin(),strs.end(),[](string &s,string &t){\r\n            return s.size()>t.size();\r\n        });\r\n        int ans=-1;\r\n        for(int i=0;i<strs.size();i++){\r\n            if(isUncommon(strs,i)){\r\n                ans=strs[i].size();\r\n                break;\r\n            } \r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "// Runtime: 40 ms (Top 71.65%) | Memory: 17.30 MB (Top 26.77%)\r\n\r\nclass Solution:\r\n    def findLUSlength(self, strs: List[str]) -> int:\r\n        def isSubseq(a, b):\r\n            j = 0\r\n            for i in range(len(b)):\r\n                if a[j] == b[i]:\r\n                    j += 1\r\n                    if j == len(a):\r\n                        return True\r\n            return False\r\n        c = Counter(strs)\r\n        s = sorted(c.keys(), key=len, reverse=True)\r\n        for i in range(len(s)):\r\n            if c[s[i]] > 1:\r\n                continue\r\n            if i == 0 or not any(isSubseq(s[i], s[j]) for j in range(i)):    \r\n                return len(s[i])\r\n        return -1",
    "java": "// Runtime: 2 ms (Top 84.32%) | Memory: 39.8 MB (Top 90.27%)\r\nclass Solution {\r\n    public int findLUSlength(String[] strs) {\r\n        Arrays.sort(strs,(a,b) -> b.length() - a.length()); // sort descending order by length\r\n         // store the frequency of all strings in array\r\n        Map<String,Integer> map = new HashMap<>();\r\n        for(String s : strs) map.put(s,map.getOrDefault(s,0)+1);\r\n\r\n        for(int i=0;i<strs.length;i++){\r\n            if(map.get(strs[i]) != 1) continue; // string is not unique\r\n            int j;\r\n            for(j=0;j<i;j++){\r\n                if(isSubsequence(strs[i],strs[j])) break;\r\n            }\r\n            // if it is not a subsequence of any other larger string\r\n             if(j == i) return strs[i].length();\r\n        }\r\n        return -1; // no string satisfies the criterion\r\n    }\r\n    public boolean isSubsequence(String a, String b){\r\n        int i=0,j=0;\r\n        while(i<a.length() && j<b.length())\r\n            if(a.charAt(i) == b.charAt(j++)) i++;\r\n        return i == a.length();\r\n    }\r\n}",
    "javascript": "var findLUSlength = function(strs) {\r\n\tstrs.sort((a, b) => b.length - a.length);\r\n\tconst isSubsequence = (a, b) => {\r\n\t\tconst A_LENGTH = a.length;\r\n\t\tconst B_LENGTH = b.length;\r\n\t\tif (A_LENGTH > B_LENGTH) return false;\r\n\t\tif (a === b) return true;\r\n\t\tconst matches = [...b].reduce((pos, str) => {\r\n\t\t\treturn a[pos] === str ? pos + 1 : pos;\r\n\t\t}, 0);\r\n\t\treturn matches === A_LENGTH;\r\n\t}\r\n\r\n\tfor (let a = 0; a < strs.length; a++) {\r\n\t\tlet isUncommon = true;\r\n\r\n\t\tfor (let b = 0; b < strs.length; b++) {\r\n\t\t\tif (a === b) continue;\r\n\t\t\tif (isSubsequence(strs[a], strs[b])) {\r\n\t\t\t\tisUncommon = false;\r\n\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t}\r\n\t\tif (isUncommon) return strs[a].length;\r\n\r\n\t}\r\n\treturn -1;\r\n};"
  }
}
