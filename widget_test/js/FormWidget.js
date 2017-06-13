Clazz.createPackage("com.photon.train");
Clazz.com.photon.train.FormWidget = Clazz.extend(Clazz.WidgetWithTemplate, {
    templateUrl : "../template/form_template.xml",  
    defaultContainer : null,
    formWidget : null,
    collegeData : null,
    biodata : null,

    initialize : function(config){
        console.log("Initialize");
        this.defaultContainer = config;
    },

    bindUI : function(){
        var self = this;
        $("#submitB").click(function(){
        var nama1 = $("#nama").val();
        var kls = $("#kelas").val();
        var npm2 = $("#npm").val();   

        self.collegeData = {
            name : nama1,
            kelas : kls,
            npm1 : npm2, 
        };
        console.log("Data" + JSON.stringify(self.collegeData));

/*      for (i = 0; i < self.collegeData.length : i++){
        self.collegeData[i] = {
            name     : nama1,
            kelas    : kls,
            npm1     : npm2, 
        };
        }
        var biodata = JSON.stringify(self.collegeData);
        localStorage.setItem(self.collegeData, JSON.stringify(self.collegeData));  
        console.log("Data "+JSON.stringify(self.collegeData));*/
            
        });
        
        $("#viewB").click(function(){
             self.showData(self.collegeData);
        });
    },
        

    showData : function(data){
        var formContainer = $("#tableContainer");
        var viewWidget = new Clazz.com.photon.train.ViewWidget(data);
        viewWidget.render(formContainer);

    }
});