
let idList = []

document.querySelectorAll('#wc-endpoint').forEach(v=>{
    let id = v.href.split('?v=')[1].split('&list')[0]
    idList.push(id);
})

let set = new Set(idList)
idList = [...set]

let baseURL = 'https://www.youtube.com/watch_videos?video_ids='
let playListURL = baseURL.concat(idList.join(','))
console.log(idList)

window.navigator.clipboard.writeText(playListURL).then(()=>{
    alert('done');
})

console.log(playListURL)