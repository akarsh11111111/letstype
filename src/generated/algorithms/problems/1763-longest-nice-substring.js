export default {
  "id": 1763,
  "name": "Longest Nice Substring",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-nice-substring",
  "relativeDir": "L/Longest Nice Substring",
  "slug": "1763-longest-nice-substring",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 35,
    "python": 23,
    "javascript": 19
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    \r\n    string longestNiceSubstring(string s) {\r\n        int arr1[26]={};\r\n        int arr2[26]={};\r\n        if(s.length()<2)\r\n            return \"\";\r\n        for(char ch:s)\r\n        {\r\n            if(ch>='A' && ch<='Z')\r\n                arr1[(ch|32)-'a']++;\r\n            else\r\n                arr2[ch-'a']++;\r\n        }\r\n        vector<int> index;\r\n        index.push_back(-1);\r\n        for(int i=0;i<s.length();i++)\r\n        {\r\n            if((arr1[(s[i]|32)-'a']>=1 && arr2[(s[i]|32)-'a']==0) || (arr1[(s[i]|32)-'a']==0 && arr2[(s[i]|32)-'a']>=1))\r\n                index.push_back(i);\r\n        }\r\n        //index.push_back(2);\r\n        index.push_back(s.length());\r\n        if(index.size()==2)\r\n            return s;\r\n        string minn=\"\";\r\n        for(int i=0;i<index.size()-1;i++)\r\n        {\r\n            string temp = longestNiceSubstring(s.substr(index[i]+1,index[i+1]-index[i]-1));\r\n            minn = temp.length()>minn.length()?temp:minn;\r\n        }\r\n        return minn;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def longestNiceSubstring(self, s: str) -> str:\r\n        def divcon(s):\r\n\t\t    # string with length 1 or less arent considered nice\r\n            if len(s) < 2:\r\n                return \"\"\r\n            \r\n            pivot = []\r\n            # get every character that is not nice\r\n            for i, ch in enumerate(s):\r\n                if ch.isupper() and ch.lower() not in s:\r\n                    pivot.append(i)\r\n                if ch.islower() and ch.upper() not in s:\r\n                    pivot.append(i)\r\n\t\t\t# if no such character return the string\r\n            if not pivot:\r\n                return s\r\n\t\t\t# divide the string in half excluding the char that makes the string not nice\r\n            else:\r\n                mid = (len(pivot)) // 2\r\n                return max(divcon(s[:pivot[mid]]),divcon(s[pivot[mid]+1:]),key=len)\r\n        \r\n        return divcon(s)",
    "java": "class Solution {\r\n    public String longestNiceSubstring(String s) {\r\n        String result = \"\";\r\n        // take first index, go from 0 to length-1 of the string\r\n\t\tfor (int i = 0;i<s.length(); i++){        \r\n            // take second index, this should go up to the length of the string <=\r\n\t\t\tfor (int j = i+1;j<=s.length(); j++){\r\n                //get the substring for the index range from i to j\r\n\t\t\t\tString temp = s.substring(i, j);\r\n                // if length of the substring should be greater than 1\r\n\t\t\t\t// if the length should be greater that the previous computed result\r\n\t\t\t\t// if the substring is valid Nice String\r\n\t\t\t\t// then update the result with the current substring from range i and j\r\n\t\t\t\tif (temp.length() > 1 && result.length() < temp.length() && checkNice(temp)) result = temp;\r\n            }    \r\n        }\r\n        return result;\r\n    }\r\n    \r\n\t//validate Nice String check\r\n    public boolean checkNice(String temp){\r\n        //add substring to the set\r\n\t\tSet<Character> s = new HashSet<>();\r\n        for (char ch : temp.toCharArray()) s.add(ch);\r\n        \r\n\t\t// return false If you do not find both lower case and upper case in the sub string\r\n\t\t//for e.g 'aAa' substring added to set will have both a and A in the substring which is valid\r\n\t\t// 'azaA' substring will fail for 'z'\r\n\t\t// 'aaaaaaaa' will return \"\" as result\r\n\t\t//make sure that the substring contains both lower and upper case\r\n        for (char ch : s)\r\n            if (s.contains(Character.toUpperCase(ch)) != s.contains(Character.toLowerCase(ch))) return false;  \r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 544 ms (Top 5.4%) | Memory: 49.14 MB (Top 26.7%)\r\n\r\nconst swapCase = (str) => str.split('').map((c) => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');\r\n\r\nvar longestNiceSubstring = function(s) {\r\n    let ans = \"\";\r\n        for (let i = 0; i < s.length; i++) {\r\n            for (let ii = i + 1; ii < s.length + 1; ii++) {\r\n                let substring = s.slice(i, ii); // we take a substring\r\n\r\n                let invertedCaseChars = [...substring].map(swapCase); // we create an array of chars from the substring and invert case of this chars\r\n                \r\n                if (invertedCaseChars.every(char => substring.includes(char))) { // we check that substring includes every case inverted char (see the illustration above)\r\n                    ans = substring.length > ans.length ? substring : ans; // we select the longest substring which satisfies our condition\r\n                }\r\n            } \r\n        }\r\n        return ans \r\n};"
  }
}
