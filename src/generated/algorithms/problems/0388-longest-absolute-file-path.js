export default {
  "id": 388,
  "name": "Longest Absolute File Path",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-absolute-file-path",
  "relativeDir": "L/Longest Absolute File Path",
  "slug": "0388-longest-absolute-file-path",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 53,
    "java": 35,
    "python": 27,
    "javascript": 32
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 6.5 MB (Top 50.23%)\r\n// Using Map O(300 + N)\r\n\r\nclass Solution {\r\n    public:\r\n    int lengthLongestPath(string input) {\r\n        input.push_back('\\n');\r\n        vector<int> levels(301, 0);\r\n        int ans = 0;\r\n        int curr_tabs = 0;\r\n        bool is_file = false;\r\n        int curr_word_len = 0;\r\n        int total_len = 0;\r\n\r\n        for(char c : input)\r\n        {\r\n            if(c == '\\t')\r\n            {\r\n                curr_tabs++;\r\n            }\r\n            else if(c == '\\n')\r\n            {\r\n                if(curr_tabs == 0)\r\n                {\r\n                    levels[0] = curr_word_len;\r\n                }\r\n                else\r\n                {\r\n                    levels[curr_tabs] = levels[curr_tabs-1] + curr_word_len;\r\n                }\r\n\r\n                if(is_file)\r\n                {\r\n                    ans = max(ans, levels[curr_tabs] + curr_tabs);\r\n                    // levels[curr_tabs] = 0;\r\n                }\r\n                curr_tabs = 0;\r\n                is_file = false;\r\n                curr_word_len = 0;\r\n            }\r\n            else if(c == '.')\r\n            {\r\n                is_file = true;\r\n                curr_word_len++;\r\n            }\r\n            else\r\n            {\r\n                curr_word_len++;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n\tdef lengthLongestPath(self, input: str) -> int:\r\n\t\tif \".\" not in input:\r\n\t\t\treturn 0\r\n\r\n\t\ta=input.split(\"\\n\")\r\n\t\tfiles=[]\r\n\t\tfor i in a:\r\n\t\t\tif \".\" in i:\r\n\t\t\t\tfiles.append(i)\r\n\r\n\t\tfinal=[]\r\n\t\tfor i in range(len(files)):\r\n\t\t\tfile=files[i]\r\n\t\t\tlvl=file.count(\"\\t\")\r\n\t\t\tidx=a.index(file)-1\r\n\t\t\tsave=[files[i].replace(\"\\t\",\"\")]\r\n\t\t\tfor j in range(lvl):\r\n\t\t\t\twhile a[idx].count(\"\\t\")!=lvl-1:\r\n\t\t\t\t\tidx-=1\r\n\t\t\t\tlvl=a[idx].count(\"\\t\")\r\n\t\t\t\tsave.append(a[idx].replace(\"\\t\",\"\"))\r\n\t\t\t\tidx-=1\r\n\t\t\tfinal.append(save)\r\n\r\n\t\tfinal=list(map(\"/\".join,final))\r\n\t\treturn len(max(final,key=len))",
    "java": "// Runtime: 1 ms (Top 81.1%) | Memory: 40.51 MB (Top 47.9%)\r\n\r\nclass Solution {\r\n    public int lengthLongestPath(String input) {\r\n        var stack = new ArrayDeque<Integer>();\r\n        int max = 0;\r\n        String[] lines = input.split(\"\\n\");\r\n        for(var line: lines) {\r\n            int tabs = countTabs(line);\r\n            while(tabs < stack.size()) {\r\n                stack.pop();\r\n            }\r\n            int current = stack.isEmpty() ? 0: stack.peek();\r\n            int nameLength = line.length() - tabs;\r\n            if(isFilename(line)) {\r\n                max = Math.max(max, current + nameLength);\r\n            } else {\r\n                stack.push(current + nameLength + 1);\r\n            }\r\n        }\r\n        return max;\r\n    }\r\n    \r\n    private int countTabs(String s) {\r\n        for(int i = 0; i < s.length(); i++) {\r\n            if(s.charAt(i) != '\\t') return i;\r\n        }\r\n        return 0;\r\n    }\r\n    \r\n    private boolean isFilename(String s) {\r\n        return s.lastIndexOf(\".\") != -1;\r\n    }\r\n    \r\n}",
    "javascript": "function isFile(path) {\r\n    return path.includes('.')\r\n}\r\n\r\nvar lengthLongestPath = function(input) {\r\n    const segments = input.split('\\n');\r\n    \r\n    let max = 0;\r\n    let path = [];\r\n    for (const segment of segments) {\r\n        if (segment.startsWith('\\t')) {\r\n            const nesting = segment.match(/\\t/g).length;\r\n            \r\n            while (nesting < path.length) {\r\n                path.pop();\r\n            }\r\n            \r\n            path.push(segment.replace(/\\t/g, ''))\r\n        } else {\r\n            path = [segment]\r\n        }\r\n        \r\n        if (isFile(path.at(-1))) {\r\n            const filePath = path.join('/');\r\n            if (filePath.length > max) {\r\n                max = filePath.length;\r\n            }\r\n        }\r\n    }\r\n    \r\n    return max;\r\n};"
  }
}
