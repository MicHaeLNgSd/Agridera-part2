const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');
const capital_btn = document.getElementById('capital_btn');

const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
const capital_result = document.getElementById('capital_result');
const capital_result1 = document.getElementById('capital_result1');
// const capital_result2 = document.getElementById('capital_result2');

cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);
capital_btn.addEventListener('click', getRandomCapital);

function getRandomCat() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
		});
};

function getRandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
};

function getRandomCapital() {
    fetch("https://restcountries.com/v3.1/region/europe")
        .then(resolve => resolve.json())
        .then(data => {
           
            // let count = 1;

            data.forEach(country => {
                let elem = document.createElement("li");
                elem.innerText += `${country.capital[0]}`;
                capital_result1.appendChild(elem);

                // count+=1;
                // if(count % 2 == 0){
                //     capital_result1.appendChild(elem);
                // }
                // else{
                //     capital_result2.appendChild(elem);
                // }
            })
        })
        capital_result.classList.add('capital');
};