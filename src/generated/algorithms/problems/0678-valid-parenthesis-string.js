export default {
  "id": 678,
  "name": "Valid Parenthesis String",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/valid-parenthesis-string",
  "relativeDir": "V/Valid Parenthesis String",
  "slug": "0678-valid-parenthesis-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 34,
    "python": 31,
    "javascript": 38
  },
  "languages": {
    "cpp": "// Runtime: 70 ms (Top 5.03%) | Memory: 29.5 MB (Top 5.12%)\r\nclass Solution {\r\npublic:\r\n    bool checkValidString(string s) {\r\n        unordered_map<int, unordered_map<int, bool>> m;\r\n        return dfs(s, 0, 0, m);\r\n    }\r\n\r\n    // b: balanced number\r\n    bool dfs (string s, int index, int b, unordered_map<int, unordered_map<int, bool>>& m) {\r\n        if (index == s.length()) {\r\n            if (b == 0 ) return true;\r\n            else return false;\r\n        }\r\n\r\n        if (m.count(index) && m[index].count(b)) return m[index][b];\r\n\r\n        if (s[index] == '(') {\r\n            m[index][b] = dfs(s, index+1, b+1, m);\r\n        } else if (s[index] == ')') {\r\n            m[index][b] = (b!= 0 && dfs(s, index+1, b-1, m));\r\n        }else {\r\n            m[index][b] = dfs(s,index+1, b, m) || dfs(s, index+1, b+1, m) ||\r\n                    (b != 0 && dfs(s, index+1, b-1, m));\r\n        }\r\n\r\n        return m[index][b];\r\n    }\r\n};",
    "python": "class Solution:\r\n    def checkValidString(self, s: str) -> bool:\r\n        left,right,star = deque(), deque(), deque() #indexes of all unmatched left right parens and all '*'\r\n        # O(n) where n=len(s)\r\n        for i,c in enumerate(s):\r\n            if c == '(': # we just append left paren's index\r\n                left.append(i)\r\n            elif c == ')': # we check if we can find a match of left paren\r\n                if left and left[-1] < i:\r\n                    left.pop()\r\n                else:\r\n                    right.append(i)\r\n            else: #'*' case we just add the postion\r\n                star.append(i)\r\n        if not left and not right: return True\r\n        elif not star: return False #no star to save the string, return False\r\n        l,r = 0 ,len(star)-1\r\n        #O(n) since star will be length less than n\r\n        # Note: left, right,and star are always kept in ascending order! And for any i in left, j in right, i > j, or they would have been matched in the previous for loop.\r\n        while l<=r:\r\n            if left:\r\n                if left[-1]< star[r]: # we keep using right most star to match with right most '('\r\n                    left.pop()\r\n                    r -= 1\r\n                else: return False # even the right most '*' can not match a '(', we can not fix the string.\r\n            if right:\r\n                if right[0] > star[l]:\r\n                    right.popleft()\r\n                    l += 1\r\n                else: return False\r\n            if not left and not right: return True #if after some fix, all matched, we return True",
    "java": "class Solution{\r\n\tpublic boolean checkValidString(String s){\r\n\t\tStack<Integer> stack = new Stack<>();\r\n\t\tStack<Integer> star = new Stack<>();\r\n\t\tfor(int i=0;i<s.length();i++){\r\n\t\t\tif(s.charAt(i)=='(' ) \r\n                stack.push(i);\r\n            else if(s.charAt(i)=='*') \r\n                star.push(i);\r\n\t\t\telse {\r\n                if(!stack.isEmpty())\r\n                         stack.pop();\r\n                \r\n               else if(!star.isEmpty())\r\n                          star.pop();\r\n                 else \r\n                          return false;\r\n                \r\n\t\t\t}\r\n\t\t}\r\n        while(!stack.isEmpty()){\r\n            if(star.isEmpty()) \r\n                return false;\r\n            else if( stack.peek()<star.peek())                \r\n            {\r\n                star.pop();\r\n                stack.pop();\r\n            }\r\n            else\r\n                 return false;\r\n        }\r\n\t\treturn true;\r\n\t}\r\n}",
    "javascript": "// Runtime: 122 ms (Top 14.09%) | Memory: 44.5 MB (Top 14.09%)\r\n/**\r\n * @param {string} s\r\n * @return {boolean}\r\n */\r\nvar checkValidString = function(s) {\r\n    let map = {}\r\n    return check(s,0,0,map);\r\n};\r\n\r\nfunction check(s,index,open,map){\r\n    if(index == s.length){\r\n        return open == 0;\r\n    }\r\n\r\n    if(open < 0){\r\n        return false;\r\n    }\r\n    let string = index.toString() + \"##\" + open.toString();\r\n    if(string in map){\r\n        return map[string]\r\n    }\r\n\r\n    if(s[index] == '('){\r\n        let l = check(s,index+1,open+1,map)\r\n        map[string] = l\r\n        return l\r\n    }else if (s[index] == ')'){\r\n        let r = check(s,index+1,open-1,map)\r\n        map[string] = r;\r\n        return r\r\n    }else {\r\n        let lr = check(s,index+1,open+1,map) || check(s,index+1,open-1,map)\r\n              || check(s,index+1,open,map)\r\n        map[string] = lr;\r\n        return lr\r\n    }\r\n}"
  }
}
