export default {
  "id": 825,
  "name": "Friends Of Appropriate Ages",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/friends-of-appropriate-ages",
  "relativeDir": "F/Friends Of Appropriate Ages",
  "slug": "0825-friends-of-appropriate-ages",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 25,
    "python": 36,
    "javascript": 25
  },
  "languages": {
    "cpp": "// Runtime: 260 ms (Top 5.36%) | Memory: 37.1 MB (Top 100.00%)\r\nclass Solution {\r\npublic:\r\n    int numFriendRequests(vector<int>& ages) {\r\n        sort(ages.begin(), ages.end());\r\n        int sum = 0;\r\n        for (int i=ages.size()-1; i>=0; i--) {\r\n            int cutoff = 0.5f * ages[i] + 7;\r\n            int j = upper_bound(ages.begin(), ages.end(), cutoff) - ages.begin();\r\n            int k = upper_bound(ages.begin(), ages.end(), ages[i]) - ages.begin();\r\n            sum += max(0, k-j-1);\r\n        }\r\n        return sum;\r\n    }\r\n};",
    "python": "# Runtime: 936 ms (Top 28.73%) | Memory: 14.9 MB (Top 52.36%)\r\nclass Solution:\r\n    \"\"\"\r\n    approach:\r\n    we can try solving this problem by finding the valid age group for each age\r\n    sort the array in descending order\r\n    iterate from right to left\r\n    for current age, find the valid agegroup to which the current age person will send a request\r\n    we can use binary search for that\r\n    if current age is x, then valid age group to send a request is:\r\n    x*0.5 + 7 < age(y) <= x\r\n    we can find the left limit using binary search\r\n    \"\"\"\r\n    def binary_search(self, arr, low, high, value):\r\n        if low > high:\r\n            return high\r\n        mid = (low + high) // 2\r\n        if arr[mid] > value:\r\n            return self.binary_search(arr, low, mid-1, value)\r\n        else:\r\n            return self.binary_search(arr, mid+1, high, value)\r\n\r\n    def numFriendRequests(self, ages: List[int]) -> int:\r\n        ages = sorted(ages)\r\n        total_count = 0\r\n        for i in range(len(ages)-1, -1, -1):\r\n            if i+1 < len(ages) and ages[i] == ages[i+1]:\r\n                total_count+= prev_count\r\n                continue\r\n\r\n            prev_count = 0\r\n            lower_limit = 0.5 * ages[i] + 7\r\n            index = self.binary_search(ages, 0, i-1, lower_limit)\r\n            prev_count = i - (index+1)\r\n            total_count+=prev_count\r\n        return total_count",
    "java": "class Solution {\r\n    static int upperBound(int arr[], int target) {\r\n        int l = 0, h = arr.length - 1;\r\n        for (; l <= h;) {\r\n            int mid = (l + h) >> 1;\r\n            if (arr[mid] <= target)\r\n                l = mid + 1;\r\n            else\r\n                h = mid - 1;\r\n        }\r\n        return l;\r\n    }\r\n    public int numFriendRequests(int[] ages) {\r\n        long ans = 0;\r\n        Arrays.sort(ages);\r\n\t\t// traversing order doesn't matter as we are doing binary-search in whole array\r\n\t\t// you can traverse from left side also\r\n        for(int i = ages.length - 1;i >= 0;--i){\r\n            int k = upperBound(ages,ages[i] / 2 + 7);\r\n            int t = upperBound(ages,ages[i]);\r\n            ans += Math.max(0,t - k - 1);\r\n        }\r\n        return (int)ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 83 ms (Top 95.24%) | Memory: 46.2 MB (Top 100.00%)\r\nvar numFriendRequests = function(ages) {\r\n    const count = new Array(121).fill(0);\r\n\r\n    ages.forEach((age) => count[age]++);\r\n\r\n    let res = 0; // total friend request sent\r\n    let tot = 0; // cumulative count of people so far\r\n\r\n    for (let i = 0; i <= 120; i++) {\r\n\r\n        if (i > 14 && count[i] != 0) {\r\n            const limit = Math.floor(0.5 * i) + 7;\r\n            const rest = tot - count[limit];\r\n\r\n            res += (count[i] * rest); // current age group send friend request to other people who are within their limit\r\n            res += (count[i] * (count[i] - 1)); // current age group send friend request to each other\r\n        }\r\n\r\n        tot += count[i];\r\n        count[i] = tot;\r\n    }\r\n\r\n    return res;\r\n};"
  }
}
