export default {
  "id": 2094,
  "name": "Finding 3-Digit Even Numbers",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/finding-3-digit-even-numbers",
  "relativeDir": "F/Finding 3-Digit Even Numbers",
  "slug": "2094-finding-3-digit-even-numbers",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 53,
    "python": 16
  },
  "languages": {
    "cpp": "class Solution {\r\n public:\r\n  vector<int> findEvenNumbers(vector<int>& digits) {\r\n    // generating frequency map of the given digits\r\n    vector<int> count(10, 0);\r\n    for (auto& d : digits) count[d]++;\r\n\r\n    vector<int> res;\r\n\r\n    for (int num = 100; num < 999; num += 2) {\r\n      // generating frequency map of the current number\r\n      vector<int> currCount(10, 0);\r\n      int temp = num;\r\n\r\n      while (temp) {\r\n        currCount[temp % 10]++;\r\n        temp /= 10;\r\n      }\r\n\r\n      // checking if the number can be generated or not\r\n      bool flag = true;\r\n      for (int i = 0; i < 10; i++) {\r\n        if (currCount[i] > count[i]) {\r\n          flag = false;\r\n          break;\r\n        }\r\n      }\r\n\r\n      if (flag) {\r\n        res.push_back(num);\r\n      }\r\n    }\r\n    return res;\r\n  }\r\n};",
    "python": "class Solution:\r\n    def findEvenNumbers(self, digits: List[int]) -> List[int]:\r\n        hmap, res = defaultdict(int), []\r\n        for num in digits:\r\n            hmap[num] += 1   #counting frequency of digits of digits array\r\n        \r\n        for num in range(100, 999, 2):  #step 2 because we need even numbers\r\n            checker = defaultdict(int)\r\n            for digit in str(num):\r\n                checker[int(digit)] += 1    #counting frequency of digits of num\r\n            \r\n\t\t\t#check if every digit in num is in digits array and its frequency is less than or equal to its frequency in digits array\r\n            if all(map(lambda x: x in hmap and checker[x] <= hmap[x], checker)):\r\n                res.append(num)\r\n        \r\n        return res",
    "java": "/*\r\n\r\nAs we know that we want unique numbers of 3 digits only that too only even.  so first we \r\ngather the frequency of all the digits we have, then we iterate from 100 to 999 ( all possible 3 digits numbers, 100,102,104...\r\nall possible even 3 digit numbers).  for ex  we are iterating and we are\r\nat 104  so we will see that if we have  digits\r\n1,0,4 in our database if yes then we can make this number from our\r\navailable digits given to us.\r\n\r\n\r\nTime complexity : O(digits.length)  // due to making of frequency map\r\nSpace Complexity : O(1) //fixed map array space for digits 0 to 9\r\n*/\r\n\r\nclass Solution {\r\n    public int[] findEvenNumbers(int[] digits) {\r\n        int [] map = new int[10]; // for freq of 0 to 9 (digits are fixed)\r\n        \r\n        for(int i = 0;i<digits.length;i++){ //make a frequency map of digits\r\n            map[digits[i]]++;\r\n        }\r\n        \r\n        List<Integer> arr = new ArrayList<>();\r\n        \r\n        for(int i = 100;i<=999;i = i + 2){ //will always runs from 100 to 999 \r\n            int num = i;\r\n            int [] freq = new int[10];\r\n            while(num > 0){  // will always run 3 times\r\n                int rem = num % 10;\r\n                freq[rem]++;\r\n                num = num/10;\r\n            }\r\n            \r\n            boolean res = findans(freq,map);\r\n            if(res) arr.add(i);\r\n        }\r\n        \r\n        int [] ans = new int[arr.size()]; //logic for arraylist to array conversion\r\n        for(int i = 0;i<arr.size();i++){ // at max we can have all num from 100 to 998 only\r\n            ans[i] = arr.get(i);\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n    \r\n    private boolean findans(int [] currentNum,int [] database){\r\n        \r\n        for(int i = 0;i<10;i++){  //it will always run for at max 10 times\r\n            if(currentNum[i] > database[i]) return false;\r\n        }\r\n        return true;\r\n    }\r\n}"
  }
}
