export default {
  "id": 1109,
  "name": "Corporate Flight Bookings",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/corporate-flight-bookings",
  "relativeDir": "C/Corporate Flight Bookings",
  "slug": "1109-corporate-flight-bookings",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 53,
    "python": 10,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 339 ms (Top 60.98%) | Memory: 67.8 MB (Top 76.72%)\r\nclass Solution {\r\npublic:\r\n    vector<int> corpFlightBookings(vector<vector<int>>& bookings, int n) {\r\n        vector<int> arr(n);\r\n        for (const auto& b : bookings) {\r\n            int start = b[0] - 1, end = b[1], seats = b[2];\r\n            arr[start] += seats;\r\n            if (end < n) {\r\n                arr[end] -= seats;\r\n            }\r\n        }\r\n        partial_sum(begin(arr), end(arr), begin(arr));\r\n        return arr;\r\n    }\r\n};",
    "python": "class Solution:\r\n\tdef corpFlightBookings(self, bookings: List[List[int]], n: int) -> List[int]:\r\n\r\n\t\tflights = [0]*n\r\n\t\tfor start,end,seats in bookings:\r\n\t\t\tflights[start-1] += seats\r\n\t\t\tif end < n: flights[end] -= seats\r\n\t\tfor i in range(n-1):\r\n\t\t\tflights[i+1] += flights[i]\r\n\t\treturn flights",
    "java": "class Solution {\r\n    public int[] corpFlightBookings(int[][] bookings, int n) {\r\n        // nums all equals to zero\r\n        int[] nums = new int[n];\r\n        // construct the diffs\r\n        Difference df = new Difference(nums);\r\n\r\n        for (int[] booking : bookings) {\r\n            // pay attention to the index\r\n            int i = booking[0] - 1;\r\n            int j = booking[1] - 1;\r\n            int val = booking[2];\r\n            // increase nums[i..j] by val\r\n            df.increment(i, j, val);\r\n        }\r\n        // return the final array\r\n        return df.result();\r\n    }\r\n\r\n    class Difference {\r\n        // diff array\r\n        private int[] diff;\r\n\r\n        public Difference(int[] nums) {\r\n            assert nums.length > 0;\r\n            diff = new int[nums.length];\r\n            // construct the diffs\r\n            diff[0] = nums[0];\r\n            for (int i = 1; i < nums.length; i++) {\r\n                diff[i] = nums[i] - nums[i - 1];\r\n            }\r\n        }\r\n\r\n        // increase nums[i..j] by val\r\n        public void increment(int i, int j, int val) {\r\n            diff[i] += val;\r\n            if (j + 1 < diff.length) {\r\n                diff[j + 1] -= val;\r\n            }\r\n        }\r\n\r\n        public int[] result() {\r\n            int[] res = new int[diff.length];\r\n            // contract the diff array based on the result\r\n            res[0] = diff[0];\r\n            for (int i = 1; i < diff.length; i++) {\r\n                res[i] = res[i - 1] + diff[i];\r\n            }\r\n            return res;\r\n        }\r\n    }\r\n\r\n}",
    "javascript": "var corpFlightBookings = function(bookings, n) {\r\n    \r\n    // +1 as dummy guard on the tail, which allow us not to check right boundary every time\r\n    let unitStep = Array(n+1).fill(0);\r\n    \r\n    for(const [first, last, seatVector ] of bookings ){\r\n        \r\n        // -1 because booking flight is 1-indexed, given by description\r\n        let [left, right] = [first-1, last-1];\r\n        \r\n        unitStep[ left ] += seatVector;\r\n        unitStep[ right+1 ] -= seatVector;\r\n    }\r\n    \r\n    // Reconstruct booking as drawing combination of retangle signal, built with unit step impulse\r\n    for( let i = 1; i < unitStep.length ; i++ ){\r\n        unitStep[ i ] += unitStep[ i-1 ];\r\n    }\r\n    \r\n    \r\n    // last one is dummy guard on the tail, no need to return\r\n    return unitStep.slice(0, n);\r\n};"
  }
}
