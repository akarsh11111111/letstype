export default {
  "id": 1930,
  "name": "Unique Length-3 Palindromic Subsequences",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/unique-length-3-palindromic-subsequences",
  "relativeDir": "U/Unique Length-3 Palindromic Subsequences",
  "slug": "1930-unique-length-3-palindromic-subsequences",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 53,
    "python": 13,
    "javascript": 38
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int countPalindromicSubsequence(string s) {\r\n        \r\n        vector<pair<int, int> > v(26, {-1, -1} ); //to store first occurance  and last occurance of every alphabet.\r\n        \r\n        int n = s.length(); //size of the string\r\n        \r\n        for (int i = 0 ; i< n ;i++ ){\r\n            if (v[s[i] - 'a'].first == -1 ) v[s[i] - 'a'].first = i; // storing when alphabet appered first time.\r\n            else v[s[i] - 'a'].second = i; // else whenever it appears again. So that the last occurrence will be stored at last.\r\n        }\r\n        \r\n        int ans = 0 ;\r\n        for (int i = 0 ; i <26 ;i++ ){ //traversing over all alphabets.\r\n\r\n            if (v[i].second != -1 ){ //only if alphabet occured second time.\r\n                \r\n                unordered_set<char> st; //using set to keep only unique elements between the range.\r\n                \r\n                for (int x = v[i].first + 1 ; x < v[i].second ; x++ ) st.insert(s[x]); // set keeps only unique elemets.\r\n                    \r\n                ans += ((int)st.size()); // adding number of unique elements to the answer.\r\n            }\r\n        }\r\n        return ans;\r\n        \r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def countPalindromicSubsequence(self, s):\r\n        d=defaultdict(list)\r\n        for i,c in enumerate(s):\r\n            d[c].append(i)\r\n        ans=0\r\n        for el in d:\r\n            if len(d[el])<2:\r\n                continue\r\n            a=d[el][0]\r\n            b=d[el][-1]\r\n            ans+=len(set(s[a+1:b]))\r\n        return(ans)",
    "java": "class Solution {\r\n    public int countPalindromicSubsequence(String s) {\r\n        \r\n        int n = s.length();\r\n        \r\n        char[] chArr = s.toCharArray();\r\n        \r\n        int[] firstOcc = new int[26];\r\n        int[] lastOcc = new int[26];\r\n        \r\n        Arrays.fill(firstOcc, -1);\r\n        Arrays.fill(lastOcc, -1);\r\n        \r\n        for(int i = 0; i < n; i++){\r\n            \r\n            char ch = chArr[i];\r\n            \r\n            if(firstOcc[ch - 'a'] == -1){\r\n                firstOcc[ch - 'a'] = i;\r\n            }\r\n            \r\n            lastOcc[ch - 'a'] = i;\r\n        }\r\n        \r\n        int ans = 0, count = 0;\r\n        \r\n        boolean[] visited;\r\n        \r\n\t\t// check for each character ( start or end of palindrome )\r\n        for(int i = 0; i < 26; i++){\r\n            \r\n            int si = firstOcc[i]; // si - starting index\r\n            int ei = lastOcc[i]; // ei - ending index\r\n            \r\n            visited = new boolean[26];\r\n            \r\n            count = 0;\r\n            \r\n\t\t\t// check for unique charcters ( middle of palindrome )\r\n            for(int j = si + 1; j < ei; j++){\r\n                \r\n                if(!visited[chArr[j] - 'a']){\r\n                    visited[chArr[j] - 'a'] = true;\r\n                    count++;\r\n                }\r\n            }\r\n            \r\n            ans += count;\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 183 ms (Top 100.00%) | Memory: 52.8 MB (Top 44.44%)\r\nvar countPalindromicSubsequence = function(s) {\r\n    const charToIndices = {};\r\n    for (let i = 0; i < s.length; i++) {\r\n        const char = s[i];\r\n        if (charToIndices[char]) {\r\n            charToIndices[char].push(i);\r\n        } else {\r\n            charToIndices[char] = [i];\r\n        }\r\n    }\r\n\r\n    let count = 0;\r\n    for (const currChar in charToIndices) {\r\n        if (charToIndices[currChar].length < 2) continue;\r\n        const currCharIndices = charToIndices[currChar];\r\n        const firstIndex = currCharIndices[0];\r\n        const lastIndex = currCharIndices[currCharIndices.length - 1];\r\n\r\n        for (const char in charToIndices) {\r\n            const indices = charToIndices[char];\r\n            let lo = 0;\r\n            let hi = indices.length;\r\n            while (lo < hi) {\r\n                const mid = (lo + hi) >> 1;\r\n                if (indices[mid] <= firstIndex) {\r\n                    lo = mid + 1;\r\n                } else {\r\n                    hi = mid;\r\n                }\r\n            }\r\n            if (indices[lo] && indices[lo] < lastIndex) {\r\n                count++;\r\n            }\r\n        }\r\n    }\r\n    return count;\r\n};"
  }
}
