export default {
  "id": 833,
  "name": "Find And Replace in String",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-and-replace-in-string",
  "relativeDir": "F/Find And Replace in String",
  "slug": "0833-find-and-replace-in-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 31,
    "python": 18,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string findReplaceString(string s, vector<int>& indices, vector<string>& sources, vector<string>& targets) {     \r\n        int baggage = 0;\r\n        int n = indices.size();\r\n        map<int, pair<string,string>> mp;\r\n        for(int i=0;i<n;++i)\r\n        {\r\n            mp[indices[i]]={sources[i], targets[i]};\r\n        }\r\n        for(auto it:mp)\r\n        {\r\n            string temp = s.substr(it.first+baggage, it.second.first.size());\r\n            if(temp ==  it.second.first)\r\n            {\r\n                s.erase(it.first+baggage,it.second.first.size());\r\n                s.insert(it.first+baggage, it.second.second);\r\n                baggage += it.second.second.size() - it.second.first.size();\r\n            }\r\n        }\r\n        return s;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findReplaceString(self, s: str, indices: List[int], sources: List[str], targets: List[str]) -> str:\r\n        \r\n        inputs = list(zip(indices,sources,targets))\r\n        inputs.sort(key = lambda x: x[0])\r\n        \r\n        offset = 0\r\n        for idx, src, tgt in inputs:\r\n            idx += offset\r\n            if s[idx:idx + len(src)] != src:\r\n                print('hi')\r\n                print(idx)\r\n                continue\r\n                \r\n            offset += len(tgt) - len(src)\r\n            s = s[:idx] + tgt + s[idx+len(src):]\r\n            \r\n        return s",
    "java": "class Solution {\r\n    public String findReplaceString(String s, int[] indices, String[] sources, String[] targets) {\r\n        \r\n        HashMap<Integer, String> subst = new HashMap<>();\r\n        HashMap<Integer, String> tgt = new HashMap<>();\r\n        \r\n        for(int i = 0; i< indices.length; i++) {\r\n            subst.put(indices[i], sources[i]);\r\n            tgt.put(indices[i],targets[i]);\r\n        }\r\n        \r\n        Arrays.sort(indices);\r\n        \r\n        String res = \"\";\r\n        int count = 0;\r\n        int avail[] = new int[indices.length];\r\n        for(int i = 0; i< s.length(); i++) {\r\n            if(count < indices.length && i == indices[count] && s.indexOf(subst.get(indices[count]), indices[count]) == indices[count]){\r\n                res = res+\"\"+tgt.get(indices[count]);\r\n                i = i+ subst.get(indices[count]).length()-1;\r\n                count++;\r\n            } else {\r\n                if(count < indices.length && i == indices[count])\r\n                    count++;\r\n                res+= s.charAt(i);\r\n            }\r\n        }\r\n        \r\n        return res;\r\n    }\r\n}",
    "javascript": "var findReplaceString = function(s, indices, sources, targets) {\r\n    let res = s.split(''); \r\n\r\n    for(let i=0; i<indices.length; i++) { \r\n        let index = indices[i]; \r\n        let str = sources[i]; \r\n        \r\n        if(s.slice(index, index + str.length) == str) {\r\n            res[index] = targets[i]; \r\n            for(let j = 1; j < str.length; j++) { \r\n                res[index+=1] = \"\"; \r\n            }\r\n        }\r\n    }\r\n\r\n    return res.join('');\r\n};"
  }
}
