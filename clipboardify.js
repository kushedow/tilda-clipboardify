<script>

/**
 *  Реализует копированние текста в буфер для элемента item,
 */
function copyToClipboard(item) {
    
  // Поскольку прямого апи дя копирования нет,
  // мы сперва создадим инпут, 
  // затем выделим текст
  // затем вызовем команду "копировать"
    
  content = item.innerHTML // Получаем контент
  var aux = document.createElement("input"); // Создаем и

  aux.setAttribute("value", content);
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
    
    items = document.querySelectorAll("#rec373642408 .tn-atom");
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
