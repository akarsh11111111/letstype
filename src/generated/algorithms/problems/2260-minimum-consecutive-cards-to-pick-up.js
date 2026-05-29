export default {
  "id": 2260,
  "name": "Minimum Consecutive Cards to Pick Up",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up",
  "relativeDir": "M/Minimum Consecutive Cards to Pick Up",
  "slug": "2260-minimum-consecutive-cards-to-pick-up",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 17,
    "python": 13,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 678 ms (Top 33.18%) | Memory: 115.3 MB (Top 49.54%)\r\nclass Solution {\r\npublic:\r\n    int minimumCardPickup(vector<int>& cards) {\r\n\r\n        int res (INT_MAX), n(size(cards));\r\n        unordered_map<int, int> m;\r\n        for (auto i=0; i<n; i++) {\r\n            // number of consecutive cards you have to pick up to have a pair of matching cards == (Diference between 2 indexes of same card) + 1\r\n            if (m.count(cards[i])) res = min(res, i-m[cards[i]]+1);\r\n            m[cards[i]] = i;\r\n        }\r\n        return (res == INT_MAX) ? -1 : res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minimumCardPickup(self, cards: List[int]) -> int:\r\n        d={}\r\n        x=[]\r\n        for i in range(len(cards)):\r\n            if cards[i] not in d:\r\n                d[cards[i]]=i\r\n            else:\r\n                x.append(i-d[cards[i]])\r\n                d[cards[i]]=i\r\n        if len(x)<=0:\r\n            return -1\r\n        return min(x)+1",
    "java": "// Runtime: 51 ms (Top 92.02%) | Memory: 61 MB (Top 90.10%)\r\n\r\nclass Solution\r\n{\r\n    public int minimumCardPickup(int[] cards)\r\n    {\r\n        Map<Integer,Integer> map = new HashMap<>();\r\n        int min = Integer.MAX_VALUE;\r\n        for(int i = 0; i < cards.length; i++)\r\n        {\r\n            if(map.containsKey(cards[i]))\r\n                min = Math.min(i-map.get(cards[i])+1,min); // Check if the difference in indices is smaller than minimum\r\n            map.put(cards[i],i); // Update the last found index of the card\r\n        }\r\n        return min == Integer.MAX_VALUE?-1:min; // Repetition found or not\r\n    }\r\n}",
    "javascript": "// Runtime: 415 ms (Top 33.61%) | Memory: 77.3 MB (Top 42.62%)\r\nvar minimumCardPickup = function(cards) {\r\n    let cardsSeen = {};\r\n    let minPicks = Infinity;\r\n    for (let i = 0; i < cards.length; i++) {\r\n        if (!(cards[i] in cardsSeen)) {\r\n            cardsSeen[cards[i]] = i;\r\n        } else {\r\n            const temp = i - cardsSeen[cards[i]] + 1;\r\n            minPicks = Math.min(minPicks, temp);\r\n            cardsSeen[cards[i]] = i;\r\n        }\r\n    }\r\n    return minPicks === Infinity ? -1 : minPicks;\r\n};"
  }
}
