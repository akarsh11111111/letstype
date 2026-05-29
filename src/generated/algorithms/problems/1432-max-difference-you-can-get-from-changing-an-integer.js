export default {
  "id": 1432,
  "name": "Max Difference You Can Get From Changing an Integer",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer",
  "relativeDir": "M/Max Difference You Can Get From Changing an Integer",
  "slug": "1432-max-difference-you-can-get-from-changing-an-integer",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 88,
    "java": 44,
    "python": 15,
    "javascript": 24
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int power10(int n)\r\n    {\r\n        int total=1;\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            total*=10;\r\n        }\r\n        return total;\r\n    }\r\n \r\n    int maxDiff(int num) {\r\n    vector<int> v;\r\n    vector<int> w;\r\n    int n = num;\r\n    while (n > 0)\r\n    {\r\n        v.push_back(n % 10);\r\n        w.push_back(n % 10);\r\n        n /= 10;\r\n    }\r\n        \r\n    //Finding maximum number\r\n    int d = v.size();\r\n    int j = d - 1;\r\n    for (int i = d - 1; i >= 0; i--)\r\n    {\r\n        if (v[i] != 9)\r\n        {\r\n            j = i;\r\n            break;\r\n        }\r\n    }\r\n    \r\n\r\n    for (int i = 0; i <= j; i++)\r\n    {\r\n        if (v[i] == v[j])\r\n        {\r\n            v[i] = 9;\r\n        }\r\n    }\r\n    long long int res = 0;\r\n    for (int i = d - 1; i >= 0; i--)\r\n    {\r\n        res += (v[i] * power10(i));\r\n    }\r\n\r\n    //Finding minimum number   \r\n    int t = w.size();\r\n    if (w[t - 1] == 1)\r\n    {\r\n        int l = -1;\r\n        for (int i = t - 2; i >= 0; i--)\r\n        {\r\n            if (w[i] != 0 && w[i]!=1)\r\n            {\r\n                l = i;\r\n                break;\r\n            }\r\n        }\r\n        for (int i = 0; i <= l; i++)\r\n        {\r\n            if (w[i] == w[l])\r\n            {\r\n                w[i] = 0;\r\n            }\r\n        }\r\n    }\r\n    else\r\n    {\r\n        for (int i = 0; i < t; i++)\r\n        {\r\n            if (w[i] == w[t - 1])\r\n            {\r\n                w[i] = 1;\r\n            }\r\n        }\r\n    }\r\n    long long int res2 = 0;\r\n    for (int i = t - 1; i >= 0; i--)\r\n    {\r\n        res2 += (power10(i) * w[i]);\r\n    }\r\n    return res-res2;\r\n    }\r\n};",
    "python": "// Runtime: 34 ms (Top 82.14%) | Memory: 16.40 MB (Top 63.78%)\r\n\r\nclass Solution:\r\n    def maxDiff(self, num: int) -> int:\r\n        num = str(num)\r\n        \r\n        i = next((i for i in range(len(num)) if num[i] != \"9\"), -1) #first non-9 digit\r\n        hi = int(num.replace(num[i], \"9\"))\r\n        \r\n        if num[0] != \"1\": lo = int(num.replace(num[0], \"1\"))\r\n        else: \r\n            i = next((i for i in range(len(num)) if num[i] not in \"01\"), -1)\r\n            lo = int(num.replace(num[i], \"0\") if i > 0 else num)\r\n            \r\n        return hi - lo",
    "java": "class Solution {\r\n    public int maxDiff(int num) {\r\n        int[] arr = new int[String.valueOf(num).length()];\r\n        for (int i = arr.length - 1; i >= 0; i--){\r\n            arr[i] = num % 10;\r\n            num /= 10;\r\n        }\r\n        return max(arr.clone()) - min(arr);\r\n    }\r\n\r\n    private int max(int[] arr){ // find max\r\n        for (int i = 0, t = -1; i < arr.length; i++){\r\n            if (t == -1 && arr[i] != 9){\r\n                t = arr[i];\r\n            }\r\n            if (t == arr[i]){\r\n                arr[i] = 9;\r\n            }\r\n        }\r\n        return parse(arr);\r\n    }\r\n\r\n    private int min(int[] arr){ // find min\r\n        int re = arr[0] == 1? 0 : 1;\r\n        int t = arr[0] == 1? -1 : arr[0];\r\n        for (int i = 0; i < arr.length; i++){\r\n            if (t == -1 && arr[i] != 0 && arr[i] != arr[0]){\r\n                t = arr[i];\r\n            }\r\n            if (t == arr[i]){\r\n                arr[i] = re;\r\n            }\r\n        }\r\n        return parse(arr);\r\n    }\r\n\r\n    private int parse(int[] arr){\r\n        int ans = 0;\r\n        for (int i = 0; i < arr.length; i++){\r\n            ans = 10 * ans + arr[i];\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "var maxDiff = function(num) {\r\n    let occur = undefined;\r\n    let max = num.toString().split(\"\");\r\n    let min = num.toString().split(\"\");\r\n    for(i=0;i<max.length;i++){\r\n        if(max[i]<9&&!occur){\r\n            occur = max[i];\r\n            max[i] = 9;\r\n        }\r\n        if(max[i]===occur) max[i] = 9;\r\n    }\r\n    occur = undefined;\r\n    let zerone;\r\n     for(i=0;i<min.length;i++){\r\n        if(!occur&&min[i]>1){\r\n            occur = min[i];\r\n            if(i===0) zerone = 1;\r\n            else zerone = 0;\r\n            min[i] = zerone;      \r\n        }    \r\n        if(min[i]===occur) min[i] = zerone;\r\n    }\r\n    return +max.join(\"\")-+min.join(\"\");\r\n};"
  }
}
