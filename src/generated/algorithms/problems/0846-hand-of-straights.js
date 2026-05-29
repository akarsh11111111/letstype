export default {
  "id": 846,
  "name": "Hand of Straights",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/hand-of-straights",
  "relativeDir": "H/Hand of Straights",
  "slug": "0846-hand-of-straights",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 34,
    "python": 34,
    "javascript": 28
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool isNStraightHand(vector<int>& hand, int groupSize) {\r\n        int n = hand.size();\r\n        if(n%groupSize != 0)   // We can't rearrange elements of size groupsize so return false\r\n            return false;\r\n        map<int,int>mp;\r\n        for(auto it : hand)\r\n            mp[it]++;\r\n        while(mp.size() > 0){\r\n            int start = mp.begin()->first;   // Taking the topmost element of map\r\n\r\n            for(int i=0; i<groupSize; i++){\r\n                if(mp.find(start) != mp.end()){\r\n                    mp[start]--;\r\n                    if(mp[start] == 0)\r\n                        mp.erase(start);\r\n                    start++;                // Increasing for finding next consecutive element of start. \r\n                }\r\n                else\r\n                    return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n};",
    "python": "# Runtime: 304 ms (Top 61.38%) | Memory: 15.7 MB (Top 75.38%)\r\n\r\n#####################################################################################################################\r\n# Problem: Hand of Straights\r\n# Solution : Hash Table, Min Heap\r\n# Time Complexity : O(n logn)\r\n# Space Complexity : O(n)\r\n#####################################################################################################################\r\n\r\nclass Solution:\r\n    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:\r\n        if len(hand) % groupSize:\r\n            return False\r\n\r\n        freq = collections.defaultdict(int)\r\n\r\n        for num in hand:\r\n            freq[num] += 1\r\n\r\n        min_heap = list(freq.keys())\r\n        heapq.heapify(min_heap)\r\n\r\n        while min_heap:\r\n            smallest = min_heap[0]\r\n            for num in range(smallest, smallest + groupSize):\r\n                if num not in freq:\r\n                    return False\r\n                freq[num] -= 1\r\n\r\n                if freq[num] == 0:\r\n                    if num != min_heap[0]:\r\n                        return False\r\n                    heapq.heappop(min_heap)\r\n        return True",
    "java": "// Runtime: 96 ms (Top 31.30%) | Memory: 61.2 MB (Top 7.04%)\r\nclass Solution {\r\n    public boolean isNStraightHand(int[] hand, int groupSize) {\r\n        if(hand.length % groupSize != 0)\r\n            return false;\r\n\r\n        Map<Integer, Integer> map = new HashMap<>();\r\n        PriorityQueue<Integer> minHeap = new PriorityQueue<>();\r\n\r\n        for(int card : hand){\r\n            if(map.containsKey(card))\r\n                map.put(card, map.get(card) + 1);\r\n            else {\r\n                map.put(card, 1);\r\n                minHeap.add(card);\r\n            }\r\n        }\r\n\r\n        while(!minHeap.isEmpty()){\r\n            int min = minHeap.peek();\r\n            for(int i=min; i < min + groupSize; i++){\r\n                if(!map.containsKey(i) || map.get(i) == 0)\r\n                    return false;\r\n                map.put(i, map.get(i) - 1);\r\n                if(map.get(i) == 0){\r\n                    if(minHeap.peek() != i)\r\n                        return false;\r\n                    minHeap.poll();\r\n                }\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "var isNStraightHand = function(hand, groupSize) {\r\n    if(hand.length%groupSize!==0) return false;\r\n\t\r\n    const map = new Map();\r\n    hand.forEach(h=>{\r\n        map.set(h,map.get(h)+1||1);\r\n    });\r\n    \r\n\t// sort based on the key in asc order\r\n    const sortedMap = new Map([...map.entries()].sort((a,b)=>a[0]-b[0]));\r\n    \r\n    while(sortedMap.size){\r\n\t// getting the first key\r\n        const firstKey = sortedMap.keys().next().value; \r\n        for(let i=firstKey;i<firstKey+groupSize;++i){\r\n            if(!sortedMap.has(i)){\r\n                return false\r\n            }\r\n            const freq = sortedMap.get(i);\r\n            if(freq===1){\r\n                sortedMap.delete(i)\r\n            }else{\r\n                sortedMap.set(i,sortedMap.get(i)-1);\r\n            }\r\n        }\r\n    }\r\n    return true;\r\n};"
  }
}
