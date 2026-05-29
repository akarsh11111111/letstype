export default {
  "id": 857,
  "name": "Minimum Cost to Hire K Workers",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-cost-to-hire-k-workers",
  "relativeDir": "M/Minimum Cost to Hire K Workers",
  "slug": "0857-minimum-cost-to-hire-k-workers",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 33,
    "python": 21,
    "javascript": 21
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    double mincostToHireWorkers(vector<int>& quality, vector<int>& wage, int k) {\r\n        priority_queue<pair<double, int>, vector<pair<double, int>>, greater<pair<double,int>>> pqmn;\r\n        priority_queue<int> pqmx;\r\n        int n = quality.size();\r\n        for(int i = 0; i < n; i++)\r\n        {\r\n            pqmn.push({(double)wage[i]/quality[i], quality[i]});\r\n        }\r\n        double SumQuality = 0;\r\n        double ans = INT_MAX;\r\n        while(!pqmn.empty())\r\n        {\r\n            pair<double, int> p = pqmn.top();\r\n            SumQuality += p.second;\r\n            pqmx.push(p.second);\r\n            pqmn.pop();\r\n            if(pqmx.size() > k)\r\n            {\r\n                SumQuality -= pqmx.top();\r\n                pqmx.pop();\r\n            }\r\n            if(pqmx.size() == k)\r\n            {\r\n                ans = min(ans, SumQuality*p.first);\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "// Runtime: 147 ms (Top 96.67%) | Memory: 19.20 MB (Top 63.7%)\r\n\r\nclass Solution:\r\n    def mincostToHireWorkers(self, quality: List[int], wage: List[int], k: int) -> float:\r\n        n=len(wage)\r\n        arr=[[wage[i]/quality[i],quality[i]] for i in range(n)]\r\n        arr.sort(key=lambda x:x[0])\r\n        kSmallest=0\r\n        pq=[]\r\n        for i in range(k):\r\n            heapq.heappush(pq,-arr[i][1])\r\n            kSmallest+=arr[i][1]\r\n        minCost=arr[k-1][0]*kSmallest\r\n        for c in range(k,n):\r\n            if pq and abs(pq[0])>arr[c][1]:\r\n                qRem=-heappop(pq)\r\n                kSmallest-=qRem\r\n                kSmallest+=arr[c][1]\r\n                heappush(pq,-arr[c][1])\r\n            minCost=min(minCost,arr[c][0]*kSmallest)\r\n        return minCost",
    "java": "// Runtime: 26 ms (Top 87.91%) | Memory: 46.20 MB (Top 6.51%)\r\n\r\nclass Worker implements Comparable<Worker> {\r\n    final int q, w;\r\n    public Worker(int q, int w) {\r\n        this.q = q;\r\n        this.w = w;\r\n    }\r\n    @Override\r\n    public int compareTo(Worker other) {\r\n        return Integer.compare(w * other.q, q * other.w);\r\n    }\r\n}\r\nclass Solution {\r\n    public double mincostToHireWorkers(int[] quality, int[] wage, int k) {\r\n        int n = quality.length;\r\n        Worker[] a = new Worker[n];\r\n        for (int i = 0; i < n; ++i) {\r\n            a[i] = new Worker(quality[i], wage[i]);\r\n        }\r\n        Arrays.sort(a);\r\n        int s = 0;\r\n        double res = 1e15;\r\n        PriorityQueue<Integer> q = new PriorityQueue<>();\r\n        for (Worker worker: a) {\r\n            q.add(-worker.q);\r\n            s += worker.q;\r\n            if (q.size() > k) s += q.poll();\r\n            if (q.size() == k) res = Math.min(res, (double) s * worker.w / worker.q);\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} quality\r\n * @param {number[]} wage\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nvar mincostToHireWorkers = function(quality, wage, k) {\r\n  let minCost = Number.MAX_SAFE_INTEGER;\r\n  let offer, accepted, ratio;\r\n  for(let i=0; i<quality.length; i++) {\r\n    ratio = wage[i]/quality[i];\r\n    accepted = [];\r\n    for(let j=0; j<quality.length; j++) {\r\n      offer = quality[j] * ratio;\r\n      if(offer >= wage[j]) accepted.push(offer);\r\n    } \r\n    if(accepted.length < k) continue;\r\n    minCost = Math.min(minCost, accepted.sort((a,b) => a-b).splice(0, k).reduce((acc, cur) => acc+cur, 0));\r\n  }\r\n  return minCost;\r\n}"
  }
}
