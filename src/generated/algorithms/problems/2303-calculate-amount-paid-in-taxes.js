export default {
  "id": 2303,
  "name": "Calculate Amount Paid in Taxes",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/calculate-amount-paid-in-taxes",
  "relativeDir": "C/Calculate Amount Paid in Taxes",
  "slug": "2303-calculate-amount-paid-in-taxes",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 22,
    "python": 21,
    "javascript": 12
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 90.16%) | Memory: 14.00 MB (Top 9.45%)\r\n\r\nclass Solution {\r\npublic:\r\n    double calculateTax(vector<vector<int>>& brackets, int income) {\r\n        double ans =0;\r\n        int back=0;\r\n        for(auto x:brackets){\r\n            int upper = x[0], percent=x[1];\r\n            if(upper>income){\r\n                ans += (income-back)*percent; break;}\r\n            else ans += (upper-back)*percent;\r\n            back = upper;\r\n        }\r\n        return (ans/100);\r\n    }\r\n};",
    "python": "# Runtime: 75 ms (Top 95.72%) | Memory: 13.9 MB (Top 34.37%)\r\n\r\nclass Solution:\r\n    def calculateTax(self, brackets: List[List[int]], income: int) -> float:\r\n        taxtot=0\r\n        if(brackets[0][0]<income):\r\n            taxtot+=brackets[0][0]*(brackets[0][1])\r\n            income-=brackets[0][0]\r\n        else:\r\n            taxtot+=income*(brackets[0][1])\r\n            return taxtot/100\r\n        i=1\r\n        while(income>0 and i<len(brackets)):\r\n            if(income>(brackets[i][0]-brackets[i-1][0])):\r\n                taxtot+=(brackets[i][0]-brackets[i-1][0])*brackets[i][1]\r\n                income-=brackets[i][0]-brackets[i-1][0]\r\n            else:\r\n                taxtot+=income*brackets[i][1]\r\n                income=0\r\n            i+=1\r\n        return taxtot/100",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 45.10 MB (Top 7.1%)\r\n\r\nclass Solution {\r\n    public double calculateTax(int[][] brackets, int income) {\r\n        int prevIncome = 0;\r\n        double res = 0;\r\n        for(int i =0; i<brackets.length; i++){\r\n            double diff = brackets[i][0] - prevIncome;\r\n            if(diff > income){\r\n                res += (income*brackets[i][1]/100.0);\r\n                income = 0;\r\n            }else{\r\n                res += (diff*brackets[i][1])/100;\r\n                income -= diff;\r\n            }\r\n            prevIncome = brackets[i][0];\r\n            if(income == 0) return res;\r\n            //System.out.println(prevIncome+\" \"+res+ \" \"+ income +\" \"+ diff + \"  \"+(diff*brackets[i][1]/100));\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 116 ms (Top 23.96%) | Memory: 44.6 MB (Top 21.88%)\r\nvar calculateTax = function(brackets, income) {\r\n    return brackets.reduce(([tax, prev], [upper, percent]) => {\r\n        let curr = Math.min(income, upper - prev);\r\n        tax += curr * (percent / 100);\r\n\r\n        income -= curr;\r\n        if (income <= 0) brackets.length = 0;\r\n\r\n        return [tax, upper];\r\n    }, [0, 0])[0];\r\n};"
  }
}
