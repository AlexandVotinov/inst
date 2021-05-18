function checkLogin(){
    if(!sessionStorage.getItem('token') && window.location.hash !== '#registration'){
        window.location.hash = 'login'
    }
    
}

export { checkLogin }