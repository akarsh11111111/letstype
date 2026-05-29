export default {
  "id": 914,
  "name": "X of a Kind in a Deck of Cards",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards",
  "relativeDir": "X/X of a Kind in a Deck of Cards",
  "slug": "0914-x-of-a-kind-in-a-deck-of-cards",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 18,
    "python": 21,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 16 ms (Top 24.87%) | Memory: 17.80 MB (Top 45.38%)\r\n\r\nclass Solution {\r\npublic:\r\n    bool hasGroupsSizeX(vector<int>& deck) {\r\n        std::unordered_map<int, int> map;\r\n        for (int i=0; i<deck.size(); i++) // store in unordered_map the amount of cards with each number\r\n            map[deck[i]]++;\r\n        \r\n        int x = INT_MAX;\r\n        for (std::pair<int, int> num : map) // find minimum\r\n        {\r\n            if (num.second < x)\r\n                x = num.second;\r\n        }\r\n        if (x < 2) return false;\r\n        \r\n        for(int i=2; i<=x;i++) // loop through all numbers smaller than minimum\r\n        {\r\n            bool good = true;\r\n            for (std::pair<int, int> num : map) // if all groups of cards divide by i - flag stays true\r\n            {\r\n                if (num.second % i != 0)\r\n                {\r\n                    good = false;\r\n                    break;\r\n                }\r\n                    \r\n            }\r\n            if (good) return true;\r\n        }\r\n            \r\n        return false;\r\n    }\r\n};",
    "python": "# Runtime: 130 ms (Top 52.6%) | Memory: 16.56 MB (Top 64.6%)\r\n\r\nclass Solution:\r\n    def hasGroupsSizeX(self, deck: List[int]) -> bool:\r\n        \r\n        \r\n        f=defaultdict(int)\r\n        \r\n        for j in deck:\r\n            f[j]+=1\r\n           \r\n        \r\n        import math\r\n        \r\n        u=list(f.values())\r\n        \r\n        g=u[0]\r\n        \r\n        for j in range(1,len(u)):\r\n            g=math.gcd(g,u[j])\r\n        return g!=1",
    "java": "// X of a Kind in a Deck of Cards\r\n// Leetcode problem : https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/\r\n\r\nclass Solution {\r\n    public boolean hasGroupsSizeX(int[] deck) {\r\n        int[] count = new int[10000];\r\n        for(int i : deck)\r\n            count[i]++;\r\n        int gcd = 0;\r\n        for(int i : count)\r\n            if(i != 0)\r\n                gcd = gcd == 0 ? i : gcd(gcd, i);\r\n        return gcd >= 2;       \r\n    }\r\n    private int gcd(int a, int b) {\r\n        return b == 0 ? a : gcd(b, a % b);\r\n    }\r\n}",
    "javascript": "// Runtime: 124 ms (Top 20.83%) | Memory: 44.3 MB (Top 68.23%)\r\nvar hasGroupsSizeX = function(deck) {\r\n    let unique = [...new Set(deck)], three = 0, two = 0, five = 0, size = 0, same = 0, s = 0;\r\n\r\n    for(let i = 0; i<unique.length; i++){\r\n        for(let y=0; y<deck.length; y++){\r\n            if(unique[i] === deck[y]){\r\n                size++;\r\n            }\r\n        }\r\n        if(size<2) return false;\r\n        if(size%2===0) two++;\r\n        if(size%3===0) three++;\r\n        if(size%5===0) five++;\r\n        if(s === size) same++;\r\n        s = size;\r\n        size = 0;\r\n    }\r\n\r\n    if(Math.max(two,three,five) !== unique.length && same !== unique.length-1) return false;\r\n    return true;\r\n};"
  }
}
