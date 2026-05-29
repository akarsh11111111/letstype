export default {
  "id": 640,
  "name": "Solve the Equation",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/solve-the-equation",
  "relativeDir": "S/Solve the Equation",
  "slug": "0640-solve-the-equation",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 44,
    "python": 17,
    "javascript": 17
  },
  "languages": {
    "cpp": "    def solveEquation(self, equation: str) -> str:\r\n    \"\"\" O(N)TS \"\"\"\r\n    x, y, p = 0, 0, 1\r\n    for i in re.finditer(r\"=|[+-]?\\d*x|[+-]?\\d+\", equation):\r\n        g = i.group()\r\n        if g == '=':\r\n            p = -1\r\n        elif g[-1] == 'x':\r\n            x += p * int(g.replace('x', '1' if len(g) == 1 or not g[-2].isdigit() else ''))\r\n        else:\r\n            y += -p * int(g)\r\n\r\n    if x == 0 == y:\r\n        return 'Infinite solutions'\r\n    elif x == 0:\r\n        return \"No solution\"\r\n    return f'x={y // x}'",
    "python": "    def solveEquation(self, equation: str) -> str:\r\n    \"\"\" O(N)TS \"\"\"\r\n    x, y, p = 0, 0, 1\r\n    for i in re.finditer(r\"=|[+-]?\\d*x|[+-]?\\d+\", equation):\r\n        g = i.group()\r\n        if g == '=':\r\n            p = -1\r\n        elif g[-1] == 'x':\r\n            x += p * int(g.replace('x', '1' if len(g) == 1 or not g[-2].isdigit() else ''))\r\n        else:\r\n            y += -p * int(g)\r\n\r\n    if x == 0 == y:\r\n        return 'Infinite solutions'\r\n    elif x == 0:\r\n        return \"No solution\"\r\n    return f'x={y // x}'",
    "java": "class Solution {\r\n    public int[] simplifyEqn(String eqn){\r\n        int prevSign = 1;\r\n        int sumX = 0;\r\n        int sumNums = 0;\r\n        for(int i=0;i<eqn.length();){\r\n            int coEff = 0;\r\n            int j = i;\r\n            while(j<eqn.length() && Character.isDigit(eqn.charAt(j))){\r\n                coEff = coEff*10 + (eqn.charAt(j)-'0');\r\n                j++;\r\n            }\r\n            if(j<eqn.length() && eqn.charAt(j)=='x'){\r\n                if(i==j)\r\n                    coEff = 1;\r\n                sumX += prevSign*coEff;\r\n                j++;\r\n            }\r\n            else{\r\n                sumNums += prevSign*coEff; \r\n            }\r\n            if(j<eqn.length() && eqn.charAt(j)=='+')\r\n                prevSign = 1;\r\n            else if(j<eqn.length() && eqn.charAt(j)=='-')\r\n                prevSign = -1;\r\n            i=++j;\r\n        }\r\n        return new int[] {sumX, sumNums};\r\n    }\r\n    public String solveEquation(String equation) {\r\n        String[] leftNRight = equation.split(\"=\");\r\n        String left = leftNRight[0], right = leftNRight[1];\r\n        int[] leftEqn = simplifyEqn(left);\r\n        int[] rightEqn = simplifyEqn(right);\r\n        int x = leftEqn[0]-rightEqn[0];\r\n        int num = rightEqn[1]-leftEqn[1];\r\n        if(x==0)\r\n            if(num==0)\r\n                return \"Infinite solutions\";\r\n            else\r\n                return \"No solution\";\r\n        return \"x=\"+num/x;\r\n    }\r\n}",
    "javascript": "    def solveEquation(self, equation: str) -> str:\r\n    \"\"\" O(N)TS \"\"\"\r\n    x, y, p = 0, 0, 1\r\n    for i in re.finditer(r\"=|[+-]?\\d*x|[+-]?\\d+\", equation):\r\n        g = i.group()\r\n        if g == '=':\r\n            p = -1\r\n        elif g[-1] == 'x':\r\n            x += p * int(g.replace('x', '1' if len(g) == 1 or not g[-2].isdigit() else ''))\r\n        else:\r\n            y += -p * int(g)\r\n\r\n    if x == 0 == y:\r\n        return 'Infinite solutions'\r\n    elif x == 0:\r\n        return \"No solution\"\r\n    return f'x={y // x}'"
  }
}
