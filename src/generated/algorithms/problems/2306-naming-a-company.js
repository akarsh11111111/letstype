export default {
  "id": 2306,
  "name": "Naming a Company",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/naming-a-company",
  "relativeDir": "N/Naming a Company",
  "slug": "2306-naming-a-company",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 24,
    "python": 22,
    "javascript": 50
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    long long distinctNames(vector<string>& ideas) {\r\n        unordered_map <char,unordered_set<string>> mp;\r\n        for(auto u : ideas) mp[u[0]].insert(u.substr(1,u.size()-1));\r\n        \r\n        long long ans = 0;\r\n        \r\n        for(int i = 0; i<26; i++){\r\n            for(int j = i+1; j<26; j++){\r\n                unordered_set <string> s1 = mp[i+'a'], s2 = mp[j+'a'];\r\n                \r\n                int comm = 0;\r\n                for(auto u : s1)\r\n                    if(s2.find(u)!=s2.end()) comm++;\r\n                \r\n                ans += (long long)(s1.size()-comm)*(long long)(s2.size()-comm)*2;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def distinctNames(self, ideas: List[str]) -> int:\r\n        \r\n        names=defaultdict(set)\r\n        res=0  \r\n        \r\n        #to store first letter as key and followed suffix as val\r\n        for i in ideas:\r\n            names[i[0]].add(i[1:])\r\n            \r\n        #list of distinct first-letters available in ideas (may or may not contain all alphabets,depends upon elements in ideas)\r\n        arr=list(names.keys())\r\n        ans,n=0,len(arr)\r\n        \r\n        for i in range(n):\r\n            for j in range(i+1,n):\r\n                #a,b => 2 distinct first letters\r\n                a,b=arr[i],arr[j]\r\n                # adding the number of distinct posssible suffixes and multiplying by 2 as the new word formed might be \"newword1 newword2\" or \"newword2 newword1\"\r\n                res+=len(names[a]-names[b])*len(names[b]-names[a])*2\r\n                \r\n        return res",
    "java": "// Runtime: 186 ms (Top 96.05%) | Memory: 52.9 MB (Top 100.00%)\r\nclass Solution {\r\n    public long distinctNames(String[] ideas) {\r\n        // HashSet + String Manipulation; TC: O(26*26*n); SC: O(26*n)\r\n        HashSet<String> [] arr = new HashSet[26];\r\n        for(int i=0; i<26; i++) {\r\n            arr[i] = new HashSet<>();\r\n        }\r\n        for(String s: ideas) {\r\n            arr[s.charAt(0)-'a'].add(s.substring(1));\r\n        }\r\n        long ans=0, cnt;\r\n        for(int i=0; i<26; i++) {\r\n            for(int j=i+1; j<26; j++) {\r\n                cnt=0;\r\n                for(String str: arr[j]) {\r\n                    if(arr[i].contains(str)) cnt++;\r\n                }\r\n                ans+=2*(arr[i].size()-cnt)*(arr[j].size()-cnt);\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {string[]} ideas\r\n * @return {number}\r\n */\r\nvar distinctNames = function(ideas) {\r\n    let res = 0;\r\n    let lMap = new Map();\r\n\r\n    for(let i=0; i<ideas.length; i++){\r\n        let idea = ideas[i];\r\n        // extract first letter\r\n        let l = idea[0].charCodeAt() - 97;\r\n        // extract substring\r\n        let s = idea.substr(1);\r\n        // group substring by first letter\r\n        if(lMap.has(l)){\r\n\t\t    // must use map not array\r\n            let m = lMap.get(l);\r\n            m.set(s, 1);\r\n            lMap.set(l, m);\r\n        }else{\r\n            let m = new Map();\r\n            m.set(s, 1);\r\n            lMap.set(l, m);\r\n        }\r\n    }\r\n\r\n    for(let i=1; i<26; i++){\r\n        for(let j=0; j<i; j++){\r\n            // count substring with different first letter\r\n            let m = 0;\r\n            let m1 = lMap.has(i) ? lMap.get(i) : new Map();\r\n            let m2 = lMap.has(j) ? lMap.get(j) : new Map();\r\n\t\t\t// both map must exist\r\n            if(m1.size > 0 && m2.size > 0){\r\n                let k1 = Array.from(m1.keys());\r\n                for(let k=0; k<k1.length; k++){\r\n                    if(m2.has(k1[k])){\r\n                        m ++;\r\n                    }\r\n                }\r\n                // the rest substring satisfy condition\r\n                res += (m1.size - m) * (m2.size-m);\r\n            }\r\n        }\r\n    }\r\n    // double for count A + B and B + A\r\n    res = res * 2;\r\n    return res;    \r\n};"
  }
}
