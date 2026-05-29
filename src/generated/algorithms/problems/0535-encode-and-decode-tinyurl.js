export default {
  "id": 535,
  "name": "Encode and Decode TinyURL",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/encode-and-decode-tinyurl",
  "relativeDir": "E/Encode and Decode TinyURL",
  "slug": "0535-encode-and-decode-tinyurl",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 12,
    "python": 7,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 69.87%) | Memory: 7.4 MB (Top 11.07%)\r\nclass Solution {\r\nprivate:\r\n    unordered_map<string, string> hash;\r\n    string server = \"http://tinyurl.com/\";\r\n    string all = \"0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM\";\r\n\r\npublic:\r\n\r\n    // Encodes a URL to a shortened URL.\r\n    string encode(string longUrl) {\r\n        srand(time(NULL));\r\n        string add = \"\";\r\n        int ran = rand() % 10;\r\n        int strsize = all.size();\r\n        while(ran){\r\n            int index = rand() % strsize;\r\n            add += all[index];\r\n            ran--;\r\n        }\r\n\r\n        hash[(server+add)] = longUrl;\r\n\r\n        return (server + add);\r\n    }\r\n\r\n    // Decodes a shortened URL to its original URL.\r\n    string decode(string shortUrl) {\r\n        return hash[shortUrl];\r\n    }\r\n};\r\n\r\n// Your Solution object will be instantiated and called as such:\r\n// Solution solution;\r\n// solution.decode(solution.encode(url));",
    "python": "class Codec:\r\n\r\n    def encode(self, longUrl):\r\n        return longUrl\r\n\r\n    def decode(self, shortUrl):\r\n        return shortUrl",
    "java": "public class Codec {\r\n\r\n    // Encodes a URL to a shortened URL.\r\n    public String encode(String longUrl) {\r\n        return longUrl;\r\n    }\r\n\r\n    // Decodes a shortened URL to its original URL.\r\n    public String decode(String shortUrl) {\r\n        return shortUrl;\r\n    }\r\n}",
    "javascript": "// Runtime: 78 ms (Top 87.43%) | Memory: 43.8 MB (Top 68.26%)\r\nlet arr = new Array();\r\nlet size = 0;\r\n\r\nvar encode = function(longUrl) {\r\n    arr.push(longUrl)\r\n    let i = longUrl.indexOf('/',11);\r\n    longUrl.slice(i);\r\n    longUrl += this.size;\r\n    arr.push(longUrl);\r\n    size += 2;\r\n    return longUrl;\r\n};\r\n\r\nvar decode = function(shortUrl) {\r\n    let i = 0;\r\n    while(arr[i] !== shortUrl && i<size){\r\n        i++;\r\n    }\r\n    return arr[i-1];\r\n};"
  }
}
