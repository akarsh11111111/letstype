export default {
  "id": 1170,
  "name": "Compare Strings by Frequency of the Smallest Character",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character",
  "relativeDir": "C/Compare Strings by Frequency of the Smallest Character",
  "slug": "1170-compare-strings-by-frequency-of-the-smallest-character",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 45,
    "python": 27,
    "javascript": 11
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 100.00%) | Memory: 11.4 MB (Top 99.39%)\r\nclass Solution {\r\nprivate:\r\n    int countFreq(const string &s) {\r\n        char c = *min_element(begin(s), end(s));\r\n        return count(begin(s), end(s), c);\r\n    }\r\npublic:\r\n    vector<int> numSmallerByFrequency(vector<string>& queries, vector<string>& words) {\r\n        vector<int> freqs(11, 0);\r\n        for (const auto &word : words) {\r\n            freqs[countFreq(word)]++;\r\n        }\r\n        vector<int> prefSum(12, 0);\r\n        for (int i = 0; i < freqs.size(); i++) {\r\n            prefSum[i+1] = prefSum[i] + freqs[i];\r\n        }\r\n        vector<int> ans;\r\n        for (const auto &q : queries) {\r\n            int cnt = countFreq(q);\r\n            ans.push_back(prefSum.back() - prefSum[cnt + 1]);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numSmallerByFrequency(self, queries: List[str], words: List[str]) -> List[int]:\r\n        def _f(s):\r\n            d = Counter(s)\r\n            d =dict(sorted(d.items(), key=lambda item: item[0]))\r\n            for x in d:\r\n                return d[x]\r\n        \r\n        freq = []\r\n        for w in words:\r\n            n1 = _f(w)\r\n            freq.append(n1)\r\n        \r\n        freq.sort(reverse=True)\r\n\r\n        res = []\r\n        for q in queries:\r\n            n = _f(q)\r\n            c=0\r\n            for n1 in freq:\r\n                if n < n1:\r\n                    c+=1\r\n                else:\r\n                    break\r\n            res.append(c)\r\n        \r\n        return res",
    "java": "// Runtime: 5 ms (Top 87.83%) | Memory: 46.8 MB (Top 47.53%)\r\nclass Solution {\r\n    public int[] numSmallerByFrequency(String[] queries, String[] words) {\r\n        int[] ans = new int[queries.length];\r\n        int[] freq = new int[words.length];\r\n        for (int i = 0; i < words.length; i++) {\r\n            freq[i] = freqOfSmallest(words[i]);\r\n        }\r\n        Arrays.sort(freq);\r\n        int k = 0;\r\n        for (String query : queries) {\r\n            int target = freqOfSmallest(query);\r\n            ans[k++] = binarySearch(freq, target);\r\n        }\r\n        return ans;\r\n    }\r\n    public int freqOfSmallest(String s) {\r\n        int[] freq = new int[26];\r\n        char min = 'z';\r\n        for (int i = 0; i < s.length(); i++) {\r\n            char c = s.charAt(i);\r\n            freq[c - 'a'] += 1;\r\n            if (c < min) {\r\n                min = c;\r\n            }\r\n        }\r\n        return freq[min - 'a'];\r\n    }\r\n    public int binarySearch(int[] arr, int target) {\r\n        int idx = arr.length;\r\n        int lo = 0;\r\n        int hi = idx - 1;\r\n        int mid;\r\n        while (lo <= hi) {\r\n            mid = (lo + hi) / 2;\r\n            if (arr[mid] <= target) {\r\n                lo = mid + 1;\r\n            } else {\r\n                idx = mid;\r\n                hi = mid - 1;\r\n            }\r\n        }\r\n        return arr.length - idx;\r\n    }\r\n}",
    "javascript": "// Runtime: 115 ms (Top 46.43%) | Memory: 49.20 MB (Top 30.36%)\r\n\r\nvar numSmallerByFrequency = function(queries, words) {\r\n    const wordsF = words.map(word => f(word));\r\n    return queries.map(str => f(str))\r\n        .map(strF => wordsF.reduce((count, wordF) => strF<wordF? count+1:count,0))\r\n};\r\n\r\nfunction f(str){\r\n    return str.split(\"\").sort().reduce((sum, curr,i,arr) => curr === arr[0] ? sum+1: sum,0);\r\n}"
  }
}
