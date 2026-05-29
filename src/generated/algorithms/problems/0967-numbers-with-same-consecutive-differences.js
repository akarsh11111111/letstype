export default {
  "id": 967,
  "name": "Numbers With Same Consecutive Differences",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/numbers-with-same-consecutive-differences",
  "relativeDir": "N/Numbers With Same Consecutive Differences",
  "slug": "0967-numbers-with-same-consecutive-differences",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 28,
    "python": 33,
    "javascript": 43
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> res;\r\n    void solve(int num,int n,int k)\r\n    {\r\n        if(n==1)\r\n        {\r\n            res.push_back(num);\r\n            return;\r\n        }\r\n        int dig=num%10;\r\n        if(dig+k<=9 && k!=0)\r\n        {\r\n            solve(num*10+dig+k,n-1,k);\r\n        }\r\n        if(dig-k>=0)\r\n        {\r\n            solve(num*10+dig-k,n-1,k);\r\n        }\r\n    }\r\n    vector<int> numsSameConsecDiff(int n, int k) {\r\n        res.clear();\r\n        for(int i=1;i<=9;++i)\r\n        {\r\n            solve(i,n,k);\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numsSameConsecDiff(self, n: int, k: int) -> List[int]:\r\n        # initialize the cache with all the valid numbers of length 1\r\n        # cache is a list of tuple (number, digit at units place)\r\n        cache = [(0, 0), (1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (7, 7), (8, 8), (9, 9)]\r\n        cacheTemp = []\r\n        \r\n        # each iteration will store all the valid numbers of length 2 to n in cache\r\n        for i in range(2, n + 1):\r\n            # loop through the cache from the previous iteration\r\n            for j in cache:\r\n                if k == 0:\r\n                    if j[0] != 0:\r\n                        cacheTemp.append((j[0] * 10 + j[1], j[1]))\r\n                elif j[1] == 0 and i == 2:\r\n                    continue\r\n                elif j[1] <= k - 1:\r\n                    if j[1] < 10 - k:\r\n                        cacheTemp.append((j[0] * 10 + j[1] + k, j[1] + k))\r\n                elif j[1] >= 10 - k:\r\n                    if j[1] > k - 1:\r\n                        cacheTemp.append((j[0] * 10 + j[1] - k, j[1] - k))\r\n                else:\r\n                    cacheTemp.append((j[0] * 10 + j[1] - k, j[1] - k))\r\n                    cacheTemp.append((j[0] * 10 + j[1] + k, j[1] + k))\r\n            cache = cacheTemp   # store the list of valid integers of length i in cache\r\n            cacheTemp = []  # empty the temporary list\r\n        \r\n        res = []\r\n        for i in cache:\r\n            res.append(i[0])\r\n        \r\n        return res",
    "java": "// Runtime: 3 ms (Top 66.2%) | Memory: 41.46 MB (Top 55.2%)\r\n\r\nclass Solution {\r\n    \r\n    List<Integer> res = new ArrayList<>();\r\n    public int[] numsSameConsecDiff(int n, int k) {\r\n        \r\n        for(int ans = 1; ans < 10; ans++){ // first digit can't be 0\r\n            find(ans, n-1, k); // find remaining n-1 digits using backtrack\r\n        }\r\n        \r\n        return res.stream().mapToInt(Integer::intValue).toArray();  // convert list to int arr\r\n    }\r\n    \r\n    private void find(int ans, int n, int k){\r\n        \r\n        if(n == 0){\r\n            res.add(ans); // if got length n number then put that into res\r\n            return;\r\n        }\r\n        \r\n        for(int i = 0; i < 10; i++){\r\n            if(Math.abs(ans%10-i) == k) // find digit that have k difference with last digit\r\n                find(ans*10+i, n-1, k);\r\n        }\r\n        ans /= 10; // remove last digit while backtrack\r\n    }\r\n}",
    "javascript": "// Runtime: 100 ms (Top 61.63%) | Memory: 45.3 MB (Top 21.96%)\r\n/**\r\n * @param {number} n\r\n * @param {number} k\r\n * @return {number[]}\r\n */\r\nvar numsSameConsecDiff = function(n, k) {\r\n\r\n  let res = [];\r\n\r\n  const bfs=(num,i)=>{\r\n    let queue = [];\r\n    queue.push(i);\r\n    while(queue.length){\r\n        // console.log(\"queue is \",queue)\r\n        i = queue.shift();\r\n        if (i <= num)\r\n        {\r\n            if(i.toString().length===n){\r\n               res.push(i);\r\n            }\r\n            let last_digit = i % 10;\r\n\r\n            if (last_digit+k<10)\r\n            {\r\n                queue.push((i * 10) + (last_digit + k));\r\n            }\r\n            if(k>0 && last_digit-k >= 0)\r\n             {\r\n                queue.push((i * 10) + (last_digit-k));\r\n             }\r\n\r\n        }\r\n    }\r\n  }\r\n\r\n  let num = Math.pow(10,n)-1;\r\n  for(let i=1;i<=9 && i<num ;i++){\r\n    bfs(num,i);\r\n  }\r\n  return res;\r\n\r\n};"
  }
}
