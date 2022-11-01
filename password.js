function getSecred(file,secredPassword){
    file.opened = file.opened +1;
    if(secretPassword == file.password){
        return file.contents;
    }else{
        return "Invalid password";
    }
}

function setSecred (file, secretPassword, secret){
    if(secredPassword == file.password){
        file.opened = 0;
        file.contents = secret;
    }
}

let superSecredFile = {
    level: "classified",
    opened: 0,
    password: 2,
    contents: "Dr. Evel's next meeteng is in Detroit."
};

let secret= getSecret(superSecredFile,2);
console.log(secret);

setSecred(superSecredFile,2, "Dr, Evel's next meeteng is in Philadelphia");
secret = getSecred(superSecredFile,2);
console.log(secret);