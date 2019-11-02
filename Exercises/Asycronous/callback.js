const posts = [
    {title: "Post One", body: "This is post one"},
    {title: "Post Two", body: "This is post two"},

]

//Mimic behavior of a server
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post,i) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, timeout);
}

function createPost(post){
    setInterval(() => {
        posts.push(post);
    }, 2000);
}

getPosts();
createPost({title: "Post Three", body: "This is post three"});