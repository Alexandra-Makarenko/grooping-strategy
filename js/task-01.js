const refs = {
    paramPairs: document.querySelector('.param-pairs'),
    paramArea: document.querySelector('.param-list'),
    generateBtn: document.querySelector('.btn-generate'),
    paramAreaChecks: document.querySelectorAll('.param-list .form-check-input'),
    saveBtn: document.querySelector('.btn-save'),
    notChoosenCheck: document.querySelector('.not-choosen'),
    togetherCheck: document.querySelector('.form-check-input.together'),
    separetlyCheck: document.querySelector('.form-check-input.separetly'),
    paramsSeparetly: document.querySelector('.separetly-params'),
    paramsTogether: document.querySelector('.together-params'),
    paramsDisabledCheck: document.querySelector('.types-check'),
    paramsDisabled: document.querySelector('.input-group-disabled'),
    sellerCheck: document.querySelector('.seller-check input'),
    paramsIunput: document.querySelector('.params-input'),
};
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// if (refs.sellerCheck.checked) {
//   for (let i of refs.paramAreaChecks) {
//     console.log(i)
//         // i.setAttribute('disabled', 'disabled');
//     }
// }
refs.generateBtn.addEventListener('click', onClick);
refs.saveBtn.addEventListener('click', onSave);
refs.paramsDisabledCheck.addEventListener('change', () => {
     refs.paramsDisabled.classList.toggle('visually-hidden')
});

refs.sellerCheck.addEventListener('change', () => {
    refs.sellerCheck.checked ? refs.generateBtn.setAttribute('disabled', 'disabled') : refs.generateBtn.removeAttribute('disabled');
    
  clearArticlesContainer();
  if (refs.sellerCheck.checked) {
    for (let i of refs.paramAreaChecks) {
      i.checked = false;
      i.setAttribute('disabled', 'disabled');
    }
  } else {
    for (let i of refs.paramAreaChecks) {
        i.removeAttribute('disabled');
      }
    
  }
      
   
    
});
refs.togetherCheck.addEventListener('change', () => {
     refs.paramsTogether.classList.remove('visually-hidden')
    refs.paramsSeparetly.classList.add('visually-hidden')

});
refs.separetlyCheck.addEventListener('change', () => {
     refs.paramsSeparetly.classList.remove('visually-hidden')
    refs.paramsTogether.classList.add('visually-hidden')

});

     
function onClick() {
    
    clearArticlesContainer();
     let array=[];
      for (let i of refs.paramAreaChecks) {
        if(i.checked)
            
            array.push(i.nextSibling.textContent)
    }  
      console.log(array);
    const k = array.length;
for (let i = 1; i <= k; i++){
    combinations = combine(array, i)
   combinations.flatMap(c => {
         refs.paramPairs.insertAdjacentHTML('beforeend', `<div class = "d-flex pairs"><div class="form-check m-2">
                <input class="form-check-input pairs" type="checkbox" value="" id="defaultCheck${c}">
                <label class="form-check-label" for="defaultCheck${c}">${c}</label>
              </div><div class="form-floating ms-auto">
  <textarea class="form-control " placeholder="Комментарий" id="floatingTextarea" style="padding:0; height: 25px; width: 200px"></textarea>
  <label for="floatingTextarea"></label>
</div></div>`);
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



function onSave() {
    if (refs.sellerCheck.checked) {
        refs.paramsIunput.textContent = 'Группируем только по продавцу!'
        console.log(refs.paramsIunput)
  }
}
    





    // -----------------------another render------------------------------------

/* <div class = "d-flex pairs"><div class="form-check me-2">
                <input class="form-check-input pairs" type="checkbox" value="" id="defaultCheck${c}">
                <label class="form-check-label" for="defaultCheck${c}">${c}</label>
              </div><div class="form-floating">
  <textarea class="form-control" placeholder="Комментарий" id="floatingTextarea" style="padding:0; height: 25px; width: 200px"></textarea>
  <label for="floatingTextarea"></label>
</div></div> */