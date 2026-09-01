import http from 'http';
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('hello world');

}).listen(8080);

function getUser(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({id:userId,name:'John Doe'});
        },1000);
    });
}

function getUserPosts(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(['post 1', 'post 2', 'post 3']);
        },1000);
    });
}

getUser(123)
    .then(user=>{
        console.log('User:', user);
        return getUserPosts(user);
    })
    .then(post=>{
        console.log('Posts:', post);

    })
    .catch(err=>{console.error('Error',err)});

