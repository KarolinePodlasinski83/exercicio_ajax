document.addEventListener("DOMContentLoaded", () => {

    const avatar = document.getElementById("avatar");
    const name = document.getElementById("name");
    const username = document.getElementById("username");
    const repos = document.getElementById("repos");
    const followers = document.getElementById("followers");
    const following = document.getElementById("following");
    const link = document.getElementById("link");

    const endpoint = "https://api.github.com/users/KarolinePodlasinski83";

    fetch(endpoint)
        .then(response => response.json())
        .then(data => {

            avatar.src = data.avatar_url;

            // se name for null usa login
            name.innerText = data.name ? data.name : data.login;

            username.innerText = "@" + data.login;

            repos.innerText = data.public_repos;
            followers.innerText = data.followers;
            following.innerText = data.following;

            link.href = data.html_url;

        })
        .catch(() => {
            name.innerText = "Erro ao carregar perfil";
        });

});