export default {
  "id": 1648,
  "name": "Sell Diminishing-Valued Colored Balls",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sell-diminishing-valued-colored-balls",
  "relativeDir": "S/Sell Diminishing-Valued Colored Balls",
  "slug": "1648-sell-diminishing-valued-colored-balls",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 40,
    "java": 46,
    "python": 19,
    "javascript": 28
  },
  "languages": {
    "cpp": "#define ll long long\r\nconst int MOD = 1e9+7; \r\n\r\nclass Solution {\r\npublic:\r\n    \r\n    ll summation(ll n) {\r\n        return (n*(n+1)/2);\r\n    }\r\n    \r\n    int maxProfit(vector<int>& inventory, int orders) {\r\n        ll n = inventory.size(), i = 0, ans = 0;\r\n        inventory.push_back(0);\r\n        sort(inventory.rbegin(), inventory.rend());\r\n        while(orders and i < n) {\r\n            if(inventory[i] != inventory[i+1]) {\r\n                ll width = i+1, h = inventory[i] - inventory[i+1];\r\n                ll available = width * h, gain = 0;\r\n                if(available <= orders) {\r\n                    orders -= available;\r\n\t\t\t\t\t// from each of the first i+1 inventories, we gain (inventory[i+1] + 1) + ... + inventory[i] value\r\n                    gain = (width * (summation(inventory[i]) - summation(inventory[i+1]))) % MOD; \r\n                } else {\r\n                    ll q = orders / width, r = orders % width;\r\n\t\t\t\t\t// q balls picked from each of the first i+1 inventories\r\n                    gain = (width * (summation(inventory[i]) - summation(inventory[i]-q))) % MOD;\r\n\t\t\t\t\t// 1 ball picked from r inventories providing value (inventory[i]-q)\r\n                    gain = (gain + r*(inventory[i]-q)) % MOD;\r\n                    orders = 0;\r\n                }\r\n                \r\n                ans = (ans + gain) % MOD; \r\n            }\r\n            \r\n            i++;\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxProfit(self, inventory: List[int], orders: int) -> int:\r\n        inventory.sort(reverse=True) \r\n        inventory += [0]\r\n        res = 0\r\n        k = 1\r\n        \r\n        for i in range(len(inventory)-1): \r\n            if inventory[i] > inventory[i+1]: \r\n                if k*(inventory[i]-inventory[i+1]) < orders:\r\n                    diff = inventory[i]-inventory[i+1]\r\n                    res += k*(inventory[i]+inventory[i+1]+1)*(diff)//2\r\n                    orders -= k*diff\r\n                else: \r\n                    q, r = divmod(orders, k)\r\n                    res += k*(inventory[i]+(inventory[i]-q+1))*q//2\r\n                    res += r*(inventory[i]-q)\r\n                    return res%(10**9+7)\r\n            k += 1",
    "java": "class Solution {\r\n    private long mod = 1000000007L;\r\n    public int maxProfit(int[] inventory, int orders) {\r\n\t\t// we use pq to find the most balls\r\n        PriorityQueue<Long> pq = new PriorityQueue<>((x, y) -> Long.compare(y, x));\r\n        pq.offer(0L);\r\n\t\t\r\n        // we use map to count the balls\r\n        Map<Long, Long> map = new HashMap<>();\r\n        map.put(0L, 0L);\r\n        \r\n        for (int j : inventory) {\r\n            long i = (long)j;\r\n            if (map.containsKey(i)) {\r\n                map.put(i, map.get(i) + 1);\r\n            }\r\n            else {\r\n                pq.offer(i);\r\n                map.put(i, 1L);\r\n            }\r\n        }\r\n        \r\n        long res = 0;\r\n        while (orders > 0) {\r\n            long ball = pq.poll(), nextBall = pq.peek();\r\n            long times = map.get(ball);\r\n            long diff = Math.min(ball - nextBall, orders / times);\r\n            if (diff == 0) {\r\n                res = (res + orders * ball) % mod;\r\n                break;\r\n            }\r\n            long sum = (ball * 2 + 1 - diff) * diff / 2 * times;\r\n            res = (res + sum) % mod;\r\n            orders -= diff * times;\r\n            if (!map.containsKey(ball - diff)) {\r\n                map.put(ball - diff, map.get(ball));\r\n                pq.offer(ball - diff);\r\n            }\r\n            else {\r\n                map.put(ball - diff, map.get(ball - diff) + map.get(ball));\r\n            }\r\n            map.remove(ball);\r\n        }\r\n        return (int) res;\r\n    }\r\n}",
    "javascript": "var maxProfit = function(A, k) {\r\n    //rangeSum Formula\r\n    let rangesum=(i,j)=>{\r\n        i=BigInt(i),j=BigInt(j)\r\n        return ((j*((j+1n))/2n)-(i*(i+1n)/2n))\r\n    }\r\n    A.unshift(0) //prepend the sentinel 0 \r\n    A.sort((a,b)=>a-b)\r\n    let n=A.length,result=0n,mod=BigInt(1e9+7),i=n-1\r\n    // can use all current levels\r\n    while((k>=(n-i)*(A[i]-A[i-1]))&&i>0){\r\n        if(A[i]!=A[i-1])\r\n            result=(result+(rangesum(A[i-1],A[i])*BigInt(n-i)))%mod,\r\n            k-=(n-i)*(A[i]-A[i-1])\r\n        i--\r\n    }\r\n    //can use some of the current levels\r\n    if(k>0&&k>=n-i){\r\n        let levels=Math.floor(k/(n-i)) //the levels i can use \r\n        result=(result+(BigInt(n-i)*rangesum(A[i]-levels,A[i])))%mod\r\n        k-=levels*(n-i)\r\n        A[i]-=levels\r\n    }\r\n    // can use some of the items OF the first level\r\n    if(k>0&&k<n-i)\r\n        result=(result+BigInt(k)*BigInt(A[i]))%mod\r\n    return Number(result)\r\n};"
  }
}
