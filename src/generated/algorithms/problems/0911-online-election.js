export default {
  "id": 911,
  "name": "Online Election",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/online-election",
  "relativeDir": "O/Online Election",
  "slug": "0911-online-election",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 42,
    "java": 51,
    "python": 19,
    "javascript": 35
  },
  "languages": {
    "cpp": "class TopVotedCandidate {\r\npublic:\r\n    vector<int> pref;\r\n    vector<int> glob_times;\r\n    TopVotedCandidate(vector<int>& persons, vector<int>& times) {\r\n        int n = times.size();\r\n        glob_times = times;\r\n        pref.resize(n);\r\n        vector<int> cnt;\r\n        int sz = persons.size();\r\n        cnt.resize(sz+1, 0);\r\n        cnt[persons[0]]++;\r\n        pref[0] = persons[0];\r\n        int maxi = 1;\r\n        int maxi_person = persons[0];\r\n        for(int i = 1; i < n; i++){            \r\n            cnt[persons[i]]++;\r\n            if(cnt[persons[i]] > maxi){\r\n                maxi = cnt[persons[i]];\r\n                maxi_person = persons[i];\r\n            }\r\n            else if(cnt[persons[i]] == maxi){\r\n                maxi_person = persons[i];\r\n            }\r\n            \r\n            pref[i] = maxi_person;\r\n        }\r\n    } \r\n    \r\n    int q(int t) {\r\n        \r\n        int it = upper_bound(glob_times.begin(), glob_times.end(), t) - glob_times.begin();\r\n        if(it == 0) it++;\r\n        return pref[it-1];\r\n    }\r\n};\r\n\r\n/**\r\n * Your TopVotedCandidate object will be instantiated and called as such:\r\n * TopVotedCandidate* obj = new TopVotedCandidate(persons, times);\r\n * int param_1 = obj->q(t);\r\n */",
    "python": "class TopVotedCandidate:\r\n\r\n    def __init__(self, persons: List[int], times: List[int]):\r\n        counter = defaultdict(int)\r\n\r\n        mostVotePersons = [0] * len(persons) # mostVotePersons[i] is the most vote person at times[i]\r\n        largestVote = -1 # keep largest vote person index\r\n        for i in range(len(persons)):\r\n            counter[persons[i]] += 1\r\n            if largestVote == -1 or counter[persons[i]] >= counter[largestVote]:\r\n                largestVote = persons[i]\r\n            mostVotePersons[i] = largestVote\r\n        \r\n        self.times = times\r\n        self.mostVotePersons = mostVotePersons\r\n\r\n    def q(self, t: int) -> int:\r\n        idx = bisect_right(self.times, t) - 1 # binary search on times to find the most recent time before t\r\n        return self.mostVotePersons[idx]",
    "java": "// Runtime: 91 ms (Top 91.57%) | Memory: 51.6 MB (Top 89.43%)\r\nclass TopVotedCandidate {\r\n    int[] persons;\r\n    int[] times;\r\n    int length;\r\n    Map<Integer, Integer> voteCount;\r\n    Map<Integer, Integer> voteLead;\r\n\r\n    public TopVotedCandidate(int[] persons, int[] times) {\r\n        this.persons = persons;\r\n        this.times = times;\r\n        length = times.length-1;\r\n        int leadCount = 0;\r\n        int leadPerson = -1;\r\n        voteCount = new HashMap<>();\r\n        voteLead = new HashMap<>();\r\n        for(int i=0; i<=length; i++){\r\n            int newCount = voteCount.getOrDefault(persons[i], 0) + 1;\r\n            voteCount.put(persons[i], newCount);\r\n            if(newCount >= leadCount){\r\n                leadCount = newCount;\r\n                leadPerson = persons[i];\r\n            }\r\n            voteLead.put(times[i], leadPerson);\r\n        }\r\n    }\r\n\r\n    public int q(int t) {\r\n        int leadPerson = -1;\r\n        if(voteLead.containsKey(t)) {\r\n            leadPerson = voteLead.get(t);\r\n        }\r\n        else if(t < times[0]){\r\n            leadPerson = voteLead.get(times[0]);\r\n        }\r\n        else if(t > times[length]){\r\n            leadPerson = voteLead.get(times[length]);\r\n        }\r\n        else {\r\n            int low = 0;\r\n            int high = length;\r\n            while(low <= high){\r\n                int mid = low + (high-low)/2;\r\n                if(times[mid] > t) high = mid - 1;\r\n                else low = mid + 1;\r\n            }\r\n            leadPerson = voteLead.get(times[high]);\r\n        }\r\n        return leadPerson;\r\n    }\r\n}",
    "javascript": "var TopVotedCandidate = function(persons, times) {\r\n    this.times = times;\r\n    this.len = times.length;\r\n    this.votes = new Array(this.len).fill(0);\r\n    \r\n    let max = 0; // max votes received by any single candidate so far.\r\n    let leader = -1l;\r\n    \r\n    this.leaders = persons.map((person, i) => {\r\n        this.votes[person]++;\r\n        \r\n        if (this.votes[person] >= max) {\r\n            max = this.votes[person];\r\n            leader = person;\r\n        }\r\n        \r\n        return leader;\r\n    });\r\n    \r\n};\r\n\r\nTopVotedCandidate.prototype.q = function(t) {\r\n    let left = 0;\r\n    let right = this.len - 1;\r\n    \r\n    while (left <= right) {\r\n        const mid = left + Math.floor((right - left) / 2);\r\n        \r\n        if (this.times[mid] === t) return this.leaders[mid];\r\n        else if (this.times[mid] < t) left = mid + 1;\r\n        else right = mid - 1;\r\n    }\r\n\t\r\n    return this.leaders[right];\r\n};"
  }
}
