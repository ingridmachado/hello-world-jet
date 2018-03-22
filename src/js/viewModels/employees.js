/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * employees module
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojpictochart', 'ojs/ojswitcher', 'ojs/ojfilmstrip', 'ojs/ojknockout'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function employeesContentViewModel() {
        var self = this;
        
        self.pictoChartItems = ko.observableArray([
        {name: 'Have Sleep Problems', shape: 'human', count:7, color: '#ed6647'},
        {name: 'Sleep Well', shape: 'human', count: 3}
        ]);
        
        self.selectedItem = ko.observable("home");
        
        self.chemicals = [
          { name: 'Hydrogen' },
          { name: 'Helium' },
          { name: 'Lithium' },
          { name: 'Beryllium' },
          { name: 'Boron' },
          { name: 'Carbon' },
          { name: 'Nitrogen' },
          { name: 'Oxygen' },
          { name: 'Fluorine' },
          { name: 'Neon' },
          { name: 'Sodium' },
          { name: 'Magnesium' }
      ];
      
      self.currentNavArrowPlacement = ko.observable("adjacent");
      self.currentNavArrowVisibility = ko.observable("auto");
    }
    
    return employeesContentViewModel;
});
