export default {
    async signupStudent(context, payload) {

        
        //creating the object
        const newsignup = payload;
    
        //create the post
        const response = await fetch(`https://feira-universidades-default-rtdb.asia-southeast1.firebasedatabase.app/inscritos.json`,
            {
                method: "POST",
                body: JSON.stringify(newsignup)
            }
        );

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request');
              throw error;
        }
    },
    async fetchInscritos(context) {

    
        //create the fetch
        const response = await fetch(`https://feira-universidades-default-rtdb.asia-southeast1.firebasedatabase.app/inscritos.json`);

        //accessing the fetched data's response
        const responseData = await response.json();

        //error handling
        if (!response.ok) {
            const error = new Error(responseData.message || "Failed to fecth");
            throw error;
        }

        //creating the tasks array
        const inscritos = [];
        const emailInscritos = [];
        const nomeInscritos = [];

        //looping through the fetched data and adding each task to the tasks array
        for (const key in responseData) {
            const aluno = {
                id: key,
                fullName: responseData[key].fullName,
                email: responseData[key].email,
                school: responseData[key].school,
                date: responseData[key].date
            };

            inscritos.push(aluno);
            emailInscritos.push(responseData[key].email);
            nomeInscritos.push(responseData[key].fullName);
            
        } //end of for loop

        context.commit('setInscritosList', inscritos);
        context.commit('setEmailInscritos', emailInscritos);
        context.commit('setNomeInscritos', nomeInscritos);
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
  
      },
      async signupSchool(context, payload) {
        //creating the object
        const newsignup = payload;
    
        //create the post
        const response = await fetch(`https://feira-universidades-default-rtdb.asia-southeast1.firebasedatabase.app/escolas.json`,
            {
                method: "POST",
                body: JSON.stringify(newsignup)
            }
        );

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request');
              throw error;
        }
      },
      async fetchEscolas(context) {

    
        //create the fetch
        const response = await fetch(`https://feira-universidades-default-rtdb.asia-southeast1.firebasedatabase.app/escolas.json`);

        //accessing the fetched data's response
        const responseData = await response.json();

        //error handling
        if (!response.ok) {
            const error = new Error(responseData.message || "Failed to fecth");
            throw error;
        }

        //creating the escolas array
        const schoolList = [];
        const schoolName = [];
        const schoolEmail = [];

        //looping through the fetched data and adding each task to the tasks array
        for (const key in responseData) {
            const escola = {
                id: key,
                schoolFullName: responseData[key].schoolFullName,
                schoolEmail: responseData[key].schoolEmail,
                date: responseData[key].date,
                numberStudents: responseData[key].numberStudents,
                numberTeachers: responseData[key].numberTeachers
            };
            schoolList.push(escola);
            schoolEmail.push(responseData[key].schoolEmail);
            schoolName.push(responseData[key].schoolFullName);
            
        } //end of for loop
        context.commit('setSchoolList', schoolList);
        context.commit('setSchoolName', schoolName);
        context.commit('setSchoolEmail', schoolEmail);
    },
    async editStudent(context, payload) {
         
        // creating the object
        const editId = payload.studentId;
        const newsignup = {
            editDate: payload.editDate,
            email: payload.email,
            fullName: payload.fullName,
            school: payload.school
        };
        
        //create the post
        const response = await fetch(`https://feira-universidades-default-rtdb.asia-southeast1.firebasedatabase.app/inscritos/${editId}.json`,
            {
                method: "PATCH",
                body: JSON.stringify(newsignup)
            }
        );

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request');
              throw error;
        }
    }    
}