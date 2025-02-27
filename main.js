$(document).ready(function(){
    
    $("#calculateSalary").click(function(){
        let employeeName=$("employeeName").val();
        let hoursWorked=parseFloat($("hoursWorked").val());
        let hourlyRate=parseFloat($("hourlyRate").val());

    let grossSalary=hoursWorked*hourlyRate;
    let taxDeduction=0.1 * grossSalary;
    let netSalary= grossSalary - taxDeduction;
    //add table details
    let newRow = 
    <tr>
        <td>$(employeeName)</td>
        <td>$(hoursWorked)</td>
        <td>$(hourlyRate)</td>
        <td>$(grossSalary)</td>
        <td>$(taxDeduction)</td>
        <td>$(netSalary)</td>

    
    </tr>
    $("#salaryDetails").append("newRow");


    })

});