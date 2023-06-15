

export interface Post{
    userId:number
    id:number
    title:string
    body:string
}

export interface Comments{
    name:string
    id:number
    body:string
    email:string
    postId:number 
}



export interface UserPosts{
    userId:number
    id:number
    title:string
    body:string
    userDetails?:User
}

export interface User{
   id:number
   name:string
   username:string
   email:string
   address:{
    street:string
    suite:string
    city:string
    zipcode:string
    geo:{
        lat:string
        lng:string
    }

   }
   phone:string
   website:string
   company:{
    name:string
    catchPhrase:string
    bs:string
   }

}