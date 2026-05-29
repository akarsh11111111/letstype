export default {
  "id": 17,
  "name": "Letter Combinations of a Phone Number",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/letter-combinations-of-a-phone-number",
  "relativeDir": "L/Letter Combinations of a Phone Number",
  "slug": "0017-letter-combinations-of-a-phone-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 42,
    "java": 26,
    "python": 43,
    "javascript": 30
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 6.5 MB (Top 53.08%)\r\nclass Solution {\r\npublic:\r\n\r\n    void solve(string digit,string output,int index,vector<string>&ans,string mapping[])\r\n    { // base condition\r\n        if(index>=digit.length())\r\n        {\r\n            ans.push_back(output);\r\n            return;\r\n        }\r\n        // digit[index] gives character value to change in integer subtract '0'\r\n        int number=digit[index]-'0';\r\n        // get the string at perticular index in mapping\r\n        string value=mapping[number];\r\n        //runs loop in value string and push that value in out put string ans do recursive call for next index\r\n        for(int i=0;i<value.length();i++)\r\n        {\r\n            output.push_back(value[i]);\r\n            solve(digit,output,index+1,ans,mapping);\r\n            //backtrack\r\n            //backtrach because initially output is empty and one case solves now you have to solve second case in similar way\r\n            output.pop_back(); }\r\n\r\n    }\r\n\r\n    vector<string> letterCombinations(string digits) {\r\n\r\n        vector<string>ans;\r\n        //if it is empty input string\r\n        if(digits.length()==0)\r\n        {\r\n            return ans;\r\n        }\r\n        string output=\"\";\r\n        int index=0;\r\n        //map every index with string\r\n        string mapping[10]={\"\",\"\",\"abc\",\"def\",\"ghi\",\"jkl\",\"mno\",\"pqrs\",\"tuv\",\"wxyz\"};\r\n        solve(digits,output,index,ans,mapping);\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def letterCombinations(self, digits: str) -> List[str]:\r\n        \r\n        mapping = {\"2\": \"abc\",\r\n                   \"3\": \"def\",\r\n                   \"4\": \"ghi\",\r\n                   \"5\": \"jkl\",\r\n                   \"6\": \"mno\",\r\n                   \"7\": \"pqrs\",\r\n                   \"8\": \"tuv\",\r\n                   \"9\": \"wxyz\"}\r\n        \r\n        ans = []\r\n        first = True\r\n        for i in range(len(digits)):\r\n            \r\n            # mult: times we should print each digit\r\n            mult = 1 \r\n            for j in range(i+1, len(digits)):\r\n                mult *= len(mapping[digits[j]])\r\n            \r\n            # cycles: times we should run same filling cycle\r\n            if not first:\r\n                cycles = len(ans) // mult\r\n            else:\r\n                cycles = 1\r\n            if times > 1:\r\n                cycles //= len(mapping[digits[i]])\r\n            \r\n            # cyclically adding each digits to answer\r\n            answer_ind = 0 \r\n            for _ in range(cycles):\r\n                for char in mapping[digits[i]]:\r\n                    for __ in range(mult):\r\n                        if first:\r\n                            ans.append(char)\r\n                        else:\r\n                            ans[answer_ind] += char\r\n                        answer_ind += 1\r\n            if first:\r\n                first = False\r\n            \r\n        return ans",
    "java": "class Solution {\r\n    String[] num = {\"\", \"\", \"abc\", \"def\", \"ghi\", \"jkl\", \"mno\", \"pqrs\", \"tuv\", \"wxyz\"};\r\n    public List<String> letterCombinations(String digits) {\r\n        List<String> ll = new ArrayList<>();\r\n        StringBuilder sb = new StringBuilder();\r\n        if (digits.length() != 0) {\r\n            combination(digits.toCharArray(), ll, sb, 0);\r\n        }\r\n        return ll;\r\n    }\r\n    public void combination(char[] digits, List<String> ll, StringBuilder sb, int idx) {\r\n        \r\n        if (sb.length() == digits.length) {\r\n            ll.add(sb.toString());\r\n            return;\r\n        }\r\n        \r\n        String grp = num[digits[idx] - 48];\r\n        for (int i = 0; i < grp.length(); i++) {\r\n            sb.append(grp.charAt(i));\r\n            combination(digits, ll, sb, idx + 1);\r\n            sb.deleteCharAt(sb.length() - 1);\r\n        }\r\n        \r\n    }\r\n}",
    "javascript": "var letterCombinations = function(digits) {\r\n  if(!digits) return []\r\n  let res = []\r\n  const alpha = {\r\n    2: \"abc\",\r\n    3: \"def\",\r\n    4: \"ghi\",\r\n    5: \"jkl\",\r\n    6: \"mno\",\r\n    7: \"pqrs\",\r\n    8: \"tuv\",\r\n    9: \"wxyz\"\r\n  }\r\n  \r\n  const dfs = (i, digits, temp)=>{\r\n    if(i === digits.length){\r\n      res.push(temp.join(''))\r\n      return\r\n    }\r\n    \r\n    let chars = alpha[digits[i]]\r\n    for(let ele of chars){\r\n      temp.push(ele)\r\n      dfs(i+1, digits, temp)\r\n      temp.pop()\r\n    }\r\n  }\r\n  dfs(0, digits, [])\r\n  return res\r\n};"
  }
}
