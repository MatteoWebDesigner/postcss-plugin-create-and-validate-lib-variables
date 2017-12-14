var postcss = require('postcss');
var database = require('./database.json'); 

module.exports = postcss.plugin('checkInvalidAPI', function myplugin(options) {

   return function (css) {
        options = options || {};

        css.walkDecls(decl => {
            if (decl.prop.indexOf('$lib-s') === 0) {

                let isValid = database.list.find((value) => value === decl.prop);

                if (!isValid) {
                    throw `this variable is not defined in lib ${decl.prop}`;
                }
            
            }
        });
   }

});