'use strict';

require( 'es5-shim' );
require( 'es5-shim/es5-sham' );
require( 'babel/polyfill' );

var React = require( 'react' );
var lux = require( './luxFactory.js' );
var WebAPIUtils = require( './utils/WebAPIUtils' );
var App = require( './components/App.jsx' );

WebAPIUtils.getAllProducts();

React.render(
    React.createElement( App, null ),
    document.getElementById( 'flux-app' )
);

/* Some useful lux util methods:
lux.utils.printActions();
lux.utils.printStoreDepTree();
lux.utils.printStoreDepTree( "addToCart" );
*/
