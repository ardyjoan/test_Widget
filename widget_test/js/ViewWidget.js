Clazz.createPackage("com.photon.train");
Clazz.com.photon.train.ViewWidget = Clazz.extend(Clazz.WidgetWithTemplate, {
    templateUrl : "../template/view_template.xml",
    data : null,

    initialize : function(config){

        console.log("DataF "+JSON.stringify(config));

        	this.data = config;

    },

    postRender : function(element){
		
    }
});
