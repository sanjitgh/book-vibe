import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        console.log(id, "already exist in the read list.");
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        toast("Successfully added !",{
            position:"top-center"
        });
    }
}

const getStoredWishList = () => {
    const storedWishListString = localStorage.getItem('wish-list');
    if (storedWishListString) {
        const storedWish = JSON.parse(storedWishListString);
        return storedWish;
    }
    else {
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedWish = getStoredWishList();
    if (storedWish.includes(id)) {
        console.log(id, "This item alreay exist in wishlist.");
    }
    else {
        storedWish.push(id);
        const storedWishListString = JSON.stringify(storedWish);
        localStorage.setItem('wish-list', storedWishListString);
    }
}



export { addToStoredReadList, addToStoredWishList, getStoredReadList }