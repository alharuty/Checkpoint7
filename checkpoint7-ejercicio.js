const my_function = (num1, num2, num3, num4) => {
    let my_first_result = num1 + num2;
    let my_second_result = num3 + num4;
    let final_result = my_first_result * my_second_result;
  
    if (final_result > 50) {
      console.log("¡El número es mayor que 50!");
    } else {
      console.log("¡El número es menor que 50!");
    }
};
