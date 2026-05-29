export default {
  "id": 1488,
  "name": "Avoid Flood in The City",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/avoid-flood-in-the-city",
  "relativeDir": "A/Avoid Flood in The City",
  "slug": "1488-avoid-flood-in-the-city",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 27,
    "python": 28,
    "javascript": 49
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> avoidFlood(vector<int>& rains) {\r\n        vector<int> ans(rains.size() , -1) ;\r\n        unordered_map<int,int> indices ; //store the lake and its index \r\n        set<int> st ; //stores the indices of zeros \r\n        \r\n        for(int i = 0 ; i < rains.size() ; ++i ){\r\n            if(!rains[i]) st.insert(i) ;\r\n            else{\r\n                if(indices.find(rains[i]) == end(indices)) indices[rains[i]] = i ;\r\n                else{\r\n                    int prevDay = indices[rains[i]] ;\r\n                    auto it = st.upper_bound(prevDay) ;\r\n                    if(it == end(st)) return {} ;\r\n                    ans[*it] = rains[i] ;\r\n                    indices[rains[i]] = i ;\r\n                    st.erase(it);\r\n                }\r\n            }\r\n        }\r\n        \r\n        for(int i = 0 ; i < ans.size(); ++i ){\r\n            if(!rains[i] and ans[i] == -1) ans[i] = 1 ;\r\n        }\r\n        return ans ;\r\n    }\r\n};",
    "python": "from bisect import bisect_left\r\n\r\nclass Solution:\r\n    def avoidFlood(self, rains):\r\n        full_lakes, dry_dates = {}, []\r\n        ans = [-1] * len(rains)\r\n\r\n        for date, rain_lake in enumerate(rains):\r\n            if rain_lake == 0:  # no rain, we can dry one lake\r\n                dry_dates.append(date)  # keep dry date, we'll decide later\r\n                continue\r\n\r\n            if rain_lake in full_lakes:  # the lake is already full\r\n                # BS find out earliest day we can use to dry that lake | greedy\r\n                dry_day = bisect_left(dry_dates, full_lakes[rain_lake])\r\n\r\n                if dry_day >= len(dry_dates): return []  # can not find a date to dry this lake\r\n\r\n                ans[dry_dates.pop(dry_day)] = rain_lake  # dry this lake at the date we choose\r\n\r\n            # remember latest rain on this lake\r\n            full_lakes[rain_lake] = date\r\n\r\n        # we may have dry dates remain, on these days, rain > 0, we can not use -1, just choose day 1 to dry (maybe nothing happend)\r\n        for dry_day in dry_dates:\r\n            ans[dry_day] = 1\r\n\r\n        return ans",
    "java": "// Runtime: 70 ms (Top 47.1%) | Memory: 59.86 MB (Top 71.2%)\r\n\r\nclass Solution {\r\n    public int[] avoidFlood(int[] rains) {\r\n        // the previous appeared idx of rains[i]\r\n        Map<Integer, Integer> map = new HashMap<>();\r\n        TreeSet<Integer> zeros = new TreeSet<>();\r\n        int[] res = new int[rains.length];\r\n        for (int i = 0; i < rains.length; i++) {\r\n            if (rains[i] == 0) {\r\n                zeros.add(i);\r\n            } else {\r\n                if (map.containsKey(rains[i])) {\r\n                    // find the location of zero that can be used to empty rains[i]\r\n                    Integer next = zeros.ceiling(map.get(rains[i]));\r\n                    if (next == null) return new int[0];\r\n                    res[next] = rains[i];\r\n                    zeros.remove(next);\r\n                }\r\n                res[i] = -1;\r\n\t\t\t\tmap.put(rains[i], i);\r\n            }\r\n        }\r\n        for (int i : zeros) res[i] = 1;\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 1794 ms (Top 18.18%) | Memory: 80.7 MB (Top 40.91%)\r\nvar avoidFlood = function(rains) {\r\n    const n = rains.length;\r\n    const filledLakes = new Map();\r\n    const res = new Array(n).fill(-1);\r\n    const dryDays = [];\r\n\r\n    for (let i = 0; i < n; i++) {\r\n        const lake = rains[i]; // lake to rain on\r\n\r\n        if (lake === 0) {\r\n        // It is a dry day\r\n            dryDays.push(i);\r\n        }\r\n        else if (!filledLakes.has(lake)) {\r\n        // The lake is not filled yet, so we let it be filled (we just don't want it to be rained on again and be flooded)\r\n            filledLakes.set(lake, i);\r\n        }\r\n        else {\r\n        // The lake is already filled. We want to see if a dry day was available after the lake was previously rained on so that we can empty the lake\r\n            const lake_index = filledLakes.get(lake); //\r\n            const dry_index = binarySearch(lake_index);\r\n\r\n            if (dry_index === dryDays.length) return []; // there was no dry day after the lake was previouly filled\r\n\r\n            res[dryDays[dry_index]] = lake; // mark the earliest dry day that was used in our result array\r\n            filledLakes.set(lake, i); // we need to update the day that the lake is rained on again\r\n            dryDays.splice(dry_index, 1); // remove the dry day that was used (this is not very efficient, but it just makes our code cleaner)\r\n        }\r\n    }\r\n\r\n    dryDays.forEach((day) => res[day] = 1);\r\n\r\n    return res;\r\n\r\n    function binarySearch(target) {\r\n        let left = 0;\r\n        let right = dryDays.length - 1;\r\n\r\n        while (left <= right) {\r\n            const mid = left + Math.floor((right - left) / 2);\r\n\r\n            if (dryDays[mid] < target) left = mid + 1;\r\n            else right = mid - 1;\r\n        }\r\n\r\n        return left;\r\n    }\r\n};"
  }
}
