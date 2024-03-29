const postReducer = (state = [], action) => {
    switch (action.type) {

        case 'ADD_POST':
            return state.concat([action.data]);
        case 'DELETE_POST':
            return state.filter((post) => post.id !== action.id);
        case 'EDIT_POST':
            return state.map((post) => 
                post.id === action.id ? {...post, isEdited: !post.isEdited} : post
            );
        case 'UPDATE_POST':
            return state.map((post) => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        title: action.data.newTitle,
                        message: action.data.newMessage,
                        isEdited: !post.isEdited
                    }
                } else {
                    return post;
                }
            });
        default:
            return state;
    }

}

export default postReducer;