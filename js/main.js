alert("Bienvenido al calculador de impuestos según su sueldo!")

let entrada = confirm("Desea calcular el valor de los impuestos a pagar?");

function saludo() {
    alert("Adios!");
}

if (entrada == true) {
    let laboral = "1";
    while (laboral == "1" || laboral == "2" || laboral == "3" || laboral == "4") {
        laboral = prompt("Elija su condicion laboral:\n1: Relación de dependencia\n2: Monotributo\n3: Autónomo\n4: Trabajo no registrado\n5: Salir");
        switch (laboral) {
            case "1":
                let ingresoRD = Number(prompt("Ingrese el sueldo bruto del mes:"));
                let ingresoNeto = ingresoRD * 0.825;
                alert("El ingreso neto que tendrá será de: $" + ingresoNeto + ".\nEl impuesto será descontado directamente por su empleador.");
                let aguinaldo = confirm("Desea calcular el valor promedio de su ingreso mensual?");
                if (aguinaldo == true) {
                    let sueldos = Number(0);
                    for (let i = 1; i <= 6; i += 1) {
                        let sueldo = Number(prompt("Ingrese el valor del sueldo del mes " + i));
                        sueldos = sueldos + sueldo;
                    }
                    alert("El sueldo promedio es de: " + sueldos / 6);
                }
                break;
            case "2":
                let ingresoMono = Number(prompt("Ingrese el total facturado en el mes:"));
                let ingresoNet2 = ingresoMono * 0.965;
                let IIBB = ingresoMono - ingresoNet2;
                alert("Deberá pagar $" + IIBB + " correspondiente a IIBB.\nEl ingreso neto que tendrá será de $" + ingresoNet2 + ".");
                break;
            case "3":
                let ingresoAuton = Number(prompt("Ingrese el total facturado en el mes:"));
                let ingresoNet3 = ingresoAuton * 0.65;
                let Auton = ingresoAuton - ingresoNet3;
                alert("Deberá pagar $" + Auton + " correspondiente a IVA y Ganancias.\nEl ingreso neto que tendrá será de $" + ingresoNet3 + ".");
                break;
            case "4":
                alert("Ud no pagará impuestos relacionados a su actividad laboral.\nSe recomienda que regularice su situacion");
                break;
            case "5":
                saludo();
                break;
            default:
                alert("No se ha seleccionado una opción válida.");
                break;
        }
    }
} else {
    saludo();
}

console.log("End of algorithm");