export default {
  "id": 2249,
  "name": "Count Lattice Points Inside a Circle",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-lattice-points-inside-a-circle",
  "relativeDir": "C/Count Lattice Points Inside a Circle",
  "slug": "2249-count-lattice-points-inside-a-circle",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 17,
    "python": 9,
    "javascript": 23
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool circle(int x , int y , int c1 , int c2, int r){\r\n        if((x-c1)*(x-c1) + (y-c2)*(y-c2) <= r*r) \r\n            return true ;\r\n        return false ;\r\n    }\r\n    \r\n    int countLatticePoints(vector<vector<int>>& circles) {\r\n        int n = circles.size() , ans = 0 ;\r\n        set<pair<int,int>> set ;\r\n        for(auto v : circles){\r\n            int r = v[2] , x = v[0] , y = v[1]; \r\n            for(int i = x-r ; i <= x+r ; i++)\r\n                for(int j = y-r ; j <= y+r ; j++)\r\n                    if(circle(i,j,x,y,r)){\r\n                        pair<int,int> p(i,j) ;\r\n                        set.insert(p) ;\r\n                    }\r\n        }\r\n        return set.size() ;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countLatticePoints(self, c: List[List[int]]) -> int:\r\n        ans,m=0,[0]*40401\r\n        c=set(((x,y,r) for x,y,r in c))\r\n        for x, y, r in c:\r\n            for i in range(x-r, x+r+1):\r\n                d=int(sqrt(r*r-(x-i)*(x-i)))\r\n                m[i*201+y-d:i*201+y+d+1]=[1]*(d+d+1)\r\n        return sum(m)",
    "java": "class Solution {\r\n    public int countLatticePoints(int[][] circles) {\r\n        Set<String> answer = new HashSet<String>();\r\n        \r\n        for (int[] c : circles) {\r\n            int x = c[0], y = c[1], r = c[2];\r\n            \r\n            // traversing over all the points that lie inside the smallest square capable of containing the whole circle\r\n            for (int xx = x - r; xx <= x + r; xx++)\r\n                for (int yy = y - r; yy <= y + r; yy++)\r\n                    if ((r * r) >= ((x - xx) * (x - xx)) + ((y - yy) * (y - yy)))\r\n                        answer.add(xx + \":\" + yy);\r\n        }\r\n        \r\n        return answer.size();\r\n    }\r\n}",
    "javascript": "// Runtime: 90 ms (Top 100.0%) | Memory: 44.29 MB (Top 89.4%)\r\n\r\nvar countLatticePoints = function(circles) {\r\n    let minX=minY=Infinity, maxX=maxY=-Infinity;\r\n    for(let i=0; i<circles.length; i++){\r\n        minX=Math.min(minX, circles[i][0]-circles[i][2]); maxX=Math.max(maxX, circles[i][0]+circles[i][2]);\r\n        minY=Math.min(minY, circles[i][1]-circles[i][2]); maxY=Math.max(maxY, circles[i][1]+circles[i][2]);\r\n    }\r\n\t\r\n    let count=0;\r\n    for(let i=minX; i<=maxX; i++){\r\n        for(let j=minY; j<=maxY; j++){\r\n            let find=false;\r\n            for(let k=0; k<circles.length; k++){\r\n                if(((i-circles[k][0])**2+(j-circles[k][1])**2)<=circles[k][2]**2){\r\n                    find=true; break;\r\n                }\r\n            }\r\n            if(find){count++};\r\n        }\r\n    }\r\n    return count;\r\n};"
  }
}
