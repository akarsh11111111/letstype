export default {
  "id": 1291,
  "name": "Sequential Digits",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sequential-digits",
  "relativeDir": "S/Sequential Digits",
  "slug": "1291-sequential-digits",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 35,
    "python": 16,
    "javascript": 22
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> sequentialDigits(int low, int high) {\r\n        string lf = to_string(low);\r\n        string rt = to_string(high);\r\n        \r\n        vector<int> ans;\r\n        for(int i = lf.size(); i <= rt.size(); i++){ // 字符串长度\r\n            for(int st = 1; st <= 9; st++){\r\n                string base(i, '0'); // \"000000\" i个0\r\n                for(int j = 0; j < i; j++){\r\n                    base[j] += st + j;\r\n                }\r\n                \r\n                if(base.back() <= '9'){\r\n                    int num = stoi(base);\r\n                     if(low <= num && num <= high){\r\n                         ans.push_back(num);\r\n                     }\r\n                }\r\n            }\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n    \r\n};",
    "python": "# Runtime: 41 ms (Top 43.2%) | Memory: 16.29 MB (Top 65.6%)\r\n\r\nclass Solution:\r\n    def sequentialDigits(self, low: int, high: int) -> List[int]:\r\n        l = len(str(low))\r\n        h = len(str(high))\r\n        ans = []\r\n        for i in range(l,h+1):\r\n            for j in range(1,11-i):\r\n                t = str(j)\r\n                for k in range(i-1):\r\n                    t+=str(int(t[-1])+1)\r\n                if int(t)<=high and int(t)>=low:\r\n                    ans.append(int(t))\r\n        ans.sort()\r\n        return ans",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 41.6 MB (Top 53.25%)\r\nclass Solution {\r\n    public List<Integer> sequentialDigits(int low, int high) {\r\n        int lowSize = String.valueOf(low).length(), highSize = String.valueOf(high).length();\r\n        List<Integer> output = new ArrayList<>();\r\n\r\n        for(int size=lowSize; size<=highSize; size++) {\r\n            int seedNumber = getSeedNumber(size);\r\n            int increment = getIncrement(size);\r\n            int limit = (int)Math.pow(10,size);\r\n            // System.out.println(seedNumber+\":\"+increment+\":\"+limit);\r\n            while(true){\r\n                if(seedNumber>=low && seedNumber<=high)\r\n                    output.add(seedNumber);\r\n                if(seedNumber%10==9 || seedNumber>high) break;\r\n                seedNumber+=increment;\r\n            }\r\n        }\r\n        return output;\r\n    }\r\n\r\n    private int getSeedNumber(int size) {\r\n        int seed = 1;\r\n        for(int i=2;i<=size;i++)\r\n            seed=10*seed + i;\r\n        return seed;\r\n    }\r\n\r\n    private int getIncrement(int size) {\r\n        int increment = 1;\r\n        for(int i=2;i<=size;i++)\r\n            increment=10*increment + 1;\r\n        return increment;\r\n    }\r\n}",
    "javascript": "// Runtime: 50 ms (Top 82.3%) | Memory: 42.65 MB (Top 5.8%)\r\n\r\nvar sequentialDigits = function(low, high) {\r\n    const digits = '123456789';\r\n    const ans = [];\r\n    \r\n    const minLen = low.toString().length;\r\n    const maxLen = high.toString().length;\r\n    \r\n    for (let windowSize = minLen; windowSize <= maxLen; ++windowSize) {\r\n        for (let i = 0; i + windowSize <= digits.length; ++i) {\r\n            const num = parseInt(digits.substring(i, i + windowSize));\r\n            \r\n            if (num >= low && num <= high) {\r\n                ans.push(num);\r\n            }\r\n        }\r\n    }\r\n    \r\n    \r\n    return ans;\r\n};"
  }
}
