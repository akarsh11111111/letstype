export default {
  "id": 875,
  "name": "Koko Eating Bananas",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/koko-eating-bananas",
  "relativeDir": "K/Koko Eating Bananas",
  "slug": "0875-koko-eating-bananas",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 40,
    "java": 36,
    "python": 16,
    "javascript": 28
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minEatingSpeed(vector<int>& piles, int h) {\r\n        \r\n        int mx=1000000001;\r\n        \r\n        \r\n        int st=1;\r\n        \r\n        \r\n        while(mx>st)\r\n        {\r\n            \r\n            int k = ((mx+st)/2);\r\n            \r\n            int sum=0;\r\n            \r\n            for(int i =0 ;i < piles.size() ; i++)\r\n            {\r\n                sum+=ceil(1.0 *piles[i]/k);\r\n            }\r\n            \r\n            if(sum>h)\r\n            {\r\n                st=k+1;\r\n            }\r\n            else\r\n            {\r\n                mx=k;\r\n            }\r\n            \r\n        }\r\n        \r\n        \r\n        return st;\r\n        \r\n        \r\n        \r\n    }\r\n};",
    "python": "# Runtime: 308 ms (Top 92.4%) | Memory: 17.82 MB (Top 76.3%)\r\n\r\nclass Solution:\r\n    def minEatingSpeed(self, piles: List[int], h: int) -> int:\r\n        def check(x):\r\n            return sum(ceil(ele/x) for ele in piles) <= h\r\n\r\n        l = 1\r\n        r = max(piles)\r\n        while l < r:\r\n            mid = (l+r) >> 1\r\n            if not check(mid):\r\n                l=mid+1\r\n            else:\r\n                r=mid\r\n        return l",
    "java": "class Solution {\r\n    public int minEatingSpeed(int[] piles, int h) {\r\n        int max=0;\r\n        int ans=0;\r\n        for(int i=0;i<piles.length;i++)\r\n        {\r\n            max=Math.max(piles[i],max);\r\n        }\r\n        if(piles.length==h)\r\n            return max;\r\n        int left=1;\r\n        int right=max;\r\n        while(left<=right)\r\n        {\r\n            int mid=left+(right-left)/2;\r\n            double num=0;\r\n            int time=0;\r\n            for(int i=0;i<piles.length;i++)\r\n            {\r\n                num=(double)piles[i]/(mid);\r\n                if(num>piles[i]/mid)\r\n                    time+=num+1;\r\n                else\r\n                    time+=num;\r\n            }\r\n            if(time<=h)\r\n            {\r\n                ans=mid;\r\n                right=mid-1;\r\n            }\r\n            else\r\n                left=mid+1;\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 74 ms (Top 53.9%) | Memory: 45.22 MB (Top 51.1%)\r\n\r\nvar minEatingSpeed = function(piles, h) {\r\n    /*The range of bananas that Koko can eat is k = 1 to Max(piles)*/\r\n    let startk = 1;\r\n    let endk = Math.max(...piles);\r\n    \r\n    while(startk <= endk){\r\n        let midk = Math.floor(startk + (endk - startk)/2);\r\n        /*midk are the count of bananas that koko decide to eat. \r\n        So how many hours she will take to finish the piles?*/\r\n        let hrs = 0;\r\n        for(let pile of piles){\r\n            /*pile is the num of bananas in piles*/\r\n            hrs += Math.ceil(pile/midk);\r\n        }\r\n        if(hrs > h){\r\n            /*Now if hrs > h she will not be to finish the pile so we have \r\n            to increase the bananas by moving start.*/\r\n            startk = midk + 1;\r\n        }else{\r\n            /*If hrs <= h she will be eating too fast so we can reduce the bananas \r\n            so she eats slowly. So decrement end.*/\r\n            endk = midk - 1;\r\n        }\r\n    }\r\n    return startk;\r\n};"
  }
}
