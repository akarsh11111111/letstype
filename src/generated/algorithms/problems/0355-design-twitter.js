export default {
  "id": 355,
  "name": "Design Twitter",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/design-twitter",
  "relativeDir": "D/Design Twitter",
  "slug": "0355-design-twitter",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 59,
    "python": 24,
    "javascript": 32
  },
  "languages": {
    "cpp": "class Twitter {\r\npublic:\r\n    map<int,priority_queue<pair<int,int>,vector<pair<int,int>>,greater<pair<int,int>>>> user;\r\n    map<int,set<int>> connect;\r\n    int time=0;\r\n    Twitter() {\r\n        \r\n    }\r\n    \r\n    void postTweet(int userId, int tweetId) {\r\n        user[userId].push({time,tweetId});// stores as (time,tweet) pair to min heap\r\n        time++;\r\n        if(user[userId].size()>10)// keeping max 10 recents post of a user\r\n            user[userId].pop();\r\n    }\r\n    void fun(priority_queue<pair<int,int>>& pq,int id)//add elements from min heap(id) to max heap(pq)\r\n    {\r\n        vector<vector<int>> temp;\r\n        while(!user[id].empty())\r\n        {\r\n            int a=user[id].top().first;\r\n            int b=user[id].top().second;\r\n            user[id].pop();\r\n            pq.push({a,b});\r\n            temp.push_back({a,b});\r\n        }\r\n        for(auto x:temp)\r\n        {\r\n            user[id].push({x[0],x[1]});\r\n        }\r\n    }\r\n    vector<int> getNewsFeed(int userId) {\r\n        vector<int> v;\r\n        priority_queue<pair<int,int>> pq;\r\n        fun(pq,userId);// user itself\r\n        for(auto x:connect[userId])// posts by followers\r\n        {\r\n            fun(pq,x);\r\n        }\r\n        int i=0;\r\n        while(!pq.empty())\r\n        {\r\n            v.push_back(pq.top().second);\r\n            pq.pop();\r\n            i++;\r\n            if(i==10)\r\n                break;\r\n        }\r\n        return v;\r\n    }\r\n    \r\n    void follow(int followerId, int followeeId) {\r\n        connect[followerId].insert(followeeId);\r\n    }\r\n    \r\n    void unfollow(int followerId, int followeeId) {\r\n        connect[followerId].erase(followeeId);\r\n    }\r\n};",
    "python": "class Twitter:\r\n\r\n    def __init__(self):\r\n        self.tweets = []\r\n        self.friends = defaultdict(list)\r\n\r\n    def postTweet(self, userId: int, tweetId: int) -> None:\r\n        self.tweets.append([userId, tweetId])   \r\n\r\n    def getNewsFeed(self, userId: int) -> List[int]:\r\n        try:\r\n            tweets = [x[1] for x in self.tweets if x[0] in [userId]+self.friends[userId]]\r\n            return list(reversed(tweets))[:10]\r\n        except:\r\n            return \r\n\r\n    def follow(self, followerId: int, followeeId: int) -> None:\r\n        self.friends[followerId].append(followeeId)  \r\n\r\n    def unfollow(self, followerId: int, followeeId: int) -> None:\r\n        try:\r\n            self.friends[followerId].remove(followeeId)\r\n        except:\r\n            pass",
    "javascript": "// Runtime: 48 ms (Top 79.27%) | Memory: 49.00 MB (Top 5.82%)\r\n\r\nvar Twitter = function() {\r\n    this.users = new Map();\r\n    this.tweets = [];\r\n};\r\n\r\nTwitter.prototype.postTweet = function(userId, tweetId) {\r\n    if(!this.users.has(userId)) this.users.set(userId, new Set());\r\n    this.tweets.push({userId, tweetId})\r\n};\r\n\r\nTwitter.prototype.getNewsFeed = function(userId) {\r\n    let user = this.users.get(userId);\r\n    let recentTweets = [];\r\n    for(let i = this.tweets.length - 1; i >= 0 && recentTweets.length < 10; i--){\r\n        if(user.has(this.tweets[i].userId) || this.tweets[i].userId === userId){\r\n            recentTweets.push(this.tweets[i].tweetId);\r\n        }\r\n    }\r\n  return recentTweets;\r\n};\r\n\r\nTwitter.prototype.follow = function(followerId, followeeId) {\r\n    let user = this.users.get(followerId) || new Set();\r\n    user.add(followeeId);\r\n    this.users.set(followerId, user);\r\n};\r\n\r\nTwitter.prototype.unfollow = function(followerId, followeeId) {\r\n    this.users.get(followerId)?.delete(followeeId);\r\n};"
  }
}
