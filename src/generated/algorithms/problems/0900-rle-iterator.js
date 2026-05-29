export default {
  "id": 900,
  "name": "RLE Iterator",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/rle-iterator",
  "relativeDir": "R/RLE Iterator",
  "slug": "0900-rle-iterator",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 55,
    "java": 42,
    "python": 22,
    "javascript": 27
  },
  "languages": {
    "cpp": "/*\r\n    https://leetcode.com/problems/rle-iterator/\r\n    \r\n    next(): TC: O(n) in total over n calls\r\n    Idea is to use two pointers are this.\r\n    We maintain a ptr that points to the current element bucket. For a given n\r\n    first iterate through the buckets which have freq < n, this means they won't have the \r\n    last element.\r\n    Once the iteration ends, either we will have no elements left or we will be on the bucket\r\n    with freq >= n. Update the iteration ptr accordingly.\r\n*/\r\nclass RLEIterator {\r\n    vector<int> encoding;\r\n    // Tracks the even indices\r\n    int curr = -1;\r\n    // Tracks the total length of array\r\n    int len = 0;\r\npublic:\r\n    RLEIterator(vector<int>& encoding) {\r\n        this->encoding = encoding;\r\n        curr = 0;\r\n        len = encoding.size();\r\n    }\r\n    \r\n    int next(int n) {\r\n        // Skip all the number buckets which will be completely exhausted\r\n        // and we will still have some n left i.e n > 0\r\n        for(; curr < len && n > 0 && encoding[curr] < n; curr += 2) {\r\n            // Skip the buckets with 0 frequency\r\n            if(encoding[curr] == 0)\r\n                continue;\r\n            n -= encoding[curr];\r\n        }\r\n        \r\n        int element = -1;\r\n        //  If we still have elements left with non zero frequency then\r\n        // the current bucket's frequency will be >= leftover n\r\n        if(curr < len && encoding[curr] >= n) {\r\n            // Exhaust the leftover n\r\n            encoding[curr] -= n;\r\n            element = encoding[curr+1];\r\n            // If the bucket is completely exhausted, then move the iterator ptr to next element\r\n            // for the next function call\r\n            if(encoding[curr] == 0)\r\n                curr += 2;\r\n        }\r\n        return element;\r\n    }\r\n};\r\n\r\n/**\r\n * Your RLEIterator object will be instantiated and called as such:\r\n * RLEIterator* obj = new RLEIterator(encoding);\r\n * int param_1 = obj->next(n);\r\n */",
    "python": "# Runtime: 64 ms (Top 41.88%) | Memory: 14.5 MB (Top 71.25%)\r\nclass RLEIterator:\r\n\r\n    def __init__(self, encoding: List[int]):\r\n        self.encoding = encoding\r\n\r\n    def next(self, n: int) -> int:\r\n\r\n        if self.encoding:\r\n\r\n            count = self.encoding[0]\r\n\r\n            if count >= n:\r\n                # Partially exhaust and return the current value.\r\n                self.encoding[0] -= n\r\n                return self.encoding[1]\r\n\r\n            # Exhaust all of current value and continue.\r\n            self.encoding = self.encoding[2:]\r\n            return self.next(n - count)\r\n\r\n        return -1",
    "java": "class RLEIterator {\r\n    \r\n    long[] prefixEncoded;\r\n    long processed = 0;\r\n    int l = 0;\r\n\r\n    public RLEIterator(int[] encoding) {\r\n        int encodeLen = encoding.length;\r\n        this.prefixEncoded = new long[encodeLen];\r\n        for(int i=0;i<encodeLen;i+=2) {\r\n            long prevPrefixSum = 0;\r\n            if(i > 0) {\r\n                prevPrefixSum = this.prefixEncoded[i-2];\r\n            }\r\n            this.prefixEncoded[i] = encoding[i] + prevPrefixSum;\r\n            this.prefixEncoded[i+1] = encoding[i+1];\r\n        }\r\n    }\r\n\r\n    public int next(int n) {\r\n        int r = this.prefixEncoded.length-2;\r\n    \r\n        processed += n;\r\n        \r\n        if(l >= this.prefixEncoded.length || processed > this.prefixEncoded[this.prefixEncoded.length - 2]) {\r\n            return -1;\r\n        }\r\n        \r\n        while(l < r) {\r\n            int m = (l + ((r-l)/2));\r\n            if(m % 2 != 0) {\r\n                m = m - 1;\r\n            }\r\n            if(this.prefixEncoded[m] >= processed) {\r\n                r = m;\r\n            } else {\r\n                l = m + 2;\r\n            }\r\n        }\r\n        return l >= this.prefixEncoded.length ? -1: (int) this.prefixEncoded[l + 1];\r\n    }   \r\n}",
    "javascript": "var RLEIterator = function(encoding) {\r\n    this.encoding = encoding\r\n    // Pointer to count index\r\n    this.index = 0\r\n}\r\n\r\nRLEIterator.prototype.next = function(n) {\r\n    while (n > 0) {\r\n        // Move to next count index when the current index is 0\r\n        if (this.encoding[this.index] === 0) this.index += 2\r\n        \r\n        // Too many calls to next, return -1\r\n        if (this.index >= this.encoding.length) return -1\r\n        \r\n        // n goes completely into count\r\n        if (n <= this.encoding[this.index]) {\r\n            this.encoding[this.index] -= n\r\n            n = 0\r\n        // count goes completely into n\r\n        } else if (n > this.encoding[this.index]) {\r\n            n -= this.encoding[this.index]\r\n            this.encoding[this.index] = 0\r\n        }\r\n    }\r\n\r\n    return this.encoding[this.index + 1]\r\n}"
  }
}
