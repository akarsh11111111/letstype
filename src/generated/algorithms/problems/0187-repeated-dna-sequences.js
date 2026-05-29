export default {
  "id": 187,
  "name": "Repeated DNA Sequences",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/repeated-dna-sequences",
  "relativeDir": "R/Repeated DNA Sequences",
  "slug": "0187-repeated-dna-sequences",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 33,
    "python": 23,
    "javascript": 11
  },
  "languages": {
    "cpp": "class Solution {\r\n\tpublic:\r\n\t\tvector<string> findRepeatedDnaSequences(string s) {\r\n\t\t\tunordered_map<string,int> freq;\r\n\t\t\tint start = 0 , end = 9;\r\n\t\t\twhile(end < s.size()){\r\n\t\t\t\tbool flag = true;\r\n\t\t\t\tfor(int i = start ; i <= end ; i++){\r\n\t\t\t\t\tif(s[i] == 'A' or s[i] == 'C' or s[i] == 'G' or s[i] == 'T') continue;\r\n\t\t\t\t\telse {flag = false ; break ;}\r\n\t\t\t\t}\r\n\t\t\t\tif(flag){\r\n\t\t\t\t\tstring temp = s.substr(start , 10);\r\n\t\t\t\t\tfreq[temp]++;\r\n\t\t\t\t}\r\n\t\t\t\tstart++;\r\n\t\t\t\tend++;\r\n\t\t\t}\r\n\t\t\tvector<string> ans;\r\n\t\t\tfor(auto it : freq){\r\n\t\t\t\tif(it.second >= 2) ans.push_back(it.first);\r\n\t\t\t}\r\n\t\t\treturn ans;\r\n\t\t}\r\n};",
    "python": "# Runtime: 147 ms (Top 16.98%) | Memory: 27.7 MB (Top 15.14%)\r\nclass Solution(object):\r\n    def findRepeatedDnaSequences(self, s):\r\n        \"\"\"\r\n        :type s: str\r\n        :rtype: List[str]\r\n        \"\"\"\r\n        seqs = {}\r\n        i = 0\r\n        while i+10 <= len(s):\r\n            curr = s[i:i+10]\r\n            if curr in seqs:\r\n                seqs[curr] = seqs[curr] + 1\r\n            else:\r\n                seqs[curr] = 1\r\n            i += 1\r\n\r\n        repeats = []\r\n        for seq in list(seqs.keys()):\r\n            if seqs[seq] > 1:\r\n                repeats.append(seq)\r\n\r\n        return repeats",
    "java": "// Runtime: 95 ms (Top 6.21%) | Memory: 61.2 MB (Top 61.48%)\r\nclass Solution {\r\n    public List<String> findRepeatedDnaSequences(String s) {\r\n        HashMap<String,Integer> map =new HashMap();\r\n        int i=0;\r\n        int j=0;\r\n        int k=10;\r\n        StringBuilder sb=new StringBuilder(\"\");\r\n\r\n        while(j<s.length()){\r\n            sb.append(s.charAt(j));\r\n            if(j-i+1<k){\r\n                j++;\r\n            }else if(j-i+1==k){\r\n                if(!map.containsKey(sb.toString())){\r\n                    map.put(sb.toString(),1);\r\n                }else{\r\n                    map.put(sb.toString(),map.get(sb.toString())+1);\r\n                }\r\n                sb.deleteCharAt(0);\r\n                i++;\r\n                j++;\r\n            }\r\n        }\r\n        List<String> list=new ArrayList();\r\n        for(Map.Entry<String,Integer> mapElement:map.entrySet()){\r\n            if(mapElement.getValue()>1){\r\n                list.add(mapElement.getKey());\r\n            }\r\n        }\r\n        return list;\r\n    }\r\n}",
    "javascript": "// 187. Repeated DNA Sequences\r\nvar findRepeatedDnaSequences = function(s) {\r\n    let map = {};\r\n\tlet res = [];\r\n\tfor (let i = 0; i <= s.length-10; i++) {\r\n\t\tlet s10 = s.substring(i, i+10);\r\n\t\tmap[s10] = (map[s10] || 0) + 1;\r\n\t\tif (map[s10] === 2) res.push(s10);\r\n\t}\r\n\treturn res;\r\n};"
  }
}
