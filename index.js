function calculateGrade(marks){
    
    let grade;
    if (marks >100 && marks <0 ) {
                grade = "invalid input"
    
    }else if (marks >79) {
    grade = "A";
                return grade
    }else if (marks >= 60) {
    grade = "B";
                return grade
    }else if (marks <= 50) {
    grade = "C";
                return grade
    }else if (marks <= 40) {
    grade = "D";
                return grade
    }else {
    grade = "E"; 
                return grade
    }
    
    }            
    
    console. log("The student grade is<: "+calculateGrade(60));
