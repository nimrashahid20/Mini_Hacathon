import{ auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    signOut,
    signInWithPopup, setDoc ,addDoc,serverTimestamp,collection,db} from './firebase.js'
    

    let signUp=async()=>{
        let email = document.getElementById("email").value;
         let password = document.getElementById("password").value;
         let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
         let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

         
        
    if (emailRegex.test(email) && passwordRegex.test(password)) {
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)  => {
        const user = userCredential.user;
        console.log(user);
        alert("Account created successfully");
      })
    }else{
        alert("invalid email or password")
    }

    
}
let sign_up = document.getElementById("submit_btn")
sign_up.addEventListener("click",signUp)

let userPost = async()=>{
    let user = document.getElementById("title")
    let decsription = document.getElementById("description")
    
    try {
        const docRef = await addDoc(collection(db, "post"), {
         time:serverTimestamp(),
         name: user.value,
         vlaue: decsription.value
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (err) {
        console.log(err);
      }
}
let postbtn = document.getElementById("postbtn")
postbtn.addEventListener("click",userPost)

 let getPost = ()=>{
    const q =query(collection(db, "post"),orderBy("time","desc"),where("status", "==", ""));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let post  = document.getElementById("demo")
      post.innerHTML= ""
      querySnapshot.forEach((doc) => {
      //   cities.push(doc.data());
      console.log(doc.data().time);
      
      post.innerHTML += ` <label for="">Title</label><br>
    <input type="text" name="" id="title"><br>

    <label for="">description</label><br>
    <input type="text" name="" id="description"><br><br>

    <button id="postbtn">Post</button>`
                 
                  
                });
            });
 } 
      ;
      getPost()