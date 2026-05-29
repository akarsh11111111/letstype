export default {
  "id": 2187,
  "name": "Minimum Time to Complete Trips",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-time-to-complete-trips",
  "relativeDir": "M/Minimum Time to Complete Trips",
  "slug": "2187-minimum-time-to-complete-trips",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 26,
    "python": 22,
    "javascript": 25
  },
  "languages": {
    "cpp": "// Runtime: 736 ms (Top 18.65%) | Memory: 94.5 MB (Top 68.73%)\r\nclass Solution {\r\npublic:\r\n    long long minimumTime(vector<int>& time, int totalTrips) {\r\n        long long anstillnow=-1;\r\n\r\n        long long left=1, right= 100000000000001; //can also write this as 1+1e14\r\n\r\n        while(left<=right){\r\n            long long mid= left+ (right-left)/2; // find mid point like this to avoid overflow\r\n            long long curr_trips=0;\r\n            for(int t: time){\r\n                curr_trips+= mid/t;\r\n            }\r\n\r\n            if(curr_trips>=totalTrips){\r\n                anstillnow=mid;\r\n                right=mid-1;\r\n            }\r\n\r\n            else{\r\n                left=mid+1;\r\n            }\r\n        }\r\n\r\n        return anstillnow;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def minimumTime(self, time, totalTrips):\r\n        anstillnow=-1;\r\n        left=1;\r\n        right= 100000000000001;\r\n        \r\n        while(left<=right):\r\n            mid= left+ (right-left)/2      #find mid point like this to avoid overflow\r\n            \r\n            curr_trips=0;\r\n            \r\n            for t in time:\r\n                curr_trips+= mid/t\r\n            \r\n            if(curr_trips>=totalTrips):\r\n                anstillnow=mid\r\n                right=mid-1\r\n            \r\n            else:\r\n                left=mid+1\r\n\r\n        return anstillnow",
    "java": "class Solution {\r\n    public long minimumTime(int[] time, int totalTrips) {\r\n        long anstillnow=-1;\r\n        \r\n        long left=1, right= 100000000000001L;\r\n        \r\n        while(left<=right){\r\n            long mid= left+ (right-left)/2;  //find mid point like this to avoid overflow\r\n            long curr_trips=0;\r\n            for(int t: time){\r\n                curr_trips+= mid/t;\r\n            }\r\n            \r\n            if(curr_trips>=totalTrips){\r\n                anstillnow=mid;\r\n                right=mid-1;\r\n            }\r\n            \r\n            else{\r\n                left=mid+1;\r\n            }\r\n        }\r\n        \r\n        return anstillnow;        \r\n    }\r\n}",
    "javascript": "var minimumTime = function(time, totalTrips) {\r\n    let low = 1;\r\n    let high = Number.MAX_SAFE_INTEGER;\r\n    let ans = 0;\r\n    \r\n    while(low <= high) {\r\n        let mid = Math.floor(low + (high - low) / 2); // to prevent overflow\r\n        \r\n        if(isPossible(time, mid, totalTrips)) {\r\n            ans = mid\r\n            high = mid - 1;\r\n        } else {\r\n            low = mid + 1;\r\n        }\r\n    }\r\n    return ans;\r\n};\r\n\r\nfunction isPossible(arr, mid, totalTrips) {\r\n    let trips = 0;\r\n    for (let i = 0; i < arr.length; i++) {\r\n      trips += Math.floor(mid / arr[i]);\r\n    }\r\n    return trips >= totalTrips;\r\n}"
  }
}
