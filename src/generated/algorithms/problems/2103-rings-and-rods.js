export default {
  "id": 2103,
  "name": "Rings and Rods",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/rings-and-rods",
  "relativeDir": "R/Rings and Rods",
  "slug": "2103-rings-and-rods",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 25,
    "python": 9,
    "javascript": 11
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 6.4 MB (Top 58.32%)\r\nclass Solution {\r\npublic:\r\n    int countPoints(string rings) {\r\n\r\n        int n=rings.length();\r\n        //It is given that number of rod is 10 0 to 9 so we have to place ring any of these\r\n        vector<int>vp(10,0);//store the no of rings\r\n        for(int i=0;i<n;i+=2)\r\n        {\r\n            char col=rings[i];\r\n            vp[rings[i+1]-'0']|=(col=='R'? 1: col =='G' ? 2 : 4);//checking for rings\r\n\r\n        }\r\n        int count=0;\r\n        for(int i=0;i<10;i++)\r\n        {\r\n            if(vp[i]==7)\r\n            {\r\n                count++;\r\n            }\r\n        }\r\n        return count;\r\n\r\n    }\r\n};",
    "python": "# Runtime: 56 ms (Top 27.28%) | Memory: 13.8 MB (Top 63.52%)\r\nclass Solution:\r\n    def countPoints(self, r: str) -> int:\r\n        ans = 0\r\n        for i in range(10):\r\n            i = str(i)\r\n            if 'R'+i in r and 'G'+i in r and 'B'+i in r:\r\n                ans += 1\r\n        return ans",
    "java": "// Runtime: 1 ms (Top 64.71%) | Memory: 40.70 MB (Top 25.29%)\r\n\r\nclass Solution {\r\n    public int countPoints(String rings) {\r\n        Map<Integer,Set<Character>> m=new HashMap<>();\r\n        for(int i=0;i<rings.length();i=i+2){\r\n            char c=rings.charAt(i);\r\n            int index=(int)rings.charAt(i+1);\r\n            if(m.containsKey(index)){\r\n                Set<Character> x=m.get(index);\r\n                x.add(c);\r\n                m.put(index,x);\r\n            }else{\r\n                Set<Character> x=new HashSet<>();\r\n                x.add(c);\r\n                m.put(index,x);\r\n            }\r\n        }\r\n        int count=0;\r\n        for(Set<Character> k : m.values()){\r\n            if(k.size()==3) count++;\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {string} rings\r\n * @return {number}\r\n */\r\nvar countPoints = function(rings) {\r\n    let rods = Array(10).fill(\"\");\r\n    for(let i = 0; i < rings.length; i += 2){\r\n        if(!(rods[rings[i+1]].includes(rings[i]))) rods[rings[i+1]] += rings[i]\r\n    }\r\n    return rods.filter(rod => rod.length > 2).length\r\n};"
  }
}
