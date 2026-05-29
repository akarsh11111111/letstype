export default {
  "id": 2105,
  "name": "Watering Plants II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/watering-plants-ii",
  "relativeDir": "W/Watering Plants II",
  "slug": "2105-watering-plants-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 48,
    "python": 15,
    "javascript": 43
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minimumRefill(vector<int>& plants, int capacityA, int capacityB) {\r\n     \r\n        int n(plants.size()), res(0), aliceC(capacityA), bobC(capacityB), alice(0), bob(n-1);\r\n        \r\n        while (alice < bob)\r\n        {\r\n            if (alice == bob)\r\n            {\r\n                if (aliceC < plants[alice] and bobC < plants[bob]) res++;\r\n                break;\r\n            }\r\n            if (aliceC < plants[alice]) aliceC = capacityA, res++;\r\n            if (bobC < plants[bob]) bobC = capacityB, res++;\r\n            aliceC -= plants[alice++];\r\n            bobC -= plants[bob--];\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "// Runtime: 591 ms (Top 95.38%) | Memory: 31.60 MB (Top 92.31%)\r\n\r\nclass Solution:\r\n    def minimumRefill(self, plants: List[int], capacityA: int, capacityB: int) -> int:\r\n        ans = 0 \r\n        lo, hi = 0, len(plants)-1\r\n        canA, canB = capacityA, capacityB\r\n        while lo < hi: \r\n            if canA < plants[lo]: ans += 1; canA = capacityA\r\n            canA -= plants[lo]\r\n            if canB < plants[hi]: ans += 1; canB = capacityB\r\n            canB -= plants[hi]\r\n            lo, hi = lo+1, hi-1\r\n        if lo == hi and max(canA, canB) < plants[lo]: ans += 1\r\n        return ans",
    "java": "// Runtime: 4 ms (Top 96.18%) | Memory: 57.70 MB (Top 65.65%)\r\n\r\nclass Solution {\r\n    public int minimumRefill(int[] p, int ca, int cb) {                \r\n\t\r\n        int refill= 0,oca =  ca, ocb =  cb;// let save our  orginal capacity    , needed to refill can again\r\n        int i=0, j = p.length-1; // starting both end \r\n        \r\n        while(i<=j){\r\n\t\t\r\n             if(i==j){// mean both at same position\r\n                if(ca>=cb){\r\n                   if(p[i]>ca){\r\n                        refill++;\r\n                    }                         \r\n                }\r\n                 else{                                      \r\n                      if(p[j]>cb){\r\n                        refill++;                        \r\n                    }                     \r\n                 }\r\n\t\t\t\t // no more plant left for watering so break loop \r\n                 break; \r\n            }\r\n                       \r\n            // first check if they have sufficient amount of water \r\n            // if not then refill it with orginal capacity                 \r\n\t\t\t\r\n            if(p[i]>ca){\r\n                refill++;\r\n                ca =  oca;\r\n            }            \r\n            if(p[j]>cb){\r\n                refill++;\r\n                cb=  ocb;\r\n            }\r\n            \r\n\t\t\t// decrease consumed water \r\n            ca-=p[i] ;                                  \r\n            cb-=p[j]; \r\n\t\t\t\r\n\t\t\t// move both \r\n\t\t\ti++;           \r\n            j--;\t\t\t                                                \r\n        }\r\n        return refill;                \r\n    }\r\n}",
    "javascript": "// Runtime: 136 ms (Top 56.52%) | Memory: 53.8 MB (Top 73.91%)\r\nvar minimumRefill = function(plants, capacityA, capacityB) {\r\n    const n = plants.length;\r\n\r\n    let left = 0;\r\n    let right = n - 1;\r\n\r\n    let remA = capacityA;\r\n    let remB = capacityB;\r\n\r\n    let refills = 0;\r\n\r\n    while (left < right) {\r\n        const leftAmount = plants[left++];\r\n        const rightAmount = plants[right--];\r\n\r\n        if (leftAmount > remA) {\r\n            ++refills;\r\n            remA = capacityA;\r\n        }\r\n        remA -= leftAmount;\r\n\r\n        if (rightAmount > remB) {\r\n            ++refills;\r\n            remB = capacityB;\r\n        }\r\n        remB -= rightAmount;\r\n\r\n    }\r\n\r\n    if (left === right) {\r\n        const midAmount = plants[left];\r\n\r\n        if (remB > remA) {\r\n            if (remB < midAmount) ++refills;\r\n        }\r\n        else {\r\n            if (remA < midAmount) ++refills;\r\n        }\r\n    }\r\n\r\n    return refills;\r\n};"
  }
}
