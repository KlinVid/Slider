
let link = [

    {
        site: 'https://www.google.com',
        name: 'Заголовок слайда 1',
        pic: 'img1b.jpg',
        description: 'Крупнейшая в мире поисковая система интернета, принадлежащая корпорации Google Inc.',
    },
    
    {
        site: 'https://www.yandex.by',
        name: 'Заголовок слайда 2',
        pic: 'img2b.jpg',
        description: 'Поисковая система, принадлежащая российской корпорации «Яндекс», основной продукт компании.',
    },

    {
        site: 'https://www.yahoo.com',
        name: 'Заголовок слайда 3',
        pic: 'img3b.jpg',
        description: 'Американская поисковая система в интернете, долгие годы занимавшая второе место в мировом рейтинге подобных сервисов.',
    },

    {
        site: 'https://www.bing.com',
        name: 'Заголовок слайда 4',
        pic: 'img4b.jpg',
        description: 'Американская поисковая система, разработанная международной корпорацией Microsoft.',
    },

    {
        site: 'https://www.mail.ru',
        name: 'Заголовок слайда 5',
        pic: 'img5b.jpg',
        description: 'Крупнейшая бесплатная почта, быстрый и удобный интерфейс, неограниченный объем ящика, надежная защита от спама и вирусов.',
    },

    {
        site: 'https://www.youtube.com',
        name: 'Заголовок слайда 6',
        pic: 'img6b.jpg',
        description: 'Смотрите любимые видео, слушайте любимые песни, загружайте собственные ролики и делитесь ими с друзьями, близкими и целым миром.',
    },

];

        
        let n = 0, max = link.length-1;
        let timerId, str, pos, res;

        function timer() {
            //условие для перехода слайдов в начало
            if (++n > max){
                n = 0;
            }

            changeSlide();

            //авто-slider через 2 секунды
            timerId = setTimeout(timer, 2000);
        }

        //остановка авто-slider при наведении мыши на картинку
        function stop() {
            clearTimeout(timerId);
        }

        //переход на следующий слайд
        function next() {
            if (n >= max){
                n = 0;
            } else {
                n++;
            }

            changeSlide();
        }
        
        //переход на предыдущий слайд
        function before() {
            if (n > 0){
                n--;
            } else {
                n = max;
            }

            changeSlide();
        }

        function changeSlide() {
             //вывод название сайта в левом вверхнем углу
             str = link[n].site;
             pos = str.indexOf(".");     
             res = str.substring(pos+1, str.length); 
             document.getElementById('title').innerHTML = res;
 
             //вывод заголовка слайда
             document.getElementById('id-1').innerHTML = link[n].name;
 
             //добавление описание слайда и ссылки
             document.getElementById('id0').href = link[n].site;
             document.getElementById('id0').innerHTML = link[n].description;
 
             //вывод картинки
             document.getElementById('id1').src = `images/${link[n].pic}`;
        }