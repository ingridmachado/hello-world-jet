/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * dataModule module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'factories/CountryFactory','ojs/ojtable', 'ojs/ojcollectiontabledatasource'
], function (oj, ko, $, CountryFactory) {
    /**
     * The view model for the main content view template
     */
    var dataModuleContentViewModel = function(){
        var self = this;
        
        self.countryCollection = CountryFactory.createCountryCollection(),
        self.datasource = ko.observable(),
        // Called each time the view is shown to the user:
        self.initialize = function(){
            self.datasource(new oj.CollectionTableDataSource(this.countryCollection));
            self.countryCollection.fetch();
        }
        
        self.initialize();
    };
    
    return dataModuleContentViewModel;
});
