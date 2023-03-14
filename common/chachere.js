((chacheHelper) => {
   const NodeCache = require( "node-cache" );
   const myCache = new NodeCache();
   chacheHelper.saveCache = (key,value,ttl)=>{
      return myCache.set( key, value, ttl );
   }
   chacheHelper.getChache=(key)=>{
      const value = myCache.get(key);
      return value;
   }
    })(module.exports);