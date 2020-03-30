let lang = prompt('Enter the lang');
    console.log(lang);

if (lang == 'ru'){
    console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье ');
}  else if(lang == 'en'){
    console.log('Monday,tuesday,wensday,thursday,friday,saturday,sunday');
}  else {
    console.log('Error!');    
}

switch(lang){
    case 'ru':
        console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье '); 
    break;
    case 'en':
        console.log('Monday,tuesday,wensday,thursday,friday,saturday,sunday');
    break;
}


let lang = [];
let word = prompt('Enter the lang: ');

    lang ['ru'] = ['Понедельник' , 'вторник' , 'среда' , 'четверг' , 'пятница' , 'суббота' , 'воскресенье'];
    lang ['en'] = ['Monday' , 'tuesday' , 'wensday' , 'thursday' , 'friday' , 'saturday' , 'sunday'];
    console.log(lang[word]);


let namePerson = prompt('Введите имя');
    console.log((namePerson == 'Артем') ? 'директор' : (namePerson == 'Максим') ? 'преподаватель' : 'студент');




