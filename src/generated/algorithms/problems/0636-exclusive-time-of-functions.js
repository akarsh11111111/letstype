export default {
  "id": 636,
  "name": "Exclusive Time of Functions",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/exclusive-time-of-functions",
  "relativeDir": "E/Exclusive Time of Functions",
  "slug": "0636-exclusive-time-of-functions",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 52,
    "python": 35,
    "javascript": 24
  },
  "languages": {
    "cpp": "// Runtime: 35 ms (Top 53.02%) | Memory: 13.1 MB (Top 84.47%)\r\nclass Solution {\r\npublic:\r\n    vector<int> exclusiveTime(int n, vector<string>& logs) {\r\n        vector<int> ret(n, 0);\r\n        stack<pair<int, int>> st;\r\n        for (auto& l : logs) {\r\n            auto p1 = l.find(':', 0), p2 = l.find(':', p1+1);\r\n            auto id = stoi(l.substr(0, p1));\r\n            auto time = stoi(l.substr(p2+1));\r\n            if (l[p1+1] == 's') {\r\n                st.push({id, time});\r\n            } else {\r\n                auto diff = time - st.top().second + 1;\r\n                ret[st.top().first] += diff;\r\n                st.pop();\r\n                if (!st.empty())\r\n                    ret[st.top().first] -= diff;\r\n            }\r\n        }\r\n        return ret;\r\n    }\r\n};",
    "python": "# Runtime: 78 ms (Top 92.98%) | Memory: 14.2 MB (Top 33.69%)\r\nclass Solution:\r\n    #T=O(n), S=O(d)\r\n    #n=len of logs, d=depth of stack\r\n    def exclusiveTime(self, n: int, logs: List[str]) -> List[int]:\r\n        #init result array to zeroes of length n (function ids)\r\n        res = [0]*n\r\n        stack = []\r\n        #iterate through logs\r\n        for log in logs:\r\n            #split the log\r\n            #function_id: start|end: timestamp\r\n            log = log.split(\":\")\r\n            #type cast function id and timestamp to int type\r\n            id = int(log[0])\r\n            timestamp = int(log[2])\r\n            state = log[1]\r\n            #detect start of a function call\r\n            #stack[function_id, start_timestamp]\r\n            if state == \"start\":\r\n                #stack is non empty\r\n                if stack:\r\n                    #get the time taken by last function so far\r\n                    res[stack[-1][0]] += timestamp - stack[-1][1]\r\n                #append the current function_id and start timestamp to the stack\r\n                stack.append([id, timestamp])\r\n            else:\r\n                #get the time consumed by current function\r\n                #dont forget to add 1 as the last unit of time should be included\r\n                res[id] += timestamp - stack.pop()[1] + 1\r\n                if stack:\r\n                    #update the start time of last function in stack to get the cumulative result\r\n                    stack[-1][1] = timestamp + 1\r\n\r\n        return res",
    "java": "// Runtime: 26 ms (Top 31.28%) | Memory: 52.6 MB (Top 22.01%)\r\nclass Solution {\r\n\r\n    //Time Complexity: O(N) for looping through logs\r\n    //Space Complexity: O(N) for stack\r\n\r\n    public int[] exclusiveTime(int n, List<String> logs) {\r\n        if (n == 0) {\r\n            return new int[0];\r\n        }\r\n\r\n        int[] result = new int[n];\r\n\r\n        Stack<Pair<Integer, Integer>> stack = new Stack<>();\r\n\r\n        for (String s : logs) {\r\n            String[] sArr = s.split(\":\");\r\n            int functionId = Integer.parseInt(sArr[0]);\r\n            String startOrEnd = sArr[1];\r\n            int timestamp = Integer.parseInt(sArr[2]);\r\n\r\n            if (startOrEnd.equals(\"start\")) {\r\n\r\n                //calculate previous in-progress length\r\n                if (!stack.empty()) {\r\n                    Pair<Integer, Integer> pair = stack.peek();\r\n                    int oldFunctionId = pair.getKey();\r\n                    int oldTimestamp = pair.getValue();\r\n                    result[oldFunctionId] += timestamp - oldTimestamp;\r\n                }\r\n\r\n                //add new start\r\n                stack.push(new Pair(functionId, timestamp));\r\n            } else {\r\n                //calculate current length\r\n                Pair<Integer, Integer> pair = stack.pop();\r\n                int oldTimestamp = pair.getValue();\r\n\r\n                result[functionId] += timestamp - oldTimestamp + 1;\r\n\r\n                //reset previous function's start\r\n                if (!stack.empty()) {\r\n                    pair = stack.pop();\r\n                    Pair<Integer, Integer> replacementPair = new Pair(pair.getKey(), timestamp + 1);\r\n                    stack.push(replacementPair);\r\n                }\r\n            }\r\n        }\r\n\r\n        return result;\r\n    }\r\n}",
    "javascript": "var exclusiveTime = function(n, logs) {\r\n\tconst stack = [];\r\n\tlet preTimeStamp = 0;\r\n\r\n\treturn logs.reduce((times, log) => {\r\n\t\tconst [id, status, timeStamp] = log.split(':');\r\n\t\tconst time = +timeStamp - preTimeStamp;\r\n\t\tconst { length } = stack;\r\n\r\n\t\tif (length) {\r\n\t\t\tconst lastId = stack[length - 1];\r\n\t\t\ttimes[lastId] += time;\r\n\t\t}\r\n\t\tpreTimeStamp = +timeStamp;\r\n\r\n\t\tif (status === 'start') stack.push(id);\r\n\t\telse {\r\n\t\t\tconst lastId = stack.pop();\r\n\t\t\ttimes[lastId] += 1;\r\n\t\t\tpreTimeStamp += 1;\r\n\t\t}\r\n\t\treturn times;\r\n\t}, Array(n).fill(0));\r\n}"
  }
}
