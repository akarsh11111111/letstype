export default {
  "id": 1048,
  "name": "Longest String Chain",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-string-chain",
  "relativeDir": "L/Longest String Chain",
  "slug": "1048-longest-string-chain",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 40,
    "python": 20,
    "javascript": 57
  },
  "languages": {
    "cpp": "class Solution {\r\n    int dfs(unordered_map<string, int>& m, unordered_set<string>& setWords, \r\n            const string& w) {\r\n        if (m.count(w)) return m[w];\r\n        int maxLen = 1;\r\n        \r\n        for(int i=0;i<w.size();++i) {\r\n            auto preWord = w.substr(0, i) + w.substr(i+1);\r\n            if(setWords.count(preWord)) {\r\n                int newLen = 1 + dfs(m, setWords, preWord);\r\n                maxLen = max(newLen, maxLen);\r\n            }\r\n        }\r\n        m[w] = maxLen;\r\n        return maxLen;\r\n        \r\n    }\r\npublic:\r\n    int longestStrChain(vector<string>& words) {\r\n        \r\n        unordered_map<string, int> m;\r\n        unordered_set<string> setWords(words.begin(), words.end());\r\n        int res = 0;\r\n\t\t\r\n        for(auto& w:words) {\r\n            res = max(res, dfs(m, setWords, w));\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "# Runtime: 123 ms (Top 85.4%) | Memory: 16.81 MB (Top 58.4%)\r\n\r\nclass Solution:\r\n    def longestStrChain(self, words: List[str]) -> int:\r\n        \r\n        words.sort(key=len)\r\n        dic = {}\r\n        \r\n        for i in words:\r\n            dic[ i ] = 1\r\n            \r\n            for j in range(len(i)):\r\n                \r\n                # creating words by deleting a letter\r\n                successor = i[:j] + i[j+1:]\r\n                if successor in dic:\r\n                    dic[ i ] = max (dic[i], 1 + dic[successor])\r\n        \r\n        res = max(dic.values())\r\n        return res",
    "java": "class Solution {\r\n    \r\n    Boolean compareForIncreaseByOne(String str1,String str2){\r\n            //str 1 will be long than str2\r\n        int first=0;\r\n        int second=0;\r\n        if(str1.length() != (str2.length() + 1)){\r\n            return false;\r\n        }\r\n        while(first < str1.length()){\r\n            if(second < str2.length() && str1.charAt(first) == str2.charAt(second)){\r\n                first++;\r\n                second++;\r\n            }else{\r\n                first++;\r\n            }\r\n        }\r\n        if(first == str1.length() && second == str2.length()){\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n    \r\n    public int longestStrChain(String[] words) {\r\n        int N = words.length;\r\n        Arrays.sort(words,(a,b) -> a.length()-b.length());  //as Sequence/Subset are not ordered\r\n        int []dp =new int[N];\r\n        Arrays.fill(dp,1);\r\n        int maxi = 1;\r\n        for(int i=0;i<N;i++){\r\n            for(int j=0;j<i;j++){\r\n                if(compareForIncreaseByOne(words[i],words[j]) && dp[j]+1 > dp[i]){\r\n                    dp[i] = dp[j] + 1;\r\n                    maxi = Math.max(maxi,dp[i]);\r\n                }\r\n            }\r\n        }//for neds\r\n        return maxi;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {string[]} words\r\n * @return {number}\r\n */\r\nvar longestStrChain = function(words) \r\n{\r\n        let tiers = new Array(16);\r\n        for(let i=0; i<tiers.length; i++)\r\n                tiers[i] = [];\r\n        for(let word of words)\r\n                tiers[word.length-1].push({word,len:1});\r\n\r\n        const isPredecessor = function(word1,word2)     // Assumes word2.length = word1.length+1\r\n        {\r\n                let w1p = 0, misses = 0;\r\n                for(let w2p = 0; w2p < word2.length; w2p++)\r\n                {\r\n                        if(word2[w2p] !== word1[w1p])\r\n                        {\r\n                                if(misses === 1)\r\n                                        return false;\r\n                                misses = 1;\r\n                        }\r\n                        else\r\n                        {\r\n                                w1p++;\r\n                                if(w1p === word1.length)\r\n                                        return true;\r\n                        }\r\n                }\r\n                return true;\r\n        };\r\n        \r\n        \r\n        for(let i=tiers.length-1; i>0; i--)\r\n        {\r\n                for(let w2=0; w2<tiers[i].length; w2++)\r\n                {\r\n                        for(let w1 = 0; w1 < tiers[i-1].length; w1++)\r\n                        {\r\n                                if(tiers[i-1][w1].len >= tiers[i][w2].len+1)\r\n                                        continue;\r\n                                if(isPredecessor(tiers[i-1][w1].word, tiers[i][w2].word))\r\n                                        tiers[i-1][w1].len = tiers[i][w2].len+1;\r\n                        }\r\n                }\r\n        }\r\n        \r\n        let max = 0;\r\n        for(let i=0; i<tiers.length; i++)\r\n        {\r\n                for(let j=0; j<tiers[i].length; j++)\r\n                        max = Math.max(max,tiers[i][j].len);\r\n        }\r\n        \r\n        return max;\r\n};"
  }
}
