export const ADDUSER = 'ADD/ADDUSER';
export const DELETEUSER = 'DELETE/DELETEUSER';

export const addUser = userData => {
  return {
    type: ADDUSER,
    userData,
  };
};

export const deleteUser = id => {
  return {
    type: DELETEUSER,
    id,
  };
};
