export default {
  "id": 1705,
  "name": "Maximum Number of Eaten Apples",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-number-of-eaten-apples",
  "relativeDir": "M/Maximum Number of Eaten Apples",
  "slug": "1705-maximum-number-of-eaten-apples",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 38,
    "python": 27,
    "javascript": 28
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int eatenApples(vector<int>& apples, vector<int>& days) {\r\n        ios_base::sync_with_stdio(0);cin.tie(0);\r\n        priority_queue<int,vector<int>,greater<int>>p;\r\n        unordered_map<int,int>m;\r\n        int ans=0;\r\n        int i=0;\r\n        while(p.size() || i<days.size()){\r\n            if(i<days.size() && apples[i]!=0 && days[i]!=0){\r\n                m[days[i]+i]=apples[i];\r\n                p.push(days[i]+i);\r\n            }\r\n            while(p.size()){\r\n                if(m[p.top()]!=0 && p.top()>i)\r\n                    break;\r\n                p.pop();\r\n            }\r\n            if(p.size()){\r\n                ans++;\r\n                m[p.top()]--;\r\n            }\r\n            ++i;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "import heapq\r\nclass Solution(object):\r\n    def eatenApples(self, apples, days):\r\n        \"\"\"\r\n        :type apples: List[int]\r\n        :type days: List[int]\r\n        :rtype: int\r\n        \"\"\"\r\n        heap = [(days[0], apples[0])]\r\n        heapq.heapify(heap)\r\n        day = 0\r\n        rtn = 0\r\n        while heap or day < len(days):\r\n            # print(heap, day)\r\n            apple = 0\r\n            if heap :\r\n                cnt, apple = heapq.heappop(heap)\r\n                while heap and cnt <= day and apple > 0:\r\n                    cnt, apple = heapq.heappop(heap)\r\n            if apple > 0 and cnt > day  :\r\n                rtn +=1\r\n            day +=1\r\n            if apple >  1 and cnt > day:\r\n                heapq.heappush(heap, (cnt, apple-1))\r\n            if day < len(days) and apples[day] > 0 :\r\n                heapq.heappush(heap, (day +days[day], apples[day]))\r\n        return rtn",
    "java": "// Runtime: 33 ms (Top 95.27%) | Memory: 45.90 MB (Top 56.76%)\r\n\r\nclass Solution {\r\n    class Basket{\r\n        int appleCount;\r\n        int day;\r\n        Basket(int appleCount, int day){\r\n            this.appleCount = appleCount;\r\n            this.day = day;\r\n        }\r\n    }\r\n    public int eatenApples(int[] apples, int[] days) {\r\n        int n = apples.length;\r\n        PriorityQueue<Basket> q = new PriorityQueue<>(n,(b1,b2) -> b1.day-b2.day);\r\n        int i; // counter for day \r\n\t\tint apple = 0; // count of consumed apple\r\n        \r\n        for(i=0; i<n; i++){\r\n            while(q.peek()!=null && (q.peek().appleCount < 1 || q.peek().day < i+1)){\r\n                q.poll();\r\n            }\r\n            if(apples[i] != 0 && days[i] !=0){\r\n                q.add(new Basket(apples[i], i+days[i]));\r\n            }\r\n            if(q.peek()==null) continue;           \r\n            q.peek().appleCount--;\r\n            apple++;\r\n        }\r\n                \r\n        while(q.peek() != null){\r\n            Basket basket = q.poll();\r\n            if(basket.day < i) continue;\r\n            apple += Math.min(basket.appleCount, basket.day-i);\r\n            i += Math.min(basket.appleCount, basket.day-i);\r\n        }\r\n        return apple;\r\n    }\r\n}",
    "javascript": "var eatenApples = function(apples, days) {\r\n    const heap = new MinPriorityQueue({priority: x => x[0]});\r\n    let totalApple = 0;\r\n    \r\n    for(let i = 0; i < apples.length; i++) {\r\n        heap.enqueue([i + days[i], apples[i]]);\r\n        \r\n        while(!heap.isEmpty()) {\r\n            const [expire, count] = heap.front().element;\r\n            if(!count || expire <= i) heap.dequeue();\r\n            else break;\r\n        }\r\n        \r\n        if(heap.isEmpty()) continue;\r\n        totalApple++;\r\n        heap.front().element[1]--;\r\n    }\r\n    \r\n    let i = apples.length;\r\n    \r\n    while(!heap.isEmpty()) {\r\n        const [expire, count] = heap.dequeue().element;\r\n        if(!count || expire <= i) continue;\r\n        totalApple += Math.min(count, expire - i);\r\n        i = Math.min(expire, i + count);\r\n    }\r\n    return totalApple;\r\n};"
  }
}
