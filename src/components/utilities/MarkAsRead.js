import { toast } from "react-toastify";

const getStoredReadList = () =>{
    const storedListStr = localStorage.getItem('Read-List');
    if(storedListStr){
          const storedList = JSON.parse(storedListStr)
          return storedList
    }
    else{
     return []
    }
}

const addToStoredReadList = (id) =>{
    const storedList = getStoredReadList()
    if(storedList.includes(id)){
        console.log(id, 'book alreary added to read list')
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('Read-List', storedListStr)
        toast.success("Added book to read list!", {
            position: "top-center"
          });
    
    }
}


const getStoredWishList = () =>{
    const storedWishListStr = localStorage.getItem('wish-list');
    if(storedWishListStr){
          const storedWishList = JSON.parse(storedWishListStr)
          return storedWishList
    }
    else{
     return []
    }
}

const addToStoredWishList = (id) =>{
    const storedWishList = getStoredWishList()
    if(storedWishList.includes(id)){
        console.log(id, 'book alreary added to read list')
    }
    else{
        storedWishList.push(id)
        const storedWishListStr = JSON.stringify(storedWishList)
        localStorage.setItem('wish-list', storedWishListStr)
        toast.success("Added book to wish list!", {
            position: "top-center"
          });
    }
}

export{addToStoredReadList,addToStoredWishList,getStoredReadList,getStoredWishList}
