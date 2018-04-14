

  var buttons = document.querySelectorAll('button');
  console.log(buttons);
  
  var butArray = Array.from(buttons);
  console.log(butArray);

  var divs = document.querySelectorAll('div > div');
    console.log(divs);

    var divArray = Array.from(divs);
    console.log(divArray);
    
    butArray[0].onclick = function(){
    divArray[0].classList.add('active');
    }
    butArray[1].onclick = function(){
      divArray[1].classList.add('active');
    }
    butArray[2].onclick = function(){
    divArray[2].classList.add('active');
    }

    var hideAllTabs = function (){
      for(var i = 0 ; i < butArray.length ; i++){
        divArray[i].classList.remove('active');
      }
    }

  
  /*

    Задание 1.

    Написать скрипт который будет будет переключать вкладки по нажатию
    на кнопки в хедере.

    Главное условие - изменять файл HTML нельзя.

    Алгоритм:
      1. Выбрать каждую кнопку в шапке
         + бонус выбрать одним селектором

      2. Повесить кнопку онклик
          button1.onclick = function(event) {

          }
          + бонус: один обработчик на все три кнопки

      3. Написать функцию которая выбирает соответствующую вкладку
         и добавляет к ней класс active

      4. Написать функцию hideAllTabs которая прячет все вкладки.
         Удаляя класс active со всех вкладок

    Методы для работы:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick

      element.onclick = function(event) {
        // do stuff ...
      }

  */
      