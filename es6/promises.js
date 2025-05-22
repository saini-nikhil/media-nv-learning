const  myPRomise = new Promise((resolve, reject) => {
    const x = 10;
    const y = 20;
    if (x + y > 20) {
        resolve("Success");
    } else {
        reject("Failed");
    }
}
)


console.log(myPRomise) 


function fectchdata(){
    return new Promise((res , rej) => {
        setTimeout(()=>{
            let success = false;
            if (success){
                res("Data fetched successfully")
             } else{
                    rej("Failed to fetch data")
                }

        })
    })
}

fectchdata().then(res => console.log(res))
.catch(err => console.log(err))