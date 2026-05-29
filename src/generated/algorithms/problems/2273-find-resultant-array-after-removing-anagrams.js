export default {
  "id": 2273,
  "name": "Find Resultant Array After Removing Anagrams",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-resultant-array-after-removing-anagrams",
  "relativeDir": "F/Find Resultant Array After Removing Anagrams",
  "slug": "2273-find-resultant-array-after-removing-anagrams",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 16,
    "python": 10,
    "javascript": 33
  },
  "languages": {
    "cpp": "// Runtime: 15 ms (Top 33.9%) | Memory: 12.42 MB (Top 38.6%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<string> removeAnagrams(vector<string>& words) {\r\n        for(int i = 1;i<words.size();i++){\r\n            string x = words[i];\r\n            sort(x.begin(),x.end());\r\n            string y = words[i-1];\r\n            sort(y.begin(),y.end());\r\n            if(x == y){\r\n                words.erase(words.begin() + i);\r\n                i--;\r\n            }\r\n        }\r\n        return words;\r\n    }\r\n};",
    "python": "# Runtime: 111 ms (Top 32.35%) | Memory: 13.9 MB (Top 33.68%)\r\nclass Solution:\r\n    def removeAnagrams(self, words: List[str]) -> List[str]:\r\n        i = 0\r\n        while i < len(words) - 1:\r\n            if sorted(words[i]) == sorted(words[i + 1]):\r\n                words.remove(words[i + 1])\r\n                continue\r\n            i += 1\r\n        return words",
    "java": "class Solution {\r\n    public List<String> removeAnagrams(String[] words) {\r\n        String prev =\"\";\r\n        List<String> li=new ArrayList<>();\r\n        for(int i=0;i<words.length;i++){\r\n            char[] ch=words[i].toCharArray();\r\n            Arrays.sort(ch);\r\n            String curr=String.valueOf(ch);\r\n            if(!curr.equals(prev)){\r\n                li.add(words[i]);\r\n                prev=curr;\r\n            }\r\n        }\r\n        return li;\r\n    }\r\n}",
    "javascript": "var removeAnagrams = function(words) {\r\n    let n = words.length;\r\n    \r\n    for(let i=0; i<n-1; i++){\r\n        if(isAnagram(words[i], words[i+1])){\r\n            words.splice(i+1, 1);\r\n            i--\r\n            n--\r\n        }\r\n    }\r\n    return words\r\n};\r\n\r\nfunction isAnagram(a, b){\r\n    \r\n    let freqArr = new Array(26).fill(0);\r\n    if(a.length != b.length) return false\r\n    \r\n    for(let i=0; i<a.length; i++){\r\n        let idx1 = a[i].charCodeAt(0) - \"a\".charCodeAt(0);\r\n        freqArr[idx1]++;\r\n        let idx2 = b[i].charCodeAt(0) - \"a\".charCodeAt(0);\r\n        freqArr[idx2]--\r\n    }\r\n\r\n    \r\n    for(let i=0; i<26; i++){\r\n        if(freqArr[i] > 0){\r\n            return false\r\n        }\r\n    }\r\n    return true\r\n}"
  }
}
