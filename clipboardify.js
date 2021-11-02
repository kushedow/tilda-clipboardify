<script>

/**
 *  Реализует копированние текста в буфер для элемента item,
 */
function copyToClipboard(item) {
    
  // Поскольку прямого апи дя копирования нет, мы сперва создадим текстареа, 
  // затем выделим текст, затем вызовем команду "копировать"
    
  content = item.innerText
  content = content.replaceAll("➡", "    ") // Получаем контент

  var aux = document.createElement("TEXTAREA"); // Создаем и
  aux.value = content
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  
  alert ("Скопировано в буфер обмена: " + content)
}

/**
 *  Реализует копируемость для элементов подходящих под селектор
 */

function clipboardify(selector) {
    
    items = document.querySelectorAll(selector);
    items.forEach(function(item) {
        item.addEventListener('click', function(e){
          copyToClipboard(this)
        });
    });
    
}


// Начинаем вешать обработчики тогда, когда контент загружен
    
document.addEventListener("DOMContentLoaded", () => {
    // селектор всех блоков, которые хотим разрешить копировать
    clipboardify("#rec373642408 .tn-atom") 
})


</script>
