if(!Function.prototype.softBind){
    Function.prototype.softBind=function(obj){
        var fn= this;
        //capture any curried parameters
        var curried = [].slice.call(arguments,1);
        var bound=function(){
            return fn.apply(
                (!this || this === (global || window)) ? obj : this.curried.concat.apply(curried,arguments)
            );
        }
        bound.prototype = Object.create(fn.prototype);
        return bound;
    }
}