// document.querySelector('ul').lastElementChild.innerHTML = 'bye';
// document.lastElementChild.lastElementChild.querySelector('ul').lastElementChild.innerHTML = 'bye'


// // selecting by id
// document.querySelector('#title').innerHTML+=' there'

// // getting a list of elements by tagname
// for (let index = 0; index < document.getElementsByTagName('li').length; index++) {
//     alert(document.getElementsByTagName('li')[index].innerHTML);
    
// }

// // hierarchical selectors
// alert(document.querySelector('li a'));

// // combining selectors
// alert(document.querySelector('li.list').innerHTML); // element li with classname list

// // combining id and class names
// alert(document.querySelector('#item-list .list').innerHTML); // this however returns only one item of such selector

// // to get a list of queryselector items
// queryList = document.querySelectorAll('#item-list .list') // this however returns only one item of such selector
// for (let index = 0; index < queryList.length; index++) {
//     alert(queryList[index].innerHTML);    
// }

// // select the second anchor tag
// alert(document.querySelector('li a').innerHTML);

// // CSS manipulation using javascript
// document.querySelector('h1').style.color = 'red';

// document.querySelector('h1').style.fontSize = '5rem';

// document.querySelector('button').style.backgroundColor = 'yellow';

// // NOTE: instead of selector classes like nav-link the javascript style equivalent selector would be navLink;
// // hyphen removed and the string after the hyphen starts with a uppercase version

// // adding classes to elements using javascript
// document.querySelector('button').classList.add('invisibility'); // the "click" button should become invisible

// document.querySelector('li').classList.add('huge');

// // NOTE: .innerHTML returns any html code inbetween the document object along with the tags and .textContent returns only the text present in the object;
// alert(document.firstElementChild.textContent);
// alert(document.firstElementChild.innerHTML);
// // NOTE: using the .innerHTML method, we can insert to new html code on the fly

// // setting attributes to new values
// document.querySelector('a').setAttribute('href','https://www.bing.com');
