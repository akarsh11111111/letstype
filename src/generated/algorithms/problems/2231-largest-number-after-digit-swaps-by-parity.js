export default {
  "id": 2231,
  "name": "Largest Number After Digit Swaps by Parity",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity",
  "relativeDir": "L/Largest Number After Digit Swaps by Parity",
  "slug": "2231-largest-number-after-digit-swaps-by-parity",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 28,
    "python": 19,
    "javascript": 31
  },
  "languages": {
    "cpp": "// Runtime: 9 ms (Top 5.70%) | Memory: 6 MB (Top 90.27%)\r\nclass Solution {\r\npublic:\r\n    int largestInteger(int num) {\r\n        priority_queue<int> p; // priority queue to store odd digits in descending order\r\n        priority_queue<int> q; // priority queue to store even digits in descending order\r\n        string nums=to_string(num); // converting num to a string for easy access of the digits\r\n        int n=nums.size(); // n stores the number of digits in num\r\n\r\n        for(int i=0;i<n;i++){\r\n            int digit=nums[i]-'0';\r\n            if((digit)%2) // if digit is odd, push it into priority queue p\r\n                p.push(digit);\r\n            else\r\n                q.push(digit); // if digit is even, push it into priority queue q\r\n        }\r\n\r\n        int answer=0;\r\n        for(int i=0; i<n; i++){\r\n            answer=answer*10;\r\n            if((nums[i]-'0')%2) // if the digit is odd, add the largest odd digit of p into the answer\r\n                {answer+=p.top();p.pop();}\r\n            else\r\n                {answer+=q.top();q.pop();} // if the digit is even, add the largest even digit of q into the answer\r\n        }\r\n        return answer;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def largestInteger(self, num: int):\r\n        n = len(str(num))\r\n        arr = [int(i) for i in str(num)]\r\n        odd, even = [], []\r\n        for i in arr:\r\n            if i % 2 == 0:\r\n                even.append(i)\r\n            else:\r\n                odd.append(i)\r\n        odd.sort()\r\n        even.sort()\r\n        res = 0\r\n        for i in range(n):\r\n            if arr[i] % 2 == 0:\r\n                res = res*10 + even.pop()\r\n            else:\r\n                res = res*10 + odd.pop()\r\n        return res",
    "java": "// Runtime: 4 ms (Top 55.01%) | Memory: 41.3 MB (Top 44.82%)\r\nclass Solution {\r\n    public int largestInteger(int num) {\r\n        PriorityQueue<Integer> opq = new PriorityQueue<>();\r\n        PriorityQueue<Integer> epq = new PriorityQueue<>();\r\n        int bnum = num;\r\n        while(num>0){\r\n            int cur = num%10;\r\n            if(cur%2==1){\r\n                opq.add(cur);\r\n            }else{\r\n                epq.add(cur);\r\n            }\r\n            num /= 10;\r\n        }\r\n        StringBuilder sb = new StringBuilder();\r\n        num = bnum;\r\n        while(num>0){\r\n            int cur = num%10;\r\n            if(cur%2==1)\r\n                sb.insert(0, opq.poll());\r\n            else\r\n                sb.insert(0, epq.poll());\r\n            num /= 10;\r\n        }\r\n        return Integer.parseInt(sb.toString());\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} num\r\n * @return {number}\r\n */\r\nvar largestInteger = function(num) {\r\n    var nums = num.toString().split(\"\");//splitting the numbers into an array\r\n    var odd=[];//helps keep a track of odd numbers\r\n    var even =[];//helps keep a track of even numbers\r\n    for(var i=0;i<nums.length;i++){\r\n        if(nums[i]%2===0) //pushing even numbers to even array\r\n            even.push(nums[i]);\r\n        else//pushing odd numbers to odd array\r\n            odd.push(nums[i]);\r\n    }\r\n    odd.sort((a,b)=>a-b);//sorting the arrays in ascending order\r\n    even.sort((a,b)=>a-b);\r\n    var ans =[];\r\n    for(var i=0;i<nums.length;i++){\r\n        if(nums[i]%2===0){//replacing even with even\r\n            ans.push(even[even.length-1]);//pushing the greatest even number in the ans\r\n            even.pop();//popping the used number\r\n        }\r\n        else{//replacing odd with odd\r\n            ans.push(odd[odd.length-1]);//pushing the greatest odd number in the ans\r\n            odd.pop();//popping the used number\r\n        }\r\n    }\r\n    var ans2 = parseInt(ans.join(\"\"));//converting the ans array into an int number\r\n    return ans2;\r\n\r\n};"
  }
}
