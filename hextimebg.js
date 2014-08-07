// HEXbg - Richard Foster 2014.
// Use it for whatever.

module.exports = (function(){

    var bg, bgTimeout, hextime;

    hextime = function(){
        // Get current time, split into hours, minutes and seconds.
        // Adding "0" stringifies and ensures each value is at least 2 digits. 
        var time = new Date(),
            h = "0" + time.getHours(),
            m = "0" + time.getMinutes(),
            s = "0" + time.getSeconds();
        // Cut each value to 2 digits.
        h = h.slice(-2), m = m.slice(-2), s = s.slice(-2);
        // Return combined hex value
        return "#"+h+m+s;
    }

    bg = {
        els: [],
        init: function(elements){
            // Take all jQuery objects passed and add to element list. 
            this.els = Array.prototype.slice.call(arguments);
            // Initial colour set
            this.set(hextime());
            // Begin the loop
            this.loop();
        },
        set: function(hex){
            // Change the colour of every jQuery object in the element list.
            this.els.forEach(function(jqel){
                jqel.css({background: hex});
            });
        },
        loop: function(){
            // Timeout for one second
            bgTimeout = setTimeout(function(){
                // Set with hextime();
                bg.set(hextime());
                // Recall timer
                bg.loop();
            }, 1000);
        },
        stop: function(){
            clearTimeout(bgTimeout);
        }
    }

    // Return controller object.
    return bg;
    
})();