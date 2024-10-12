let input = document.querySelector("input");
let btn = document.querySelector(".btn");
let theResult = document.querySelector(".result");

btn.addEventListener("click", function () {
    getRepos(input.value);
})

function getRepos(username) {
    if (input.value == "" || input.value.trim() == "") {
        theResult.innerHTML = `<span>Please enter the user name</span>`;
    }
    else {
        fetch(`https://api.github.com/users/${username}/repos`)
            .then(result => result.json())
            .then(result => {

                // console.log(result[2].html_url);

                theResult.innerHTML = "";
                for (let i = 0; i < result.length; i++) {
                    // console.log(result[i].name);
                    let innerDiv = document.createElement("div");
                    innerDiv.className = "inner";
                    innerDiv.innerHTML = result[i].name;
                    // theResult.append(innerDiv);

                    // create the link of the repo
                    let a = document.createElement("a");
                    a.innerHTML = "Visit";
                    a.href = `${result[i].html_url}`
                    a.setAttribute("target", "_blank");
                    // theResult.append(a);

                    // let outterDiv = document.createElement("div");
                    // outterDiv.className = "outer";
                    // outterDiv.append(innerDiv,a);
                    // theResult.append(outterDiv);
                    innerDiv.append(a);
                    theResult.append(innerDiv);

                }
            })
    }
}


