function volume_sphere(event) {
    event.preventDefault();
    
    var radius = parseFloat(document.getElementById("radius").value);
    
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = "Invalid input";
    } else {
        var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        
        document.getElementById("volume").value = volume.toFixed(4);
    }
}

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
