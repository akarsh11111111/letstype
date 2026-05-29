export default {
  "id": 1655,
  "name": "Distribute Repeating Integers",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/distribute-repeating-integers",
  "relativeDir": "D/Distribute Repeating Integers",
  "slug": "1655-distribute-repeating-integers",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 45,
    "python": 24,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 1691 ms (Top 10.64%) | Memory: 76.9 MB (Top 63.83%)\r\nclass Solution {\r\npublic:\r\n    bool solve(vector<int>&q, map<int,int>&count, int idx){\r\n        if(idx==q.size()){\r\n            return true;\r\n        }\r\n        for(auto it=count.begin();it!=count.end();it++){\r\n            if(it->second>=q[idx]){\r\n                count[it->first]-=q[idx];\r\n                if(solve(q,count,idx+1))\r\n                    return true;\r\n                count[it->first]+=q[idx];\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n    bool canDistribute(vector<int>& nums, vector<int>& quantity) {\r\n        map<int,int>count;\r\n        int n=nums.size();\r\n        for(int i=0;i<n;i++){\r\n            count[nums[i]]++;\r\n        }\r\n        sort(quantity.begin(),quantity.end(),greater<int>());\r\n        return solve(quantity,count,0);\r\n\r\n    }\r\n};",
    "python": "// Runtime: 584 ms (Top 98.04%) | Memory: 28.70 MB (Top 26.47%)\r\n\r\nfrom collections import Counter, defaultdict\r\n\r\nclass Solution:\r\n    def canDistribute(self, nums: List[int], quantity: List[int]) -> bool:\r\n        quantity.sort(reverse=True)\r\n        freqCounts = defaultdict(int, Counter(Counter(nums).values()))\r\n        def backtrack(i: int = 0) -> bool:\r\n            if i == len(quantity):\r\n                return True\r\n            \r\n            for freq, count in list(freqCounts.items()):\r\n                if freq >= quantity[i] and count > 0:\r\n                    freqCounts[freq] -= 1\r\n                    freqCounts[freq - quantity[i]] += 1\r\n                    if backtrack(i + 1):\r\n                        return True\r\n                    freqCounts[freq] += 1\r\n                    freqCounts[freq - quantity[i]] -= 1\r\n            \r\n            return False\r\n        \r\n        return backtrack()",
    "java": "// Runtime: 28 ms (Top 89.01%) | Memory: 60.70 MB (Top 18.68%)\r\n\r\nclass Solution {\r\n    public boolean canDistribute(int[] nums, int[] quantity) {\r\n        \r\n        // Use a map to count the numbers, ex: nums:[5,7,4,7,4,7] -> {5:1, 7:3, 4:2}\r\n        Map<Integer, Integer> freq = new HashMap<>();\r\n        for (int num : nums)\r\n            freq.put(num, freq.getOrDefault(num, 0)+1);\r\n        \r\n        // Turn values of the map into array, ex: {5:1, 7:3, 4:2} -> [1, 3, 2]\r\n        int[] dist = new int[freq.size()];\r\n        int idx = 0;\r\n        for (int f : freq.values())\r\n            dist[idx++] = f;\r\n        \r\n\t\t// Fullfill the quantities from the biggest quantity to the smallest.\r\n        // If the bigger quantity can't be filled, the program will stop as early as possible.\r\n        Arrays.sort(quantity);\r\n        return rec(dist, quantity, quantity.length-1);\r\n    }\r\n    \r\n    // try to fullfill the j-th order quantity\r\n    private boolean rec(int[] dist, int[] quantity, int j) {\r\n        \r\n        // stop condition. We've fulfilled all the order quantities.\r\n        if (j == -1)\r\n            return true;\r\n        \r\n        Set<Integer> used = new HashSet<>();\r\n        for (int i = 0 ; i < dist.length ; ++i) {\r\n\t\t\r\n\t\t\t// Use a set to make sure that \r\n\t\t\t//   we don't distribute from the same amount to this j-th order for more than once.\r\n            // With this check, the program reduces from 97ms to 25 ms.\r\n            if (dist[i] >= quantity[j] && used.add(dist[i])) {\r\n                dist[i] -= quantity[j];\r\n                if (rec(dist, quantity, j-1))\r\n                    return true;\r\n                dist[i] += quantity[j];\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n}",
    "javascript": "var canDistribute = function(nums, quantity) {\r\n    quantity.sort((a,b)=>b-a)\r\n    let freq={},flag=false\r\n    for(let num of nums)\r\n        freq[num]=(freq[num]||0) +1\r\n    let set=Object.keys(freq),n=set.length,k=quantity.length\r\n    let rec=(prefix)=>{\r\n        if(prefix.length==k || flag==true)  \r\n            return flag=true\r\n        for(let i=0;i<n;i++){\r\n            freq[set[i]]-=quantity[prefix.length]\r\n\t\t\tprefix.push(set[i])\r\n            if( freq[set[i]]>=0)\r\n                rec(prefix)\r\n\t\t\tprefix.pop()\r\n            freq[set[i]]+=quantity[prefix.length]\r\n        }\r\n    }\r\n    rec([])\r\n    return flag\r\n};"
  }
}
