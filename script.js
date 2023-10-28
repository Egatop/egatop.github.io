function run(){
    let i = 0
    let answer = document.querySelector('h3');
    answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>С какого праздника начинается история хэллоуина?</h2>"
    let test = document.querySelector('.go');
    test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Манжой'><input type='button' class='btn2' value='Самайн'></div>"

    function run2() {
        i ++
        let answer = document.querySelector('h3');
        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>В каком веке в США стал популярным хэллоуин?</h2>"
        let test = document.querySelector('.go');
        test.innerHTML = "<div class='answer'><input type='button' class='btn' value='XIX веке'><input type='button' class='btn2' value='XXI веке'></div>"
        function run3() {
            i++
            let answer = document.querySelector('h3');
            answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Кем был создан образ графа Дракулы?</h2>"
            let test = document.querySelector('.go');
            test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Брэмомом Стокером'><input type='button' class='btn2' value='Джоном Хевином'></div>"
            function run5() {
                i++
                let answer = document.querySelector('h3');
                answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Кого из людей считали Графом Дракулой?</h2>"
                let test = document.querySelector('.go');
                test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Влад Цепеш'><input type='button' class='btn2' value='Илона Силадьи'></div>"
            
                function run7(){
                    i++
                    let answer = document.querySelector('h3');
                    answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Главный символ хеллоуина?</h2>"
                    let test = document.querySelector('.go');
                    test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Тыква'><input type='button' class='btn2' value='Сладости'></div>"
                    function run9(){
                        console.log(i)
                        i++
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                        
                    }
                    function run10(){
                      
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                    }
                    let button = document.querySelector('.btn');
                    button.addEventListener('click', run9);
                    let button2 = document.querySelector('.btn2');
                    button2.addEventListener('click', run10);
                }
                function run8(){
                    let answer = document.querySelector('h3');
                    answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Главный символ хеллоуина?</h2>"
                    let test = document.querySelector('.go');
                    test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Тыква'><input type='button' class='btn2' value='Сладости'></div>"
                    function run9(){
                        console.log(i)
                        i++
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'></div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                        
                    }
                    function run10(){
                      
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                    }
                    let button = document.querySelector('.btn');
                    button.addEventListener('click', run9);
                    let button2 = document.querySelector('.btn2');
                    button2.addEventListener('click', run10);
                }
                let button = document.querySelector('.btn');
                button.addEventListener('click', run7);
                let button2 = document.querySelector('.btn2');
                button2.addEventListener('click', run8);
            }
            function run6() {
              
                let answer = document.querySelector('h3');
                answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Кого из людей считали Графом Дракулой?</h2>"
                let test = document.querySelector('.go');
                test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Влад Цепеш'><input type='button' class='btn2' value='Илона Силадьи'></div>"
                function run7(){
                    i++
                    let answer = document.querySelector('h3');
                    answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Главный символ хеллоуина?</h2>"
                    let test = document.querySelector('.go');
                    test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Тыква'><input type='button' class='btn2' value='Сладости'></div>"
                    function run9(){
                        console.log(i)
                        i++
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                        
                    }
                    function run10(){
                      
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                    }
                    let button = document.querySelector('.btn');
                    button.addEventListener('click', run9);
                    let button2 = document.querySelector('.btn2');
                    button2.addEventListener('click', run10);
                }
                function run8(){
                    let answer = document.querySelector('h3');
                    answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Главный символ хеллоуина?</h2>"
                    let test = document.querySelector('.go');
                    test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Тыква'><input type='button' class='btn2' value='Сладости'></div>"
                    function run9(){
                        console.log(i)
                        i++
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                        
                    }
                    function run10(){
                      
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                    }
                    let button = document.querySelector('.btn');
                    button.addEventListener('click', run9);
                    let button2 = document.querySelector('.btn2');
                    button2.addEventListener('click', run10);
                }
                let button = document.querySelector('.btn');
                button.addEventListener('click', run7);
                let button2 = document.querySelector('.btn2');
                button2.addEventListener('click', run8);
            }
            let button = document.querySelector('.btn');
            button.addEventListener('click', run5);
            let button2 = document.querySelector('.btn2');
            button2.addEventListener('click', run6);
        
        }
        function run4() {
        
            let answer = document.querySelector('h3');
            answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Кем был создан образ графа Дракулы?</h2>"
            let test = document.querySelector('.go');
            test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Брэмомом Стокером'><input type='button' class='btn2' value='Джоном Хевином'></div>"

            function run5() {
                i++
                let answer = document.querySelector('h3');
                answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Кого из людей считали Графом Дракулой?</h2>"
                let test = document.querySelector('.go');
                test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Влад Цепеш'><input type='button' class='btn2' value='Илона Силадьи'></div>"
                function run7(){
                    i++
                    let answer = document.querySelector('h3');
                    answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Главный символ хеллоуина?</h2>"
                    let test = document.querySelector('.go');
                    test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Тыква'><input type='button' class='btn2' value='Сладости'></div>"
                    function run9(){
                        console.log(i)
                        i++
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                        
                    }
                    function run10(){
                      
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                    }
                    let button = document.querySelector('.btn');
                    button.addEventListener('click', run9);
                    let button2 = document.querySelector('.btn2');
                    button2.addEventListener('click', run10);
                }
                function run8(){
                    let answer = document.querySelector('h3');
                    answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Главный символ хеллоуина?</h2>"
                    let test = document.querySelector('.go');
                    test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Тыква'><input type='button' class='btn2' value='Сладости'></div>"
                    function run9(){
                        console.log(i)
                        i++
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                        
                    }
                    function run10(){
                      
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                    }
                    let button = document.querySelector('.btn');
                    button.addEventListener('click', run9);
                    let button2 = document.querySelector('.btn2');
                    button2.addEventListener('click', run10);
                }
                let button = document.querySelector('.btn');
                button.addEventListener('click', run7);
                let button2 = document.querySelector('.btn2');
                button2.addEventListener('click', run8);
            }
            function run6() {
    
                let answer = document.querySelector('h3');
                answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Кого из людей считали Графом Дракулой?</h2>"
                let test = document.querySelector('.go');
                test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Влад Цепеш'><input type='button' class='btn2' value='Илона Силадьи'></div>"
                function run7(){
                    i++
                    let answer = document.querySelector('h3');
                    answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Главный символ хеллоуина?</h2>"
                    let test = document.querySelector('.go');
                    test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Тыква'><input type='button' class='btn2' value='Сладости'></div>"
                    function run9(){
                        console.log(i)
                        i++
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                        
                    }
                    function run10(){
                      
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                    }
                    let button = document.querySelector('.btn');
                    button.addEventListener('click', run9);
                    let button2 = document.querySelector('.btn2');
                    button2.addEventListener('click', run10);
                }
                function run8(){
                    let answer = document.querySelector('h3');
                    answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Главный символ хеллоуина?</h2>"
                    let test = document.querySelector('.go');
                    test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Тыква'><input type='button' class='btn2' value='Сладости'></div>"
                    function run9(){
                        console.log(i)
                        i++
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                        
                    }
                    function run10(){
                      
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                    }
                    let button = document.querySelector('.btn');
                    button.addEventListener('click', run9);
                    let button2 = document.querySelector('.btn2');
                    button2.addEventListener('click', run10);
                }
                let button = document.querySelector('.btn');
                button.addEventListener('click', run7);
                let button2 = document.querySelector('.btn2');
                button2.addEventListener('click', run8);
            }
            let button = document.querySelector('.btn');
            button.addEventListener('click', run5);
            let button2 = document.querySelector('.btn2');
            button2.addEventListener('click', run6);
        }
        let button = document.querySelector('.btn');
        button.addEventListener('click', run3);
        let button2 = document.querySelector('.btn2');
        button2.addEventListener('click', run4);
    }
    function run1() {
        let answer = document.querySelector('h3');
        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>В каком веке в США стал популярным хэллоуин?</h2>"
        let test = document.querySelector('.go');
        test.innerHTML = "<div class='answer'><input type='button' class='btn' value='XIX веке'><input type='button' class='btn2' value='XXI веке'></div>"
        function run3() {
            i++
            let answer = document.querySelector('h3');
            answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Кем был создан образ графа Дракулы?</h2>"
            let test = document.querySelector('.go'); 
            test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Брэмомом Стокером'><input type='button' class='btn2' value='Джоном Хевином'></div>"
            function run5() {
                i++
                let answer = document.querySelector('h3');
                answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Кого из людей считали Графом Дракулой?</h2>"
                let test = document.querySelector('.go');
                test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Влад Цепеш'><input type='button' class='btn2' value='Илона Силадьи'></div>"
                function run7(){
                    i++
                    let answer = document.querySelector('h3');
                    answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Главный символ хеллоуина?</h2>"
                    let test = document.querySelector('.go');
                    test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Тыква'><input type='button' class='btn2' value='Сладости'></div>"
                    function run9(){
                        console.log(i)
                        i++
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                        
                    }
                    function run10(){
                      
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                    }
                    let button = document.querySelector('.btn');
                    button.addEventListener('click', run9);
                    let button2 = document.querySelector('.btn2');
                    button2.addEventListener('click', run10);
                }
                function run8(){
                    let answer = document.querySelector('h3');
                    answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Главный символ хеллоуина?</h2>"
                    let test = document.querySelector('.go');
                    test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Тыква'><input type='button' class='btn2' value='Сладости'></div>"
                    function run9(){
                        console.log(i)
                        i++
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                        
                    }
                    function run10(){
                      
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                    }
                    let button = document.querySelector('.btn');
                    button.addEventListener('click', run9);
                    let button2 = document.querySelector('.btn2');
                    button2.addEventListener('click', run10);
                }
                let button = document.querySelector('.btn');
                button.addEventListener('click', run7);
                let button2 = document.querySelector('.btn2');
                button2.addEventListener('click', run8);
            }
            function run6() {
                let answer = document.querySelector('h3');
                answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Кого из людей считали Графом Дракулой?</h2>"
                let test = document.querySelector('.go');
                test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Влад Цепеш'><input type='button' class='btn2' value='Илона Силадьи'></div>"
                function run7(){
                    i++
                    let answer = document.querySelector('h3');
                    answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Главный символ хеллоуина?</h2>"
                    let test = document.querySelector('.go');
                    test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Тыква'><input type='button' class='btn2' value='Сладости'></div>"
                    function run9(){
                        console.log(i)
                        i++
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                        
                    }
                    function run10(){
                      
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                    }
                    let button = document.querySelector('.btn');
                    button.addEventListener('click', run9);
                    let button2 = document.querySelector('.btn2');
                    button2.addEventListener('click', run10);
                }
                function run8(){
                    let answer = document.querySelector('h3');
                    answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Главный символ хеллоуина?</h2>"
                    let test = document.querySelector('.go');
                    test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Тыква'><input type='button' class='btn2' value='Сладости'></div>"
                    function run9(){
                        console.log(i)
                        i++
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                        
                    }
                    function run10(){
                      
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                    }
                    let button = document.querySelector('.btn');
                    button.addEventListener('click', run9);
                    let button2 = document.querySelector('.btn2');
                    button2.addEventListener('click', run10);
                }
                let button = document.querySelector('.btn');
                button.addEventListener('click', run7);
                let button2 = document.querySelector('.btn2');
                button2.addEventListener('click', run8);
            }
            let button = document.querySelector('.btn');
            button.addEventListener('click', run5);
            let button2 = document.querySelector('.btn2');
            button2.addEventListener('click', run6);
        }
        function run4() {
        
            let answer = document.querySelector('h3');
            answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Кем был создан образ графа Дракулы?</h2>"
            let test = document.querySelector('.go');
            test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Брэмомом Стокером'><input type='button' class='btn2' value='Джоном Хевином'></div>"
           
            function run5() {
                i++
                let answer = document.querySelector('h3');
                answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Кого из людей считали Графом Дракулой?</h2>"
                let test = document.querySelector('.go');
                test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Влад Цепеш'><input type='button' class='btn2' value='Илона Силадьи'></div>"
                function run7(){
                    i++
                    let answer = document.querySelector('h3');
                    answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Главный символ хеллоуина?</h2>"
                    let test = document.querySelector('.go');
                    test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Тыква'><input type='button' class='btn2' value='Сладости'></div>"
                    function run9(){
                        console.log(i)
                        i++
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                        
                    }
                    function run10(){
                      
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                    }
                    let button = document.querySelector('.btn');
                    button.addEventListener('click', run9);
                    let button2 = document.querySelector('.btn2');
                    button2.addEventListener('click', run10);
                }
                function run8(){
                    let answer = document.querySelector('h3');
                    answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Главный символ хеллоуина?</h2>"
                    let test = document.querySelector('.go');
                    test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Тыква'><input type='button' class='btn2' value='Сладости'></div>"
                    function run9(){
                        console.log(i)
                        i++
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                        
                    }
                    function run10(){
                      
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                    }
                    let button = document.querySelector('.btn');
                    button.addEventListener('click', run9);
                    let button2 = document.querySelector('.btn2');
                    button2.addEventListener('click', run10);
                }
                let button = document.querySelector('.btn');
                button.addEventListener('click', run7);
                let button2 = document.querySelector('.btn2');
                button2.addEventListener('click', run8);
            }
            function run6() {
              
                let answer = document.querySelector('h3');
                answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Кого из людей считали Графом Дракулой?</h2>"
                let test = document.querySelector('.go');
                test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Влад Цепеш'><input type='button' class='btn2' value='Илона Силадьи'></div>"
                function run7(){
                    i++
                    let answer = document.querySelector('h3');
                    answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Главный символ хеллоуина?</h2>"
                    let test = document.querySelector('.go');
                    test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Тыква'><input type='button' class='btn2' value='Сладости'></div>"
                    function run9(){
                        console.log(i)
                        i++
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                        
                    }
                    function run10(){
                      
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                    }
                    let button = document.querySelector('.btn');
                    button.addEventListener('click', run9);
                    let button2 = document.querySelector('.btn2');
                    button2.addEventListener('click', run10);
                }
                function run8(){
                    let answer = document.querySelector('h3');
                    answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Главный символ хеллоуина?</h2>"
                    let test = document.querySelector('.go');
                    test.innerHTML = "<div class='answer'><input type='button' class='btn' value='Тыква'><input type='button' class='btn2' value='Сладости'></div>"
                   function run9(){
                        console.log(i)
                        i++
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                        
                    }
                    function run10(){
                      
                        let answer = document.querySelector('h3');
                        answer.innerHTML = "<h2 style='color:aliceblue;;font-size:1em;'>Ваш результат:<div id='min' style='color:white;'>из 5</div> Счастливого хэллоина🕷</h2>"
                        document.getElementById("min").innerHTML = i;
                        test.innerHTML = "<div class='answer'></div>"
                    }
                    let button = document.querySelector('.btn');
                    button.addEventListener('click', run9);
                    let button2 = document.querySelector('.btn2');
                    button2.addEventListener('click', run10);
                }
                let button = document.querySelector('.btn');
                button.addEventListener('click', run7);
                let button2 = document.querySelector('.btn2');
                button2.addEventListener('click', run8);
            }
            let button = document.querySelector('.btn');
            button.addEventListener('click', run5);
            let button2 = document.querySelector('.btn2');
            button2.addEventListener('click', run6);
        }
        let button = document.querySelector('.btn');
        button.addEventListener('click', run3);
        let button2 = document.querySelector('.btn2');
        button2.addEventListener('click', run4);
    }









    
    let button = document.querySelector('.btn');
    button.addEventListener('click', run1);
    let button2 = document.querySelector('.btn2');
    button2.addEventListener('click', run2);
}


let burger = document.querySelector(".burger-menu");
let nav = document.querySelector(".main-nav");
burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});
let button = document.querySelector('.btn');
button.addEventListener('click', run);