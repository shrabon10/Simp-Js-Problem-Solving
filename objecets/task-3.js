const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

// console.log(Object.values(student.physics));

Object.values(student.physics).forEach(value => {
    console.log(value);
});
