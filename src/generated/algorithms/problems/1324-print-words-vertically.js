export default {
  "id": 1324,
  "name": "Print Words Vertically",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/print-words-vertically",
  "relativeDir": "P/Print Words Vertically",
  "slug": "1324-print-words-vertically",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 49,
    "java": 72,
    "python": 23,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 6.4 MB (Top 78.82%)\r\nclass Solution {\r\npublic:\r\n    vector<string> printVertically(string s) {\r\n\r\n        int row = 0, col = 0;\r\n\r\n        stringstream sso(s);\r\n        string buffer;\r\n\r\n        while (sso >> buffer)\r\n        {\r\n            row++;\r\n            col = max((int)buffer.size(),col);\r\n        }\r\n\r\n        vector<vector<char>> matrix(row, vector<char>(col,' '));\r\n\r\n        sso = stringstream(s);\r\n\r\n        int i = 0;\r\n        while (sso >> buffer)\r\n        {\r\n            for (int j = 0; j < buffer.size(); j++)\r\n                matrix[i][j] = buffer[j];\r\n            i++;\r\n        }\r\n\r\n        vector<string> res;\r\n        for (int j = 0; j < col; j++)\r\n        {\r\n            string item;\r\n            for (int i = 0; i < row; i++)\r\n                item.push_back(matrix[i][j]);\r\n\r\n            for (int i = item.size()-1; i >= 0; i--)\r\n            {\r\n                if (item[i] != ' ')\r\n                {\r\n                    item.erase(item.begin()+i+1,item.end());\r\n                    break;\r\n                }\r\n            }\r\n            res.push_back(item);\r\n        }\r\n\r\n        return res;\r\n    }\r\n};",
    "python": "\r\nclass Solution:\r\n    def getMaxLen(self, words):\r\n        max_len = 0\r\n        for word in words:\r\n            max_len = max(max_len, len(word))\r\n        return max_len\r\n    \r\n    def printVertically(self, s: str) -> List[str]:\r\n        words = s.split()\r\n        max_len = self.getMaxLen(words)\r\n        \r\n        res = list()\r\n        for i in range(max_len):\r\n            s = \"\"\r\n            for word in words:\r\n                if i < len(word):\r\n                    s += word[i]\r\n                else:\r\n                    s += \" \"\r\n            s = s.rstrip()\r\n            res.append(s)\r\n        return res",
    "java": "// Runtime: 10 ms (Top 20.22%) | Memory: 42.9 MB (Top 20.22%)\r\nclass Solution {\r\n    public List<String> printVertically(String s) {\r\n        s = s.replace(\" \",\",\");\r\n        String str=\"\";\r\n        List<String> a=new ArrayList<>();\r\n\r\n        int max=0;\r\n        for(int i =0;i<s.length();i++){\r\n           char ch=s.charAt(i);\r\n            if(ch==','){\r\n                a.add(str);\r\n                max=Math.max(max,str.length());\r\n                str=\"\";\r\n                continue;\r\n            }\r\n            else if(i==s.length()-1){\r\n                str+=ch;\r\n                a.add(str);\r\n                max=Math.max(max,str.length());\r\n                str=\"\";\r\n                continue;\r\n            }\r\n            str+=ch;\r\n\r\n        }\r\n\r\n        String [] arr=new String[max];\r\n        for(int i =0;i<max;i++){\r\n            arr[i]=\"\";\r\n\r\n        }\r\n\r\n        for(int i =0;i<a.size();i++){\r\n            String x=a.get(i);\r\n\r\n            for(int j=0;j<max;j++){\r\n\r\n                if(j<x.length()){\r\n                    arr[j]+=x.charAt(j);\r\n                }\r\n                else{\r\n                    arr[j]+=\" \";\r\n                }\r\n            }\r\n\r\n        }\r\n\r\n        a=new ArrayList<>();\r\n        for(int i=0;i<arr.length;i++){\r\n\r\n            String x=arr[i];\r\n            x=trim(x);\r\n\r\n            a.add(x);\r\n        }\r\n\r\n        return a;\r\n    }\r\n\r\n    public String trim(String str) {\r\n        int len = str.length();\r\n        int st = 0;\r\n\r\n        char[] val = str.toCharArray();\r\n\r\n        while ((st < len) && (val[len - 1] <= ' ')) {\r\n            len--;\r\n        }\r\n        return str.substring(st, len);\r\n    }\r\n}",
    "javascript": "// Runtime: 37 ms (Top 100.0%) | Memory: 41.70 MB (Top 67.57%)\r\n\r\nvar printVertically = function(s) {\r\n    const res = []\r\n    const w = s.split(\" \")\r\n    const maxL = Array.from(w).sort((a,b)=>b.length-a.length)[0].length\r\n\r\n    let i = 0\r\n    while(i<=maxL){\r\n        let str=''\r\n        for(let e of w){\r\n            str+=e[i]?? \" \"\r\n        }\r\n        let trimmed = str.trimEnd()\r\n        if(trimmed!==\"\"){\r\n            res.push(trimmed)\r\n        }\r\n        str=\"\"\r\n        i++\r\n    }\r\n\r\n    return res;\r\n};"
  }
}
