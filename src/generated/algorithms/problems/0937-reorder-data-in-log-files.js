export default {
  "id": 937,
  "name": "Reorder Data in Log Files",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reorder-data-in-log-files",
  "relativeDir": "R/Reorder Data in Log Files",
  "slug": "0937-reorder-data-in-log-files",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 38,
    "python": 12,
    "javascript": 35
  },
  "languages": {
    "cpp": "// Runtime: 30 ms (Top 15.78%) | Memory: 13.4 MB (Top 27.79%)\r\n\r\nclass Solution {\r\npublic:\r\n    static bool comp(pair<string, string> a, pair<string, string> b) {\r\n        if(a.second == b.second) return a.first < b.first;\r\n        return a.second < b.second;\r\n    }\r\n    vector<string> reorderLogFiles(vector<string>& logs) {\r\n        vector< pair<string, string> > letter_logs;\r\n        vector<string> digit_logs;\r\n        vector<string> ans;\r\n        for(int i = 0; i < logs.size(); i++) {\r\n            string identifier = \"\";\r\n            for(int j = 0; j < logs[i].length(); j++) {\r\n                if(logs[i][j] == ' ') {\r\n                    if(logs[i][j+1] >= 'a' && logs[i][j+1] <= 'z')\r\n                        letter_logs.push_back({identifier, logs[i].substr(j+1, logs[i].size() - j + 1)});\r\n                    else\r\n                        digit_logs.push_back(logs[i]);\r\n                    break;\r\n                } else {\r\n                    identifier.push_back(logs[i][j]);\r\n                }\r\n            }\r\n        }\r\n        sort(letter_logs.begin(), letter_logs.end(), comp);\r\n        for(auto it: letter_logs) {\r\n            cout<<it.first + \" \" + it.second<<endl;\r\n            ans.push_back(it.first + \" \" + it.second);\r\n        }\r\n        for(auto it: digit_logs) {\r\n            cout<<it<<endl;\r\n            ans.push_back(it);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def reorderLogFiles(self, logs):\r\n        \"\"\"\r\n        :type logs: List[str]\r\n        :rtype: List[str]\r\n        \"\"\"\r\n        self._seq=0\r\n        def _sortBy(log):\r\n            a=log.split(' ')\r\n            logType,self._seq=('A',self._seq) if a[1].isalpha() else ('B',self._seq+1)\r\n            return (logType,\" \".join(a[1:]),a[0]) if logType=='A' else (logType,self._seq)\r\n        return sorted(logs,key=_sortBy)",
    "javascript": "// Runtime: 61 ms (Top 99.69%) | Memory: 45.4 MB (Top 72.33%)\r\n/**\r\n * @param {string[]} logs\r\n * @return {string[]}\r\n */\r\nvar reorderLogFiles = function(logs) {\r\n    const res = [];\r\n\r\n    for (i=0; i<logs.length; i++) {\r\n        let curr = logs[i].split(' ');\r\n        if (isNaN(Number(curr[1]))) res.push(logs[i]);\r\n    }\r\n\r\n    res.sort((a,b) => {\r\n        let first = a.split(' ');\r\n        let second = b.split(' ');\r\n        let fLetter = first.slice(1).join(' ');\r\n        let sLetter = second.slice(1).join(' ');\r\n\r\n        if (fLetter > sLetter) return 1;\r\n        else if (fLetter < sLetter) return -1;\r\n        else {\r\n            if (first[0] >= second[0]) return 1;\r\n            else return -1;\r\n        }\r\n\r\n    })\r\n\r\n    for (i=0; i<logs.length; i++) {\r\n        let curr = logs[i].split(' ');\r\n        if (!isNaN(Number(curr[1]))) res.push(logs[i]);\r\n    }\r\n\r\n    return res;\r\n};"
  }
}
