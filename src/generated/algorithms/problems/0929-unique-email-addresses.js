export default {
  "id": 929,
  "name": "Unique Email Addresses",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/unique-email-addresses",
  "relativeDir": "U/Unique Email Addresses",
  "slug": "0929-unique-email-addresses",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 30,
    "python": 11,
    "javascript": 19
  },
  "languages": {
    "cpp": "// Runtime: 22 ms (Top 96.52%) | Memory: 13.7 MB (Top 81.90%)\r\nclass Solution {\r\npublic:\r\n    int numUniqueEmails(vector<string>& emails)\r\n    {\r\n        unordered_set<string> st;\r\n        for(auto &e:emails)\r\n        {\r\n            string clean_email=\"\";\r\n            for(auto &ch:e)\r\n            {\r\n                if(ch=='+'||ch=='@')\r\n                    break;\r\n                if(ch=='.')\r\n                    continue;\r\n                clean_email+=ch;\r\n            }\r\n            clean_email+=e.substr(e.find('@'));\r\n            st.insert(clean_email);\r\n        }\r\n        return st.size();\r\n\r\n    }\r\n};\r\n//if you like the solution plz upvote.",
    "python": "class Solution:\r\n    def numUniqueEmails(self, emails: List[str]) -> int:\r\n        def ets(email):\r\n            s, domain = email[:email.index('@')], email[email.index('@'):]\r\n            s = s.replace(\".\", \"\")\r\n            s = s[:s.index('+')] if '+' in s else s\r\n            return s+domain\r\n        dict = {}\r\n        for i in emails:\r\n            dict[ets(i)] = 1\r\n        return len(dict)",
    "java": "// Runtime: 27 ms (Top 57.45%) | Memory: 46.9 MB (Top 71.39%)\r\nclass Solution {\r\n    public int numUniqueEmails(String[] emails) {\r\n\r\n        Set<String> finalEmails = new HashSet<>();\r\n        for(String email: emails){\r\n            StringBuilder name = new StringBuilder();\r\n            boolean ignore = false;\r\n            for(int i=0;i<email.length();i++){\r\n                char c = email.charAt(i);\r\n                switch(c){\r\n                    case '.':\r\n                        break;\r\n                    case '+':\r\n                        ignore = true;\r\n                        break;\r\n                    case '@':\r\n                        name.append(email.substring(i));\r\n                        i = email.length();\r\n                        break;\r\n                    default:\r\n                        if(!ignore) name.append(c);\r\n                }\r\n            }\r\n            finalEmails.add(name.toString());\r\n        }\r\n        finalEmails.forEach(System.out::println);\r\n        return finalEmails.size();\r\n    }\r\n}",
    "javascript": "var numUniqueEmails = function(emails) {\r\n    let set = new Set();\r\n    \r\n    for (let email of emails) {\r\n        let curr = email.split('@');\r\n        let currEmail = '';\r\n        \r\n        for (let char of curr[0]) {\r\n            if (char === '.') continue;\r\n            if (char === '+') break;\r\n            currEmail += char;\r\n        }\r\n        \r\n        currEmail += '@' + curr[1];\r\n        set.add(currEmail)\r\n    }\r\n    \r\n    return set.size\r\n};"
  }
}
