export default {
  "id": 2232,
  "name": "Minimize Result by Adding Parentheses to Expression",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression",
  "relativeDir": "M/Minimize Result by Adding Parentheses to Expression",
  "slug": "2232-minimize-result-by-adding-parentheses-to-expression",
  "availableLanguages": [
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "java",
  "lineCounts": {
    "java": 29,
    "python": 12,
    "javascript": 26
  },
  "languages": {
    "python": "class Solution:\r\n    def minimizeResult(self, expression: str) -> str:\r\n        plus_index, n, ans = expression.find('+'), len(expression), [float(inf),expression] \r\n        def evaluate(exps: str):\r\n            return eval(exps.replace('(','*(').replace(')', ')*').lstrip('*').rstrip('*'))\r\n        for l in range(plus_index):\r\n            for r in range(plus_index+1, n):\r\n                exps = f'{expression[:l]}({expression[l:plus_index]}+{expression[plus_index+1:r+1]}){expression[r+1:n]}'\r\n                res = evaluate(exps)\r\n                if ans[0] > res:\r\n                    ans[0], ans[1] = res, exps\r\n        return ans[1]",
    "java": "// Runtime: 8 ms (Top 39.1%) | Memory: 41.03 MB (Top 42.0%)\r\n\r\nclass Solution {\r\n    public String minimizeResult(String expression) {\r\n        String[] sp = expression.split(\"\\\\+\");\r\n        String left = sp[0];\r\n        String right = sp[1];\r\n        \r\n        int min = Integer.MAX_VALUE;\r\n        String result = \"(\" + expression + \")\";\r\n\t\t\r\n        for(int i=0; i<left.length(); i++) { //Index at which we add `(`  for left\r\n            int leftMul = left.substring(0, i).equals(\"\") ? 1 : Integer.parseInt(left.substring(0,i));\r\n            int leftNum = Integer.parseInt(left.substring(i));\r\n            \r\n            for(int j=1; j<=right.length(); j++) { //Index at which we add `)` for right\r\n                int rightMul = right.substring(j).equals(\"\") ? 1 : Integer.parseInt(right.substring(j));\r\n                int rightNum = Integer.parseInt(right.substring(0,j));\r\n                \r\n                int sum = leftMul * (leftNum + rightNum) * rightMul;\r\n                if(sum < min) {\r\n                    min = sum;\r\n                    result = left.substring(0, i) + \"(\" + left.substring(i) + \"+\" + right.substring(0, j) + \")\" + right.substring(j);\r\n                }\r\n            }\r\n        }\r\n        return result;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {string} expression\r\n * @return {string}\r\n */\r\nvar minimizeResult = function(expression) {\r\n    const [left, right] = expression.split(\"+\");\r\n    let res = [`(${expression})`, +left + +right];\r\n    \r\n    for(let i = 0; i < left.length; i++) {\r\n        const i1 = left.slice(0, i) || 1;\r\n        const i2 = left.slice(i);\r\n        \r\n        for(let j = 1; j <= right.length; j++) {\r\n            const j1 = right.slice(0, j);\r\n            const j2 = right.slice(j) || 1;\r\n\r\n            const tempTotal = i1*(+i2 + +j1)*j2;\r\n                        \r\n            if(res[1] > tempTotal ) {\r\n                res[0] = `${left.slice(0, i)}(${i2}+${j1})${right.slice(j)}`;\r\n                res[1] = tempTotal\r\n            }\r\n        }\r\n    }\r\n    return res[0]\r\n};"
  }
}
