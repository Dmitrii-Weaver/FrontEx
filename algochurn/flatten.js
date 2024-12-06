import './style.css';
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<div class="container"><h1>Flatten Object Solution</h1><span>Algochurn</span>
<p>Open the console to view results</p></div>`;

const response = {
    name: 'Manu',
    age: 21,
    characteristics: {
        height: '6 feet',
        complexion: 'dark',
        hair: 'black',
    },
    techStack: {
        language: 'Javascript',
        framework: {
            name: 'Nextjs',
            version: '12',
        },
    },
};

const flattenObj = (obj) => {
    let result = {};
    for (const i in obj) {
        if (typeof obj[i] === 'object' && !Array.isArray(obj[i])) {
            const temp = flattenObj(obj[i]);
            for (const j in temp) {
                result[i + '.' + j] = temp[j];
            }
        } else {
            result[i] = obj[i];
        }
    }
    return result;
};

console.log(flattenObj(response));
