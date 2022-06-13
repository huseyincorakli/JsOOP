document.getElementById('mybtn').addEventListener('click' ,function(e){

    var name= document.getElementById('name');
    var age= document.getElementById('age');
    var errorD= document.getElementById('error');
    errorD.innerHTML="";
    try {
        
        if (name.value.length===0) {
            throw new Error("name is required");
        }
        if (name.value.length>20) {
            throw new Error("name is too long");
        }
        if (name.value.length<2) {
            throw new Error("name is too short");
        }
        if (age.value.length===0 ) {
            throw new Error("age is required");
        }
        if (isNaN(age.value)) {
            throw new Error("age is not numeric")
        }
        window.confirm('form is submited')
    } catch (error) {
        errorD.innerHTML=error.message;
    }

    finally{
        name.value='';
        age.value='';
    }
})