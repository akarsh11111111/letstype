export default {
  "id": 1456,
  "name": "Maximum Number of Vowels in a Substring of Given Length",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length",
  "relativeDir": "M/Maximum Number of Vowels in a Substring of Given Length",
  "slug": "1456-maximum-number-of-vowels-in-a-substring-of-given-length",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 31,
    "python": 30,
    "javascript": 27
  },
  "languages": {
    "cpp": "// Runtime: 66 ms (Top 14.27%) | Memory: 9.8 MB (Top 99.25%)\r\nclass Solution {\r\npublic:\r\n    bool checkVowel(char c){\r\n        if(c == 'a' || c == 'e' || c =='i' || c == 'o' || c == 'u') return true;\r\n        return false;\r\n    }\r\n    int maxVowels(string s, int k) {\r\n        int count = 0;\r\n        int ans = 0;\r\n        for(int i = 0; i < k; i++){\r\n            if(checkVowel(s[i])) count++;\r\n        }\r\n        ans = count;\r\n        int j = 0;\r\n        for(int i = k; i<s.size(); i++){\r\n            if(checkVowel(s[i])) count++;\r\n            if(checkVowel(s[j])) count--;\r\n            j++;\r\n            ans = max(ans, count);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxVowels(self, s: str, k: int) -> int:\r\n        \r\n        def find_count_vowels(string):\r\n            lst_vowels= ['a', 'e', 'i', 'o', 'u']\r\n            c=0\r\n            for i in string:\r\n                if i in lst_vowels:\r\n                    c+=1\r\n            return c\r\n            \r\n        \r\n        lst_vowels= ['a', 'e', 'i', 'o', 'u']\r\n        if k>len(s):\r\n            return find_count_vowels(s)\r\n        dp = [0]*(len(s)-k+1)\r\n        dp[0] = find_count_vowels(s[:k])\r\n        for i in range(1,len(s)-k+1):\r\n            \r\n           \r\n            if s[i-1] in lst_vowels and s[i+k-1] in lst_vowels:\r\n                dp[i] = dp[i-1]\r\n            elif s[i-1] in lst_vowels and s[i+k-1] not in lst_vowels:\r\n                dp[i] = dp[i-1] - 1\r\n\r\n            elif s[i-1] not in lst_vowels and s[i+k-1] in lst_vowels:\r\n                dp[i] = dp[i-1] + 1\r\n            else:\r\n                dp[i] = dp[i-1]\r\n        return max(dp)",
    "java": "// Runtime: 7 ms (Top 97.98%) | Memory: 45.20 MB (Top 9.52%)\r\n\r\nclass Solution {\r\n    public int maxVowels(String s, int k) {\r\n        int n = s.length();\r\n        int maxVowels = 0;\r\n        int count = 0;\r\n\r\n        int[] vowels = new int[128];\r\n        vowels['a'] = 1;\r\n        vowels['e'] = 1;\r\n        vowels['i'] = 1;\r\n        vowels['o'] = 1;\r\n        vowels['u'] = 1;\r\n\r\n        for (int i = 0; i < k; i++) {\r\n            count += vowels[s.charAt(i)];\r\n        }\r\n\r\n        maxVowels = count;\r\n        for (int i = k; i < n; i++) {\r\n            count += vowels[s.charAt(i)] - vowels[s.charAt(i - k)];\r\n            maxVowels = Math.max(maxVowels, count);\r\n            //System.out.println(Arrays.toString(vowels));\r\n            if (maxVowels == k) {\r\n                return maxVowels; \r\n            }\r\n        }\r\n        return maxVowels;\r\n    }\r\n}",
    "javascript": "var maxVowels = function(s, k) {\r\n    let vowels = ['a', 'e', 'i', 'o', 'u'];\r\n    let maxCount = 0;\r\n    let start = 0; // the left edge of the window\r\n    let count = 0; // count of vowels for current substring\r\n\t// expanding the right edge of the window one character at a time\r\n    for (let end = 0; end < s.length; end++) {\r\n\t    // increment count of vowels for current substring if the current character is present in vowels array\r\n        if (vowels.includes(s[end])) {\r\n            count +=1;\r\n        }\r\n        // if substring is longer than K, let's shrink the window by moving left edge\r\n        if (end - start + 1 > k) {\r\n\t\t\t// reduce the current count by one if the character on the left edge is vowel\r\n            if(vowels.includes(s[start])) {\r\n                count -=1;\r\n            }\r\n\t\t\t//shrinking the left edge of the window\r\n            start +=1;\r\n        }\r\n\t\t// checking if current count is larger than current maximum count\r\n        maxCount = Math.max(maxCount, count)\r\n\t\t// if maxCount is equal to K, no need to check further, it is the max possible count\r\n        if (maxCount == k) return maxCount;\r\n    }\r\n    return maxCount;\r\n};"
  }
}
