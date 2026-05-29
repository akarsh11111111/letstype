export default {
  "id": 2111,
  "name": "Minimum Operations to Make the Array K-Increasing",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-operations-to-make-the-array-k-increasing",
  "relativeDir": "M/Minimum Operations to Make the Array K-Increasing",
  "slug": "2111-minimum-operations-to-make-the-array-k-increasing",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 32,
    "python": 11
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n      int getlis(vector<int>&a) {\r\n            vector<int>v;\r\n            for (auto p : a) {\r\n                  auto it = upper_bound(v.begin(), v.end(), p);\r\n                  if (it == v.end()) {\r\n                        v.push_back(p);\r\n                  }\r\n                  else {\r\n                        *it = p;\r\n                  }\r\n            }\r\n            return v.size();\r\n      }\r\n      int kIncreasing(vector<int>& arr, int k) {\r\n            const int n = arr.size();\r\n            vector<vector<int>>v(k);\r\n            for (int i = 0; i < n; i++) {\r\n                  v[i % k].push_back(arr[i]);\r\n            }\r\n\r\n            int ans = 0;\r\n            for (int i = 0; i < k; i++) {\r\n                  int lis = getlis(v[i]);\r\n                  ans += v[i].size() - lis;\r\n            }\r\n            return ans;\r\n      }\r\n};",
    "python": "class Solution:       \r\n    def kIncreasing(self, arr: List[int], k: int) -> int:\r\n        def LNDS(arr: List[int]) -> int:\r\n            mono = []\r\n            for n in arr:\r\n                if not mono or mono[-1] <= n:\r\n                    mono.append(n)\r\n                else:\r\n                    mono[bisect_right(mono, n)] = n\r\n            return len(mono)         \r\n        return len(arr) - sum(LNDS(arr[i::k]) for i in range(k))",
    "java": "class Solution {\r\n    public int kIncreasing(int[] arr, int k) {\r\n        int ans = arr.length;\r\n        int[] tails = new int[arr.length];\r\n        for (int i = 0; i < k; i ++) {\r\n            int size = 0;\r\n            for (int j = i; j < arr.length; j += k) {\r\n                if (size == 0 || arr[j] >= tails[size - 1]) {\r\n                    tails[size ++] = arr[j];\r\n                } else {\r\n                    int low = 0, high = size - 1;\r\n                    while (low <= high) {\r\n                        int mid = (low + high) / 2;\r\n                        if (tails[mid] <= arr[j] && tails[mid + 1] > arr[j]) {\r\n                            tails[mid + 1] = arr[j];\r\n                            break;\r\n                        } else if (tails[mid + 1] <= arr[j]) {\r\n                            low = mid + 1;\r\n                        } else {\r\n                            high = mid - 1;\r\n                        }\r\n                    }\r\n                    if (low > high) {\r\n                        tails[0] = arr[j];\r\n                    }\r\n                }\r\n            }\r\n            ans -= size;\r\n        }\r\n        return ans;\r\n    }\r\n}"
  }
}
