// axios.get('https://swapi.dev/api/people/1')
// .then((res) => {
//     console.log(res);
// })
// .catch((e)=>{
//     console.log("Error",e)
// });

const getStartWarsPerson = async (id) => {
    try{
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
    } catch(e){
        console.log("Error",e);
    }
};

// getStartWarsPerson(2);

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke= async () => {
    const JokeText = await getDadJoke();
}
const getDadJoke = async () => {
    try{
        const config = {headers: {Accept:'application/json'}}
        const res = await axios.get("https://icanhazdadjoke.com/",config);
        const newLI = document.createElement("LI");
        newLI.append(res.data.joke);
        jokes.append(newLI);
    } catch(e){
        console.log("Error",e);
    }
};
button.addEventListener('click',addNewJoke);