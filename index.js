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