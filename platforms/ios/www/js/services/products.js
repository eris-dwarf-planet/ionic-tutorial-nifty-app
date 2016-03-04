'use strict';

app.factory('Products', function(FURL, $firebaseArray, Auth) {
    var ref = new Firebase(FURL);
    var products = $firebaseArray(ref.child('products'));

    var Products = {
        all: function() {
            return products;
        },
        saveProduct: function(product, image) {
            console.log('the user profile is', Auth.user.profile);
            var newProduct = {
                name: product.name,
                tagline: product.tagline,
                description: product.description,
                price: product.price,
                image: image,
                seller_image: Auth.user.profile.gravater,
                serller_name: Auth.user.profile.name
            };

            return products.$add(newProduct).then(function() {
                console.log("add to the database");
            })
        }
    };
    return Products;
});
