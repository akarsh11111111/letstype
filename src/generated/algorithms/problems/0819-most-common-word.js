export default {
  "id": 819,
  "name": "Most Common Word",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/most-common-word",
  "relativeDir": "M/Most Common Word",
  "slug": "0819-most-common-word",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 22,
    "python": 21,
    "javascript": 13
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string mostCommonWord(string paragraph, vector<string>& banned) {\r\n        string temp;\r\n        vector<string> words;\r\n        for(char c:paragraph){\r\n            if(isalpha(c) && !isspace(c)) temp+=tolower(c);\r\n            else{\r\n                if(temp.length()) words.push_back(temp);\r\n                temp=\"\";\r\n            }\r\n        }\r\n        if(temp.length()) words.push_back(temp);\r\n        \r\n        map<string,int> mp;\r\n        for(string i:words) mp[i]++;\r\n        for(string i:banned) mp[i]=0;\r\n        string ans;\r\n        int maxUsedFreq=0;\r\n        for(auto i:mp){\r\n            if(i.second>maxUsedFreq){ \r\n                ans=i.first;\r\n                maxUsedFreq=i.second;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    import string\r\n    from collections import Counter\r\n    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:\r\n        #sunday morning hangover solution haha\r\n        \r\n        #calling this twice seems unnecesary but whatevs\r\n        #replace \",\" with \" \" (apparently translate() is much quicker than replace)\r\n        para = paragraph.translate(str.maketrans(\",\",\" \"))\r\n        #strip out rest of punctuation and make it lower case\r\n        para = para.translate(str.maketrans(' ', ' ', string.punctuation)).lower()\r\n        #split on the sapces\r\n        para = para.split()\r\n        #staple counter function\r\n        para_count = Counter(para)\r\n        #loop thru banned words, if they're in para_count pop the off\r\n        for word in banned:\r\n            if word in para_count:\r\n                para_count.pop(word)\r\n        #return val from most common\r\n        return para_count.most_common(1)[0][0]",
    "java": "// Runtime: 23 ms (Top 55.73%) | Memory: 44.3 MB (Top 45.07%)\r\n\r\nclass Solution {\r\n    public String mostCommonWord(String paragraph, String[] banned) {\r\n\r\n        HashMap<String, Integer> hm = new HashMap<>();\r\n        String[] words = paragraph.replaceAll(\"[!?',;.]\",\" \").toLowerCase().split(\"\\\\s+\");\r\n        for(int i=0; i<words.length; i++)\r\n        {\r\n            if(hm.containsKey(words[i]))\r\n                hm.replace(words[i], hm.get(words[i]), hm.get(words[i])+1);\r\n            else\r\n                hm.put(words[i], 1);\r\n        }\r\n\r\n        for(int i=0; i< banned.length; i++)\r\n            if(hm.containsKey(banned[i]))\r\n                 hm.remove(banned[i]);\r\n\r\n        return Collections.max(hm.entrySet(), Map.Entry.comparingByValue()).getKey();\r\n    }\r\n}",
    "javascript": "// Runtime: 69 ms, faster than 94.32%\r\n// Memory Usage: 44.2 MB, less than 61.20%\r\nvar mostCommonWord = function(paragraph, banned) {\r\n\tparagraph = new Map(Object.entries(\r\n\tparagraph\r\n\t\t.toLowerCase()\r\n\t\t.match(/\\b[a-z]+\\b/gi)\r\n\t\t.reduce((acc, cur) => ((acc[cur] = (acc[cur] || 0) + 1), acc), {}))\r\n\t\t.sort((a, b) => b[1] - a[1])\r\n\t);\r\n\tfor (let i = 0; i < banned.length; i++) paragraph.delete(banned[i]);\r\n\treturn paragraph.entries().next().value[0];\r\n};"
  }
}
