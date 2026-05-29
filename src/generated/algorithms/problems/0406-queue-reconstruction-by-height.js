export default {
  "id": 406,
  "name": "Queue Reconstruction by Height",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/queue-reconstruction-by-height",
  "relativeDir": "Q/Queue Reconstruction by Height",
  "slug": "0406-queue-reconstruction-by-height",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 41,
    "java": 16,
    "python": 17,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 24 ms (Top 88.43%) | Memory: 12.10 MB (Top 82.86%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<int> BIT;\r\n    int n;\r\n    vector<vector<int>> reconstructQueue(vector<vector<int>>& people) {\r\n        n = people.size();\r\n        BIT = vector<int>(n+1, 0); //BIT[i+1] recorded the res[i] information because BIT[0] is not used.\r\n        for(int i = 2; i <= n; i++) update(i, 1);  // BIT[1] is the 0th empty position, so we didn't add 1\r\n        sort(people.begin(), people.end(), cmp);\r\n        vector<vector<int>> res(n, vector<int>());\r\n        for(int i = 0; i < n; i++){\r\n            int l=0, r=n;\r\n            while(l<r){\r\n                int mid=l+(r-l)/2;\r\n                if(getsum(mid+1)<people[i][1]) l=mid+1; // we need get the index mid empty information, but actually it's stored in BIT[mid+1]\r\n                else r=mid;\r\n            }\r\n            res[l]=people[i];\r\n            update(l+1, -1);\r\n        }\r\n        return res;\r\n    }\r\n    void update(int x, int v){\r\n        for(int i = x; i <= n; i+=(i&-i)){\r\n            BIT[i]+=v;\r\n        }\r\n    }\r\n    int getsum(int x){\r\n        int sum=0;\r\n        for(int i = x; i > 0; i-=(i&-i)){\r\n            sum += BIT[i];\r\n        }\r\n        return sum;\r\n    }\r\n    static bool cmp(vector<int>& p1, vector<int>& p2){\r\n        if(p1[0]!=p2[0]) return p1[0]<p2[0];\r\n        else return p1[1]>p2[1];\r\n    }\r\n};",
    "python": "class Solution:\r\n\tdef reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:\r\n\t\tn = len(people)\r\n\t\tpeople.sort()\r\n\t\tans = [[]]*n\r\n\t\ti = 0\r\n\t\twhile people:\r\n\t\t\th,p = people.pop(0)\r\n\t\t\tcount= p\r\n\t\t\tfor i in range(n):\r\n\t\t\t\tif count== 0 and ans[i] == []:\r\n\t\t\t\t\tans[i] = [h,p]\r\n\t\t\t\t\tbreak\r\n\r\n\t\t\t\telif not ans[i] or (ans[i] and ans[i][0] >= h ):\r\n\t\t\t\t\tcount -= 1\r\n\t\treturn ans",
    "java": "// Runtime: 9 ms (Top 81.09%) | Memory: 53.8 MB (Top 84.02%)\r\nclass Solution {\r\n    public int[][] reconstructQueue(int[][] people) {\r\n        List<int[]> result = new ArrayList<>(); //return value\r\n\r\n        Arrays.sort(people, (a, b) -> {\r\n            int x = Integer.compare(b[0], a[0]);\r\n            if(x == 0) return Integer.compare(a[1], b[1]);\r\n            else return x; });\r\n\r\n        for(int[] p: people)\r\n            result.add(p[1], p);\r\n\r\n        return result.toArray(new int[people.length][2]);\r\n    }\r\n}",
    "javascript": "// Runtime: 205 ms (Top 17.71%) | Memory: 48 MB (Top 33.33%)\r\nvar reconstructQueue = function(people) {\r\n    var queue = new Array(people.length);\r\n    people = people.sort((a,b) => (a[0]-b[0]));\r\n    for(let i =0;i<people.length;i++){\r\n        let count = 0;\r\n        for(let j= 0;j<queue.length;j++){\r\n            if(!queue[j]){\r\n                if(count == people[i][1]){\r\n                    queue[j] = people[i];\r\n                    break;\r\n                }\r\n                count++;\r\n            }\r\n            else if( queue[j][0] >= people[i][0]){\r\n                count++;\r\n            }\r\n        }\r\n    }\r\n    return queue;\r\n};"
  }
}
