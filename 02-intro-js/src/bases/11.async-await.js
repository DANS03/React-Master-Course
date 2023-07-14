//Async/await

const getImagen = async () => {
    const apiKey = '8LuWqyKMD9prMGvcO7S45eO8tdkfsAB3';

    try {
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`); //awiat makes the petition into a response type, this means that the code will await until this promise is finished to execute the net line of code

        const { data } = await resp.json();

        console.log(data);

        const { url } = data.images.original;

        console.log(url);

        //if we want to display it inside the html we must create an element and show apend it
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    } catch (error) {
        console.warn(error)
    }



};

getImagen();