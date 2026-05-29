export default {
  "id": 2284,
  "name": "Sender With Largest Word Count",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sender-with-largest-word-count",
  "relativeDir": "S/Sender With Largest Word Count",
  "slug": "2284-sender-with-largest-word-count",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 46,
    "python": 18,
    "javascript": 20
  },
  "languages": {
    "cpp": "// Runtime: 428 ms (Top 34.44%) | Memory: 77.6 MB (Top 40.48%)\r\nclass Solution {\r\npublic:\r\n    string largestWordCount(vector<string>& messages, vector<string>& senders) {\r\n\r\n        int n(size(messages));\r\n        map<string, int> m;\r\n        for (auto i=0; i<n; i++) {\r\n\r\n            stringstream ss(messages[i]);\r\n            string word;\r\n            int count(0);\r\n            while (ss >> word) count++;\r\n            m[senders[i]] += count;\r\n        }\r\n\r\n        int count(0);\r\n        string res;\r\n        for (auto& p : m) {\r\n            if (p.second >= count) {\r\n                count = p.second;\r\n                if (!res.empty() or res < p.first) res = p.first;\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def largestWordCount(self, messages: List[str], senders: List[str]) -> str:\r\n        d={}\r\n        l=[]\r\n        for i in range(len(messages)):\r\n            if senders[i] not in d:\r\n                d[senders[i]]=len(messages[i].split())\r\n            else:\r\n                d[senders[i]]+=len(messages[i].split())\r\n        x=max(d.values())\r\n        for k,v in d.items():\r\n            if v==x :\r\n                l.append(k)\r\n        if len(l)==1:\r\n            return l[0]\r\n        else:\r\n            l=sorted(l)[::-1]      #Lexigograhical sorting of list\r\n            return l[0]",
    "java": "// Runtime: 26 ms (Top 92.47%) | Memory: 48.80 MB (Top 99.46%)\r\n\r\nclass Solution {\r\n    public String largestWordCount(String[] messages, String[] senders) \r\n    {\r\n        HashMap<String,Integer> map = new HashMap<>();\r\n        String res = \"\";int max =0;\r\n        \r\n        for(int i=0; i<messages.length;i++)\r\n        {\r\n            int words = get_count(messages[i]);\r\n            \r\n            if(!map.containsKey(senders[i]))\r\n               map.put(senders[i] , words);\r\n               \r\n            else\r\n               map.put(senders[i],map.get(senders[i]) + words);\r\n        }\r\n        \r\n        for(String s: map.keySet())\r\n        {\r\n            if(map.get(s) > max)\r\n            {\r\n                res = s;\r\n                max = map.get(s);\r\n            }\r\n            \r\n            if(map.get(s) == max && res.compareTo(s) < 0)\r\n                res = s;\r\n        }\r\n        return res;\r\n    }\r\n    \r\n    private int get_count(String s)\r\n    {\r\n        int spaces = 0;\r\n        \r\n        for(int i=0; i<s.length();i++)\r\n        {\r\n            char ch = s.charAt(i);\r\n            if(ch == ' ')\r\n                spaces++;\r\n        }\r\n        return spaces+1;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {string[]} messages\r\n * @param {string[]} senders\r\n * @return {string}\r\n */\r\nvar largestWordCount = function(messages, senders) {\r\n    let wordCount = {}\r\n    let result = ''\r\n    let maxCount = -Infinity\r\n    for (let i = 0; i < messages.length;i++) {\r\n        let count=messages[i].split(' ').length\r\n        wordCount[senders[i]] = wordCount[senders[i]] == undefined ? count : wordCount[senders[i]] + count;\r\n        if (wordCount[senders[i]]  > maxCount || (wordCount[senders[i]]  == maxCount && senders[i] > result)) {\r\n            maxCount = wordCount[senders[i]];\r\n            result = senders[i];\r\n        }\r\n    }\r\n    return result;\r\n\r\n};"
  }
}
