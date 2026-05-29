export default {
  "id": 393,
  "name": "UTF-8 Validation",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/utf-8-validation",
  "relativeDir": "U/UTF-8 Validation",
  "slug": "0393-utf-8-validation",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 36,
    "python": 30,
    "javascript": 31
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool validUtf8(vector<int>& data) {\r\n        int i=0;\r\n        while (i<data.size()) {\r\n            int n=0;\r\n            if ((data[i]>>7)==0) n=1;\r\n            else if ((data[i]>>5)==6) n=2;\r\n            else if ((data[i]>>4)==14) n=3;\r\n            else if ((data[i]>>3)==30) n=4;\r\n            else return false;\r\n            for (int j=i+1; j<i+n; j++)\r\n                if (j>=data.size() || data[j]>>6!=2)\r\n                    return false;\r\n           i += n;\r\n        }\r\n        return true;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def validUtf8(self, data: List[int]) -> bool:\r\n        # Keep track of how many continuation bytes are left\r\n\t\t# Start at 0 since we are not expecting any continuation bytes at the beginning.\r\n        cont_bytes_left = 0\r\n        for byte in data:\r\n            if cont_bytes_left == 0:\r\n\t\t\t    # If we don't expect any continuation bytes\r\n\t\t\t    # then there are 4 valid case for the current byte\r\n                # byte >> 5 gives us the first 3 bits (8 bits - 5 = 3).\r\n                if byte >> 5 == 0b110:\r\n\t\t\t\t    # After seeing a byte that starts with 110,\r\n\t\t\t\t\t# we expect to see one continuation byte\r\n                    cont_bytes_left = 1\r\n                elif byte >> 4 == 0b1110:\r\n                    cont_bytes_left = 2\r\n                elif byte >> 3 == 0b11110:\r\n                    cont_bytes_left = 3\r\n                # finally if the first bit isn't 0 then it's invalid\r\n                elif byte >> 7 != 0:\r\n                    return False\r\n            else:\r\n\t\t\t    # If we are expecting a continuation byte there is only one valid case.\r\n                # It's invalid if the continuation byte doesn't start with 10\r\n                if byte >> 6 != 0b10:\r\n                    return False\r\n                cont_bytes_left -= 1\r\n        \r\n\t\t# Only valid if we aren't expecting any more continuation bytes\r\n        return cont_bytes_left == 0",
    "java": "// Runtime: 1 ms (Top 100.00%) | Memory: 48.5 MB (Top 26.95%)\r\nclass Solution {\r\n    public boolean validUtf8(int[] data) {\r\n        return help(data,0);\r\n    }\r\n\r\n    public boolean help(int[] data,int index) {\r\n        int n=data.length-index;\r\n        if(n==0){\r\n            return true;\r\n        }\r\n        int c0=count(data[index]);\r\n        if(c0<0||c0>n){\r\n            return false;\r\n        }\r\n        for(int i=index+1;i<index+c0;i++){\r\n            if((data[i]&0b10000000)!=0b10000000){\r\n                return false;\r\n            }\r\n        }\r\n        return help(data,index+c0);\r\n    }\r\n\r\n    private int count(int a){\r\n        if((a>>3)==0b11110){\r\n            return 4;\r\n        }else if((a>>4)==0b1110){\r\n            return 3;\r\n        }else if((a>>5)==0b110){\r\n            return 2;\r\n        }else if((a>>7)==0){\r\n            return 1;\r\n        }\r\n        return -1;\r\n    }\r\n}",
    "javascript": "var validUtf8 = function(data) {\r\n  const len = data.length;\r\n  const byteBits = data.map(a => padLeft(a.toString(2))); //convert to bit strings\r\n  let bytes,  i = 0;\r\n  while (i < len) {\r\n    bytes = 0;\r\n    //count 1s in the front.\r\n    while (byteBits[i].charAt(bytes) === \"1\") bytes++;\r\n\r\n    //if we have only 1 byte to process expect more than 1 byte, it should fail.\r\n    if (len === 1 && bytes > 0) return false;\r\n\r\n    //UTF8 chars can't be more than 4 bytes.\r\n    if (bytes > 4) return false;\r\n\r\n    //if we're processing more than 1 byte\r\n    if (bytes > 1) {\r\n      //decrement for every byte that starts with \"10\"\r\n      while (i < len - 1 && byteBits[++i].startsWith(\"10\")) bytes--;\r\n\r\n      //check to see if we have too many or too little of the expected bytes left\r\n      if (bytes !== 1) return false;\r\n    }\r\n    else i++;\r\n  }\r\n  return true;\r\n};\r\n\r\nconst padLeft = (str, size = 8, pad = \"0\") => (\r\n  str.length >= size ? str : pad.repeat(size).substring(str.length % size) + str\r\n);"
  }
}
