//Fetch APIs

const apiKey = '8LuWqyKMD9prMGvcO7S45eO8tdkfsAB3';

const petition = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

petition
    .then(resp => { return resp.json() })// A chained promise means that the response of the last promise will be past to te next then when it's been called
    .then(({ data }) => {
        const { url } = data.images.original;

        console.log(url);

        //if we want to display it inside the html we must create an element and show apend it
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);


    })// whe only want what inside of resp.data so we can spread it's contents an recive only data 
    .catch(console.warn);
