export default {
  "id": 884,
  "name": "Uncommon Words from Two Sentences",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/uncommon-words-from-two-sentences",
  "relativeDir": "U/Uncommon Words from Two Sentences",
  "slug": "0884-uncommon-words-from-two-sentences",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 23,
    "python": 10,
    "javascript": 4
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 47.05%) | Memory: 7.20 MB (Top 56.72%)\r\n\r\nclass Solution {\r\npublic:\r\n    void uncommon(string s,unordered_map<string,int>&mp) {\r\n        string word=\"\";\r\n        for(int i=0; i<s.size(); i++) {\r\n                if(s[i]==' ') {\r\n                     mp[word]++;\r\n                     word=\"\";\r\n                }else {\r\n                     word+=s[i];\r\n                }\r\n        }\r\n        mp[word]++;\r\n    }\r\n    vector<string> uncommonFromSentences(string s1, string s2) {\r\n        vector<string> ans;\r\n        unordered_map<string,int> mp;\r\n        uncommon(s1,mp);\r\n        uncommon(s2,mp);\r\n        for(pair<string,int> p : mp) {\r\n            if(p.second==1) ans.push_back(p.first);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "from collections import Counter\r\nclass Solution:\r\n    def uncommonFromSentences(self, s1: str, s2: str) -> List[str]:\r\n        x = dict(Counter(s1.split() + s2.split()))\r\n        ans = []\r\n        for key in x:\r\n            if x[key] == 1:\r\n                ans.append(key)\r\n                \r\n        return ans",
    "java": "class Solution {\r\n    public String[] uncommonFromSentences(String s1, String s2) {\r\n        List<String> list=new LinkedList<>();\r\n        Map<String, Integer> map=new HashMap<>();\r\n        String[] arr1=s1.split(\" \");\r\n        String[] arr2=s2.split(\" \");\r\n        for(int i=0;i<arr1.length;i++){\r\n            map.put(arr1[i],map.getOrDefault(arr1[i],0)+1);\r\n        }\r\n        for(int i=0;i<arr2.length;i++){\r\n            map.put(arr2[i],map.getOrDefault(arr2[i],0)+1);\r\n        }\r\n        for(Map.Entry<String, Integer> entry:map.entrySet()){\r\n            if(entry.getValue()==1)\r\n                list.add(entry.getKey());\r\n        }\r\n        String[] res=new String[list.size()];\r\n        for(int i=0;i<res.length;i++){\r\n            res[i]=list.get(i);\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 111 ms (Top 17.77%) | Memory: 42.1 MB (Top 85.95%)\r\nvar uncommonFromSentences = function(s1, s2) {\r\n    return (s1+' '+s2).split(' ').filter((el,i,arr)=>arr.indexOf(el)===arr.lastIndexOf(el))\r\n};"
  }
}
