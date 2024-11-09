document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("makasih ya sudah memberi kritik dan saran!");
    this.reset();
});
