export default {
  "id": 1081,
  "name": "Smallest Subsequence of Distinct Characters",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/smallest-subsequence-of-distinct-characters",
  "relativeDir": "S/Smallest Subsequence of Distinct Characters",
  "slug": "1081-smallest-subsequence-of-distinct-characters",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 29,
    "python": 20,
    "javascript": 29
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string smallestSubsequence(string s) {\r\n        \r\n        string st=\"\";\r\n        unordered_map< char ,int> m;\r\n        vector< bool> vis( 26,false);\r\n        for( int i=0;i<s.size();i++) m[s[i]]++;\r\n        \r\n        stack< char> t;\r\n        \r\n        t.push(s[0]) , m[s[0]]--;\r\n        st+=s[0];\r\n        vis[s[0]-'a']=true;\r\n        \r\n        for( int i=1;i<s.size();i++){\r\n            \r\n            m[ s[i]]--;\r\n            if(!vis[ s[i]-'a']){\r\n                while( !t.empty() &&  m[t.top()] >0 && t.top() > s[i]){\r\n                    st.pop_back();\r\n                    vis[ t.top()-'a']=false;\r\n                    t.pop();\r\n                }\r\n                t.push(s[i]);\r\n                vis[s[i]-'a']=true;\r\n                st=st+s[i];\r\n            }\r\n        }\r\n        return st;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def smallestSubsequence(self, s: str) -> str:\r\n         # calculate the last occurence of each characters in s\r\n        last_occurence = {c: i for i, c in enumerate(s)}\r\n        \r\n        stack = []\r\n        # check if element is in stack\r\n        instack = set()\r\n        for i, c in enumerate(s):\r\n            if c not in instack:\r\n                # check if stack already have char larger then current char\r\n                # and if char in stack will occur later again, remove that from stack\r\n                while stack and stack[-1] > c and last_occurence[stack[-1]] > i:\r\n                    instack.remove(stack[-1])\r\n                    stack.pop()\r\n                    \r\n                instack.add(c)   \r\n                stack.append(c)\r\n        \r\n        return \"\".join(stack)",
    "java": "// Runtime: 3 ms (Top 87.48%) | Memory: 42.2 MB (Top 54.57%)\r\n\r\nclass Solution {\r\n    public String smallestSubsequence(String s) {\r\n        boolean[] inStack = new boolean [26];\r\n        int[] lastIdx = new int [26];\r\n        Arrays.fill(lastIdx,-1);\r\n        for(int i = 0; i < s.length(); i++){\r\n            lastIdx[s.charAt(i)-'a'] = i;\r\n        }\r\n        Deque<Character> dq = new ArrayDeque<>();\r\n        for(int i = 0; i < s.length(); i++){\r\n            char ch = s.charAt(i);\r\n            if(inStack[ch-'a']){\r\n                continue;\r\n            }\r\n            while(!dq.isEmpty() && dq.peekLast() > ch && lastIdx[dq.peekLast()-'a'] > i){\r\n                inStack[dq.pollLast()-'a'] = false;\r\n            }\r\n            dq.addLast(ch);\r\n            inStack[ch-'a'] = true;\r\n        }\r\n        StringBuilder sb = new StringBuilder();\r\n        while(!dq.isEmpty()){\r\n            sb.append(dq.pollFirst());\r\n        }\r\n        return sb.toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 50 ms (Top 94.83%) | Memory: 42.10 MB (Top 87.93%)\r\n\r\nvar smallestSubsequence = function(s) {\r\n    // Initialize an empty stack to store the result\r\n    let stack = [];\r\n\r\n    // Iterate through each character in the input string\r\n    for (let i = 0; i < s.length; i++) {\r\n        let char = s[i];\r\n\r\n        // If the character is already in the stack, skip it\r\n        if (stack.indexOf(char) > -1) continue;\r\n\r\n        // Check and pop elements from the stack to maintain lexicographical order\r\n        while (\r\n            stack.length > 0 &&\r\n            stack[stack.length - 1] > char &&\r\n            s.indexOf(stack[stack.length - 1], i) > i\r\n        ) {\r\n            stack.pop();\r\n        }\r\n\r\n        // Push the current character onto the stack\r\n        stack.push(char);\r\n    }\r\n\r\n    // Join the characters in the stack to form the smallest subsequence\r\n    return stack.join('');\r\n};"
  }
}
