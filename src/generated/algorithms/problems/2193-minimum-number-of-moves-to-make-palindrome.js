export default {
  "id": 2193,
  "name": "Minimum Number of Moves to Make Palindrome",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome",
  "relativeDir": "M/Minimum Number of Moves to Make Palindrome",
  "slug": "2193-minimum-number-of-moves-to-make-palindrome",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 40,
    "java": 50,
    "python": 20
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tint minMovesToMakePalindrome(string s) {\r\n\t\tint len = s.length();\r\n\t\tstring strArr = s;        \r\n\t\tint steps = 0;\r\n\t\tint l = 0, r = len-1;                                           // use two pointers l for left and r for right. \r\n\r\n\t\twhile(l < r){            \r\n\t\t\tif(strArr[l] == strArr[r]){                                 // Both characters are equal. so keep going futher.\r\n\t\t\t\tl++; r--;\r\n\t\t\t}else{                                                      // Both characters are not equal.    \r\n\t\t\t\tint k = r;\r\n\t\t\t\tk = findKthIndexMatchingwithLthIndex(strArr, l, k);     // loop through k, until char at index k = char at index l              \r\n\r\n\t\t\t\tif(k == l){                                             // we did not find any char at k = char at index l    \r\n\t\t\t\t\tswap(strArr[l], strArr[l+1]);\r\n\t\t\t\t\tsteps++;   \r\n\t\t\t\t}else{                                                  \r\n\t\t\t\t\twhile(k < r){                                           \r\n\t\t\t\t\t\tswap(strArr[k], strArr[k+1]);\r\n\t\t\t\t\t\tsteps++;\r\n\t\t\t\t\t\tk++;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tl++; r--;\r\n\t\t\t\t}                \r\n\t\t\t}   // end of else\r\n\r\n\t\t}   // end of while\r\n\t\treturn steps;\r\n\t}\r\n\r\n\tint findKthIndexMatchingwithLthIndex(string strArr, int l, int k){\r\n\t\twhile(k > l){\r\n\t\t\tif(strArr[k] == strArr[l]){  return k;  }                    \r\n\t\t\tk--;\r\n\t\t}\r\n\t\treturn k;\r\n\t}\r\n};",
    "python": "class Solution(object):\r\n    def minMovesToMakePalindrome(self, s):\r\n        \"\"\"\r\n        :type s: str\r\n        :rtype: int\r\n        \"\"\"\r\n        count, length_of_s = 0, len(s)\r\n        if length_of_s <= 2:\r\n            return count\r\n        for i in reversed(range(length_of_s)):\r\n            if s[i] != s[0]:\r\n                continue\r\n            if i == 0:\r\n\t\t\t\t# move to middle is a speical case which takes len(s)/2 moves then do recursive for remaining part\r\n                count += len(s)/2 + self.minMovesToMakePalindrome(s[1:])  \r\n            else:\r\n\t\t\t    # this move takes len(s)-1 - i (move from i to last index len(s)-1)and then do recursive for remaining part\r\n                count += len(s)-1-i + self.minMovesToMakePalindrome(s[1:i]+s[i+1:])\r\n            break\r\n        return count",
    "java": "class Solution {\r\n\r\n\tpublic int minMovesToMakePalindrome(String s) {\r\n\t\tint len = s.length();\r\n\t\tchar[] strArr = s.toCharArray();        \r\n\t\tint steps = 0;\r\n\t\tint l = 0, r = len-1;                                           // use two pointers l for left and r for right. \r\n\r\n\t\twhile(l < r){            \r\n\t\t\tif(strArr[l] == strArr[r]){                                 // Both characters are equal. so keep going futher.\r\n\t\t\t\tl++; r--;\r\n\t\t\t}else{                                                      // Both characters are not equal.    \r\n\t\t\t\tint k = r;\r\n\t\t\t\tk = findKthIndexMatchingwithLthIndex(strArr, l, k);     // loop through k, until char at index k = char at index l              \r\n\r\n\t\t\t\tif(k == l){                                             // we did not find any char at k = char at index l    \r\n\t\t\t\t\tswap(strArr, l);\r\n\t\t\t\t\tsteps++;   \r\n\t\t\t\t}else{                                                  \r\n\t\t\t\t\twhile(k < r){                                           \r\n\t\t\t\t\t\tswap(strArr, k);\r\n\t\t\t\t\t\tsteps++;\r\n\t\t\t\t\t\tk++;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tl++; r--;\r\n\t\t\t\t}                \r\n\t\t\t}// end of else\r\n\r\n\t\t}   // end of while\r\n\t\tSystem.out.println(\"palindrome: \"+String.valueOf(strArr));\r\n\t\treturn steps;\r\n\r\n\t}\r\n\r\n\tpublic int findKthIndexMatchingwithLthIndex(char[] strArr, int l, int k){\r\n\t\twhile(k > l){\r\n\t\t\tif(strArr[k] == strArr[l]){  return k;  }                    \r\n\t\t\tk--;\r\n\t\t}\r\n\t\treturn k;\r\n\t}\r\n\r\n\tpublic void swap(char[] strArr, int l){\r\n\t\tif(l+1 < strArr.length){\r\n\t\t\tchar tempCh = strArr[l];\r\n\t\t\tstrArr[l] = strArr[l+1];\r\n\t\t\tstrArr[l+1] = tempCh;\r\n\t\t}\r\n\t}\r\n}"
  }
}
