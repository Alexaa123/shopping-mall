let url = {
    hotLists: '/index/hotLists',
    banner: '/index/banner',
    topLists: '/category/topList',
    subLists: '/category/subList',
    rankLists:'/category/rank',
    searchList:'/search/list',
    details:'/goods/details',
    deal:'/goods/deal',
    addCart:'/cart/add',
    cartLists:'/cart/list',
    reduceLists:'/cart/reduce',
    cartRemove:'/cart/remove',
    cartMremove:'/cart/mrremove',
    addressLists:'/address/list',
    addressAdd:'/address/add',
    addressRemove:'/address/remove',
    addressUpdate:'/address/update',
    addressSetDefault:'/address/setDefault',


}

let host = 'http://rap2api.taobao.org/app/mock/7058'

for(let key in url){
    if (url.hasOwnProperty(key)){
        url[key] = host + url[key]
    }
}

export default url