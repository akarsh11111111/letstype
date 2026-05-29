export default {
  "id": 811,
  "name": "Subdomain Visit Count",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/subdomain-visit-count",
  "relativeDir": "S/Subdomain Visit Count",
  "slug": "0811-subdomain-visit-count",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 39,
    "java": 29,
    "python": 25,
    "javascript": 20
  },
  "languages": {
    "cpp": "// Runtime: 36 ms (Top 16.60%) | Memory: 11.7 MB (Top 62.43%)\r\nclass Solution {\r\npublic:\r\n    vector<string> subdomainVisits(vector<string>& cpdomains) {\r\n        vector<string> v;\r\n        unordered_map<string,int> m;\r\n        for(auto it : cpdomains){\r\n            string rep=\"\";\r\n            int i=0;\r\n            while(it[i]!=' '){\r\n                  rep+=(it[i]);\r\n                    i++;\r\n            }\r\n            int r=stoi(rep);\r\n            m[it.substr(i+1,it.size())]+=r;\r\n\r\n            while(it[i]!='.'){\r\n                i++;\r\n            }\r\n            m[it.substr(i+1,it.size())]+=r;\r\n            i++;\r\n            while(i<it.size() and it[i]!='.'){\r\n                i++;\r\n            }\r\n            if(i!=it.size()){\r\n            m[it.substr(i+1,it.size())]+=r;\r\n            }\r\n\r\n        }\r\n\r\n        for(auto it : m){\r\n            string a=it.first;\r\n            string b=to_string(it.second);\r\n            a=b+\" \"+a;\r\n            v.push_back(a);\r\n        }\r\n        return v;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def subdomainVisits(self, cpdomains: List[str]) -> List[str]:\r\n        output, ans = {}, []\r\n        for domain in cpdomains : \r\n            number, domain = domain.split(' ')\r\n            sub_domain = domain.split('.')\r\n            pair = ''\r\n            print(sub_domain)\r\n            for i in reversed(range(len(sub_domain))) :\r\n                if i == len(sub_domain)-1 : \r\n                    pair += sub_domain[i]\r\n                else : \r\n                    pair = sub_domain[i] +'.'+ pair \r\n                print(pair)\r\n                \r\n                # output.append(str(number) + ' '+pair)\r\n                if pair not in output.keys() : \r\n                    output[pair] = int(number)\r\n                else : \r\n                    output[pair] += int(number)\r\n                    \r\n        for key in output.keys() : \r\n            ans.append(str(output[key]) + ' '+key)\r\n                \r\n        return ans",
    "java": "class Solution {\r\n    public List<String> subdomainVisits(String[] cpdomains) {\r\n        List<String> result = new LinkedList<>();\r\n        HashMap<String, Integer> hmap = new HashMap<>();\r\n        \r\n        for(int i = 0; i < cpdomains.length; i++){\r\n            String[] stringData = cpdomains[i].split(\" \");\r\n            String[] str = stringData[1].split(\"\\\\.\");\r\n            String subDomains = \"\";\r\n            \r\n            for(int j = str.length-1; j >= 0; j--){\r\n                subDomains = str[j] + subDomains;\r\n                    \r\n                if(!hmap.containsKey(subDomains))\r\n                    hmap.put(subDomains, Integer.parseInt(stringData[0]));\r\n                else\r\n                    hmap.put(subDomains, hmap.get(subDomains) + Integer.parseInt(stringData[0]));\r\n                subDomains = \".\" + subDomains;\r\n            }\r\n            \r\n        }\r\n        \r\n        for(Map.Entry<String, Integer> entry: hmap.entrySet()){\r\n            result.add(entry.getValue() + \" \" + entry.getKey());\r\n        }\r\n        \r\n        return result;\r\n    }\r\n}",
    "javascript": "// Runtime: 146 ms (Top 31.11%) | Memory: 46.7 MB (Top 73.89%)\r\n/**\r\n * @param {string[]} cpdomains\r\n * @return {string[]}\r\n */\r\nvar subdomainVisits = function(cpdomains) {\r\n    let map = {}\r\n    cpdomains.forEach(d => {\r\n        let data = d.split(\" \");\r\n        let arr = data[1].split(\".\")\r\n        while(arr.length > 0) {\r\n            if(arr.join(\".\") in map) map[arr.join(\".\")]+=+data[0]\r\n            else map[arr.join(\".\")] = +data[0]\r\n            arr.shift()\r\n        }\r\n    })\r\n    let result = []\r\n    for(let key in map) result.push(map[key] + \" \"+ key)\r\n    return result\r\n};"
  }
}
