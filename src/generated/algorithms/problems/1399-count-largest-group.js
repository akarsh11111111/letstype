export default {
  "id": 1399,
  "name": "Count Largest Group",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-largest-group",
  "relativeDir": "C/Count Largest Group",
  "slug": "1399-count-largest-group",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 24,
    "python": 41,
    "javascript": 26
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int cal(int n){\r\n        int sum = 0;\r\n        while(n > 0){\r\n            sum += n%10;\r\n            n /= 10;\r\n        }\r\n        return sum;\r\n    }\r\n\r\n    int countLargestGroup(int n) {\r\n        int a[40];\r\n        for(int i=0; i<40; i++) a[i] = 0;\r\n\r\n        for(int i=1; i<=n; i++){\r\n            a[cal(i)]++;\r\n        }\r\n\r\n        int max = 0;\r\n        int count = 0;\r\n        for(int i=0; i<40; i++){\r\n            if(a[i] > max){\r\n                count = 1;\r\n                max = a[i];\r\n            }\r\n            else if(a[i] == max) count++;\r\n        }\r\n\r\n        return count;\r\n    }\r\n};",
    "python": "def compute(num):\r\n\tif num < 10:\r\n\t\treturn num\r\n\r\n\tnewVal = 0\r\n\r\n\twhile num > 0:\r\n\t\tlast = num % 10\r\n\t\tnewVal += last\r\n\t\tnum /= 10\r\n\r\n\treturn newVal\r\n\r\nclass Solution(object):\r\n\tdef countLargestGroup(self, n):\r\n\t\t\"\"\"\r\n\t\t:type n: int\r\n\t\t:rtype: int\r\n\t\t\"\"\"\r\n\t\tmyMap = {}\r\n\r\n\t\tfor i in range(1, n + 1):\r\n\t\t\tval = compute(i)\r\n\r\n\t\t\tif val in myMap.keys():\r\n\t\t\t\tmyMap.get(val).append(i)\r\n\t\t\telse:\r\n\t\t\t\tmyMap[val] = [i]\r\n\r\n\t\tmaxLen = 0\r\n\r\n\t\tfor n in myMap.values():\r\n\t\t\tmaxLen = max(maxLen, len(n))\r\n\r\n\t\tans = 0\r\n\r\n\t\tfor n in myMap.values():\r\n\t\t\tif len(n) == maxLen:\r\n\t\t\t\tans += 1\r\n\r\n\t\treturn ans",
    "java": "class Solution {\r\n    public int countLargestGroup(int n) {\r\n        Map<Integer,Integer> map=new HashMap<>();\r\n        for(int i=1;i<=n;i++){\r\n            int x=sum(i);\r\n            map.put(x,map.getOrDefault(x,0)+1);\r\n        }\r\n        int max=Collections.max(map.values());\r\n        int c=0;\r\n        for(int i:map.values()){\r\n            if(i==max) c++;\r\n        }\r\n        return c;\r\n    }\r\n    public int sum(int g){\r\n        int summ=0;\r\n        while(g!=0){\r\n            int rem=g%10;\r\n            summ+=rem;\r\n            g/=10;\r\n        }\r\n        return summ;\r\n    }\r\n}```",
    "javascript": "// Runtime: 146 ms (Top 27.63%) | Memory: 47.5 MB (Top 55.26%)\r\nvar countLargestGroup = function(n) {\r\n    const hash = {};\r\n\r\n    for (let i = 1; i <= n; i++) {\r\n        const sum = i.toString().split('').reduce((r, x) => r + parseInt(x), 0);\r\n\r\n        if (!hash[sum]) {\r\n            hash[sum] = 0;\r\n        }\r\n\r\n        hash[sum]++;\r\n    }\r\n\r\n    return Object.keys(hash)\r\n        .sort((a, b) => hash[b] - hash[a])\r\n        .reduce((res, x) => {\r\n            const prev = res[res.length - 1];\r\n\r\n            if (!prev || prev === hash[x]) {\r\n                res.push(hash[x]);\r\n            }\r\n\r\n            return res;\r\n        }, []).length;\r\n};"
  }
}
