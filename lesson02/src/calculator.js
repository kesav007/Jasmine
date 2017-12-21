window.Calculator = {
    current: 0,
    add: function() {
        var sum = this.current;
        var len = arguments.length;
        for (var i = 0; i < len; i++) {
            sum += arguments[i];
        }
        this.current = sum;
        return this.current;
    },

    sub: function() {
        var sub = this.current;
        for (var i = 0; i < arguments.length; i++) {
            sub -= arguments[i];
        }
        this.current = sub;
        return this.current;
    },

    reset: function(){
    	this.current = 0;
    }
}