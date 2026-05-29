export default {
  "id": 1507,
  "name": "Reformat Date",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reformat-date",
  "relativeDir": "R/Reformat Date",
  "slug": "1507-reformat-date",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 27,
    "python": 12,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 6.50 MB (Top 57.94%)\r\n\r\nclass Solution {\r\npublic:\r\n    string reformatDate(string date) {\r\n        // easiest way to get index with O(1)\r\n        unordered_map<string, string> months = {{\"Jan\", \"01\"}, {\"Feb\", \"02\"}, {\"Mar\", \"03\"},{\"Apr\", \"04\"}, {\"May\", \"05\"}, {\"Jun\", \"06\"}, {\"Jul\", \"07\"}, {\"Aug\", \"08\"}, {\"Sep\", \"09\"},{\"Oct\", \"10\"}, {\"Nov\", \"11\"}, {\"Dec\", \"12\"}};\r\n        istringstream s(date); \r\n        // get day\r\n        string day; s >> day;\r\n        day.pop_back(); day.pop_back();\r\n        if (day.size() == 1)\r\n            day = \"0\" + day;\r\n        // get month\r\n        string month; s >> month;\r\n        // get year\r\n        string year; s >> year;\r\n        return year + \"-\" + months[month] + \"-\" + day;\r\n    }\r\n};",
    "python": "# Runtime: 31 ms (Top 93.30%) | Memory: 13.8 MB (Top 98.50%)\r\nclass Solution:\r\n    def reformatDate(self, date: str) -> str:\r\n\r\n        m_dict_={\"Jan\":\"01\", \"Feb\":\"02\", \"Mar\":\"03\", \"Apr\":\"04\", \"May\":\"05\", \"Jun\":\"06\", \"Jul\":\"07\", \"Aug\":\"08\", \"Sep\":\"09\", \"Oct\":\"10\", \"Nov\":\"11\", \"Dec\":\"12\"}\r\n\r\n        day=date[:-11]\r\n\r\n        if len(day)==1:\r\n            day=\"0\"+day\r\n\r\n        return(date[-4:] + \"-\" + m_dict_[date[-8:-5]] + \"-\" + day)",
    "java": "class Solution {\r\n    public String reformatDate(String date) {\r\n        int len = date.length();\r\n        \r\n        String[] monthArray = {\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"};\r\n        \r\n        String year = date.substring(len - 4);\r\n        int month = Arrays.asList(monthArray).indexOf(date.substring(len - 8, len - 5)) + 1;\r\n        String day = date.substring(0, len - 11);\r\n        \r\n        StringBuffer sb = new StringBuffer();\r\n        \r\n        sb.append(year + \"-\");\r\n        \r\n        if(month < 10)\r\n            sb.append(\"0\" + month + \"-\");\r\n        else\r\n            sb.append(month + \"-\");\r\n        \r\n        if(day.length() == 1) \r\n            sb.append(\"0\" + day);\r\n        else\r\n            sb.append(day);\r\n        \r\n        return sb.toString();\r\n    }\r\n}",
    "javascript": "var reformatDate = function(date) {\r\n       const ans = [];\r\n       const month = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"];\r\n        \r\n        const [inputDate,inputMonth,inputYear] = date.split(' ');\r\n        ans.push(inputYear);\r\n        ans.push(\"-\");\r\n    \r\n        const monthIndex = month.findIndex(mon => mon === inputMonth);\r\n        const formatedMonth = String(monthIndex + 1).padStart(2,'0');\r\n        ans.push(formatedMonth);\r\n        ans.push(\"-\");\r\n    \r\n        const slicedDate = inputDate.slice(0,2);\r\n        if(+slicedDate >= 10){\r\n            ans.push(slicedDate);\r\n        }else{\r\n            const formatedDate = inputDate.slice(0,1).padStart(2,'0');\r\n            ans.push(formatedDate)\r\n        }\r\n          \r\n       return ans.join('');\r\n};"
  }
}
