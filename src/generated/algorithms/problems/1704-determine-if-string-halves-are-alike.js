export default {
  "id": 1704,
  "name": "Determine if String Halves Are Alike",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/determine-if-string-halves-are-alike",
  "relativeDir": "D/Determine if String Halves Are Alike",
  "slug": "1704-determine-if-string-halves-are-alike",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 26,
    "python": 9,
    "javascript": 16
  },
  "languages": {
    "cpp": "// Runtime: 11 ms (Top 9.91%) | Memory: 6.8 MB (Top 26.17%)\r\nclass Solution {\r\npublic:\r\n    bool halvesAreAlike(string s) {\r\n        unordered_set<char> set = {'a', 'e', 'i', 'o', 'u','A','I','E','O','U'};\r\n        int i=0,j=s.size()/2,cnt=0;\r\n        while(j<s.size()){\r\n            if(set.find(s[i])!=set.end()) cnt++;\r\n            if(set.find(s[j])!=set.end()) cnt--;\r\n            i++;\r\n            j++;\r\n        }\r\n        return cnt==0;\r\n    }\r\n};",
    "python": "vowels = \"aeiouAEIOU\"\r\n\r\nclass Solution:\r\n    def halvesAreAlike(self, S: str) -> bool:\r\n        mid, ans = len(S) // 2, 0\r\n        for i in range(mid):\r\n            if S[i] in vowels: ans += 1\r\n            if S[mid+i] in vowels: ans -=1\r\n        return ans == 0",
    "java": "// Runtime: 10 ms (Top 23.59%) | Memory: 42.5 MB (Top 46.22%)\r\nclass Solution {\r\n    public boolean halvesAreAlike(String s) {\r\n        //add vowels to the set\r\n        Set<Character> set = new HashSet<>();\r\n        set.add('a');\r\n        set.add('e');\r\n        set.add('i');\r\n        set.add('o');\r\n        set.add('u');\r\n        set.add('A');\r\n        set.add('E');\r\n        set.add('I');\r\n        set.add('O');\r\n        set.add('U');\r\n\r\n        //find the mid\r\n        int mid = s.length() / 2;\r\n        int count = 0;\r\n        //increment the count for left half, decrement count for the second half if its a vowel\r\n        for (int i = 0; i < s.length(); i++)\r\n            count += (set.contains(s.charAt(i))) ? ((i < mid) ? 1 : -1) : 0;\r\n        //finally count should be 0 to match left and right half\r\n        return count == 0;\r\n    }\r\n}",
    "javascript": "// Runtime: 82 ms (Top 75.18%) | Memory: 42.5 MB (Top 85.19%)\r\nvar halvesAreAlike = function(s) {\r\n    let isVowel = [\"a\",\"e\",\"i\",\"o\",\"u\",\"A\",\"E\",\"I\",\"O\",\"U\"];\r\n    let count = 0;\r\n    for (let i = 0; i < s.length / 2; i++) {\r\n        if (isVowel.indexOf(s[i]) !== -1) {\r\n            count++;\r\n        }\r\n    }\r\n    for (let i = s.length / 2; i < s.length; i++) {\r\n        if (isVowel.indexOf(s[i]) !== -1) {\r\n            count--;\r\n        }\r\n    }\r\n    return count === 0;\r\n};"
  }
}
