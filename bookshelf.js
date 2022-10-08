function bookForm(){
    var elem = document.getElementById("book");
    elem.parentElement.removeChild(elem);
    
    var elem2 = document.getElementById("sub2");
    elem2.parentElement.removeChild(elem2);
    

    var p = document.createElement("p"); 
    p.className = "title2";
    p.innerHTML = "BOOK FORM";

    var element = document.getElementsByTagName('div')[0];
    element.appendChild(p);

    var container2 = document.createElement("div");
    container2.className = "container align-items-center";
    element.appendChild(container2);

    
    var container3 = document.createElement("div");
    container3.className = "form-group  align-items-center";
    container2.appendChild(container3);

    var input0 = document.createElement("div");
    input0.className = "row-md-4";
    container3.appendChild(input0);

    var input_id = document.createElement('input');
    input_id.type = 'text';
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
    input_year.type = 'Year';
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

    var isComplete = document.createElement('input');
    isComplete.type = 'radio';
    isComplete.placeholder = 'isComplete';
    isComplete.style.textAlign = 'center';
    isComplete.className = 'form-control';
    isComplete.style.width = '50%';
    isComplete.style.margin = 'auto';
    isComplete.style.fontSize = '20px';
    isComplete.style.backgroundColor = '#FBF2CF';
    isComplete.name = 'isComplete';
    input4.appendChild(isComplete);

}