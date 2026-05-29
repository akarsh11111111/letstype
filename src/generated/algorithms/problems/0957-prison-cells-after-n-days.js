export default {
  "id": 957,
  "name": "Prison Cells After N Days",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/prison-cells-after-n-days",
  "relativeDir": "P/Prison Cells After N Days",
  "slug": "0957-prison-cells-after-n-days",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 26,
    "python": 24,
    "javascript": 53
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 12.40 MB (Top 75.91%)\r\n\r\nclass Solution {\r\n\r\npublic:\r\n    vector<int> prisonAfterNDays(vector<int>& cells, int N) {\r\n        if(N == 0) return cells;\r\n        prison(cells, 1);              //Prison cells for one day, The pattern repeats from day 1 - 14\r\n        prison(cells, (N - 1) % 14);         //Simply day 14 = day 1, Day 0 never repeats because of corners  \r\n        return cells;                               \r\n    }\r\n    void prison(vector<int>& cells, const int& N){\r\n        for(int i = 0; i < N; i++){\r\n            vector<int> v(8,0);\r\n        for(int i = 1; i < 7; i++)\r\n            if(cells[i - 1] == cells[i + 1])\r\n                v[i] = 1;\r\n            else v[i] = 0;\r\n        cells = v;\r\n        }\r\n    }\r\n};",
    "python": "# Runtime: 85 ms (Top 14.83%) | Memory: 14 MB (Top 28.83%)\r\nclass Solution:\r\n    def prisonAfterNDays(self, cells: List[int], n: int) -> List[int]:\r\n        patternMatch=defaultdict(int) # pattern match\r\n        totalPrisons=8 # totalPrisons\r\n        cells= [ str(c) for c in (cells)] # into char type\r\n        for d in range(1,n+1):\r\n            tempCell=[]\r\n            tempCell.append('0') # left corner case\r\n            for c in range(1,totalPrisons-1):\r\n                if (cells[c-1]=='1' and cells[c+1]=='1') or (cells[c-1]=='0' and cells[c+1]=='0'):\r\n                    tempCell.append('1') # insert 1 if first condition met\r\n                else:\r\n                    tempCell.append('0') # otherwise 0\r\n            tempCell.append('0') # right corner case\r\n            cells=tempCell # update cells\r\n            pattern= ''.join(tempCell) # insert pattern in hashtable\r\n            if pattern in patternMatch: # if there is a match\r\n                day=patternMatch[pattern]\r\n                remainder= (n%(d-1))-1 # take modulo\r\n                match= list(patternMatch.keys())[remainder] # find key\r\n                return [ int(m) for m in match] # return\r\n            patternMatch[pattern]=d # assign day\r\n        return [ int(c) for c in (cells)] # return",
    "java": "// Runtime: 1 ms (Top 89.57%) | Memory: 42.40 MB (Top 48.82%)\r\n\r\nclass Solution {\r\n    public int[] prisonAfterNDays(int[] cells, int N) {\r\n        if(N==0) return cells;\r\n        int[][] mem=new int[14][8];            // Repeat pattern after day 14, so Day 1 and Day 15 is equal\r\n        mem[0][0]=0;\r\n        mem[0][7]=0;\r\n        for(int i=1;i<7;i++){                    // calculating Day 1 and insert at 0th position in mem\r\n            if(cells[i-1]==cells[i+1])\r\n                mem[0][i]=1;\r\n            else\r\n                mem[0][i]=0;\r\n        }\r\n        \r\n        for(int j=1;j<14;j++){                    // calculating Day 2 to 14 and inserting at position 1 to 13 in mem.\r\n            for(int i=1;i<7;i++){\r\n                if(mem[j-1][i-1]==mem[j-1][i+1])\r\n                    mem[j][i]=1;\r\n                else\r\n                    mem[j][i]=0;\r\n            }\r\n        }\r\n        return mem[(N-1)%14];                //return the day modulo 14\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} cells\r\n * @param {number} n\r\n * @return {number[]}\r\n */\r\n\r\nvar prisonAfterNDays = function(cells, n) {\r\n    const set = new Set()\r\n    let cycleDuration = 0\r\n    \r\n    while(n--) {\r\n        const nextCells = getNextCells(cells)\r\n\r\n        // 1. Get cycle length\r\n        if(!set.has(String(nextCells))){\r\n            set.add(String(nextCells))\r\n            cycleDuration++\r\n            cells = nextCells\r\n            \r\n        } else {\r\n            // 2. Use cycle length to iterate once more to get to correct order\r\n            let remainderToMove = n%cycleDuration\r\n            while(remainderToMove >= 0) {\r\n                remainderToMove--\r\n                cells = getNextCells(cells)\r\n            }\r\n            break\r\n        }        \r\n        \r\n    }\r\n    \r\n    return cells\r\n};\r\n\r\nfunction getNextCells(cells) {\r\n    let temp = [...cells]\r\n    for(let i = 0; i < 8; i++) {\r\n        if(i>0 && i < 7 && cells[i-1] === cells[i+1]) {\r\n            temp[i] = 1\r\n        } else {\r\n            temp[i] = 0\r\n        }\r\n    }\r\n\r\n    return temp\r\n}\r\n\r\n// 0\r\n// 1\r\n// 2\r\n// n\r\n\r\n// 1 000 000 % n"
  }
}
