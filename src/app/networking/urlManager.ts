// main server canli sunucu
//export const baseUrl = "";

//local server
export const baseUrl = "http://localhost:4500";

export const defaultIcons = {
    userIcon: 'https://image.flaticon.com/icons/png/128/847/847969.png'
};

export const user = {
    signIn: baseUrl+'/users/sign/in',
    signUp: baseUrl+'/users/sign/up',
    signOut: baseUrl+'/users/sign/out',

    getAllFav:  baseUrl+'/users/get/all/favorite',
    addFav: baseUrl+'/users/add/favorite',
    deleteFav: baseUrl+'/users/delete/favorite'
};

export const product = {
    getAll: baseUrl+'/products/get/all',
    get: baseUrl+'/products/get',
    add: baseUrl+'/products/add',
    set: baseUrl+'/products/set'
};

export const category = {
    getAll: baseUrl+'/categories/get/all',
    getCategoryProduct: baseUrl+'/categories/get/product',
    get: baseUrl+'/categories/get',
    add: baseUrl+'/categories/add',
    set: baseUrl+'/categories/set'
};

