var gbks = gbks || {};

gbks.jQueryPlugin = function() { 
  
  this.init = function() {
    $(window).resize($.proxy(this.resize, this));
    this.resize();
  };
  
  this.resize = function() {
    $('#portfolio li').wookmark({
      offset: 2,
      container: $('#container'),
    });
  };
  
}

var instance = null;
$(window).load(function(){
  instance = new gbks.jQueryPlugin();
  instance.init();
});