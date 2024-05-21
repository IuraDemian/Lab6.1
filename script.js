// Клас "Бухгалтерія"
class Accounting {
    constructor(code, fullName, position, salary, childrenCount, experience) {
        this.code = code;
        this.fullName = fullName;
        this.position = position;
        this.salary = salary;
        this.childrenCount = childrenCount;
        this.experience = experience;
    }

    displayInfo() {
        return `
            <h2>Бухгалтерія</h2>
            <p>Код: ${this.code}</p>
            <p>ПІБ: ${this.fullName}</p>
            <p>Посада: ${this.position}</p>
            <p>Заробітна плата: ${this.salary}</p>
            <p>Кількість дітей: ${this.childrenCount}</p>
            <p>Стаж: ${this.experience}</p>
        `;
    }
}

// Клас "Турнір"
class Tournament {
    constructor(code, fullName, gender, age, country, scores) {
        this.code = code;
        this.fullName = fullName;
        this.gender = gender;
        this.age = age;
        this.country = country;
        this.scores = scores;
    }

    displayInfo() {
        return `
            <h2>Турнір</h2>
            <p>Код: ${this.code}</p>
            <p>ПІБ: ${this.fullName}</p>
            <p>Стать: ${this.gender}</p>
            <p>Вік: ${this.age}</p>
            <p>Країна: ${this.country}</p>
            <p>Оцінки по трьох видах змагань: ${this.scores.join(', ')}</p>
        `;
    }
}

// Клас "Аукціон"
class Auction {
    constructor(code, lotName, startDate, endDate, startPrice, endPrice) {
        this.code = code;
        this.lotName = lotName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.startPrice = startPrice;
        this.endPrice = endPrice;
    }

    displayInfo() {
        return `
            <h2>Аукціон</h2>
            <p>Код: ${this.code}</p>
            <p>Назва лота: ${this.lotName}</p>
            <p>Дата початку торгів: ${this.startDate}</p>
            <p>Дата завершення торгів: ${this.endDate}</p>
            <p>Стартова ціна: ${this.startPrice}</p>
            <p>Кінцева ціна: ${this.endPrice}</p>
        `;
    }
}

const accounting1 = new Accounting("ACC001", "Іванов Іван Іванович", "Головний бухгалтер", 5000, 2, 10);
const tournament1 = new Tournament("TOUR001", "Петрова Анна", "Жіноча", 25, "Україна", [8, 9, 7]);
const auction1 = new Auction("AUCTION001", "Живопис", "2024-05-20", "2024-05-25", 100, 300);

document.getElementById('accounting-info').innerHTML = accounting1.displayInfo();
document.getElementById('tournament-info').innerHTML = tournament1.displayInfo();
document.getElementById('auction-info').innerHTML = auction1.displayInfo();