// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//      window.location = "profile.html" }
//     })

// let uploadFiles = (file) => {
//         return new Promise((resolve, reject) => {
//             let storageRef = firebase.storage().ref(`profilepics/${file.name}`);
//             // let progress1 = document.getElementById("progress"); // let bar = document.getElementById("bar");  // progress1.style.display = "block"
//             let uploading = storageRef.put(file)
//             uploading.on('state_changed',
//                 (snapshot) => {
//                     // var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;         // bar.style.width = Math.round(progress.toFixed()) + "%";           // bar.innerHTML = Math.round(progress.toFixed()) + "%";
//                     switch (snapshot.state) {
//                         case firebase.storage.TaskState.PAUSED:
//                             console.log('Upload is paused');
//                             break;
//                         case firebase.storage.TaskState.RUNNING:
//                             console.log('Upload is running');
//                             break;
//                     }
//                 },
//                 (error) => {
//                     reject(error)
//                 },
//                 () => {
//                     uploading.snapshot.ref.getDownloadURL().then((downloadURL) => {
//                         resolve(downloadURL)
//                     });
//                 }
//             );
//         })
//     }

//     let profilePicUrl = await uploadFiles(profilepic.files[0])
//     console.log(profilePicUrl)
    

let register = () => {
    let username = document.getElementById("username")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    
    let successdiv = document.getElementById("successdiv")
    let errordiv = document.getElementById("errordiv")
    let loader = document.getElementById("loader")


    loader.style.display = "block";
    loadertext.style.display = 'none';

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            // Signed in 
            var user = res.user;
            firebase.database().ref(`users/${user.uid}`).set(
                {
                    Username: `${username.value}`,
                    Email: `${email.value}`,
                    Password: `${password.value}`,

                }
            ).then((res) => {
                successdiv.innerText = "Sign up successful"
                successdiv.style.display = "block";
                loadertext.style.display = "block";
                errordiv.style.display = "none";
                loader.style.display = "none";
                username.value = ""
                email.value = ""
                password.value = ""

                setTimeout(() => {
                    window.location = "login.html"
                }, 1000)

            })


        })
        .catch((error) => {

            var errorMessage = error.message;
            errordiv.innerText = errorMessage;
            errordiv.style.display = "block";
            successdiv.style.display = "none";
            loader.style.display = "none";
            loadertext.style.display = "block";


            // ..
        });
}



let login = () => {
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let successdiv = document.getElementById("successdiv")
    let errordiv = document.getElementById("errordiv")
    let loader = document.getElementById("loader")
    let loadertext = document.getElementById("loadertext")

    loader.style.display = "block";
    loadertext.style.display = 'none';
    errordiv.style.display="none"   

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            // Signed in

            var user = res.user;
            successdiv.innerText = "Sign in Successful"
            loader.style.display = "none";
            loadertext.style.display = 'block';
            successdiv.style.display= "block"
    
            setTimeout(()=>{
                window.location = "profile.html"
            },1000)

        })
        .catch((error) => {           
            var errorMessage = error.message;
            loader.style.display = "none";
            loadertext.style.display = 'block';
            successdiv.style.display= "none"
            errordiv.innerText= errorMessage;
            errordiv.style.display="block"
        });

}


// let profile = ()=>{
  
    
        
//     try{
//         let username = document.getElementById("username")
//         let email = document.getElementById("email")
//         let userid = firebase.auth().currentUser.uid
//         firebase.database().ref(`users/${userid}`)
//         .once('value',(data)=>{
//             username.innerText = data.val().Username
//             email.innerText = data.val().Email
      
            
//           })     
//     }catch(error){
// console.log(error)
//     }
        
   
    
//     } 
        
//     document.addEventListener('DOMContentLoaded', function() {
//         // your code here
//      }, false);
        




// let logout = ()=>{

// }


// to get data from data base 

    //     firebase.database().ref(`users/${user.uid}`)
        //     .once('value',(data)=>{
        //         let fetcheddata = data.val();
            
        //            for(var key in fetcheddata){
        //                         console.log(key,fetcheddata[key])
                
        //     }
            
                
        // })