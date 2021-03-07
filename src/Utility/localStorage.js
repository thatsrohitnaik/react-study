// export function localStorage(){

//     function setInLocalStorage(field = null, value){

//     if(field){
//         localStorage.setItem(field, value)
//     }

//     }

//     function getFromLocalStorage(field){
//        return localStorage.getItem(field)
//     }

// }

export default class Storage {

    setInLocalStorage(field = null, value) {
        const val = JSON.stringify(value);
        field && localStorage.setItem(field, val)
    }

    getFromLocalStorage(field) {
        try {
            return JSON.parse(localStorage.getItem(field))
        }
        catch (e) {
            return null;
        }
    }

    clearLocalStorage(){
        localStorage.clear();
    }

    removeFromLocalStorage(field){
        localStorage.removeItem(field)
    }

}

