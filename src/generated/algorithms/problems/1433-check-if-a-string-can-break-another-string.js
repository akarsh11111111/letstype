export default {
  "id": 1433,
  "name": "Check If a String Can Break Another String",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-a-string-can-break-another-string",
  "relativeDir": "C/Check If a String Can Break Another String",
  "slug": "1433-check-if-a-string-can-break-another-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "java": 21,
    "python": 4,
    "javascript": 25
  },
  "languages": {
    "cpp": "// Runtime: 58 ms (Top 86.01%) | Memory: 11.8 MB (Top 16.62%)\r\nclass Solution {\r\npublic:\r\n\r\n    bool checkIfCanBreak(string s1, string s2)\r\n    {\r\n       vector<int>freq1(26,0),freq2(26,0);\r\n        for(int i=0;i<s1.size();i++)\r\n        {\r\n            freq1[s1[i]-'a']++;\r\n        }\r\n        for(int i=0;i<s2.size();i++)\r\n        {\r\n            freq2[s2[i]-'a']++;\r\n        }\r\n        int count1 =0,count2=0;\r\n        bool check1 = true,check2=true;\r\n        for(int i=0;i<25;i++)\r\n        {\r\n            count1 += freq1[i]-freq2[i];\r\n            count2 += freq2[i] - freq1[i];\r\n            if(count1<0)\r\n            {\r\n                check1 = false;\r\n            }\r\n            if(count2<0)\r\n            {\r\n                check2 = false;\r\n            }\r\n            if(count1<0 && count2<0)\r\n            {\r\n                break;\r\n            }\r\n        }\r\n        return check1 || check2;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def checkIfCanBreak(self, s1: str, s2: str) -> bool:\r\n        s1, s2 = sorted(s1), sorted(s2)\r\n        return all(a1 >= a2 for a1, a2 in zip(s1, s2)) or all(a1 <= a2 for a1, a2 in zip(s1, s2))",
    "java": "class Solution {\r\n    public boolean checkIfCanBreak(String s1, String s2) {\r\n        int n = s1.length();\r\n        char[] one = s1.toCharArray();\r\n        char[] two = s2.toCharArray();\r\n        Arrays.sort(one);\r\n        Arrays.sort(two);\r\n        if(check(one,two,n) || check(two,one,n)){\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n    public boolean check(char[] one,char[] two,int n){\r\n        for(int i=0;i<n;i++){\r\n            if(one[i]-'a'>two[i]-'a'){\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "const canAbreakB = (s1, s2) => {\r\n    const s1Heap = new MinPriorityQueue();\r\n    const s2Heap = new MinPriorityQueue();\r\n    \r\n    for(let c of s1) {\r\n        s1Heap.enqueue(c.charCodeAt(0));\r\n    }\r\n    \r\n    for(let c of s2) {\r\n        s2Heap.enqueue(c.charCodeAt(0));\r\n    }\r\n    \r\n    while(s2Heap.size()) {\r\n        const s1Least = s1Heap.dequeue().element;\r\n        const s2Least = s2Heap.dequeue().element;\r\n        if(s1Least > s2Least) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n}\r\n\r\nvar checkIfCanBreak = function(s1, s2) {\r\n    return canAbreakB(s1, s2) || canAbreakB(s2, s1);\r\n};"
  }
}
