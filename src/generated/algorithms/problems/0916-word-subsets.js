export default {
  "id": 916,
  "name": "Word Subsets",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/word-subsets",
  "relativeDir": "W/Word Subsets",
  "slug": "0916-word-subsets",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 46,
    "java": 39,
    "python": 15,
    "javascript": 29
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    // calculate the frequency of string s\r\n    vector<int> giveMeFreq(string s)\r\n    {\r\n        vector<int> freq(26,0);\r\n        for(int i = 0; i < s.length(); i++)\r\n        {\r\n            freq[s[i] - 'a']++;\r\n        }\r\n        return freq;\r\n    }\r\n    \r\n    vector<string> wordSubsets(vector<string>& words1, vector<string>& words2) \r\n    {\r\n       vector<string> ans; // store ans\r\n       vector<int> max_Freq_w2(26, 0);   // store max freq of each character present in word2 stirngs\r\n\t   \r\n        // we will Iterate over word to and try to find max freq for each character present in all strings.\r\n\t\tfor(auto &x : words2) \r\n        {\r\n            vector<int> freq = giveMeFreq(x);\r\n            for(int i = 0; i < 26; i++)\r\n            {\r\n                max_Freq_w2[i] = max(freq[i], max_Freq_w2[i]);  // upadate freq to max freq\r\n            }\r\n        }\r\n        \r\n\t\t// we will iterate for each string in words1 ans if it have all charaters present in freq array with freq >= that     then we will add it to ans\r\n        for(auto &x : words1)\r\n        {\r\n            vector<int> freq = giveMeFreq(x);  // gives freq of characters for word in words1\r\n            bool flag = true;\r\n            for(int i = 0; i < 26; i++)\r\n            {\r\n                if(freq[i] < max_Freq_w2[i]) // specifies that word did not have all the characters from word2 array\r\n                {\r\n                    flag = false;\r\n                    break;\r\n                }\r\n            }\r\n            if(flag) ans.push_back(x);   // string x is Universal string\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def wordSubsets(self, A: List[str], B: List[str]) -> List[str]:\r\n        freq = [0]*26 \r\n        \r\n        for w in B: \r\n            temp = [0]*26\r\n            for c in w: temp[ord(c)-97] += 1\r\n            for i in range(26): freq[i] = max(freq[i], temp[i])\r\n                \r\n        ans = []\r\n        for w in A: \r\n            temp = [0]*26\r\n            for c in w: temp[ord(c)-97] += 1\r\n            if all(freq[i] <= temp[i] for i in range(26)): ans.append(w)\r\n        return ans",
    "java": "class Solution {\r\n    public List<String> wordSubsets(String[] words1, String[] words2) {\r\n        List<String> list=new ArrayList<>();\r\n        int[] bmax=count(\"\");\r\n        for(String w2:words2)\r\n        {\r\n            int[] b=count(w2);\r\n            for(int i=0;i<26;i++)\r\n            {\r\n                bmax[i]=Math.max(bmax[i],b[i]);\r\n            }\r\n        }\r\n        for(String w1:words1)\r\n        {\r\n            int[] a=count(w1);\r\n            for(int i=0;i<26;i++)\r\n            {\r\n                if(a[i]<bmax[i])\r\n                {\r\n                    break;\r\n                }\r\n                  if(i==25)\r\n             {\r\n                 list.add(w1);\r\n             }\r\n            } \r\n        }\r\n        return list;\r\n    }\r\n    public int[] count(String s)\r\n    {\r\n        int[] ans=new int[26];\r\n        for(char c:s.toCharArray())\r\n        {\r\n            ans[c-'a']++;\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 409 ms (Top 44.03%) | Memory: 65.6 MB (Top 60.70%)\r\nvar wordSubsets = function(words1, words2) {\r\n    this.count = Array(26).fill(0);\r\n    let tmp = Array(26).fill(0);\r\n    for(let b of words2){\r\n        tmp = counter(b);\r\n        for(let i=0; i<26; i++)\r\n            count[i] = Math.max(count[i], tmp[i]);\r\n    }\r\n    let list = []\r\n    for(let a of words1)\r\n        if(isSub(counter(a)))\r\n            list.push(a);\r\n    return list;\r\n};\r\n\r\nfunction isSub(tmp){\r\n    for(let i=0; i<26; i++)\r\n        if(tmp[i] < this.count[i])\r\n            return false;\r\n    return true;\r\n};\r\n\r\nfunction counter(s){\r\n    let tmp = Array(26).fill(0);\r\n    for(let c of s)\r\n        tmp[c.charCodeAt() - 97]++;\r\n    return tmp;\r\n};"
  }
}
