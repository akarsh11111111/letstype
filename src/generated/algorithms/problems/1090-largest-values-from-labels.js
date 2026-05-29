export default {
  "id": 1090,
  "name": "Largest Values From Labels",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/largest-values-from-labels",
  "relativeDir": "L/Largest Values From Labels",
  "slug": "1090-largest-values-from-labels",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 33,
    "java": 32,
    "python": 37,
    "javascript": 35
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int largestValsFromLabels(vector<int>& values, vector<int>& labels, int numWanted, int useLimit) {\r\n        // same label item should be less than uselimit\r\n        priority_queue<pair<int,int>>q;  // this will give us maximum element because we need to maximise the sum \r\n        for(int i=0;i<values.size();i++)\r\n        {\r\n            q.push({values[i],i});\r\n        }\r\n        long long int ans=0;\r\n        unordered_map<int,int>m;\r\n        // we cant use more numbers than useLimit\r\n        // storing each use labels in map to count the use limit of that number\r\n        int i=0;\r\n        while(i<numWanted)\r\n        {\r\n            int t=q.top().first;   //number \r\n            int ind=q.top().second; // labels index\r\n            q.pop();\r\n            if(m[labels[ind]]<useLimit)   // if less than count then include in our answer\r\n            {\r\n                ans+=t;\r\n                m[labels[ind]]++;\r\n                i++;\r\n            }\r\n            if(q.size()==0)\r\n            {\r\n                break;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "from collections import defaultdict\r\nimport heapq\r\n\r\nclass Solution:\r\n    def largestValsFromLabels(\r\n        self, values: list[int], labels: list[int], numWanted: int, useLimit: int\r\n    ) -> int:\r\n\r\n        # Add labels and values into the heap\r\n        heap = [(-value, label) for value, label in zip(values, labels)]\r\n        heapq.heapify(heap)\r\n\r\n        # Initialize the hashmap\r\n        used = defaultdict(int)\r\n\r\n        # Initialize the result\r\n        res = 0\r\n\r\n        # Iterate until we have used a certain number or the heap is empty\r\n        while numWanted > 0 and heap:\r\n\r\n            # Pop a label and its value from the heap\r\n            value, label = heapq.heappop(heap)\r\n\r\n            # If we can use such label\r\n            if used[label] < useLimit:\r\n\r\n                # Add its value to the result\r\n                res += -value\r\n\r\n                # Increment its count in the hashmap\r\n                used[label] += 1\r\n\r\n                # Decrement the number of numbers we still want\r\n                numWanted -= 1\r\n\r\n        return res",
    "java": "class Solution {\r\n    public int largestValsFromLabels(int[] values, int[] labels, int numWanted, int useLimit) {\r\n        PriorityQueue<Pair<Integer, Integer>> maxHeap = \r\n            new PriorityQueue<>((a, b) -> Integer.compare(b.getKey(), a.getKey()));\r\n        for(int i=0;i<values.length;i++) {\r\n            maxHeap.add(new Pair<Integer, Integer>(values[i], labels[i]));\r\n        }\r\n        Map<Integer, Integer> labelLimitMap = new HashMap<>();\r\n        int sum = 0;\r\n        while(numWanted != 0) {\r\n            int label = maxHeap.peek().getValue();\r\n            if(labelLimitMap.containsKey(label)) {\r\n                if(labelLimitMap.get(label) == useLimit) {\r\n                    maxHeap.poll();\r\n                } else {\r\n                    labelLimitMap.put(label, labelLimitMap.get(label) + 1);\r\n                    sum += maxHeap.poll().getKey();\r\n                    numWanted--;\r\n                }\r\n            } else {\r\n                labelLimitMap.put(label, 1);\r\n                sum += maxHeap.poll().getKey();\r\n                numWanted--;\r\n            }\r\n            // This Holds since at most numWanted is mentioned.\r\n            if(maxHeap.isEmpty()) {\r\n                return sum;\r\n            }\r\n        }\r\n        return sum;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} values\r\n * @param {number[]} labels\r\n * @param {number} numWanted\r\n * @param {number} useLimit\r\n * @return {number}\r\n */\r\nvar largestValsFromLabels = function(values, labels, numWanted, useLimit) {\r\n    // this sortValues will create an addition array that keep track of the value idx after descending sort\r\n    // which is useful to map the labels accordingly\r\n    let sortValues = values.map((val, idx) => [val, idx]), sortLabels = []\r\n    sortValues.sort((a, b) => b[0] - a[0])\r\n    \r\n    for (let [val, idx] of sortValues) {\r\n        sortLabels.push(labels[idx])\r\n    }\r\n    values.sort((a, b) => b - a)\r\n    labels = sortLabels\r\n    \r\n    let i = 0, map = {}, ans = 0\r\n    while (i < values.length && numWanted > 0) {\r\n        if (map[labels[i]]) map[labels[i]] ++\r\n        else map[labels[i]] = 1\r\n        \r\n        if ((map[labels[i]]) <= useLimit) {\r\n            ans += values[i]\r\n            numWanted--\r\n        }\r\n        \r\n        i++\r\n    }\r\n    \r\n    return ans\r\n    \r\n};"
  }
}
