const assert=require('test').assert;
const myFunction=require('../source/App');

describe(' Normal Require input', function(){
    it('should return true if input is Geometric', function(){
        result=myFunction.aritGeo([2,4,8,16,32,64]);
        assert.equal(result, 'true');

    });

          it('should return true if input is Arithmetic', function(){
        result=myFunction.aritGeo([2,4,6,8,10,12]);
        assert.equal(result, 'true'); 

          });

          it('should return -1 for neither', function(){
        result=myFunction.aritGeo([2,5,8,11,14,17]);
        assert.equal(result, '-1'); 

          });
          
          it('should return 0 for empty input', function(){
        result=myFunction.aritGeo([]);
        assert.equal(result, '0'); 

          });

          
          it('should return undefined for non array inputs', function(){
        result=myFunction.aritGeo([11]);
        assert.equal(result, 'undefined'); 




          });



          
          

});
