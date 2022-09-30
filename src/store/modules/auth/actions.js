export default {
  //####### toggle logged in status
  toggleLoggedIn(context) {
    context.commit('changeLoggedStatus');
  },
  // ######### LOGIN USER #########
  async logIn(context, payload) {
    //setting the login API url
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBoPunH2d_AOMz-rqNY8fCMkI_UhUIGbGc";

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.userEmail,
        password: payload.userPassword,
        returnSecureToken: true,
      }),
    }); //sending the request to login

    //grab the response from database
    const responseData = await response.json();

    //checking for errors
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to authenticate");
      throw error;
    }

    //setting the user info in memory using mutation
    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
    });

    //fetch user name
    context.dispatch("fetchUserName", {
      userEmail: payload.userEmail
    })
  },
  //####################### FETCH USER NAME #########################
  async fetchUserName(context, payload) {
    //grab the token
    let token = context.rootGetters.token;

    //grab the user name
    let userEmail = payload.userEmail;

    // get method to fetch the users data
    const response = await fetch(`https://feira-universidades-default-rtdb.asia-southeast1.firebasedatabase.app/users.json?auth=${token}`);

    //grab the response from the database
    const responseData = await response.json();

    //checking for errors
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to access the database");
      throw error;
    }

    //setting the username in memory from the database
    for(const key in responseData) {
      if (userEmail === responseData[key].userEmail) {
        context.commit("setUserName", {
          userName: responseData[key].userName
        })
      }
    }

   
  },
  //######### REGISTER USER ####################
  async registerUser(context, payload) {

    //setting the login API url
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBoPunH2d_AOMz-rqNY8fCMkI_UhUIGbGc";

      //sending the data to login API
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.userEmail,
        password: payload.userPassword,
        returnSecureToken: true,
      }),
    }); //sending the request to login

    //grab the response from database
    const responseData = await response.json();
    

    //checking for errors
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to authenticate");
      throw error;
    }

    //setting the user info in memory using the mutation
    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
    });

    context.dispatch("addUserName", {
      userName: payload.userName,
      userEmail: payload.userEmail,
      token: responseData.idToken
    })
  },
  //############# ADD USER NAME ###########################
  async addUserName(context, payload) {

    //grab the user name and email
    let userName = payload.userName;
    let userEmail = payload.userEmail;
    let token = payload.token;

    //send the user name to database and add to the users array
    const response = await fetch(`https://feira-universidades-default-rtdb.asia-southeast1.firebasedatabase.app/users.json?auth=${token}`, {
      method: "POST",
      body: JSON.stringify({
        userName: userName,
        userEmail: userEmail
      })
    }); 

    const responseData = await response.json();

    if(!response.ok) {
      const error= new Error(responseData.message || "Something went wrong. Try again later.");
      throw error;
    }

    context.commit("setUserName", payload.userName);

  }
  
};
