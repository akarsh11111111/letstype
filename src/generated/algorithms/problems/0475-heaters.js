export default {
  "id": 475,
  "name": "Heaters",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/heaters",
  "relativeDir": "H/Heaters",
  "slug": "0475-heaters",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 33,
    "python": 27,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 62 ms (Top 96.61%) | Memory: 25.4 MB (Top 58.20%)\r\nclass Solution {\r\npublic:\r\n    //we will assign each house to its closest heater in position(by taking the minimum\r\n    //of the distance between the two closest heaters to the house) and then store the maximum\r\n    //of these differences(since we want to have the same standard radius)\r\n    int findRadius(vector<int>& houses, vector<int>& heaters) {\r\n        sort(heaters.begin(),heaters.end());\r\n        int radius=0;\r\n        for(int house:houses){\r\n            //finding the smallest heater whose position is not greater than\r\n            //the current house\r\n            int index=lower_bound(heaters.begin(),heaters.end(),house)-heaters.begin();\r\n            if(index==heaters.size()){\r\n                index--;\r\n            }\r\n            //the two closest positions to house will be heaters[index] and\r\n            //heaters[index-1]\r\n            int leftDiff=(index-1>=0)?abs(house-heaters[index-1]):INT_MAX;\r\n            int rightDiff=abs(house-heaters[index]);\r\n            radius=max(radius,min(leftDiff,rightDiff));\r\n        }\r\n        return radius;\r\n    }\r\n};",
    "python": "# Runtime: 766 ms (Top 22.98%) | Memory: 17.7 MB (Top 39.36%)\r\nclass Solution:\r\n    def findRadius(self, houses: List[int], heaters: List[int]) -> int:\r\n        \"\"\"\r\n\r\n        \"\"\"\r\n\r\n        houses.sort()\r\n        heaters.sort()\r\n\r\n        max_radius = -inf\r\n\r\n        for house in houses:\r\n            i = bisect_left(heaters, house)\r\n\r\n            if i == len(heaters):\r\n                max_radius = max(max_radius, house - heaters[-1])\r\n            elif i == 0:\r\n                max_radius = max(max_radius, heaters[i] - house)\r\n            else:\r\n                curr = heaters[i]\r\n                prev = heaters[i-1]\r\n                max_radius = max(max_radius,min(abs(house - curr), abs(house-prev)))\r\n\r\n        return max_radius\r\n\r\n    # O(NLOGN)",
    "java": "// Runtime: 15 ms (Top 66.0%) | Memory: 46.54 MB (Top 44.7%)\r\n\r\nclass Solution {\r\n  public boolean can(int r, int[] houses, int[] heaters) {\r\n    int prevHouseIdx = -1;\r\n    for(int i = 0; i < heaters.length; i++) {\r\n      int from = heaters[i]-r;\r\n      int to   = heaters[i]+r;\r\n      for(int j = prevHouseIdx+1; j < houses.length; j++){\r\n        if(houses[j]<=to && houses[j]>=from){\r\n          prevHouseIdx++;\r\n        }\r\n        else break;\r\n      }\r\n      if(prevHouseIdx >= houses.length-1)return true;\r\n    }\r\n    return prevHouseIdx>= houses.length-1;\r\n  }\r\n  public int findRadius(int[] houses, int[] heaters) {\r\n    Arrays.sort(houses);\r\n    Arrays.sort(heaters);\r\n    int lo = 0, hi = 1000000004;\r\n    int mid, ans = hi;\r\n    while(lo <= hi) {\r\n      mid = (lo+hi)/2;\r\n      if(can(mid, houses, heaters)){\r\n        ans = mid;\r\n        hi = mid - 1;\r\n      } else lo = mid + 1;\r\n    }\r\n    return ans;\r\n  }\r\n}",
    "javascript": "var findRadius = function(houses, heaters) {\r\n\thouses.sort((a, b) => a - b);\r\n\theaters.sort((a, b) => a - b);\r\n\tlet heaterPos = 0;\r\n\tconst getRadius = (house, pos) => Math.abs(heaters[pos] - house);\r\n\r\n\treturn houses.reduce((radius, house) => {\r\n\t\twhile (\r\n\t\t\theaterPos < heaters.length &&\r\n\t\t\tgetRadius(house, heaterPos) >= \r\n\t\t\tgetRadius(house, heaterPos + 1)\r\n\t\t) heaterPos += 1;\r\n\r\n\t\tconst currentRadius = getRadius(house, heaterPos);\r\n\t\treturn Math.max(radius, currentRadius);\r\n\t}, 0);\r\n};"
  }
}
