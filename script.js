const recetas = {
    veneto: {
        'veneto-almibar': {
            nombre: 'Almibar Veneto',
            ingredientesVisibles: {
                'Agua': { valor: 645, unidad: 'l' },
                'Azúcar': { valor: 250, unidad: 'kg' },
                'Glucosa': { valor: 50, unidad: 'kg' },
                'Maltodextrina': { valor: 25, unidad: 'kg' },
                'Albumina de huevo': { valor: 3, unidad: 'kg' },
            },
            ingredientesOcultos: {
                'Goma guar': { valor: 1, unidad: 'kg' },
                'Carragenina': { valor: 0.250, unidad: 'kg' },
                'Garrofin': { valor: 1.200, unidad: 'kg' },
                'MG': { valor: 0.300, unidad: 'kg' },
            }
        },
        'veneto-blanca-fluida': {
            nombre: 'Blanca Veneto fluida',
            ingredientesVisibles: {
                'Leche fluida': { valor: 711.1, unidad: 'l' },
                'Leche en Polvo': { valor: 50, unidad: 'kg' },
                'Azucar': { valor: 180, unidad: 'kg' },
                'Glucosa': { valor: 30, unidad: 'kg' },
                'Manteca': { valor: 30, unidad: 'kg' },
            },
            ingredientesOcultos: {
                'Goma guar': { valor: 1.450, unidad: 'kg' },
                'Carragenina': { valor: 0.250, unidad: 'kg' },
                'MG': { valor: 2.200, unidad: 'kg' },
            }
        },
        'veneto-blanca-polvo': {
            nombre: 'Blanca Veneto polvo',
            ingredientesVisibles: {
                'Agua': { valor: 611, unidad: 'l' },
                'Azúcar': { valor: 180, unidad: 'kg' },
                'Leche en Polvo': { valor: 140, unidad: 'kg' },
                'Glucosa': { valor: 30, unidad: 'kg' },
                'Manteca': { valor: 25, unidad: 'kg' },
            },
            ingredientesOcultos: {
                'Goma guar': { valor: 1.400, unidad: 'kg' },
                'Carragenina': { valor: 0.250, unidad: 'kg' },
                'MG': { valor: 2.500, unidad: 'kg' },

            }
        },
        'veneto-chocolate-fluida': {
            nombre: 'Chocolate Veneto fluida',
            ingredientesVisibles: {
                'Leche fluida': { valor: 710, unidad: 'l' },
                'Leche en Polvo': { valor: 140, unidad: 'kg' },
                'Azucar': { valor: 200, unidad: 'kg' },
                'Manteca': { valor: 30, unidad: 'kg' },
                'Huevo en polvo': { valor: 10, unidad: 'kg' },
                'Cacao en polvo': { valor: 21, unidad: 'kg' },
                'Licor de cacao': { valor: 7, unidad: 'kg' },


            },
            ingredientesOcultos: {
                'Goma guar': { valor: 1.400, unidad: 'kg' },
                'Carragenina': { valor: 0.250, unidad: 'kg' },
                'MG': { valor: 2.500, unidad: 'kg' },

            }
        },
        'veneto-chocolate-polvo': {
            nombre: 'Chocolate Veneto polvo',
            ingredientesVisibles: {
                'Agua': { valor: 598, unidad: 'l' },
                'Leche en Polvo': { valor: 125, unidad: 'kg' },
                'Azucar': { valor: 210, unidad: 'kg' },
                'Manteca': { valor: 25, unidad: 'kg' },
                'Huevo en polvo': { valor: 10, unidad: 'kg' },
                'Cacao en polvo': { valor: 21, unidad: 'kg' },
                'Licor de cacao': { valor: 7, unidad: 'kg' },


            },
            ingredientesOcultos: {
                'Goma guar': { valor: 1.400, unidad: 'kg' },
                'Carragenina': { valor: 0.250, unidad: 'kg' },
                'MG': { valor: 2.500, unidad: 'kg' },

            }
        },
        'veneto-Dulce-de-leche-fluida': {
            nombre: 'Dulce de leche veneto fluida',
            ingredientesVisibles: {
                'Agua': { valor: 98.1, unidad: 'l' },
                'Leche fluida': { valor: 500, unidad: 'l' },
                'Azucar': { valor: 60, unidad: 'kg' },
                'Manteca': { valor: 30, unidad: 'kg' },
                'Dulce de leche heladero': { valor: 330, unidad: 'kg' },


            },
            ingredientesOcultos: {
                'Goma guar': { valor: 1.400, unidad: 'kg' },
                'Carragenina': { valor: 0.250, unidad: 'kg' },
                'MG': { valor: 2.500, unidad: 'kg' },
                'Colorante caramelo pardo': { valor: 3, unidad: 'kg' },


            }
        },
        'veneto-Dulce-de-leche-Polvo': {
            nombre: 'Dulce de leche veneto polvo',
            ingredientesVisibles: {
                'Agua': { valor: 541.1, unidad: 'l' },
                'Leche en polvo': { valor: 62.5, unidad: 'kg' },
                'Azucar': { valor: 75, unidad: 'kg' },
                'Manteca': { valor: 30, unidad: 'kg' },
                'Dulce de leche sin nota': { valor: 300, unidad: 'kg' },
            },
            ingredientesOcultos: {
                'Goma guar': { valor: 1.450, unidad: 'kg' },
                'Carragenina': { valor: 0.250, unidad: 'kg' },
                'MG': { valor: 2.200, unidad: 'kg' },
                'Colorante caramelo pardo': { valor: 3, unidad: 'kg' },


            }
        },
        'veneto-vainilla-fluida': {
            nombre: 'Vainilla veneto fluida',
            ingredientesVisibles: {
                'Leche fluida': { valor: 616, unidad: 'l' },
                'Leche en polvo': { valor: 50, unidad: 'kg' },
                'Azucar': { valor: 200, unidad: 'kg' },
                'Manteca': { valor: 30, unidad: 'kg' },
                'Huevo entero': { valor: 80, unidad: 'kg' },

            },
            ingredientesOcultos: {
                'Goma guar': { valor: 1.450, unidad: 'kg' },
                'Carragenina': { valor: 0.250, unidad: 'kg' },
                'MG': { valor: 2.200, unidad: 'kg' },

            }
        },
        'veneto-vainilla-polvo': {
            nombre: 'Vainilla veneto polvo',
            ingredientesVisibles: {
                'Agua': { valor: 535.7, unidad: 'l' },
                'Leche en polvo': { valor: 125, unidad: 'kg' },
                'Azucar': { valor: 210, unidad: 'kg' },
                'Manteca': { valor: 30, unidad: 'kg' },
                'Huevo entero': { valor: 80, unidad: 'kg' },

            },
            ingredientesOcultos: {
                'Goma guar': { valor: 1.400, unidad: 'kg' },
                'Carragenina': { valor: 0.250, unidad: 'kg' },
                'MG': { valor: 2.500, unidad: 'kg' },

            }
        },
    },
    tunel: {
        'tunel-almendrado-polvo': {
            nombre: 'Almendrado tunel polvo',
            ingredientesVisibles: {
                'Agua': { valor: 636.23, unidad: 'l' },
                'Leche en Polvo': { valor: 149.48, unidad: 'kg' },
                'Azúcar': { valor: 120, unidad: 'kg' },
                'Manteca': { valor: 45, unidad: 'kg' },
                'Dextrosa': { valor: 40, unidad: 'kg' },
            },
            ingredientesOcultos: {
                'Goma guar': { valor: 1.450, unidad: 'kg' },
                'Goma xantica': { valor: 0.150, unidad: 'kg' },
                'Emulgel MG': { valor: 3.500, unidad: 'kg' },
            }
        },
        'tunel-almendrado-fluida': {
            nombre: 'Almendrado tunel fluida',
            ingredientesVisibles: {
                'Leche fluida': { valor: 744.5, unidad: 'l' },
                'Leche en Polvo': { valor: 50, unidad: 'kg' },
                'Azúcar': { valor: 120, unidad: 'kg' },
                'Manteca': { valor: 40, unidad: 'kg' },
                'Dextrosa': { valor: 40, unidad: 'kg' },
            },
            ingredientesOcultos: {
                'Goma guar': { valor: 1.600, unidad: 'kg' },
                'Goma xantica': { valor: 0.140, unidad: 'kg' },
                'carragenina': { valor: 0.250, unidad: 'kg' },
                'Emulgel MG': { valor: 3.500, unidad: 'kg' },
            }
        },
        'tunel-blanca-palo-fluida': {
            nombre: 'Blanca tunel palo fluida',
            ingredientesVisibles: {
                'Leche fluida': { valor: 645, unidad: 'l' },
                'Leche en Polvo': { valor: 50, unidad: 'kg' },
                'Azúcar': { valor: 120, unidad: 'kg' },
                'Manteca': { valor: 40, unidad: 'kg' },
                'Dextrosa': { valor: 60, unidad: 'kg' },
            },
            ingredientesOcultos: {
                'Goma guar': { valor: 1.600, unidad: 'kg' },
                'Goma xantica': { valor: 0.350, unidad: 'kg' },
                'carragenina': { valor: 0.250, unidad: 'kg' },
                ' MG': { valor: 2.500, unidad: 'kg' },
            }
        },
        'tunel-blanca-palo-polvo': {
            nombre: 'Blanca tunel palo polvo',
            ingredientesVisibles: {
                'Agua': { valor: 635, unidad: 'l' },
                'Leche en Polvo': { valor: 140, unidad: 'kg' },
                'Azúcar': { valor: 180, unidad: 'kg' },
                'Manteca': { valor: 30, unidad: 'kg' },
            },
            ingredientesOcultos: {
                'Goma guar': { valor: 1.600, unidad: 'kg' },
                'Goma xantica': { valor: 0.350, unidad: 'kg' },
                'carragenina': { valor: 0.250, unidad: 'kg' },
                'MG': { valor: 3.500, unidad: 'kg' },
            }
        },
        'tunel-chocolate-fluida': {
            nombre: 'Chocolate tunel casata fluida',
            ingredientesVisibles: {
                'Leche fluida': { valor: 740, unidad: 'l' },
                'Leche en Polvo': { valor: 50, unidad: 'kg' },
                'Azúcar': { valor: 120, unidad: 'kg' },
                'Manteca': { valor: 12, unidad: 'kg' },
                'Dextrosa': { valor: 40, unidad: 'kg' },
                'Cacao en polvo': { valor: 20, unidad: 'kg' },
                'Licor de cacao': { valor: 10, unidad: 'kg' },

            },
            ingredientesOcultos: {
                'Goma guar': { valor: 1.450, unidad: 'kg' },
                'Goma xantica': { valor: 0.150, unidad: 'kg' },
                'carragenina': { valor: 0.250, unidad: 'kg' },
                'MG': { valor: 3.500, unidad: 'kg' },
            }
        },
        'tunel-chocolate-polvo': {
            nombre: 'Chocolate tunel casata polvo',
            ingredientesVisibles: {
                'Agua': { valor: 630, unidad: 'l' },
                'Leche en Polvo': { valor: 140, unidad: 'kg' },
                'Azúcar': { valor: 120, unidad: 'kg' },
                'Manteca': { valor: 15, unidad: 'kg' },
                'Glucosa': { valor: 60, unidad: 'kg' },
                'Cacao en polvo': { valor: 20, unidad: 'kg' },
                'Licor de cacao': { valor: 10, unidad: 'kg' },
            },
            ingredientesOcultos: {
                'Goma guar': { valor: 1.450, unidad: 'kg' },
                'Goma xantica': { valor: 0.150, unidad: 'kg' },
                'carragenina': { valor: 0.250, unidad: 'kg' },
                'MG': { valor: 3.500, unidad: 'kg' },

            }
        },
        'tunel-Dulce-de-leche-fluida': {
            nombre: 'Dulce de leche Tunel fluida',
            ingredientesVisibles: {
                'Agua': { valor: 84, unidad: 'l' },
                'Leche fluida': { valor: 560, unidad: 'l' },
                'Azúcar': { valor: 35, unidad: 'kg' },
                'Manteca': { valor: 30, unidad: 'kg' },
                'dextrosa': { valor: 10, unidad: 'kg' },
                'Glucosa': { valor: 10, unidad: 'kg' },
                'Dulce de leche heladero': { valor: 250, unidad: 'kg' },
            },
            ingredientesOcultos: {
                'Goma guar': { valor: 1.600, unidad: 'kg' },
                'Goma xantica': { valor: 0.150, unidad: 'kg' },
                'carragenina': { valor: 0.250, unidad: 'kg' },
                'MG': { valor: 2.500, unidad: 'kg' },

            }
        },
        'tunel-Dulce-de-leche-polvo': {
            nombre: 'Dulce de leche Tunel Polvo',
            ingredientesVisibles: {
                'Agua': { valor: 560, unidad: 'l' },
                'Leche en polvo': { valor: 70, unidad: 'kg' },
                'Azúcar': { valor: 50, unidad: 'kg' },
                'Manteca': { valor: 30, unidad: 'kg' },
                'Glucosa': { valor: 30, unidad: 'kg' },
                'Dulce de leche heladero': { valor: 250, unidad: 'kg' },
            },
            ingredientesOcultos: {
                'Goma guar': { valor: 1.600, unidad: 'kg' },
                'Goma xantica': { valor: 0.150, unidad: 'kg' },
                'carragenina': { valor: 0.250, unidad: 'kg' },
                'MG': { valor: 2.500, unidad: 'kg' },

            }

        },
    },
    cool: {
        'cool-blanca-polvo': {
            nombre: 'Blanca cool cream polvo',
            ingredientesVisibles: {
                'Agua': { valor: 666, unidad: 'l' },
                'Leche en Polvo': { valor: 100, unidad: 'kg' },
                'Azúcar': { valor: 160, unidad: 'kg' },
                'Glucosa': { valor: 30, unidad: 'kg' },
                'Manteca': { valor: 15, unidad: 'kg' },
                'Maltodextrina': { valor: 40, unidad: 'kg' },
            },
            ingredientesOcultos: {
                'Goma guar': { valor: 1, unidad: 'kg' },
                'CMC': { valor: 0.500, unidad: 'kg' },
                'Carragenina': { valor: 0.250, unidad: 'kg' },
                'MG': { valor: 3.500, unidad: 'kg' },
                'Agente de batido': { valor: 3.500, unidad: 'kg' },

            }
        },
        'cool-blanca-fluida': {
            nombre: 'Blanca Cool cream fluida',
            ingredientesVisibles: {
                'Leche fluida': { valor: 700, unidad: 'l' },
                'Azúcar': { valor: 180, unidad: 'kg' },
                'Glucosa': { valor: 50, unidad: 'kg' },
                'Manteca': { valor: 15, unidad: 'kg' },
                'Maltodextrina': { valor: 20, unidad: 'kg' },
            },
            ingredientesOcultos: {
                'Goma guar': { valor: 1, unidad: 'kg' },
                'CMC': { valor: 0.500, unidad: 'kg' },
                'Carragenina': { valor: 0.250, unidad: 'kg' },
                'MG': { valor: 3.500, unidad: 'kg' },
                'Agente de batido': { valor: 3.500, unidad: 'kg' },

            }
        },
        'cool-dulce-de-leche-fluida': {
            nombre: 'Dulce de Leche Cool cream fluida',
            ingredientesVisibles: {
                'Agua': { valor: 200, unidad: 'l' },
                'Leche fluida': { valor: 500, unidad: 'l' },
                'Azúcar': { valor: 145, unidad: 'kg' },
                'Glucosa': { valor: 25, unidad: 'kg' },
                'Manteca': { valor: 7.5, unidad: 'kg' },
                'Maltodextrina': { valor: 20, unidad: 'kg' },
                'Dulce de leche con nota': { valor: 100, unidad: 'kg' },
            },
            ingredientesOcultos: {
                'Goma guar': { valor: 1, unidad: 'kg' },
                'CMC': { valor: 0.500, unidad: 'kg' },
                'Carragenina': { valor: 0.250, unidad: 'kg' },
                'MG': { valor: 3.500, unidad: 'kg' },
                'Agente de batido': { valor: 3.500, unidad: 'kg' },

            }

        },
        'cool-dulce-de-leche-polvo': {
            nombre: 'Dulce de Leche Cool cream polvo',
            ingredientesVisibles: {
                'Agua': { valor: 631, unidad: 'l' },
                'Leche en polvo': { valor: 95, unidad: 'kg' },
                'Azúcar': { valor: 120, unidad: 'kg' },
                'Glucosa': { valor: 25, unidad: 'kg' },
                'Manteca': { valor: 15, unidad: 'kg' },
                'Maltodextrina': { valor: 20, unidad: 'kg' },
                'Dulce de leche con nota': { valor: 100, unidad: 'kg' },
            },
            ingredientesOcultos: {
                'Goma guar': { valor: 1, unidad: 'kg' },
                'CMC': { valor: 0.500, unidad: 'kg' },
                'Carragenina': { valor: 0.250, unidad: 'kg' },
                'MG': { valor: 3.500, unidad: 'kg' },
                'Agente de batido': { valor: 3.500, unidad: 'kg' },

            }
        },
        'cool-chocolate-fluida': {
            nombre: 'Chocolate cool cream fluida',
            ingredientesVisibles: {
                'Leche fluida': { valor: 760, unidad: 'l' },
                'Azúcar': { valor: 180, unidad: 'kg' },
                'Manteca': { valor: 8, unidad: 'kg' },
                'Glucosa': { valor: 25, unidad: 'kg' },
                'Cacao en polvo': { valor: 10, unidad: 'kg' },

            },
            ingredientesOcultos: {
                'Goma guar': { valor: 1.450, unidad: 'kg' },
                'Goma xantica': { valor: 0.150, unidad: 'kg' },
                'carragenina': { valor: 0.250, unidad: 'kg' },
                'MG': { valor: 3.500, unidad: 'kg' },
            }

        },
        'cool-chocolate-polvo': {
            nombre: 'Chocolate cool cream polvo',
            ingredientesVisibles: {
                'Agua': { valor: 651, unidad: 'l' },
                'Leche en polvo': { valor: 100, unidad: 'kg' },
                'Azúcar': { valor: 160, unidad: 'kg' },
                'Manteca': { valor: 14, unidad: 'kg' },
                'Glucosa': { valor: 31, unidad: 'kg' },
                'Cacao en polvo': { valor: 10, unidad: 'kg' },

            },
            ingredientesOcultos: {
                'Goma guar': { valor: 1.450, unidad: 'kg' },
                'Goma xantica': { valor: 0.150, unidad: 'kg' },
                'carragenina': { valor: 0.250, unidad: 'kg' },
                'MG': { valor: 3.500, unidad: 'kg' },
            }

        }
    }
};

function mostrarSeccion(seccionId) {
    const secciones = document.querySelectorAll('main section');
    secciones.forEach(seccion => {
        seccion.classList.add('seccion-oculta');
    });

    document.getElementById(seccionId).classList.remove('seccion-oculta');
}

function verReceta() {
    const recetasSeleccionadas = document.querySelectorAll('#form-recetas input[name="receta"]:checked');
    const contenidoRecetaDiv = document.getElementById('contenido-receta');
    contenidoRecetaDiv.innerHTML = '';

    recetasSeleccionadas.forEach(receta => {
        const recetaId = receta.value;
        let recetaData;

        if (recetaId.includes('veneto')) {
            recetaData = recetas.veneto[recetaId];
        } else if (recetaId.includes('tunel')) {
            recetaData = recetas.tunel[recetaId];
        } else if (recetaId.includes('cool')) {
            recetaData = recetas.cool[recetaId];
        }

        const recetaDiv = document.createElement('div');
        recetaDiv.innerHTML = `<h3>${recetaData.nombre}</h3>`;

        const listaIngredientes = document.createElement('ul');
        for (const [ingrediente, { valor, unidad }] of Object.entries(recetaData.ingredientesVisibles)) {
            const li = document.createElement('li');
            li.textContent = `${ingrediente}: ${valor} ${unidad}`;
            listaIngredientes.appendChild(li);
        }

        recetaDiv.appendChild(listaIngredientes);
        contenidoRecetaDiv.appendChild(recetaDiv);
    });
}
function modificarIngredientes() {
    const valor = document.getElementById('input-modificar').value;
    if (!valor) {
        alert('Ingrese un valor válido.');
        return;
    }
    
    const factor = valor / 900;
    const recetasSeleccionadas = document.querySelectorAll('#form-recetas input[name="receta"]:checked');
    const ingredientesModificadosDiv = document.getElementById('ingredientes-modificados');
    ingredientesModificadosDiv.innerHTML = '';

    recetasSeleccionadas.forEach(receta => {
        const recetaId = receta.value;
        let recetaData;
        let tipo = '';

        if (recetaId.includes('veneto')) {
            tipo = 'veneto';
        } else if (recetaId.includes('tunel')) {
            tipo = 'tunel';
        } else if (recetaId.includes('cool')) {
            tipo = 'cool';
        }

        recetaData = recetas[tipo][recetaId];

        const recetaDiv = document.createElement('div');
        recetaDiv.innerHTML = `<h3>${recetaData.nombre} - Ingredientes Modificados</h3>`;

        const listaIngredientesModificados = document.createElement('ul');
        for (const [ingrediente, { valor, unidad }] of Object.entries(recetaData.ingredientesVisibles)) {
            const li = document.createElement('li');
            li.textContent = `${ingrediente}: ${(valor * factor).toFixed(2)} ${unidad}`;
            listaIngredientesModificados.appendChild(li);
        }

        for (const [ingrediente, { valor, unidad }] of Object.entries(recetaData.ingredientesOcultos)) {
            const li = document.createElement('li');
            li.textContent = `${ingrediente}: ${(valor * factor).toFixed(2)} ${unidad}`;
            listaIngredientesModificados.appendChild(li);
        }

        recetaDiv.appendChild(listaIngredientesModificados);
        ingredientesModificadosDiv.appendChild(recetaDiv);
    });
}
function accederSeccionOculta() {
    const clave = document.getElementById('clave').value;
    const ingredientesOcultosDiv = document.getElementById('ingredientes-ocultos');
    ingredientesOcultosDiv.innerHTML = '';

    if (clave === 'Venetosa') {
        const recetasSeleccionadas = document.querySelectorAll('#form-recetas input[name="receta"]:checked');

        recetasSeleccionadas.forEach(receta => {
            const recetaId = receta.value;
            let recetaData;
            let tipo = '';

            if (recetaId.includes('veneto')) {
                tipo = 'veneto';
            } else if (recetaId.includes('tunel')) {
                tipo = 'tunel';
            } else if (recetaId.includes('cool')) {
                tipo = 'cool';
            }

            recetaData = recetas[tipo][recetaId];

            const recetaDiv = document.createElement('div');
            recetaDiv.innerHTML = `<h3>${recetaData.nombre}</h3>`;

            const listaIngredientesOcultos = document.createElement('ul');
            for (const [ingrediente, { valor, unidad }] of Object.entries(recetaData.ingredientesOcultos)) {
                const li = document.createElement('li');
                li.textContent = `${ingrediente}: ${valor} ${unidad}`;
                listaIngredientesOcultos.appendChild(li);
            }

            recetaDiv.appendChild(listaIngredientesOcultos);
            ingredientesOcultosDiv.appendChild(recetaDiv);
        });

        ingredientesOcultosDiv.classList.remove('seccion-oculta');
    } else {
        alert('Clave incorrecta.');
    }
}

function cargarIngredientes() {
    const recetaSeleccionada = document.getElementById('receta-ajustes').value;
    const tablaIngredientes = document.getElementById('tabla-ingredientes');
    tablaIngredientes.innerHTML = '';

    let tipo = '';
    if (recetaSeleccionada.includes('veneto')) {
        tipo = 'veneto';
    } else if (recetaSeleccionada.includes('tunel')) {
        tipo = 'tunel';
    } else if (recetaSeleccionada.includes('cool')) {
        tipo = 'cool';
    }

    let recetaData = recetas[tipo][recetaSeleccionada];

    const tbody = document.createElement('tbody');
    for (const [ingrediente, { valor, unidad }] of Object.entries(recetaData.ingredientesVisibles)) {
        const fila = document.createElement('tr');

        const celdaIngrediente = document.createElement('td');
        celdaIngrediente.textContent = ingrediente;
        fila.appendChild(celdaIngrediente);

        const celdaValor = document.createElement('td');
        const inputValor = document.createElement('input');
        inputValor.type = 'number';
        inputValor.value = 0;  // Valor inicial 0
        inputValor.id = `ajuste-${ingrediente}`;
        celdaValor.appendChild(inputValor);
        fila.appendChild(celdaValor);

        const celdaUnidad = document.createElement('td');
        celdaUnidad.textContent = unidad;
        fila.appendChild(celdaUnidad);

        const celdaDisponible = document.createElement('td');
        const inputDisponible = document.createElement('input');
        inputDisponible.type = 'number';
        inputDisponible.value = 0; // Valor inicial 0
        inputDisponible.id = `disponible-${ingrediente}`;
        celdaDisponible.appendChild(inputDisponible);
        fila.appendChild(celdaDisponible);

        tbody.appendChild(fila);
    }

    tablaIngredientes.appendChild(tbody);
}

function calcularFaltantes() {
    const recetaSeleccionada = document.getElementById('receta-ajustes').value;
    let tipo = '';
    if (recetaSeleccionada.includes('veneto')) {
        tipo = 'veneto';
    } else if (recetaSeleccionada.includes('tunel')) {
        tipo = 'tunel';
    } else if (recetaSeleccionada.includes('cool')) {
        tipo = 'cool';
    }

    let recetaData = recetas[tipo][recetaSeleccionada];
    const resultadoAjustes = document.getElementById('resultado-ajustes');
    resultadoAjustes.innerHTML = '';

    const faltantes = {};
    for (const [ingrediente, { valor }] of Object.entries(recetaData.ingredientesVisibles)) {
        const inputValor = document.getElementById(`ajuste-${ingrediente}`);
        const valorIngresado = parseFloat(inputValor.value);

        const inputDisponible = document.getElementById(`disponible-${ingrediente}`);
        const valorDisponible = parseFloat(inputDisponible.value);

        const valorRestante = valor - valorDisponible;

        if (valorIngresado < valorRestante) {
            faltantes[ingrediente] = valorRestante - valorIngresado;
        }
    }

    const listaFaltantes = document.createElement('ul');
    for (const [ingrediente, faltante] of Object.entries(faltantes)) {
        const li = document.createElement('li');
        li.textContent = `${ingrediente}: ${faltante} kg`;
        listaFaltantes.appendChild(li);
    }

    resultadoAjustes.appendChild(listaFaltantes);
}

function calcularIngredientesReproceso() {
    const recetaSeleccionada = document.getElementById('receta-reproceso').value;
    const solidosNecesarios = parseFloat(document.getElementById('solidos-necesarios').value);
    const volumenReproceso = parseFloat(document.getElementById('volumen-reproceso').value);
    const brixReproceso = parseFloat(document.getElementById('brix-reproceso').value);
    const ingredientesTableReproceso = document.getElementById('ingredientesTable-reproceso').getElementsByTagName('tbody')[0];

    ingredientesTableReproceso.innerHTML = '';

    const solidosActuales = (volumenReproceso * brixReproceso) / 100;
    const solidosFaltantes = solidosNecesarios - solidosActuales;

    let tipo = '';
    if (recetaSeleccionada.includes('veneto')) {
        tipo = 'veneto';
    } else if (recetaSeleccionada.includes('tunel')) {
        tipo = 'tunel';
    } else if (recetaSeleccionada.includes('cool')) {
        tipo = 'cool';
    }

    let recetaData = recetas[tipo][recetaSeleccionada];

    for (const [ingrediente, { valor }] of Object.entries(recetaData.ingredientesVisibles)) {
        const fila = document.createElement('tr');

        const celdaIngrediente = document.createElement('td');
        celdaIngrediente.textContent = ingrediente;
        fila.appendChild(celdaIngrediente);

        const celdaFaltante = document.createElement('td');
        const faltante = (solidosFaltantes * valor) / solidosNecesarios;
        celdaFaltante.textContent = `${faltante.toFixed(2)} kg`;
        fila.appendChild(celdaFaltante);

        ingredientesTableReproceso.appendChild(fila);
    }
}
