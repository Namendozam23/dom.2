 // Ejercicio 6
        function evaluarEjercicio6a() {
            const z = parseFloat(document.getElementById("z6").value);
            const resultado = 0.4 * Math.pow(z, 2) + 3.1 * Math.pow(z, 2) - 162.3 * z - 80.7;
            document.getElementById("resultado6a").innerText = `Resultado: ${resultado.toFixed(4)}`;
        }

        function evaluarEjercicio6b() {
            const z = parseFloat(document.getElementById("z6").value);
            const resultado = (Math.pow(z, 3) - 23) / Math.cbrt(Math.pow(z, 2) + 17.5);
            document.getElementById("resultado6b").innerText = `Resultado: ${resultado.toFixed(4)}`;
        }

        // Ejercicio 7
        function evaluarEjercicio7a() {
            const t = parseFloat(document.getElementById("t7").value);
            const resultado = 0.5 * Math.exp(2 * t) - 3.8 * Math.pow(t, 3);
            document.getElementById("resultado7a").innerText = `Resultado: ${resultado.toFixed(4)}`;
        }

        function evaluarEjercicio7b() {
            const t = parseFloat(document.getElementById("t7").value);
            const resultado = (6 * Math.pow(t, 2) + 6 * t - 2) / (Math.pow(t, 2) - 1);
            document.getElementById("resultado7b").innerText = `Resultado: ${resultado.toFixed(4)}`;
        }

        // Ejercicio 8
        function evaluarEjercicio8a() {
            const x = parseFloat(document.getElementById("x8").value);
            const y = parseFloat(document.getElementById("y8").value);
            const resultado = Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 2/3) + (x * y) / (y - x);
            document.getElementById("resultado8a").innerText = `Resultado: ${resultado.toFixed(4)}`;
        }

        function evaluarEjercicio8b() {
            const x = parseFloat(document.getElementById("x8").value);
            const y = parseFloat(document.getElementById("y8").value);
            const resultado = Math.sqrt(x + y) / Math.pow(x - y, 2) + 2 * Math.pow(x, 2) - x * Math.pow(y, 2);
            document.getElementById("resultado8b").innerText = `Resultado: ${resultado.toFixed(4)}`;
        }

        // Ejercicio 9
        function calcularAyB() {
            const c = parseFloat(document.getElementById("c9").value);
            const d = parseFloat(document.getElementById("d9").value);
            const a = c * Math.pow(d, 2);
            const b = (c + a) / (c - d);
            document.getElementById("a9").value = a.toFixed(4);
            document.getElementById("b9").value = b.toFixed(4);
        }

        function evaluarEjercicio9a() {
            const c = parseFloat(document.getElementById("c9").value);
            const a = parseFloat(document.getElementById("a9").value);
            const b = parseFloat(document.getElementById("b9").value);
            const d = parseFloat(document.getElementById("d9").value);
            const resultado = Math.exp(d - b) + Math.cbrt(c + a) - Math.pow(c * a, d);
            document.getElementById("resultado9a").innerText = `Resultado: ${resultado.toFixed(4)}`;
        }

        function evaluarEjercicio9b() {
            const c = parseFloat(document.getElementById("c9").value);
            const a = parseFloat(document.getElementById("a9").value);
            const b = parseFloat(document.getElementById("b9").value);
            const d = parseFloat(document.getElementById("d9").value);
            const t = 3.2; // No está definido en el problema, asumo que se refiere al 't' del ejercicio 7. Si es otra variable, debe ser definida.
            const resultado = (d / c) + Math.pow((c * t) / b, 2) - Math.pow(c, d) - (a / b);
            document.getElementById("resultado9b").innerText = `Resultado: ${resultado.toFixed(4)}`;
        }

        // Ejercicio 10
        const x10 = Math.PI / 10;

        function verificarIdentidad10a() {
            const izquierda = Math.pow(Math.cos(x10), 2) - Math.pow(Math.sin(x10), 2);
            const derecha = 1 - 2 * Math.pow(Math.sin(x10), 2);
            document.getElementById("resultado10a_izquierda").innerText = `Lado Izquierdo: ${izquierda.toFixed(4)}`;
            document.getElementById("resultado10a_derecha").innerText = `Lado Derecho: ${derecha.toFixed(4)}`;
        }

        function verificarIdentidad10b() {
            const tanX = Math.tan(x10);
            const sinX = Math.sin(x10);
            const cosX = Math.cos(x10);
            const izquierda = tanX / (sinX - 2 * tanX);
            const derecha = 1 / (cosX - 2);
            document.getElementById("resultado10b_izquierda").innerText = `Lado Izquierdo: ${izquierda.toFixed(4)}`;
            document.getElementById("resultado10b_derecha").innerText = `Lado Derecho: ${derecha.toFixed(4)}`;
        }