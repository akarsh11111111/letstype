export default {
  "id": 394,
  "name": "Decode String",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/decode-string",
  "relativeDir": "D/Decode String",
  "slug": "0394-decode-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 46,
    "java": 49,
    "python": 21,
    "javascript": 28
  },
  "languages": {
    "cpp": "// Runtime: 6 ms (Top 9.18%) | Memory: 11.30 MB (Top 8.61%)\r\n\r\nclass Solution {\r\npublic:\r\n\r\n    string decodeString(string s) {\r\n        stack<char> st;\r\n        for(int i = 0; i < s.size(); i++){\r\n            if(s[i] != ']') {\r\n                st.push(s[i]);\r\n            }\r\n            else{\r\n                string curr_str = \"\";\r\n                \r\n                while(st.top() != '['){\r\n                    curr_str = st.top() + curr_str ;\r\n                    st.pop();\r\n                }\r\n                \r\n                st.pop();   // for '['\r\n                string number = \"\";\r\n                \r\n                // for calculating number\r\n                \r\n                while(!st.empty() && isdigit(st.top())){\r\n                    number = st.top() + number;\r\n                    st.pop();\r\n                }\r\n                int k_time = stoi(number);    // convert string to number\r\n                \r\n                while(k_time--){\r\n                    for(int p = 0; p < curr_str.size() ; p++)\r\n                        st.push(curr_str[p]);\r\n                }\r\n            }\r\n        }\r\n        \r\n        s = \"\";\r\n        while(!st.empty()){\r\n            s = st.top() + s;\r\n            st.pop();\r\n        }\r\n        return s;\r\n        \r\n    }\r\n};",
    "python": "// Runtime: 39 ms (Top 46.14%) | Memory: 16.20 MB (Top 85.67%)\r\n\r\nclass Solution:\r\n    def decodeString(self, s):\r\n        it, num, stack = 0, 0, [\"\"]\r\n        while it < len(s):\r\n            if s[it].isdigit():\r\n                num = num * 10 + int(s[it])\r\n            elif s[it] == \"[\":\r\n                stack.append(num)\r\n                num = 0\r\n                stack.append(\"\")\r\n            elif s[it] == \"]\":\r\n                str1 = stack.pop()\r\n                rep = stack.pop()\r\n                str2 = stack.pop()\r\n                stack.append(str2 + str1 * rep)\r\n            else:\r\n                stack[-1] += s[it]              \r\n            it += 1           \r\n        return \"\".join(stack)",
    "java": "// Runtime: 1 ms (Top 88.88%) | Memory: 41.8 MB (Top 72.85%)\r\nclass Solution {\r\n    public String decodeString(String s) {\r\n\r\n        int bb = s.indexOf('['); // location of beginning bracket\r\n        int nbb = s.indexOf('[', bb + 1); // location of next beginning bracket\r\n        int eb = s.indexOf(']'); // location of ending bracket\r\n\r\n        int n = 0; // number of times to repeat\r\n        int nl = 1; // number of digits for n\r\n        char nd; // next digit\r\n\r\n        String insert = \"\"; // repeated string\r\n        String end = \"\"; // remainder of string after repeated portion\r\n\r\n        while (bb != -1) { // while the string contains a beginning bracket\r\n\r\n            while (nbb < eb && nbb > bb) { // while the next beginning bracket is before the ending bracket\r\n                bb = nbb; // update location of beginning bracket\r\n                nbb = s.indexOf('[', bb + 1); // update location of next beginning bracket\r\n            }\r\n\r\n            nl = 1; // reset length of n\r\n            while (bb - nl >= 0) { // while there are characters in front of the beginning bracket\r\n                nd = s.charAt(bb - nl); // next digit\r\n                if (nd <= '9' && nd >= '0') { // if next digit is an integer\r\n                    n += (int)(nd - '0') * Math.pow(10, nl - 1); // update value of n\r\n                    nl++; // increment length of n\r\n                }\r\n                else break; // not an integer\r\n            }\r\n\r\n            insert = s.substring(bb + 1, eb); // set repeated string\r\n            end = s.substring(eb + 1); // set remainder of string\r\n            s = s.substring(0, bb - nl + 1); // remove everything after the digits\r\n\r\n            while (n > 0) {\r\n                s += insert; // add repeated string n times\r\n                n--;\r\n            }\r\n            s += end; // add remainder of string\r\n\r\n            bb = s.indexOf('['); // new location of beginning bracket\r\n            nbb = s.indexOf('[', bb + 1); // new location of next beginning bracket\r\n            eb = s.indexOf(']'); // new location of ending bracket\r\n        }\r\n        return s;\r\n    }\r\n}",
    "javascript": "// Runtime: 84 ms (Top 55.68%) | Memory: 41.5 MB (Top 92.94%)\r\nvar decodeString = function(s) {\r\n    const stack = [];\r\n\r\n    for (let char of s) {\r\n         if (char === \"]\") {\r\n            let curr = stack.pop();\r\n            let str = '';\r\n            while (curr !== '[') {\r\n                str = curr+ str;\r\n                curr = stack.pop();\r\n            }\r\n            let num = \"\";\r\n            curr = stack.pop();\r\n            while (!isNaN(curr)) {\r\n                num = curr + num;\r\n                curr = stack.pop();\r\n            }\r\n            stack.push(curr);\r\n            for (let i=0; i<Number(num);i++) {\r\n                stack.push(str);\r\n            }\r\n        }\r\n        else stack.push(char);\r\n    }\r\n\r\n    return stack.join('');\r\n};"
  }
}
