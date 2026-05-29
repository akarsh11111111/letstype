export default {
  "id": 1859,
  "name": "Sorting the Sentence",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sorting-the-sentence",
  "relativeDir": "S/Sorting the Sentence",
  "slug": "1859-sorting-the-sentence",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 33,
    "java": 10,
    "python": 9,
    "javascript": 6
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string sortSentence(string s) \r\n    {\r\n        stringstream words(s); \r\n        string word;\r\n        pair<int, string> m;\r\n        vector<pair<int, string> > sent;\r\n        \r\n        //SECTION 1\r\n        while(words>>word)\r\n        {\r\n            int len = word.size();\r\n            int i = int(word[len-1]) - 48;\r\n            sent.push_back(make_pair(i, word.substr(0, len-1)));\r\n        }\r\n        \r\n        //SECTION 2\r\n        sort(sent.begin(), sent.end());\r\n        \r\n        //SECTION 3\r\n        string ans = \"\";\r\n        int len = sent.size();\r\n        for(int i=0; i<len; i++)\r\n        {\r\n            ans += sent[i].second;\r\n            if(i!= len-1)\r\n                ans += \" \";\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 68 ms (Top 5.88%) | Memory: 13.7 MB (Top 96.86%)\r\nclass Solution:\r\n    def sortSentence(self, s: str) -> str:\r\n\r\n        x = s.split()\r\n        dic = {}\r\n        for i in x :\r\n            dic[i[-1]] = i[:-1]\r\n        return ' '.join([dic[j] for j in sorted(dic)])",
    "java": "// Runtime: 2 ms (Top 59.85%) | Memory: 42 MB (Top 63.26%)\r\nclass Solution {\r\n    public String sortSentence(String s) {\r\n        String []res=new String[s.split(\" \").length];\r\n        for(String st:s.split(\" \")){\r\n            res[st.charAt(st.length()-1)-'1']=st.substring(0,st.length()-1);\r\n        }\r\n        return String.join(\" \",res);\r\n    }\r\n}",
    "javascript": "// Runtime: 63 ms (Top 92.34%) | Memory: 42.5 MB (Top 5.22%)\r\nvar sortSentence = function(s) {\r\n    let sortingS = s.split(' ').sort((a,b) => a.substr(-1) - b.substr(-1));\r\n    slicingS = sortingS.map(word => word.slice(0, -1));\r\n    return slicingS.join(' ');\r\n};"
  }
}
