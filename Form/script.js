function showDetails()
{
    var empDetails = document.getElementById('details');
    var empName = document.getElementById('name');
    var empAge = document.getElementById('age');
    empDetails.innerHTML = "Name " + empName.value + "<br>" + " Age: " + empAge.value;
}