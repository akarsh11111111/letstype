export default {
  "id": 2024,
  "name": "Maximize the Confusion of an Exam",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximize-the-confusion-of-an-exam",
  "relativeDir": "M/Maximize the Confusion of an Exam",
  "slug": "2024-maximize-the-confusion-of-an-exam",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 62,
    "python": 37,
    "javascript": 16
  },
  "languages": {
    "cpp": "// Runtime: 30 ms (Top 84.45%) | Memory: 11.9 MB (Top 20.06%)\r\nclass Solution {\r\npublic:\r\n    int maxConsecutiveAnswers(string answerKey, int k) {\r\n        return max(helper(answerKey,k,'T'),helper(answerKey,k,'F'));\r\n    }\r\n\r\n    int helper(string answerKey, int k,char c){\r\n        int start = 0;\r\n        int end = 0;\r\n        int count = 0;\r\n        int ans = 0;\r\n        while(end<answerKey.length()){\r\n            if(answerKey[end]==c)count++;\r\n            while(count>k){\r\n                if(answerKey[start]==c)count--;\r\n                start++;\r\n            }\r\n            ans = max(ans,end-start+1);\r\n            end++;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 482 ms (Top 77.29%) | Memory: 14.4 MB (Top 36.09%)\r\nclass Solution:\r\n    def maxConsecutiveAnswers(self, string: str, k: int) -> int:\r\n        result = 0\r\n        j = 0\r\n        count1 = k\r\n        for i in range(len(string)):\r\n            if count1 == 0 and string[i] == \"F\":\r\n                while string[j] != \"F\":\r\n                    j+=1\r\n                count1+=1\r\n                j+=1\r\n\r\n            if string[i] == \"F\":\r\n                if count1 > 0:\r\n                    count1-=1\r\n\r\n            if i - j + 1 > result:\r\n                result = i - j + 1\r\n\r\n        j = 0\r\n        count2 = k\r\n        for i in range(len(string)):\r\n            if count2 == 0 and string[i] == \"T\":\r\n                while string[j] != \"T\":\r\n                    j+=1\r\n                count2+=1\r\n                j+=1\r\n\r\n            if string[i] == \"T\":\r\n                if count2 > 0:\r\n                    count2-=1\r\n\r\n            if i - j + 1 > result:\r\n                result = i - j + 1\r\n\r\n        return result",
    "java": "// Runtime: 98 ms (Top 6.64%) | Memory: 48.1 MB (Top 51.04%)\r\n\r\nclass Solution {\r\n\r\n    // Binary Search + Sliding Window fixed\r\n\r\n    public int maxConsecutiveAnswers(String answerKey, int k) {\r\n\r\n        int start = 1 ;\r\n        int end = answerKey.length();\r\n        int max_length = 0 ;\r\n\r\n        while(start <= end) {\r\n            int mid = start+(end-start)/2 ;\r\n            if(isMax(answerKey , k , mid)) {\r\n                max_length = mid ;\r\n                start = mid+1 ;\r\n            }else {\r\n                end = mid-1 ;\r\n            }\r\n        }\r\n\r\n        return max_length ;\r\n    }\r\n\r\n    public boolean isMax(String answerKey , int k , int max_val) {\r\n\r\n        int T_count = 0 ;\r\n        int F_count = 0 ;\r\n\r\n        int i = 0 ;\r\n        int j = 0 ;\r\n\r\n        while(j < answerKey.length()) {\r\n\r\n            if(answerKey.charAt(j) == 'T') {\r\n                T_count++ ;\r\n            }else {\r\n                F_count++ ;\r\n            }\r\n\r\n            if(j-i+1 == max_val) {\r\n\r\n                if(Math.max(T_count, F_count)+k >= max_val) {\r\n                    return true ;\r\n                }\r\n\r\n                if(answerKey.charAt(i) == 'T') {\r\n                    T_count-- ;\r\n                }else {\r\n                    F_count-- ;\r\n                }\r\n\r\n                i++ ;\r\n            }\r\n\r\n            j++ ;\r\n        }\r\n\r\n        return false ;\r\n    }\r\n}",
    "javascript": "var maxConsecutiveAnswers = function(answerKey, k) {\r\n    let [left, right, numOfTrue, numOfFalse, max] = new Array(5).fill(0);\r\n    const moreChanges = () => numOfTrue > k && numOfFalse > k;\r\n    while (right < answerKey.length) {\r\n        if(answerKey[right] === 'T') numOfTrue++;\r\n        if(answerKey[right] === 'F') numOfFalse++;\r\n        while(moreChanges()) {\r\n            if(answerKey[left] === 'T') numOfTrue--;\r\n            if(answerKey[left] === 'F') numOfFalse--;    \r\n            left++;    \r\n        }\r\n        max = Math.max(max, right - left + 1);\r\n        right++;\r\n    }\r\n    return max;\r\n};"
  }
}
