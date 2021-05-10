var isInEditMode = true;

function enableEditMode (){
    richTextField.document.designMode = 'On';
}

function execCmd (command){
    richTextField.document.execCommand(command, false, null);
}

function execCommandWithArg (command, arg){
    richTextField.document.execCommand(command, false, arg);
}

function toggleEdit(){
    if(isInEditMode){
        richTextField.document.designMode = 'Off';
        isInEditMode = false;
    }else{
        richTextField.document.designMode = 'On';
        isInEditMode = true;
    }
}