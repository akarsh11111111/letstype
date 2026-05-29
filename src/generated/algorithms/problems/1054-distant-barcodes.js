export default {
  "id": 1054,
  "name": "Distant Barcodes",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/distant-barcodes",
  "relativeDir": "D/Distant Barcodes",
  "slug": "1054-distant-barcodes",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 55,
    "java": 47,
    "python": 28,
    "javascript": 15
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    struct comp{\r\n        bool operator()(pair<int,int>&a, pair<int,int>&b){\r\n            return a.first < b.first;\r\n        }\r\n    };\r\n    \r\n    vector<int> rearrangeBarcodes(vector<int>& barcodes) {\r\n        unordered_map<int,int> hmap;\r\n        int n = barcodes.size();\r\n        if(n==1)return barcodes;\r\n        \r\n        for(auto &bar : barcodes){\r\n            hmap[bar]++;\r\n        }\r\n        \r\n        vector<int> ans;\r\n        priority_queue<pair<int,int>, vector<pair<int,int>>, comp> pq;\r\n        \r\n        for(auto &it : hmap){\r\n            pq.push({it.second, it.first});\r\n        }\r\n        \r\n        while(pq.size()>1){\r\n            \r\n            auto firstBar = pq.top();\r\n            pq.pop();\r\n            \r\n            auto secondBar = pq.top();\r\n            pq.pop();\r\n            \r\n            ans.push_back(firstBar.second);\r\n            ans.push_back(secondBar.second);\r\n            \r\n            --firstBar.first;\r\n            --secondBar.first;\r\n            \r\n            if(firstBar.first > 0){\r\n                pq.push(firstBar);\r\n            }\r\n            \r\n            if(secondBar.first > 0){\r\n                pq.push(secondBar);\r\n            }\r\n        }\r\n        \r\n        if(pq.size()){\r\n            ans.push_back(pq.top().second);\r\n            pq.pop();\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 1287 ms (Top 5.56%) | Memory: 16.2 MB (Top 67.41%)\r\n\r\nimport heapq\r\n\r\nclass Solution:\r\n\r\n    def rearrangeBarcodes(self, barcodes: List[int]) -> List[int]:\r\n        barcodes_counter = Counter(barcodes)\r\n        if len(barcodes_counter) == len(barcodes):\r\n            return barcodes\r\n\r\n        barcodes_heapq = [ (-c, b) for b, c in barcodes_counter.items() ]\r\n        heapq.heapify(barcodes_heapq)\r\n\r\n        idx, prev_count, prev_barcode = 0, 0, 0\r\n        while barcodes_heapq:\r\n            (curr_count, curr_barcode) = heapq.heappop(barcodes_heapq)\r\n\r\n            barcodes[idx] = curr_barcode\r\n            idx += 1\r\n            curr_count += 1\r\n\r\n            if prev_count:\r\n                heapq.heappush(barcodes_heapq, (prev_count, prev_barcode))\r\n\r\n            prev_count, prev_barcode = curr_count, curr_barcode\r\n\r\n        return barcodes",
    "java": "class Solution {\r\n    public int[] rearrangeBarcodes(int[] barcodes) {\r\n        \r\n        if(barcodes.length <= 2){\r\n            return barcodes ; //Problem says solution always exist.\r\n        }\r\n        \r\n        Map<Integer, Integer> count = new HashMap<>();\r\n        Integer maxKey = null; // Character having max frequency\r\n        \r\n        for(int i: barcodes){\r\n            count.put(i, count.getOrDefault(i, 0) + 1);\r\n            if(maxKey == null || count.get(i) > count.get(maxKey)){\r\n                maxKey = i;\r\n            }\r\n        }\r\n        \r\n        int pos = 0;\r\n     \r\n        //Fill maxChar\r\n        int curr =  count.get(maxKey);\r\n        while(curr-- > 0){\r\n            barcodes[pos] = maxKey;\r\n            pos += 2;\r\n            if(pos >= barcodes.length){\r\n                pos = 1;\r\n            }\r\n        }\r\n        \r\n        count.remove(maxKey); // Since that character is done, we don't need to fill it again\r\n        \r\n        //Fill the remaining Characters.\r\n        for(int key: count.keySet()){\r\n            curr = count.get(key);\r\n            \r\n            while(curr-- > 0){\r\n                barcodes[pos] = key;\r\n                pos += 2;\r\n                if(pos >= barcodes.length){\r\n                    pos = 1;\r\n                }\r\n            }\r\n        }\r\n        \r\n        return barcodes;\r\n    }\r\n}",
    "javascript": "// Runtime: 159 ms (Top 100.00%) | Memory: 52 MB (Top 62.79%)\r\nvar rearrangeBarcodes = function(barcodes) {\r\n    var result = [];\r\n    var map = new Map();\r\n    barcodes.forEach(n => map.set(n, map.get(n) + 1 || 1));\r\n    let list = [...map.entries()].sort((a,b) => {return b[1]-a[1]})\r\n    let i = 0; //list[i][0]=>number list[i][1]=>count of this number\r\n    while(result.length!==barcodes.length){\r\n        if(list[i][1]>0) result.push(list[i][0]), list[i][1]--;\r\n        i++;\r\n        if(list[i]===undefined) i = 0;\r\n        if(list[0][1]-list[i][1]>=1&&result[result.length-1]!==list[0][0]) i = 0;\r\n    } //list has sorted, so list[0] appeared most frequent\r\n    return result;\r\n};"
  }
}
