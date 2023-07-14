//Async/await

export const getImage = async() => {
    try {
        const apiKey = '8LuWqyKMD9prMGvcO7S45eO8tdkfsAB3';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`); //await makes the petition into a response type, this means that the code will await until this promise is finished to execute the net line of code

        const { data } = await resp.json();
        const { url } = data.images.original;

        return url;

    } catch (error) {
        console.warn(error)
        return 'Img not found';
    }

};
