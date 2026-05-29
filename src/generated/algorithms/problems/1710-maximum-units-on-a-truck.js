export default {
  "id": 1710,
  "name": "Maximum Units on a Truck",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-units-on-a-truck",
  "relativeDir": "M/Maximum Units on a Truck",
  "slug": "1710-maximum-units-on-a-truck",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 13,
    "python": 10
  },
  "languages": {
    "cpp": "// Runtime: 128 ms (Top 29.33%) | Memory: 17.1 MB (Top 36.21%)\r\nclass Solution {\r\npublic:\r\n    static bool myfunction(vector<int>& a, vector<int>& b){\r\n        return a[1] > b[1];\r\n    }\r\n    int maximumUnits(vector<vector<int>>& boxTypes, int truckSize) {\r\n        //custom sort (in increasing order of numberOfUnitsPerBox as we have to return maximum total number of units )\r\n        sort(boxTypes.begin(),boxTypes.end(),myfunction);\r\n        //greedily pick boxes till capacity is full\r\n        int ans=0;\r\n        for(auto box: boxTypes){\r\n            int x=min(box[0],truckSize); //choose minimum boxes from available boxes and capacity left\r\n            ans+=(x*box[1]); //adding units in ans\r\n            truckSize-=x; //reduce the capacity\r\n            if(!truckSize) break; //capacity full\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maximumUnits(self, B: List[List[int]], T: int) -> int:\r\n        B.sort(key=lambda x: x[1], reverse=True)\r\n        ans = 0\r\n        for b,n in B:\r\n            boxes = min(b, T)\r\n            ans += boxes * n\r\n            T -= boxes\r\n            if T == 0: return ans\r\n        return ans",
    "java": "class Solution {\r\n\tpublic int maximumUnits(int[][] boxTypes, int truckSize) {\r\n\t\tArrays.sort(boxTypes, Comparator.comparingInt(o -> -o[1]));\r\n\t\tint ans = 0, i = 0, n = boxTypes.length;\r\n\t\twhile (i < n && truckSize > 0) {\r\n\t\t\tint maxi = Math.min(boxTypes[i][0], truckSize);\r\n\t\t\tans += maxi * boxTypes[i][1];\r\n\t\t\ti++;\r\n\t\t\ttruckSize -= maxi;\r\n\t\t}\r\n\t\treturn ans;\r\n\t}\r\n}"
  }
}
