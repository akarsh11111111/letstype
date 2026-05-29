export default {
  "id": 402,
  "name": "Remove K Digits",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/remove-k-digits",
  "relativeDir": "R/Remove K Digits",
  "slug": "0402-remove-k-digits",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 59,
    "java": 28,
    "python": 30,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 94.36%) | Memory: 9.20 MB (Top 53.65%)\r\n\r\n// 😉😉😉😉Please upvote if it helps 😉😉😉😉\r\nclass Solution {\r\npublic:\r\n    string removeKdigits(string num, int k) {\r\n        // number of operation greater than length we return an empty string\r\n        if(num.length() <= k)   \r\n            return \"0\";\r\n        \r\n        // k is 0 , no need of removing /  preforming any operation\r\n        if(k == 0)\r\n            return num;\r\n        \r\n        string res = \"\";// result string\r\n        stack <char> s; // char stack\r\n        \r\n        s.push(num[0]); // pushing first character into stack\r\n        \r\n        for(int i = 1; i<num.length(); ++i)\r\n        {\r\n            while(k > 0 && !s.empty() && num[i] < s.top())\r\n            {\r\n                // if k greater than 0 and our stack is not empty and the upcoming digit,\r\n                // is less than the current top than we will pop the stack top\r\n                --k;\r\n                s.pop();\r\n            }\r\n            \r\n            s.push(num[i]);\r\n            \r\n            // popping preceding zeroes\r\n            if(s.size() == 1 && num[i] == '0')\r\n                s.pop();\r\n        }\r\n        \r\n        while(k && !s.empty())\r\n        {\r\n            // for cases like \"456\" where every num[i] > num.top()\r\n            --k;\r\n            s.pop();\r\n        }\r\n        \r\n        while(!s.empty())\r\n        {\r\n            res.push_back(s.top()); // pushing stack top to string\r\n            s.pop(); // pop the top element\r\n        }\r\n        \r\n        reverse(res.begin(),res.end()); // reverse the string \r\n        \r\n        if(res.length() == 0)\r\n            return \"0\";\r\n        \r\n        return res;\r\n        \r\n        \r\n    }\r\n};",
    "python": "# Lets make monotonically growing stack and save the indexes of popped elements into deletes dict.\r\n#as soon as len(delete) == k delete those indexes from the initial string and thats the answer.\r\n#if len(delete) < k remove k-len(delete) chars from right and thats the answer\r\nclass Solution:\r\n    def removeKdigits(self, s: str, k: int) -> str:\r\n        if len(s) == k:\r\n            return '0'\r\n        stack = []\r\n        delete = {}\r\n        for i in range(len(s)):\r\n\r\n            while stack and s[i] < stack[-1][0]:\r\n                delete[stack.pop()[1]] = 1\r\n                if len(delete) == k:\r\n                    break\r\n            if len(delete) == k:\r\n                return self.deleteindexes(s, delete, k)\r\n            stack.append([s[i], i])\r\n        s1 = self.deleteindexes(s, delete, k)\r\n\r\n        return str(int(s1[:len(s1)-k +len(delete)]))\r\n\r\n\r\n    def deleteindexes(self, s, delete, k):\r\n        if not delete:\r\n            return s\r\n        if len(delete) == k:\r\n            return str(int(''.join([c for ind, c in enumerate(s) if ind not in delete])))\r\n        else:\r\n            return ''.join([c for ind, c in enumerate(s) if ind not in delete])",
    "java": "// Runtime: 31 ms (Top 69.83%) | Memory: 55 MB (Top 18.30%)\r\nclass Solution {\r\n    public String removeKdigits(String num, int k) {\r\n        int n = num.length();\r\n        if(n == k){\r\n            return \"0\";\r\n        }\r\n        Deque<Character> dq = new ArrayDeque<>();\r\n        for(char ch : num.toCharArray()){\r\n            while(!dq.isEmpty() && k > 0 && dq.peekLast() > ch){\r\n                dq.pollLast();\r\n                k--;\r\n            }\r\n            dq.addLast(ch);\r\n        }\r\n        StringBuilder sb = new StringBuilder();\r\n        while(!dq.isEmpty() && dq.peekFirst() == '0'){\r\n            dq.pollFirst();\r\n        }\r\n        while(!dq.isEmpty()){\r\n            sb.append(dq.pollFirst());\r\n        }\r\n        if(k >= sb.length()){\r\n            return \"0\";\r\n        }\r\n        return sb.length() == 0 ? \"0\" : sb.toString().substring(0,sb.length()-k);\r\n    }\r\n}",
    "javascript": "var removeKdigits = function(num, k) {\r\n    if(k == num.length) {\r\n        return '0'\r\n    }\r\n    let stack = []\r\n    for(let i = 0; i < num.length; i++) {\r\n        while(stack.length > 0 && num[i] < stack[stack.length - 1] && k > 0) {\r\n            stack.pop()\r\n            k--\r\n        }\r\n        stack.push(num[i])\r\n    }\r\n    while(k > 0) {\r\n        stack.pop()\r\n        k--\r\n    }\r\n    while(stack[0] == 0 && stack.length > 1) {\r\n        stack.shift()\r\n    }\r\n    return stack.join('')\r\n}"
  }
}
