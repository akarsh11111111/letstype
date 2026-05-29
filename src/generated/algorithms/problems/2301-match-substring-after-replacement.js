export default {
  "id": 2301,
  "name": "Match Substring After Replacement",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/match-substring-after-replacement",
  "relativeDir": "M/Match Substring After Replacement",
  "slug": "2301-match-substring-after-replacement",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 33,
    "python": 19,
    "javascript": 58
  },
  "languages": {
    "cpp": "// Runtime: 889 ms (Top 66.36%) | Memory: 18.1 MB (Top 68.98%)\r\nclass Solution {\r\npublic:\r\n    bool matchReplacement(string s, string sub, vector<vector<char>>& mappings) {\r\n\r\n        int m(size(s)), n(size(sub));\r\n        unordered_map<char, unordered_set<char>> mp;\r\n\r\n        auto doit = [&](int ind) {\r\n\r\n            for (int i=ind, j=0; i<ind+n; i++, j++) {\r\n                if (s[i] == sub[j] or mp[sub[j]].count(s[i])) continue;\r\n                return false;\r\n            }\r\n            return true;\r\n        };\r\n\r\n        for (auto& mapping : mappings) mp[mapping[0]].insert(mapping[1]);;\r\n        for (int i=0; i<=m-n; i++) if (doit(i)) return true;\r\n        return false;\r\n    }\r\n};",
    "python": "from collections import defaultdict\r\nimport re\r\n\r\nclass Solution:\r\n    def matchReplacement(self, s: str, sub: str, mappings: List[List[str]]) -> bool:\r\n        reachable = defaultdict(set)\r\n        for a, b in mappings:\r\n            reachable[a].add(b)\r\n        for c in sub:\r\n            reachable[c].add(c)\r\n        regex = \"\"\r\n        for c in sub:\r\n            if len(reachable[c]) > 1:\r\n                regex += \"(\"\r\n                regex += \"|\".join(reachable[c])\r\n                regex += \")\"\r\n            else:\r\n                regex += c\r\n        return re.compile(regex).search(s)",
    "java": "class Solution {\r\n    public boolean matchReplacement(String s, String sub, char[][] mappings) {\r\n        HashMap<Character, HashSet<Character>> m = new HashMap<>();\r\n        for(char[] carr: mappings) {\r\n            if (!m.containsKey(carr[0])){\r\n                m.put(carr[0], new HashSet<Character>());\r\n            }\r\n            m.get(carr[0]).add(carr[1]);\r\n        }\r\n        int len_s = s.length();\r\n        int len_sub = sub.length();\r\n        for (int pos = 0; pos < s.length(); pos++ ){\r\n            int i = pos;\r\n            int j = 0;\r\n            boolean cont = false; \r\n            while (j <= sub.length()) {\r\n                if ( j == sub.length()) return true;\r\n                int lenlefts = len_s - i;\r\n                int lenleftsub = len_sub - j;\r\n                if (lenlefts < lenleftsub) {\r\n                    break;\r\n                } else if ((s.charAt(i) == sub.charAt(j)) || \r\n\t\t\t\t              (m.containsKey(sub.charAt(j)) && m.get(sub.charAt(j)).contains( s.charAt(i)))) {\r\n                    i += 1;\r\n                    j += 1;\r\n                } else {\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n}",
    "javascript": "// Runtime: 713 ms (Top 100.0%) | Memory: 51.80 MB (Top 33.33%)\r\n\r\n/**\r\n * @param {string} s\r\n * @param {string} sub\r\n * @param {character[][]} mappings\r\n * @return {boolean}\r\n */\r\nvar matchReplacement = function(s, sub, mappings) {\r\n    let duy={};\r\n    for(let i = 0 ; i<mappings.length ; i++){\r\n    \t\tif(duy[mappings[i][0]] == undefined){\r\n        \t\tduy[mappings[i][0]] = mappings[i][1];\r\n        }else{\r\n        \t\tduy[mappings[i][0]] += mappings[i][1];\r\n        }\r\n    }\r\n    let vt=[];\r\n    for(let i  = 0 ; i < s.length ; i++){\r\n    \tif(s[i] == sub[0]){\r\n      \t\tvt.push(i)\r\n      }\r\n    }\r\n    if(duy[sub[0]]!=undefined){\r\n      for(let i  = 0 ; i < s.length ; i++){\r\n        if(duy[sub[0]].indexOf(s[i])>=0){\r\n            vt.push(i)\r\n        }\r\n      }\r\n    } \r\n    \r\n    let lck=[],cu=\"\";\r\n    for(let i = 0 ; i < vt.length ; i++){\r\n    cu=s.substr(vt[i],sub.length);\r\n    if(cu.length ==sub.length)\r\n    \tlck.push(cu)\r\n    }\r\n    console.log(lck.length)\r\n\r\n    let ck=\"\",check=true;\r\n    for(let i = 0 ; i< lck.length ; i++){\r\n    \tck=lck[i];\r\n      check=true;\r\n    \tfor(let j = 0 ; j< ck.length ; j++){\r\n      \tif(ck[j] == sub[j] || (duy[sub[j]] &&duy[sub[j]].indexOf(ck[j])>=0 \t\t\t\t)){\r\n        \tcontinue;\r\n        }\r\n        else{\r\n        check=false;\r\n        break;\r\n        }\r\n      }\r\n      if(check){\r\n      return true;\r\n      }\r\n    }\r\n    return false;\r\n};"
  }
}
