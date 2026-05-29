export default {
  "id": 869,
  "name": "Reordered Power of 2",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reordered-power-of-2",
  "relativeDir": "R/Reordered Power of 2",
  "slug": "0869-reordered-power-of-2",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 24,
    "python": 11,
    "javascript": 16
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool reorderedPowerOf2(int n) \r\n{\r\n   string str = to_string(n);\r\n   sort(str.begin(),str.end());\r\n   long long int num;\r\n   int counter=0;\r\n   \r\n   while(true)\r\n   {\r\n      num = pow(2,counter++);\r\n      \r\n      string temp = to_string(num);\r\n      \r\n       \r\n      if(temp.length()>str.length())\r\n      {\r\n          //cout<<\"temp=\"<<temp<<endl;\r\n          break;\r\n      }\r\n       \r\n      sort(temp.begin(),temp.end());\r\n         \r\n      if(str == temp)\r\n      return true;\r\n     \r\n   }     \r\n   return false;   \r\n}\r\n};",
    "python": "class Solution:\r\n    def reorderedPowerOf2(self, n: int) -> bool:\r\n        counter = Counter(str(n))\r\n        power = 0\r\n        counter_for_2 = Counter(str(2**power))\r\n        while counter_for_2.total() <= counter.total():\r\n            if counter_for_2 == counter:\r\n                return True\r\n            power += 1\r\n            counter_for_2 = Counter(list(str(2**power)))\r\n        return False",
    "java": "\r\n\r\nclass Solution {\r\n    public boolean reorderedPowerOf2(int n) {\r\n        int[] countN = count(n);\r\n        int num =1;\r\n        for(int i =0; i <31  ; i++){\r\n            if(Arrays.equals(countN, count(num))){\r\n                return true;\r\n            }\r\n            num =num<<1;\r\n        }\r\n        return false;\r\n    }\r\n    int[] count(int n){\r\n        int[] arr = new int[10];\r\n        while(n>0){\r\n            arr[n%10]++;\r\n            n /=10;\r\n            \r\n        }\r\n        return arr;\r\n    }\r\n}",
    "javascript": "// Runtime: 48 ms (Top 84.09%) | Memory: 43.20 MB (Top 63.64%)\r\n\r\nvar reorderedPowerOf2 = function(n) {\r\n    let str = n.toString();\r\n   let initialString =  str.split('').sort().join('');\r\n    \r\n    \r\n    for(let i=0; i<30; i++){\r\n        let tempString = (1<<i).toString();\r\n       let finalString = tempString.split('').sort().join('');\r\n        if(initialString===finalString){\r\n            return true\r\n        }\r\n    }\r\n    return false\r\n}"
  }
}
