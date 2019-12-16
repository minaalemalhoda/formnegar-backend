const privates = {
  forms: {},
};


const functions = {
  insert: (form) => {
    const {id} = form;
    privates.forms[id] = form;
  },
  
  fetch(id) {
    return privates.forms[id];
  },
  
  delete(id) {
    delete privates.forms[id];
  },
  
  fetchAllForms() {
    return privates.forms;
  },
};

module.exports = functions;