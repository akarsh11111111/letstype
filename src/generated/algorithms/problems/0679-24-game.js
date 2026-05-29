export default {
  "id": 679,
  "name": "24 Game",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/24-game",
  "relativeDir": "0-9/24 Game",
  "slug": "0679-24-game",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 34,
    "java": 38,
    "python": 36,
    "javascript": 34
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    double cor=0.001;\r\n    void dfs(vector<double> &cards,bool &res){\r\n        if(res==true) return;\r\n        if(cards.size()==1){\r\n            if(abs(cards[0]-24)<cor) res=true;\r\n            return;\r\n        }\r\n        for(int i=0;i<cards.size();i++){\r\n            for(int j=0;j<i;j++){\r\n                double p=cards[i],q=cards[j];\r\n                vector<double> t{p+q,q-p,p-q,p*q};\r\n                if(p>cor) t.push_back(q/p);\r\n                if(q>cor) t.push_back(p/q);\r\n                cards.erase(cards.begin()+i);\r\n                cards.erase(cards.begin()+j);\r\n                for(double d:t){\r\n                    cards.push_back(d);\r\n                    dfs(cards,res);\r\n                    cards.pop_back();\r\n                }\r\n                cards.insert(cards.begin()+j,q);\r\n                cards.insert(cards.begin()+i,p);\r\n            }\r\n        }\r\n    }\r\n    bool judgePoint24(vector<int>& cards) {\r\n        bool res=false;\r\n        vector<double> card (cards.begin(),cards.end());\r\n        dfs(card,res);\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def judgePoint24(self, cards: List[int]) -> bool:\r\n        return self.allComputeWays(cards, 4, 24)\r\n        \r\n    def allComputeWays(self, nums, l, target):\r\n        if l == 1:\r\n            if abs(nums[0] - target) <= 1e-6:\r\n                return True\r\n            return False\r\n        for first in range(l):\r\n            for second in range(first + 1, l):\r\n                tmp1, tmp2 = nums[first], nums[second]\r\n                nums[second] = nums[l - 1]\r\n                \r\n                nums[first] = tmp1 + tmp2\r\n                if self.allComputeWays(nums, l - 1, target):\r\n                    return True\r\n                nums[first] = tmp1 - tmp2\r\n                if self.allComputeWays(nums, l - 1, target):\r\n                    return True\r\n                nums[first] = tmp2 - tmp1\r\n                if self.allComputeWays(nums, l - 1, target):\r\n                    return True\r\n                nums[first] = tmp1 * tmp2\r\n                if self.allComputeWays(nums, l - 1, target):\r\n                    return True\r\n                if tmp2:\r\n                    nums[first] = tmp1 / tmp2\r\n                    if self.allComputeWays(nums, l - 1, target):\r\n                        return True\r\n                if tmp1:\r\n                    nums[first] = tmp2 / tmp1\r\n                    if self.allComputeWays(nums, l - 1, target):\r\n                        return True\r\n                nums[first], nums[second] = tmp1, tmp2\r\n        return False",
    "java": "// Runtime: 1 ms (Top 96.55%) | Memory: 40.80 MB (Top 91.57%)\r\n\r\n// 0 ms. 100%\r\nclass Solution {\r\n    private static final double EPS = 1e-6;\r\n    private boolean backtrack(double[] A, int n) {\r\n        if(n == 1) return Math.abs(A[0] - 24) < EPS;\r\n        for(int i = 0; i < n; i++) {\r\n            for(int j = i + 1; j < n; j++) {\r\n                double a = A[i], b = A[j];\r\n                A[j] = A[n-1];\r\n                A[i] = a + b;\r\n                if(backtrack(A, n - 1)) return true;\r\n                A[i] = a - b;\r\n                if(backtrack(A, n - 1)) return true;\r\n                A[i] = b - a;\r\n                if(backtrack(A, n - 1)) return true;\r\n                A[i] = a * b;\r\n                if(backtrack(A, n - 1)) return true;\r\n                if(Math.abs(b) > EPS) {\r\n                    A[i] = a / b;\r\n                    if(backtrack(A, n - 1)) return true;\r\n                }\r\n                if(Math.abs(a) > EPS) {\r\n                    A[i] = b / a;\r\n                    if(backtrack(A, n - 1)) return true;\r\n                }\r\n                A[i] = a; A[j] = b;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n    public boolean judgePoint24(int[] nums) {\r\n        double[] A = new double[nums.length];\r\n        for(int i = 0; i < nums.length; i++) A[i] = nums[i];\r\n        return backtrack(A, A.length);\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} cards\r\n * @return {boolean}\r\n1487\r\n7-1 8-4\r\n */\r\nvar judgePoint24 = function(cards) {\r\n    let minV = 0.00000001;\r\n    let numL = [];\r\n    cards.forEach(card=>numL.push(card));\r\n    function judge(nums){\r\n        if(nums.length === 1) return Math.abs(nums[0]-24)<=minV;\r\n        else{\r\n            for(let i = 0 ;i<nums.length;i++){\r\n                for(let j = 0 ;j<i;j++){\r\n                    let a = nums[i] ,b = nums[j];\r\n                    let val =[a + b, a - b, b - a, a * b, a / b, b / a];\r\n                    let copy =[...nums];\r\n                    copy.splice(i,1);\r\n                    copy.splice(j,1);\r\n                    for(let v of val){\r\n                        copy.push(v);\r\n                        if (judge(copy)) {\r\n                            return true;\r\n                        }\r\n                        copy.pop();\r\n                    }\r\n                }\r\n            }\r\n            return false;\r\n        }\r\n    }\r\n    return judge(numL);\r\n};"
  }
}
