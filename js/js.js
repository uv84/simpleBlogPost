var BlogItems = {
    heading: [],
    name: [],
    content: []
}

const DisplayBlog = document.getElementById("Display-blog");
const subForm = document.getElementById("form-dis");
const submitBtn = document.getElementById("sbt-btn");
DisplayBlog.style.display = "none";

submitBtn.addEventListener("click",
    function disableQuiz() {
        var headingText = document.getElementById("heading").value;
        var nameText = document.getElementById("name").value;
        var contentText = document.getElementById("blog-content").value;
        if (headingText == "") {
            alert("Heading must be filled out");
            return false;
        }
        if (nameText == "") {
            alert("Name must be filled out");
            return false;
        }
        if (contentText == "") {
            alert("Content box must be filled out");
            return false;
        }
        const d = new Date();
        var text = "-by " + nameText + " " + d.toLocaleString('default', { month: 'long' }) + " " + d.getDay() + ", " + d.getFullYear()

        BlogItems.content.push(contentText)
        BlogItems.name.push(text)
        BlogItems.heading.push(headingText)

        writeContent();
        subForm.style.display = "none";
        DisplayBlog.style.display = "initial";

    })


function writeContent() {
    for (i = 0; i < BlogItems.heading.length; i++) {

        document.getElementById("headingDis").innerHTML = BlogItems.heading[i];
        document.getElementById("nameDis").innerHTML = BlogItems.name[i];
        document.getElementById("content").innerHTML = BlogItems.content[i];
    }

}