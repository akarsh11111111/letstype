export default {
  "id": 973,
  "name": "K Closest Points to Origin",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/k-closest-points-to-origin",
  "relativeDir": "K/K Closest Points to Origin",
  "slug": "0973-k-closest-points-to-origin",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 35,
    "python": 43,
    "javascript": 28
  },
  "languages": {
    "cpp": "// Runtime: 470 ms (Top 43.73%) | Memory: 66.6 MB (Top 60.32%)\r\nclass Solution {\r\npublic:\r\n    vector<vector<int>> kClosest(vector<vector<int>>& points, int k)\r\n    {\r\n        //max heap\r\n        priority_queue<pair<int,pair<int,int>>> pq;//first integer is distance(no need for sq root as comparison is same and next part of pair is coordinate\r\n        int n= points.size();\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            int dist=(points[i][0]*points[i][0]+points[i][1]*points[i][1]);\r\n            pq.push({dist, {points[i][0],points[i][1]}});\r\n            if(pq.size()>k)\r\n                pq.pop();\r\n        }\r\n        vector<vector<int>> ans;\r\n        while(!pq.empty())\r\n        {\r\n            vector<int> temp={(pq.top().second.first),pq.top().second.second};\r\n            ans.push_back(temp);\r\n            pq.pop();\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 2003 ms (Top 6.82%) | Memory: 20.5 MB (Top 21.33%)\r\n\r\ndef cal(ele):\r\n    return ele[0]**2 +ele[1]**2\r\n\r\ndef partition(arr,start,end):\r\n    # We must take a pivot element randomly to make Quick select work faster\r\n    rdIdx = randint(start,end)\r\n    arr[rdIdx],arr[end] = arr[end],arr[rdIdx]\r\n    pivot = arr[end]\r\n    i = start-1\r\n    pivot_dis = cal(pivot)\r\n    for j in range(start,end):\r\n        if cal(arr[j]) <= pivot_dis:\r\n            i+=1\r\n            arr[j],arr[i] = arr[i],arr[j]\r\n\r\n    arr[i+1],arr[end] = arr[end],arr[i+1]\r\n    return i+1\r\ndef qSelect(arr,kth,start,end):\r\n    if start < end:\r\n        pv= partition(arr,start,end)\r\n        # _______________________\r\n        # | Left |ele| Right|\r\n        # ------------------------\r\n        # pv\r\n        # after partition function call, pv is the index that sacrify:\r\n        # all elements in Left will smaller than ele\r\n        # all elements in Right side will greater than ele\r\n        if pv == kth:#\r\n            return\r\n        if kth < pv:\r\n            return qSelect(arr,kth,start,pv-1)\r\n        else:\r\n            return qSelect(arr,kth,pv+1,end)\r\n# Space O (logn) because of using recursion\r\n# Time: Average case: O(N)\r\n# Worst case: O(N**2)\r\nclass Solution:\r\n    def kClosest(self, points, k):\r\n        # print(points)\r\n        qSelect(points,k-1,0,len(points)-1)# kth smallest number will be at (k-1) index in sorted array\r\n        return points[:k]",
    "java": "class Solution {\r\n    static class Distance {\r\n        int i;\r\n        int j;\r\n        double dist;\r\n\r\n        public Distance(int i, int j, double dist) {\r\n            this.i = i;\r\n            this.j = j;\r\n            this.dist = dist;\r\n        }\r\n    }\r\n\r\n    public int[][] kClosest(int[][] points, int k) {\r\n        PriorityQueue<Distance> pq = new PriorityQueue<>((x,y) -> Double.compare(x.dist, y.dist));\r\n        for(int[] point : points) {\r\n            double dist = calcDistance(point[0], point[1]);\r\n            pq.offer(new Distance(point[0], point[1], dist));\r\n        }\r\n        int cnt = 0;\r\n        ArrayList<int[]> l = new ArrayList<>();\r\n        while(cnt < k) {\r\n            Distance d = pq.poll();\r\n            l.add(new int[]{d.i, d.j});\r\n            cnt++;\r\n        }\r\n        int[][] res = l.toArray(new int[l.size()][]);\r\n        return res;\r\n    }\r\n\r\n    private double calcDistance(int i, int j) {\r\n       double dist = Math.sqrt(Math.pow(i,2) + Math.pow(j,2));\r\n       return dist;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[][]} points\r\n * @param {number} k\r\n * @return {number[][]}\r\n */\r\nvar kClosest = function(points, k) {\r\n    let res = [];\r\n    let hashMap = new Map();\r\n    for(let i = 0; i < points.length; i++) {\r\n\t\t//store the distance and the index of the points in a map\r\n        const dis = calcDis(points[i]);\r\n        hashMap.set(i, dis);\r\n    }\r\n\t//sort the map by its distance to the origin\r\n    const hashMapNew = new Map([...hashMap].sort((a,b) => a[1] - b[1]));\r\n\t//use the index sorted by distance to get the result\r\n    let i = 0;\r\n    for(const x of hashMapNew.keys()) {\r\n\t\t//do it k times\r\n        if(i === k) break;\r\n        res.push(points[x]);\r\n        i++;\r\n    }\r\n    return res;\r\n};\r\nvar calcDis = (b) => {\r\n    return Math.sqrt( Math.pow(b[0], 2) + Math.pow(b[1], 2) );\r\n}"
  }
}
