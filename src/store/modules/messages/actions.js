export default {
    async addMessage(context, payload) {

        //grab the token
        const token = context.rootGetters.token;

        //creating the object
        const newMessage = payload;
    
        //create the post
        const response = await fetch(`https://rainbow-task-default-rtdb.asia-southeast1.firebasedatabase.app/messages/${payload.receiver}.json?auth=${token}`,
            {
                method: "POST",
                body: JSON.stringify(newMessage)
            }
        );

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request');
              throw error;
        }
    },
    async getMessages(context, payload) {

        //grab the token
        const token = context.rootGetters.token;

        //get username
        let userName = payload;

        //create the fetch
        const response = await fetch(`https://rainbow-task-default-rtdb.asia-southeast1.firebasedatabase.app/messages/${userName}.json?auth=${token}`);

        //accessing the fetched data's response
        const responseData = await response.json();

        //error handling
        if (!response.ok) {
            const error = new Error(responseData.message || "Failed to fecth");
            throw error;
        }

        //creating the tasks array
        const messages = [];

        //looping through the fetched data and adding each task to the tasks array
        for (const key in responseData) {
            const msg = {
                id: key,
                messageContent: responseData[key].content,
                messageAuthor: responseData[key].author,
                messageDate: responseData[key].date,
                messageReceiver: responseData[key].receiver,
                messageTitle: responseData[key].title
            };

            messages.push(msg);
        } //end of for loop

        context.commit('setMessagesList', messages);
    },
    async fetchAllUsers(context) {
        //grab the token
        const token = context.rootGetters.token;
  
        //fetch all users from database
        const response = await fetch(`https://rainbow-task-default-rtdb.asia-southeast1.firebasedatabase.app/users.json?auth=${token}`);
  
        //receive the data from database
        const responseData = await response.json();
  
        //checking for errors
        if(!response.ok) {
          const error = new Error(responseData.message || "Something went wrong.");
          throw error;
        }
  
        //create an empty array
        const users = [];
  
        //pushing the users into the array
        for (const name in responseData) {
          users.push({userName: responseData[name].userName});
        }
  
        console.log(users);
        context.commit("setAllUsers", users);
  
      }    
}