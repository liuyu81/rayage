// custom.StatisticsViewer
define(["dojo/_base/declare","dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/text!./templates/StatisticsViewer.html", "dojo/dom-style", "dojo/_base/fx", "dojo/_base/lang",
        "dojox/timing", "dojo/on"],
    function(declare, WidgetBase, TemplatedMixin, template, domStyle, baseFx, lang, timing, on) {
        return declare([WidgetBase, TemplatedMixin], {
            // Our template - important!
            templateString: template,
 
            // A class to be applied to the root node in our template
            baseClass: "statistics_viewer",
            
            // Stuff to do after the widget is created
            postCreate: function(){
                var self = this;
            },
            
            // The constructor
            constructor: function(args) {
            
                this.onClose = function() {
                    return true;
                };
                
                dojo.safeMixin(this, args);
            },
        });
});
