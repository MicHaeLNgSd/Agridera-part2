var app = new Vue({
    el:".items, .item, .contactUs",
    data: {
        products:[
            {id:1, title:"Lukan", short_text:"Wrinkle-free and shiny skin mandarin", image:"1.jpg", desc:" Its skin is thin and slightly wrinkled, which makes it easy to peel. It is smaller than the Ponkan (see below). The zesty orange is sweet and juicy, and perks up the appetite with acidic and tangy notes. Flavour-wise, it is the most accessible type of orange."},
            {id:2, title:"Ponkan", short_text:"Wrinkle-full and shiny skin mandarin", image:"2.jpg", desc:"The round mandarin-pomelo hybrid fruit boasts the smoothest “complexion” as its skin is almost wrinkle-free and shiny. Those with a sweeth tooth should pick this fruit as it is the sweetest of the lot and has a succulent texture. However, its sweetness can be overwhelming if you consume a few at one go."},
            {id:3, title:"Swatow", short_text:"Wrinkled and thicker skin mandarin", image:"3.jpg", desc:"The Swatow stands out with its rougher, wrinkled and thicker skin, which is harder to peel. Its flesh is laced with chewy inner membranes and is known for being more tangy and sourish.These oranges can be kept well for around two weeks, making them highly suitable for festive decorations."},
            {id:4, title:"Kinno", short_text:"Wrinkle-full and matte skin mandarin", image:"4.jpg", desc:"Those who enjoy full-bodied flavour should opt for the Kinno — it is big on sweet and tart flavours. However, it can be a hassle to eat the fruit as it contains a lot more seeds than other varieties."},
            {id:5, title:"Dekopon", short_text:"Wrinkled skin and seedless mandarin", image:"5.jpg", desc:"The Dekopon is often hailed as the most delicious mandarin orange as the seedless fruit is intensely sweet and tart and wafts with a beautiful fragrance. It is also one of the pricier oranges, as one Dekopon costs about $7."}
        ],
        product:[],
        cart:[],
        cartIds:[],
        contactFields:[],
        btnVisible: 0,
        orderVisible: 0
    },
    mounted:function() {
        console.log(window.localStorage.getItem('prod'));
        this.getProducts();
        this.checkInCart();
        console.log(this.cartIds);
        console.log(this.contactFields);

        this.getCart();
    },
    methods: {
        addItem:function(id){
            window.localStorage.setItem('prod',id)
        },

        getProducts:function(){
            if(window.location.hash) {
                var id = window.location.hash.replace('#','');
                if(this.products && this.products.length > 0) {
                for(i in this.products) {
                    if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product=this.products[i];
                } 
                }
            }
        },

        addToCart:function(id) {
            var cart = [];
            if(window.localStorage.getItem('cart')) {
                cart = window.localStorage.getItem('cart').split(',');
            }
            if(cart.indexOf(String(id))==-1) {
                cart.push(id);
                window.localStorage.setItem('cart', cart.join());
                this.btnVisible=1;
            }
        },
        checkInCart:function() {
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id)) !=-1 ) this.btnVisible=1;
        },






        getCart:function() {
            for(i in localStorage.getItem('cart')) {
                for(p in this.products) {
                    if(this.products[p].id == localStorage.getItem('cart').split(',')[i]) {
                       this.cart.push(this.products[p]);
                       this.cartIds.push(this.products[p].id);
                    }
                }
            }
        },
        removeFromCart:function(id) {
            for(i in this.cart) {
                if(this.cart[i].id == id) {
                    this.cart.splice(i, 1);
                    this.cartIds.splice(i, 1);
                    window.localStorage.setItem('cart', this.cartIds.join());
                }
            }
        },
        makeOrder:function() {
            this.orderVisible = 1;
            this.cart = [];
            this.cartIds = [];
            window.localStorage.removeItem('cart');
        }
    }   
});