export default {
  "id": 93,
  "name": "Restore IP Addresses",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/restore-ip-addresses",
  "relativeDir": "R/Restore IP Addresses",
  "slug": "0093-restore-ip-addresses",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 27,
    "python": 29,
    "javascript": 33
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<string> res;\r\n    void dfs(string s,int idx,string curr_ip,int cnt)\r\n    {\r\n        if(cnt>4)\r\n            return;\r\n        if(cnt==4&&idx==s.size())\r\n        {\r\n            res.push_back(curr_ip);\r\n           // return;\r\n        }\r\n        for(int i=1;i<4;i++)\r\n        {\r\n            if(idx+i>s.size())\r\n                break;\r\n            string str=s.substr(idx,i);\r\n            if((str[0]=='0'&&str.size()>1)||(i==3&&stoi(str)>=256))\r\n                continue;\r\n            dfs(s,idx+i,curr_ip+str+(cnt==3?\"\":\".\"),cnt+1);\r\n        }\r\n    }\r\n    vector<string> restoreIpAddresses(string s)\r\n    {\r\n        dfs(s,0,\"\",0);\r\n        return res;\r\n        \r\n        \r\n    }\r\n};",
    "python": "class Solution:\r\n    def restoreIpAddresses(self, s: str):\r\n        def isValid(st):\r\n            if(len(st)!=len(str(int(st)))):\r\n                return False\r\n            st = int(st)\r\n            if(st>255 or st<0):\r\n                return False\r\n            return True\r\n        \r\n        validIps = []\r\n        for i in range(1,4):\r\n            s1 = s[:i]\r\n            if(not isValid(s1)):\r\n                continue\r\n            for j in range(i+1, min(len(s), i+4)):\r\n                s2 = s[i:j]\r\n                if(not isValid(s2)):\r\n                    continue\r\n                for k in range(j+1,min(len(s), j+4)):\r\n                    s3 = s[j:k]\r\n                    if(not isValid(s3)):\r\n                        continue\r\n                    s4 = s[k:]\r\n                    if(not isValid(s4)):\r\n                        continue\r\n                    currentIp = s1+\".\"+s2+\".\"+s3+\".\"+s4\r\n                    validIps.append(currentIp)\r\n        return validIps",
    "java": "// Runtime: 15 ms (Top 19.20%) | Memory: 43.5 MB (Top 45.49%)\r\n\r\nclass Solution {\r\n    public List<String> restoreIpAddresses(String s) {\r\n        List<String> ans = new ArrayList<>();\r\n\r\n        int len = s.length();\r\n        for(int i = 1; i < 4 && i < len-2 ; i++ ){\r\n            for(int j = i + 1; j < i + 4 && j < len-1 ; j++ ){\r\n                for(int k = j+1 ; k < j + 4 && k < len ; k++){\r\n                  String s1 = s.substring(0,i);\r\n                  String s2 = s.substring(i,j);\r\n                  String s3 = s.substring(j,k);\r\n                  String s4 = s.substring(k,len);\r\n                  if(isValid(s1) && isValid(s2) && isValid(s3) && isValid(s4))\r\n                      ans.add(s1+\".\"+s2+\".\"+s3+\".\"+s4);\r\n                }\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n    boolean isValid(String s){\r\n        if(s.length() > 3 || s.length()==0 || (s.charAt(0)=='0' && s.length()>1) || Integer.parseInt(s) > 255)\r\n           return false;\r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 105 ms (Top 48.16%) | Memory: 44.6 MB (Top 28.44%)\r\nvar restoreIpAddresses = function(s) {\r\n    const results = [];\r\n\r\n    const go = (str, arr) => {\r\n        // if we used every character and have 4 sections, it's a good IP!\r\n        if (str.length === 0 && arr.length === 4) {\r\n            results.push(arr.join('.'));\r\n            return;\r\n        }\r\n        // we already have too many in the array, let's just stop\r\n        if (arr.length >= 4) {\r\n            return;\r\n        }\r\n        // chop off next 3 characters and continue recursing\r\n        if (str.length > 2 && +str.substring(0, 3) < 256 && +str.substring(0, 3) > 0 && str[0] !== '0') {\r\n            go(str.slice(3), [...arr, str.substring(0, 3)]);\r\n        }\r\n        // chop off next 2 characters and continue recursing\r\n        if (str.length > 1 && +str.substring(0, 2) > 0 && str[0] !== '0') {\r\n            go(str.slice(2), [...arr, str.substring(0, 2)]);\r\n        }\r\n        // chop off next 1 character and continue recursing, in this case, starting with 0 is OK\r\n        if (str.length > 0 && +str.substring(0, 1) >= 0) {\r\n            go(str.slice(1), [...arr, str.substring(0, 1)]);\r\n        }\r\n        return;\r\n    }\r\n\r\n    go(s, []);\r\n\r\n    return results;\r\n};"
  }
}
