export default {
  "id": 1410,
  "name": "HTML Entity Parser",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/html-entity-parser",
  "relativeDir": "H/HTML Entity Parser",
  "slug": "1410-html-entity-parser",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 6,
    "python": 36,
    "javascript": 42
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string entityParser(string text) {\r\n        map<string,char>mp;\r\n        mp[\"&quot;\"] = '\\\"';\r\n        mp[\"&apos;\"] = '\\'';\r\n        mp[\"&amp;\"] = '&';\r\n        mp[\"&gt;\"] = '>';mp[\"&lt;\"]='<';\r\n        mp[\"&frasl;\"] = '/';\r\n        \r\n        for(int i =0;i<text.size();i++){\r\n            if(text[i]=='&'){\r\n                int j = i;\r\n                string com =\"\";\r\n                while(text[j]!=';' && j<text.size()){\r\n                    com+=text[j];\r\n                    j++;\r\n                }\r\n                com+=text[j];\r\n                if(mp.find(com)!=mp.end()){\r\n                    text.erase(i,j-i);\r\n                    text[i] = mp[com];\r\n                }\r\n                \r\n            }\r\n        }\r\n        return text;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def entityParser(self, text: str) -> str:\r\n        d = {\"&quot;\" : '\"' , \"&apos;\":\"'\" , \"&amp;\" : \"&\" , \"&gt;\" : \">\" , \"&lt;\":\"<\" , \"&frasl;\" : \"/\"}\r\n        \r\n        \r\n        \r\n        ans = \"\"\r\n        i = 0\r\n        while i < len(text):\r\n            bag = \"\"\r\n            \r\n            #condition if find & and next char is not & also and handdling index out of range for i + 1\r\n            if i+1 < len(text) and text[i] == \"&\" and text[i+1] != \"&\":\r\n                \r\n                #create subtring for speacial char till \";\"\r\n                for j in range(i , len(text)):\r\n                    if text[j] == \";\":\r\n                        bag += text[j]\r\n                        break\r\n                    else:\r\n                        bag += text[j]\r\n                        \r\n                #if that not present in dict we added same as it is\r\n                if bag not in d:\r\n                    ans += bag\r\n                else:\r\n                    ans += d[bag]\r\n                    \r\n                #increment by length of bag \r\n                i += len(bag)\r\n             \r\n            #otherwise increment by 1\r\n            else:\r\n                ans += text[i]\r\n                i += 1\r\n        return ans",
    "java": "// Runtime: 41 ms (Top 70.19%) | Memory: 56.3 MB (Top 73.08%)\r\nclass Solution {\r\n    public String entityParser(String text) {\r\n        return text.replace(\"&quot;\",\"\\\"\").replace(\"&apos;\",\"'\").replace(\"&gt;\",\">\").replace(\"&lt;\",\"<\").replace(\"&frasl;\",\"/\").replace(\"&amp;\",\"&\");\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {string} text\r\n * @return {string}\r\n */\r\nvar entityParser = function(text) {\r\n    const entityMap = {\r\n        '&quot;': `\"`,\r\n        '&apos;': `'`,\r\n        '&amp;': `&`,\r\n        '&gt;': `>`,\r\n        '&lt;': `<`,\r\n        '&frasl;': `/`\r\n    }\r\n    \r\n    stack = [], entity = \"\";\r\n    \r\n    for(const char of text) {\r\n        stack.push(char);\r\n        if(char == '&') {\r\n            if(entity.length > 0) entity = \"\";\r\n            entity += char;\r\n        }\r\n        else if(char == ';' && entity.length > 0) {\r\n            entity += char;\r\n            \r\n            if(entity in entityMap) {\r\n                while(stack.length && stack[stack.length - 1] !== '&') {\r\n                    stack.pop();\r\n                }\r\n                stack.pop();\r\n                stack.push(entityMap[entity]);\r\n            }\r\n            \r\n            entity = \"\";\r\n        }\r\n        else if(entity.length > 0) {\r\n            entity += char;\r\n        }\r\n    }\r\n    \r\n    return stack.join('');\r\n};"
  }
}
