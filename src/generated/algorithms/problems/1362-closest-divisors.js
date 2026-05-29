export default {
  "id": 1362,
  "name": "Closest Divisors",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/closest-divisors",
  "relativeDir": "C/Closest Divisors",
  "slug": "1362-closest-divisors",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 58,
    "python": 6,
    "javascript": 31
  },
  "languages": {
    "cpp": "class Solution \r\n{\r\n\tpublic:\r\n\tvector<int> findnumbers(int num)\r\n\t{\r\n\t\tint m=sqrt(num);\r\n\t\twhile(num%m!=0)\r\n\t\t{\r\n\t\t\tm--;\r\n\t\t}\r\n\t\treturn {num/m,m};\r\n\t}\r\n\tvector<int> closestDivisors(int num) \r\n\t{\r\n\t\tvector<int> ans1=findnumbers(num+1);\r\n\t\tvector<int> ans2=findnumbers(num+2);\r\n\t\tif(abs(ans1[0]-ans1[1])<abs(ans2[0]-ans2[1]))\r\n\t\t\treturn ans1;\r\n\t\treturn ans2;\r\n\t}\r\n};",
    "python": "class Solution:\r\n\tdef closestDivisors(self, num: int) -> List[int]:\r\n\t\tfor i in range(int((num+2) ** (0.5)), 0, -1):  \r\n\t\t\tif not (num+1) % i: return [i, (num+1)//i] \r\n\t\t\tif not (num+2) % i: return [i, (num+2)//i] \r\n\t\treturn []",
    "java": "class Solution {\r\n    public int[] closestDivisors(int num) {\r\n        int ans[]=new int[2];\r\n        double a=Math.sqrt(num+1);\r\n        double b=Math.sqrt(num+2);\r\n        if(num==1){\r\n            ans[0]=1;\r\n            ans[1]=2;\r\n            return ans;\r\n        }\r\n        else if(a%1==0){\r\n            ans[0]=(int)a;\r\n            ans[1]=(int)b;\r\n            return ans;\r\n        }\r\n        else if(b%1==0){\r\n            ans[0]=(int)b;\r\n            ans[1]=(int)b;\r\n             return ans;\r\n        }\r\n        else{\r\n            int m=(int)Math.sqrt(num);\r\n       int diff1=Integer.MAX_VALUE;\r\n       int y=0,z=0,w=0,f=0;\r\n       for(int i=2;i<=m;i++){\r\n           if((num+1)%i==0){\r\n               y=i;\r\n               z=(num+1)/y;\r\n               int r=Math.abs(y-z);\r\n               if(r<diff1){\r\n                   diff1=r;\r\n               }\r\n           }\r\n       }\r\n       int diff2=Integer.MAX_VALUE;\r\n        for(int i=2;i<=m;i++){\r\n           if((num+2)%i==0){\r\n               w=i;\r\n               f=(num+2)/w;\r\n               int r=Math.abs(w-f);\r\n               if(r<diff2){\r\n                   diff2=r;\r\n               }\r\n           }\r\n       }\r\n            if(diff1<diff2){\r\n                ans[0]=y;\r\n            ans[1]=z;\r\n                 return ans;\r\n            }\r\n            else{\r\n                ans[0]=w;\r\n                ans[1]=f;\r\n                 return ans;\r\n            }\r\n        } \r\n    }\r\n}```",
    "javascript": "// Runtime: 145 ms (Top 27.27%) | Memory: 42.3 MB (Top 59.09%)\r\n/**\r\n * @param {number} num\r\n * @return {number[]}\r\n */\r\nvar closestDivisors = function(num) {\r\n    const n1 = num + 1;\r\n    const n2 = num + 2;\r\n\r\n    let minDiff = Infinity;\r\n    let result = [];\r\n    for(let i = Math.floor(Math.sqrt(n2)); i >= 1; i--) {\r\n        if(n1 % i === 0) {\r\n            const diff = Math.abs(i - (n1 / i));\r\n            if(diff < minDiff) {\r\n                minDiff = diff;\r\n                result = [i, n1 / i]\r\n            }\r\n        }\r\n\r\n        if(n2 % i === 0) {\r\n            const diff = Math.abs(i - (n2 / i));\r\n            if(diff < minDiff) {\r\n                minDiff = diff;\r\n                result = [i, n2 / i]\r\n            }\r\n        }\r\n    }\r\n\r\n    return result;\r\n};"
  }
}
