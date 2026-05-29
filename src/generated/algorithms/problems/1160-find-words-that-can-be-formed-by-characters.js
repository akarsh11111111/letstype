export default {
  "id": 1160,
  "name": "Find Words That Can Be Formed by Characters",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-words-that-can-be-formed-by-characters",
  "relativeDir": "F/Find Words That Can Be Formed by Characters",
  "slug": "1160-find-words-that-can-be-formed-by-characters",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 33,
    "java": 31,
    "python": 16,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 99 ms (Top 61.59%) | Memory: 17.8 MB (Top 75.26%)\r\nclass Solution {\r\npublic:\r\n    int countCharacters(vector<string>& words, string chars) {\r\n        vector<int> dp(26,0);\r\n        vector<int> dp2(26,0);\r\n        for(int i=0;i<chars.size();i++){\r\n            dp[chars[i]-'a']++;\r\n        }\r\n        dp2 = dp;\r\n        bool flg = false;\r\n        int cnt=0;\r\n        for(int i=0;i<words.size();i++){\r\n            string a = words[i];\r\n            for(int j=0;j<a.size();j++){\r\n                if(dp[a[j]-'a']>0){\r\n                    dp[a[j]-'a']--;\r\n                }\r\n                else{\r\n                    flg = true;\r\n                    dp = dp2;\r\n                    break;\r\n                }\r\n            }\r\n            if(!flg){\r\n               cnt += a.size();\r\n            }\r\n            dp = dp2;\r\n            flg = false;\r\n        }\r\n        return cnt;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def countCharacters(self, words, chars):\r\n        \"\"\"\r\n        :type words: List[str]\r\n        :type chars: str\r\n        :rtype: int\r\n        \"\"\"\r\n        b = set(chars)\r\n        anwser = 0\r\n        for i in words:\r\n            a = set(i)\r\n            if a.issubset(b):\r\n                test = [o for o in a if chars.count(o) < i.count(o)]\r\n                if len(test) == 0:    \r\n                    anwser += len(i)\r\n        return anwser",
    "java": "// Runtime: 8 ms (Top 90.62%) | Memory: 53.5 MB (Top 72.75%)\r\nclass Solution {\r\n    public int countCharacters(String[] words, String chars) {\r\n        int[] freq = new int[26];\r\n        for (int i = 0; i < chars.length(); i++) {\r\n            // char - char is a kind of clever way to get the position of\r\n            // the character in the alphabet. 'a' - 'a' would give you 0.\r\n            // 'b' - 'a' would give you 1. 'c' - 'a' would give you 2, and so on.\r\n            freq[chars.charAt(i) - 'a'] ++;\r\n        }\r\n\r\n        int result = 0;\r\n        for (String word : words) {\r\n            int[] copy = Arrays.copyOf(freq, freq.length);\r\n            boolean pass = true;\r\n            for (int j = 0; j < word.length(); j++) {\r\n                // decrement the frequency of this char in array for using\r\n                // if there are less than 1 chance for using this character, invalid,\r\n                // move to next word in words\r\n                if (-- copy[word.charAt(j) - 'a'] < 0) {\r\n                    pass = false;\r\n                    break;\r\n                }\r\n            }\r\n            if (pass) {\r\n                result += word.length();\r\n            }\r\n        }\r\n        return result;\r\n    }\r\n}",
    "javascript": "// Runtime: 175 ms (Top 77.53%) | Memory: 49.4 MB (Top 96.25%)\r\nvar countCharacters = function(words, chars) {\r\n    let arr = [];\r\n    loop1: for(word of words){\r\n        let characters = chars;\r\n        loop2: for( char of word ){\r\n            if(characters.indexOf(char) === -1){\r\n                continue loop1;\r\n            }\r\n            characters = characters.replace(char,'');\r\n        }\r\n        arr.push(word);\r\n    }\r\n    return arr.join('').length;\r\n};"
  }
}
