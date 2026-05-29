export default {
  "id": 165,
  "name": "Compare Version Numbers",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/compare-version-numbers",
  "relativeDir": "C/Compare Version Numbers",
  "slug": "0165-compare-version-numbers",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 38,
    "java": 48,
    "python": 10,
    "javascript": 18
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int compareVersion(string v1, string v2) {\r\n        int ans = 0;\r\n        int n1 = v1.size(), n2 = v2.size();\r\n        \r\n        for(int i=0,j=0; i<n1 || j<n2; ++i, ++j) {\r\n            \r\n            string s1 = \"\", s2 = \"\";\r\n\r\n            while(i<n1 && v1[i] != '.') {\r\n                if(s1.size() == 0 && v1[i] == '0') {\r\n                    ++i; continue;\r\n                }\r\n                \r\n                s1 += v1[i++];\r\n            }\r\n            \r\n            while(j<n2 && v2[j] != '.') {\r\n                if(s2.size() == 0 && v2[j] == '0') {\r\n                    ++j; continue;\r\n                }\r\n                \r\n                s2 += v2[j++];\r\n            }\r\n            \r\n            if(s1.size() < s2.size()) return -1;\r\n            else if(s2.size() < s1.size()) return 1;\r\n            \r\n            ans = s1.compare(s2);\r\n            if(ans < 0) return -1;\r\n            else if(ans > 0) return 1;\r\n        }\r\n        \r\n        return 0;\r\n        \r\n    }\r\n};",
    "python": "class Solution:\r\n    def compareVersion(self, v1: str, v2: str) -> int:\r\n        v1, v2 = list(map(int, v1.split('.'))), list(map(int, v2.split('.')))  \r\n        for rev1, rev2 in zip_longest(v1, v2, fillvalue=0):\r\n            if rev1 == rev2:\r\n                continue\r\n\r\n            return -1 if rev1 < rev2 else 1 \r\n\r\n        return 0",
    "java": "class Solution {\r\n    public int compareVersion(String version1, String version2) {\r\n\t//Here we are going to Split the numbers by  . but since we cannot do that in java we will replace . with # and then do it \r\n        version1=version1.replace('.', '#');\r\n        version2=version2.replace('.', '#');\r\n        \r\n        String v1[]=version1.split(\"#\");\r\n        String v2[]=version2.split(\"#\");\r\n        \r\n        int i=0;\r\n        \r\n\t\t\r\n        while(i<v1.length || i<v2.length){\r\n            //we will have inital value  0 as our array can out out index so taking that in considerration \r\n            Integer i1= 0;\r\n            Integer i2= 0;\r\n\t\t\t//Here we are using removeing Zero function which will remove all the zeros before the string \r\n            if(i<v1.length){\r\n                i1= Integer.valueOf(removezero(v1[i]));\r\n            }\r\n            if(i<v2.length){\r\n                i2= Integer.valueOf(removezero(v2[i]));\r\n            }\r\n            //and the rest is just the comparison\r\n            if(i1<i2){\r\n                return -1;\r\n            }\r\n            else if(i1>i2){\r\n                return 1;\r\n            }\r\n            i++;\r\n        }\r\n\t\t//if all the statments are false then at last we can say that they are equal\r\n        return 0;\r\n    }\r\n    String removezero(String s){\r\n        String result =\"\";\r\n        int i =0;\r\n        while(i<s.length()){\r\n            if(s.charAt(i)!='0'){\r\n                result=s.substring(i, s.length());\r\n                break;\r\n            }\r\n            i++;\r\n        }\r\n        return result!=\"\"?result:\"0\";\r\n    }\r\n}",
    "javascript": "var compareVersion = function(version1, version2) {\r\n    const v1 = version1.split('.')\r\n    const v2 = version2.split('.')\r\n\t\r\n\tlet max=Math.max(v1.length,v2.length);\r\n    \r\n    for(let i=0;i<max;i++){\r\n        if(v1[i]&&v2[i]){ // if both v1 and v2 are present\r\n            if(+v1[i] > +v2[i])return 1\r\n            else if(+v1[i] < +v2[i])return -1\r\n        }else if(v1[i] && +v1[i]!==0){ // if v1 is larger than v2 but make sure those digits are not 0.\r\n            return 1\r\n        }else if(v2[i] && +v2[i]!==0){ // if v2 is larger than v1 but make sure those digits are not 0.\r\n            return -1\r\n        }\r\n    }\r\n    return 0\r\n};"
  }
}
