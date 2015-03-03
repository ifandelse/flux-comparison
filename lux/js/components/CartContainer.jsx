'use strict';

var React = require('react');
var lux = require( '../luxFactory.js' );
var Cart = require('../../../common/components/Cart.jsx');
var cartStore = require('../stores/CartStore');

function getStateFromStores () {
    return {
        products: cartStore.getAddedProducts(),
        total: cartStore.getTotal()
    };
}

var CartContainer = lux.controllerView({

    getActionGroup: [ "cart" ],

    stores: {
        listenTo: [ "cart" ],
        onChange: function() {
            this.setState(getStateFromStores());
        }
    },

    getInitialState: function () {
        return getStateFromStores();
    },

    onCheckoutClicked: function () {
        var products = this.state.products;
        if (!products.length) {
            return;
        }
        this.cartCheckout(products);
    },

    render: function () {
        return (
            <Cart products={this.state.products} total={this.state.total} onCheckoutClicked={this.onCheckoutClicked} />
        );
    }
});

module.exports = CartContainer;
