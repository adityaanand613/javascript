let data = document.querySelector('.input-field');
let addBtn = document.querySelector('.add-buttons');
let notesDiv = document.querySelector('.sticky-notes');
let color = document.querySelector('.input-color'); 
let configBtns = document.querySelectorAll('.config-buttons');  
let delBtn = '';

let text_styles = [];
configBtns.forEach(btns => {
    btns.addEventListener('click', (e) => {
        let style = '';

        if (e.target.classList.contains('Bold')) {
            data.classList.toggle('bold');
            e.target.classList.toggle('bold');
            e.target.classList.toggle('active');
            style = 'bold';
            
        }
        if (e.target.classList.contains('Underline')) {
            data.classList.toggle('underline');
            e.target.classList.toggle('bold');
            e.target.classList.toggle('active');
            style = 'underline';
        }
        if (e.target.classList.contains('Italic')) {
            data.classList.toggle('italic');
            e.target.classList.toggle('bold');
            e.target.classList.toggle('active');
            style = 'italic';
        }

        if (e.target.classList.contains('active')) {
            text_styles.push(style);
        } else {
            text_styles = text_styles.filter(item => item !== style);
        }
    });
});


function addNote(){
    
    if(data.value === '')
    {
        alert('Please write some text to add!!');
    }
    else{
        let noteDiv = document.createElement('div');
        noteDiv.className = 'note';

        console.log(noteDiv);
        
        noteDiv.style.backgroundColor = color.value;
        let shadowColor = invertColor(color.value);
        noteDiv.style.boxShadow = `0px 6px 12px ${shadowColor}`;
        noteDiv.innerHTML = `<button class="del-btn"> X </button>`;
        let p = document.createElement('p');
        p.textContent = data.value;
        noteDiv.appendChild(p);

        text_styles.forEach(style => {
            switch (style) {
                case 'bold':
                    p.style.fontWeight = 'bold';
                    break;
                case 'underline':
                    p.style.textDecoration = 'underline';
                    break;
                case 'italic':
                    p.style.fontStyle = 'italic';
                    break;
            }
        });
        
 
        notesDiv.appendChild(noteDiv);
        data.value = '';
    }
}
addBtn.addEventListener('click', () =>addNote());

notesDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('del-btn')) {
        let noteDiv = e.target.closest('.note');
        if (noteDiv) {
            noteDiv.remove();
        }
    }
});

function invertColor(hex = "#fffff") {
    hex= hex.replace('#', '');

    let r = parseInt(hex.substring(0, 2), 16); 
    let g = parseInt(hex.substring(2, 4), 16); 
    let b = parseInt(hex.substring(4, 6), 16); 
   
    r = (255 - r).toString(16).padStart(2, '0');
    g = (255 - g).toString(16).padStart(2, '0');    
    b = (255 - b).toString(16).padStart(2, '0');

    return `#${r}${g}${b}`.toUpperCase();
}