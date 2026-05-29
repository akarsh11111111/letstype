export default {
  "id": 1002,
  "name": "Find Common Characters",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-common-characters",
  "relativeDir": "F/Find Common Characters",
  "slug": "1002-find-common-characters",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "python": 28,
    "javascript": 31
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<string> commonChars(vector<string>& words) {\r\n        vector<string> ans;\r\n        vector<int> v (26,0);\r\n        for(int i=0;i<words.size();i++){\r\n            vector<int> tmp (26,0);\r\n            for(auto ch: words[i]){\r\n                tmp[ch-'a']++;\r\n            }\r\n            if(i==0){\r\n                for(int i=0;i<26;i++)\r\n                    v[i]=tmp[i];\r\n            }\r\n            else\r\n                for(int i=0;i<26;i++)\r\n                    v[i]=min(v[i],tmp[i]);\r\n        }\r\n        for(int i=0;i<26;i++){\r\n            while(v[i]--){\r\n                string s;\r\n                char c='a'+i;\r\n                s.push_back(c);\r\n                ans.push_back(s);\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 87 ms (Top 42.12%) | Memory: 14.3 MB (Top 6.17%)\r\nclass Solution:\r\n    def _get_char_counts(self, s: str) -> dict[str]:\r\n        \"\"\"builds a dict of letters : count\"\"\"\r\n        d = {}\r\n        for i in s:\r\n            d[i] = d.get(i,0)+1\r\n        return d\r\n\r\n    def commonChars(self, words: list[str]) -> list[str]:\r\n        \"\"\"returns a string of letters common between a list of words (including duplicates)\"\"\"\r\n        if not words:\r\n            return\r\n\r\n        # O(n^2)\r\n        words = [self._get_char_counts(word) for word in words]\r\n\r\n        # O(nm), set intersection\r\n        common = words[0].keys()\r\n        for other in words[1:]:\r\n            common &= other.keys()\r\n\r\n        # O(nm), number of common characters across the number of words\r\n        result = []\r\n        for c in common:\r\n            result += [c] * min(count[c] for count in words)\r\n\r\n        return result",
    "javascript": "var commonChars = function(words) {\r\n//record the first word characters  in an array called minFreq\r\n//iterater over the rest of the input array\r\n    //record the characters for each word called freq\r\n    //update the corresponding minFreq element to the smaller one between each word and the first word\r\n//after collect all the words' freq and update the minFreq, iterate over the minReq\r\n  //push the element to the result \r\n  let res = [], minFreq = new Array(26).fill(0);\r\n  let firstWord = words[0];\r\n  for(let i = 0; i < firstWord.length; i++){\r\n    let index = firstWord.charCodeAt(i) - 97;\r\n    minFreq[index]++;\r\n  }\r\n  for(let word of words){\r\n    let freq = new Array(26).fill(0);\r\n    for(let i = 0; i < word.length; i++){\r\n      let index = word.charCodeAt(i) - 97;\r\n      freq[index]++;\r\n    }\r\n    for(let i = 0; i < 26; i++){\r\n      minFreq[i] = Math.min(minFreq[i], freq[i]);\r\n    }\r\n  }\r\n  for(let i = 0; i < 26; i++){\r\n    for(let q = 0; q < minFreq[i]; q++){\r\n      let letter = String.fromCharCode(i + 97);\r\n      res.push(letter);\r\n    }\r\n  }\r\n  return res;\r\n}"
  }
}
