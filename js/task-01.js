const refs = {
    paramPairs: document.querySelector('.param-pairs'),
    paramArea: document.querySelector('.param-list'),
    generateBtn: document.querySelector('.btn-generate'),
    paramAreaChecks: document.querySelectorAll('.param-area .form-check-input'),
    paramPairsChecks: document.querySelectorAll('.param-pairs .pairs'),
    saveBtn: document.querySelector('.btn-save'),
};

    console.log(refs.paramPairsChecks);

refs.generateBtn.addEventListener('click', onClick);

function onClick(e) {
    e.preventDefault();
    clearArticlesContainer()
     let array=[];
      for (let i of refs.paramAreaChecks) {
        if(i.checked)
            
         array.push(i.nextElementSibling.textContent)
    }  
      console.log(array);
    const k = array.length;
for (let i = 1; i <= k; i++){
    combinations = combine(array, i)
   combinations.flatMap(c => {
         refs.paramPairs.insertAdjacentHTML('beforeend', `<div class = "d-flex pairs"><div class="form-check me-2">
                <input class="form-check-input pairs" type="checkbox" value="" id="defaultCheck${c}">
                <label class="form-check-label" for="defaultCheck${c}">${c}</label>
              </div><div class="form-floating">
  <textarea class="form-control" placeholder="Комментарий" id="floatingTextarea" style="padding:0; height: 25px; width: 200px"></textarea>
  <label for="floatingTextarea"></label>
</div></div>`); ;
    }).join("");
    
    console.log(combinations);
    }      

           }


function clearArticlesContainer() {
  refs.paramPairs.innerHTML = '';
}


const combine = (arr, k, withRepetition = false) => {
  const combinations = []
  const combination = Array(k)
  const internalCombine = (start, depth) => {
    if (depth === k) {
      combinations.push([...combination])
      return
    }
    for (let index = start; index < arr.length; ++index) {
      combination[depth] = arr[index]
      internalCombine(index + (withRepetition ? 0 : 1), depth + 1)
    }
  }
  internalCombine(0, 0)
  return combinations;
}
let combinations = [];


refs.saveBtn.addEventListener('click', onSaveClick);

function onSaveClick(e) {
    e.preventDefault();
  

    }

