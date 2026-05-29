export default {
  "id": 1405,
  "name": "Longest Happy String",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-happy-string",
  "relativeDir": "L/Longest Happy String",
  "slug": "1405-longest-happy-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 53,
    "java": 47,
    "python": 22,
    "javascript": 26
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 6.60 MB (Top 42.97%)\r\n\r\nclass Solution {\r\npublic:\r\n    string longestDiverseString(int a, int b, int c) {\r\n        //using max heap\r\n        priority_queue<pair<int,char>>pq;\r\n        if(a)\r\n        pq.push({a,'a'});\r\n        if(b)\r\n        pq.push({b,'b'});\r\n        if(c)\r\n        pq.push({c,'c'});\r\n        string ans=\"\";\r\n        while(pq.size()>1){\r\n            pair<int,char>one = pq.top();pq.pop();\r\n            pair<int,char>two = pq.top();pq.pop();\r\n            if(one.first>=2){\r\n                ans+=one.second;\r\n                ans+=one.second;\r\n                one.first-=2;\r\n            }\r\n            else{\r\n                ans+=one.second;\r\n                one.first-=1;\r\n            }\r\n            if(two.first>=2 && two.first>=one.first){\r\n                ans+=two.second;\r\n                ans+=two.second;\r\n                two.first-=2;\r\n            }\r\n            else{\r\n                ans+=two.second;\r\n                two.first-=1;\r\n            }\r\n            if(one.first>0)\r\n                pq.push(one);\r\n            if(two.first>0)\r\n                pq.push(two);\r\n        }\r\n        if(pq.empty())\r\n            return ans;\r\n        if(pq.top().first>=2){\r\n            ans+=pq.top().second;\r\n            ans+=pq.top().second;\r\n        }\r\n        else{\r\n            ans+=pq.top().second;\r\n        }\r\n        return ans;\r\n        \r\n    }\r\n};",
    "python": "class Solution:\r\n\tdef longestDiverseString(self, a: int, b: int, c: int) -> str:\r\n\t\tpq = []\r\n\t\tif a > 0: heapq.heappush(pq,(-a,'a'))        \r\n\t\tif b > 0: heapq.heappush(pq,(-b,'b'))        \r\n\t\tif c > 0: heapq.heappush(pq,(-c,'c'))\r\n\r\n\t\tans = ''\r\n\t\twhile pq:\r\n\t\t\tc, ch = heapq.heappop(pq)\r\n\t\t\tif len(ans)>1 and ans[-1] == ans[-2] == ch:\r\n\t\t\t\tif not pq: break\r\n\t\t\t\tc2, ch2 = heapq.heappop(pq)\r\n\t\t\t\tans += ch2\r\n\t\t\t\tc2 += 1\r\n\t\t\t\tif c2: heapq.heappush(pq,(c2,ch2))\r\n\t\t\telse:\r\n\t\t\t\tans += ch\r\n\t\t\t\tc += 1\r\n\t\t\tif c: heapq.heappush(pq,(c,ch))\r\n\r\n\t\treturn ans",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 39.66 MB (Top 66.7%)\r\n\r\n/*\r\nThe idea behid this problem\r\n1. Here we start by taking the size as the sum of a, b, c.\r\n2. Then we use 3 variables A, B, C to count the occurance of a, b, c.\r\n3. Now we iterate until the size, and \r\n    -> Checks the largest number among a, b, c and whether the count < 2 or whther the count of other letters is 2 and there is still letters that can be added, then we append the letter, decrement from the total count of that particular letter and increase the occurance of that letter and set others back to zero.\r\n    \r\n4. Finally return the string.\r\n*/\r\nclass Solution {\r\n    public String longestDiverseString(int a, int b, int c) {\r\n        int totalSize = a + b + c;\r\n        int A = 0;\r\n        int B = 0;\r\n        int C = 0;\r\n        StringBuilder sb = new StringBuilder();\r\n        for (int i=0; i<totalSize; i++) {\r\n            // checks a is largest and its count still < 2 or B and C =2 and there are still a that can be added \r\n            if ((a>=b && a>=c && A<2) || (B==2 && a>0) || (C==2 && a>0)) {\r\n                sb.append(\"a\");\r\n                a -= 1;\r\n                A += 1;\r\n                B = 0;\r\n                C = 0;\r\n            }\r\n            // check b is largest and its count still < 2 or A and C = 2 and there are still b that cam be added\r\n            else if ((b>=a && b>=c && B<2) || (A==2 && b>0) || (C==2 && b>0)) {\r\n                sb.append(\"b\");\r\n                b -= 1;\r\n                B += 1;\r\n                A = 0;\r\n                C = 0;\r\n            }\r\n            // checks c is largest and its count still < 2 or B and A = 2 and there are still c that can be added\r\n            else if ((c>=a && c>=b && C<2) || (A==2 && c>0) || (B==2 && c>0)) {\r\n                sb.append(\"c\");\r\n                c -= 1;\r\n                C += 1;\r\n                A = 0;\r\n                B = 0;\r\n            }\r\n        }\r\n        return sb.toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 112 ms (Top 17.70%) | Memory: 41.8 MB (Top 94.69%)\r\nvar longestDiverseString = function(a, b, c) {\r\n    let str = '', aCount = 0, bCount = 0, cCount = 0;\r\n    let len = a + b + c;\r\n    for(let i = 0; i < len; i++) {\r\n        if (a >= b && a >= c && aCount != 2 || bCount == 2 && a > 0 || cCount == 2 && a > 0) {\r\n            adjustCounts('a', aCount+1, 0, 0);\r\n            a--;\r\n        } else if (b >= a && b >= c && bCount != 2 || aCount == 2 && b > 0 || cCount == 2 && b > 0) {\r\n            adjustCounts('b', 0, bCount+1, 0);\r\n            b--;\r\n        } else if (c >= a && c >= b && cCount != 2 || bCount == 2 && c > 0|| aCount == 2 && c > 0) {\r\n            adjustCounts('c', 0, 0 , cCount+1);\r\n            c--;\r\n        }\r\n    }\r\n\r\n    function adjustCounts(letter, newA, newB, newC){\r\n        aCount = newA;\r\n        bCount = newB;\r\n        cCount = newC;\r\n        str += letter;\r\n    }\r\n\r\n    return str;\r\n};"
  }
}
