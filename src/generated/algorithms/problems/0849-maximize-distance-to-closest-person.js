export default {
  "id": 849,
  "name": "Maximize Distance to Closest Person",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximize-distance-to-closest-person",
  "relativeDir": "M/Maximize Distance to Closest Person",
  "slug": "0849-maximize-distance-to-closest-person",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 26,
    "python": 19,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 99.28%) | Memory: 17.6 MB (Top 26.54%)\r\nclass Solution {\r\npublic:\r\n    int maxDistToClosest(vector<int>& seats) {\r\n        vector<int> d;\r\n        int cnt = -1, ans = 0;\r\n\r\n        for(int i=0; i<seats.size(); i++) {\r\n            cnt++;\r\n            if(seats[i]) d.push_back(cnt), cnt = 0;\r\n        }\r\n        d.push_back(cnt);\r\n\r\n        for(int i=0; i<d.size(); i++) {\r\n            if(i > 0 && i < d.size() - 1) d[i] /= 2;\r\n            ans = max(ans, d[i]);\r\n        }\r\n\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxDistToClosest(self, seats: List[int]) -> int:\r\n        # strategy is greedy solution:\r\n        # calculate local maximum for each interval: (b-a)//2\r\n        # then take max of local maximums\r\n        # the solution is O(n)\r\n        # I find this solution clear, but uses 5 passes\r\n        \r\n        # get all the occupied seat nums\r\n        seat_nums = [ix for ix, val in enumerate(seats) if val == 1]\r\n        \r\n        # check the ends\r\n        left_max, right_max = min(seat_nums), len(seats)-max(seat_nums)-1\r\n        \r\n        # calculate max distance for each gap\r\n        dists = [(y-x)//2 for x, y in zip(seat_nums, seat_nums[1:])]\r\n        \r\n        # take max of sitting on either end + each gap\r\n        return max([left_max, right_max, *dists])",
    "java": "// Runtime: 12 ms (Top 6.92%) | Memory: 49.9 MB (Top 21.03%)\r\n\r\nclass Solution {\r\n    public int maxDistToClosest(int[] seats) {\r\n        int size = seats.length;\r\n        int max = 0;\r\n        int start = -1;\r\n        int end = -1;\r\n\r\n        for(int i = 0; i<size; i++){\r\n            if(seats[i] != 0){\r\n                start = end; // update start to end when we have a filled seat.\r\n                end = i; // update end with i pointer when we have a filled seat.\r\n                if(start == -1) max = i; // for special case when there is only '1' in the array\r\n                else max = Math.max((end-start)/2,max); // updating max.\r\n            }\r\n        }\r\n\r\n        // Handeling speical cases before returning max.\r\n        // 1) last element is 0 as we wont be updating max for that in above loop.\r\n        // 2) when there only single '1' in the array, we need to make sure whether right half is bigger than the left half.\r\n\r\n        if(seats[size - 1] == 0 || start == -1) return Math.max(max, (size - 1 - end));\r\n        return max;\r\n    }\r\n}",
    "javascript": "// Runtime: 89 ms (Top 61.86%) | Memory: 45.8 MB (Top 18.64%)\r\n/**\r\n * @param {number[]} seats\r\n * @return {number}\r\n */\r\nvar maxDistToClosest = function(seats) {\r\n    let arr = seats.join('').split('1');\r\n    for(let i = 0; i < arr.length;i++){\r\n        if(arr[i] == '')\r\n            arr[i] = 0;\r\n        else{\r\n            let middle = true;\r\n            if(i == 0 || i == arr.length-1){\r\n                arr[i] = arr[i].length;\r\n            }else {\r\n                arr[i] = Math.ceil(arr[i].length/2);\r\n            }\r\n        }\r\n    }\r\n    return arr.sort((a,b) => (a >= b)?-1:1)[0]\r\n};"
  }
}
