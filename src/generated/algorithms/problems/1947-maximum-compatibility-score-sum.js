export default {
  "id": 1947,
  "name": "Maximum Compatibility Score Sum",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-compatibility-score-sum",
  "relativeDir": "M/Maximum Compatibility Score Sum",
  "slug": "1947-maximum-compatibility-score-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 28,
    "python": 32,
    "javascript": 40
  },
  "languages": {
    "cpp": "// Runtime: 189 ms (Top 59.67%) | Memory: 10 MB (Top 51.80%)\r\nclass Solution {\r\n    // Calculating compatibility scores of ith student and jth mentor\r\n    int cal(int i,int j,vector<vector<int>>& arr1,vector<vector<int>>& arr2){\r\n        int cnt=0;\r\n        for(int k=0;k<arr1[0].size();k++){\r\n            if(arr1[i][k]==arr2[j][k]){\r\n                cnt++;\r\n            }\r\n        }\r\n        return cnt;\r\n    }\r\n\r\n    int helper(int i,int m,vector<vector<int>>& arr1,vector<vector<int>>& arr2,vector<bool>& vis){\r\n        if(i==m){\r\n            return 0;\r\n        }\r\n        int ans = 0;\r\n        for(int j=0;j<m;j++){\r\n            if(!vis[j]){\r\n                vis[j]=1;\r\n                ans = max(ans,cal(i,j,arr1,arr2) + helper(i+1,m,arr1,arr2,vis));\r\n                vis[j]=0; // Backtracking\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n\r\npublic:\r\n    int maxCompatibilitySum(vector<vector<int>>& students, vector<vector<int>>& mentors) {\r\n        int m = students.size();\r\n        vector<bool> vis(m,0); // To keep track of which mentor is already paired up\r\n        return helper(0,m,students,mentors,vis);\r\n    }\r\n};",
    "python": "# Runtime: 104 ms (Top 82.18%) | Memory: 13.9 MB (Top 66.34%)\r\nimport heapq\r\nfrom collections import defaultdict\r\n\r\nclass Solution:\r\n    def maxCompatibilitySum(self, students: List[List[int]], mentors: List[List[int]]) -> int:\r\n        m, n = len(students), len(students[0])\r\n        def hamming(student, mentor):\r\n            return sum([int(student[i] != mentor[i]) for i in range(n)])\r\n\r\n        pq = [(0, 0, '0'*m)] # state: (n-comp_score aka Hamming distance, number of assigned students, mentor status)\r\n        optimal = defaultdict(lambda:float('inf'))\r\n\r\n        while pq: # O(V)\r\n            cost, i, mentor_status = heapq.heappop(pq) # O(logV)\r\n\r\n            # early stopping with termination condition\r\n            if i == m:\r\n                return m * n - cost\r\n\r\n            # generate successors. The next student to be assigned is at index i\r\n            for j, mentor in enumerate(mentors): # O(m)\r\n                if mentor_status[j] != '1':\r\n                    new_cost = cost + hamming(students[i], mentor)\r\n                    new_mentor_status = mentor_status[:j] + '1' + mentor_status[j+1:]\r\n\r\n                    # update optimal cost if a new successor appears with lower cost to the same node\r\n                    if new_cost < optimal[(i+1, new_mentor_status)]:\r\n                        optimal[(i+1, new_mentor_status)] = new_cost\r\n                        heapq.heappush(pq, (new_cost, i+1, new_mentor_status)) # O(logV)\r\n\r\n        return 0",
    "java": "// Runtime: 78 ms (Top 29.11%) | Memory: 42.3 MB (Top 38.61%)\r\nclass Solution {\r\n    int max;\r\n    public int maxCompatibilitySum(int[][] students, int[][] mentors) {\r\n        boolean[] visited = new boolean[students.length];\r\n        helper(visited, students, mentors, 0, 0);\r\n        return max;\r\n    }\r\n    public void helper(boolean[] visited, int[][] students, int[][] mentors, int pos, int score){\r\n        if(pos >= students.length){\r\n            max = Math.max(max, score);\r\n            return;\r\n        }\r\n        for(int i = 0; i < mentors.length; i++)\r\n            if(!visited[i]){\r\n                visited[i] = true;\r\n                helper(visited, students, mentors, pos + 1, score + score(students[pos], mentors[i]));\r\n                visited[i] = false;\r\n            }\r\n    }\r\n    public int score(int[] a, int[] b){\r\n        int count = 0;\r\n\r\n        for(int i = 0; i < b.length; i++)\r\n            if(a[i] == b[i]) count += 1;\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 239 ms (Top 46.15%) | Memory: 42.4 MB (Top 84.62%)\r\nvar maxCompatibilitySum = function(students, mentors) {\r\n    const m = students.length;\r\n    const n = students[0].length;\r\n\r\n    let max = 0;\r\n\r\n    dfs(0, (1 << m) - 1, 0);\r\n\r\n    return max;\r\n\r\n    function dfs(studentIdx, bitmask, scoreTally) {\r\n        if (studentIdx === m) {\r\n            max = Math.max(max, scoreTally);\r\n\r\n            return;\r\n        }\r\n\r\n        for (let mentorIdx = 0; mentorIdx < m; ++mentorIdx) {\r\n            if (bitmask & (1 << mentorIdx)) {\r\n                const matchScore = hammingDistance(students[studentIdx], mentors[mentorIdx]);\r\n                const setMask = bitmask ^ (1 << mentorIdx);\r\n\r\n                dfs(studentIdx + 1, setMask, scoreTally + matchScore);\r\n            }\r\n        }\r\n\r\n        return;\r\n    }\r\n\r\n    function hammingDistance(studentsAnswers, mentorsAnswers) {\r\n        let matches = 0;\r\n\r\n        for (let j = 0; j < n; ++j) {\r\n            if (studentsAnswers[j] === mentorsAnswers[j]) ++matches;\r\n        }\r\n\r\n        return matches;\r\n    }\r\n};"
  }
}
