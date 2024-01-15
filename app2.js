// const videoSection=document.querySelector('section')
// fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUaeQiOlLDAl76NmWWFUlHbg&key=AIzaSyAAO7l4NdP91iYEpx-fuCDZvaWZR8EIOrc")
//     .then((res) => res.json())
//         .then((data) => {
//             data.items.forEach((el) => {
//                 videoSection.innerHTML += `<a target="_blank" href="https://www.youtube.com/watch?v=${el.snippet.resourceId.videoId}" />
//             <img src="${el.snippet.thumbnails.maxres.url}" />
//             <h3>${el.snippet.title}</h3>
//             </a>`;
//             });
//         }).catch(err => {
//             console.log(err);
//             videoSection.innerHTML = `<h3>Sorry something went wrong.</h3>`
//         });
// let nextPageToken = ""
// fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCaeQiOlLDAl76NmWWFUlHbg&maxResults=10&order=date&key=AIzaSyAAO7l4NdP91iYEpx-fuCDZvaWZR8EIOrc")
// //fetch("https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CContentDetails&channelId=UCaeQiOlLDAl76NmWWFUlHbg&maxResults=10&key=AIzaSyAAO7l4NdP91iYEpx-fuCDZvaWZR8EIOrc")
//     .then((result) => {
//         return result.json()
//     }).then((data) => {
//         console.log(data)
//         let videos = data.items
//         // nextPageToken = data.nextPageToken
//         let videoContainer = document.querySelector(".youtube-container")
//         for (video of videos) {
//             videoContainer.innerHTML += `
//             <h3>${video.snippet.title}</h3>
//             <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">
//             <img src="${video.snippet.thumbnails.default.url}">
//             `
//         }
//     })
// window.onload = function() {
//     getVideos();
// };
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Get the search query from the input field
        const searchQuery = document.querySelector("input[name='search']").value;

        // Construct the URL with the search query
        const apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&maxResults=10&order=date&key=AIzaSyAAO7l4NdP91iYEpx-fuCDZvaWZR8EIOrc`;

        // Fetch videos based on the search query
        fetch(apiUrl)
            .then((result) => result.json())
            .then((data) => {
                console.log(data);
                let videos = data.items.slice(0,10);
                let videoContainer = document.querySelector(".youtube-container");

                // Clear existing content
                videoContainer.innerHTML = "";

                for (video of videos) {
                    videoContainer.innerHTML += `
                        <h3>${video.snippet.title}</h3>
                        <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">
                            <img src="${video.snippet.thumbnails.default.url}">
                        </a>`;
                }
            })
            .catch((error) => {
                console.error("Error fetching YouTube data:", error);
            });
    });
});


    