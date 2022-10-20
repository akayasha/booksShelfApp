function bookForm(){
    var elem = document.getElementById("book");
    elem.style.display = "none";
    
    var elem2 = document.getElementById("sub2");
    elem2.style.display = "none";
    

    var p = document.createElement("p");
    p.id = "bookForm"; 
    p.className = "title2";
    p.innerHTML = "BOOK FORM";

    var element = document.getElementsByTagName('div')[0];
    element.appendChild(p);

    var container2 = document.createElement("div");
    container2.className = "container align-items-center";
    container2.id = "bookform";
    element.appendChild(container2);

    
    var container3 = document.createElement("div");
    container3.className = "form-group  align-items-center";
    container2.appendChild(container3);

    var input0 = document.createElement("div");
    input0.className = "row-md-4";
    container3.appendChild(input0);

    var input_id = document.createElement('input');
    input_id.type = 'text';
    input_id.id = "id";
    input_id.placeholder = 'Book id';
    input_id.className = 'form-control';
    input_id.name = 'BOOK ID';
    input_id.style.backgroundColor = '#FBF2CF';
    input_id.style.textAlign = 'center';
    input_id.style.width = '50%';
    input_id.style.fontSize = '20px';
    input_id.style.margin = 'auto';
    input_id.style.marginBottom = '15px';
    input0.appendChild(input_id);


    var input1 = document.createElement("div");
    input1.className = "row-md-4"
    container3.appendChild(input1);


    var input_book = document.createElement('input');
    input_book.type = 'text';
    input_book.id = 'book_name';
    input_book.placeholder = 'Book Name';
    input_book.className = 'form-control';
    input_book.name = 'BOOK NAME';
    input_book.style.backgroundColor = '#FBF2CF';
    input_book.style.textAlign = 'center';
    input_book.style.width = '50%';
    input_book.style.fontSize = '20px';
    input_book.style.margin = 'auto';
    input_book.style.marginBottom = '15px';
    input1.appendChild(input_book);
    
    var input2 = document.createElement('div');
    input2.className = "row-md-4";
    container3.appendChild(input2);

    var input_author = document.createElement('input');
    input_author.type = 'text';
    input_author.placeholder = 'Author';
    input_author.className = 'form-control';
    input_author.id = 'author';
    input_author.name = 'AUTHOR';
    input_author.style.backgroundColor = '#FBF2CF';
    input_author.style.textAlign = 'center';
    input_author.style.width = '50%';
    input_author.style.fontSize = '20px';
    input_author.style.margin = 'auto';
    input_author.style.marginBottom = '15px';
    input2.appendChild(input_author);

    var input3 = document.createElement('div');
    input3.className = "row-md-4";
    container3.appendChild(input3);

    var input_year = document.createElement('input');
    input_year.type = 'number';
    input_year.id = 'year';
    input_year.placeholder = 'Year';
    input_year.className = 'form-control';
    input_year.name = 'AUTHOR';
    input_year.style.backgroundColor = '#FBF2CF';
    input_year.style.textAlign = 'center';
    input_year.style.width = '50%';
    input_year.style.fontSize = '20px';
    input_year.style.margin = 'auto';
    input_year.style.marginBottom = '15px';
    input3.appendChild(input_year);

    var input4 = document.createElement('div');
    input4.className = "row-md-4";
    container3.appendChild(input4);

    
    var labelCheck = document.createElement('label');
    input4.appendChild(labelCheck);
  
    var spanCheck = document.createElement('span');
    spanCheck.innerHTML = 'Finish';
    spanCheck.style.display = 'inline-block';
    spanCheck.style.padding = '10px';
    spanCheck.style.fontSize = '20px';
    labelCheck.appendChild(spanCheck);

    var isComplete = document.createElement('input');
    isComplete.type = 'checkbox';
    isComplete.style.display = 'inline-block';
    isComplete.name = 'isComplete';
    labelCheck.appendChild(isComplete);

    var submitBtn = document.createElement('div');
    submitBtn.className = "row-md-4";
    container3.appendChild(submitBtn);

    var subBtn = document.createElement('button');
    subBtn.className = "btn btn-primary btn-block";
    subBtn.type = 'submit';
    subBtn.style.width = '50%';
    subBtn.style.marginTop = '50px';
    subBtn.style.fontSize = '20px';
    subBtn.style.color = '#FFFFFF';
    subBtn.style.backgroundColor = '#A7FFE4';
    subBtn.style.height = '50px';
    submitBtn.appendChild(subBtn);
    subBtn.onclick = function sendBook(){
        elem4 = document.getElementById("bookform");
        elem5 = document.getElementById("bookForm");
        elem5.style.display = "none";
        elem4.style.display = "none";

        window.location.reload(false);

    }

}

function bookShelf(){
    var elem = document.getElementById("book");
    elem.style.display = "none";
    
    var elem2 = document.getElementById("sub2");
    elem2.style.display = "none";
    

    var p = document.createElement("p");
    p.id = "bookForm"; 
    p.className = "title2";
    p.innerHTML = "BOOK SHELF";

    var element = document.getElementsByTagName('div')[0];
    element.appendChild(p);

    var container2 = document.createElement("div");
    container2.className = "container align-items-center";
    container2.id = "bookShelf";
    element.appendChild(container2);

    var container2 = document.createElement("div");
    container2.className = "container align-items-center";
    container2.id = "bookShelf";
    element.appendChild(container2);



}

const localStorageKey = "BOOKS";

const title = document.querySelector("#inputBookTitle");
const errorTitle = document.querySelector("#errorTitle");
const sectionTitle = document.querySelector("#sectionTitle");

const author = document.querySelector("#inputBookAuthor");
const errorAuthor = document.querySelector("#errorAuthor");
const sectionAuthor = document.querySelector("#sectionAuthor");

const year = document.querySelector("#inputBookYear");
const errorYear = document.querySelector("#errorYear");
const sectionYear = document.querySelector("#sectionYear");

const readed = document.querySelector("#inputBookIsComplete");

const btnSubmit = document.querySelector("#bookSubmit");

const searchValue = document.querySelector("#searchBookTitle");
const btnSearch = document.querySelector("#searchSubmit");

let checkInput = [];
let checkTitle = null;
let checkAuthor = null;
let checkYear = null;



