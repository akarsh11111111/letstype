export default {
  "id": 2183,
  "name": "Count Array Pairs Divisible by K",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-array-pairs-divisible-by-k",
  "relativeDir": "C/Count Array Pairs Divisible by K",
  "slug": "2183-count-array-pairs-divisible-by-k",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 39,
    "python": 15
  },
  "languages": {
    "cpp": "// Runtime: 670 ms (Top 16.39%) | Memory: 64.9 MB (Top 74.39%)\r\ntypedef long long ll;\r\n\r\nclass Solution {\r\npublic:\r\n    long long countPairs(vector<int>& nums, int k) {\r\n        unordered_map<ll, ll> gcdCount;\r\n        ll ans = 0;\r\n        for (ll i = 0; i < nums.size(); ++i)\r\n        {\r\n            ll currgcd = __gcd(nums[i], k);\r\n            for (auto &[gc_d, count] : gcdCount)\r\n                if ((currgcd * gc_d) % k == 0)\r\n                    ans += count;\r\n            gcdCount[currgcd]++;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countPairs(self, nums: List[int], k: int) -> int:\r\n        counter = Counter() #hashmap dicitionary of python\r\n        ans = 0\r\n        n = len(nums)\r\n        \r\n        for i in range(n):\r\n            x = math.gcd(k,nums[i]) #ex: 10 = k and we have nums[i] as 12 so gcd will be 2\r\n            want = k // x #what do we want from upper ex: we need 5\r\n            for num in counter:\r\n                if num % want == 0: #so if we find a number that is divisible by 5 then we can multiply it to 12 and make it a factor of 10 for ex we find 20 so it will be 240 which is divisible by 10 hence we will add it to answer\r\n                    ans += counter[num] #we are adding the freq as we can find no of numbers that have same factor\r\n            counter[x] += 1 #here we are increasing the freq of 2 so that if we find 5 next time we can add these to the answer\r\n        return ans\r\n\t\t```",
    "java": "// Runtime: 282 ms (Top 52.2%) | Memory: 55.61 MB (Top 63.3%)\r\n\r\n//The condition given to us is (a*b % k==0)\r\n// So we can rewrite the above condition that if any factor of k is present in a and any other factor of k is present in b then their multiplication will be divisble by k\r\n\r\n// so gcd(a,k) * gcd(b,k) % k==0 \r\n\r\n\r\nclass Solution {\r\n    public long countPairs(int[] nums, int k) {\r\n        long ans=0;\r\n        HashMap<Integer,Integer> hm=new HashMap<>();\r\n        for(int val:nums){\r\n            int gcd1=gcd(val,k);\r\n            \r\n            for(int gcd2:hm.keySet()){\r\n                if((long)gcd1*gcd2 % k==0){\r\n                    ans+=hm.get(gcd2);\r\n                }\r\n            }\r\n            \r\n            hm.put(gcd1,hm.getOrDefault(gcd1,0)+1);\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n    \r\n    //function to calculate gcd \r\n   \r\n    public int gcd(int n1,int n2)\r\n    {\r\n        while(n1%n2!=0){\r\n            int rem=n1%n2;\r\n            n1=n2;\r\n            n2=rem;\r\n        }\r\n        return n2;\r\n    }\r\n}"
  }
}
