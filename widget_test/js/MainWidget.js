Clazz.createPackage("com.photon.train");
Clazz.com.photon.train.MainWidget = Clazz.extend(Clazz.WidgetWithTemplate, {
    templateUrl : "../template/container_template.xml",  
    formContainer : null,
    formWidget : null,

    initialize : function(config){
    },

    bindUI : function(){
        
        },

    postRender : function() {
    var  formContainer = $("#baseContainer");
    formWidget = new Clazz.com.photon.train.FormWidget(formContainer);
    formWidget.render(formContainer);

    }
});