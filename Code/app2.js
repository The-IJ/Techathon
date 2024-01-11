fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCaeQiOlLDAl76NmWWFUlHbg&maxResults=10&order=date&key=AIzaSyAAO7l4NdP91iYEpx-fuCDZvaWZR8EIOrc")
    .then((result) => {
        return result.json()
    }).then((data) => {
        console.log(data)
        let videos = data.items
        // nextPageToken = data.nextPageToken
        let videoContainer = document.querySelector(".youtube-container")
        for (video of videos) {
            videoContainer.innerHTML += `
            <h3>${video.snippet.title}</h3>
            <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">
            <img src="${video.snippet.thumbnails.default.url}">
            `
        }
    })
