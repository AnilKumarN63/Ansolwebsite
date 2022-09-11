const inputfields = document.querySelector('.input-fields')
const output = document.querySelector('.output')

let inputShow = true


async function TextEditor(element){
  const newEditor =  await ClassicEditor
  .create(element,{
    toolbar: [ 'heading', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote' ],
  } )
  return newEditor
 
}

let workExpdetails;
TextEditor(inputfields["workexp"]).then(nEditor=>{
  workExpdetails = nEditor
})
let education;
TextEditor(inputfields["education"]).then(nEditor=>{
  education = nEditor
})
let projects;
TextEditor(inputfields["projects"]).then(nEditor=>{
  projects = nEditor
})
let Intrenships;
TextEditor(inputfields["intrenship"]).then(nEditor=>{
  intrenship = nEditor
})
let aboutme;
TextEditor(inputfields["aboutme"]).then(nEditor=>{
  aboutme = nEditor
})
let hobbies;
TextEditor(inputfields["hobbies"]).then(nEditor=>{
   hobbies= nEditor
})
let others;
TextEditor(inputfields["others"]).then(nEditor=>{
  others = nEditor
})




function toggle(){
    if(inputShow){
         inputfields.style.display = "none"
         inputShow = false 
         output.innerHTML=`
           <div class="hero">
            <h1>${inputfields["name"].value}</h1>
            <h3>${inputfields["email"].value}</h3>
            
           </div>
           <div class="main">
               <div>
                 <h2>ABOUT ME</h2>
                 ${aboutme.getData()}
                 <h2>EDUCATION</h2>
                 ${education.getData()}
                 <h2>OBJECTIVE</h2>
                 <p>${inputfields["objective"].value}</p>
                 <h2>SKILLS</h2>
                 <p>${inputfields["skills"].value}</p>
                 <h2>ACHIEVEMENTS</h2>
                 <p>${inputfields["achievements"].value}</p>
                 <h2>CONTACT</h2>
                 <p>${inputfields["contact"].value}</p>
                 <h2>CERTIFICATES</h2>
                 <p>${inputfields["certificates"].value}</p>
                 <h2>LANGUAGES</h2>
                 <p>${inputfields["languages"].value}</p>
               </div>
               <div>
                <h2>WORK EXPERIENCE</h2>
                ${workExpdetails.getData()}
                
                 <h2>PROJECT DETAILS</h2>
                ${projects.getData()}
                <h2>INTRENSHIP DETAILS</h2>
                ${intrenship.getData()}
                <h2>HOBBIES</h2>
                ${hobbies.getData()}
                <h2>OTHER/PERSONAL DETAILS</h2>
                ${others.getData()}
                
                
               </div>
           </div>
           <div class="btn">
              <button onclick="print()">Print Resume</button>
        </div>
         `
    }else{
        inputfields.style.display =  "block"
        inputShow = true
        output.innerHTML=""
    }
}