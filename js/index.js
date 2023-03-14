'use strict';

// #TASK 7

//При загрузке страницы нужно показать пользователю окно, в котором спросить его год рождения.
//Когда он введет его и нажмет ОК, спросить у него, в каком городе он живет.
//При удачном раскладе показать ему еще одно окно, где спросить его любимый вид спорта.
//При нажатии на ОК показываем ему окно, где должна быть отображена следующая информация:
//Его возраст.
//Если пользователь введет Киев, Москва или Минск, то показать ему сообщение – “Ты живешь в столице …” и на место точек подставляем страну, столицу которой он ввел. Иначе показываем ему “ты живешь в городе …” и на место точек – введенный город.
//Выбираем сами три вида спорта и три чемпиона в этих видах. Соответственно, если пользователь введет один из этих видов спорта, то показываем ему сообщение “Круто! Хочешь стать …” и подставляем на место точек имя и фамилию чемпиона.
 

//Всё это должно быть отображено в одном окне.

//Если в каком-то из случаев он не захочет вводить информацию и нажмет Отмена, показать ему сообщение – “Жаль, что Вы не захотели ввести свой(ю) …” и указываем, что он не захотел вводить – дату рождения, город или вид спорта.


const dateOfBirth = +prompt('Write down year of your birth', '');


if(dateOfBirth !== null && dateOfBirth !== 0) {
   const currentCity = prompt('Which city do u live?', '');
    if(currentCity !== null && currentCity !== '') {
        const favouriteSport = prompt('What is favorite kind of sport?' , '')
        if(favouriteSport !== null && favouriteSport !== '') {
            alert(dateOfBirth)
            if(favouriteSport === 'football') {
                alert('Thats cool! Wanna be like Ronaldo?')
            }else if(favouriteSport === 'boxing') {
                alert('Thats cool! Wanna be like Klichko?')
            }else if(favouriteSport === 'tennis') {
                alert('Thats cool! Wanna be like Federer?')
            }
    }else {
        alert('Its a pitу that u didnt write your favourite kind of sport')
    } 
         if(currentCity === 'Kiyv') {
            alert(`Youre living in capital of Ukraine`)
        }else if(currentCity === 'moskwa') {
            alert('You are living in morder')
        }else if(currentCity === 'Minsk') {
            alert('You are living in Belarus')
        }else {
            alert(`You are living in ${currentCity}`)
        } 
    }else {
        alert('Its a pitу that u didnt write your city')
    }
}else {
    alert('Its a pitу that u didnt write your date of birth')
}