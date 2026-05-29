export default {
  "id": 1675,
  "name": "Minimize Deviation in Array",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimize-deviation-in-array",
  "relativeDir": "M/Minimize Deviation in Array",
  "slug": "1675-minimize-deviation-in-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 40,
    "java": 26,
    "python": 30,
    "javascript": 13
  },
  "languages": {
    "cpp": "// Runtime: 271 ms (Top 90.46%) | Memory: 89.40 MB (Top 17.18%)\r\n\r\n// 😉😉😉😉Please upvote if it helps 😉😉😉😉\r\nclass Solution {\r\npublic:\r\n    int minimumDeviation(vector<int>& nums) {\r\n        set <int>  s;\r\n        \r\n        // Storing all  elements  in sorted order\r\n        //insert even directly and odd with one time multiplication\r\n        //and it will become even\r\n        for(int i = 0; i<nums.size() ; ++i)\r\n        {\r\n            if(nums[i] % 2 == 0)\r\n                s.insert(nums[i]);\r\n            \r\n            else\r\n                // Odd number are transformed\r\n                // using 2nd operation\r\n                s.insert(nums[i] * 2);\r\n        }\r\n        \r\n        // maximum - minimun\r\n        int diff = *s.rbegin() - *s.begin();\r\n        \r\n        //run the loop untill difference is minimized\r\n        while(*s.rbegin() % 2 == 0)\r\n        {\r\n            \r\n            // Maximum element of the set\r\n            int x = *s.rbegin();\r\n            s.erase(x);\r\n            // remove begin element and inserted half of it for minimizing\r\n            s.insert(x/2);\r\n            \r\n            diff = min(diff, *s.rbegin() - *s.begin());\r\n        }\r\n        return diff;\r\n    }\r\n};",
    "python": "class Solution:\r\n\tdef minimumDeviation(self, nums: List[int]) -> int:\r\n\r\n\t\tfrom sortedcontainers import SortedList\r\n\r\n\t\tfor i in range(len(nums)):\r\n\r\n\t\t\tif nums[i]%2!=0:\r\n\t\t\t\tnums[i]=nums[i]*2\r\n\r\n\t\tnums = SortedList(nums)\r\n\r\n\t\tresult = 100000000000\r\n\r\n\t\twhile True:\r\n\t\t\tmin_value = nums[0]\r\n\t\t\tmax_value = nums[-1]\r\n\r\n\t\t\tif max_value % 2 == 0:\r\n\t\t\t\tnums.pop()\r\n\t\t\t\tnums.add(max_value // 2)\r\n\t\t\t\tmax_value = nums[-1]\r\n\t\t\t\tmin_value = nums[0]\r\n\r\n\t\t\t\tresult = min(result , max_value - min_value)\r\n\t\t\telse:\r\n\t\t\t\tresult = min(result , max_value - min_value)\r\n\t\t\t\tbreak\r\n\r\n\t\treturn result",
    "java": "// Runtime: 125 ms (Top 97.34%) | Memory: 51 MB (Top 91.49%)\r\nclass Solution {\r\n    public int minimumDeviation(int[] nums) {\r\n        TreeSet<Integer> temp = new TreeSet<>();\r\n        for(int i: nums){\r\n            if(i % 2 == 0){\r\n                temp.add(i);\r\n            }\r\n            else{\r\n                temp.add(i * 2);\r\n            }\r\n        }\r\n\r\n        int md = temp.last() - temp.first();\r\n        int m = 0;\r\n\r\n        while(temp.size() > 0 && temp.last() % 2 == 0){\r\n            m = temp.last();\r\n            temp.remove(m);\r\n            temp.add(m / 2);\r\n\r\n            md = Math.min(md, temp.last() - temp.first());\r\n        }\r\n        return md;\r\n    }\r\n}",
    "javascript": "var minimumDeviation = function(nums) {\r\n    let pq = new MaxPriorityQueue({priority: x => x})\r\n    for (let n of nums) {\r\n        if (n % 2) n *= 2\r\n        pq.enqueue(n)\r\n    }\r\n    let ans = pq.front().element - pq.back().element\r\n    while (pq.front().element % 2 === 0) {\r\n        pq.enqueue(pq.dequeue().element / 2)\r\n        ans = Math.min(ans, pq.front().element - pq.back().element)\r\n    }\r\n    return ans\r\n};"
  }
}
