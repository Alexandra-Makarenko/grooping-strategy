const refs = {
    paramPairs: document.querySelector('.param-pairs'),
    paramArea: document.querySelector('.param-box'),
  generateBtn: document.querySelector('.btn-generate'),
};

refs.generateBtn.addEventListener('click', onClick);
let params = refs.paramArea.textContent;
    console.log(params)

function onClick(e) {
    e.preventDefault();
    // fetchArticles()
    


    const array = [...params]
    const k = array.length;
for (let i = 1; i < k; i++){
    combinations = combine(array, i)
   combinations.flatMap(c => {
         refs.paramPairs.insertAdjacentHTML('beforeend', `<div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck${c}">
                <label class="form-check-label" for="defaultCheck${c}">
                  ${c}
                </label>
              </div>`); ;
    }).join("");
    
    console.log(combinations);
    
        
}
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



