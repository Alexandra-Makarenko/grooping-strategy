const refs = {
    paramPairs: document.querySelector('.param-pairs'),
    paramArea: document.querySelector('.param-list'),
    generateBtn: document.querySelector('.btn-generate'),
    paramAreaChecks: document.querySelectorAll('.param-area .form-check-input')
};



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
         refs.paramPairs.insertAdjacentHTML('beforeend', `<div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck${c}">
                <label class="form-check-label" for="defaultCheck${c}">
                  ${c}
                </label>
              </div><div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
</div>`); ;
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



