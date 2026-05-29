export default {
  "id": 765,
  "name": "Couples Holding Hands",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/couples-holding-hands",
  "relativeDir": "C/Couples Holding Hands",
  "slug": "0765-couples-holding-hands",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 24,
    "python": 14,
    "javascript": 54
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tint minSwapsCouples(vector<int>& row) {\r\n\t\tint cnt=0,n=row.size();\r\n\t\t// first of all making row element equal  ex for [0,1],[2,3] --> [0,0] ,[2,2]\r\n\t\tfor(auto &x : row){\r\n\t\t\tif(x&1){\r\n\t\t\t\tx--;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tfor( int i=0; i<n; i+=2){\r\n\t\t\tint ele=row[i];\r\n\t\t\tint j=i+1;\r\n\t\t\t// for every num find location of equal one,\r\n\t\t\twhile(j<n and row[j]!=ele) j++;\r\n\t\t\tif(j!=i+1){\r\n\t\t\t\t\t\t// not in same couch then cnt++ , and swap\r\n\t\t\t\tswap(row[j], row[i+1]);\r\n\t\t\t\tcnt++;\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn cnt;\r\n\t}\r\n};",
    "python": "// Runtime: 35 ms (Top 84.03%) | Memory: 17.30 MB (Top 39.5%)\r\n\r\nclass Solution:\r\n    def minSwapsCouples(self, row: List[int]) -> int:\r\n        loc = {x: i for i, x in enumerate(row)}\r\n        ans = 0\r\n        for i in range(0, len(row), 2): \r\n            p = row[i] - 1 if row[i]&1 else row[i]+1\r\n            if row[i+1] != p: \r\n                ans += 1\r\n                ii = loc[p]\r\n                loc[row[i+1]], loc[row[ii]] = loc[row[ii]], loc[row[i+1]] # swap mappings\r\n                row[i+1], row[ii] = row[ii], row[i+1] # swap values \r\n        return ans",
    "java": "class Solution {\r\n    public int minSwapsCouples(int[] row) { // Union -Find pairs for 2\r\n        Map<Integer,Integer> parents=new HashMap<>();\r\n        int count=0;\r\n        for(int i=0;i<row.length;i+=2){\r\n            int parent=Math.min(row[i],row[i+1]);\r\n            int child=Math.max(row[i],row[i+1]);\r\n            parents.put(parent,child);\r\n        }\r\n        for(int i=0;i<row.length;i+=2){\r\n            if((parents.containsKey(i) && parents.get(i)==(i+1)) \r\n               || (parents.containsKey(i-1) && parents.get(i-1)==i))\r\n                continue;\r\n            count+=1;\r\n            int curChild=parents.get(i);\r\n            int correctChildsChild = parents.get(i+1);\r\n            parents.remove(i+1); // remove mapping of 1 in eg) //0,2 ; 1,3\r\n            parents.put(Math.min(curChild,correctChildsChild),Math.max(curChild,correctChildsChild));\r\n            // add mapping 2->7 , also place smaller number as parent for eg)//0,4 ; 1,3\r\n            parents.put(i,i+1);\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 144 ms (Top 6.45%) | Memory: 44.9 MB (Top 6.45%)\r\n/**\r\n * @param {number[]} row\r\n * @return {number}\r\n */\r\nvar minSwapsCouples = function(row) {\r\n    let currentPositions = [];\r\n\r\n    for(let i=0;i<row.length;i++){\r\n        currentPositions[row[i]]=i;\r\n    }\r\n\r\n    let swapCount = 0;\r\n\r\n     for(let j=0;j<row.length;j+=2) // Looping through the couches\r\n         {\r\n\r\n    let leftPartner = row[j];\r\n    let correctRightPartner = getPartner(leftPartner);\r\n        if(row[j+1] !== correctRightPartner)\r\n        {\r\n            console.log(\"unhappy\");\r\n            //Swap Positions of positions - Bring the Correct Right Partner in the Couch\r\n            let tempValue = row[j+1];\r\n            row[j+1]=correctRightPartner;\r\n            let tempPosition = currentPositions[correctRightPartner];\r\n            row[tempPosition]=tempValue;\r\n\r\n            //Correct the Hash Table keeping the currentPositions of each Person.\r\n            currentPositions[correctRightPartner]=j+1;\r\n            currentPositions[tempValue]=tempPosition;\r\n\r\n            swapCount+=1;\r\n        }\r\n        else\r\n        {\r\n\r\n        console.log(\"happy\");\r\n        }\r\n    }\r\n\r\n    console.log(\"currentPositions\", currentPositions,\"Correct Row\", row);\r\n\r\n    return swapCount;\r\n\r\n};\r\nfunction getPartner(x){\r\n    if(x%2 ===0)\r\n    {\r\n        return x+1;\r\n    }\r\n    else\r\n        return x-1;\r\n}"
  }
}
