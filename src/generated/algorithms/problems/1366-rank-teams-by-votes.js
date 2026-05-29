export default {
  "id": 1366,
  "name": "Rank Teams by Votes",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/rank-teams-by-votes",
  "relativeDir": "R/Rank Teams by Votes",
  "slug": "1366-rank-teams-by-votes",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 42,
    "java": 42,
    "python": 38,
    "javascript": 30
  },
  "languages": {
    "cpp": "// Runtime: 23 ms (Top 55.70%) | Memory: 11.9 MB (Top 18.51%)\r\nclass Solution {\r\npublic:\r\n\r\n    static bool cmp(vector<int>a, vector<int>b){\r\n\r\n        for(int i = 1; i<a.size(); i++){\r\n            if(a[i]!=b[i]){\r\n                return a[i]>b[i];\r\n            }\r\n        }\r\n\r\n        return a[0]<b[0];\r\n    }\r\n\r\n    string rankTeams(vector<string>& votes) {\r\n\r\n        int noofteams = votes[0].size();\r\n        string ans = \"\";\r\n        vector<vector<int>>vec(noofteams, vector<int>(noofteams+1, 0));\r\n\r\n        unordered_map<char, int>mp;\r\n        for(int i = 0; i<votes[0].size(); i++){\r\n            mp[votes[0][i]] = i;\r\n            vec[i][0] = votes[0][i]-'a';\r\n        }\r\n\r\n        for(string x: votes){\r\n            for(int i = 0; i<x.size(); i++){\r\n                vec[mp[x[i]]][i+1]++;\r\n            }\r\n        }\r\n\r\n        sort(vec.begin(), vec.end(), cmp);\r\n\r\n        for(int i = 0; i<vec.size(); i++){\r\n            ans.push_back(vec[i][0]+'a');\r\n        }\r\n\r\n        return ans;\r\n    }\r\n};",
    "python": "#[\"ABC\",\"ACB\",\"ABC\",\"ACB\",\"ACB\"]\r\n#d = {\r\n#    \"A\": [5, 0, 0],\r\n#    \"B\": [0, 2, 3],\r\n#    \"C\": [0, 3, 2]\r\n#}\r\n#keys represent the candidates\r\n#index of array in dict represent the rank\r\n#value of array item represent number of votes casted\r\n#ref: https://www.programiz.com/python-programming/methods/built-in/sorted\r\nclass Solution:\r\n    #T=O(mn + mlgm), S=O(mn)\r\n\t#n=number of votes\r\n\t#m=number of candidates and m(number of ranks) is constant(26)\r\n    def rankTeams(self, votes: List[str]) -> str:\r\n        d = {}\r\n        #build the dict\r\n        #T=O(mn), S=O(mn)\r\n\t\t#n=number of votes, m=number of candidates(26)\r\n        for vote in votes:\r\n            for i, c in enumerate(vote):\r\n                #if key not in dict\r\n                if c not in d:\r\n                    #d[char] = [0, 0, 0]\r\n                    d[c] = [0]*len(vote)\r\n                #increment the count of votes for each rank\r\n                #d[\"A\"][0] = 1\r\n                d[c][i] += 1\r\n        #sort the dict keys in ascending order because if there is a tie we return in ascending order\r\n\t\t#sorted uses a stable sorting algorithm\r\n        #T=O(mlgm), S=O(m)\r\n        vote_names = sorted(d.keys()) #d.keys()=[\"A\", \"B\", \"C\"]\r\n        #sort the dict keys based on votes for each rank in descending order\r\n        #T=O(mlgm), S=O(m)\r\n        #sorted() always returns a list\r\n        vote_rank = sorted(vote_names, reverse=True, key= lambda x: d[x])\r\n        #join the list\r\n        return \"\".join(vote_rank)",
    "java": "// Runtime: 13 ms (Top 71.24%) | Memory: 43.7 MB (Top 79.83%)\r\nclass Solution {\r\n    public String rankTeams(String[] votes) {\r\n        int n = votes.length;\r\n        int teams = votes[0].length();\r\n        Map<Character, int[]> map = new HashMap<>();\r\n        List<Character> chars = new ArrayList<>();\r\n\r\n        for(int i = 0 ; i < teams ; i++) {\r\n            char team = votes[0].charAt(i);\r\n            map.put(team, new int[teams]);\r\n            chars.add(team);\r\n        }\r\n\r\n        for(int i = 0 ; i < n ; i++) {\r\n            String round = votes[i];\r\n            for(int j = 0 ; j < round.length() ; j++) {\r\n                map.get(round.charAt(j))[j]+=1;\r\n            }\r\n        }\r\n\r\n        chars.sort((a,b) -> {\r\n            int[] l1 = map.get(a);\r\n            int[] l2 = map.get(b);\r\n            for(int i = 0 ; i < l1.length; i++) {\r\n                if(l1[i] < l2[i]) {\r\n                    return 1;\r\n                }\r\n                else if(l1[i] > l2[i]) {\r\n                    return -1;\r\n                }\r\n            }\r\n            return a.compareTo(b);\r\n        });\r\n\r\n        StringBuilder sb = new StringBuilder();\r\n        for(char c : chars) {\r\n            sb.append(c);\r\n        }\r\n        return sb.toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 195 ms (Top 7.95%) | Memory: 48.1 MB (Top 21.02%)\r\nvar rankTeams = function(votes) {\r\n     if(votes.length == 1)\r\n        return votes[0];\r\n    let map = new Map()\r\n    for(let vote of votes){\r\n        for(let i = 0; i < vote.length;i++){\r\n            if(!(map.has(vote[i]))){\r\n            //create all the values set as zero\r\n                map.set(vote[i],Array(vote.length).fill(0))\r\n            }\r\n            let val = map.get(vote[i])\r\n            val[i] = val[i] + 1\r\n            map.set(vote[i], val)\r\n        }\r\n    }\r\n\r\n    let obj = [...map.entries()]; //converting as array [\"A\",[5,0,0]]\r\n    obj = obj.sort((a,b) => {\r\n        for(let i = 0; i < a[1].length;i++){\r\n            if(a[1][i] > b[1][i])\r\n                return -1;\r\n            else if(a[1][i] < b[1][i])\r\n                return 1;\r\n        }\r\n        // if all chars are in same positon return the value charcode\r\n        return a[0].charCodeAt(0) - b[0].charCodeAt(0);\r\n    })\r\n    return obj.map(item => item[0]).join('')\r\n};"
  }
}
