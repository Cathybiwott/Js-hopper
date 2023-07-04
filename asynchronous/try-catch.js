let success = true;
const performTask = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{success? resolve():reject()},2000)
    })
}

const successfull = async()=>{
    try{
        await performTask()
        console.log('Task successfull');
    }    catch{
        console.log('Task failed');

    }
}