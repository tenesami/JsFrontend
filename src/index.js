//grap the h2 and p and append the html  information to the DOM
const renderPost = (p) => {
    const h2 = document.createElement("h2")
    h2.innerText = p.attributes.title
    document.body.appendChild(h2);
    const para = document.createElement("p")
    para.innerText = p.attributes.content;
    document.body.appendChild(para);
}

fetch("http://localhost:3000/posts")
    .then((res) => res.json())
    .then((info) => {
        console.log(info);
        info.data.forEach((p) => {
            renderPost(p)
        });
    });

//connect with the api and convert responce into data 
const createPost = (postInfo) => {
    return fetch("http://localhost:3000/posts", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postInfo),
        })
        //after fetching render post it will call the rederpost function
        .then((res) => res.json())
        .then((data) => {
            renderPost(data)
        });
};

//call back function that graps user input 
const handleForm = (e) => {
    const { title, content } = e.target;
    e.preventDefault();
    //Obtain user input 
    createPost({
        post: {
            title: title.value,
            content: content.value,
            username: username.value,
        },
    }).then(res => res.json()).then(data => {
        renderPost(data)
    });
};
document.querySelector("form").addEventListener("submit", handleForm);