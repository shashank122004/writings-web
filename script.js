//theme switching modes
let thmbtn=document.getElementById("theme");
thmbtn.addEventListener("click",()=>
{
   document.body.classList.toggle("change");
});
//quote panel
let quotes=[
    "Words are, in my not-so-humble opinion, our most inexhaustible source of magic.— J.K. Rowling",
    "Fill your paper with the breathings of your heart. — William Wordsworth",
    "The role of a writer is not to say what we all can say, but what we are unable to say.— Anaïs Nin",
    "A writer is someone for whom writing is more difficult than it is for other people. — Thomas Mann",
    "Writing is the painting of the voice. — Voltaire",
    "You don’t write because you want to say something, you write because you have something to say. — F. Scott Fitzgerald"
];

let quoteElement = document.getElementById("quote");
let index = 0;
function change_text() {
    quoteElement.innerText = quotes[index];
    index = (index + 1) % quotes.length;
    setTimeout(change_text, 4000);
}
change_text();

//panel click event extraction of poem name on clicked;
let p=document.getElementById('panel');
p.addEventListener("click",(event)=>{
    let poem_name=event.target.textContent;
    console.log(poem_name);
    display_poem(poem_name.toLowerCase());
    //toggle background fades to black;
    let x=document.getElementById('overlay');
    x.classList.toggle('dark');
    //toggle poem box
    let y=document.getElementById('poemBox');
    y.classList.toggle('wake');
})

//panel2 click event extraction of poem name on clicked;
let t=document.getElementById('panel2');
t.addEventListener("click",(event)=>{
    let poem_name=event.target.textContent;
    display_poem(poem_name.toLowerCase());
    //toggle background fades to black;
    let x=document.getElementById('overlay');
    x.classList.toggle('dark');
    //toggle poem box
    let y=document.getElementById('poemBox');
    y.classList.toggle('wake');
})


// making a function that accept call from mouse event click and then 
// fetch the poem from data base by name given from event as parameter;

function display_poem(name)
{
    async function loadcontent()
    {
        let response=await fetch(`contents/${name}`);
        const data = await response.text();
        console.log(data);

        // now from here we will get the poembox access and display poem there
        let add=document.getElementById("poemContent")
        typeWriter(add, data, 25);
        //add.innerText=data;
    }
    loadcontent();
}
// function for tywritter effect
function typeWriter(element, text, delay = 30) {
    element.innerText = ''; // Clear previous content
    let i = 0;
    function typing() {
        if (i < text.length) {
            const char = text.charAt(i);
            if (char === ' ') {
                element.innerHTML += '&nbsp;';
            } else if (char === '\n') {
                element.innerHTML += '<br>';
            } else {
                element.innerHTML += char;
            }
            i++;
            setTimeout(typing, delay);
        }
    }
    typing();
}

let c=document.getElementById("closeBtn")
c.addEventListener("click",()=>{
    let x=document.getElementById('overlay');
    x.classList.toggle('overlay');
    //toggle poem box
    let y=document.getElementById('poemBox');
    y.classList.toggle('poemBox');
    let z=document.getElementById('poemContent');
    z.classList.toggle('erase');
    c.classList.toggle('close');
    location.reload(); //refresh after every exection
})