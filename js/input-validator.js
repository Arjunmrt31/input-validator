
/**
* @version: 0.0.1
* @author: Arjun Singh
* @copyright: Webkul Software https://webkul.com. All rights reserved.
* 
*/

(function($) {
    $.wkInputValidator = function(element, options) {
        var $e = $(element);
        var config = options;
        var plugin = this;
        plugin.method = {
            init:function () {
                if (typeof config.validateinput !="undefined" && config.validateinput) {
                    jQuery("body").find($e).on("keypress",function(e) {
                        return plugin.method.validate($e,e,config.type);
                    });
                }
                if (typeof config.compare != 'undefined' && config.compare) {
                    jQuery("body").find($e).on("focusout",function() {

						var min=parseFloat(jQuery("input[name='"+config.compare_min+"'").val());
						var max=parseFloat(jQuery("input[name='"+config.compare_max+"'").val());
						if(min >=max){
							jQuery("input[name='"+config.compare_max+"'").val("");
						}
					});
                }
            },
            validate : function(element,evt,validtype){
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if (validtype=='integer'){
                    if ((charCode > 31) && (charCode < 48 || charCode > 57)) {
                        return false;
                    }
                } else if(validtype=='decimal') {

                    if ((charCode != 46 && charCode > 31) && (charCode < 48 || charCode > 57)) {
                        return false;
                    }
                    var len = jQuery(element).val().length;
                    var index = jQuery(element).val().indexOf('.');

                    if (charCode == 46 && index >=0) {
                        return false;//allow only single decimal
                    }
                    if (typeof config.decimalpoints !='undefined') {
                        if (index > 0) {
                            var CharAfterdot = len - index;
                            if ((CharAfterdot > parseInt(config.decimalpoints)) && (charCode !=8 && charCode != 9)) {
                                return false;
                            }
                        }
                    }
                }
                return true;
            }
        };
        //initiate the plugin
        plugin.method.init();
    }
    $.fn.wkInputValidator = function(options) {
        return this.each(function() {
            if (undefined == $(this).data("wkInputValidator")) {
                $(this).data("wkInputValidator", new $.wkInputValidator(this, options));
            }
        });
    };
})(jQuery);
