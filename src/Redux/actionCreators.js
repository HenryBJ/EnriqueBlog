import actionsType from './constants'

export const addPost= (username,title,text)=>
({
    type:actionsType.ADD_POST,    
    username,
    title,
    commentNumber:0,
    comments:[],
    text,
    timestamp:new Date().toDateString()
})

export const addComment= (username,postId,comment)=>
({
    type:actionsType.ADD_COMMENT,
    username,
    postId,
    comment
})