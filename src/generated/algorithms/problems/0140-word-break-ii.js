export default {
  "id": 140,
  "name": "Word Break II",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/word-break-ii",
  "relativeDir": "W/Word Break II",
  "slug": "0140-word-break-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 28,
    "python": 27,
    "javascript": 24
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    void helper(string s, unordered_set<string>& dict,int start, int index,string current,vector<string>& ans){\r\n        if(start==s.size()){\r\n            ans.push_back(current);\r\n            return;\r\n        }\r\n        if(index==s.size()) return;\r\n\r\n        string sub=s.substr(start,index-start+1);\r\n\r\n        if(dict.count(sub)>0){\r\n            string recursion;\r\n            if(current.size()==0) recursion=sub;\r\n            else recursion=current+\" \"+sub; \r\n            helper(s,dict,index+1,index+1,recursion,ans);\r\n        }\r\n        helper(s,dict,start,index+1,current,ans);\r\n        return;\r\n    }\r\n    vector<string> wordBreak(string s, vector<string>& wordDict) {\r\n        unordered_set<string> dict;\r\n        for(int i=0;i<wordDict.size();i++){\r\n                dict.insert(wordDict[i]);\r\n        }\r\n        vector<string> ans;\r\n        helper(s,dict,0,0,\"\",ans);\r\n        return ans;\r\n        \r\n    }\r\n};",
    "python": "# Runtime: 56 ms (Top 49.21%) | Memory: 14 MB (Top 33.37%)\r\nclass Solution(object):\r\n    def wordBreak(self, s, wordDict):\r\n        \"\"\"\r\n        :type s: str\r\n        :type wordDict: List[str]\r\n        :rtype: List[str]\r\n        \"\"\"\r\n\r\n        dic = defaultdict(list)\r\n        for w in wordDict:\r\n            dic[w[0]].append(w)\r\n        result = []\r\n        def recursion(idx , ans):\r\n            if idx >= len(s):\r\n                result.append(\" \".join(ans))\r\n                return\r\n\r\n            for w in dic[s[idx]]:\r\n                if s[idx : idx+len(w)] == w:\r\n                    ans.append(w)\r\n                    recursion(idx+len(w), ans)\r\n                    ans.pop()\r\n\r\n            return\r\n        recursion(0, [])\r\n        return result",
    "java": "class Solution {\r\n\tList<String> res = new ArrayList<>();\r\n\tString s;\r\n\tint index = 0;\r\n\tSet<String> set = new HashSet<>();\r\n    public List<String> wordBreak(String s, List<String> wordDict) {\r\n        this.s = s;\r\n\t\tfor (String word: wordDict) set.add(word);\r\n\t\tbacktrack(\"\");\r\n\t\treturn res;\r\n    }\r\n\tpublic void backtrack(String sentence) {\r\n\t    if (index == s.length()) {\r\n\t        res.add(sentence.trim());\r\n\t        return;\r\n        }\r\n        int indexCopy = index;\r\n        for (int i = index + 1; i <= s.length(); i++) {\r\n\t        String str = s.substring(index, i);\r\n\t        if (set.contains(str)) {\r\n\t            index = i;\r\n\t            backtrack(sentence + \" \" + str);\r\n\t            index = indexCopy;\r\n            }\r\n        }\r\n        return;\r\n    }\r\n}",
    "javascript": "var wordBreak = function(s, wordDict) {\r\n    const n = s.length;\r\n    const result = [];\r\n\r\n    const findValidSentences = (currentString = '', remainingString = s, currentIndex = 0) => {\r\n        if(currentIndex === remainingString.length) {\r\n            if(wordDict.includes(remainingString)) {\r\n                result.push(`${currentString} ${remainingString}`.trim())\r\n            }\r\n            return result;\r\n        }\r\n\r\n        const newWord = remainingString.slice(0, currentIndex);\r\n        if(wordDict.includes(newWord)) {\r\n            const newCurrentString = `${currentString} ${newWord}`;\r\n            const newRemainingString = remainingString.slice(currentIndex);\r\n            findValidSentences(newCurrentString, newRemainingString, 0);\r\n        }\r\n\r\n        return findValidSentences(currentString, remainingString, currentIndex + 1);\r\n    }\r\n\r\n    return findValidSentences();\r\n};"
  }
}
