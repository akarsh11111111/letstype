export default {
  "id": 842,
  "name": "Split Array into Fibonacci Sequence",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/split-array-into-fibonacci-sequence",
  "relativeDir": "S/Split Array into Fibonacci Sequence",
  "slug": "0842-split-array-into-fibonacci-sequence",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 29,
    "python": 65
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 7.80 MB (Top 37.58%)\r\n\r\nclass Solution {\r\npublic:\r\n\tvector<int> ans;\r\n\r\n\tbool getFibo(string &s,int i,long a,long b,int n) {\r\n\t\tif(i==s.length()) return n>2;\r\n\r\n\t\tlong num=0;\r\n\t\tfor(int x=i;x<s.length();x++) {\r\n\t\t\tnum= num*10+s[x]-'0';\r\n\t\t\tif(num>INT_MAX) break;\r\n\r\n\t\t\tbool chk=false;    \r\n\t\t\tans.push_back(num);\r\n\t\t\tif(n<2) chk=getFibo(s,x+1,b,num,n+1);\r\n\t\t\telse if(a+b==num) chk= getFibo(s,x+1,b,num,n+1);\r\n\t\t\tif(chk) return true;\r\n\t\t\tans.pop_back();\r\n\r\n\t\t\tif(num==0) break;\r\n\t\t}\r\n\t\treturn false;\r\n\t}\r\n\r\n\tvector<int> splitIntoFibonacci(string S) {\r\n\t\tans.clear();\r\n\t\tgetFibo(S,0,0,0,0);\r\n\t\treturn ans;\r\n\t}\r\n};",
    "python": "MAX=2**31\r\ndef consume_tail(current, s):\r\n    # Following the definition of the fibonacci sequence\r\n    # we know that the sum of the last two values in our \r\n    # `current` list determines the next value in the sequence.\r\n    # So that value, our \"target\", is what we're looking for next in\r\n    # `s`.\r\n    target = current[-1] + current[-2]\r\n    \r\n    if target > MAX:\r\n        return False\r\n    \r\n    sTarget = str(target) \r\n    # If the next value in the fibonacci sequence\r\n    # is found at the beginning of s\r\n    # we can continue to process the remaining \r\n    # portion of the string.\r\n    if s.find(sTarget) == 0:\r\n        current.append(target)\r\n    else:\r\n        return False\r\n    \r\n    if sTarget != s:\r\n        return consume_tail(current, s[len(sTarget):])\r\n    \r\n    return current\r\n        \r\n\r\nclass Solution:    \r\n    def splitIntoFibonacci(self, num: str) -> List[int]:\r\n        \r\n        # Identify candidate for the first\r\n        # number in fibonacci sequence\r\n        for i in range(len(num)):\r\n            if num[0] == \"0\" and i > 0:\r\n                break\r\n                \r\n            first = num[0:i+1]\r\n            \r\n            # If our current candidate for the first number\r\n            # of the sequence is already larger that our \r\n            # maximum value in the spec, don't bother doing anymore work.\r\n            if int(first) > MAX:\r\n                return []\r\n            \r\n            tail = num[i+1:]\r\n            \r\n            # Identify candidate for the scond\r\n            # number in fibonacci sequence\r\n            for j in range(len(tail)):\r\n                if tail[0] == \"0\" and j > 0:\r\n                    break\r\n                    \r\n                second = tail[0:j+1]\r\n                if int(second) > MAX:\r\n                    break\r\n                \r\n                # With our current candidates (first and second),\r\n                # we can consume the remaining portion of the string (tail[j+1:])\r\n                # to determine if it contains the correct values for a fibonacci sequence\r\n                # beginning with [first, second]\r\n                result = consume_tail([int(first), int(second)], tail[j+1:])\r\n                if result:\r\n                    return result\r\n        return []",
    "java": "// Runtime: 1 ms (Top 97.83%) | Memory: 41.60 MB (Top 63.04%)\r\n\r\nclass Solution {\r\n    List<Integer> list=new ArrayList<>();\r\n    public List<Integer> splitIntoFibonacci(String num) {\r\n        \r\n        if(backtrack(num,0)) return list;\r\n        else return new ArrayList();\r\n        \r\n    }\r\n    boolean backtrack(String num,int index){\r\n        if(index==num.length()) return list.size()>2;\r\n        \r\n        int n=0;\r\n        for(int i=index;i<num.length();i++){\r\n            n=n*10+(num.charAt(i)-'0');\r\n            if(n<0) return false;\r\n            if(list.size()<2 || list.get(list.size()-1)+list.get(list.size()-2)==n){\r\n                list.add(n);\r\n                if(backtrack(num,i+1)) return true;\r\n            list.remove(list.size()-1);\r\n            }\r\n            \r\n            if(i==index && num.charAt(i)=='0') return false;\r\n        }\r\n        return false;\r\n    }\r\n    \r\n}"
  }
}
