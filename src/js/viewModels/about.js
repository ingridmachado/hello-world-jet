/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojgauge', 'ojs/ojinputnumber','ojs/ojtable', 'ojs/ojarraydataprovider', 'ojs/ojtreeview', 'ojs/ojjsontreedatasource'],
 function(oj, ko, $) {
  
    function AboutViewModel() {
      var self = this;
      
      self.value10  = ko.observable(80);
      self.label = {text: 'Sales'};
      self.step = ko.observable(2);
      self.currentValue = ko.observable(0);
      
      var deptArray = [{DepartmentId: 1001, DepartmentName: 'ADFPM 1001 neverending', LocationId: 200, ManagerId: 300},
        {DepartmentId: 556, DepartmentName: 'BB', LocationId: 200, ManagerId: 300},
        {DepartmentId: 10, DepartmentName: 'Administration', LocationId: 200, ManagerId: 300}];
    
      self.dataprovider = new oj.ArrayDataProvider(deptArray, {idAttribute: 'DepartmentId'});
      
      var jsonData = [{
          "attr": {
            "title": "News",
            "id": "news"
          }
        }, {
          "attr": {
            "title": "Blogs",
            "id": "blogs"
          },
          "children": [{
            "attr": {
              "title": "Today",
              "id": "today"
            }
          }, {
            "attr": {
              "title": "Yesterday",
              "id": "yesterday"
            }
          }, {
            "attr": {
              "title": "Archive",
              "id": "archive"
            }
          }]
        }, {
          "attr": {
            "title": "Links",
            "id": "links"
          },
          "children": [{
            "attr": {
              "title": "Oracle",
              "id": "oracle"
            },
            "children": [{
              "attr": {
                "title": "USA",
                "id": "usa"
              },
              "children": [{
                "attr": {
                  "title": "Northeast",
                  "id": "northeast"
                }
              }, {
                "attr": {
                  "title": "Midwest",
                  "id": "midwest"
                }
              }, {
                "attr": {
                  "title": "South",
                  "id": "south"
                }
              }, {
                "attr": {
                  "title": "West",
                  "id": "west"
                }
              }]
            }, {
              "attr": {
                "title": "Europe",
                "id": "europe"
              }
            }, {
              "attr": {
                "title": "Asia",
                "id": "asia"
              },
              "children": [{
                "attr": {
                  "title": "Japan",
                  "id": "japan"
                }
              }, {
                "attr": {
                  "title": "China",
                  "id": "china"
                }
              }, {
                "attr": {
                  "title": "India",
                  "id": "india"
                }
              }]
            }]
          }, {
            "attr": {
              "title": "IBM",
              "id": "ibm"
            }
          }, {
            "attr": {
              "title": "Microsoft",
              "id": "microsoft"
            },
          }]
        }];
        this.data = new oj.JsonTreeDataSource(jsonData);
      
      // Below are a subset of the ViewModel methods invoked by the ojModule binding
      // Please reference the ojModule jsDoc for additional available methods.

      /**
       * Optional ViewModel method invoked when this ViewModel is about to be
       * used for the View transition.  The application can put data fetch logic
       * here that can return a Promise which will delay the handleAttached function
       * call below until the Promise is resolved.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
       * the promise is resolved
       */
      self.handleActivated = function(info) {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
       */
      self.handleAttached = function(info) {
        // Implement if needed
      };


      /**
       * Optional ViewModel method invoked after the bindings are applied on this View. 
       * If the current View is retrieved from cache, the bindings will not be re-applied
       * and this callback will not be invoked.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       */
      self.handleBindingsApplied = function(info) {
        // Implement if needed
      };

      /*
       * Optional ViewModel method invoked after the View is removed from the
       * document DOM.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
       */
      self.handleDetached = function(info) {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new AboutViewModel();
  }
);
