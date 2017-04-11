window.onload = function() {

  //makes the calculator draggable
  $('#calculator').draggable();

  //handles the result
  var screen = document.getElementById("result");
  				var elem = document.querySelectorAll("span.button");
  				var result = "";
          var memory = [];
          //testObject.id = id;

  				for(var i=0;i<elem.length;i++){
  					elem[i].addEventListener("click",function(){
  						if(this.innerHTML=='='){
  							result = eval(screen.innerHTML);

  							screen.innerHTML = result;
  						}else if(this.innerHTML == 'C'){
  							result="0";
  							screen.innerHTML = result;

  						}else if(this.innerHTML == 'M+'){

                var string = screen.innerHTML;
                var parsestring = parseInt(string);
                //memory.parseint(screen.innerHTML)
                memory.push(parsestring);
                console.log(memory);

              }
              else if (this.innerHTML == 'M-'){

                memory.pop(screen.innerHTML);
                console.log(memory);
                //for (i=0; i < memory.length; i++){
                //  memory.delete[i];
                //}

              }else if (this.innerHTML == 'MRC'){

                var memorypull = memory.reduce(add, 0);
                console.log(memorypull);





              }else{
  							result += this.innerHTML
  							screen.innerHTML = result;

  						}
  					});

      function add(a, b) {
          return a + b;
      }

  				}

          //window.onload = addListeners;

          function addListeners(){
              document.getElementById('key').addEventListener('mousedown', mouseDown, false);
              window.addEventListener('mouseup', mouseUp, false);

          }

          function mouseUp()
          {
              window.removeEventListener('mousemove', divMove, true);
          }

          function mouseDown(e){
            window.addEventListener('mousemove', divMove, true);
          }

          function divMove(e){
              var div = document.getElementById('key');
                  //div.style.position = 'absolute';
                  //div.style.top = e.clientY + 'px';
                  //div.style.left = e.clientX + 'px';
          }







};
