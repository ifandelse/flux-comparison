'use strict';

var lux = require( '../luxFactory.js' );
var ProductStore = new lux.Store( {

    state: {
        products: []
    },

    namespace: "products",

    handlers: {
        receiveProducts: function( products ) {
            var newState = {};
            newState.products = products;
            this.setState( newState );
        },
        addToCart: function( product ) {
            var prod = this.getState().products.find( function( p ) {
                return p.id === product.id;
            } );
            prod.inventory = prod.inventory > 0 ? prod.inventory - 1 : 0;
        }
    },

    getAllProducts: function() {
        return this.getState().products;
    },

    getProduct: function( id ) {
        return this.getState().products.find( function( p ) {
            return p.id === id;
        } );
    }
} );

module.exports = ProductStore;
