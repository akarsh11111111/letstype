export default {
  "id": 744,
  "name": "Find Smallest Letter Greater Than Target",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-smallest-letter-greater-than-target",
  "relativeDir": "F/Find Smallest Letter Greater Than Target",
  "slug": "0744-find-smallest-letter-greater-than-target",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 28,
    "python": 11,
    "javascript": 20
  },
  "languages": {
    "cpp": "// Runtime: 24 ms (Top 57.17%) | Memory: 15.9 MB (Top 25.00%)\r\nclass Solution {\r\npublic:\r\n    char nextGreatestLetter(vector<char>& letters, char target) {\r\n\r\n        int siz = letters.size();\r\n        bool isPresent = false;\r\n        char ans;\r\n        char temp = target;\r\n\r\n        if (target == letters[siz-1]) return letters[0];\r\n\r\n        for(int i=0; i<siz-1; i++) {\r\n            if (target == letters[i] && target != letters[i+1]) {\r\n                ans = letters[i+1];\r\n                isPresent = true;\r\n                break;\r\n            }\r\n        }\r\n\r\n        // if target not in letters\r\n        while (!isPresent) {\r\n            temp = temp +1;\r\n            isPresent = binary_search(letters.begin(), letters.end(), temp); // used STL !!\r\n            if(isPresent) {\r\n                ans=temp;\r\n                break;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def nextGreatestLetter(self, letters: List[str], target: str) -> str:\r\n        beg = 0\r\n        end = len(letters)-1\r\n        while beg <= end:\r\n            mid = (beg+end)//2\r\n            if letters[mid]>target:\r\n                end = mid -1\r\n            else:\r\n                beg = mid +1\r\n        return letters[beg] if beg<len(letters) else letters[0]",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 44.10 MB (Top 77.94%)\r\n\r\nclass Solution {\r\n    public char nextGreatestLetter(char[] letters, char target) {\r\n        char res=letters[0];\r\n        int start=0;\r\n        int end=letters.length-1;\r\n        while(start<=end)\r\n        {\r\n            int mid=start+(end-start)/2;\r\n            if(letters[mid]==target)\r\n            {\r\n                start=mid+1;\r\n            }\r\n            else if(target>letters[mid])\r\n            {\r\n                start=mid+1;\r\n            }\r\n            else if(letters[mid]>target)\r\n            {\r\n                res=letters[mid];\r\n                end=mid-1;\r\n            }\r\n        }\r\n        return res;\r\n        \r\n    }\r\n}",
    "javascript": "/**\r\n * @param {character[]} letters\r\n * @param {character} target\r\n * @return {character}\r\n */\r\nvar nextGreatestLetter = function(letters, target) {\r\n    let result=[]\r\n    for (letter of letters){\r\n        if (letter>target){\r\n            result.push(letter);\r\n        }\r\n    }\r\n    if (result.length){\r\n        return result[0];\r\n    }\r\n    else{\r\n        return letters[0];\r\n    }\r\n    \r\n};"
  }
}
