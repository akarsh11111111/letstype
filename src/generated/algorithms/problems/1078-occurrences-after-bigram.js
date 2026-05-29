export default {
  "id": 1078,
  "name": "Occurrences After Bigram",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/occurrences-after-bigram",
  "relativeDir": "O/Occurrences After Bigram",
  "slug": "1078-occurrences-after-bigram",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 41,
    "java": 19,
    "python": 5,
    "javascript": 9
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tvector<string> findOcurrences(string text, string first, string second) {\r\n\t\tvector<string>ans;\r\n\t\tint i=0;\r\n\t\twhile(i<text.length())\r\n\t\t{\r\n\t\t\tstring word = \"\";\r\n\t\t\tstring secondWord=\"\";\r\n\t\t\twhile(i<text.length() && text[i]!=' ')\r\n\t\t\t{\r\n\t\t\t\tword = word+text[i];\r\n\t\t\t\ti++;\r\n\t\t\t}\r\n\t\t\tif(word == first)\r\n\t\t\t{\r\n\t\t\t\tint k = i+1;\r\n\t\t\t\twhile(k<text.length() && text[k]!=' ')\r\n\t\t\t\t{\r\n\t\t\t\t\tsecondWord = secondWord+text[k];\r\n\t\t\t\t\tk++;\r\n\t\t\t\t}  \r\n\t\t\t\tk++;\r\n\t\t\t\tif(k<text.length() && secondWord==second)\r\n\t\t\t\t{\r\n\t\t\t\t\tstring tmp=\"\";\r\n\t\t\t\t\tint j=k;\r\n\t\t\t\t\twhile(j<text.length() && text[j]!=' ')\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\ttmp = tmp+text[j];\r\n\t\t\t\t\t\tj++;\r\n\t\t\t\t\t} \r\n\r\n\t\t\t\t\tans.push_back(tmp);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t   i++;\r\n\t\t}\r\n\t\treturn ans;\r\n\t}\r\n};",
    "python": "class Solution:\r\n    def findOcurrences(self, text: str, first: str, second: str) -> List[str]:\r\n        pattern = r\"(?<=\\b\" + first +\" \" + second + r\" )[a-z]*\"\r\n        txt = re.findall(pattern,text)\r\n        return txt",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 41.60 MB (Top 23.12%)\r\n\r\nclass Solution {\r\n    public String[] findOcurrences(String text, String first, String second) {\r\n        String[] st = text.split(\" \");\r\n        List<String> l = new ArrayList<String>();\r\n        int  i =0,n = st.length;\r\n\r\n        while(i<n)\r\n        {\r\n            if(st[i].equals(first))\r\n                if(i+1<n-1 && st[i+1].equals(second))\r\n                    l.add(st[i+2]);\r\n            i++;\r\n        }\r\n\r\n        return l.toArray(new String[0]);\r\n    }\r\n}",
    "javascript": "// Runtime: 92 ms (Top 39.29%) | Memory: 41.6 MB (Top 81.43%)\r\nvar findOcurrences = function(text, first, second) {\r\n    let result = [];\r\n    let txt = text.split(' ');\r\n    for(let i = 0; i<txt.length - 2; i++) {\r\n        if(txt[i] === first && txt[i+1] === second) result.push(txt[i+2]);\r\n    }\r\n    return result;\r\n};"
  }
}
