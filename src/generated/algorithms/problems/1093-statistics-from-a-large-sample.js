export default {
  "id": 1093,
  "name": "Statistics from a Large Sample",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/statistics-from-a-large-sample",
  "relativeDir": "S/Statistics from a Large Sample",
  "slug": "1093-statistics-from-a-large-sample",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 42,
    "java": 62,
    "python": 23,
    "javascript": 45
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 8.80 MB (Top 37.04%)\r\n\r\nclass Solution {\r\npublic:\r\n    double solve(vector<int>& arr,int n){\r\n        double count = 0;\r\n        for(int i = 0;i < arr.size();i++){\r\n            count += arr[i];\r\n            if(count >= n)\r\n                return i;\r\n        }\r\n        return -1;\r\n    }\r\n    vector<double> sampleStats(vector<int>& count) {\r\n        int mini = INT_MAX;\r\n        int maxi = 0;\r\n        double sum = 0.0;\r\n        int d = 0;\r\n        int mode = 0;\r\n        for(int i = 0;i < count.size();i++){\r\n            if(count[i] == 0)\r\n                continue;\r\n            mini = min(mini,i);\r\n            maxi = max(maxi,i);\r\n            sum += double(count[i])*i;\r\n            d += count[i];\r\n            if(count[mode] < count[i])\r\n                mode = i;\r\n        }\r\n        vector<double>ans(5,0.0);\r\n        ans[0] = mini;\r\n        ans[1] = maxi;\r\n        ans[2] = sum/d;\r\n        ans[4] = mode;\r\n        if(d%2 == 0){\r\n            ans[3] = (solve(count,d/2) + solve(count,d/2+1))/2;\r\n        }\r\n        else\r\n            ans[3] = solve(count,d/2+1);\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def sampleStats(self, count):\r\n        \"\"\"\r\n        :type count: List[int]\r\n        :rtype: List[float]\r\n        \"\"\"\r\n        maxv,minv,acc,cnt,mode,modev=None,None,0,0.0,0,0\r\n        for i,n in enumerate(count):\r\n            if minv==None and n!=0:minv=i\r\n            if n!=0:maxv=i\r\n            if n>modev:modev,mode=n,i\r\n            acc,cnt=acc+n*i,cnt+n\r\n          \r\n        midCnt,cc,midv,prei=cnt//2,0,0,i\r\n        for i,n in enumerate(count):\r\n            if n==0:continue\r\n            if cc+n<=midCnt:\r\n                cc,prei=cc+n,i\r\n                continue\r\n            if cnt%2==1:midv=i\r\n            else:midv=(prei+i)/2.0 if cc==midCnt else i\r\n            break\r\n        return (minv,maxv,acc/cnt,midv,mode)",
    "java": "class Solution {\r\n    public double[] sampleStats(int[] count) {\r\n        double[]ans=new double[5];\r\n        ans[0]=-1;\r\n        ans[1]=-1;\r\n        int place=0;\r\n        while(ans[0]==-1){\r\n            if(count[place]>0)\r\n                ans[0]=place;\r\n            place++;\r\n        }\r\n        place=count.length-1;\r\n        while(ans[1]==-1){\r\n             if(count[place]>0)\r\n                ans[1]=place;\r\n            place--;\r\n        }\r\n        int countEl=count[0];\r\n        int max=count[0];\r\n        for(int i=1;i<count.length;i++){\r\n            countEl+=count[i];\r\n            if(count[i]>max){\r\n                max=count[i];\r\n                ans[4]=i;\r\n            }\r\n        }\r\n        for(int i=0;i<count.length;i++){\r\n            if(count[i]>0){\r\n                double tmp=count[i];\r\n                tmp/=countEl;\r\n                ans[2]+=tmp*i;\r\n            }\r\n        }\r\n        place=0;\r\n        int whereToStop=0;\r\n        while(whereToStop<countEl/2){\r\n            whereToStop+=count[place];\r\n            place++;\r\n        }\r\n        place--;\r\n        if(countEl%2==1){\r\n            if(whereToStop==countEl/2){\r\n                place++;\r\n                while(count[place]==0)\r\n                    place++;\r\n            }\r\n                \r\n            ans[3]=place;\r\n        }\r\n        else{\r\n            double tmp=place;\r\n            if(whereToStop==countEl/2){\r\n                place++;\r\n                while(count[place]==0)\r\n                    place++;\r\n            }\r\n            tmp+=place;\r\n            ans[3]=tmp/2;\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 417 ms (Top 7.69%) | Memory: 44.4 MB (Top 23.08%)\r\n/**\r\n * @param {number[]} count\r\n * @return {number[]}\r\n */\r\nvar sampleStats = function(count) {\r\n    let min;\r\n    let max;\r\n    let sum = 0;\r\n    let mode = 0;\r\n    let prefix = 0;\r\n    let prefixSum = new Map();\r\n    for (let i=0; i<count.length; i++) {\r\n        if (count[i] === 0) continue;\r\n        if (min === undefined) min = i;\r\n        max = i;\r\n        if (count[i] > count[mode]) mode = i;\r\n        sum += (count[i] * i);\r\n        prefix += count[i];\r\n        prefixSum.set(prefix, i);\r\n    }\r\n    const mean = sum / prefix;\r\n    // min, max, mean, mode found\r\n    // finding median using prefixSum map\r\n    let median;\r\n    let medianLeft;\r\n    let medianRight;\r\n    const medianPoint = Math.ceil(prefix/2);\r\n    for (let i=medianPoint; i<=prefix; i++) {\r\n        if (!prefixSum.has(i)) continue;\r\n        if (medianLeft !== undefined) {\r\n            medianRight = prefixSum.get(i);\r\n            median = (medianLeft+medianRight) / 2;\r\n            break;\r\n        }\r\n        if (i === medianPoint && prefix % 2 === 0) {\r\n            medianLeft = prefixSum.get(i);\r\n            continue;\r\n        }\r\n        median = prefixSum.get(i);\r\n        break;\r\n    }\r\n\r\n    return [min, max, mean, median, mode];\r\n};"
  }
}
