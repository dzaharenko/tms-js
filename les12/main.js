const studentsData = [
    {
        firstName: 'Василий',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Java',
    },
    {
        firstName: 'Иван',
        lastName: 'Иванов',
        admissionYear: 2018,
        courseName: 'JavaScript',
    },
    {
        firstName: 'Александр',
        lastName: 'Федоров',
        admissionYear: 2017,
        courseName: 'Python',
    },
    {
        firstName: 'Николай',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Android',
    }
];

class User {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

}

class Student extends User{

    constructor(firstName, lastName, courseName, admissionYear) {
        super(firstName, lastName);
        this.courseName = courseName;
        this.admissionYear = admissionYear;
    }

    get course() {
        let year = new Date().getFullYear();
        return year - this.admissionYear;
    }

}

class Students  {

    constructor (studentsData) {
        this.studentsData = studentsData;
    }

    getInfo() {
        let students = [];
        this.studentsData.sort((a,b) => {
            if(a.admissionYear < b.admissionYear) return 1;
            if(a.admissionYear > b.admissionYear) return -1;
        });

        for (let i = 0; i < this.studentsData.length; i++) {
            let student = new Student(this.studentsData[i].firstName, this.studentsData[i].lastName, this.studentsData[i].courseName, this.studentsData[i].admissionYear);

            students.push(`${student.fullName} - ${student.courseName}, ${student.course} курс`);
        }
        return students;
    }
}

const students = new Students(studentsData);
console.log(students.getInfo());