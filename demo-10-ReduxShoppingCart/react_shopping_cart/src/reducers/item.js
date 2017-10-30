const INIT_STATE = [
    { id: 1, title : 'Tooth paste', link : 'http://www.colgate.com/CP15/en/us/oc/products/toothpaste/images/kids-cavity-protection-toothpaste-outofpack-02.png'},
    { id: 2, title : 'iPhone', link : 'https://support.apple.com/content/dam/edam/applecare/images/en_US/iphone/featured-content-iphone-transfer-content-ios10_2x.png'},
    { id: 3, title : 'Nexus 6p', link : 'https://img.kogan.com/Es0y8-xnCCzGXpNxGnKMpaia1fI=/600x400/http://assets.kogan.com/files/products/HK-PHONES/HUAWEI-BLACK.jpg'},
    { id: 4, title : 'Water', link : 'http://thesecondset.net/wp-content/uploads/2015/12/water-bottle.jpg'},
    { id: 5, title : 'Y-3 Shoes', link : 'http://img13.360buyimg.com/n1/jfs/t8509/5/1243885148/103815/6034449f/59b66ecfN77cdf016.jpg'},
    { id: 6, title : 'Vita Coco', link : 'https://img11.360buyimg.com/n1/s160x160_jfs/t5464/44/1528736852/562148/d2af5b0b/591151ddNb0ac91e2.jpg'},
];

export default (state = INIT_STATE, action) => {
    console.log(action);

    switch (action.type) {
        default:
            return state;
    }
}
