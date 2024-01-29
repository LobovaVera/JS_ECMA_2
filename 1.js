// Домашнее задание

// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
    constructor(title, author, pageNumber){
        this.title = title;
        this.author = author;
        this.pageNumber = pageNumber;
    }
    displayInfo(){
        console.log(`Эта книга ${this.title}, ее написал ${this.author}, в ней ${this.pageNumber} страниц`)
    }
}

const newBook = new Book("Сто лет одиночества", "Маркес", 230);
newBook.displayInfo();