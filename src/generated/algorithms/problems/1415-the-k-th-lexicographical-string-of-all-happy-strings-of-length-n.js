export default {
  "id": 1415,
  "name": "The k-th Lexicographical String of All Happy Strings of Length n",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n",
  "relativeDir": "T/The k-th Lexicographical String of All Happy Strings of Length n",
  "slug": "1415-the-k-th-lexicographical-string-of-all-happy-strings-of-length-n",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 30,
    "python": 15,
    "javascript": 18
  },
  "languages": {
    "cpp": "class Solution {\r\n    private:\r\n    void happy(string s, vector<char> &v, int n, vector<string> &ans){\r\n        if(s.size() == n){\r\n            ans.push_back(s);\r\n            return;\r\n        }\r\n        for(int i=0; i<3; i++){\r\n            if(s.back() != v[i]){\r\n                s.push_back(v[i]);\r\n                happy(s,v,n,ans);\r\n                s.pop_back();\r\n            }\r\n        }\r\n    }\r\npublic:\r\n    string getHappyString(int n, int k) {\r\n        vector<char> v = {'a', 'b', 'c'};\r\n        vector<string> ans;\r\n        string s = \"\";\r\n        happy(s,v,n,ans);\r\n        if(ans.size() < k){\r\n            return \"\";\r\n        }\r\n        else{\r\n            return ans[k-1];\r\n        }\r\n    }\r\n};",
    "python": "class Solution:\r\n    def getHappyString(self, n: int, k: int) -> str:\r\n        ans = []\r\n        letters = ['a','b','c']\r\n        def happystr(n,prev,temp):\r\n            if n==0:\r\n                ans.append(\"\".join(temp))\r\n                return \r\n            for l in letters: \r\n                if l!=prev: \r\n                    happystr(n-1,l,temp+[l])\r\n        happystr(n,\"\",[])\r\n        if len(ans)<k:\r\n            return \"\"\r\n        return ans[k-1]",
    "java": "// Runtime: 32 ms (Top 59.76%) | Memory: 51.4 MB (Top 55.86%)\r\n\r\nclass Solution {\r\n\r\n public String getHappyString(int n, int k) {\r\n        List<String> innerList = new ArrayList<>();\r\n        getHappyStringUtil(n, k, new char[] { 'a', 'b', 'c' }, new StringBuilder(), innerList);\r\n        if (innerList.size() < k)\r\n            return \"\";\r\n        return innerList.get(k - 1);\r\n    }\r\n\r\n    public void getHappyStringUtil(int n, int k, char[] letter, StringBuilder tempString, List<String> innerList) {\r\n        // Base case\r\n        if (tempString.length() == n) {\r\n            innerList.add(tempString.toString());\r\n            return;\r\n        }\r\n\r\n        // Recursive call\r\n        for (int i = 0; i < 3; i++) {\r\n            if (tempString.length() > 0 && tempString.charAt(tempString.length() - 1) == letter[i])\r\n                continue;\r\n            tempString.append(letter[i]);\r\n            getHappyStringUtil(n, k, letter, tempString, innerList);\r\n            tempString.deleteCharAt(tempString.length() - 1);\r\n        }\r\n\r\n    }\r\n}",
    "javascript": "var getHappyString = function(n, k) {\r\n    const arr = ['a','b','c'], finalArr = ['a','b','c'];\r\n    let chr = '', str = '';\r\n    if(finalArr[finalArr.length-1].length === n && finalArr[0].length === n ) {\r\n        return finalArr[k-1] && finalArr[k-1].length === n ? finalArr[k-1] : '';\r\n    }\r\n    for(; finalArr.length < k || finalArr[0].length <= n;) {\r\n        str = finalArr.shift();\r\n        for(let index2 = 0; index2 < 3; index2++){\r\n            chr = str[str.length-1];\r\n            if(chr !== arr[index2]) {\r\n                finalArr.push(str+arr[index2]);\r\n            }\r\n        }\r\n        if(finalArr[finalArr.length-1].length === n && finalArr[0].length === n ) break;\r\n    }\r\n    return finalArr[k-1] ? finalArr[k-1] : '';\r\n};"
  }
}
