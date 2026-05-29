export default {
  "id": 2126,
  "name": "Destroying Asteroids",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/destroying-asteroids",
  "relativeDir": "D/Destroying Asteroids",
  "slug": "2126-destroying-asteroids",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 28,
    "python": 10
  },
  "languages": {
    "cpp": "// Runtime: 263 ms (Top 83.31%) | Memory: 102.6 MB (Top 92.47%)\r\nclass Solution {\r\npublic:\r\n    bool asteroidsDestroyed(int mass, vector<int>& asteroids) {\r\n\r\n        int n = asteroids.size();\r\n        sort(begin(asteroids), end(asteroids));\r\n\r\n        long long planetMass = mass;\r\n\r\n        for(auto& asteroid : asteroids) {\r\n            if(planetMass < asteroid) return false;\r\n            planetMass += asteroid;\r\n        }\r\n        return true;\r\n    }\r\n};",
    "python": "# Runtime: 2207 ms (Top 14.71%) | Memory: 27.8 MB (Top 42.78%)\r\nclass Solution:\r\n    def asteroidsDestroyed(self, mass: int, asteroids: List[int]) -> bool:\r\n        asteroids = sorted(asteroids)\r\n        for i in asteroids:\r\n            if i <= mass:\r\n                mass += i\r\n            else:\r\n                return False\r\n        return True",
    "java": "// Runtime: 476 ms (Top 5.23%) | Memory: 135.2 MB (Top 5.23%)\r\nclass Solution {\r\n    public boolean asteroidsDestroyed(int mass, int[] asteroids) {\r\n        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a,b)->b-a);\r\n        PriorityQueue<Integer> minHeap = new PriorityQueue<>();\r\n\r\n        for(int val:asteroids)\r\n            maxHeap.add(val);\r\n\r\n        long bigMass = mass;\r\n\r\n        while(maxHeap.size()>0){\r\n            int curr = maxHeap.poll();\r\n\r\n            if(bigMass>=curr){\r\n                bigMass+=curr;\r\n                while(minHeap.size()>0 && bigMass>=minHeap.peek()){\r\n                    bigMass+=minHeap.poll();\r\n                }\r\n            }\r\n            else{\r\n                minHeap.add(curr);\r\n            }\r\n        }\r\n\r\n        return minHeap.size()==0 && maxHeap.size()==0;\r\n    }\r\n}"
  }
}
