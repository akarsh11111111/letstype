export default {
  "id": 1647,
  "name": "Minimum Deletions to Make Character Frequencies Unique",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique",
  "relativeDir": "M/Minimum Deletions to Make Character Frequencies Unique",
  "slug": "1647-minimum-deletions-to-make-character-frequencies-unique",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 22,
    "python": 18,
    "javascript": 27
  },
  "languages": {
    "cpp": "// Runtime: 50 ms (Top 84.01%) | Memory: 17.60 MB (Top 90.02%)\r\n\r\nclass Solution {\r\npublic:\r\n    int minDeletions(string s) {\r\n        //Array to store the count of each character.\r\n        vector<int> freq (26, 0);\r\n        \r\n        //Calculatimg frequency of all characters.\r\n        for (char c : s){\r\n            freq[c - 'a']++;\r\n        }\r\n        \r\n        //sorting the frequencies. So the greatest frequencies are in right side.\r\n        sort(freq.begin(), freq.end());\r\n        \r\n        int del = 0; //to store the deletions.\r\n        \r\n        //Checking if 2 frequencies are same, if same then decrease the frequency so that it becomes less than the next greater one.So Start from the 2nd greatest frequency that is at freq[24].\r\n        for (int i = 24; i >= 0; i--) {\r\n            \r\n            if(freq[i] == 0) break; // if frequency is 0 that means no more character is left.\r\n            \r\n            if(freq[i] >= freq[i+1]){\r\n                int prev = freq[i]; //To store the frequency before deletion.\r\n                freq[i] = max(0, freq[i+1] -1); //New frequency should be 1 less than the previous frequency in the array.\r\n                del += prev - freq[i]; //Calculating deleted characters \r\n            }\r\n        }\r\n        return del;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minDeletions(self, s: str) -> int:\r\n        # Get the frequency of each character sorted in reverse order\r\n        frequencies = sorted(Counter(s).values(), reverse=True)\r\n        \r\n        total_deletions = 0\r\n        next_unused_freq = len(s)\r\n        for freq in frequencies:\r\n            # It is impossible for the frequency to be higher\r\n            next_unused_freq = min(next_unused_freq, freq)\r\n            total_deletions += freq - next_unused_freq\r\n\r\n            # We cannot have another character with this frequency,\r\n            # so decrement next_unused_freq\r\n            if next_unused_freq > 0:\r\n                next_unused_freq -= 1\r\n\r\n        return total_deletions",
    "java": "class Solution {\r\n    private int N = 26;\r\n    public int minDeletions(String s) {\r\n        int[] array = new int[N];\r\n        for (char ch : s.toCharArray()) {\r\n            array[ch - 'a']++;\r\n        }\r\n        int ans = 0;\r\n        Set<Integer> set = new HashSet<>();\r\n        for (int i : array) {\r\n            if (i == 0) continue;\r\n            while (set.contains(i)) {\r\n                i--;\r\n                ans++;\r\n            }\r\n            if (i != 0) {\r\n                set.add(i);\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 66 ms (Top 94.87%) | Memory: 46.30 MB (Top 91.45%)\r\n\r\nvar minDeletions = function(s) {\r\n    let freq = new Array(26).fill(0); // Create an array to store character frequencies\r\n    \r\n    for (let i = 0; i < s.length; i++) {\r\n        freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++; // Count the frequency of each character\r\n    }\r\n    \r\n    freq.sort((a, b) => a - b); // Sort frequencies in ascending order\r\n    \r\n    let del = 0; // Initialize the deletion count\r\n    \r\n    for (let i = 24; i >= 0; i--) {\r\n        if (freq[i] === 0) {\r\n            break; // No more characters with this frequency\r\n        }\r\n        \r\n        if (freq[i] >= freq[i + 1]) {\r\n            let prev = freq[i];\r\n            freq[i] = Math.max(0, freq[i + 1] - 1);\r\n            del += prev - freq[i]; // Update the deletion count\r\n        }\r\n    }\r\n    \r\n    return del; // Return the minimum deletions required\r\n};"
  }
}
