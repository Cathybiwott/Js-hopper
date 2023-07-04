
function greet(){
    console.log("Welcome to our site");

};
greet();

let data = [{}];

let createUser = new Promise((resolve, reject)=>{
    if(data){
        setTimeout(()=>{resolve('User successfully created')},5000);
        
    }
    else{
        setTimeout(()=>{reject('User already exists');},5000)
        
    }
});

async function createUserAccount(){
    let response =  await createUser;
    console.log({response});
}

createUserAccount();

