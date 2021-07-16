const SETROOM = 'menu/SETROOM';
const SETDATA = 'menu/SETDATA';
const SETALLMENU = 'menu/SETALLMENU';
// const SETDATA = 'menu/SETDATA';
const REMOVE = 'menu/REMOVE';


export const setroom = (new_room) => ({
  type: SETROOM,
  new_room,
});

export const setdata = (new_list) => ({
  type: SETDATA,
  new_list,
});

export const setallmenu = (new_list) => ({
  type: SETALLMENU,
  new_list,
});

// export const setdata = (data) => ({
//   type: SETDATA,
//   data,
// });

export const remove = (id) => ({
  type: REMOVE,
  id,
});

const initialState = {
  roomnumber:'0',
  chatdata:[],
  typemenu: [],
  allmenu: [],
};

function chats(state = initialState, action) {
  switch (action.type) {

    case SETROOM:
      return {
        ...state,
        roomnumber : action.new_room
      };

    case SETDATA:
      return {
        ...state,
        chatdata: action.new_list,
      };

    case SETALLMENU:
      return {
        ...state,
        allmenu: action.new_list,
      };



    case REMOVE:
      return {
        ...state,
        allmenu: state.allmenu.filter((todo) => todo.id !== action.id),
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