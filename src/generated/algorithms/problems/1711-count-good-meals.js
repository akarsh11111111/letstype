export default {
  "id": 1711,
  "name": "Count Good Meals",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-good-meals",
  "relativeDir": "C/Count Good Meals",
  "slug": "1711-count-good-meals",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 22,
    "python": 17,
    "javascript": 38
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int countPairs(vector<int>& deliciousness) {\r\n        int cnt=0;\r\n        unordered_map<int,int> mp;\r\n        mp[deliciousness[0]]++;\r\n        int mod=1e9+7;\r\n        for(int i=1;i<deliciousness.size();i++){\r\n            for(int p=1;p<=(1<<21);p*=2){\r\n                if(mp.find(p-deliciousness[i])!=mp.end()){\r\n                    cnt=(cnt+mp[p-deliciousness[i]])%mod;\r\n                    \r\n                }\r\n            }\r\n            mp[deliciousness[i]]++;\r\n            \r\n        }\r\n        return cnt%mod;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countPairs(self, deliciousness: List[int]) -> int:\r\n        pows = [2 ** i for i in range(0,22)] # form our list of powers of 2\r\n        dp_seen = {} # dict to store what we've seen - dynamic programming solution for time requirement\r\n        count = 0 # to store the answer\r\n\r\n        for j in range(0, len(deliciousness)):\r\n            for i in range(0, len(pows)):\r\n                if pows[i] - deliciousness[j] in dp_seen: # \"if we find a previous deliciousness[j] as pows[i] - deliciousness[j], then we will add dp_seen[deliciousness[j]] to count\"\r\n                    count += dp_seen[pows[i] - deliciousness[j]]\r\n            if deliciousness[j] in dp_seen:\r\n                dp_seen[deliciousness[j]] += 1 \r\n            else:\r\n                dp_seen[deliciousness[j]] = 1\r\n                \r\n        return count % (10**9 + 7) # the arbitrary modulo, presumably to reduce the answer size\r\n\t\t```",
    "java": "// Runtime: 160 ms (Top 78.2%) | Memory: 55.21 MB (Top 66.3%)\r\n\r\nclass Solution {\r\n    int mod = 1000000007;\r\n    public int countPairs(int[] arr) {\r\n        Map<Integer, Integer> map = new HashMap<>();\r\n        int n = arr.length;\r\n        long res = 0;\r\n        for (int num : arr) {\r\n            int power = 1;\r\n            for (int i = 0; i < 22; i++) {\r\n                if (map.containsKey(power - num)) {\r\n                    res += map.get(power - num);\r\n                    res %= mod;\r\n                }\r\n                power *= 2;\r\n            }\r\n            map.put(num, map.getOrDefault(num, 0) + 1);\r\n        }\r\n        return (int) res;\r\n    }\r\n}",
    "javascript": "// Runtime: 216 ms (Top 89.74%) | Memory: 61.6 MB (Top 38.46%)\r\nvar countPairs = function(deliciousness) {\r\n    const n = deliciousness.length;\r\n    const MOD = 1e9 + 7;\r\n\r\n    const map = new Map();\r\n\r\n    for (const num of deliciousness) {\r\n        if (!map.has(num)) map.set(num, 0);\r\n        map.set(num, map.get(num) + 1);\r\n    }\r\n\r\n    let max = 2**21;\r\n    let res = 0;\r\n\r\n    for (const [num, count] of map) {\r\n\r\n        let two = 1;\r\n\r\n        while (two <= max) {\r\n            const diff = two - num;\r\n\r\n            if (diff >= 0 && map.has(diff)) {\r\n\r\n                const otherCount = map.get(diff);\r\n\r\n                if (num != diff) res += (count * otherCount);\r\n                else res += (count * (count - 1) / 2);\r\n            }\r\n\r\n            two <<= 1;\r\n        }\r\n\r\n        map.delete(num);\r\n    }\r\n\r\n    return res % MOD;\r\n};"
  }
}
