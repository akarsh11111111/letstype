export default {
  "id": 1447,
  "name": "Simplified Fractions",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/simplified-fractions",
  "relativeDir": "S/Simplified Fractions",
  "slug": "1447-simplified-fractions",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 42,
    "java": 26,
    "python": 9,
    "javascript": 24
  },
  "languages": {
    "cpp": "// Runtime: 19 ms (Top 100.00%) | Memory: 22 MB (Top 65.01%)\r\nclass Solution {\r\npublic:\r\n    bool simplified(int n, int i){\r\n        while(i>0){\r\n            n-=i;\r\n            if(i>n)swap(n,i);\r\n        }\r\n        if(n>1) return false;\r\n        else return true;\r\n    }\r\n\r\n    vector<string> simplifiedFractions(int n) {\r\n        vector<string> ans;\r\n        while(n>1){\r\n            int i=1;\r\n            while(i<n){\r\n                if(simplified(n, i)){\r\n                    string fraction;\r\n                    int num=i;\r\n                    while(num>0){\r\n                        fraction.push_back(num%10+'0');\r\n                        num/=10;\r\n                    }\r\n                    fraction.push_back('/');\r\n                    num = n;\r\n                    while(num>0){\r\n                        fraction.push_back(num%10+'0');\r\n                        num/=10;\r\n                    }\r\n                    if(i>9) swap(fraction[0],fraction[1]);\r\n                    if(n>99) swap(fraction[fraction.size()-1],fraction[fraction.size()-3]);\r\n                    else if(n>9) swap(fraction[fraction.size()-1],fraction[fraction.size()-2]);\r\n                    ans.push_back(fraction);\r\n                }\r\n                i++;\r\n            }\r\n            n--;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def simplifiedFractions(self, n: int) -> List[str]:\r\n        \r\n        collect = {}\r\n        for b in range(2, n+1):\r\n            for a in range(1, b):\r\n                if a/b not in collect:\r\n                    collect[a/b] = f\"{a}/{b}\"  \r\n        return list(collect.values())",
    "java": "// Runtime: 42 ms (Top 52.04%) | Memory: 73.5 MB (Top 36.20%)\r\nclass Solution {\r\n    public List<String> simplifiedFractions(int n) {\r\n        List<String> list = new ArrayList<>() ;\r\n\r\n        for(int numerator = 1; numerator< n ; numerator++) {\r\n            for(int denominator = numerator+1; denominator<=n; denominator++) {\r\n                if(gcd(numerator,denominator) == 1) {\r\n                    list.add(numerator+\"/\"+denominator);\r\n// System.out.println(numerator+\"/\"+denominator);\r\n                }\r\n            }\r\n        }\r\n        return list ;\r\n    }\r\n\r\n    static int gcd(int a, int b)\r\n    {\r\n// euclidean algo\r\n\r\n        if(a==0) {\r\n            return b ;\r\n        }\r\n        return gcd(b%a,a);\r\n    }\r\n}",
    "javascript": "var simplifiedFractions = function(n) {\r\n    const res = [];\r\n    const checkValid = (a, b) => {\r\n        if(a === 1) return 1;\r\n        let num = 2;\r\n        while(num <= a) {\r\n            if(b % num === 0 && a % num === 0) return num;\r\n            num++;\r\n        }\r\n        return 1;\r\n    }\r\n    let i = 1;\r\n    while(i / n < 1) {\r\n        let j = i + 1;\r\n        while(j <= n) {\r\n            if(checkValid(i, j) < 2) {\r\n                res.push(`${i}/${j}`); \r\n            }\r\n            j++;\r\n        }\r\n        i++;\r\n    }\r\n    return res;\r\n};"
  }
}
