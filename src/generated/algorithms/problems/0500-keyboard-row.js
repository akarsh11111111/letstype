export default {
  "id": 500,
  "name": "Keyboard Row",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/keyboard-row",
  "relativeDir": "K/Keyboard Row",
  "slug": "0500-keyboard-row",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 48,
    "java": 26,
    "python": 15,
    "javascript": 28
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 30.57%) | Memory: 6.9 MB (Top 35.57%)\r\nclass DSU {\r\n    vector<int> parent, size;\r\n\r\n    vector<int> Q{'q','w','e','r','t','y','u','i','o','p','Q','W','E','R','T','Y','U','I','O','P'};\r\n    vector<int> A{'a','s','d','f','g','h','j','k','l','A','S','D','F','G','H','J','K','L'};\r\n    vector<int> Z{'z','x','c','v','b','n','m','Z','X','C','V','B','N','M'};\r\n\r\npublic:\r\n    DSU(){\r\n        for(int i= 0;i<123;i++) parent.push_back(i),size.push_back(1);\r\n        for(int i = 0; i<Q.size()-1;i++) findUnion(Q[i],Q[i+1]);\r\n        for(int i = 0; i<A.size()-1;i++) findUnion(A[i],A[i+1]);\r\n        for(int i = 0; i<Z.size()-1;i++) findUnion(Z[i],Z[i+1]);\r\n    }\r\n\r\n    int findParent(int x){\r\n        if(x==parent[x]) return x;\r\n        return parent[x] = findParent(parent[x]);\r\n    }\r\n\r\n    void findUnion(int a, int b){\r\n        a = findParent(a);\r\n        b = findParent(b);\r\n        if(a!=b) if(size[b]>size[a]) swap(a,b);parent[b] = a,size[a]+=size[b];\r\n    }\r\n};\r\n\r\nclass Solution {\r\npublic:\r\n    vector<string> findWords(vector<string>& words) {\r\n        int n = words.size();\r\n        DSU dsu;\r\n        vector<string> ans;\r\n        for(int i = 0;i<n;i++){\r\n            int ss = words[i].size();\r\n            string s = words[i];\r\n            if(ss==1) {ans.push_back(s);continue;}\r\n\r\n            bool sameSet = true;\r\n            for(int j = 0;j<ss-1;j++)\r\n                if(dsu.findParent(s[j])!=dsu.findParent(s[j+1])){\r\n                    sameSet = false;break;\r\n                }\r\n            if(sameSet)ans.push_back(s);\r\n        }return ans;\r\n    }\r\n};",
    "python": "// Runtime: 34 ms (Top 77.79%) | Memory: 17.40 MB (Top 7.9%)\r\n\r\nclass Solution:\r\n    def findWords(self, words: List[str]) -> List[str]:\r\n        #\r\n        set1 = {'q','w','e','r','t','y','u','i','o','p'}\r\n        set2 = {'a','s','d','f','g','h','j','k','l'}\r\n        set3 = {'z','x','c','v','b','n','m'}\r\n        \r\n        res = []\r\n        for i in words:\r\n            wordset = set(i.lower())\r\n            if (wordset&set1 == wordset) or (wordset&set2 == wordset) or (wordset&set3 == wordset):\r\n                res.append(i)\r\n        return res",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 41.50 MB (Top 13.89%)\r\n\r\nclass Solution {\r\n    public String[] findWords(String[] words) {\r\n        String s1 = \"qwertyuiopQWERTYUIOP\";\r\n        String s2 = \"asdfghjklASDFGHJKL\";\r\n        String s3 = \"zxcvbnmZXCVBNM\"; \r\n        ArrayList<String> list = new ArrayList<>();\r\n        for(int i=0;i<words.length;i++){\r\n            int count1=0,count2=0,count3=0,len=words[i].length();\r\n            for(int j=0;j<len;j++){\r\n                if(s1.contains(Character.toString(words[i].charAt(j))))\r\n                    count1++;\r\n                else if(s2.contains(Character.toString(words[i].charAt(j))))\r\n                    count2++;\r\n                else if(s3.contains(Character.toString(words[i].charAt(j))))\r\n                    count3++;\r\n                if(count1==len || count2==len || count3==len)\r\n                    list.add(words[i]);\r\n            }\r\n        }\r\n        String ans[] = new String[list.size()];\r\n        list.toArray(ans);\r\n        return ans;\r\n    }\r\n}",
    "javascript": "var findWords = function(words) {\r\nconst firstRow = {\"q\":true,\"w\":true,\"e\":true,\"r\":true,\"t\":true,\"y\":true,\"u\":true,\"i\":true,\"o\":true,\"p\":true }\r\nconst secondRow = {\"a\":true,\"s\":true,\"d\":true,\"f\":true,\"g\":true,\"h\":true,\"j\":true,\"k\":true,\"l\":true }\r\nconst thirdRow = {\"z\":true,\"x\":true,\"c\":true,\"v\":true,\"b\":true,\"n\":true,\"m\":true }\r\nlet result = [];\r\n\r\nconst helperFunc= (word)=>{\r\n    let targetRow;\r\n        //Determine in which row the word should be;\r\n        if(firstRow[word[0].toLowerCase()]) targetRow = firstRow;\r\n        if(secondRow[word[0].toLowerCase()]) targetRow = secondRow;\r\n        if(thirdRow[word[0].toLowerCase()]) targetRow = thirdRow;\r\n    \r\n    for(let i = 1;i<word.length;i++) {\r\n        if(!targetRow[word[i].toLowerCase()]) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n    }\r\n\r\n    for(let i =0;i<words.length;i++) {\r\n        if(helperFunc(words[i])) {\r\n            result.push(words[i])\r\n        }\r\n    }\r\n    return result;\r\n};"
  }
}
