export default {
  "id": 950,
  "name": "Reveal Cards In Increasing Order",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reveal-cards-in-increasing-order",
  "relativeDir": "R/Reveal Cards In Increasing Order",
  "slug": "0950-reveal-cards-in-increasing-order",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 52,
    "python": 17,
    "javascript": 11
  },
  "languages": {
    "cpp": "// Runtime: 14 ms (Top 18.03%) | Memory: 8.2 MB (Top 96.72%)\r\nclass Solution {\r\npublic:\r\n    vector<int> deckRevealedIncreasing(vector<int>& deck) {\r\n        int n = deck.size(), idx = 0, idx1 = 0;\r\n        vector<int> res(n, -1);\r\n        sort(deck.begin(), deck.end());\r\n        bool found = 1;\r\n        while(idx < n) {\r\n            if(res[idx1] == -1 and found) {\r\n                res[idx1] = deck[idx]; found = 0; idx++;\r\n            }\r\n            else if(res[idx1] == -1) found = 1;\r\n            idx1 = (idx1 +1)%n;\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "# Runtime: 61 ms (Top 23.0%) | Memory: 16.70 MB (Top 8.0%)\r\n\r\nclass Solution:\r\n    def deckRevealedIncreasing(self, deck: List[int]) -> List[int]:\r\n        def reveal(n):\r\n            lst = list(range(n))\r\n            ans = []\r\n            i = 0\r\n            while lst:\r\n                if not i&1: ans.append(lst.pop(0))\r\n                else: lst.append(lst.pop(0))\r\n                i += 1\r\n            return ans\r\n        ans = reveal(len(deck))\r\n        ans = sorted([v, i] for i, v in enumerate(ans))\r\n        deck.sort()\r\n        return (deck[j] for i,j in ans)",
    "java": "// Runtime: 5 ms (Top 59.29%) | Memory: 44.5 MB (Top 28.33%)\r\nclass Solution {\r\n    public int[] deckRevealedIncreasing(int[] deck) { // deck=[ 17,13,11,2,3,5,7 ]\r\n        Queue<Integer> ql = new LinkedList<Integer>();\r\n        for(int i=0;i<deck.length;i++)\r\n            ql.add(i);\r\n            // now the queue is [ 0, 1, 2, 3, 4, 5, 6 ]\r\n\r\n        int[] ans = new int[deck.length];\r\n        int k=0;\r\n                                     //index : 0 1 2 3 4 5 6\r\n        Arrays.sort(deck); //deck=[ 2 ,3 ,5, 7, 13, 11, 17 ]\r\n\r\n        while(!ql.isEmpty())\r\n        {\r\n            ans[ql.peek()]=deck[k];\r\n            ql.poll();\r\n            k++;\r\n            if(!ql.isEmpty())\r\n            {\r\n                ql.add(ql.peek());\r\n                ql.poll();\r\n            }\r\n        }\r\n        /*\r\n        ql=[0,1,2,3,4,5,6]\r\n        k=0;\r\n        ql=[2,3,4,5,6,1]\r\n        ans=[2,0,0,0,0,0,0] ans[0]=deck[0]\r\n        k=1;\r\n        ql=[4,5,6,1,3]\r\n        ans=[2,13,0,0,0,0,0] ans[2]=deck[1]\r\n        k=2;\r\n        ql=[6,1,3,5]\r\n        ans=[2,13,3,0,0,0,0] ans[4]=deck[2]\r\n        k=3;\r\n        ql=[3,5,1]\r\n        ans=[2,13,3,11,0,0,0] ans[6]=deck[3]\r\n        k=4;\r\n        ql=[1,5]\r\n        ans=[2,13,3,11,5,0,0] ans[3]=deck[4]\r\n        k=5;\r\n        ql=[5]\r\n        ans=[2,13,3,11,5,17,0] ans[1]=deck[5]\r\n        k=6;\r\n        ql=[]\r\n        ans=[2,13,3,11,5,17,7] ans[5]=deck[6]\r\n        */\r\n\r\n      return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 54 ms (Top 86.08%) | Memory: 44.10 MB (Top 46.84%)\r\n\r\nvar deckRevealedIncreasing = function(deck) {\r\n    let result = [];\r\n    deck = deck.sort((a,b) => b - a);\r\n    for (let i = 0; i < deck.length; i++) {\r\n      result.unshift(deck[i]);\r\n      if (i !== deck.length-1) result.unshift(result.pop());\r\n    }\r\n    return result;\r\n};"
  }
}
