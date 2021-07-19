const SETME = 'menu/SETME';
const SETROOMREDUX = 'menu/SETROOMREDUX';
const SETDATA = 'menu/SETDATA';
const SETUSERS = 'menu/SETUSERS';
const SETALLMENU = 'menu/SETALLMENU';
// const SETDATA = 'menu/SETDATA';
const REMOVEREDUX = 'menu/REMOVEREDUX';

export const setme = (new_me) => ({
  type: SETME,
  new_me,
});


export const setroomredux = (new_room) => ({
  type: SETROOMREDUX,
  new_room,
});

export const setdata = (new_list) => ({
  type: SETDATA,
  new_list,
});

export const setusers = (new_user) => ({
  type: SETUSERS,
  new_user,
});

// export const setdata = (data) => ({
//   type: SETDATA,
//   data,
// });

export const removeredux = (key) => ({
  type: REMOVEREDUX,
  key,
});

const initialState = {
  me:'.',
  roomnumber:'0',
  chatdata:[],
  userdata: [],
  allmenu: [],
};

function chats(state = initialState, action) {
  switch (action.type) {

    case SETME:
      return {
        ...state,
        me : action.new_me
      };

    case SETROOMREDUX:
      return {
        ...state,
        roomnumber : action.new_room
      };

    case SETDATA:
      return {
        ...state,
        chatdata: action.new_list,
      };

    case SETUSERS:
      return {
        ...state,
        userdata: action.new_user,
      };
    
    case SETALLMENU:
      return {
        ...state,
        allmenu: action.new_list,
      };



    case REMOVEREDUX:
      return {
        ...state,
        chatdata: state.chatdata.filter((todo) => todo.key !== action.key),
      };

    // case SETDATA:
    //   return {
    //     ...state,
    //     typemenu: state.allmenu.filter((todo) => todo.type === action.data),
    //   };
    // case CHANGE_INPUT:
    //   return {
    //     ...state,
    //     input: action.input,
    //   };
    // case INSERT:
    //   return {
    //     ...state,
    //     todos: state.todos.concat(action.todo),
    //   };

    // case TOGGLE:
    //   return {
    //     ...state,
    //     todos: state.todos.map((todo) =>
    //       todo.id === action.id ? { ...todo, done: !todo.done } : todo
    //     ),
    //   };

    // case REMOVE:
    //   return {
    //     ...state,
    //     todos: state.todos.filter((todo) => todo.id !== action.id),
    //   };

    default:
      return state;
  }
}

export default chats;