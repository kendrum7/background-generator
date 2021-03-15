function convertTemp()
{
    var temp = +fTemp.value;
    var newTemp;

     switch( units.value )
    {
        case "Celsius":
            newTemp = (temp-32)*5/9;
            break;
       case "Kelvin":
            newTemp = (temp+459.67)*5/9;
            break;
       case "Rankine":
            newTemp = (temp+459.67);
            break;
    }

    setColor( newTemp );
    convertedValue.value = newTemp + " " + units.value;
}

function setColor( temp )
{
    if( temp < 0)
    {
        convertedValue.style.color = "red";
    }
    else
    {
        convertedValue.style.color = "black";
    }

}

function onSelectChange()
{
    if( units.value != "-Select an option-")
    {
        convertButton.disabled = false;
    }
    else
    {
        convertButton.disabled = true;
    }
}