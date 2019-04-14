import actionsType from './constants'

const postSimpleReducer = (state={},action)=>
{
    let {type,...post} = action
    let new_post = Object.assign(post,{id:state.length+1})
    switch(type)
    {        
        case actionsType.ADD_POST:
        return new_post
        default:
         return state
    }
}

const commentSimpleReducer = (state={},action)=>
{
    let {type,postId,...comment} = action
    let new_comment = Object.assign(comment)
    switch(type)
    {        
        case actionsType.ADD_COMMENT:
        return new_comment
        default:
         return state
    }
}

export const appReducer=(state=[],action)=>
{
    switch(action.type)
    {        
        case actionsType.ADD_POST:        
        return [postSimpleReducer(state,action),...state]
        case actionsType.ADD_COMMENT:            
        let {postId} = action 
        let new_state=state.map((post)=>{
            if (Number(post.id) === Number(postId)) {
                let {comments,commentNumber}=post    
                let new_post = Object.assign(post,{commentNumber:commentNumber+1,comments:[commentSimpleReducer({},action),...comments]})  
                return new_post
            }
            else{
                return post
            }
        })      
        return new_state
        default:
        return state
    }

}