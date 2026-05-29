export default {
  "id": 2131,
  "name": "Longest Palindrome by Concatenating Two Letter Words",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words",
  "relativeDir": "L/Longest Palindrome by Concatenating Two Letter Words",
  "slug": "2131-longest-palindrome-by-concatenating-two-letter-words",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 21,
    "python": 15,
    "javascript": 45
  },
  "languages": {
    "cpp": "// Runtime: 823 ms (Top 29.55%) | Memory: 167.6 MB (Top 95.91%)\r\nclass Solution {\r\npublic:\r\n    int longestPalindrome(vector<string>& words) {\r\n\r\n       int count[26][26] = {};\r\n       int ans =0;\r\n\r\n            for(auto w : words){\r\n                int a = w[0] - 'a';\r\n                int b = w[1] - 'a';\r\n\r\n                if(count[b][a]){\r\n                    ans+= 4;\r\n                    count[b][a]--; // decrement the count as we found mirror word\r\n                }else\r\n                    count[a][b]++; //increment the current word count if we not find any mirror word\r\n            }\r\n\r\n            for(int i=0;i<26;i++){\r\n                if(count[i][i]){\r\n                    ans+=2;\r\n                    break;\r\n                }\r\n             }\r\n\r\n    return ans;\r\n\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def longestPalindrome(self, words):\r\n        wc = collections.Counter(words)\r\n        aa = 0  # count how many words contain only two identical letters like 'aa'\r\n        center = 0  # if one count of 'aa' is odd, that means it can be the center of the palindrome, answer can plus 2\r\n        abba = 0 # count how many word pairs like ('ab', 'ba') and they can put on both sides respectively\r\n\r\n        for w, c in wc.items():\r\n            if w[0] == w[1]: # like 'aa', 'bb', ...\r\n                aa += c // 2 * 2 # if there are 3 'aa', we can only use 2 'aa' put on both sides respectively\r\n                # if one count of 'aa' is odd, that means it can be the center of the palindrome, answer can plus 2\r\n                if c % 2 == 1: center = 2\r\n            else:\r\n                abba += min(wc[w], wc[w[::-1]]) * 0.5  # will definitely double counting\r\n        return aa * 2 + int(abba) * 4 + center",
    "java": "// Runtime: 7 ms (Top 99.82%) | Memory: 57.9 MB (Top 94.96%)\r\nclass Solution {\r\n  public int longestPalindrome(String[] words) {\r\n    int[][] freq = new int[26][26];//array for all alphabet combinations\r\n    for (String word : words)\r\n      freq[word.charAt(0) - 'a'][word.charAt(1) - 'a']++;// here we first increase the freq for every word\r\n    int left = 0;//to store freq counts\r\n    boolean odd = false;\r\n    for (int i = 0; i != 26; i++) {//iterate over our array\r\n      odd |= (freq[i][i] & 1) == 1;//means odd number of freq for similar words are there\r\n      left += freq[i][i] / 2;\r\n      for (int j = i + 1; j != 26; j++)//nested iteration to find non similar pairs\r\n        left += Math.min(freq[i][j], freq[j][i]);//taking min times from both present\r\n    }\r\n    int res = left * 2 * 2;//res from total freq found!!\r\n    if (odd){\r\n        res+=2;// if odd then adding 2\r\n    }\r\n    return res;\r\n  }\r\n}",
    "javascript": "// Runtime: 642 ms (Top 13.93%) | Memory: 67.4 MB (Top 22.14%)\r\nvar longestPalindrome = function(words) {\r\n    const n = words.length;\r\n    const map = new Map();\r\n\r\n    let len = 0;\r\n\r\n    for (const word of words) {\r\n         const backward = word.split(\"\").reverse().join(\"\");\r\n\r\n        if (map.has(backward)) {\r\n            len += (word.length * 2);\r\n            map.set(backward, map.get(backward) - 1);\r\n\r\n            if (map.get(backward) === 0) map.delete(backward);\r\n        }\r\n        else {\r\n            if (!map.has(word)) map.set(word, 0);\r\n            map.set(word, map.get(word) + 1);\r\n        }\r\n    }\r\n\r\n    let maxLenSelfPalindrome = 0;\r\n\r\n    for (const word of map.keys()) {\r\n        if (isPalindrome(word)) {\r\n            maxLenSelfPalindrome = Math.max(maxLenSelfPalindrome, word.length);\r\n        }\r\n    }\r\n\r\n    return len + maxLenSelfPalindrome;\r\n\r\n    function isPalindrome(word) {\r\n        let left = 0;\r\n        let right = word.length - 1;\r\n\r\n        while (left < right) {\r\n            if (word[left] != word[right]) return false;\r\n            left++;\r\n            --right;\r\n        }\r\n\r\n        return true;\r\n    }\r\n};"
  }
}
