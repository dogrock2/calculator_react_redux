export default function(state='', action){    
    switch(action.type){
        case 'BUTTON_CLICKED':
          return action.payload;
    }
    return state;
}