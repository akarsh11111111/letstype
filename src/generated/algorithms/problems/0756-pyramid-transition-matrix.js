export default {
  "id": 756,
  "name": "Pyramid Transition Matrix",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/pyramid-transition-matrix",
  "relativeDir": "P/Pyramid Transition Matrix",
  "slug": "0756-pyramid-transition-matrix",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 56,
    "python": 30,
    "javascript": 43
  },
  "languages": {
    "cpp": "class Solution {\r\n    unordered_map<string,vector<char> > m;\r\npublic:\r\n    bool dfs(string bot,int i,string tem){\r\n        if(bot.size()==1) return true;\r\n        if(i==bot.size()-1) {\r\n            string st;\r\n            return dfs(tem,0,st);\r\n        }\r\n        for(auto v:m[bot.substr(i,2)]){\r\n            tem.push_back(v);\r\n            if(dfs(bot,i+1,tem)){\r\n                return true;\r\n            }\r\n            tem.pop_back();\r\n        }\r\n        return false;\r\n    }\r\n    bool pyramidTransition(string bottom, vector<string>& allowed) {\r\n        for(auto a:allowed){\r\n            m[a.substr(0,2)].push_back(a[2]);\r\n        }\r\n        string te;\r\n        return dfs(bottom,0,te);\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def pyramidTransition(self, bottom, allowed):\r\n        \"\"\"\r\n        :type bottom: str\r\n        :type allowed: List[str]\r\n        :rtype: bool    \r\n        \"\"\"\r\n        dic = defaultdict(list)\r\n        for i in allowed:\r\n            dic[(i[0], i[1])].append(i[2])\r\n        \r\n        res = []\r\n        \r\n        def dfs(arr, nxt):\r\n            #base case second floor and check top exists\r\n            if len(arr) == 2 and dic[(arr[0], arr[1])]:\r\n                return True\r\n            \r\n            #go to the next row now\r\n            if len(arr) == len(nxt) + 1:\r\n                return dfs(nxt, [])\r\n\r\n            #keep iterating the same row\r\n            if dic[(arr[len(nxt)], arr[len(nxt) + 1])]:\r\n                for val in dic[(arr[len(nxt)], arr[len(nxt) + 1])]:\r\n                    if dfs(arr, nxt + [val]):\r\n                        return True\r\n            return False\r\n        \r\n        return dfs(bottom, [])",
    "java": "class Solution {\r\n    HashMap<String, List<Character>> map = new HashMap<>();\r\n    HashMap<String, Boolean> dp = new HashMap<>();\r\n    \r\n    public boolean pyramidTransition(String bottom, List<String> allowed) {\r\n        for(String s:allowed){\r\n            String sub = s.substring(0,2);\r\n            \r\n            char c = s.charAt(2);\r\n            \r\n            if(!map.containsKey(sub))\r\n                map.put(sub, new ArrayList<>());\r\n            \r\n            map.get(sub).add(c);\r\n        }\r\n        \r\n        return dfs(bottom, \"\", 0);\r\n    }\r\n    \r\n    boolean dfs(String currBottom, String newBottom, int index){\r\n        \r\n        if(currBottom.length()==1)\r\n            return true;\r\n        if(index+1>=currBottom.length())\r\n            return false;\r\n        \r\n        String sub = currBottom.substring(index,index+2);\r\n        \r\n        String state = currBottom+\" \"+newBottom+\" \"+index;\r\n        \r\n        if(dp.containsKey(state))\r\n            return dp.get(state);\r\n        \r\n        if(map.containsKey(sub)){\r\n            List<Character> letters = map.get(sub);\r\n            \r\n            for(char c:letters){\r\n                if(index==currBottom.length()-2){\r\n                    if(dfs(newBottom+c, \"\", 0))\r\n                    {\r\n                        dp.put(state, true);\r\n                        return true;\r\n                    }\r\n                }\r\n                else if(dfs(currBottom, newBottom+c, index+1))\r\n                {\r\n                    dp.put(state, true);\r\n                    return true;\r\n                }\r\n            }\r\n        }\r\n        \r\n        dp.put(state, false);\r\n        return false;\r\n    }\r\n}",
    "javascript": "var pyramidTransition = function(bottom, allowed) {\r\n    const set = new Set(allowed);\r\n    const memo = new Map();\r\n    const chars = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\"];\r\n    \r\n    return topDown(bottom, bottom.length - 1);\r\n    \r\n    function topDown(prev, row) {\r\n        const key = `${prev}#${row}`;\r\n        \r\n        if (row === 0) return true;\r\n        if (memo.has(key)) return memo.get(key);\r\n\r\n        let pats = new Set();\r\n        pats.add(\"\");\r\n\r\n        for (let i = 0; i < row; i++) {\r\n            const tmp = new Set();\r\n\r\n            const leftBot = prev.charAt(i);\r\n            const rightBot = prev.charAt(i + 1);\r\n\r\n            for (const char of chars) {\r\n                const triadStr = leftBot + rightBot + char;\r\n\r\n                if (set.has(triadStr)) {\r\n                    for (const pat of pats) {\r\n                        tmp.add(pat + char);\r\n                    }                 \r\n                }\r\n            }\r\n          \r\n            pats = tmp;\r\n        }\r\n        \r\n        for (const pat of pats) {\r\n            if (topDown(pat, row - 1)) return true;\r\n        }\r\n        \r\n        memo.set(key, false);\r\n        return false;\r\n    }\r\n};"
  }
}
