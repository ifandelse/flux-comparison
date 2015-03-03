'use strict';

var shop = require( '../../../common/api/shop' );
var lux = require( '../luxFactory.js' );

module.exports = lux.actionCreatorListener( {
    getAllProducts: function() {
        shop.getProducts( function( products ) {
            this.publishAction( "receiveProducts", products );
        }.bind( this ) );
    },

    handlers: {
        cartCheckout: function( products ) {
            shop.buyProducts( products, function() {
                this.publishAction( "successCheckout", products );
            }.bind( this ) );
        }
    }
} );
