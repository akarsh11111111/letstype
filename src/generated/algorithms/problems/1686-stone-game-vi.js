export default {
  "id": 1686,
  "name": "Stone Game VI",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/stone-game-vi",
  "relativeDir": "S/Stone Game VI",
  "slug": "1686-stone-game-vi",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 46,
    "java": 58,
    "python": 7,
    "javascript": 28
  },
  "languages": {
    "cpp": "// Runtime: 1085 ms (Top 9.58%) | Memory: 129.1 MB (Top 30.29%)\r\nvector<int> alice, bob;\r\n\r\nstruct myComp {\r\n  bool operator()(pair<int, int>& a, pair<int, int>& b){\r\n      return alice[a.second] + bob[a.second] < alice[b.second] + bob[b.second];\r\n  }\r\n};\r\n\r\nclass Solution {\r\npublic:\r\n    int stoneGameVI(vector<int>& aliceValues, vector<int>& bobValues) {\r\n        alice = aliceValues;\r\n        bob = bobValues;\r\n        priority_queue<pair<int, int>, vector<pair<int, int>>, myComp> a,b;\r\n\r\n        for(int i=0;i<aliceValues.size();i++){\r\n            a.push({aliceValues[i], i});\r\n            b.push({bobValues[i], i});\r\n        }\r\n\r\n        int ans1, ans2;\r\n        ans1 = ans2 = 0;\r\n        int vis[100001] = {};\r\n\r\n        while(a.size()){\r\n            while(a.size() && vis[a.top().second] == 1) a.pop();\r\n            if(a.size()){\r\n                ans1 += a.top().first;\r\n                vis[a.top().second] = 1;\r\n                a.pop();\r\n            }\r\n\r\n            while(b.size() && vis[b.top().second] == 1) b.pop();\r\n            if(b.size()){\r\n                ans2 += b.top().first;\r\n                vis[b.top().second] = 1;\r\n                b.pop();\r\n            }\r\n        }\r\n\r\n        if(ans1 == ans2) return 0;\r\n        if(ans1 > ans2) return 1;\r\n        return -1;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def stoneGameVI(self, A, B):\r\n        G  = [a+b for a,b in zip(A,B)]\r\n        G.sort()\r\n        L  = len(A)\r\n        d  = -sum(B) + sum( G[i] for i in range(L-1,-1,-2) )\r\n        return 1 if d>0 else ( -1 if d<0 else 0 )",
    "java": "class Solution \r\n{\r\nstatic class Pair\r\n{\r\n        int sum=0;\r\n        int alice=0;\r\n        int bob=0;\r\n    public Pair(int sum,int alice, int bob)\r\n{\r\n    this.sum=sum;\r\n\tthis.alice = alice;\r\n\tthis.bob = bob;\r\n}\r\n}\r\n\r\n// class to define user defined conparator\r\nstatic class Compare {\r\n\t\r\n\tstatic  void compare(Pair arr[], int n)\r\n\t{\r\n\t\t// Comparator to sort the pair according to second element\r\n\t\tArrays.sort(arr, new Comparator<Pair>() {\r\n\t\t\t@Override public int compare(Pair p1, Pair p2)\r\n\t\t\t{\r\n\t\t\t\treturn p2.sum - p1.sum;\r\n\t\t\t}\r\n\t\t});\r\n\t\t\r\n\t\t\r\n\t}\r\n}\r\n    public int stoneGameVI(int[] aliceValues, int[] bobValues)\r\n    {\r\n        int n=aliceValues.length;\r\n        Pair[] a=new Pair[n];\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            a[i]=new Pair(aliceValues[i]+bobValues[i],aliceValues[i],bobValues[i]);\r\n        }\r\n        Compare.compare(a,n);\r\n         int al=0;int bo=0;\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            if(i%2==0)\r\n            {\r\n                al+=a[i].alice;\r\n            }\r\n            else\r\n            {\r\n                bo+=a[i].bob;\r\n            }\r\n        }\r\n        return Integer.compare(al,bo);\r\n    \r\n    \r\n    \r\n    }\r\n}",
    "javascript": "// Runtime: 135 ms (Top 100.00%) | Memory: 65.6 MB (Top 100.00%)\r\n\r\nvar stoneGameVI = function(aliceValues, bobValues) {\r\n    let aliceVal = 0\r\n    let bobVal = 0\r\n    let turn = true\r\n    const combined = {}\r\n    let n = aliceValues.length\r\n    for (let i = 0; i < n; i++) {\r\n        if (combined[aliceValues[i] + bobValues[i]]) {\r\n            combined[aliceValues[i] + bobValues[i]].push({value: aliceValues[i] + bobValues[i], id: i})\r\n        } else {\r\n            combined[aliceValues[i] + bobValues[i]] = [{value: aliceValues[i] + bobValues[i], id: i}]\r\n        }\r\n    }\r\n    Object.values(combined).reverse().forEach((value) => {\r\n        value.forEach(val => {\r\n            if (turn) {\r\n                aliceVal += aliceValues[val.id]\r\n            } else {\r\n                bobVal += bobValues[val.id]\r\n            }\r\n            turn = !turn\r\n        })\r\n    })\r\n    if (aliceVal === bobVal) return 0\r\n    return aliceVal > bobVal ? 1 : -1\r\n};"
  }
}
