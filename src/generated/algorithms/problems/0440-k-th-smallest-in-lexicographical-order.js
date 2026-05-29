export default {
  "id": 440,
  "name": "K-th Smallest in Lexicographical Order",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/k-th-smallest-in-lexicographical-order",
  "relativeDir": "K/K-th Smallest in Lexicographical Order",
  "slug": "0440-k-th-smallest-in-lexicographical-order",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 83,
    "python": 30,
    "javascript": 24
  },
  "languages": {
    "cpp": "class Node {\r\n    private:\r\n    Node* links[10];\r\n    bool flag = false;\r\n    public:\r\n    bool containsKey(int digit) {\r\n        return links[digit] != nullptr;\r\n    }\r\n    void put(int digit, Node* node) {\r\n        links[digit] = node;\r\n    }\r\n    Node* get(int digit) {\r\n        return links[digit];\r\n    }\r\n    bool isEnd() {\r\n        return flag;\r\n    }\r\n    void setEnd() {\r\n        flag = true;\r\n    }\r\n};\r\n\r\nclass Trie {\r\n    private:\r\n    Node* root;\r\n    public:\r\n    Trie() {\r\n        root = new Node();\r\n    }\r\n    void insert(int num) {\r\n        string str = to_string(num);\r\n        Node* node = root;\r\n        for(int i=0; i<str.length(); i++) {\r\n            int digit = str[i] - '0';\r\n            if(!node->containsKey(digit)) {\r\n                node->put(digit, new Node());\r\n            }\r\n            node = node->get(digit);\r\n        }\r\n        node->setEnd();\r\n        // stack<int> st;\r\n        // while(num) {\r\n        //     st.push(num%10);\r\n        //     num /= 10;\r\n        // }\r\n        // Node* node = root;\r\n        // while(!st.empty()) {\r\n        //     int digit = st.top();\r\n        //     st.pop();\r\n        //     if(!node->containsKey(digit)) {\r\n        //         node->put(digit, new Node());\r\n        //     }\r\n        //     node = node->get(digit);\r\n        // }\r\n        // node->setEnd();\r\n    }\r\n    int kthELE(int k) {\r\n        int ans = 0;\r\n        dfs(root, ans, k, 0);\r\n        return ans;\r\n    }\r\n    void dfs(Node* root, int &ans, int &k, int num) {\r\n        if(k == 0) return;\r\n        if(root->isEnd()) {\r\n            ans = num;\r\n            k--;\r\n        }\r\n        for(int i=0; i<=9; i++) {\r\n            if(root->containsKey(i)) {\r\n                dfs(root->get(i), ans, k, num*10+i);\r\n            }\r\n        }\r\n    }\r\n};\r\n\r\nclass Solution {\r\npublic:\r\n    int findKthNumber(int n, int k) {\r\n        Trie trie;\r\n        for(int i=1; i<=n; i++) trie.insert(i);\r\n        return trie.kthELE(k);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findKthNumber(self, n: int, k: int) -> int:\r\n        \r\n        def prefix(op,n):\r\n            if op==n: return 1\r\n            if int(op)>int(n): return 0\r\n            for i in range(len(op)):\r\n                if int(op[i])>int(n[i]): \r\n                    rem = len(n)-1-len(op)\r\n                    if not rem: return 1\r\n                    return 1+int(10*((1-10**rem)/-9))\r\n                elif int(op[i])<int(n[i]): \r\n                    rem = len(n)-len(op)\r\n                    if not rem: return 1\r\n                    return 1+int(10*((1-10**rem)/-9))\r\n                \r\n            res = 1\r\n            for i in range(10):\r\n                res += prefix(op+str(i),n)\r\n            return res\r\n    \r\n        ans = 1\r\n        while k>1:\r\n            pref = prefix(str(ans),str(n)) \r\n            if pref >= k:\r\n                ans*=10; k-=1\r\n            else: \r\n                ans += 1; k-= pref\r\n        \r\n        return ans",
    "javascript": " public int findKthNumber(int n, int k) {\r\n    lexicalorder(n);         \r\n    int a= ans.get(k-1);\r\n    return a;\r\n}\r\n\r\npublic void lexicalorder(int n)\r\n{\r\n    for(int i=1; i<=9; i++){\r\n        helper(i,n);\r\n    }\r\n}\r\n\r\npublic void helper(int x, int n){\r\n    if(x<=n){\r\n        ans.add(x);\r\n    }\r\n    else{\r\n        return;\r\n    }\r\n    for(int i=0; i<=9; i++){\r\n        helper(x*10+i, n);\r\n    }\r\n}"
  }
}
