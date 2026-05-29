export default {
  "id": 49,
  "name": "Group Anagrams",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/group-anagrams",
  "relativeDir": "G/Group Anagrams",
  "slug": "0049-group-anagrams",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 36,
    "python": 13,
    "javascript": 25
  },
  "languages": {
    "cpp": "// Runtime: 109 ms (Top 13.91%) | Memory: 21.3 MB (Top 27.37%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\r\n\r\n        map<string,vector<int>> mp;\r\n        for(int i=0;i<strs.size();i++)\r\n        {\r\n            string t=strs[i];\r\n            sort(t.begin(),t.end());\r\n            mp[t].push_back(i);\r\n        }\r\n        vector<vector<string>> ans;\r\n        for(auto it:mp)\r\n        {\r\n            vector<string> flag;\r\n            for(auto each:it.second)\r\n            {\r\n                flag.push_back(strs[each]);\r\n            }\r\n            ans.push_back(flag);\r\n        }\r\n\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\r\n        strs_table = {}\r\n\r\n        for string in strs:\r\n            sorted_string = ''.join(sorted(string))\r\n\r\n            if sorted_string not in strs_table:\r\n                strs_table[sorted_string] = []\r\n\r\n            strs_table[sorted_string].append(string)\r\n\r\n        return list(strs_table.values())",
    "java": "// Runtime: 16 ms (Top 40.82%) | Memory: 46.2 MB (Top 88.53%)\r\nclass Solution {\r\n    public List<List<String>> groupAnagrams(String[] strs) {\r\n        HashMap<String,ArrayList<String>> hm=new HashMap<>();\r\n        for(String s : strs)\r\n        {\r\n            char ch[]=s.toCharArray();\r\n            Arrays.sort(ch);\r\n            StringBuilder sb=new StringBuilder(\"\");\r\n            for(char c: ch)\r\n            {\r\n                sb.append(c);\r\n            }\r\n            String str=sb.toString();\r\n            if(hm.containsKey(str))\r\n            {\r\n              ArrayList<String> temp=hm.get(str);\r\n              temp.add(s);\r\n              hm.put(str,temp);\r\n            }\r\n            else\r\n            {\r\n                ArrayList<String> temp=new ArrayList<>();\r\n                temp.add(s);\r\n                hm.put(str,temp);\r\n            }\r\n        }\r\n        System.out.println(hm);\r\n        List<List<String>> res=new ArrayList<>();\r\n        for(ArrayList<String> arr : hm.values())\r\n        {\r\n            res.add(arr);\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 220 ms (Top 40.31%) | Memory: 52.3 MB (Top 90.31%)\r\nvar groupAnagrams = function(strs) {\r\n    let totalResults = [];\r\n    let grouped = new Map();\r\n\r\n    for (let i=0; i < strs.length; i++) {\r\n        let results = [];\r\n        let res = strs[i];\r\n\r\n        let sortedStr = strs[i].split('').sort().join('');\r\n        let value = grouped.get(sortedStr);\r\n\r\n        if (value !== undefined) {\r\n            grouped.set(sortedStr, [...value, strs[i]]);\r\n        } else {\r\n            grouped.set(sortedStr, [strs[i]]);\r\n        }\r\n    }\r\n\r\n    for (let [key, value] of grouped) {\r\n        totalResults.push(grouped.get(key));\r\n    }\r\n\r\n    return totalResults;\r\n};"
  }
}
