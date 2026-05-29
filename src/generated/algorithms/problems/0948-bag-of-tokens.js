export default {
  "id": 948,
  "name": "Bag of Tokens",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/bag-of-tokens",
  "relativeDir": "B/Bag of Tokens",
  "slug": "0948-bag-of-tokens",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 28,
    "python": 24,
    "javascript": 34
  },
  "languages": {
    "cpp": "// Runtime: 15 ms (Top 23.40%) | Memory: 10.6 MB (Top 67.12%)\r\nclass Solution {\r\npublic:\r\n    int bagOfTokensScore(vector<int>& tokens, int power) {\r\n        sort(tokens.begin(),tokens.end());\r\n        int start=0,end=tokens.size()-1,score=0,ans=0;\r\n        while(start<=end){\r\n            if(power>=tokens[start]){\r\n                ans=max(ans,++score);\r\n                power-=tokens[start++];\r\n            } else if(score>0){\r\n                score--;\r\n                power+=tokens[end--];\r\n            } else {\r\n                return 0;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "// Runtime: 51 ms (Top 88.07%) | Memory: 17.40 MB (Top 31.65%)\r\n\r\nclass Solution:\r\n    def bagOfTokensScore(self, tokens: List[int], power: int) -> int:\r\n        tokens.sort()\r\n        i,j=0,len(tokens)-1\r\n        m=score=0\r\n        while i<j:\r\n            if tokens[i]>power and score==0:\r\n                break  \r\n            if tokens[i]<=power:\r\n                score+=1\r\n                power-=tokens[i]\r\n                m=max(m,score)\r\n                i+=1\r\n            else:\r\n                if score>0:\r\n                    score-=1\r\n                    power+=tokens[j]\r\n                    j-=1\r\n        if i<len(tokens) and tokens[i]<=power:\r\n            score+=1\r\n            m=max(m,score)\r\n        return m",
    "java": "class Solution {\r\n    public int bagOfTokensScore(int[] tokens, int power) {        \r\n        //initially score is 0, that's why in these conditions, return 0.        \r\n        if(tokens.length == 0 || power < tokens[0])\r\n\t\t\treturn 0;        \r\n        Arrays.sort(tokens); //sort the array\r\n        \r\n        int i = 0;\r\n        int r = tokens.length - 1;\r\n        int score = 0;\r\n        int answer = 0;\r\n        \r\n        while(i<=r){            \r\n            if(power >= tokens[i]){\r\n                power -= tokens[i++];                \r\n                answer = Math.max(answer, ++score); //play all tokens, but store the max score in answer.    \r\n            }\r\n            else if (score > 0){\r\n                power += tokens[r--]; //take power from greatest element\r\n                score--; //decrease by 1.\r\n            }            \r\n            //when you can't do any of the steps (face up, face down)\r\n            else\r\n                return answer;\r\n        }        \r\n        return answer;\r\n    }\r\n}",
    "javascript": "var bagOfTokensScore = function(tokens, power) {\r\n    const n = tokens.length;\r\n    \r\n    tokens.sort((a, b) => a - b);\r\n    \r\n    let maxScore = 0;\r\n    let currScore = 0;\r\n    \r\n    let left = 0;\r\n    let right = n - 1;\r\n    \r\n    while (left <= right) {\r\n        const leftPower = tokens[left];\r\n        const rightPower = tokens[right];\r\n        \r\n        if (power >= leftPower) {\r\n            power -= leftPower;\r\n            currScore++;\r\n\r\n            maxScore = Math.max(currScore, maxScore);\r\n            left++;\r\n        }\r\n        else if (currScore > 0) {\r\n            power += rightPower;\r\n            currScore--;\r\n            right--; \r\n        }\r\n        else {\r\n            return maxScore;\r\n        }\r\n    }\r\n    \r\n    return maxScore;\r\n};"
  }
}
