export default {
  "id": 1451,
  "name": "Rearrange Words in a Sentence",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/rearrange-words-in-a-sentence",
  "relativeDir": "R/Rearrange Words in a Sentence",
  "slug": "1451-rearrange-words-in-a-sentence",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 24,
    "python": 8,
    "javascript": 9
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<pair<string,int>> words ;\r\n    string arrangeWords(string text) {\r\n        //convert to lowercase alphabet \r\n        text[0] += 32 ;\r\n        \r\n        istringstream iss(text) ;\r\n        string word = \"\" ;\r\n\t\t\r\n\t\t//pos is the index of each word in text.\r\n        int pos = 0 ;\r\n        \r\n        while(iss >> word){\r\n            words.push_back({word,pos});\r\n            ++pos ;\r\n        }\r\n        \r\n\t\t//sort by length and pos.\r\n        sort(begin(words),end(words),[&](const pair<string,int> &p1 , const pair<string,int> &p2)->bool{\r\n            if(size(p1.first) == size(p2.first)) return p1.second < p2.second ;\r\n            return size(p1.first) < size(p2.first);\r\n        });\r\n        \r\n        string ans = \"\" ;\r\n        for(auto &x : words) ans += x.first + \" \" ;\r\n        ans.pop_back() ;\r\n        \r\n        //convert to uppercase alphabet \r\n        ans[0] -= 32 ;\r\n        return ans ;\r\n        \r\n        \r\n    }\r\n};",
    "python": "// Runtime: 40 ms (Top 89.61%) | Memory: 19.60 MB (Top 55.06%)\r\n\r\nclass Solution:\r\n    def arrangeWords(self, text: str) -> str:\r\n        a = []\r\n        for x in text.split(\" \"):\r\n            a.append(x.lower())\r\n        return \" \".join(sorted(a, key=len)).capitalize()",
    "java": "// Runtime: 24 ms (Top 72.47%) | Memory: 45.70 MB (Top 34.84%)\r\n\r\nclass Solution {\r\n    public String arrangeWords(String text) {\r\n        text = text.replace(text.charAt(0)+\"\", (char)(text.charAt(0)+32)+\"\");\r\n\r\n        String[] arr = text.split(\" \");\r\n        Arrays.sort(arr, new Comparator<String>(){\r\n            public int compare(String s1, String s2){\r\n                return Integer.compare(s1.length(), s2.length());\r\n            }\r\n        });\r\n\r\n        StringBuilder str = new StringBuilder(arr[0]);\r\n\r\n        for(int i = 1; i < arr.length; i++)\r\n            str.append(\" \"+arr[i]);\r\n\r\n        text = (char)(str.charAt(0)-32)+str.substring(1, str.length());\r\n\r\n        return text;\r\n    }\r\n}\r\n// UP-VOTE IF HELPFUL",
    "javascript": "var arrangeWords = function(text) {\r\n    let sorted = text.toLowerCase().split(' ');\r\n    \r\n    sorted.sort((a, b) => a.length - b.length);\r\n    \r\n    sorted[0] = sorted[0].charAt(0).toUpperCase() + sorted[0].slice(1);\r\n    \r\n    return sorted.join(' ');\r\n};"
  }
}
