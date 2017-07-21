let login = (user, password) => {
    if (user !== 'admin' || password !== 'radical') {
        console.log('incorrect login');
    }
};

login('admin', 'asdasd');