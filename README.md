# input-validator
validate input fields

A jQuery plugin to validate input field.

#### Features :
- Validates integer,decimal
- can set number of values after decimal.
- Compare values of two fields

#### Examples : 
element - HTML element

1. Validate integer : 

  `
      jQuery(element).wkInputValidator({
        type:"integer",
        validateinput:true,
        compare:false
      });
   `

2. Validate decimal :

  `
   jQuery(element).wkInputValidator({
        type:"decimal",
        validateinput:true,
        compare:false,
        decimalpoints:2
    });
  `

3. Validate with compare :
  `
    jQuery(element).wkInputValidator({
        type:"decimal",
        validateinput:true,
        compare:true,
        compare_min:element,
        compare_max:element2,
        decimalpoints:2
    });
  `
