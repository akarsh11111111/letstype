export default {
  "id": 690,
  "name": "Employee Importance",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/employee-importance",
  "relativeDir": "E/Employee Importance",
  "slug": "0690-employee-importance",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 31,
    "python": 38
  },
  "languages": {
    "cpp": "// Runtime: 82 ms (Top 10.64%) | Memory: 15.7 MB (Top 29.77%)\r\nclass Solution {\r\npublic:\r\n    int ans=0;\r\n    void helper(unordered_map<int,pair<int,vector<int>>> &res,int id,vector<int> &dp)\r\n    {\r\n        if(dp[id]==-1)\r\n        {ans+=res[id].first;dp[id]=1;}// employees[id-1]->importance;dp[id-1]=1;}\r\n        else return;\r\n        for(int i=0;i<res[id].second.size();i++)\r\n            helper(res,res[id].second[i],dp);\r\n    }\r\n    int getImportance(vector<Employee*> employees, int id) {\r\n        vector<int> dp(2001,-1);\r\n        unordered_map<int,pair<int,vector<int>>> res;\r\n        for(int i=0;i<employees.size();i++)\r\n            res[employees[i]->id]={employees[i]->importance,employees[i]->subordinates};\r\n        helper(res,id,dp);\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 254 ms (Top 40.58%) | Memory: 15.6 MB (Top 60.31%)\r\n\"\"\"\r\n# Definition for Employee.\r\nclass Employee:\r\n    def __init__(self, id: int, importance: int, subordinates: List[int]):\r\n        self.id = id\r\n        self.importance = importance\r\n        self.subordinates = subordinates\r\n\"\"\"\r\n\r\nclass Solution:\r\n    def dfs(self, graph, employees, empId, totalImportance, visited):\r\n        totalImportance += graph[empId][0]\r\n        visited.add(empId)\r\n\r\n        for neighbour in graph[empId][1]:\r\n            if neighbour not in visited:\r\n                totalImportance = self.dfs(graph, employees, neighbour, totalImportance, visited)\r\n\r\n        return totalImportance\r\n\r\n    def getImportance(self, employees: List['Employee'], id: int) -> int:\r\n        graph = {}\r\n\r\n        for employeeInfo in employees:\r\n            empId, importance, suboordinates = employeeInfo.id, employeeInfo.importance, employeeInfo.subordinates\r\n            graph[empId] = [importance, suboordinates]\r\n\r\n        n = len(employees)\r\n\r\n        if graph[id][1] == []:\r\n            return graph[id][0]\r\n\r\n        visited = set()\r\n        totalImportance = 0\r\n        totalImportance = self.dfs(graph, employees, id, totalImportance, visited)\r\n\r\n        return totalImportance",
    "java": "class Solution {\r\n    \r\n    private Map<Integer, Integer> idToIndex;\r\n\r\n    private void populateIdToIndexMap(List<Employee> employees) {         \r\n        for(int idx = 0; idx<employees.size(); idx++) {\r\n            idToIndex.put(employees.get(idx).id, idx);\r\n        }\r\n    }\r\n    \r\n    private int dfsGetImportance(List<Employee> employees, int id) {\r\n        int currEmpIdx = idToIndex.get(id);\r\n        Employee currEmp = employees.get(currEmpIdx);\r\n        int totalImportance = currEmp.importance;\r\n        for(int child : currEmp.subordinates) {\r\n            totalImportance += dfsGetImportance(employees, child);\r\n        }\r\n        \r\n        return totalImportance;\r\n    }\r\n    \r\n    public int getImportance(List<Employee> employees, int id) {\r\n        if(employees == null || employees.size() < 1) {\r\n            return 0;            \r\n        }\r\n        \r\n        idToIndex = new HashMap<>();\r\n        populateIdToIndexMap(employees);\r\n        return dfsGetImportance(employees, id);\r\n    }\r\n}"
  }
}
