export default {
  "id": 316,
  "name": "Remove Duplicate Letters",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/remove-duplicate-letters",
  "relativeDir": "R/Remove Duplicate Letters",
  "slug": "0316-remove-duplicate-letters",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 39,
    "java": 26,
    "python": 20,
    "javascript": 34
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string removeDuplicateLetters(string s) {\r\n        int len = s.size();\r\n        string res = \"\";\r\n        unordered_map<char, int> M;\r\n        unordered_map<char, bool> V;\r\n        stack<int> S;\r\n        \r\n        for (auto c : s) {\r\n            if (M.find(c) == M.end()) M[c] = 1;\r\n            else M[c]++; \r\n        }\r\n        for (unordered_map<char, int>::iterator iter=M.begin(); iter!=M.end(); iter++) V[iter->first] = false;\r\n        \r\n        cout<<M.size()<<V.size()<<endl;\r\n        for (int i=0; i<len; i++) {\r\n            M[s[i]]--;\r\n            if (V[s[i]] == true) continue;\r\n            \r\n            while (!S.empty() and s[i] < s[S.top()] and M[s[S.top()]] > 0) {\r\n                V[s[S.top()]] = false;\r\n                S.pop();\r\n            }\r\n            S.push(i);\r\n            V[s[i]] = true;\r\n        }\r\n        while (!S.empty()) {\r\n            res = s[S.top()] + res;\r\n            S.pop();\r\n        }\r\n        return res;\r\n    }\r\n};\r\n\r\n\r\nAnalysis\r\nTime complexity O(n)\r\nspace complexity O(n)",
    "python": "class Solution:\r\n    def removeDuplicateLetters(self, s: str) -> str:\r\n        \r\n\t\tlast_occ = {}\r\n\t\tstack = []\r\n\t\tvisited = set()\r\n\r\n\t\tfor i in range(len(s)):\r\n\t\t\tlast_occ[s[i]] = i\r\n\r\n\t\tfor i in range(len(s)):\r\n\r\n\t\t\tif s[i] not in visited:\r\n\t\t\t\twhile (stack and stack[-1] > s[i] and last_occ[stack[-1]] > i):\r\n\t\t\t\t\tvisited.remove(stack.pop())\r\n\r\n\t\t\t\tstack.append(s[i])\r\n\t\t\t\tvisited.add(s[i])\r\n\r\n\t\treturn ''.join(stack)",
    "java": "class Solution {\r\n    public String removeDuplicateLetters(String s) {\r\n        int[] lastIndex = new int[26];\r\n        for (int i = 0; i < s.length(); i++){\r\n            lastIndex[s.charAt(i) - 'a'] = i; // track the lastIndex of character presence\r\n        }\r\n        \r\n        boolean[] seen = new boolean[26]; // keep track seen\r\n        Stack<Integer> st = new Stack();\r\n        \r\n        for (int i = 0; i < s.length(); i++) {\r\n            int curr = s.charAt(i) - 'a';\r\n            if (seen[curr]) continue; // if seen continue as we need to pick one char only\r\n            while (!st.isEmpty() && st.peek() > curr && i < lastIndex[st.peek()]){\r\n                seen[st.pop()] = false; // pop out and mark unseen\r\n            }\r\n            st.push(curr); // add into stack\r\n            seen[curr] = true; // mark seen\r\n        }\r\n\r\n        StringBuilder sb = new StringBuilder();\r\n        while (!st.isEmpty())\r\n            sb.append((char) (st.pop() + 'a'));\r\n        return sb.reverse().toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 56 ms (Top 86.81%) | Memory: 51.10 MB (Top 5.49%)\r\n\r\n/**\r\n * @param {string} s\r\n * @return {string}\r\n */\r\nvar removeDuplicateLetters = function(s) {\r\n    const lastOccurrence = {};\r\n    for (let i = 0; i < s.length; i++) {\r\n        lastOccurrence[s[i]] = i;\r\n    }\r\n\r\n    const stack = [];\r\n    const visited = new Set();\r\n\r\n    for (let i = 0; i < s.length; i++) {\r\n        if (visited.has(s[i])) {\r\n            continue;\r\n        }\r\n\r\n        while (\r\n            stack.length > 0 &&\r\n            s[i] < stack[stack.length - 1] &&\r\n            i < lastOccurrence[stack[stack.length - 1]]\r\n        ) {\r\n            visited.delete(stack.pop());\r\n        }\r\n\r\n        visited.add(s[i]);\r\n        stack.push(s[i]);\r\n    }\r\n\r\n    return stack.join('');    \r\n};"
  }
}
