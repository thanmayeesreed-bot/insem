
const courses = [
    { name: "Java Programming", price: 999 },
    { name: "Web Development", price: 799 },
    { name: "Python Basics", price: 599 },
    { name: "Data Structures", price: 899 }
];

let enrolled = [];

function displayCourses() {
    const container = document.getElementById("courses");
    container.innerHTML = "";

    courses.forEach((course, index) => {
        container.innerHTML += `
            <div class="card">
                <h3>${course.name}</h3>
                <p>Price: ₹${course.price}</p>
                <button onclick="enroll(${index})">
                    Enroll Now
                </button>
            </div>`;
    });
}

function enroll(index) {
    const course = courses[index];

    if (enrolled.includes(course.name)) {
        alert("Already enrolled!");
        return;
    }

    enrolled.push(course.name);
    displayEnrolled();
    alert("Successfully enrolled in " + course.name);
}

function displayEnrolled() {
    document.getElementById("enrolled").innerHTML =
        enrolled.map(name => `<li>${name}</li>`).join("");
}

displayCourses();