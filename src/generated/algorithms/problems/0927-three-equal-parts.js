export default {
  "id": 927,
  "name": "Three Equal Parts",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/three-equal-parts",
  "relativeDir": "T/Three Equal Parts",
  "slug": "0927-three-equal-parts",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 40,
    "java": 25,
    "python": 25,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 67 ms (Top 8.8%) | Memory: 41.33 MB (Top 13.3%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<int> threeEqualParts(vector<int>& v) {\r\n        vector<int> one;\r\n        int n=v.size();\r\n        for(int i=0;i<n;i++){\r\n            if(v[i]==1) one.push_back(i+1);\r\n        }\r\n        if(one.size()==0){\r\n            return {0,2};\r\n        }\r\n        if(one.size()%3)    return {-1,-1};\r\n\r\n        int ext=n-one.back(),sz=one.size();\r\n        int gap1=one[sz/3]-one[sz/3-1]-1,gap2=one[2*sz/3]-one[2*sz/3-1]-1;\r\n        // cout<<gap1<<\" \"<<gap2<<endl;\r\n        if(gap1<ext || gap2<ext)    return {-1,-1};\r\n\r\n        string s1,s2,s3;\r\n        for(int i=0;i<=one[sz/3-1]+ext-1;i++){\r\n            if(s1.length()>0 || v[i])   s1+=to_string(v[i]);\r\n        }\r\n\r\n        for(int i=one[sz/3-1]+ext;i<=one[2*sz/3-1]+ext-1;i++){\r\n            if(s2.length()>0 || v[i])   s2+=to_string(v[i]);\r\n        }\r\n\r\n        for(int i=one[2*sz/3-1]+ext;i<=n-1;i++){\r\n            if(s3.length()>0 || v[i])   s3+=to_string(v[i]);\r\n        }\r\n        //All 3 Numbers in vector v :-\r\n        // num1={0,one[sz/3-1]+ext-1};\r\n        // num2={one[sz/3-1]+ext,one[2*sz/3-1]+ext-1}\r\n        // num3={one[2*sz/3-1]+ext,n-1};\r\n        if(s1==s2 && s2==s3)    return {one[sz/3-1]+ext-1,one[2*sz/3-1]+ext};\r\n        return {-1,-1};\r\n    }\r\n};",
    "python": "class Solution:\r\n    def threeEqualParts(self, arr: List[int]) -> List[int]:\r\n        n = len(arr)\r\n        count_one = arr.count(1)\r\n        if count_one == 0: return [0,n-1]\r\n        if count_one % 3!= 0: return [-1,-1]\r\n        target_ones = count_one // 3\r\n        breaks = []\r\n        one_count = 0\r\n        for i , bit in enumerate(arr):\r\n            if bit ==1 :\r\n                one_count +=1\r\n                if one_count in [1,target_ones+1,2*target_ones+1]:breaks.append(i)   \r\n                if one_count in [target_ones,2*target_ones,3*target_ones]:breaks.append(i)\r\n        i1,j1,i2,j2,i3,j3 = breaks\r\n        \r\n        if not arr[i1:j1+1] == arr[i2:j2+1] == arr[i3:j3+1]:return [-1,-1]\r\n        \r\n        trailing_zeroes_left  = i2 - j1 - 1\r\n        trailing_zeroes_mid   = i3 - j2 - 1\r\n        trailing_zeroes_right = n -  j3 - 1\r\n        if trailing_zeroes_right > min(trailing_zeroes_left,trailing_zeroes_mid):return [-1,-1]\r\n        j1 += trailing_zeroes_right\r\n        j2 += trailing_zeroes_right\r\n        return [j1,j2+1]",
    "java": "// Runtime: 4 ms (Top 43.75%) | Memory: 48.2 MB (Top 87.50%)\r\nclass Solution {\r\n    public int[] threeEqualParts(int[] arr) {\r\n        List<Integer> ones = new ArrayList<>();\r\n        for (int i = 0; i < arr.length; i++){\r\n            if (arr[i]==1){\r\n                ones.add(i);\r\n            }\r\n        }\r\n        if (ones.size()==0){ // edge case\r\n            return new int[]{0,2};\r\n        }\r\n        int[] ans = new int[2];\r\n        int each = ones.size()/3;\r\n        for (int i = 0; i < 2 && ones.size()%3==0; i++){ // for the first 2 partitions\r\n            for (int j = 0; j < each-1; j++){ // compare gaps\r\n                if (ones.get(j+1+i*each)-ones.get(j+i*each)!=ones.get(j+2*each+1)-ones.get(j+2*each))\r\n                    return new int[]{-1, -1};\r\n            }\r\n            ans[i]=ones.get((i+1)*each-1)+i+(arr.length - 1 - ones.get(ones.size()-1)); // cut point\r\n        }\r\n        return ones.size()%3>0||ans[0]>=ones.get(each)||ans[1]>ones.get(2*each)?\r\n            new int[]{-1, -1} : ans;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} arr\r\n * @return {number[]}\r\n */\r\nvar threeEqualParts = function(arr) {\r\n  const ones = arr.reduce((s, n) => s + n, 0);\r\n  if (ones === 0) return [0, 2];\r\n  if (ones % 3 !== 0) return [-1, -1];\r\n  let onesToFind = ones / 3;\r\n  let k = arr.length;\r\n  while (onesToFind > 0) if (arr[--k] === 1) --onesToFind;\r\n  const iter = arr.length - k;\r\n  const firstOne = arr.indexOf(1);\r\n  const secondOne = arr.indexOf(1, firstOne + iter);\r\n  for (let i = 0; i < iter; i++)\r\n    if (arr[i + firstOne] !== arr[k + i] || arr[i + secondOne] !== arr[k + i]) return [-1, -1];\r\n  return [firstOne + iter - 1, secondOne + iter];\r\n};"
  }
}
