export default {
  "id": 1733,
  "name": "Minimum Number of People to Teach",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-number-of-people-to-teach",
  "relativeDir": "M/Minimum Number of People to Teach",
  "slug": "1733-minimum-number-of-people-to-teach",
  "availableLanguages": [
    "cpp",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 48,
    "python": 36
  },
  "languages": {
    "cpp": "// Runtime: 310 ms (Top 93.88%) | Memory: 61.5 MB (Top 78.57%)\r\nclass Solution {\r\npublic:\r\n    bool checkinvalid( int a, int b, vector<vector<int>>& languages){ //helper func., checks if a and b can communicate or not\r\n        a--; b--;\r\n        for( int i=0;i<languages[a].size();i++){\r\n            if(find(languages[b].begin(), languages[b].end(), languages[a][i]) != languages[b].end()) return false;\r\n        }\r\n        return true;\r\n    }\r\n\r\n    int minimumTeachings(int n, vector<vector<int>>& languages, vector<vector<int>>& friendships) {\r\n        int m= languages.size();\r\n        vector<vector<int>> g(m+1, vector<int>(0)); // graph to store adjacency list with people as nodes & friendships as edges\r\n        // create graph\r\n        for( int i=0;i<friendships.size();i++){\r\n            g[friendships[i][0]].push_back(friendships[i][1]);\r\n            g[friendships[i][1]].push_back(friendships[i][0]);\r\n        }\r\n\r\n        vector<int> voters(m+1,0); // to store people who cant communicate with atleast a friend\r\n        int voterscount=0;\r\n        for( int i=1;i<m+1;i++){\r\n             for( int j=0;j<g[i].size();j++){\r\n                if( checkinvalid(i, g[i][j], languages)){ // ith can vote\r\n                    voters[i]=1;\r\n                    voterscount++;\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n        unordered_map<int,int> mappy; // language -> votes\r\n        int maxvotes=0;\r\n\r\n        for( int i=1;i<m+1;i++){\r\n            if(voters[i]==1){\r\n                for( int j: languages[i-1]){\r\n                    mappy[j]++;\r\n\r\n                    if(maxvotes<mappy[j]){\r\n                        maxvotes= mappy[j];\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        return voterscount - maxvotes; // # who need to be taught the language\r\n    }\r\n};",
    "python": "# Runtime: 2444 ms (Top 20.45%) | Memory: 28.6 MB (Top 5.68%)\r\nclass Solution:\r\n    def minimumTeachings(self, n: int, languages: List[List[int]], friendships: List[List[int]]) -> int:\r\n        \"\"\"\r\n        1. Find out users who need to be taught\r\n        2. If no user needs to be taught, return 0\r\n        3. For all users who need to be taught a language, find the most popular language among them\r\n        4. Teach that language to rest of the users who need to be taught.\r\n        \"\"\"\r\n        need_to_be_taught = set()\r\n        languages = [set(language) for language in languages]\r\n\r\n        # 1. Find out users who needs to be taught\r\n        for user1, user2 in friendships:\r\n            # Adjust the 1 based indexing to 0 based indexing\r\n            user1 = user1 - 1\r\n            user2 = user2 - 1\r\n            if not (languages[user1] & languages[user2]):\r\n                need_to_be_taught.update([user1, user2])\r\n\r\n        # 2. If no user needs to be taught, return 0\r\n        if not need_to_be_taught:\r\n            return 0\r\n\r\n        # 3. For all users who needs to be taught a language, find the most popular language among them\r\n        language_spoken_by = collections.defaultdict(int)\r\n        for user in need_to_be_taught:\r\n            # for each user increment the count of languages he can speak\r\n            for language in languages[user]:\r\n                language_spoken_by[language] += 1\r\n\r\n        # find occurrence of language spoken by maximum users who can't communicate with each other\r\n        popular_language_count = max(language_spoken_by.values())\r\n\r\n        # 4. Teach that language to rest of the users who need to be taught.\r\n        return len(need_to_be_taught)- popular_language_count"
  }
}
