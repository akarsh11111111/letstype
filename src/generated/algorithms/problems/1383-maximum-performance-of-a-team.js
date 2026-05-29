export default {
  "id": 1383,
  "name": "Maximum Performance of a Team",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-performance-of-a-team",
  "relativeDir": "M/Maximum Performance of a Team",
  "slug": "1383-maximum-performance-of-a-team",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 29,
    "python": 21,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    \r\n    int maxPerformance(int n, vector<int>& speed, vector<int>& efficiency, int k) {\r\n        priority_queue<int, vector<int>, greater<int>> pq;\r\n        long long sum = 0, ans = 0;\r\n        const int m = 1e9 + 7;\r\n        vector<vector<int>> pairs(n, vector<int> (2, 0));\r\n        for(int i = 0; i < n; i++) pairs[i] = {efficiency[i], speed[i]};\r\n        sort(pairs.rbegin(), pairs.rend());\r\n        for(int i = 0; i < n; i++){\r\n            sum += pairs[i][1];\r\n            pq.push(pairs[i][1]);\r\n            ans = max(ans,sum * pairs[i][0]);\r\n            if(pq.size() >= k){\r\n                sum -= pq.top();\r\n                pq.pop();\r\n            }\r\n        }\r\n        return ans%(m);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxPerformance(self, n: int, speed: List[int], efficiency: List[int], k: int) -> int:\r\n        l = list(zip(efficiency,speed))\r\n        l.sort(reverse=True)\r\n        h = []\r\n        res = 0\r\n        mod = 1000000007\r\n        mx_sum = 0\r\n        print(l)\r\n        for i in range(n):\r\n            res = max(res , (mx_sum+l[i][1])*l[i][0])\r\n            if len(h)<k-1:\r\n                heappush(h,l[i][1])\r\n                mx_sum+=l[i][1]\r\n            elif k!=1:\r\n                x=0\r\n                if h:\r\n                    x = heappop(h)\r\n                heappush(h,max(x,l[i][1]))\r\n                mx_sum = mx_sum - x + max(x,l[i][1])\r\n        return res%mod",
    "java": "// Runtime: 90 ms (Top 75.46%) | Memory: 69.9 MB (Top 33.86%)\r\nclass Engineer {\r\n    int speed, efficiency;\r\n    Engineer(int speed, int efficiency) {\r\n        this.speed = speed;\r\n        this.efficiency = efficiency;\r\n    }\r\n}\r\n\r\nclass Solution {\r\n    public int maxPerformance(int n, int[] speed, int[] efficiency, int k) {\r\n        List<Engineer> engineers = new ArrayList<>();\r\n        for(int i=0;i<n;i++) {\r\n            engineers.add(new Engineer(speed[i], efficiency[i]));\r\n        }\r\n        engineers.sort((a, b) -> b.efficiency - a.efficiency);\r\n        PriorityQueue<Engineer> maxHeap = new PriorityQueue<>((a,b) -> a.speed - b.speed);\r\n        long maxPerformance = 0l, totalSpeed = 0l;\r\n        for(Engineer engineer: engineers) {\r\n            if(maxHeap.size() == k) {\r\n                totalSpeed -= maxHeap.poll().speed;\r\n            }\r\n            totalSpeed += engineer.speed;\r\n            maxHeap.offer(engineer);\r\n            maxPerformance = Math.max(maxPerformance, totalSpeed * (long)engineer.efficiency);\r\n        }\r\n        return (int)(maxPerformance % 1_000_000_007);\r\n    }\r\n}",
    "javascript": "var maxPerformance = function(n, speed, efficiency, k) {\r\n    let ord = Array.from({length: n}, (_,i) => i)\r\n    ord.sort((a,b) => efficiency[b] - efficiency[a])\r\n    let sppq = new MinPriorityQueue(),\r\n        totalSpeed = 0n, best = 0n\r\n    for (let eng of ord) {\r\n        sppq.enqueue(speed[eng])\r\n        if (sppq.size() <= k) totalSpeed += BigInt(speed[eng])\r\n        else totalSpeed += BigInt(speed[eng] - sppq.dequeue().element)\r\n        let res = totalSpeed * BigInt(efficiency[eng])\r\n        if (res > best) best = res\r\n    }\r\n    return best % 1000000007n\r\n};"
  }
}
