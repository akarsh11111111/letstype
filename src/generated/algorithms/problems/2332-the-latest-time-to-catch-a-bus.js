export default {
  "id": 2332,
  "name": "The Latest Time to Catch a Bus",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/the-latest-time-to-catch-a-bus",
  "relativeDir": "T/The Latest Time to Catch a Bus",
  "slug": "2332-the-latest-time-to-catch-a-bus",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 43,
    "java": 34,
    "python": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int latestTimeCatchTheBus(vector<int>& buses, vector<int>& passengers, int capacity) {\r\n        queue<int> q;\r\n        sort(buses.begin(),buses.end());\r\n        sort(passengers.begin(),passengers.end());\r\n        int n=buses.size();\r\n        int m=passengers.size();\r\n        set<int> st;\r\n        for(auto p:passengers)\r\n        {\r\n            q.push(p);\r\n            st.insert(p);\r\n        }\r\n        int ans=0;\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            int currbus=buses[i]; // curr bus depature time.\r\n            int count=0; //number of people in curr bus\r\n            int x;\r\n            //CASE1\r\n            while(!q.empty() && count<capacity && q.front()<=currbus)\r\n            {\r\n                x=q.front();\r\n                q.pop();\r\n                if(st.find(x-1)==st.end()) //checking if person timing-1 doesnt exist and update the answer.\r\n                    ans=x-1; \r\n                count++;\r\n            }\r\n            //CASE2\r\n            if(count<capacity)\r\n            {\r\n                while(st.find(currbus)!=st.end()) //starting from dept time find a time which does not exist int the set already.\r\n                {\r\n                    currbus--;\r\n                }\r\n                ans=max(ans,currbus);\r\n            }\r\n            \r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def latestTimeCatchTheBus(self, buses: List[int], passengers: List[int], capacity: int) -> int:\r\n        passengers.sort()\r\n        cur = 0\r\n\r\n        for time in sorted(buses):\r\n            cap = capacity\r\n            while cur < len(passengers) and passengers[cur] <= time and cap > 0:\r\n                cur += 1\r\n                cap -= 1\r\n\r\n        best = time if cap > 0 else passengers[cur - 1]\r\n\r\n        passengers = set(passengers)\r\n        while best in passengers:\r\n            best -= 1\r\n        return best",
    "java": "// Runtime: 59 ms (Top 40.13%) | Memory: 106.7 MB (Top 13.12%)\r\nclass Solution {\r\n    public int latestTimeCatchTheBus(int[] buses, int[] passengers, int capacity) {\r\n        Arrays.sort(buses);\r\n        Arrays.sort(passengers);\r\n        HashSet<Integer> set = new HashSet<>();\r\n        for(int val : passengers){\r\n            set.add(val);\r\n        }\r\n        int n = buses.length;\r\n        int m = passengers.length;\r\n        int solb = capacity; // solb = space on last bus\r\n        int lastPerson = 0;\r\n        int i = 0, j = 0;\r\n        while(i < n && j < m){\r\n            int cc = capacity; // cc => current capacity;\r\n            while(j < m && cc > 0 && buses[i] >= passengers[j]){\r\n                cc--;\r\n                lastPerson = passengers[j];\r\n                j++;\r\n            }\r\n            i++;\r\n            solb = cc;\r\n        }\r\n        int x = lastPerson;\r\n        if(solb > 0 || i != n){\r\n            x = buses[n - 1];\r\n        }\r\n        while(set.contains(x) == true){\r\n            x--;\r\n        }\r\n        return x;\r\n    }\r\n}"
  }
}
