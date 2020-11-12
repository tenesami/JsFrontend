fetch("http://localhost:3000/posts")
    .then((res) => res.json())
    .then((data) => {
        //console.log(data);
        data.forEach((p) => {
            const h2 = document.createElement("h2")
            h2.innerText = p.title
            document.body.appendChild(h2);
            const para = document.createElement("p")
            para.innerText = p.content;
            document.body.appendChild(para);
        });
    });
const createPost = (postInfo) => {
    return fetch("http://localhost:3000/posts", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postInfo),
    })
};


const handleForm = (e) => {
    const { title, content } = e.target;
    e.preventDefault();
    //
    createPost({
        post: {
            title: title.value,
            content: content.value,
            username: username.value,
        },
    });
};