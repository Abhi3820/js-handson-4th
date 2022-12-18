const Find_Prod = (array, N) => 
{
  var product=1;
   for(var i=0;i<N;i++){
     product=product*array[i];
   }
   return product;
    
};