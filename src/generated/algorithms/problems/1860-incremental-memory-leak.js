export default {
  "id": 1860,
  "name": "Incremental Memory Leak",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/incremental-memory-leak",
  "relativeDir": "I/Incremental Memory Leak",
  "slug": "1860-incremental-memory-leak",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 14,
    "python": 41,
    "javascript": 13
  },
  "languages": {
    "cpp": "// Runtime: 8 ms (Top 53.78%) | Memory: 6 MB (Top 85.78%)\r\nclass Solution {\r\npublic:\r\n    vector<int> memLeak(int memory1, int memory2) {\r\n        int time = 1;\r\n        while (max(memory1, memory2) >= time) {\r\n            if (memory1 >= memory2) {\r\n                memory1 -= time;\r\n            } else {\r\n                memory2 -= time;\r\n            }\r\n            ++time;\r\n        }\r\n        return {time, memory1, memory2};\r\n    }\r\n};",
    "python": "\r\nclass Solution:\r\n    def memLeak(self, memory1: int, memory2: int) -> List[int]:\r\n        \r\n        inverted = False \r\n        if memory2>memory1:\r\n            memory2, memory1 = memory1, memory2\r\n            inverted = True \r\n\r\n\t\t#Compute the number of steps in first stage - 1\r\n        i_start = solve_quadratic(1,2*(memory1-memory2))\r\n        \r\n\t\t#Memory1 after the end of first stage is computed using the sum of arithmetic sequence\r\n        memory1-= i_start*(i_start+1)//2\r\n\t\t\r\n\t\tif memory1 == memory2: #Special case (if we end up with equal numbers after stage - 1 - undo inversion)\r\n            inverted = False \r\n       \r\n        #Compute number of steps in stage - 2\r\n        n_end = solve_quadratic((i_start+1), memory2)\r\n        \r\n\t\t#Compute sums of respective arithmetic sequences\r\n        i_end_1 = i_start - 1 + 2*n_end\r\n        i_end_2 = i_start + 2*n_end\r\n        \r\n        sum1 = n_end * (i_start+1 + i_end_1)//2\r\n        sum2 = n_end * (i_start+2 + i_end_2)//2\r\n        \r\n\t\t#Compute updated memories \r\n        memory1-=sum1\r\n        memory2-=sum2\r\n        \r\n        full_cnt=2*n_end+i_start\r\n        \r\n        if memory1>=i_end_2+1: #If we can still make one removal from the first stick - perform it.\r\n            memory1-=(i_end_2+1)\r\n            full_cnt+=1\r\n            \r\n        return [full_cnt+1, memory2, memory1] if inverted else [full_cnt+1, memory1, memory2]\r\n            \r\n\t\t ```",
    "java": "// Runtime: 5 ms (Top 87.96%) | Memory: 41.8 MB (Top 45.37%)\r\nclass Solution {\r\n    public int[] memLeak(int memory1, int memory2) {\r\n        int i = 1;\r\n        while(Math.max(memory1, memory2) >= i){\r\n            if(memory1 >= memory2)\r\n                memory1 -= i;\r\n            else\r\n                memory2 -= i;\r\n            i++;\r\n        }\r\n        return new int[]{i, memory1, memory2};\r\n    }\r\n}",
    "javascript": "var memLeak = function(memory1, memory2) {\r\n    var count=1;\r\n    while(true)\r\n        {\r\n            if(memory1>=memory2 && memory1>=count)\r\n                memory1-=count;\r\n            else if(memory2>=memory1 && memory2>=count)\r\n                memory2-=count\r\n            else\r\n                return [count, memory1, memory2];\r\n            count++;\r\n        }\r\n};"
  }
}
