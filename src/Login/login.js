const login = () => {
    const userEmail = document.getElementById("exampleInputEmail1").value;
    const userPassword = document.getElementById("exampleInputPassword1").value;

    fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: userEmail,
                password: userPassword
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

    console.log(` ${userEmail} --- ${userPassword}`);
}

  