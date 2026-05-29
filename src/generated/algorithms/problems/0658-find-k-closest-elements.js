export default {
  "id": 658,
  "name": "Find K Closest Elements",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-k-closest-elements",
  "relativeDir": "F/Find K Closest Elements",
  "slug": "0658-find-k-closest-elements",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 20,
    "python": 18,
    "javascript": 13
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    static bool cmp(pair<int,int>&p1,pair<int,int>&p2)\r\n    {\r\n        if(p1.first==p2.first)  //both having equal abs diff\r\n        {\r\n            return p1.second<p2.second;\r\n        }\r\n        return p1.first<p2.first;\r\n    }\r\n    vector<int> findClosestElements(vector<int>& arr, int k, int x) {\r\n        \r\n        vector<pair<int,int>>v;    //abs diff , ele\r\n        \r\n        for(int i=0;i<arr.size();i++)\r\n        {\r\n            v.push_back(make_pair(abs(arr[i]-x),arr[i]));\r\n        }\r\n        \r\n        sort(v.begin(),v.end(),cmp);\r\n        vector<int>ans;\r\n        for(int i=0;i<k;i++)\r\n        {\r\n            ans.push_back(v[i].second);\r\n        }\r\n        sort(ans.begin(),ans.end());\r\n        return ans;   \r\n    }\r\n};",
    "python": "class Solution:\r\n    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:\r\n        \r\n        def sorted_distance(value, static_input = x):\r\n            return abs(value - static_input)\r\n        \r\n        distances = []\r\n        result = []\r\n        heapq.heapify(distances)\r\n        \r\n        for l,v in enumerate(arr):\r\n            distances.append((l, sorted_distance(value = v)))\r\n        \r\n        for i in heapq.nsmallest(k, distances, key = lambda x: x[1]):\r\n            result.append(arr[i[0]])\r\n        \r\n        result.sort()\r\n        return result",
    "java": "// Runtime: 13 ms (Top 41.96%) | Memory: 62.2 MB (Top 71.32%)\r\nclass Solution {\r\npublic List<Integer> findClosestElements(int[] arr, int k, int x) {\r\n    List<Integer> result = new ArrayList<>();\r\n\r\n    int low = 0, high = arr.length -1;\r\n\r\n    while(high - low >= k){\r\n        if(Math.abs(arr[low] - x) > Math.abs(arr[high] - x))\r\n            low++;\r\n        else\r\n            high--;\r\n    }\r\n\r\n    for(int i = low; i <= high; i++)\r\n        result.add(arr[i]);\r\n\r\n    return result;\r\n}\r\n}",
    "javascript": "var findClosestElements = function(arr, k, x) {\r\n\tconst result = [...arr];\r\n\r\n\twhile (result.length > k) {\r\n\t\tconst start = result[0];\r\n\t\tconst end = result.at(-1);\r\n\r\n\t\tx - start <= end - x \r\n\t\t\t? result.pop() \r\n\t\t\t: result.shift();\r\n\t}\r\n\treturn result;\r\n};"
  }
}
