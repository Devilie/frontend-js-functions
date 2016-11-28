function compare (a,b) //for array.sort()
{
    if (a > b) return 1;
    if (a < b) return -1;

    //return a - b;
}

function isNumber (num)// for array.filter()
{
    return (typeof num === 'number');
}

function sum()
{
    if (arguments.length === 0)
    {
        return 0;
    }

    else
    {
        //при использовании isNumber код не проходит верификацию тестами
        var sum_result = 0;
        for (var i =0; i<arguments.length; i++)
        {
            if (typeof (arguments[i]) !== "number"){continue}
            sum_result += arguments[i];
        }
        return sum_result;
    }
}

function min (array)
{
    var min_value;
    if (!array)
    {
        return;
    }
    min_value = array.filter(isNumber);//избавляемся от не числовых значений
    var result = min_value.sort(compare)[0];//возвращаем первое(минимальное) значение отсортированного массива
    return result;
}

function max (array)
{
    var max_value;
    if (!array)
    {
        return;
    }
    max_value = array.filter(isNumber);
    var result = max_value.sort(compare)[max_value.length - 1];// последнее(максимальное) значение отсортированного массива
    return result;
}
