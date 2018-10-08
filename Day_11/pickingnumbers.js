a.sort(function(a, b){return a - b});
        var max=0;
        var result=0;
       var ar1=[];
        ar1.push(a[0]);
        for(var i=0;i<a.length-1;i++)
        {
            
            if(ar1.length==0)
            {
                ar1.push(a[i]);
            }
             var temp=ar1[0];
           
            if(a[i+1]==temp)
            {
                ar1.push(a[i+1]);
            }
            else
            {
                if(temp!=a[i+1]&&a[i+1]-temp==1)
                 {
                ar1.push(a[i+1]);
                }
               if(temp!=a[i+1]&&a[i+1]-temp>1)
               {
                   result=ar1.length;
                   if(max<result)
                   {
                       max=result;
                   }
                   ar1=[];
               }   
         }
        }
        result=ar1.length;
        if(max<result)
        {
            max=result;
        }
         return max;
